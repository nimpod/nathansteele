import React, {Component, useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { ReactComponent as OpenDropdownIcon } from "../../icons/openDropdown.svg";
import SearchBox from './SearchBox';
import BlogPostList from './BlogPostList';
import { Helpers } from 'react-scroll';
import { removeDuplicatesFromArray } from '../../js/helpers';
import SearchBoxTagFilterListElement from './SearchBoxTagFilterListElement';

let filteredPosts = [];

class Blog extends Component {   

    /**
     * Constructor for the 'Blog' component
     * @param {Incoming properties} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            filteredPostsState: null,
            tagCategories: null,
            tagCategoryDefault: "AllTags",
            tagCategorySelected: "AllTags",
            tagCategoriesSelected: new Set(),
            searchPost: '',
            searchBoxContainsText: false,
            searchBoxWasClicked: false
        }
    }
    
    /**
     * ?????
     * @param {*} e 
     */
    toggleTag = (e) => {
        var tagSeleceted = e.target.classList[0];
        console.log('Selected... ' + tagSeleceted);
        var { posts } = this.props;

        var newArray = posts.filter(function (el) {
            let tags = el.tags;
            
            for (let i = 0; i < tags.length; i++)
                return tags[i] === tagSeleceted;
        });

        console.log(newArray);
    }
    
    /**
     * This is called after the component is rendered (i.e. only called once at beginning)
     */
    getListOfTagCategories() {
        const { posts } = this.props;       // json data from redux data store
        const uniqueTags = new Set();        // a set to store 1 of each type of tag that exists across the entire blog archive
        
        // add default tag...
        uniqueTags.add(this.state.tagCategoryDefault);

        // store each tag category once...
        this.props.posts.map((p => {
            // console.log('DEBUGGING: ', p.tags);
            p.tags.map((t => {
                uniqueTags.add(t);
            }));
        }));

        // sort the set of tags alphabetically, cause why not.
        const uniqueTagsSorted = Array.from(uniqueTags).sort();

        return uniqueTagsSorted;
        /*
        this.setState({tagCategories:
            arrayOfTags.map(tag => {
                return (
                    <span className="filter-tag-btn tag" key={tag} onClick={this.handleTagFilter}>
                        <span className={tag}>
                            { tag }
                            <div className="inline-svg plus">
                                <PlusIcon />
                            </div>
                            <div className="inline-svg cross" hidden={true}>
                                <CrossIcon />
                            </div>
                        </span>
                    </span>
                );
            }) 
        });*/
        
    }

    /**
     * Handle tags (not working properly atm...)
     * @param {Event} e 
     */
    handleTagFilter = (e) => {
        let crossIcon = null;
        let plusIcon = null;
        let tagSelected = e.target.classList[0];
        
        console.log(e.target)

        if (e.target.localName === "span" && e.target.childNodes[0].nodeName === "#text") {
            crossIcon = e.target.childNodes[1]; 
            plusIcon = e.target.childNodes[2];
        } else if (e.target.localName === "svg" && e.target.parentElement.classList.contains('inline-svg')) {
            crossIcon = e.target.parentElement;
            plusIcon = e.target.parentElement.nextSibling;
        } else {
            crossIcon = document.getElementsByClassName('cross')[0];
            plusIcon = document.getElementsByClassName('plus')[0];
        }

        console.log(crossIcon)
        console.log(plusIcon)

        // clicked tag with intention of 'removing it'
        if (crossIcon !== undefined) {
            if (crossIcon.hidden === true) {
                console.log('HEEEEEEEEEEEEEEEEEEEEERE 1');
                this.setState({tagCategoriesSelected: this.state.tagCategoriesSelected.delete(tagSelected)});
                
                crossIcon.removeAttribute('hidden');
                plusIcon.setAttribute('hidden', true);
            }
            
            // clicked tag with intention of 'adding it'
            else {
                console.log('HEEEEEEEEEEEEEEEEEEEEERE 2');
    
                console.log(this.state.tagCategoriesSelected, tagSelected);
                this.setState({tagCategoriesSelected: this.state.tagCategoriesSelected.add(tagSelected)});
    
                crossIcon.setAttribute('hidden', true);
                plusIcon.removeAttribute('hidden');
            }
        }
    }

    /**
     * New text handler for the searchbox
     * @param {Event} e 
     */
    handleSearchBoxInput = (e) => {
        // get user input and update state
        this.setState({searchPost: e.target.value});
        
        // no text is in the searchbox, so set state to false
        if (e.target.value.length == 0) {
            this.setState({searchBoxContainsText: false});
        }
        // there's some text in the searchbox, so set state to true
        else if (e.target.value.length > 0) {
            this.setState({searchBoxContainsText: true});
        }
    }

    /**
     * On click handler for clicking into the searchbox
     * @param {Event} e 
     */
    handleSearchBoxClick = (e) => {
        ///console.log('YOU CLICKED SEARCHBOX (BEFORE): this.state.searchBoxContainsText = ' + this.state.searchBoxContainsText + ', this.state.searchBoxWasClicked = ' + this.state.searchBoxWasClicked);
        let copyOfThis = this;

        // no text is in the searchbox, so set state to false
        if (this.state.searchBoxContainsText == false) {

            // access .posts-container
            var postsContainer = document.querySelector('.posts-container');
            if (postsContainer !== null) {

                // find the inputbox (where the actual text goes in...)
                let inputbox = postsContainer.querySelector('.posts-container input');
                
                window.addEventListener('click', function(e) {   
                    if (inputbox.contains(e.target)) {
                        ///console.log('Clicked input box...')
                        copyOfThis.setState({searchBoxWasClicked: true});
                    } else {
                        ///console.log('Clicked outside input box...')
                        copyOfThis.setState({searchBoxWasClicked: false});
                    }
                });
            }
        }
    }

    /**
     * Stuff to do with colour of searchbox...
     * @param {Event} e 
     */
    handleSearchBoxColours() {
        // access .posts-container
        var postsContainer = document.querySelector('.posts-container');
        if (postsContainer !== null) {
            // find the inputbox (where the actual text goes in...)
            let inputbox = postsContainer.querySelector('.posts-container input');

            if (inputbox !== null) {
                // if it has been clicked...
                if (this.state.searchBoxWasClicked) {
                    inputbox.classList.add('activated');
                } else {
                    inputbox.classList.remove('activated');
                }
            }
        }
    }
    
    /**
     * ...
     * @param {Event} e 
     */
    toggleDropdownList = (e) => {
        // add/remove .active class to the list...
        document.querySelector('.tag-filter-options-list-container').classList.toggle('active');
        
        // add/remove .active class to the button...
        document.querySelector('.filter-by-tag-button > button').classList.toggle('active');
    }

    /**
     * Helper function: make all table rows visible
     * @param {*} tableRows 
     */
    showAllTableRows(tableRows) {
        for (let i = 0; i < this.props.posts.length; i++) {
            let tr = tableRows[i];
            if (tr !== undefined) {
                tr.setAttribute('data-filter', 'visible');
            }
        }
    }

    /**
     * Helper function: toggle the selected tag
     * @param {*} selectedTag 
     */
    toggleSelectedTag(selectedTag) {
        if (selectedTag.classList.contains('selectedThisCategory')) {
            selectedTag.classList.remove('selectedThisCategory')
        } else {
            selectedTag.classList.add('selectedThisCategory')
        }
    }

    /**
     * Helper function: either make a table row visible or invisible
     * @param {*} selectedTag 
     * @param {*} tr 
     */
    toggleTableRow(selectedTag, tr) {
        if (selectedTag.classList.contains('selectedThisCategory')) {
            tr.setAttribute('data-filter', 'invisible')
        } else {
            tr.setAttribute('data-filter', 'visible')
        }
    }

    /**
     * Helper function: make a particular table row visible
     * @param {*} tr 
     */
    showTableRow(tr) {
        tr.setAttribute('data-filter', 'visible');
    }

    /**
     * Helper function: disable all the filter buttons
     * @param {*} tagCategoryFilterButtons 
     */
    disableAllFilterBtns(tagCategoryFilterButtons) {
        tagCategoryFilterButtons.forEach(function(btn) {
            btn.classList.remove('selectedThisCategory');
        })
    }

    /**
     * Adjust paddingLeft property on inputbox text length
     * TODO: make this less shit!
     * @param {*} selectedTagText 
     */
    adjustPaddingOnInputboxText(selectedTagText) {
        let inputbox = document.querySelector('.posts-container input');
        let len = selectedTagText.length;
        console.log(len);
        let newPadding = 0;

        if (len >= 0 && len <= 3) {
            newPadding = len * 1.5;
        } else if (len >= 4 && len <= 5) {
            newPadding = len * 1.4;
        } else if (len >= 6 && len <= 8) {
            newPadding = len * 1.25;
        } else if (len >= 9 && len <= 11) {
            newPadding = len * 1.05;
        } else if (len >= 12 && len <= 15) {
            newPadding = len * 1.0;
        } else if (len >= 16 && len <= 18) {
            newPadding = len * 0.9;
        } else {
            newPadding = len * 0.6;
        }
        inputbox.style.paddingLeft = newPadding + 'rem';
    }


    /**
     * OnClick handler for filter button
     * This function is called when user clicks tag, with the intention of filtering blog posts
     * @param {*} e 
     */
    clickedTagFilter = (e) => {
        // get list of rows in blog post table
        let tableRows = document.querySelector('.posts-container table tbody').childNodes;
        
        // get list of tag category filter buttons
        let tagCategoryFilterButtons = document.querySelector('.tag-filter-options-list').childNodes;

        // find tag category the user selected...
        let selectedTag = e.target.parentElement.parentElement;
        let selectedTagText = selectedTag.classList[0].split('-')[3];

        // remove .active class from all tag categories...
        this.disableAllFilterBtns(tagCategoryFilterButtons);

        // toggle .active class on the tag category selected...
        this.toggleSelectedTag(selectedTag);
        
        // base case tag category...
        if (selectedTagText.toUpperCase() == this.state.tagCategoryDefault.toUpperCase()) {
            // show all tr's because user choose 'AllTags'
            this.showAllTableRows(tableRows);
            
            // update state
            this.setState({tagCategorySelected: this.state.tagCategoryDefault});

            // adjust padding on inputbox text
            this.adjustPaddingOnInputboxText(selectedTagText);

            return;
        }

        // update state
        this.setState({tagCategorySelected: selectedTagText});

        // adjust padding on inputbox text
        this.adjustPaddingOnInputboxText(selectedTagText);

        // do the filtering (iterate over blog posts via props...)
        for (let i = 0; i < filteredPosts.length; i++) {
            let tr = tableRows[i];
            let tagsInPost = filteredPosts[i]['tags'];

            if (tr !== undefined) {
                // (iterate over list of tags per blog post...)
                for (let j = 0; j < tagsInPost.length; j++) {
                    if (tagsInPost[j] == selectedTagText) {
                        // match, make row visible
                        this.showTableRow(tr);
                        break;
                    } else {
                        // no match, make row invisible
                        this.toggleTableRow(selectedTag, tr);
                    }
                }
            }
        }
    }

    /**
     * ComponentDidMount function...
     */
    componentDidMount() {
        // set the 'AllTags' filter button as default filter...
        let tagCategoryFilterButtons = document.querySelector('.tag-filter-options-list').childNodes;
        tagCategoryFilterButtons[0].classList.add('selectedThisCategory');
    }


    /**
     * The Render() function, content rendered to screen
     */
    render() {
        // sort by date...
        let filteredPostsBySorting = Array.from(this.props.posts).sort((a,b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        }).reverse();
        filteredPosts = filteredPostsBySorting;
        
        // this is how the searching function actually works...
        let filteredPostsBySearch = filteredPosts.filter((p) => {
            const arrayOfTags = Array.from(this.state.tagCategoriesSelected);
            // console.log('DEBUGGING: ', arrayOfTags, p.tags, p.tags.filter(e => arrayOfTags.indexOf(e) !== -1).length > 0);
            let isTitleEqualToSearchbox = p.title.toLowerCase().includes(this.state.searchPost.toLowerCase());
            let isSelectedTagMatching = p.tags.filter(e => arrayOfTags.indexOf(e) !== -1).length > 0;
            // console.log('DEBUGGING: ', isTitleEqualToSearchbox, isSelectedTagMatching);

            return (isTitleEqualToSearchbox && arrayOfTags.length === 0) || isSelectedTagMatching;
        });
        filteredPosts = filteredPostsBySearch;

        // get list of tags...
        let uniqueTagCategories = this.getListOfTagCategories();

        // deal with the colours of searchbox...
        this.handleSearchBoxColours();

        return(
            <div className="page-wrapper blog">
                <div className="section-inner">
                    <div className="posts-container">
                        <div className="controls" onClick={this.handleSearchBoxClick}>
                            <SearchBox 
                                tagSelected={this.state.tagCategorySelected}
                                tags={uniqueTagCategories}
                                handleSearchBoxInput={this.handleSearchBoxInput}
                                clickedTagFilter={this.clickedTagFilter}
                                placeholderText="search..."
                            />
                        </div>
                        <div className='container-intro'>
                            <h3 className='page-title'>Blog</h3>
                            <h6 className='page-text-small'>{filteredPosts.length} posts</h6>
                        </div>
                        <table>
                            <tbody>
                                <BlogPostList 
                                    filteredPosts={filteredPosts} 
                                    handleTagFilter={this.handleTagFilter}
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}

/**
 * [function: Connect this React component to the Redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Blog)
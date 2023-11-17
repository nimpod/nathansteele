import React, { Component } from 'react';
import { connect }  from 'react-redux';

import { ReactComponent as ArrowRightIcon } from "../../icons/arrowRight.svg";
import { getListOfTagCategories } from '../../js/helpers';
import BlogPostList from './BlogPostList';
import SearchBoxTagFilterListElement from './SearchBoxTagFilterListElement';


class Blog extends Component {   
    state = {
        // array of posts (ordered by newest dates first, oldest dates last)
        __filtered_posts: Array.from(this.props.posts)
            .sort((a,b) => { return new Date(a.date).getTime() - new Date(b.date).getTime() })
            .reverse(),

        __filtered_posts_len: Array.from(this.props.posts).length,

        // tag category stuff...
        __tag_category_default: "AllTags",
        __tag_category_selected: "AllTags",
        __tag_categories_selected: new Set(),

        // search stuff...
        __search_box_contains_text: false,
        __search_box_was_clicked: false,
        __search_post: ""
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

        return newArray;
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
                //console.log('HEEEEEEEEEEEEEEEEEEEEERE 1');
                this.setState({__tag_categories_selected: this.state.__tag_categories_selected.delete(tagSelected)});
                crossIcon.removeAttribute('hidden');
                plusIcon.setAttribute('hidden', true);
            }
            
            // clicked tag with intention of 'adding it'
            else {
                //console.log('HEEEEEEEEEEEEEEEEEEEEERE 2');
                //console.log(this.state.__tag_categories_selected, tagSelected);
                this.setState({__tag_categories_selected: this.state.__tag_categories_selected.add(tagSelected)});
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
        this.setState({__search_post: e.target.value});
        
        // no text is in the searchbox, so set state to false
        if (e.target.value.length === 0) {
            this.setState({__search_box_contains_text: false});
        }
        // there's some text in the searchbox, so set state to true
        else if (e.target.value.length > 0) {
            this.setState({__search_box_contains_text: true});
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
        if (this.state.__search_box_contains_text === false) {

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
                if (this.state.__search_box_was_clicked) {
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
        if (selectedTagText.toUpperCase() === this.state.__tag_category_default.toUpperCase()) {
            // show all tr's because user choose 'AllTags'
            this.showAllTableRows(tableRows);
            
            // update tag category selected state...
            this.setState({tagCategorySelected: this.state.__tag_category_default});

            // update posts length displayed state...
            this.setState({ __filtered_posts_len: this.state.__filtered_posts.length })
            
            // exit function
            return;
        }

        // update state
        this.setState({tagCategorySelected: selectedTagText});

        // do the filtering (iterate over blog posts via props...)
        let count = 0;
        for (let i = 0; i < this.state.__filtered_posts.length; i++) {
            let tr = tableRows[i];
            let tagsInPost = this.state.__filtered_posts[i]['tags'];

            if (tr !== undefined) {
                // (iterate over list of tags per blog post...)
                for (let j = 0; j < tagsInPost.length; j++) {
                    if (tagsInPost[j] === selectedTagText) {
                        // match, make row visible
                        this.showTableRow(tr);
                        count += 1;
                        break;
                    } else {
                        // no match, make row invisible
                        this.toggleTableRow(selectedTag, tr);
                    }
                }
            }
        }

        // update len for UI
        this.setState(prevState => { return {  __filtered_posts_len: count }})
    }

    /**
     * ComponentDidMount function...
     */
    componentDidMount() {
        // set the 'AllTags' filter button as default filter...
        let tagCategoryList = document.querySelector('.tag-filter-options-list');
        if (tagCategoryList !== null) {
            let tagCategoryFilterButtons = tagCategoryList.childNodes;
            tagCategoryFilterButtons[0].classList.add('selectedThisCategory');
        }
    }

    /**
     * Move filters container left or right...
     * @param {*} e 
     */
    moveFiltersContainer(movement) {
        // find left & right buttons...
        let btnLeft = document.querySelector('.scroll-through-tag-filters-btn.btn-move-left');
        let btnRight = document.querySelector('.scroll-through-tag-filters-btn.btn-move-right');
        
        // find container of the filter tag buttons...
        let container = document.querySelector('.tag-filter-options-list-container');

        // actually move the container...
        container.scrollLeft += movement;
        
        // show left button when user starts moving right...
        if (container.scrollLeft > movement/2) {
            if (btnLeft !== null && btnRight !== null) {
                btnLeft.classList.add('active');
                btnRight.classList.add('active');
            }
        }

        // hide left button when user is at beginning...
        if (container.scrollLeft === 0) {
            if (btnLeft !== null && btnRight !== null) {
                btnLeft.classList.remove('active');
                btnRight.classList.add('active');
            }
        }
        
        // hide right button when user is at end...
        if (container.scrollLeft >= container.scrollLeftMax) {
            if (btnRight !== null) {
                btnRight.classList.remove('active');
            }
        }
    }

    /**
     * The Render() function, content rendered to screen
     */
    render() {
        // this is how the searching function actually works...
        let filteredPostsBySearch = this.state.__filtered_posts.filter((p) => {
            const arrayOfTags = Array.from(this.state.__tag_categories_selected);
            // console.log('DEBUGGING: ', arrayOfTags, p.tags, p.tags.filter(e => arrayOfTags.indexOf(e) !== -1).length > 0);
            let isTitleEqualToSearchbox = p.title.toLowerCase().includes(this.state.__search_post.toLowerCase());
            let isSelectedTagMatching = p.tags.filter(e => arrayOfTags.indexOf(e) !== -1).length > 0;
            // console.log('DEBUGGING: ', isTitleEqualToSearchbox, isSelectedTagMatching);
            return (isTitleEqualToSearchbox && arrayOfTags.length === 0) || isSelectedTagMatching;
        });

        // get list of unique tags (i.e. no duplicates)...
        let uniqueTagCategories = getListOfTagCategories(this.props.posts, this.state.__tag_category_default);

        // deal with the colours of searchbox...
        this.handleSearchBoxColours();

        return(
            <div className="page-wrapper blog">
                <div className="section-inner">
                    <div className="frontpage posts-container">
                        <div className='posts-header-container'>
                            <div className='posts-header'>
                                <div className='container-intro'>
                                    <div className='container-intro-text'>
                                        <h3 className='page-title'>My blog</h3>
                                        <h6 className='page-text-small'>{this.state.__filtered_posts_len} posts</h6>
                                    </div>
                                    <div className="controls" onClick={this.handleSearchBoxClick}>
                                        <div className="searchbox">
                                            <input
                                                onChange={this.handleSearchBoxInput} 
                                                placeholder="search by blog post title..." 
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='tag-filter-options-list-container'>
                                    <div className='btn-move-left scroll-through-tag-filters-btn' onClick={() => this.moveFiltersContainer(-80)}>
                                        <ArrowRightIcon className='invertable-icon' />
                                    </div>
                                    <ul className='tag-filter-options-list'>
                                        <SearchBoxTagFilterListElement
                                            clickedTagFilter={this.clickedTagFilter}
                                            tagSelected={this.tagCategorySelected}
                                            tags={uniqueTagCategories}
                                        />
                                    </ul>
                                    <div className='btn-move-right scroll-through-tag-filters-btn active' onClick={() => this.moveFiltersContainer(80)}>
                                        <ArrowRightIcon className='invertable-icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table>
                            <tbody>
                                <BlogPostList 
                                    filteredPosts={filteredPostsBySearch} 
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
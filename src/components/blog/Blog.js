import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import SearchBox from './SearchBox';
import BlogPostList from './BlogPostList';

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
    componentDidMount() {
        const { posts } = this.props;       // json data from redux data store
        const setOfTags = new Set();        // a set to store 1 of each type of tag that exists across the entire blog archive

        this.props.posts.map((p => {
            // console.log('DEBUGGING: ', p.tags);
            p.tags.map((t => {
                setOfTags.add(t);
            }));
        }));

        // sort the set of tags alphabetically, cause why not.
        const arrayOfTags = Array.from(setOfTags).sort();

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
        });
        console.log(arrayOfTags);
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
        console.log('YOU CLICKED SEARCHBOX (BEFORE): this.state.searchBoxContainsText = ' + this.state.searchBoxContainsText + ', this.state.searchBoxWasClicked = ' + this.state.searchBoxWasClicked);
        let copyOfThis = this;

        // no text is in the searchbox, so set state to false
        if (this.state.searchBoxContainsText == false) {

            // access .posts-container
            var postsContainer = document.querySelector('.posts-container');
            if (postsContainer !== null) {

                // find the inputbox (where the actual text goes in...)
                let searchbox = postsContainer.getElementsByClassName('searchbox')[0]
                let inputbox = searchbox.childNodes[0];
                
                window.addEventListener('click', function(e) {   
                    if (inputbox.contains(e.target)) {
                        // clicked inputbox
                        console.log('Clicked input box...')
                        copyOfThis.setState({searchBoxWasClicked: true});
                    } else {
                        // otherwise we must of clicked outside the inputbox
                        console.log('Clicked outside input box...')
                        copyOfThis.setState({searchBoxWasClicked: false});
                    }
                });
            }
        }
        
        else {
            
        }
    }

    /**
     * Stuff to do with colour of searchbox...
     * @param {Event} e 
     */
    handleSearchBoxColours = (e) => {
        // access .posts-container
        var postsContainer = document.querySelector('.posts-container');
        if (postsContainer !== null) {
            // find the inputbox (where the actual text goes in...)
            let searchbox = postsContainer.getElementsByClassName('searchbox')[0]
            let inputbox = searchbox.childNodes[0];
            
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
    
    render() {
        // this is how the searching function actually works...
        let filteredPosts = this.props.posts.filter((p) => {
            const arrayOfTags = Array.from(this.state.tagCategoriesSelected);
            // console.log('DEBUGGING: ', arrayOfTags, p.tags, p.tags.filter(e => arrayOfTags.indexOf(e) !== -1).length > 0);
            let isTitleEqualToSearchbox = p.title.toLowerCase().includes(this.state.searchPost.toLowerCase());
            let isSelectedTagMatching = p.tags.filter(e => arrayOfTags.indexOf(e) !== -1).length > 0;
            // console.log('DEBUGGING: ', isTitleEqualToSearchbox, isSelectedTagMatching);

            return (isTitleEqualToSearchbox && arrayOfTags.length === 0) || isSelectedTagMatching;
        });

        // deal with the colours of searchbox...
        this.handleSearchBoxColours();

        return(
            <div className="page-wrapper blog">
                <div className="section-inner">
                    <h2 className="page-title">Blog Posts</h2>
                    <div className="posts-container">
                        <div className="controls" onClick={this.handleSearchBoxClick}>
                            <SearchBox 
                                handleSearchBoxInput={this.handleSearchBoxInput} 
                                placeholderText="Search based on blog title..."
                            />
                        </div>
                        <table>
                            <tbody>
                                <BlogPostList filteredPosts={filteredPosts} handleTagFilter={this.handleTagFilter} />
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
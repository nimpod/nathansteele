import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect}  from 'react-redux'
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import SearchBox from './SearchBox';
import BlogPostList from './BlogPostList';

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredPostsState: null,
            tagCategories: null,
            tagCategoriesSelected: new Set(),
            searchPost: ''
        }
    }

    toggleTag = (e) => {
        var tagSeleceted = e.target.classList[0];
        console.log('Selected... ' + tagSeleceted);
        var { posts } = this.props;

        var newArray = posts.filter(function (el) {
            let tags = el.tags;
            
            for (let i = 0; i < tags.length; i++)
                return tags[i] == tagSeleceted;
        });

        console.log(newArray);
    }
    
    componentDidMount() {
        const { posts } = this.props;       // json data from redux data store
        const setOfTags = new Set();        // a set to store 1 of each type of tag that exists across the entire blog archive

        this.props.posts.map((p => {
            console.log(p.tags);
            p.tags.map((t => {
                setOfTags.add(t);
            }));
        }));

        // sort the set of tags alphabetically, cause why not.
        const arrayOfTags = Array.from(setOfTags).sort();

        this.setState({tagCategories:
            arrayOfTags.map(tag => {
                return (
                    <span className="filter-tag-btn tag" onClick={this.handleTagFilter}>
                        <span className={tag}>
                            { tag }
                            <div className="inline-svg plus">
                                <PlusIcon />
                            </div>
                            <div className="inline-svg cross" hidden="true">
                                <CrossIcon />
                            </div>
                        </span>
                    </span>
                );
            }) 
        });

        console.log(arrayOfTags);
    }

    handleSearchBoxInput = (e) => {
        // get user input and update state
        this.setState({searchPost: e.target.value});
    }

    handleTagFilter = (e) => {
        let crossIcon = null;
        let plusIcon = null;
        let tagSelected = e.target.classList[0];

        if (e.target.localName === "span" && e.target.childElementCount === 2) {
            crossIcon = e.target.childNodes[1];
            plusIcon = e.target.childNodes[2];
        } else if (e.target.localName === "svg" && e.target.parentElement.classList.contains('inline-svg')) {
            crossIcon = e.target.parentElement;
            plusIcon = e.target.parentElement.nextSibling;
        } else {
            crossIcon = document.getElementsByClassName('cross')[0];
            plusIcon = document.getElementsByClassName('plus')[0];
        }

        console.log(e.target);

        // clicked tag with intention of 'removing it'
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
    
    render() {
        let filteredPosts = this.props.posts.filter((p) => {
            const arrayOfTags = Array.from(this.state.tagCategoriesSelected);
            console.log(arrayOfTags, p.tags, p.tags.filter(e => arrayOfTags.indexOf(e) !== -1).length > 0);
            let isTitleEqualToSearchbox = p.title.toLowerCase().includes(this.state.searchPost.toLowerCase());
            let isSelectedTagMatching = p.tags.filter(e => arrayOfTags.indexOf(e) !== -1).length > 0;

            console.log(isTitleEqualToSearchbox, isSelectedTagMatching);

            return (isTitleEqualToSearchbox && arrayOfTags.length === 0) || isSelectedTagMatching;
        });

        return(
            <div className="page-wrapper blog">
                <h2 className="page-title center-me">Blog Archive</h2>
                <div className="controls">
                    <div className="tag-aquarium">
                        <div className="dropdown-btn-tag-categories">
                            <span>Filters</span>
                            <ArrowDownIcon className="inline-svg invertable-icon" />
                        </div>
                        <div className="dropdown-container-tag-categories">
                            { this.state.tagCategories }
                        </div>
                    </div>
                    <SearchBox handleSearchBoxInput={this.handleSearchBoxInput} placeholderText="Search..." />
                    {/* 
                    <div className="control-container filtering">
                        <p><strong>Filter by: </strong></p>
                        <div className="filter-tag-btn-group">
                            { this.state.tagCategories }
                        </div>
                    </div>
                    */}
                </div>
                <div className="posts-container">
                    <table>
                        <thead>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Tags</th>
                        </thead>
                        <tbody>
                            <BlogPostList filteredPosts={filteredPosts} handleTagFilter={this.handleTagFilter} />
                        </tbody>
                    </table>
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
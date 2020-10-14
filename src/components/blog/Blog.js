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
    
    componentWillMount() {
        const { posts } = this.props;       // json data from redux data store
        const setOfTags = new Set();        // a set to store 1 of each type of tag that exists across the entire blog archive

        /*
        for (let i = 0; i < posts.length; i++) {
            let tagsItem = posts[i].tags;
            // console.log(tagsItem);
        }
        // console.log(setOfTags);

        // sort the set of tags alphabetically, cause why not.
        const arrayOfTags = Array.from(setOfTags).sort();
        this.setState({tagCategoriesSelected: this.state.tagCategoriesSelected.concat(arrayOfTags)});

        this.setState({tagCategories:
            arrayOfTags.map(tag => {
                return (
                    <span className="filter-tag-btn tag" onClick={this.toggleTag}>
                        <span className={tag}>
                            { tag }
                            <div className="inline-svg inline-svg-plus">
                                <PlusIcon />
                            </div>
                            <div className="inline-svg inline-svg-times" hidden="true">
                                <CrossIcon />
                            </div>
                        </span>
                    </span>
                );
            }) 
        });
        */
    }

    handleSearchBoxInput = (e) => {
        // get user input and update state
        this.setState({searchPost: e.target.value});
    }

    handleTagFilter = (e) => {
        this.setState({tagCategoriesSelected: this.state.tagCategoriesSelected.add(e.target.classList[0])});
    }

    render() {
        // ||

        let filteredPosts = this.props.posts.filter((p) => {
            const arrayOfTags = Array.from(this.state.tagCategoriesSelected);
            console.log(arrayOfTags, p.tags, p.tags.filter(e => arrayOfTags.indexOf(e) !== -1).length > 0);
            // console.log(p.title, this.state.searchPost, p.title.toLowerCase().includes(this.state.searchPost.toLowerCase()));

            // return p.title.toLowerCase().includes(this.state.searchPost.toLowerCase()) || p.tags.filter(e => this.state.tagCategoriesSelected.indexOf(e) !== -1);
            return p.title.toLowerCase().includes(this.state.searchPost.toLowerCase()) || p.tags.filter(e => arrayOfTags.indexOf(e) !== -1).length > 0;
        });

        return(
            <div className="page-wrapper blog">
                <h2 className="page-title center-me">Blog Archive</h2>
                <div className="controls">
                    <div className="control-container sorting">
                        <p><strong>Sort by: </strong></p>
                        <div className="sort-btn-group">
                            <div className="sort-btn active"><span>Date</span></div>
                            <div className="sort-btn"><span>Tags</span></div>
                            <div className="sort-btn"><span>Title</span></div>
                        </div>
                    </div>
                    <div className="control-container searching">
                        <p><strong>Search: </strong></p>
                        <SearchBox handleSearchBoxInput={this.handleSearchBoxInput} placeholderText="Type in the title of a blog post!" />
                    </div>
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
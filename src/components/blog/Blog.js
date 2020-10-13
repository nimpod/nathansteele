import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect}  from 'react-redux'
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";

class Blog extends Component {

    toggleDropdownMenu = (e) => {
        var id = e.target.getAttribute("id");
        var dropdownMenus = document.getElementsByClassName('dropdown-menu');

        console.log(dropdownMenus);

        for (var i = 0; i < dropdownMenus.length; i++) {
            if (dropdownMenus[i].getAttribute('aria-labelledby') == id) {
                if (dropdownMenus[i].classList.contains('open')) {
                    dropdownMenus[i].classList.remove('open');
                } else {
                    dropdownMenus[i].classList.add('open');
                }
            }
        }
    }

    toggleTag = (e) => {
        var tagSeleceted = e.target.classList[0];
        console.log('Selected... ' + tagSeleceted);
        var { posts } = this.props;

        var newArray = posts.filter(function (el) {
            let tags = el.tags.split(';');
            
            for (let i = 0; i < tags.length; i++)
                return tags[i] == tagSeleceted;
        });

        console.log(newArray);
    }


    render() {
        const { posts } = this.props;       // json data from redux data store
        const setOfTags = new Set();        // a set to store 1 of each type of tag that exists across the entire blog archive
        
        const postsDisplayed = posts.map(p => {
            return (                
                <tr key={p.id}>
                    <td> {p.date} </td>
                    <td> 
                        {p.tags.split(';').map(function(tag, index) {
                            if (tag) {
                                setOfTags.add(tag.trim()); // I used the .trim() function here to remove whitespace, otherwise the set doesn't detect a duplicate tag
                                return <div className="tag" key={index} >
                                    <span className={tag}>
                                        { tag }
                                    </span> 
                                </div>
                            }
                        })}
                    </td>
                    <td> <Link to={'/blog/' + p.id}>{p.title}</Link> </td>
                </tr>
            )
        });
        console.log(typeof(postsDisplayed));
        console.log(setOfTags);

        // sort the set of tags alphabetically, cause why not.
        const arrayOfTags = Array.from(setOfTags).sort();

        const filterByTagButtons = arrayOfTags.map(tag => {
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
        });

        return(
            <div className="page-wrapper blog">
                <h2 className="page-title center-me">Blog Archive</h2>
                <div className="controls">
                    <div className="control-container filtering">
                        <p><strong>Filter by: </strong></p>
                        <div className="filter-tag-btn-group">
                        <div className="drawer-gradient"></div>
                            { filterByTagButtons }
                        </div>
                    </div>
                    <div className="control-container sorting">
                        <p><strong>Sort by: </strong></p>
                        <div className="sort-btn-group">
                            <div className="sort-btn active"><span>Date</span></div>
                            <div className="sort-btn"><span>Tags</span></div>
                            <div className="sort-btn"><span>Title</span></div>
                        </div>
                    </div>
                </div>
                <div className="posts-container">
                    <table>
                        <tbody>
                            { postsDisplayed }
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
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";

class BlogPostList extends Component {

    render() {
        let copyOfThis = this;
        return(
            this.props.filteredPosts.map((p => {
                return (
                    <tr key={p.id}>
                        <td> {p.date} </td>
                        <td> <Link to={'/blog/' + p.id}>{p.title}</Link> </td>
                        <td> 
                            <div className="tags">
                                {p.tags.map(function(tag, index) {
                                    if (tag) {
                                        //setOfTags.add(tag.trim()); // I used the .trim() function here to remove whitespace, otherwise the set doesn't detect a duplicate tag
                                        return <div className="tag" key={index} onClick={copyOfThis.props.handleTagFilter}>
                                            <span className={tag}>
                                                { tag }
                                            </span> 
                                        </div>
                                    }
                                })}
                            </div>
                        </td>
                    </tr>
                )
            }))
        )
    }
}

export default BlogPostList;
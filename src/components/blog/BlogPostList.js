import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from "../../icons/arrowRightTriangle.svg";

class BlogPostList extends Component {

    render() {
        let copyOfThis = this;
        return(
            this.props.filteredPosts.map((p => {
                return (
                    <tr key={p.id} data-filter='active'>
                        <td>{p.date}</td>
                        <td> 
                            <Link to={'/blog/' + p.id}>{p.title}</Link>
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
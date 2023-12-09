import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { get_blog_post_id } from '../../js/helpers.js';

class BlogPostList extends Component {

    render() {
        let copyOfThis = this;
        
        return(
            this.props.filteredPosts.map((p => {
                // reconstruct review id from title
                let postId = get_blog_post_id(p.title)
                return (
                    <tr key={p.id} data-filter='visible'>
                        <Link to={'/blog/' + postId}>

                            {/* table cell for Date */}
                            <td className='blogs-tr-date'>
                                <span>{p.date}</span>
                            </td>

                            <td className='blogs-tr-vertical-line'>
                                <div></div>
                            </td>

                            {/* table cell for Title & Tags */}
                            <td className='blogs-tr-info'> 
                                <span>{p.title}</span>
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
                                        return <div>{index}</div>
                                    })}
                                </div>
                            </td>
                            {/*
                            <td className='show-more-info-td-blogpostlist'>
                                <ThreeDotsIcon className='invertable-icon' />
                            </td>
                            */}
                        </Link>
                    </tr>
                )
            }))
        )
    }
}

export default BlogPostList;
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import { ReactComponent as ArrowLeft } from "../../icons/arrowLeft.svg";

class BlogPost extends Component {

    /**
     * [function: function to handle click event for the button that deletes the post]
     */
    handleDeletePost = () => {
        this.props.deletePost(this.props.post_id)
    }

    render() {
        console.log(this.props);
        console.log(this.props.post.tags);
        
        return (
            <div className="page-wrapper blog-post">
                <div className="blog-post-info">
                    <Link to='/blog' className="back-to-previous-page" title="Back to blog">
                        <ArrowLeft className="invertable-icon" />
                    </Link>
                    <h3 className="blog-post-title">{this.props.post.title}</h3>
                    <p className="blog-post-date">{this.props.post.date}</p>
                    <div className="blog-post-tags">
                        {
                            this.props.post.tags.map((t => {
                                return <div className="tag">
                                    <span className={t}>{t}</span>
                                </div>
                            }))
                        }
                    </div>
                </div>
                <div className="blog-post-content" dangerouslySetInnerHTML={{__html: this.props.post.content}}></div>
                {/*
                <button className="delete-button" onClick={this.handleDeletePost}>
                    Delete post
                </button>
                */}
            </div>
        )
    }
}


/**
 * [function: Find the correct blog post from the redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;     // the id of the post being displayed in the UI
    return {
        post: state.posts.find(post => post.id === id)      // get the actual post data from the redux data store
    }
}

/**
 * [function: called when deleting a post]
 */
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (idOfPostToBeDeleted) => { dispatch({type: 'DELETE_POST', id: idOfPostToBeDeleted}) }      // dispatch an action whenever the deletePost() function is called
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)
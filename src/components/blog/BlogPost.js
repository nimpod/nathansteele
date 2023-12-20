import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeftV2 } from "../../icons/arrowLeftV2.svg";

import { ReactComponent as ArrowUp } from "../../icons/arrowUp.svg";
import { ReactComponent as Calendar } from "../../icons/calendar.svg";
import { get_random_RGBA, get_blog_post_id } from '../../js/helpers.js';

// Remove the annoying video recomendations that appear on the embedded youtube video
// I can't believe this actually works...
import $ from "jquery";
$(".my-most-listened-songs-of-this-year iframe").contents().find(".ytp-pause-overlay").remove();


class BlogPost extends Component {

    /**
     * Function to handle click event for the button that deletes the post
     */
    handleDeletePost = () => {
        this.props.deletePost(this.props.post_id)
    }

    /**
     * The CompponentDidMount function...
     */
    componentDidMount = () => {
        let quotesContainer = document.querySelector('.messiahs-handbook');

        if (quotesContainer !== null) {
            let items = quotesContainer.getElementsByTagName('li')
            
            for (let i = 0; i < items.length; i++) {
                items[i].style.backgroundColor =  get_random_RGBA(0.05);
            }
        }


        let backToTopBtn = document.getElementsByClassName("back-to-top-of-post")[0];
        let lastScrollTop = 0;
        if (backToTopBtn !== null) {
            window.addEventListener('scroll', function(e) {
                var st = window.pageYOffset || document.documentElement.scrollTop;
                // console.log('DEBUGGING: ', st, lastScrollTop);
                if (st > lastScrollTop) {
                    backToTopBtn.classList.add('active');
                    // backToTopBtn.classList.add('slideOutDown');
                    backToTopBtn.classList.remove('slideInUp');
                } else {
                    backToTopBtn.classList.remove('active');
                    // backToTopBtn.classList.remove('slideOutDown');
                    backToTopBtn.classList.add('slideInUp');
                }
                lastScrollTop = st <= 0 ? 0 : st;
              })
        }

        
        let blogPostInfoContainer = document.getElementsByClassName("blog-post-info")[0];
        let fuckKnows = 0;
        window.addEventListener('scroll', function(e) {
            var ypos = window.pageYOffset || document.documentElement.scrollTop;
            console.log('DEBUGGING: ', ypos, fuckKnows);
            if (ypos <= 130) {
                blogPostInfoContainer.classList.remove('notAtTop');
            } else {
                blogPostInfoContainer.classList.add('notAtTop');
            }
            fuckKnows = ypos <= 30 ? 0 : ypos;
        })
    }

    /**
     * The Render() function, content rendered to screen...
     */
    render() {
        console.log(this.props);
        // console.log(this.props.post.tags);
        
        return (
            <div className="page-wrapper blog-post">
                <div className="section-inner">
                    <div className="blog-post-info" id={'BlogPost' + this.props.post.id}>
                        <Link to={'#BlogPost' + this.props.post.id} className="custom-btn-1 back-to-top-of-post animated faster slideInUp" title='Click to go back to top of blog post'>
                            <ArrowUp className='invertable-icon' />
                            <span>Back to top</span>
                        </Link>
                        <Link to='/blog' className="custom-btn-1 back-to-previous-page" title="Back to blog">
                            <ArrowLeftV2 className="invertable-icon" />
                            <span>Back to blog list</span>
                        </Link>
                        <h3 className="blog-post-title">{this.props.post.title}</h3>
                        <span className="blog-post-date">
                            <Calendar className='invertable-icon' />
                            <span>{this.props.post.date}</span>
                        </span>
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
            </div>
        )
    }
}


/**
 * This function finds the correct blog post from the redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;     // the id of the post being displayed in the UI
    console.log(id);
    
    return {
        // post: state.posts.find(post => post.id === id)      // get the actual post data from the redux data store
        post: state.posts.find(post => get_blog_post_id(post.title) === id )
    }
}

/**
 * This function is called when deleting a post]
 */
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (idOfPostToBeDeleted) => { dispatch({type: 'DELETE_POST', id: idOfPostToBeDeleted}) }      // dispatch an action whenever the deletePost() function is called
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)
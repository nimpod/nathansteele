import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from "../../icons/arrowLeft.svg";
import { ReactComponent as ArrowLeftV2 } from "../../icons/arrowLeftV2.svg";

import { ReactComponent as ArrowUp } from "../../icons/arrowUp.svg";
import { ReactComponent as Calendar } from "../../icons/calendar.svg";
import { getRandomRGBA } from '../../js/helpers.js';


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
                items[i].style.backgroundColor =  getRandomRGBA(0.05);
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
    }

    /**
     * The Render() function, content rendered to screen...
     */
    render() {
        // console.log(this.props);
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
    return {
        post: state.posts.find(post => post.id === id)      // get the actual post data from the redux data store
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
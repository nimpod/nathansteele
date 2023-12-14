/**
 * This is a react component for rendering an individual film review
 */

import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from "../../icons/arrowLeft.svg";
import { ReactComponent as ArrowLeftV2 } from "../../icons/arrowLeftV2.svg";

import { ReactComponent as ArrowUp } from "../../icons/arrowUp.svg";
import { ReactComponent as Calendar } from "../../icons/calendar.svg";
import { get_random_RGBA, get_film_review_id } from '../../js/helpers.js';


class FilmsReview extends React.Component {

    /**
     * The Render() function, content rendered to screen...
     */
    render() {
        console.log(this.props);

        let poster_url = ""
        let title = ""
        let review_id_of_next_film = "";
        let review_id_of_prev_film = "";

        // use custom poster url if it exists...
        if (this.props.film.custom_poster_url !== undefined) {
            poster_url = this.props.film.custom_poster_url;
        }
        // use default posterUrl if I didnt specify one...
        if (this.props.film.custom_poster_url == undefined) {
            poster_url = this.props.film.poster_url;
        }
        
        // use custom title if it exists...
        if (this.props.film.title_displayed !== undefined) {
            title = this.props.film.title_displayed;
        } else {
            title = this.props.film.title;
        }

        // id of next/previous films...
        if (this.props.film.review_id_of_next_film !== undefined) {
            review_id_of_next_film = this.props.film.review_id_of_next_film;
        }
        if (this.props.film.review_id_of_prev_film !== undefined) {
            review_id_of_prev_film = this.props.film.review_id_of_prev_film;
        }
    
        return (
            <div className="page-wrapper film-review">
                <div className="section-inner">
                    <div className='review-displayed'>

                        {/* Poster */}
                        <div className='review-filmPoster'>
                            <picture className='filmPoster'>
                                <img src={poster_url} />
                            </picture>
                        </div>

                        {/* Prev review link */}
                        <div className='prev-review-link' title="Click to go to previous film in toplist">
                            <Link to={'/films/' + review_id_of_prev_film}>
                                <p>&lt;</p>
                            </Link>
                        </div>

                        {/* Review content */}                        
                        <div className='review-allContent'>
                            {/*}
                            <div onClick={() => this.props.history.goBack()} className="custom-btn-1 back-to-previous-page" title="Back to toplist">
                                <ArrowLeftV2 className="invertable-icon" />
                            </div>
                            */}
                            <Link to='/films' className="custom-btn-1 back-to-previous-page" title="Back to toplist">
                                <ArrowLeftV2 className="invertable-icon" />
                                {/*} 
                                <span>Back to toplist</span>
                                */}
                            </Link>

                            {/* Film details */}
                            <div className='film-details'>
                                <div className='film-details-header'>
                                    <p className='film-title' title="Title">{title}</p>
                                    <p className='film-year' title="Release year">({this.props.film.year})</p>
                                </div>
                                <div className='film-details-header-2'>
                                    <div className='film-details-more'>
                                        <div className='film-duration' title="Duraton in minutes">
                                            {this.props.film.duration} mins
                                        </div>
                                        <div className='film-language' title="Language">
                                            <div className='language-tag'>{this.props.film.language}</div>
                                        </div>
                                        <div className='film-directors' title='Directors'>
                                            {this.props.film.directors.map(director => {
                                                return <div className='director-tag'>{director}</div>
                                            })}
                                        </div>
                                        <div className='film-genres' title='Genres'>
                                            {this.props.film.genres.map(genre => {
                                                return <div className='genre-tag'>{genre}</div>
                                            })}
                                        </div>
                                        <div className='links' title="Links">
                                            <a className='film-imdb-link' href={this.props.film.IMDB_url} target='_blank'>IMDb</a>
                                            <a className='film-tmdb-link' href={this.props.film.TMDB_url} target='_blank'>TMDb</a>
                                            <a className='film-letterboxd-link' href={this.props.film.letterboxd_url} target='_blank'>Letterboxd</a>
                                        </div>
                                    </div>
                                    <div className='film-details-myData'>
                                        <div className='filmPosition generic-hover' title='Position in my list'>
                                            <Link to='/films'>
                                                <span>#{this.props.film.position}</span>
                                                <span>in my toplist</span>
                                            </Link>
                                        </div>
                                        <div className='filmMyRating' title='My rating'>
                                            <span>{this.props.film.my_rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Tags */}
                            <div className='review-my-tags' title="My tags">
                                {this.props.film.my_tags.map(tag => {
                                    return <div className='my-tag'>{tag}</div>
                                })}
                            </div>
                            
                            {/* Gradual interest graph */}
                            <div className='filmGradualInterest' title=''>
                                <p>{this.props.film.gradual_interest} ({this.props.film.gradual_interest_average})</p>
                            </div>

                            {/* The actual review content!! */}
                            <div className='review-content-container' dangerouslySetInnerHTML={{__html: this.props.film.my_review}}>
                                
                            </div>
                        </div>
                        
                        {/* Next review link */}
                        <div className='next-review-link' title="Click to go to next film in toplist">
                            <Link to={'/films/' + review_id_of_next_film}>
                                <p>&gt;</p>
                            </Link>
                        </div>
                    </div>
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
    let id = ownProps.match.params.film_id;     // the id of the review being displayed in the UI
    console.log(id);

    return {
        film: state.top_films.find(film => get_film_review_id(film.title, film.letterboxd_url) === id),
    }
}


// we added the 'withRouter' higher order function, so that we can retain scroll position when user goes back a page...
export default withRouter(connect(mapStateToProps)(FilmsReview))
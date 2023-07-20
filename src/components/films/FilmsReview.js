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
import { getRandomRGBA, getReviewId } from '../../js/helpers.js';


class FilmsReview extends React.Component {

    /**
     * The Render() function, content rendered to screen...
     */
    render() {
        console.log(this.state);
        console.log(this.props);

        let posterUrl = ""
        let title = ""
        let reviewIdOfNextFilm = "";
        let reviewIdOfPrevFilm = "";

        // use custom poster url if it exists...
        if (this.props.filmData.customPosterUrl !== undefined) {
            posterUrl = this.props.filmData.customPosterUrl;
        }
        // use default posterUrl if I didnt specify one...
        if (this.props.filmData.customPosterUrl == undefined) {
            posterUrl = this.props.filmData.posterUrl;
        }
        
        // use custom title if it exists...
        if (this.props.filmData.titleDisplayed !== undefined) {
            title = this.props.filmData.titleDisplayed;
        } else {
            title = this.props.filmData.title;
        }

        // 
        if (this.props.filmData.reviewIdOfNextFilm !== undefined) {
            reviewIdOfNextFilm = this.props.filmData.reviewIdOfNextFilm;
        }
        if (this.props.filmData.reviewIdOfPrevFilm !== undefined) {
            reviewIdOfPrevFilm = this.props.filmData.reviewIdOfPrevFilm;
        }
    
        return (
            <div className="page-wrapper film-review">
                <div className="section-inner">
                    <div className='review-displayed'>

                        {/* Poster */}
                        <div className='review-filmPoster'>
                            <picture className='filmPoster'>
                                <img src={posterUrl} />
                            </picture>
                        </div>

                        {/* Prev review link */}
                        <div className='prev-review-link' title="Click to go to previous film in toplist">
                            <Link to={'/films/' + reviewIdOfPrevFilm}>
                                <p>&lt;</p>
                            </Link>
                        </div>

                        {/* Review content */}                        
                        <div className='review-content'>
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
                                </div>
                                <div className='film-details-header-2'>
                                    <div className='film-details-more'>
                                        <div className='filmMoreData'>
                                            <p className='film-year' title="Release year">{this.props.filmData.year}</p>
                                            <p className='film-duration' title="Duraton in minutes">{this.props.filmData.duration} mins</p>
                                            <p className='film-language' title="Language">{this.props.filmData.language}</p>
                                        </div>
                                        <div className='filmGenres' title='Genres'>
                                            {this.props.filmData.genres.map(genre => {
                                                return <div className='genre-tag'>{genre}</div>
                                            })}
                                        </div>
                                        <div className='filmDirectors' title='Directors'>
                                            {this.props.filmData.directors.map(director => {
                                                return <div className='director-tag'>{director}</div>
                                            })}
                                        </div>
                                        <div className='filmLinks' title="Links">
                                            <a className='filmImdbLink' href={this.props.filmData.imdbUrl} target='_blank'>IMDb</a>
                                            <a className='filmTmdbLink' href={this.props.filmData.tmdbUrl} target='_blank'>TMDb</a>
                                            <a className='filmLetterboxdLink' href={this.props.filmData.letterboxdUrl} target='_blank'>Letterboxd</a>
                                        </div>
                                    </div>
                                    <div className='film-details-myData'>
                                        <div className='filmPosition generic-hover' title='Position in my list'>
                                            <Link to='/films'>
                                                #{this.props.filmData.position} in my toplist
                                            </Link>
                                        </div>
                                        <div className='filmMyRating' title='My rating'>
                                            <p>{this.props.filmData.myRating}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Tags */}
                            <div className='review-my-tags' title="My tags">
                                {this.props.filmData.myTags.map(tag => {
                                    return <div className='my-tag'>{tag}</div>
                                })}
                            </div>
                            
                            {/* Gradual interest graph */}
                            <div className='filmGradualInterest' title=''>
                                <p>{this.props.filmData.gradualInterest} ({this.props.filmData.gradualInterestAverage})</p>
                            </div>

                            {/* The actual review content!! */}
                            <div className='review-content-container' dangerouslySetInnerHTML={{__html: this.props.filmData.myReview}}>
                                
                            </div>
                        </div>
                        
                        {/* Next review link */}
                        <div className='next-review-link' title="Click to go to next film in toplist">
                            <Link to={'/films/' + reviewIdOfNextFilm}>
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
        filmData: state.filmReviews.find(film => getReviewId(film.title, film.letterboxdUrl) === id),
    }
}


// we added the 'withRouter' higher order function, so that we can retain scroll position when user goes back a page...
export default withRouter(connect(mapStateToProps)(FilmsReview))
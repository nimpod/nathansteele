/**
 * This is a react component for rendering an individual film review
 */

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from "../../icons/arrowLeft.svg";
import { ReactComponent as ArrowLeftV2 } from "../../icons/arrowLeftV2.svg";

import { ReactComponent as ArrowUp } from "../../icons/arrowUp.svg";
import { ReactComponent as Calendar } from "../../icons/calendar.svg";
import { getRandomRGBA, getReviewId } from '../../js/helpers.js';


class FilmsReview extends Component {

    /**
     * The Render() function, content rendered to screen...
     */
    render() {
        console.log(this.props);

        let posterUrl = ""
        let title = ""

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
    
        return (
            <div className="page-wrapper film-review">
                <div className="section-inner">
                    <div className='review-displayed'>

                        {/* Title */}
                        <div className='film-title' title='Film title'>
                            {title}
                        </div>

                        <div onClick={() => this.props.history.goBack()} className="custom-btn-1 back-to-previous-page" title="Back to toplist">
                            <ArrowLeftV2 className="invertable-icon" />
                            <span>Back to toplist</span>
                        </div>

                        {/* Header */}
                        <div className='review-header'>
                            <picture className='filmPoster'>
                                <img src={posterUrl} />
                            </picture>
                            <div className='filmDetails'>
                                <div className='filmMyRating' title='My rating'>
                                    <p>My rating = {this.props.filmData.myRating}</p>
                                </div>
                                <div className='filmGradualInterest' title=''>
                                    <p>{this.props.filmData.gradualInterest} ({this.props.filmData.gradualInterestAverage})</p>
                                </div>
                                <div className='filmYear' title='Year of release'>
                                    {this.props.filmData.year}
                                </div>
                                <div className='filmDirectors' title='Directors'>
                                    {this.props.filmData.directors.map(director => {
                                        return <div className='director-tag'>{director}</div>
                                    })}
                                </div>
                                <div className='filmDuration' title='Duration in minutes'>
                                    {this.props.filmData.duration} mins
                                </div>
                                <div className='filmLanguage' title='Original language'>
                                    {this.props.filmData.language}
                                </div>
                                <div className='filmGenres' title='Genres'>
                                    {this.props.filmData.genres.map(genre => {
                                        return <div className='genre-tag'>{genre}</div>
                                    })}
                                </div>
                                <div className='filmLinks'>
                                    <a className='filmImdbLink' href={this.props.filmData.imdbUrl} target='_blank'>IMDb</a>
                                    <a className='filmTmdbLink' href={this.props.filmData.tmdbUrl} target='_blank'>TMDb</a>
                                    <a className='filmLetterboxdLink' href={this.props.filmData.letterboxdUrl} target='_blank'>Letterboxd</a>
                                </div>
                                <div className='filmPosition generic-hover' title='Position in my list'>
                                    #{this.props.filmData.position} in my toplist
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className='review-my-tags'>
                            {this.props.filmData.myTags.map(tag => {
                                return <div className='my-tag'>{tag}</div>
                            })}
                        </div>

                        {/* Review content */}
                        <div className='review-content-container' dangerouslySetInnerHTML={{__html: this.props.filmData.myReview}}>
                            
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
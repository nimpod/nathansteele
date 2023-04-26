import React, {Component, useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as ShowGridIcon } from "../../icons/showGrid.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { hideItemWhenUserClicksOutsideOfItem } from '../../js/helpers'
import { ReactComponent as ArrowLeftV2 } from "../../icons/arrowLeftV2.svg";


class MoviesReview extends Component {

    render() {
        console.log(this.props);
        
        return (
            <div className="page-wrapper movie-review">
                <div className="section-inner">
                    <div className='review-displayed'>

                        {/* Title */}
                        <div className='film-title' title='Film title'>
                            {/*}  {this.props.film.title} */}
                        </div>

                        <Link to='/movies' className="custom-btn-1 back-to-previous-page" title="Back to toplist">
                            <ArrowLeftV2 className="invertable-icon" />
                            <span>Back to toplist</span>
                        </Link>

                        {/* Header */}
                        <div className='review-header'>
                            <picture className='filmPoster'>
                                <img src={this.props.film.posterUrl} />
                            </picture>
                            <div className='filmDetails'>
                                <div className='filmMyRating generic-hover' title='My rating'>
                                    <p>{this.props.film.myRating}</p>
                                </div>
                                <div className='filmYear' title='Year of release'>
                                    {this.props.film.year}
                                </div>
                                <div className='filmDirectors' title='Directors'>
                                    {this.props.film.directors.map(director => {
                                        return <div className='director-tag'>{director}</div>
                                    })}
                                </div>
                                <div className='filmDuration' title='Duration in minutes'>
                                    {this.props.film.duration} mins
                                </div>
                                <div className='filmLanguage' title='Original language'>
                                    {this.props.film.language}
                                </div>
                                <div className='filmGenres' title='Genres'>
                                    {this.props.film.genres.map(genre => {
                                        return <div className='genre-tag'>{genre}</div>
                                    })}
                                </div>
                                <div className='filmLinks'>
                                    <a className='filmImdbLink' href={this.props.film.imdbUrl} target='_blank'>IMDb</a>
                                    <a className='filmLetterboxdLink' href={this.props.film.letterboxdUrl} target='_blank'>Letterboxd</a>
                                </div>
                                <div className='filmPosition generic-hover' title='Position in my list'>
                                    #{this.props.film.position} in my toplist
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className='review-my-tags'>
                            {this.props.film.myTags.map(tag => {
                                return <div className='my-tag'>{tag}</div>
                            })}
                        </div>

                        {/* Review content */}
                        <div className='review-content-container' dangerouslySetInnerHTML={{__html: this.props.film.myReview}}>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


/**
 * [function: Connect this React component to the Redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.movie_id;     // the id of the movie being displayed
    console.log(id);
    console.log(state.filmReviews);
    return {
        film: state.filmReviews.find(film => film.reviewId === id)      // get the actual post data from the redux data store
    }
}


export default connect(mapStateToProps)(MoviesReview)
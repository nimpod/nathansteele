import React, {Component, useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from "../../icons/arrowRightTriangle.svg";
import { ReactComponent as ThreeDotsIcon } from "../../icons/threeDots.svg";

class FilmReviewHeader extends Component {

    render() {
        let copyOfThis = this;
        
        let directorsList = []
        let genresList = []
        let tagsList = []

        if (this.props !== null) {
            if (this.props.film !== null) {
                directorsList = this.props.film.directors;
                genresList = this.props.film.genres;
                tagsList = this.props.film.myTags;
            }
        }

        return(
            <div className='review-displayed'>
                <div className='film-title' title='Film title'>
                    {this.props.film.title}
                </div>
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
                            {genresList.map(genre => {
                                return <div className='genre-tag'>{genre}</div>
                            })}
                        </div>
                        <div className='filmLinks'>
                            <a className='filmImdbLink' href={this.props.film.imdbUrl} target='_blank'>IMDb</a>
                            <a className='filmLetterboxdLink' href={this.props.film.letterboxdUrl} target='_blank'>Letterboxd</a>
                        </div>
                        <div className='filmPosition generic-hover' title='Position in my list'>
                            #{this.props.film.position} in my list
                        </div>
                    </div>
                </div>
                <div className='review-my-tags'>
                    {tagsList.map(tag => {
                        return <div className='my-tag'>{tag}</div>
                    })}
                </div>
                <div className='review-content-container' dangerouslySetInnerHTML={{__html: this.props.film.myReview}}>
                    
                </div>
            </div>
        )
    }
}

export default FilmReviewHeader
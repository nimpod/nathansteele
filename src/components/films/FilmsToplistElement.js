/**
 * This is a react component for recreating elements in my toplist
 */

import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter, Link } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { getValueOfCSSVariable, getReviewId } from '../../js/helpers.js';

var filmGridElementWidth = getValueOfCSSVariable('--film-grid-element-width');
var filmGridElementHeight = getValueOfCSSVariable('--film-grid-element-height');

let localMerge = {}

class FilmsToplistElement extends Component {

    render() {
        // console.log(this.props.film);

        // reconstruct review id from title and url
        let reviewId = getReviewId(this.props.film.title, this.props.film.letterboxdUrl)

        // calculate IMDb difference score
        let diffScoreClassname = "";
        let diffScore = (this.props.film.myRating - this.props.film.imdbAvgRating).toFixed(1);
        let diffScoreStr = "";
        
        if (diffScore > 0) {
            diffScoreStr = "+" + diffScore;
            diffScoreClassname = "positive-diff";
        } else if (diffScore < 0) {
            diffScoreStr = diffScore;
            diffScoreClassname = "negative-diff";
        } else if (diffScore == 0) {
            diffScoreStr = diffScore;
            diffScoreClassname = "equal-diff";
        }
        // console.log(diffScore);

        // use custom poster url if it exists...
        let posterUrl = ""
        if (this.props.film.customPosterUrl !== undefined) {
            posterUrl = this.props.film.customPosterUrl;
        }
        // use default posterUrl if I didnt specify one...
        if (this.props.film.customPosterUrl == undefined) {
            posterUrl = this.props.film.posterUrl;
        }

        // use custom title if it exists...
        let title = ""
        if (this.props.film.titleDisplayed !== undefined) {
            title = this.props.film.titleDisplayed;
        } else {
            title = this.props.film.title;
        }
        
        let screenshot1 = "https://m.media-amazon.com/images/M/MV5BNjUxYTkxYzgtYzU5OC00NDVmLWExYTAtYmY0NDBiZWRhY2E0XkEyXkFqcGdeQXVyNzEzMzA1MTQ@._V1_QL75_UY281_CR130,0,190,281_.jpg"
        let screenshot2 = "https://m.media-amazon.com/images/M/MV5BNjUxYTkxYzgtYzU5OC00NDVmLWExYTAtYmY0NDBiZWRhY2E0XkEyXkFqcGdeQXVyNzEzMzA1MTQ@._V1_QL75_UY281_CR130,0,190,281_.jpg"
        let screenshot3 = "https://m.media-amazon.com/images/M/MV5BNjUxYTkxYzgtYzU5OC00NDVmLWExYTAtYmY0NDBiZWRhY2E0XkEyXkFqcGdeQXVyNzEzMzA1MTQ@._V1_QL75_UY281_CR130,0,190,281_.jpg"
        if (this.props.film.screenshots !== undefined) {
            screenshot1 = this.props.film.screenshots[0];
            screenshot2 = this.props.film.screenshots[1];
            screenshot3 = this.props.film.screenshots[2];
        }

        return (
            <div className='films-toplist-item'>
                <Link to={'/films/' + reviewId}>
                    <picture className='film-poster'>
                        <img src={posterUrl} />
                    </picture>
                    <div className='film-details'>
                        <p>{title}</p>
                        <div className='film-dataContainer myData'>
                            <span className='film-myPos' title='Position in my toplist'>#{this.props.film.position}</span>
                            <span className='film-myRating' title='My rating (decimal rating out of 10.0)'>{this.props.film.myRating}</span>
                            <span className={`film-imdbDiffScore ${diffScoreClassname}`} title='Difference between my rating and IMDb avg rating'>
                                {diffScoreStr}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        )
        
        {/*
        return(
            <div className='films-toplist-item'>
                <Link to={'/films/' + reviewId}>
                    <div className='film-details'>
                        <span className='film-title' title='Title'>
                            {title}
                        </span>
                        <div className='film-data'>
                            <div className='film-dataContainer myData'>
                                <span className='film-myPos' title='Position in my toplist'>#{this.props.filmWebdata.position}</span>
                                <span className='film-myRating' title='My rating (decimal rating out of 10.0)'>{this.props.filmLocaldata.myRating}</span>
                                <span className={`film-imdbDiffScore ${diffScoreClassname}`} title='Difference between my rating and IMDb avg rating'>
                                    {diffScoreStr}
                                </span>
                            </div>
                            <div className='film-dataContainer additionalData'>
                                <span className='film-duration' title='Duration in mins'>{this.props.filmWebdata.duration} mins</span>
                                <span className='film-year' title='Year of release'>{this.props.filmWebdata.year}</span>
                                <span className='film-language' title='Language'>{this.props.filmWebdata.language}</span>
                                <div className='film-genres' title='Genres'>
                                    {this.props.filmWebdata.genres.map(genre => {
                                        return <span className='genre-tag'>{genre}</span>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="film-images">
                        <picture className='film-poster'>
                            <img src={posterUrl} />
                        </picture>
                        <div className='film-screenshots'>
                            <img src={screenshot1} />
                            <img src={screenshot2} />
                            <img src={screenshot3} />
                        </div>
                    </div>
                </Link>
            </div>
        )*/}
    }
}

export default withRouter(FilmsToplistElement)

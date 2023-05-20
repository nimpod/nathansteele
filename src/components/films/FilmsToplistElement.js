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
        /// console.log(this.props.filmLocaldata);

        // reconstruct review id from title and url
        let reviewId = getReviewId(this.props.filmLocaldata.title, this.props.filmLocaldata.letterboxdUrl)

        // calculate IMDb difference score
        let diffScoreClassname = "";
        let diffScore = (this.props.filmLocaldata.myRating - this.props.filmWebdata.imdbAvgRating).toFixed(1);
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
        if (this.props.filmLocaldata.customPosterUrl !== undefined) {
            posterUrl = this.props.filmLocaldata.customPosterUrl;
        }
        // use default posterUrl if I didnt specify one...
        if (this.props.filmLocaldata.customPosterUrl == undefined) {
            posterUrl = this.props.filmWebdata.posterUrl;
        }

        // use custom title if it exists...
        let title = ""
        if (this.props.filmLocaldata.titleDisplayed !== undefined) {
            title = this.props.filmLocaldata.titleDisplayed;
        } else {
            title = this.props.filmLocaldata.title;
        }
        
        let screenshot1 = "https://m.media-amazon.com/images/M/MV5BNjUxYTkxYzgtYzU5OC00NDVmLWExYTAtYmY0NDBiZWRhY2E0XkEyXkFqcGdeQXVyNzEzMzA1MTQ@._V1_QL75_UY281_CR130,0,190,281_.jpg"
        let screenshot2 = "https://m.media-amazon.com/images/M/MV5BNjUxYTkxYzgtYzU5OC00NDVmLWExYTAtYmY0NDBiZWRhY2E0XkEyXkFqcGdeQXVyNzEzMzA1MTQ@._V1_QL75_UY281_CR130,0,190,281_.jpg"
        let screenshot3 = "https://m.media-amazon.com/images/M/MV5BNjUxYTkxYzgtYzU5OC00NDVmLWExYTAtYmY0NDBiZWRhY2E0XkEyXkFqcGdeQXVyNzEzMzA1MTQ@._V1_QL75_UY281_CR130,0,190,281_.jpg"
        if (this.props.filmLocaldata.screenshots !== undefined) {
            screenshot1 = this.props.filmLocaldata.screenshots[0];
            screenshot2 = this.props.filmLocaldata.screenshots[1];
            screenshot3 = this.props.filmLocaldata.screenshots[2];
        }

        return(
            <div className='films-toplist-item'>
                <div className='film-details'>
                    <span className='film-title' title='Title'>{title}</span>
                    <div className='film-myData'>
                        <span className='film-myPos' title='Position in my toplist'>#{this.props.filmWebdata.position}</span>
                        <span className='film-myRating' title='My rating'>{this.props.filmLocaldata.myRating}</span>
                        <span className={`film-imdbDiffScore ${diffScoreClassname}`} title='Difference between my rating and IMDb avg rating'>
                            <a href={`${this.props.filmWebdata.imdbUrl}`} target='_blank'>{diffScoreStr}</a>
                        </span>
                    </div>
                    <span className='film-duration' title='Duration in mins'>{this.props.filmWebdata.duration} mins</span>
                    <span className='film-year' title='Year of release'>{this.props.filmWebdata.year}</span>
                    <span className='film-language' title='Language'>{this.props.filmWebdata.language}</span>
                    <div className='film-genres' title='Genres'>
                        {this.props.filmWebdata.genres.map(genre => {
                            return <span className='genre-tag'>{genre}</span>
                        })}
                    </div>
                    <div className='film-urls'>
                        <a href={this.props.filmWebdata.tmdbUrl}>TMDb</a>
                        <a href={this.props.filmWebdata.letterboxdUrl}>Letterboxd</a>
                    </div>
                    {/*}
                    <div className='film-directors' title='Directors'>
                        {this.props.filmWebdata.directors.map(director => {
                            return <span className='director-tag'>{director}</span>
                        })}
                    </div>
                    */}
                </div>
                <Link to={'/films/' + reviewId} id={`toplist-element-${reviewId}`}>
                    <picture className='film-poster'>
                        <img src={posterUrl} />
                    </picture>
                    <div className='film-screenshots'>
                        <img src={screenshot1} />
                        <img src={screenshot2} />
                        <img src={screenshot3} />
                    </div>
                </Link>
            </div>
        )
    }
}

export default withRouter(FilmsToplistElement)

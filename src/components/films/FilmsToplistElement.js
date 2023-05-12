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
        console.log(diffScore);

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
            <div className='films-toplist-item' id={`toplist-element-${reviewId}`}>
                    <picture className='filmPoster'>
                        <img src={posterUrl} />
                    </picture>
                    <div className='filmScreenshots'>
                        <img src={screenshot1} />
                        <img src={screenshot2} />
                        <img src={screenshot3} />
                    </div>
                    <div className='films-toplist-item-details'>
                        <div className='ratingsData'>
                            <div className='filmPosition' title='Position'>
                                <p className='pos-num'>{this.props.filmWebdata.position}</p>
                                <p className='pos-desc'>position</p>
                            </div>
                            <div className='filmMyRating generic-hover' title='My rating'>
                                <p className='rating-num'>{this.props.filmLocaldata.myRating} / 10</p>
                                <p className='rating-desc'>my rating</p>
                            </div>
                            <div className='filmImdbDifferenceScore' title='My rating - IMDB avg rating'>
                                <p className={`diff-score ${diffScoreClassname}`}>{diffScoreStr}</p>
                                <p className='diff-desc'>IMDb difference score</p>
                                {/*}
                                <a href={this.props.filmWebdata.imdbUrl} target='_blank'>
                                    <img width={30} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' />
                                </a>
                                */}
                            </div>
                        </div>
                        <div className='filmDetails'>
                            <div>
                                <div className='filmTitle' title='Title'>
                                    {title}
                                </div>
                            </div>
                            <div className='filmYear' title='Year of release'>
                                {this.props.filmWebdata.year}
                            </div>
                            <div className='filmDuration' title='Duration in minutes'>
                                {this.props.filmWebdata.duration} mins
                            </div>
                            <div className='filmLanguage' title='Original language'>
                                {this.props.filmWebdata.language}
                            </div>
                            <div className='filmUrls'>
                                <a href={this.props.filmWebdata.imdbUrl}>IMDB</a>
                                <a href={this.props.filmWebdata.letterboxdUrl}>Letterboxd</a>
                            </div>
                            <div className='filmGenres' title='Genres'>
                                {this.props.filmWebdata.genres.map(genre => {
                                    return <div className='genre-tag'>{genre}</div>
                                })}
                            </div>
                            <div className='filmDirectors' title='Directors'>
                                {this.props.filmWebdata.directors.map(director => {
                                    return <div className='director-tag'>{director}</div>
                                })}
                            </div>
                        </div>
                        <div className='filmReviewLink'>
                            <Link to={'/films/' + reviewId}>My Review</Link>
                        </div>
                    </div>
            </div>
        )
    }
}

export default withRouter(FilmsToplistElement)

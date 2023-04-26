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
        let reviewId = getReviewId(this.props.filmLocaldata.title, this.props.filmLocaldata.letterboxdUrl)
        let posterUrl = ""
        let title = ""

        // use custom poster url if it exists...
        if (this.props.filmLocaldata.customPosterUrl !== undefined) {
            posterUrl = this.props.filmLocaldata.customPosterUrl;
        }
        // use default posterUrl if I didnt specify one...
        if (this.props.filmLocaldata.customPosterUrl == undefined) {
            posterUrl = this.props.filmWebdata.posterUrl;
        }

        // use custom title if it exists...
        if (this.props.filmLocaldata.titleDisplayed !== undefined) {
            title = this.props.filmLocaldata.titleDisplayed;
        } else {
            title = this.props.filmLocaldata.title;
        }

        return(
            <div className='films-toplist-item'>
                <Link to={'/films/' + reviewId} id={`toplist-element-${reviewId}`}>
                    <picture className='filmPoster'>
                        <img src={posterUrl} />
                    </picture>
                    <div className='films-toplist-item-details'>
                        <div className='filmTitle' title='Title'>
                            {title}
                        </div>
                        <div className='filmPosition' title='Position'>
                            #{this.props.filmWebdata.position} in my toplist
                        </div>
                        <div className='filmDuration' title='Duration in minutes'>
                            {this.props.filmWebdata.duration} mins
                        </div>
                        <div className='filmMyRating generic-hover' title='My rating'>
                            <p>{this.props.filmLocaldata.myRating}</p>
                        </div>
                        <div className='filmLanguage' title='Original language'>
                            {this.props.filmWebdata.language}
                        </div>
                        <div className='filmYear' title='Year of release'>
                            {this.props.filmWebdata.year}
                        </div>
                        <div className='filmDirectors' title='Directors'>
                            {this.props.filmWebdata.directors.map(director => {
                                return <div className='director-tag'>{director}</div>
                            })}
                        </div>
                        <div className='filmGenres' title='Genres'>
                            {this.props.filmWebdata.genres.map(genre => {
                                return <div className='genre-tag'>{genre}</div>
                            })}
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default withRouter(FilmsToplistElement)

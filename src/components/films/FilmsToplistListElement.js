/**
 * Display a film from my toplist as a list element
 * (i.e. include screenshots)
 */

import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter, Link } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { getValueOfCSSVariable, getReviewId } from '../../js/helpers.js';
import PosterImage from './PosterImage.js';


class FilmsToplistListElement extends Component {

    state = {
        __poster_has_loaded: false,
        __is_all_loaded: false,
        __loaded_images_counter: 0
    }

    updateLoading = () => {
        // this.setState({__poster_has_loaded: true})
        if (this.state.__loaded_images_counter + 1 == this.props.posterUrls.length) {
            this.setState({__is_all_loaded: true})
        }
        this.setState(prevState => prevState + 1)
    }

    render() {
        let tempScreenshot = "https://m.media-amazon.com/images/M/MV5BNjUxYTkxYzgtYzU5OC00NDVmLWExYTAtYmY0NDBiZWRhY2E0XkEyXkFqcGdeQXVyNzEzMzA1MTQ@._V1_.jpg"
        let screenshot1 = tempScreenshot
        let screenshot2 = tempScreenshot
        let screenshot3 = tempScreenshot
        if (this.props.film.screenshots !== undefined) {
            screenshot1 = this.props.film.screenshots[0];
            screenshot2 = this.props.film.screenshots[1];
            screenshot3 = this.props.film.screenshots[2];
        }

        return (
            <div className='films-toplist-item'>
                <Link to={'/films/' + this.props.reviewId}>
                    <div className='film-details'>
                        <span className='film-title' title='Title'>{this.props.title}</span>
                        <span className='film-year' title='Year of release'>({this.props.film.year})</span>
                        <div className='film-data'>
                            <div className='film-dataContainer myData'>
                                <span className='film-myPos' title='Position in my toplist'>#{this.props.film.position}</span>
                                <span className='film-myRating' title='My rating (decimal rating out of 10.0)'>{this.props.film.myRating}</span>
                                <span className={`film-imdbDiffScore ${this.props.diffScoreClassname}`} title='Difference between my rating and IMDb avg rating'>
                                    {this.props.diffScoreStr}
                                </span>
                            </div>
                            {/*}
                            <div className='film-dataContainer additionalData'>
                                <span className='film-duration' title='Duration in mins'>{this.props.film.duration} mins</span>
                                <span className='film-year' title='Year of release'>{this.props.film.year}</span>
                                <span className='film-language' title='Language'>{this.props.film.language}</span>
                                <div className='film-genres' title='Genres'>
                                    {this.props.film.genres.map(genre => {
                                        return <span className='genre-tag'>{genre}</span>
                                    })}
                                </div>
                            </div>*/}
                        </div>
                    </div>
                    <div className="film-images">
                        <PosterImage 
                            key={this.props.posterUrl}
                            src={this.props.posterUrl}
                            index={this.props.index}
                            isCurrentlyLoading={!this.state.__is_all_loaded}
                            onLoad={this.updateLoading}
                        />
                        <div className='film-screenshots'>
                            <img src={screenshot1} />
                            <img src={screenshot2} />
                            <img src={screenshot3} />
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}


export default withRouter(FilmsToplistListElement)
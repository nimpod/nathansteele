import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter, Link } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { getValueOfCSSVariable } from '../../js/helpers';

var filmGridElementWidth = getValueOfCSSVariable('--film-grid-element-width');
var filmGridElementHeight = getValueOfCSSVariable('--film-grid-element-height');

class MoviesToplistElement extends Component {
    render() {
        let copyOfThis = this;
        let filmId = this.props.film.reviewId
        // let filmId = this.props.film.letterboxdFilmId
        console.log(this.props.film)

        return(
            <div className='films-toplist-item'>
                <Link to={'/movies/' + filmId} id={`toplist-element-${filmId}`}>
                    <picture className='filmPoster'>
                        <img height={filmGridElementHeight} width={filmGridElementWidth} src={this.props.film.posterUrl} />
                    </picture>
                    <div class='films-toplist-item-details'>
                        <div className='filmTitle' title='Title'>
                            {this.props.film.title}
                        </div>
                        <div className='filmPosition' title='Position'>
                            #{this.props.film.position} in my toplist
                        </div>
                        <div className='filmMyRating generic-hover' title='My rating'>
                            <p>{this.props.film.myRating}</p>
                        </div>
                        <div className='filmDuration' title='Duration in minutes'>
                            {this.props.film.duration} mins
                        </div>
                        <div className='filmLanguage' title='Original language'>
                            {this.props.film.language}
                        </div>
                        <div className='filmYear' title='Year of release'>
                            {this.props.film.year}
                        </div>
                        <div className='filmDirectors' title='Directors'>
                            {this.props.film.directors.map(director => {
                                return <div className='director-tag'>{director}</div>
                            })}
                        </div>
                        <div className='filmGenres' title='Genres'>
                            {this.props.film.genres.map(genre => {
                                return <div className='genre-tag'>{genre}</div>
                            })}
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default withRouter(MoviesToplistElement)

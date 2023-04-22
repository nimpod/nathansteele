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
        let filmId = this.props.film.title + '-' + this.props.film.letterboxdFilmId

        return(
            <Link to={'/movies/' + filmId} class='films-toplist-item' id={`toplist-element-${filmId}`}>
                <picture className='filmPoster'>
                    <img height={filmGridElementHeight} width={filmGridElementWidth} src={this.props.film.posterUrl} />
                </picture>
                <div class='films-toplist-item-details'>
                    <div>{this.props.film.position}</div>
                    <div>{this.props.film.myRating}</div>
                    <div>{this.props.film.letterboxdUrl}</div>
                    <div>{this.props.film.title}</div>
                    <div>{this.props.film.duration}</div>
                    <div>{this.props.film.language}</div>
                    <div>{this.props.film.year}</div>
                    <div>
                        {this.props.film.directors.map(director => {
                            return <div className='director-tag'>{director}</div>
                        })}
                    </div>
                    <div>
                        {this.props.film.genres.map(g => {
                            return <div className='genre-tag'>{g}</div>
                        })}
                    </div>
                </div>
            </Link>
        )
    }
}

export default withRouter(MoviesToplistElement)

import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter, Link } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { getValueOfCSSVariable } from '../../js/helpers';

var filmGridElementWidth = getValueOfCSSVariable('--film-grid-element-width');
var filmGridElementHeight = getValueOfCSSVariable('--film-grid-element-height');

class TopFilmsGridElement extends Component {

    render() {
        let filmId = this.props.film.letterboxdFilmId;

        let gridElemClassList = 'film-grid-element'
        if (this.props.filmCurrentlyDisplayed !== undefined) {
            if (this.props.filmCurrentlyDisplayed.letterboxdFilmId === filmId) {
                gridElemClassList = 'film-grid-element active'
            }
        }
        // let activeClass = (this.props.film.position == 1) ? 'film-grid-element active' : 'film-grid-element';
        return(
            <Link to={'/films/' + filmId} className={gridElemClassList} id={`grid-element-${filmId}`} onClick={() => this.props.clickedGridElement(filmId)}>
                <div className='film-position-box'>
                    <span>{this.props.film.position}</span>
                </div>
                <picture className='filmPoster'>
                    <img height={filmGridElementHeight} width={filmGridElementWidth} src={this.props.film.posterUrl} />
                </picture>
            </Link>
        )
    }
}

export default withRouter(TopFilmsGridElement)

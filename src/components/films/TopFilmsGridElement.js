import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";

class TopFilmsGridElement extends Component {
    render() {
        let imdbUrlSplit = this.props.film.urlImdb.split('/');
        let imdbId = imdbUrlSplit[imdbUrlSplit.length - 2];
        let posterUrl = this.props.film.posters[0] == "" ? this.props.film.posters[1] : this.props.film.posters[0]
        return(
            <div className='film-grid-element' id={`grid-element-${imdbId}`} onClick={() => this.props.clickedGridElement(imdbId)}>
                <div className='filmPosTriangle'>
                    <span>{this.props.film.position}</span>
                </div>
                <picture className='filmPoster'>
                    <img height={160} width={110} src={posterUrl} />
                </picture>
            </div>
        )
    }
}

export default withRouter(TopFilmsGridElement)

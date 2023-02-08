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
        let activeClass = (this.props.film.position == 1) ? 'film-grid-element active' : 'film-grid-element';
        return(
            <div className={activeClass} id={`grid-element-${imdbId}`} onClick={() => this.props.clickedGridElement(imdbId)}>
                <div className='filmPosTriangle'>
                    <span>{this.props.film.position}</span>
                </div>
                <picture className='filmPoster'>
                    <img height={160} width={110} src={this.props.film.urlPoster} />
                </picture>
            </div>
        )
    }
}

export default withRouter(TopFilmsGridElement)

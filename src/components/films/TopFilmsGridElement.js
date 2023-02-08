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
        return(
            <div className='film-grid-element' id={`grid-element-${imdbId}`} onClick={() => this.props.clickedGridElement(imdbId)}>
                {this.props.film.title}
            </div>
        )
    }
}

export default withRouter(TopFilmsGridElement)

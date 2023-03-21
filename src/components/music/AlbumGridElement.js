import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter, Link } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { getValueOfCSSVariable } from '../../js/helpers';


class AlbumGridElement extends Component {
    render() {
        return(
            <Link>
                <div className='albuminfo'>
                    <span>{this.props.album.position}: {this.props.album.artistName} - {this.props.album.albumName}</span>
                </div>
            </Link>
        )
    }
}

export default withRouter(AlbumGridElement)

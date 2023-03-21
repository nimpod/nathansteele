import React, { Redirect, Component, useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import AlbumGridElement from './AlbumGridElement';


class Music extends Component {
    render() {
        let albumsJsonList = require('./reviews_web_data.json');
        console.log(albumsJsonList);

        return (
            <div className='page-wrapper top-music-grid-container'>
                <div id='top-music-list'>
                    {albumsJsonList.map(a => {
                        return <AlbumGridElement
                            album={a}
                            albumsList={albumsJsonList}
                        />
                    })}
                </div>
            </div>
        )
    }
}

/**
 * [function: Connect this React component to the Redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        albumReviews: state.albumReviews
    }
}

export default connect(mapStateToProps)(Music)
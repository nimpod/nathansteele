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
        // console.log(albumsJsonList);
        // console.log(this.props.albumReviewsData);

        return (
            <div className='page-wrapper top-music-grid-container'>
                <div className='section-inner'>
                    <div className='frontpage top-music-list-container'>
                        <span className='page-title'>My top {this.props.albumReviewsData.length} favourite albums of all time</span>
                        <div className='top-music-list'>
                            {this.props.albumReviewsData.map(a => {
                                return <AlbumGridElement
                                    album={a}
                                    albumsList={this.props.albumReviewsData}
                                />
                            })}
                        </div>
                    </div>
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
        albumReviewsData: state.albumReviews
    }
}

export default connect(mapStateToProps)(Music)
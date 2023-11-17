import React, { Component } from 'react';
import { connect }  from 'react-redux';
import AlbumGridElement from './AlbumGridElement';


class Music extends Component {
    render() {
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
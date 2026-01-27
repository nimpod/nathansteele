import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


class MusicStats extends Component {
    render() {
        console.log(this.props)

        return (
            <div>Music Stats Component</div>
        )
    }
}

/**
 * [function: Connect this React component to the Redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return { 
        top_albums: state.top_albums,
        scrobble_data_top_tracks: state.scrobble_data_top_tracks,
    }
}

export default withRouter(connect(mapStateToProps)(MusicStats))
/**
 * This is a react component for rendering an individual film review
 */

import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from "../../icons/arrowLeft.svg";
import { ReactComponent as ArrowLeftV2 } from "../../icons/arrowLeftV2.svg";

import { ReactComponent as ArrowUp } from "../../icons/arrowUp.svg";
import { ReactComponent as Calendar } from "../../icons/calendar.svg";
import { getRandomRGBA, getAlbumReviewId } from '../../js/helpers.js';


class MusicReview extends React.Component {

    /**
     * The Render() function, content rendered to screen...
     */
    render() {
        return(
            <div></div>
        )
    }
}

/**
 * This function finds the correct blog post from the redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.album_id;     // the id of the review being displayed in the UI
    console.log(id);

    return {
        albumsData: state.albumReviews.find(album => getAlbumReviewId(album.artistName, album.albumName) === id),
    }
}


// we added the 'withRouter' higher order function, so that we can retain scroll position when user goes back a page...
export default withRouter(connect(mapStateToProps)(MusicReview))
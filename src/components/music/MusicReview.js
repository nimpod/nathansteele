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
        console.log(this.props.albumData);
        
        let genres = [];
        let themes = [];
        let customAlbumCoverUrl = "";
        let reviewIdOfNextAlbum = "";
        let reviewIdOfPrevAlbum = "";

        // get genres list if it exists...
        if (this.props.albumData.genres !== undefined) {
            genres = this.props.albumData.genres;
        }
        
        // get themes list if it exists...
        if (this.props.albumData.themes !== undefined) {
            themes = this.props.albumData.themes;
        }

        // use custom poster url if it exists...
        if (this.props.albumData.customCoverUrl !== undefined) {
            customAlbumCoverUrl = this.props.albumData.customCoverUrl;
        }
        // use default posterUrl if I didnt specify one...
        if (this.props.albumData.customCoverUrl == undefined) {
            customAlbumCoverUrl = this.props.albumData.albumCoverUrl;
        }

        // id of next/previous films...
        if (this.props.albumData.reviewIdOfNextAlbum !== undefined) {
            reviewIdOfNextAlbum = this.props.albumData.reviewIdOfNextAlbum;
        }
        if (this.props.albumData.reviewIdOfPrevAlbum !== undefined) {
            reviewIdOfPrevAlbum = this.props.albumData.reviewIdOfPrevAlbum;
        }

        return(
            <div className="page-wrapper album-review">
                <div className="section-inner">
                    <div className='album-review-displayed'>
                        <div className='album-info'>
                            {/* Back to previous page button */}
                            <Link to='/music' className="custom-btn-1 back-to-previous-page" title="Back to toplist">
                                <ArrowLeftV2 className="invertable-icon" />
                                <span>Back to toplist</span>
                            </Link>
                            
                            {/* Arist name */}
                            <span className='artist-name'>{this.props.albumData.artistName}</span>
                            
                            {/* Album name */}
                            <span className='album-name'>{this.props.albumData.albumName}</span>
                            
                            {/* Year of release */}
                            <div className='year-of-release'>
                                {/* <p>year</p> */}
                                <span>{this.props.albumData.yearOfRelease}</span>
                            </div>

                            {/* List of genres */}
                            <div className='genres list-of-tags'>
                                {/* <p>genres</p> */}
                                {genres.map(g => {
                                    return <span className='genre-text'>
                                        {g}
                                    </span>
                                })}
                            </div>

                            {/* List of themes */}
                            <div className='themes list-of-tags'>
                                {/* <p>themes</p> */}
                                {themes.map(t => {
                                    return <span className='theme-text'>
                                        {t}
                                    </span>
                                })}
                            </div>

                            {/* Links */}
                            <div className='links' title="Links">
                                {/* <p>links</p> */}
                                <a className='album-lastfm-link' href={this.props.albumData.lastFmUrl} target='_blank'>LastFM</a>
                                <a className='album-rym-link' href={this.props.albumData.rymUrl} target='_blank'>RYM</a>
                            </div>
                            
                            <div className='album-dataContainer'>
                                {/* My rating */}
                                <div className='my-rating'>
                                    <span>{this.props.albumData.myRating}</span>
                                </div>
                                
                                {/* My pos */}
                                <div className='my-pos'>
                                    <span>{this.props.albumData.positionStr}</span>
                                </div>
                            </div>

                            {/* Album cover */}
                            <img className='album-cover' src={customAlbumCoverUrl} alt="album cover">

                            </img>
                        </div>

                        {/* Prev review link */}
                        <div className='prev-review-link' title="Click to go to previous album in toplist">
                            <Link to={'/music/' + reviewIdOfPrevAlbum}>
                                <p>&lt;</p>
                            </Link>
                        </div>

                        {/* The actual review content!! */}
                        <div className='review-content-container' dangerouslySetInnerHTML={{__html: this.props.albumData.myReview}}>
                            
                        </div>
                        
                        {/* Next review link */}
                        <div className='next-review-link' title="Click to go to next album in toplist">
                            <Link to={'/music/' + reviewIdOfNextAlbum}>
                                <p>&gt;</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * This function finds the correct blog post from the redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.album_id;     // the id of the review being displayed in the UI

    return {
        albumData: state.albumReviews.find(album => album.reviewId === id),
    }
}


// we added the 'withRouter' higher order function, so that we can retain scroll position when user goes back a page...
export default withRouter(connect(mapStateToProps)(MusicReview))
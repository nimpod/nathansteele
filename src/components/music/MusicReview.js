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
import { get_random_RGBA, get_album_review_id } from '../../js/helpers.js';


class MusicReview extends React.Component {

    /**
     * The Render() function, content rendered to screen...
     */
    render() {
        /// console.log(this.props.album_data);
        
        let tracks = [];
        let genres = [];
        let themes = [];
        let custom_album_cover_url = "";
        let review_id_of_next_album = "";
        let review_id_of_prev_album = "";

        console.log(this.props.album_data.tracks);

        if (this.props.album_data.tracks !== undefined) {
            tracks = this.props.album_data.tracks;
        }

        // get genres list if it exists...
        if (this.props.album_data.genres !== undefined) {
            genres = this.props.album_data.genres;
        }
        
        // get themes list if it exists...
        if (this.props.album_data.themes !== undefined) {
            themes = this.props.album_data.themes;
        }

        // use custom poster url if it exists...
        if (this.props.album_data.custom_cover_url !== undefined) {
            custom_album_cover_url = this.props.album_data.custom_cover_url;
        }
        // use default posterUrl if I didnt specify one...
        if (this.props.album_data.custom_cover_url == undefined) {
            custom_album_cover_url = this.props.album_data.album_cover_url;
        }

        // id of next/previous films...
        if (this.props.album_data.review_id_of_next_album !== undefined) {
            review_id_of_next_album = this.props.album_data.review_id_of_next_album;
        }
        if (this.props.album_data.review_id_of_prev_album !== undefined) {
            review_id_of_prev_album = this.props.album_data.review_id_of_prev_album;
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
                            <span className='artist-name'>{this.props.album_data.artist_name}</span>
                            
                            {/* Album name */}
                            <span className='album-name'>{this.props.album_data.album_name}</span>
                            
                            {/* Year of release */}
                            <div className='year-of-release'>
                                {/* <p>year</p> */}
                                <span>{this.props.album_data.year_of_release}</span>
                            </div>

                            {/* List of genres */}
                            <div className='genres list-of-tags'>
                                {/* <p>genres</p> */}
                                {genres.map(g => {
                                    return <span className='genre-text' key={g}>
                                        {g}
                                    </span>
                                })}
                            </div>

                            {/* List of themes */}
                            <div className='themes list-of-tags'>
                                {/* <p>themes</p> */}
                                {themes.map(t => {
                                    return <span className='theme-text' key={t}>
                                        {t}
                                    </span>
                                })}
                            </div>

                            {/* Links */}
                            <div className='links' title="Links">
                                {/* <p>links</p> */}
                                <a className='album-lastfm-link' href={this.props.album_data.lastfm_url} target='_blank'>LastFM</a>
                                <a className='album-rym-link' href={this.props.album_data.rym_url} target='_blank'>RYM</a>
                            </div>
                            
                            <div className='album-dataContainer'>
                                {/* My rating */}
                                <div className='my-rating'>
                                    <span>{this.props.album_data.my_rating}</span>
                                </div>
                                
                                {/* My pos */}
                                <div className='my-pos'>
                                    <span>{this.props.album_data.position_str}</span>
                                </div>
                            </div>

                            {/* Album cover */}
                            <img className='album-cover' src={custom_album_cover_url} alt="album cover">

                            </img>

                            {/* tracks */}
                            <div className='tracks' title='Tracks'>
                                {tracks.map(t => {
                                    let track_name = t['name'];

                                    return <span className='track' key={track_name}>
                                        {track_name}
                                    </span>
                                })}
                            </div>
                        </div>

                        {/* Prev review link */}
                        <div className='prev-review-link' title="Click to go to previous album in toplist">
                            <Link to={'/music/' + review_id_of_prev_album}>
                                <p>&lt;</p>
                            </Link>
                        </div>

                        {/* The actual review content!! */}
                        <div className='review-content-container' dangerouslySetInnerHTML={{__html: this.props.album_data.my_review}}>
                            
                        </div>
                        
                        {/* Next review link */}
                        <div className='next-review-link' title="Click to go to next album in toplist">
                            <Link to={'/music/' + review_id_of_next_album}>
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
        album_data: state.top_albums.find(album => album.review_id === id),
    }
}


// we added the 'withRouter' higher order function, so that we can retain scroll position when user goes back a page...
export default withRouter(connect(mapStateToProps)(MusicReview))
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
        // console.log(this.props.album_data);

        let artist_name = this.props.album_data.artist_name;
        let album_name = this.props.album_data.album_name;
        let genres = [];
        let themes = [];
        let custom_album_cover_url = "";
        let review_id_of_next_album = "";
        let review_id_of_prev_album = "";
        let my_rating_nodp = "";
        let recommended_by = "";
        let scrobbles = "";
        let scrobbles_pos = "";
        let year_of_discovery = "";
        //
        let no_spotify_str = "";
        let spotify_hover_text = "Click to listen on Spotify";
        //
        let no_rym_str = "";
        let rym_hover_text = "Click to view on RYM";
        //
        let no_youtube_str = "";
        let youtube_hover_text = "Click to listen on YouTube";
        //
        let lastfm_hover_text = "Click to view on LastFM"

        custom_album_cover_url = (this.props.album_data.custom_cover_url !== undefined) ? this.props.album_data.custom_cover_url : this.props.album_data.album_cover_url;
        album_name = (this.props.album_data.album_name_displayed !== undefined) ? this.props.album_data.album_name_displayed : this.props.album_data.album_name;
        if (this.props.album_data.themes !== undefined) {
            themes = this.props.album_data.themes;
        }
        if (this.props.album_data.genres !== undefined) {
            genres = this.props.album_data.genres;
        }
        if (this.props.album_data.review_id_of_next_album !== undefined) {
            review_id_of_next_album = this.props.album_data.review_id_of_next_album;
        }
        if (this.props.album_data.review_id_of_prev_album !== undefined) {
            review_id_of_prev_album = this.props.album_data.review_id_of_prev_album;
        }
        if (this.props.album_data.artist_name_displayed) {
            artist_name = this.props.album_data.artist_name_displayed;
        }

        // get scrobble data if it's there...
        if (this.props.album_data.scrobble_data !== undefined) {
            scrobbles = this.props.album_data.scrobble_data.play_count;
            scrobbles_pos = this.props.album_data.scrobble_data.pos;
        }

        // get year of discovery if it's there...
        if (this.props.album_data.year_of_discovery !== undefined) {
            year_of_discovery = this.props.album_data.year_of_discovery;
        }

        // check if I put any links in...
        if (this.props.album_data.spotify_url == undefined || this.props.album_data.spotify_url.length == 0) {
            no_spotify_str = "noSpotifyLink noLink";
            spotify_hover_text = "This album is not available on Spotify..."
        }
        if (this.props.album_data.rym_url == undefined || this.props.album_data.rym_url.length == 0) {
            no_rym_str = "noRYMLink noLink";
            rym_hover_text = "I probably haven't inserted the RYM url yet..."
        }
        if (this.props.album_data.youtube_url == undefined) {
            no_youtube_str = "noYoutubeLink noLink";
            youtube_hover_text = "I probably haven't inserted the YouTube url yet..."
        }

        // my rating without any decimal places...
        if (this.props.album_data.my_rating_nodp !== undefined) {
            my_rating_nodp = this.props.album_data.my_rating_nodp;
        }

        if (this.props.album_data.recommended_by !== undefined) {
            recommended_by = this.props.album_data.recommended_by;
        }
        // console.log(recommended_by);

        return(
            <div className="page-wrapper album-review">
                <div className="section-inner">
                    <div className='review-displayed'>

                        {/* Album header container */}
                        <div className='album-header-container'>
                            {/* Back to previous page button */}
                            <Link to='/music' className="custom-btn-1 back-to-previous-page" title="Back to toplist">
                                <ArrowLeftV2 className="invertable-icon" />
                                {/* <span>Back to list</span> */}
                            </Link>
                            
                            {/* Album header */}
                            <div className='album-header'>
                                {/* Album cover */}
                                <div className='album-cover-container'>
                                    <picture className='album-cover'>
                                        <img src={custom_album_cover_url} alt="album cover"></img>
                                    </picture>
                                </div>

                                {/* Album info */}
                                <div className='album-info'>
                                    <span className='album-name' title='Album name'>{album_name}</span>
                                    <span className='artist-name' title='Artist name'>
                                        By <a target='_blank' href={this.props.album_data.rym_artist_link}>{artist_name}</a>
                                    </span>
                                    
                                    {/* Year */}
                                    <div className='year-of-release album-info-item' title="Year this album was released">
                                        <span>Year of release: </span>
                                        <span>{this.props.album_data.year_of_release}</span>
                                    </div>

                                    {/* Year of discovery */}
                                    <div className='year-of-discovery album-info-item' title={`The approximate year that I started listening to this album`}>
                                        <span>Year of discovery: </span>
                                        <span>{year_of_discovery}</span>
                                    </div>

                                    {/* My rating */}
                                    <div className={`my-rating album-info-item`}>
                                        <span>Rating: </span>
                                        <span className={`r${my_rating_nodp}`}>{this.props.album_data.my_rating}</span>
                                    </div>

                                    {/* Scrobbles */}
                                    <div className='scrobbles album-info-item' title={`A scrobble is a play count. I have ${scrobbles} scrobbles for this particular album.`}>
                                        <span>Scrobbles: </span>
                                        <span>{scrobbles} <span>(#{scrobbles_pos})</span></span>
                                    </div>

                                    {/* Genres */}
                                    <div className='genres list-of-tags album-info-item'>
                                        <span>Genres: </span>

                                        {genres.map(g => {
                                            return <span className='genre-tag' key={g}>
                                                {g}
                                            </span>
                                        })}
                                    </div>

                                    {/* Reviewer who recommened it to me */}
                                    {
                                        (this.props.album_data.recommended_by !== undefined) ? 
                                        <div className='album-info-item recommenedBy list-of-tags' title='How did I discover this album?'>
                                            <span className='title'>Recommened to me by... </span>
                                            <span className='theme-tag'>
                                                <a target='_blank' href={`${recommended_by.url}`}>{recommended_by.name}</a>
                                            </span>
                                        </div>
                                        :
                                        null
                                    }

                                    {/* Links */}
                                    <div className='links album-info-item'>
                                        <span>Links: </span>

                                        <a className='album-lastfm-link' href={this.props.album_data.lastfm_url} target='_blank' title={lastfm_hover_text}>LastFM</a>
                                        <a className={`album-rym-link ${no_rym_str}`} href={this.props.album_data.rym_url} target='_blank' title={rym_hover_text}>RYM</a>
                                        <a className={`album-spotify-link ${no_spotify_str}`} href={this.props.album_data.spotify_url} target='_blank' title={spotify_hover_text}>Spotify</a>
                                        {
                                            (no_spotify_str.length > 1) ? <a className={`album-youtube-link ${no_youtube_str}`} href={this.props.album_data.youtube_url} target='_blank' title={youtube_hover_text}>YouTube</a> : null
                                        }
                                    </div>

                                    {/* Themes */}
                                    {/*  ====== I moved this into the .jsx file =========
                                    <div className='themes list-of-tags'>
                                        {themes.map(t => {
                                            return <span className='theme-tag' key={t}>
                                                {t}
                                            </span>
                                        })}
                                    </div>
                                    */}

                                    {/* My data */}
                                    <div className='album-details-myData'>

                                        {/* Position in list */}
                                        <div className='myPosition generic-hover' title='Position in my toplist'>
                                            <Link to='/music'>
                                                <span>#{this.props.album_data.position_str}</span>
                                                <span>in my toplist</span>
                                            </Link>
                                        </div>

                                        {/* My rating */}
                                        {/*}
                                        <div className={`myRating r${my_rating_nodp}`}>
                                            <span>{this.props.album_data.my_rating}</span>
                                        </div>
                                        */}
                                    </div>

                                </div>
                            </div>
                            
                            <div className='prev-and-next-review-links'>

                                <div className='prev-review-link' title="Click to go to previous album in toplist">
                                    <Link to={'/music/' + review_id_of_prev_album}>
                                        <p className='prev-review-pos-indicator'>go to album #{this.props.album_data.position -1}</p>
                                        <p>&lt;</p>
                                    </Link>
                                </div>

                                <div className='next-review-link' title="Click to go to next album in toplist">
                                    <Link to={'/music/' + review_id_of_next_album}>
                                        <p>&gt;</p>
                                        <p className='next-review-pos-indicator'>go to album #{this.props.album_data.position +1}</p>                             
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className='review-content-and-tracklist'>
                            {/* The actual review content!! */}
                            <div className='review-content-container' dangerouslySetInnerHTML={{__html: this.props.album_data.my_review}}>

                            </div>
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
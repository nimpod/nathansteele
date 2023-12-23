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
        console.log(this.props.album_data);
        
        let custom_order_tracks = [];
        let fav_tracks = [];
        let all_tracks = this.props.album_data.tracks;
        let artist_name = this.props.album_data.artist_name;
        let genres = [];
        let themes = [];
        let custom_album_cover_url = "";
        let review_id_of_next_album = "";
        let review_id_of_prev_album = "";

        if (this.props.album_data.tracks !== undefined) {
            // all_tracks = this.props.album_data.tracks;
            /*
            if (this.props.album_data.favourite_tracks !== undefined) {
                fav_tracks = this.props.album_data.favourite_tracks;

                // iterate over fav tracklist...
                for (let i = 0; i < fav_tracks.length; i++) {
                    let current_fav_track_name = fav_tracks[i];

                    // iterate over all tracks...
                    for (let j = 0; j < all_tracks.length; j++) {
                        let current_track = all_tracks[j];
                        let current_track_name = current_track['name'];

                        console.log(`Trying to find fav track #${i} (${current_fav_track_name})... is it #${j} (${current_track_name})?`);
                        console.log(custom_order_tracks);
                        if (current_track_name === current_fav_track_name) {
                            // match!
                            custom_order_tracks.push({
                                "index": current_track['@attr']['rank'],
                                "name": current_track['name'],
                                "url": current_track['url'],
                            });
                            console.log(`---- Found ${current_fav_track_name} in tracklist -----`);
                            break;
                        }
                        console.log(custom_order_tracks);
                    }
                }
            }
            */
        }

        // get genres list if it exists...
        if (this.props.album_data.genres !== undefined) {
            let genres_str = this.props.album_data.genres[0];
            genres = genres_str.split(";");
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
        
        // use English name if it exists...
        if (this.props.album_data.artist_name_displayed) {
            artist_name = this.props.album_data.artist_name_displayed;
        }

        return(
            <div className="page-wrapper album-review">
                <div className="section-inner">
                    <div className='review-displayed'>

                        {/* Album header container */}
                        <div className='album-header-container'>
                            {/* Back to previous page button */}
                            <Link to='/music' className="custom-btn-1 back-to-previous-page" title="Back to toplist">
                                <ArrowLeftV2 className="invertable-icon" />
                                {/*}
                                <span>Back to toplist</span>
                                */}
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
                                    {/* Album name */}
                                    <span className='album-name'>{this.props.album_data.album_name}</span>

                                    {/* Arist name */}
                                    <span className='artist-name'>{artist_name}</span>

                                    {/* Year of release */}
                                    <span className='year-of-release'>{this.props.album_data.year_of_release}</span>

                                    {/* List of genres */}
                                    <div className='genres list-of-tags'>
                                        {/* <p>genres</p> */}
                                        {genres.map(g => {
                                            return <span className='genre-tag' key={g}>
                                                {g}
                                            </span>
                                        })}
                                    </div>

                                    {/* List of themes */}
                                    <div className='themes list-of-tags'>
                                        {/* <p>themes</p> */}
                                        {themes.map(t => {
                                            return <span className='theme-tag' key={t}>
                                                {t}
                                            </span>
                                        })}
                                    </div>

                                    {/* Links */}
                                    <div className='links' title="Links">
                                        {/* <p>links</p> */}
                                        <a className='album-lastfm-link' href={this.props.album_data.lastfm_url} target='_blank'>LastFM</a>
                                        <a className='album-rym-link' href={this.props.album_data.rym_url} target='_blank'>RYM</a>
                                        <a className='album-spotify-link' href={this.props.album_data.spotify_url} target='_blank'>Spotify</a>
                                    </div>

                                    <div className='album-details-myData'>                                        
                                        <div className='myPosition generic-hover' title='Position in my toplist'>
                                            <Link to='/music'>
                                                <span>#{this.props.album_data.position_str}</span>
                                                <span>in my toplist</span>
                                            </Link>
                                        </div>

                                        {/* My rating */}
                                        <div className='myRating'>
                                            <span>{this.props.album_data.my_rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='prev-and-next-review-links'>
                                {/* Prev review link */}
                                <div className='prev-review-link' title="Click to go to previous album in toplist">
                                    <Link to={'/music/' + review_id_of_prev_album}>
                                        <p>&lt;</p>
                                    </Link>
                                </div>

                                {/* Next review link */}
                                <div className='next-review-link' title="Click to go to next album in toplist">
                                    <Link to={'/music/' + review_id_of_next_album}>
                                        <p>&gt;</p>                             
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='review-content-and-tracklist'>
                            {/* Tracklist */}
                            {/*}
                            <div className='tracklist'>
                                {all_tracks.map(t => {
                                    let track_index = t['@attr']['rank'];
                                    let track_name = t['name'];
                                    let track_url = t['url'];
                                    return <a href={track_url} target='_blank' className='track' key={track_index} title={track_name}>
                                        <span className='track-index'>#{track_index}</span>
                                        <span className="track-name">{track_name}</span>
                                    </a>
                                })}
                            </div>
                            */}

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
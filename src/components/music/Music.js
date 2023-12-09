import React, { Component } from 'react';
import { connect }  from 'react-redux';
import AlbumGridElement from './AlbumGridElement';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";

class Music extends Component {

    /**
     * Generate colour based on play count
     * @param {*} play_count 
     */
    generate_bg_colour_of_play_count(play_count, max) {
        /*
        //value from 0 to 1
        var hue = ((play_count) * max).toString(10);
        return ["hsl(", hue, ",100%,", 50, "%)"].join("");
        */

        // calculte colour...
        let Red = 255 - (255 * (play_count / max));
        let Green = 255 * (play_count / max);
        let Blue = 0;

        // format to CSS value and return
        return 'rgb(' + Red + ',' + Green + ',' + Blue + ')'; 
    }


    componentDidMount() {
        // first find out what highest play count is...
        const play_counts = [];
        const tracks = document.getElementsByClassName("track-container");
        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            let play_count = Number(track.getAttribute('data-playCount'));
            play_counts.push(play_count);
        }
        
        // get highest play count...
        let highest_play_count = Math.max(...play_counts);
        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            let play_count = Number(track.getAttribute('data-playCount'));
            let play_count_div = track.children[2];
            play_count_div.style.backgroundColor = this.generate_bg_colour_of_play_count(play_count, highest_play_count);
        }
    }

    render() {
        // console.log(this.props.albumReviewsData);
        console.log(this.props);

        return (
            <div className='page-wrapper' id="music-page">
                <div className='section-inner'>
                    <div className='music-page-container'>
                        <div className='top-tracks-list-container custom-card'>
                            {/* Title */}
                            <div className='card-title'>
                                <span>My {Object.keys(this.props.top_tracks.overall).length} most listened songs</span>
                                <div className='more-info'>
                                    <span>*since October 2020</span>
                                </div>
                            </div>

                            {/* buttons */}
                            <div className='btns'>
                                {/* Time period */}
                                <div className='dropdown-list-btn filter-btn filter-time-period'>
                                    <span>All time</span>
                                    <ArrowDownIcon className='invertable-icon' />
                                </div>
                                
                                {/* Genres */}
                                <div className='dropdown-list-btn filter-btn filter-genre'>
                                    <span>All genres</span>
                                    <ArrowDownIcon className='invertable-icon' />
                                </div>
                            </div>
                            
                            {/* Divider */}
                            <div className='card-divider'></div>

                            {/* Column names */}
                            <div className='top-tracks-list-columnNames'>
                                <div className='col position-th'>#</div>
                                <div className='col'></div>
                                <div className='col play-count-th'>Scrobbles</div>
                            </div>

                            {/* Actual list */}
                            <div className='top-tracks-list'>
                                {this.props.top_tracks.overall.map(t => {
                                    return <a className='track-container' href={t.lastfm_track_url} target="_blank" id={`track-${t.position}`} data-playCount={t.play_count}>
                                        <div className='col position'>{t.position}</div>
                                        <div className='col track-info'>
                                            <img className='album-cover' src={t.album_cover} width={30} height={30} />
                                            <div className='artist-and-track-name-container'>
                                                <span className='artist-name'>{t.artist_name}</span>
                                                <span className='track-name'>{t.track_name}</span>
                                            </div>
                                        </div>
                                        <div className='col play-count'>
                                            <span>{t.play_count}</span>
                                        </div>
                                    </a>
                                })}
                            </div>
                        </div>

                        <div className='top-albums-list-container custom-card'>
                            <span className='page-title'>My top {this.props.top_albums.length} favourite albums of all time</span>
                            <div className='top-albums-list'>
                                {this.props.top_albums.map(a => {
                                    return <AlbumGridElement
                                        album={a}
                                        albumsList={this.props.top_albums}
                                    />
                                })}
                            </div>
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
        top_albums: state.top_albums,
        top_tracks: state.top_tracks,
    }
}

export default connect(mapStateToProps)(Music)
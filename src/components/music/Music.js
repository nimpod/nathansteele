import React, { Component } from 'react';
import { connect }  from 'react-redux';

import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import AlbumGridElement from './AlbumGridElement';
import {
    // handle_filter_button_toggling_stuff,
    toggle_dropdown_list,
    // toggle_dropdown_list_arrow_icon,
    // remove_class_from_item_when_user_clicks_outside_of_item
} from '../../js/helpers.js';


const enumValue = (name) => Object.freeze({toString: () => name});
const TimePeriodOptions = Object.freeze({
    ALL_TIME: enumValue("all_time"),
    LAST_12_MONTHS: enumValue("last_12_months"),
    LAST_6_MONTHS: enumValue("last_6_months"),
    LAST_3_MONTHS: enumValue("last_3_months"),
    LAST_MONTH: enumValue("last_month"),
    LAST_7_DAYS: enumValue("last_7_days"),
});
const TimePeriodOptionsStr = Object.freeze({
    ALL_TIME: "All Time",
    LAST_12_MONTHS: "Last 12 months",
    LAST_6_MONTHS: "Last 6 months",
    LAST_3_MONTHS:"Last 3 months",
    LAST_MONTH: "Last month",
    LAST_7_DAYS: "Last 7 days",
})

// TODO: make this less shit. Surely there's a way to automate this iterating over the enum types.....
const time_period_options = [
    TimePeriodOptions.ALL_TIME.toString(),
    TimePeriodOptions.LAST_12_MONTHS.toString(),
    TimePeriodOptions.LAST_6_MONTHS.toString(),
    TimePeriodOptions.LAST_3_MONTHS.toString(),
    TimePeriodOptions.LAST_MONTH.toString(),
    TimePeriodOptions.LAST_7_DAYS.toString(),
]


class Music extends Component {

    /**
     * Generate colour based on play count
     * @param {*} play_count 
     */
    generate_bg_colour_of_play_count(play_count, max) {
        let Red = 255 - (255 * (play_count / max));
        let Green = 255 * (play_count / max);
        let Blue = 100;
        return 'rgb(' + Red + ',' + Green + ',' + Blue + ')'; 
    }

    /**
     * 
     */
    componentDidMount() {
        // first find out what highest play count is...
        const play_counts = [];
        const tracks = document.getElementsByClassName("track-container");
        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            let play_count = Number(track.getAttribute('data-playcount'));
            play_counts.push(play_count);
        }
        
        // get highest play count...
        let highest_play_count = Math.max(...play_counts);
        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            let play_count = Number(track.getAttribute('data-playcount'));
            let play_count_div = track.children[2];
            play_count_div.style.backgroundColor = this.generate_bg_colour_of_play_count(play_count, highest_play_count);
        }
    }
    
    /**
     * 
     * @param {*} event 
     * @param {*} time_period 
     */
    filter_by_time_period(event, time_period) {
        console.log(time_period);
    }

    /**
     * Render function
     * @returns 
     */
    render() {
        // console.log(this.props.albumReviewsData);
        console.log(this.props);

        // generate list of all the genres...
        const unique_genres = new Set();
        for (let i = 0; i < this.props.top_albums.length; i++) {
            let album = this.props.top_albums[i];
            if (album.genres !== undefined) {
                let genres = album.genres.split(";");
                genres.forEach((g) => {
                    unique_genres.add(g.trim());
                })
            }
        }

        // top tracks list (default to overall time period)
        let top_tracks_list = this.props.top_tracks.overall;

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

                            {/* filter buttons */}
                            <div className='btns'>
                                {/* Time period */}
                                <div className='filter-by-timePeriod-btn filter-by-something-container'>
                                    <div className='dropdown-list-timePeriod-btn dropdown-list-btn' onClick={(e) => toggle_dropdown_list(e, 'dropdown-list-timePeriod')}>
                                        <span>All time</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                    <div className='dropdown-list-timePeriod dropdown-list'>
                                        <div className='dropdown-list-title'>Filter by time period</div>
                                        {
                                            time_period_options.map((time_period => {
                                                return <div className="btn tracks-filter-by-timePeriod-btn" key={time_period} onClick={(e) => this.filter_by_time_period(e, time_period)}>
                                                    <span className='timePeriod-text'>{time_period}</span>
                                                </div>
                                            }))
                                        }
                                    </div>
                                </div>

                                {/* Genres */}
                                {/*}
                                <div className='filter-by-genre-btn filter-by-something-container'>
                                    <div className='dropdown-list-btn filter-btn filter-genre'>
                                        <span>All genres</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                </div>
                                */}
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
                                {top_tracks_list.map(t => {
                                    return <a className='track-container' href={t.lastfm_track_url} target="_blank" id={`track-${t.position}`} data-playcount={t.play_count} key={t.lastfm_track_url}>
                                        <div className='col position'>{t.position}</div>
                                        <div className='col track-info'>
                                            {/*}
                                            <img className='album-cover' src={t.album_cover} width={30} height={30} />
                                            */}
                                            <div className='artist-and-track-name-container'>
                                                <span className='track-name'>{t.track_name}</span>
                                                <span className='artist-name'>{t.artist_name}</span>
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
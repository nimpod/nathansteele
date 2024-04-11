import React, { Component } from 'react';
import { connect }  from 'react-redux';

import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import AlbumGridElement from './AlbumGridElement';
import {
    handle_filter_button_toggling_stuff,
    toggle_dropdown_list,
    remove_genre_duplicates,
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
    state = {
        // state representation of data that is displayed/filtered/sorted
        __filtered_data: Array.from(this.props.top_albums)
            .sort((a,b) => { return a['position'] - b['position'] }),

        // filters...
        __current_genre_filter: "All Genres",

        // search stuff...
        __search_box_contains_text: false,
        __search_box_was_clicked: false,
        __search_text: "",

        // defaults...
        __default_genre_filter: "All Genres",
    }

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
     * Given a list of duplicate genres, return a new list only stating each genre once.
     * In other words, remove all duplicates.
     */
    remove_genre_duplicates() {
        let no_duplicates = new Set();
        this.props.top_albums.forEach((a) => {
            if (a.genres !== undefined) {
                a.genres.forEach((g) => {
                    no_duplicates.add(g.trim());
                })
            }
        })

        // convert set to array...
        let no_duplicates_arr = Array.from(no_duplicates);

        // add default genre to top of array...
        no_duplicates_arr.unshift(this.state.__default_genre_filter);

        return no_duplicates_arr;
    }

    /**
     * Filter list by specified genre
     * @param {*} e 
     * @param {*} genre_selected 
     */
    filter_by_genre = (e, genre_selected) => {
        // do nothing if the language selected is already selected...
        if (genre_selected !== this.state.__current_genre_filter) {
            // update the 'current_genre_filter' state...
            this.setState({__current_genre_filter: genre_selected})

            this.setState(prevState => {
                return {
                    __filtered_data: Array.from(this.props.top_albums)
                        .filter((a) => {
                            // console.log(a.artist_name);
                            // console.log(a.album_name);

                            if (genre_selected === this.state.__default_genre_filter) {
                                // show all albums...
                                return true;
                            }
                            if (a.genres !== undefined) {
                                // only show albums that contain the requested genre...
                                return a.genres_lowercase.includes(genre_selected.toLowerCase());
                            }
                        })
                }
            })

            // deal with button stuff...
            let actual_button = handle_filter_button_toggling_stuff(e.target, '.filter-list-by-genre-btn');
            
            // toggle the .active class
            if (!actual_button.classList.contains('active')) {
                // enable filter...
                actual_button.classList.add('active');
            } else {
                // disable filter...
                actual_button.classList.remove('active');
                this.setState({__current_genre_filter: ""})
               // this.setState({__filtered_data: this.state.__filtered_data.reverse()})
            }
        }
    }

    /**
     * Render function
     * @returns 
     */
    render() {
        // console.log(this.props);

        // get items for current page...
        const albums_displayed = this.state.__filtered_data;
        
        // generate list of all the genres...
        const all_genres = this.remove_genre_duplicates();

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
                            {/* Title */}
                            <span className='page-title'>My top {this.props.top_albums.length} favourite albums of all time</span>

                            {/* Header */}
                            <div className='top-albums-list-header'>
                                <div className='filter-by-genre-btns filter-by-something-container'>
                                    <div className='dropdown-list-genres-btn dropdown-list-btn' onClick={(e) => toggle_dropdown_list(e, 'dropdown-list-genres')}>
                                        <span>{this.state.__current_genre_filter}</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                    <div className='dropdown-list-genres dropdown-list'>
                                        <div className='dropdown-list-title'>Filter by genre...</div>
                                        {
                                            // iterate over all genres...
                                            all_genres.map((genre => {
                                                return <div className="btn filter-list-by-genre-btn" key={genre} onClick={(e) => this.filter_by_genre(e, genre)}>
                                                    <span className='genre-text'>
                                                        {genre}
                                                    </span>
                                                    <span className='genre-count'>
                                                        {
                                                            Array.from(this.props.top_albums).filter(a => {
                                                                let genre_lowercase = genre.toLowerCase();

                                                                if (a.genres_lowercase !== undefined) {
                                                                    if (genre === this.state.__default_genre_filter) {
                                                                        return Array.from(a.genres_lowercase)
                                                                    }
                                                                    return a.genres_lowercase.includes(genre_lowercase);
                                                                }
                                                            }).length
                                                        }
                                                    </span>
                                                </div>
                                            }))
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* Top albums list */}
                            <div className='top-albums-list'>
                                {albums_displayed.map(a => {
                                    return <AlbumGridElement
                                        album={a}
                                        albumsList={albums_displayed}
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
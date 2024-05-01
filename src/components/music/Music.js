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

/**
 * Time period options for top 100 tracks (this is nothing to do with top albums list)
 */
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
const time_period_options = [
    TimePeriodOptions.ALL_TIME.toString(),
    TimePeriodOptions.LAST_12_MONTHS.toString(),
    TimePeriodOptions.LAST_6_MONTHS.toString(),
    TimePeriodOptions.LAST_3_MONTHS.toString(),
    TimePeriodOptions.LAST_MONTH.toString(),
    TimePeriodOptions.LAST_7_DAYS.toString(),
]

/**
 * Properties of an album, useful for filtering the list.
 */
const AlbumProperties = Object.freeze({
    ARTIST_NAME: enumValue("artist_name"),
    GENRES: enumValue("genres"),
    YEAR: enumValue("year_of_release"),
})

const MIN_GENRE_COUNT_TO_BE_DISPLAYED = 4;
const MIN_ARTIST_COUNT_TO_BE_DISPLAYED = 2;
const MIN_YEAR_COUNT_TO_BE_DISPLAYED = 2;


class Music extends Component {
    state = {
        // state representation of data that is displayed/filtered/sorted
        __filtered_data: Array.from(this.props.top_albums)
            .sort((a,b) => { return a['position'] - b['position'] }),

        // filters...
        __current_genre_filter: "All genres",
        __current_artist_filter: "All artists",
        __current_year_filter: "All years",

        // search stuff...
        __search_box_contains_text: false,
        __search_box_was_clicked: false,
        __search_text: "",

        // defaults...
        __default_genre_filter: "All genres",
        __default_artist_filter: "All artists",
        __default_year_filter: "All years",
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
     * Filter list by specified genre
     * @param {*} e 
     * @param {*} genre_selected 
     */
    filter_by_genre = (e, genre_selected) => {
        console.log(genre_selected);
        console.log(this.state.__current_genre_filter);

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
     * Filter list by specified artist
     * @param {*} e 
     * @param {*} artist_selected 
     */
    filter_by_artist = (e, artist_selected) => {
        // do nothing if the language selected is already selected...
        if (artist_selected !== this.state.__current_artist_filter) {
            // update the 'current_genre_filter' state...
            this.setState({__current_artist_filter: artist_selected})

            this.setState(prevState => {
                return {
                    __filtered_data: Array.from(this.props.top_albums)
                        .filter((a) => {
                            // console.log(a.artist_name);
                            // console.log(a.album_name);

                            if (artist_selected === this.state.__default_artist_filter) {
                                // show all albums...
                                return true;
                            }
                            return a.artist_name.includes(artist_selected);
                        })
                }
            })

            // deal with button stuff...
            let actual_button = handle_filter_button_toggling_stuff(e.target, '.filter-list-by-artist-btn');
            
            // toggle the .active class
            if (!actual_button.classList.contains('active')) {
                // enable filter...
                actual_button.classList.add('active');
            } else {
                // disable filter...
                actual_button.classList.remove('active');
                this.setState({__current_artist_filter: ""})
               // this.setState({__filtered_data: this.state.__filtered_data.reverse()})
            }
        }
    }

    /**
     * 
     * @param {*} e 
     * @param {*} year_selected 
     */
    filter_by_year = (e, year_selected) => {
        // do nothing if the language selected is already selected...
        if (year_selected !== this.state.__current_year_filter) {
            // update the 'current_genre_filter' state...
            this.setState({__current_year_filter: year_selected})

            this.setState(prevState => {
                return {
                    __filtered_data: Array.from(this.props.top_albums)
                        .filter((a) => {
                            if (year_selected === this.state.__default_year_filter) {
                                // show all albums...
                                return true;
                            }
                            return a.year_of_release == year_selected;
                        })
                }
            })

            // deal with button stuff...
            let actual_button = handle_filter_button_toggling_stuff(e.target, '.filter-list-by-year-btn');
            
            // toggle the .active class
            if (!actual_button.classList.contains('active')) {
                // enable filter...
                actual_button.classList.add('active');
            } else {
                // disable filter...
                actual_button.classList.remove('active');
                this.setState({__current_year_filter: ""})
               // this.setState({__filtered_data: this.state.__filtered_data.reverse()})
            }
        }
    }

    /**
     * Remove duplicate values from my albums toplist
     * Useful if you want to, for example, simply get a list of artists in my toplist, but each artist only referenced once.
     * 
     * @param {Album property (e.g. artist_name)} property 
     * @param {Default value of this property} default_value_for_this_property 
     * @returns 
     */
    remove_duplicates_from_albums_toplist(property, default_value_for_this_property) {
        let no_duplicates = new Set();

        // iterate through each album...
        this.props.top_albums.forEach((album) => {
            // we are removing duplicate artist names...
            if (property == "artist_name") {
                if (album[property] !== undefined) {
                    no_duplicates.add(album[property].trim());
                }
            }
            
            // we are removing duplicate genres...
            else if (property == "genres") {
                if (album[property] !== undefined) {
                    album[property].forEach((g) => {
                        no_duplicates.add(g.trim());
                    })
                }
            }

            else {
                if (album[property] !== undefined) {
                    no_duplicates.add(album[property]);
                }
            }
        })

        // convert set to array...
        let no_duplicates_arr = Array.from(no_duplicates);

        // add default genre to top of array...
        no_duplicates_arr.unshift(default_value_for_this_property);

        return no_duplicates_arr;
    }

    /**
     * Create list of mappings between {album_property -> count_num_of_occurances}
     * The list will be sorted by count_num_of_occurances in descending order (i.e. highest to lowest)
     * 
     * For example...
     *   A list of all artists mapped to number of their albums in my toplist:
     *    [{ "item": "XTC", "count": 12 },
     *     { "item": "Boards of Canada", "count": 8 },
     *     { "item": "Hiromi", "count": 6 },
     *     ...]
     * 
     *   A list of all genres with number of albums in my toplist:
     *    [{ "item": "Electronic", "count": 77 },
     *     { "item": "Ambient", "count": 40 },
     *     { "item": "Jazz", "count": 29 },
     *     ...]
     * @param {Album property (e.g. Genres)} property 
     * @param {Default value of this property} default_property 
     * @param {List to use (e.g. List of unique genres)} list 
     * @returns 
     */
    find_num_of_albums(property, default_property) {
        let copyOfThis = this;

        // remove duplicates from albums toplist...
        const no_duplicates = this.remove_duplicates_from_albums_toplist(property, default_property);

        // initialise new list, that will map each item to a number
        const album_count_list = [];

        // iterate over no duplicates list, count num of occurances per item...
        no_duplicates.forEach(function(item) {
            let album_count = Array.from(copyOfThis.props.top_albums).filter(album => {

                // how many albums per artist?
                if (property === "artist_name") {
                    if (item === default_property) {
                        return Array.from(album.artist_name);
                    }
                    return album.artist_name === item;
                }

                // how many albums per genre?
                else if (property == "genres") {
                    let genre_lowercase = item.toLowerCase();

                    if (album.genres_lowercase !== undefined) {
                        if (item === default_property) {
                            return Array.from(album.genres_lowercase)
                        }
                        return album.genres_lowercase.includes(genre_lowercase);
                    }
                }

                // how many albums per year?
                else if (property == "year_of_release") {
                    if (album.year_of_release !== undefined) {
                        if (item === default_property) {
                             return Array.from(album.year_of_release);
                        }
                        return album.year_of_release === item;
                    }
                }
            }).length;

            album_count_list.push({
                "item": item,
                "count": album_count
            });
        })

        // show in reverse order of album count (i.e. XTC 12 albums, Logic 9 albums, Hiromi 6 albums, etc...)
        album_count_list.sort((a, b) => a.count - b.count).reverse();
        
        return album_count_list;
    }

    /**
     * Render function
     * @returns 
     */
    render() {
        //console.log(this.props);

        // get items for current page...
        const albums_displayed = this.state.__filtered_data;
        
        // generate lists...
        const all_artists_album_count = this.find_num_of_albums(AlbumProperties.ARTIST_NAME.toString(), this.state.__default_artist_filter);
        const all_genres_album_count = this.find_num_of_albums(AlbumProperties.GENRES.toString(), this.state.__default_genre_filter);
        const all_years_album_count = this.find_num_of_albums(AlbumProperties.YEAR.toString(), this.state.__default_year_filter);

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
                                <div id='filter-by-genre-btns'>
                                    {
                                        all_genres_album_count.map((obj => {
                                            if (obj.count >= MIN_GENRE_COUNT_TO_BE_DISPLAYED) {
                                                return <div className="btn filter-list-by-album-property filter-list-by-genre-btn" key={obj.item} onClick={(e) => this.filter_by_genre(e, obj.item)}>
                                                    <span className='item-text'>{obj.item}</span>
                                                    <span className='item-count'>{obj.count}</span>
                                                </div>
                                            }
                                        }))
                                    }
                                </div>
                                
                                <div id='filter-by-artist-btns'>
                                    {
                                        all_artists_album_count.map((obj => {
                                            if (obj.count >= MIN_ARTIST_COUNT_TO_BE_DISPLAYED) {
                                                return <div className="btn filter-list-by-album-property filter-list-by-artist-btn" key={obj.item} onClick={(e) => this.filter_by_artist(e, obj.item)}>
                                                    <span className='item-text'>{obj.item}</span>
                                                    <span className='item-count'>{obj.count}</span>
                                                </div>
                                            }
                                        }))
                                    }
                                </div>

                                <div id='filter-by-year-btns'>
                                    {
                                        all_years_album_count.map((obj => {
                                            if (obj.count >= MIN_YEAR_COUNT_TO_BE_DISPLAYED) {
                                                return <div className="btn filter-list-by-album-property filter-list-by-year-btn" key={obj.item} onClick={(e) => this.filter_by_year(e, obj.item)}>
                                                    <span className='item-text'>{obj.item}</span>
                                                    <span className='item-count'>{obj.count}</span>
                                                </div>
                                            }
                                        }))
                                    }
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
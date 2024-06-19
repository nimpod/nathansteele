import React, { Component } from 'react';
import { connect }  from 'react-redux';

import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { AlbumProperties } from '../../js/enums.js';
import TopTracksList from './TopTracksList.js';
import AlbumGridElement from './AlbumGridElement';
import { event_listener_for_top_albums_list_nav_item } from "../../js/main.js";
import {
    handle_filter_button_toggling_stuff,
    // toggle_dropdown_list,
    // remove_genre_duplicates,
    // toggle_dropdown_list_arrow_icon,
    // remove_class_from_item_when_user_clicks_outside_of_item
} from '../../js/helpers.js';


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
        __current_reviewer_filter: "All reviewers",

        // search stuff...
        __search_box_contains_text: false,
        __search_box_was_clicked: false,
        __search_text: "",

        // defaults...
        __default_genre_filter: "All genres",
        __default_artist_filter: "All artists",
        __default_year_filter: "All years",
        __default_reviewer_filter: "All reviewers",
    }

    /**
     * Low numbers = Bad
     * High numbers = Good
     * 
     * For example...
     *  A play_count (the higher the number the more you've played the song)
     *  An album rating out of 10 (the higher the number the better the album)
     * @param {*} num 
     */
    generate_colour_v1(num, max) {
        let Red = 255 - (255 * (num / max));
        let Green = 255 * (num / max);
        let Blue = 100;
        return 'rgb(' + Red + ',' + Green + ',' + Blue + ')'; 
    }

    /**
     * Low numbers = Good
     * High numbers = Bad
     * 
     * For example...
     *  A position in a list (the lower the number the better, because you want to be #1)
     * @param {*} num 
     * @param {*} max 
     */
    generate_colour_v2(num, max) {
        let Red = 255 - (255 * (num / max));
        let Green = 255 * (num / max);
        let Blue = 250;
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
            play_count_div.style.backgroundColor = this.generate_colour_v1(play_count, highest_play_count);
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
     * 
     * @param {*} e 
     * @param {*} reviewer_selected 
     */
    filter_by_reviewer = (e, reviewer_selected) => {
        // do nothing if the language selected is already selected...
        if (reviewer_selected !== this.state.__current_reviewer_filter) {
            // update the 'current_genre_filter' state...
            this.setState({__current_reviewer_filter: reviewer_selected})

            this.setState(prevState => {
                return {
                    __filtered_data: Array.from(this.props.top_albums)
                        .filter((a) => {
                            if (reviewer_selected === this.state.__default_reviewer_filter) {
                                // show all albums...
                                return true;
                            }
                            return a.recommended_by == reviewer_selected;
                        })
                }
            })

            // deal with button stuff...
            let actual_button = handle_filter_button_toggling_stuff(e.target, '.filter-list-by-reviewer-btn');
            
            // toggle the .active class
            if (!actual_button.classList.contains('active')) {
                // enable filter...
                actual_button.classList.add('active');
            } else {
                // disable filter...
                actual_button.classList.remove('active');
                this.setState({__current_reviewer_filter: ""})
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

                // how many albums per 'Recommened by' ?
                else if (property == "recommended_by") {
                    if (album.recommended_by !== undefined) {
                        if (item === default_property) {
                             return Array.from(album.recommended_by);
                        }
                        return album.recommended_by === item;
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
     * 
     * @param {*} albums_displayed 
     * @param {*} filter_info_div 
     * @returns 
     */
    calculate_avgs(albums_displayed, filter_info_div) {
        let positions = [];
        let ratings = [];
        let num_of_albums = 0;
        let avg_pos = 0;
        let avg_rating = 0;

        // extract list of ratings, and list of positions...
        for (let i = 0; i < albums_displayed.length; i++) {
            // get all details about this current album...
            let album = albums_displayed[i];
            
            // list of all this artist's album positions...
            positions.push(album['position']);

            // list of all this artist's album ratings...
            if (album['my_rating'] !== undefined) { ratings.push(album['my_rating']); }

            // keep track of total number of album's this artist is associated with...
            num_of_albums += 1;
        }
        
        // calculate averages...
        avg_pos = positions.reduce((a, b) => a + b, 0) / positions.length;
        avg_rating = ratings.reduce((a, b) => a + b, 0) / ratings.length;

        // round to 2 dp...
        avg_pos = avg_pos.toFixed(0);
        avg_rating = avg_rating.toFixed(2);

        // make numbers colourful...
        let DOM_avg_pos = filter_info_div.children[0].children[0];
        let DOM_avg_rating = filter_info_div.children[1].children[0];
        DOM_avg_pos.style.color = this.generate_colour_v2(avg_pos, this.props.top_albums.length);
        DOM_avg_rating.style.color = this.generate_colour_v1(avg_rating, 10.0);

        return {
            "avg_pos": avg_pos,
            "avg_rating": avg_rating,
            "num_of_albums": num_of_albums
        }
    }

    /**
     * 
     * @param {*} albums_displayed 
     * @param {*} current_filter 
     * @param {*} default_filter 
     * @returns 
     */
    show_filter_info(albums_displayed) {
        let num_of_albums = 0;
        let avg_pos = 0;
        let avg_rating = 0;
        let filter_criteria = "";
        let filter_type = "";
        let filter_url = "";

        if (this.state.__current_artist_filter !== this.state.__default_artist_filter) {
            // Filtering by ARTIST
            let filter_info_div = document.getElementById('filtered-albums-list-info');
            if (filter_info_div !== null) {
                filter_info_div.classList.add('filters-active');
                filter_criteria = this.state.__current_artist_filter;

                let obj = this.calculate_avgs(albums_displayed, filter_info_div);
                avg_pos = obj['avg_pos'];
                avg_rating = obj['avg_rating'];
                num_of_albums = obj['num_of_albums'];

                filter_type = "Artist:";
            }
        } else if (this.state.__current_genre_filter !== this.state.__default_genre_filter) {
            // Filtering by GENRE
            let filter_info_div = document.getElementById('filtered-albums-list-info');
            if (filter_info_div !== null) {
                filter_info_div.classList.add('filters-active');
                filter_criteria = this.state.__current_genre_filter;

                let obj = this.calculate_avgs(albums_displayed, filter_info_div);
                avg_pos = obj['avg_pos'];
                avg_rating = obj['avg_rating'];
                num_of_albums = obj['num_of_albums'];

                filter_type = "Genre:";
            }
        } else if (this.state.__current_year_filter !== this.state.__default_year_filter) {
            // Filtering by YEAR
            let filter_info_div = document.getElementById('filtered-albums-list-info');
            if (filter_info_div !== null) {
                filter_info_div.classList.add('filters-active');
                filter_criteria = this.state.__current_year_filter;

                let obj = this.calculate_avgs(albums_displayed, filter_info_div);
                avg_pos = obj['avg_pos'];
                avg_rating = obj['avg_rating'];
                num_of_albums = obj['num_of_albums'];

                filter_type = "Year:";
            }
        } else if (this.state.__current_reviewer_filter !== this.state.__default_reviewer_filter) {
            // Filtering by REVIEWER
            let filter_info_div = document.getElementById('filtered-albums-list-info');
            if (filter_info_div !== null) {
                filter_info_div.classList.add('filters-active');
                filter_criteria = (this.state.__current_reviewer_filter).name;

                let obj = this.calculate_avgs(albums_displayed, filter_info_div);
                avg_pos = obj['avg_pos'];
                avg_rating = obj['avg_rating'];
                num_of_albums = obj['num_of_albums'];

                filter_type = "Recommened by...";
                filter_url = (this.state.__current_reviewer_filter).url;
            }
        } else {
            let filter_info_div = document.getElementById('filtered-albums-list-info');
            if (filter_info_div !== null) {
                filter_info_div.classList.remove('filters-active');
            }
        }

        const info = {
            "filter_type": filter_type,
            "filter_criteria": filter_criteria,
            "filter_url": filter_url,
            "num_of_albums": num_of_albums,
            "avg_pos": avg_pos,
            "avg_rating": avg_rating,
        }

        //console.log(info);
        return info;
    }

    /**
     * Render function
     * @returns 
     */
    render() {
        //console.log(this.props);

        // get items for current page...
        const albums_displayed = this.state.__filtered_data;

        // filtering...
        const filter = this.show_filter_info(albums_displayed);
        const filter_url = filter['filter_url'];
        const filter_type = filter['filter_type'];
        const filter_criteria = filter['filter_criteria'];

        // generate lists...
        const all_artists_album_count = this.find_num_of_albums(AlbumProperties.ARTIST_NAME.toString(), this.state.__default_artist_filter);
        const all_genres_album_count = this.find_num_of_albums(AlbumProperties.GENRES.toString(), this.state.__default_genre_filter);
        const all_years_album_count = this.find_num_of_albums(AlbumProperties.YEAR.toString(), this.state.__default_year_filter);
        const all_reviewers_album_count = this.find_num_of_albums(AlbumProperties.RECOMMENDED_BY.toString(), this.state.__default_reviewer_filter);

        // top tracks list (default to overall time period)
        let top_tracks_list = this.props.top_tracks.overall;

        return (
            <div className='page-wrapper' id="music-page">
                <div className='section-inner'>
                    <div className='music-page-container'>
                        {/*
                        <TopTracksList
                            list={this.props.top_tracks.overall} 
                            filter_by_time_period={this.filter_by_time_period}
                        />
                        */}

                        <div className='top-albums-list-container'>
                            {/* Title */}
                            <span className='page-title'>My top {this.props.top_albums.length} favourite albums of all time</span>

                            {/* Header */}
                            <div className='top-albums-list-header'>
                                {/* Genres */}
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
                                
                                {/* Artists */}
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
                                
                                {/* Years */}
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
                                
                                {/* Recommened by... */}
                                <div id='filter-by-RecommendedBy-btns'>
                                    {
                                        all_reviewers_album_count.map((obj => {
                                            // for the 'All artists' button
                                            let artist_name = (obj.item.name !== undefined) ? obj.item.name : obj.item;
                                            
                                            return <div className="btn filter-list-by-album-property filter-list-by-reviewer-btn" key={obj.item} onClick={(e) => this.filter_by_reviewer(e, obj.item)}>
                                                    <span className='item-text'>{artist_name}</span>
                                                    <span className='item-count'>{obj.count}</span>
                                                </div>
                                        }))
                                    }
                                </div>
                            </div>

                            {/* Information about what is currently being filtered (if anything) */}
                            <div id="filtered-albums-list-info">
                                <p className={`avgPos avgPos_`+filter['avg_pos']}>Average position: <span>#{filter['avg_pos']}</span></p>
                                <p className={`avgRating avgRating_`+filter['avg_rating']}>Average rating: <span>{filter['avg_rating']}/10</span></p>
                                <p className={`numOfAlbums_`+filter['num_of_albums']}>Num of albums: <span>{filter['num_of_albums']}</span></p>
                                <p>Filtered by <span>{filter_type} {(filter_url.length > 0) ? <a href={filter_url} target='_blank'>{filter_criteria}</a> : filter_criteria}</span></p>
                            </div>

                            {/* Top albums list */}
                            <div className='top-albums-list-container'>
                                {/* Navigation for list */}
                                <div id='top-albums-list-navigation'>
                                    <div id='link-to-album-25' className='navItem active'><p>25</p></div>
                                    <div id='link-to-album-50' className='navItem'><p>50</p></div>
                                    <div id='link-to-album-75' className='navItem'><p>75</p></div>
                                    <div id='link-to-album-100' className='navItem'><p>100</p></div>
                                    <div id='link-to-album-125' className='navItem'><p>125</p></div>
                                    <div id='link-to-album-150' className='navItem'><p>150</p></div>
                                    <div id='link-to-album-175' className='navItem'><p>175</p></div>
                                    <div id='link-to-album-200' className='navItem'><p>200</p></div>
                                    <div id='link-to-album-225' className='navItem'><p>225</p></div>
                                    <div id='link-to-album-250' className='navItem'><p>250</p></div>
                                    <div id='link-to-album-275' className='navItem'><p>275</p></div>
                                    <div id='link-to-album-300' className='navItem'><p>300</p></div>
                                    <div id='link-to-album-325' className='navItem'><p>325</p></div>
                                    <div id='link-to-album-350' className='navItem'><p>350</p></div>
                                    <div id='link-to-album-375' className='navItem'><p>375</p></div>
                                    <div id='link-to-album-400' className='navItem'><p>400</p></div>
                                    <div id='link-to-album-425' className='navItem'><p>425</p></div>
                                    <div id='link-to-album-450' className='navItem'><p>450</p></div>
                                    <div id='link-to-album-475' className='navItem'><p>475</p></div>
                                    <div id='link-to-album-500' className='navItem'><p>500</p></div>
                                    <div id='link-to-album-525' className='navItem'><p>525</p></div>
                                    <div id='link-to-album-550' className='navItem'><p>550</p></div>
                                    <div id='link-to-album-575' className='navItem'><p>575</p></div>
                                    <div id='link-to-album-600' className='navItem'><p>600</p></div>
                                </div>
                                
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
import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import $ from "jquery";

import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { AlbumProperties } from '../../js/enums.js';
import TopTracksList from './TopTracksList.js';
import AlbumGridElement from './AlbumGridElement';
import { event_listener_for_top_albums_list_nav_item } from "../../js/main.js";
import {
    handle_filter_button_toggling_stuff,
    generate_colour_v2,
    generate_colour_v1,
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
        DOM_avg_pos.style.color = generate_colour_v2(avg_pos, this.props.top_albums.length);
        DOM_avg_rating.style.color = generate_colour_v1(avg_rating, 10.0);

        return {
            "avg_pos": avg_pos,
            "avg_rating": avg_rating,
            "num_of_albums": num_of_albums
        }
    }

    /**
     * Filter list by specified genre
     * @param {*} e 
     * @param {*} genre_selected 
     */
    filter_by_genre = (e, genre_selected) => {
        //console.log(genre_selected);
        //console.log(this.state.__current_genre_filter);

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
            let top_level_button = document.querySelector('#albums-filterByGenre');

            // toggle the .active class
            if (!actual_button.classList.contains('active')) {
                // enable filter...
                actual_button.classList.add('active');
                top_level_button.classList.add('active');
            } else {
                // disable filter...
                actual_button.classList.remove('active');
                this.setState({__current_genre_filter: ""})
               // this.setState({__filtered_data: this.state.__filtered_data.reverse()})
            }

            if (genre_selected.toLowerCase() == "all genres") {
                top_level_button.classList.remove('active');
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
            let top_level_button = document.querySelector('#albums-filterByArtist');

            // toggle the .active class
            if (!actual_button.classList.contains('active')) {
                // enable filter...
                actual_button.classList.add('active');
                top_level_button.classList.add('active');
            } else {
                // disable filter...
                actual_button.classList.remove('active');
                this.setState({__current_artist_filter: ""})
               // this.setState({__filtered_data: this.state.__filtered_data.reverse()})
            }
            
            if (artist_selected.toLowerCase() == "all artists") {
                top_level_button.classList.remove('active');
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
            let top_level_button = document.querySelector('#albums-filterByYear');

            // toggle the .active class
            if (!actual_button.classList.contains('active')) {
                // enable filter...
                actual_button.classList.add('active');
                top_level_button.classList.add('active');
            } else {
                // disable filter...
                actual_button.classList.remove('active');
                this.setState({__current_year_filter: ""})
               // this.setState({__filtered_data: this.state.__filtered_data.reverse()})
            }

            if (year_selected.toLowerCase() == "all years") {
                top_level_button.classList.remove('active');
            }
        }
    }

    /**
     * 
     * @param {*} e 
     * @param {*} reviewer_selected 
     */
    filter_by_reviewer = (e, reviewer_selected) => {
        let reviewer_selected_name = reviewer_selected;
        if (reviewer_selected.name !== undefined) {
            reviewer_selected_name = reviewer_selected.name;
        }

        // do nothing if the language selected is already selected...
        if (reviewer_selected_name !== this.state.__current_reviewer_filter) {
            // update the 'current_genre_filter' state...
            this.setState({__current_reviewer_filter: reviewer_selected_name})

            this.setState(prevState => {
                return {
                    __filtered_data: Array.from(this.props.top_albums)
                        .filter((a) => {
                            if (reviewer_selected_name === this.state.__default_reviewer_filter) {
                                // show all albums...
                                return true;
                            }
                            return a.recommended_by == reviewer_selected;
                        })
                }
            })

            // deal with button stuff...
            let actual_button = handle_filter_button_toggling_stuff(e.target, '.filter-list-by-reviewer-btn');
            let top_level_button = document.querySelector('#albums-filterByReviewer');

            // toggle the .active class
            if (!actual_button.classList.contains('active')) {
                // enable filter...
                actual_button.classList.add('active');
                top_level_button.classList.add('active');
            } else {
                // disable filter...
                actual_button.classList.remove('active');
                this.setState({__current_reviewer_filter: ""})
               // this.setState({__filtered_data: this.state.__filtered_data.reverse()})
            }
            
            if (reviewer_selected_name.toLowerCase() == "all reviewers") {
                top_level_button.classList.remove('active');
            }
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
                filter_criteria = (this.state.__current_reviewer_filter);

                let obj = this.calculate_avgs(albums_displayed, filter_info_div);
                avg_pos = obj['avg_pos'];
                avg_rating = obj['avg_rating'];
                num_of_albums = obj['num_of_albums'];

                filter_type = "Recommened by...";
                //filter_url = (this.state.__current_reviewer_filter).url;
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
        // console.log(info);
        return info;
    }

    /**
     * New text handler for the searchbox
     * @param {Event} e 
     */
    handle_searchbox_input = (e) => {
        let text = e.target.value;
        // get user input and update state
        this.setState({__search_text: e.target.value});
        
        // no text is in the searchbox, so set state to false
        if (text.length === 0) {
            this.setState({__search_box_contains_text: false});
        }
        // there's some text in the searchbox, so set state to true
        else if (text.length > 0) {
            this.setState({__search_box_contains_text: true});
        }
    }

    /**
     * 
     * @param {*} e 
     */
    toggle_navitem = (e) => {
        // remove .active from all navItems first...
        $('.navItem').removeClass('active');

        // now add .active to the button just clicked...
        let nav_item_clicked = e.currentTarget;
        console.log(nav_item_clicked);
        nav_item_clicked.classList.add('active');

        // highlight album navigated to...
        let album_href = nav_item_clicked.href;
        let album_id = album_href.split('#')[2];
        let album_selected = document.getElementById(album_id);

        // check if the album was found first...
        if (album_selected !== null) {
            // highlight album...
            album_selected.classList.add('navigated-to');
            
            // unhighlight after certain amount of time...
            let N = 3 * 1000;
            setTimeout(() => {
                album_selected.classList.remove('navigated-to');
            }, N);
        }
    }

    /**
     * Render function
     * @returns 
     */
    render() {
        //console.log(this.props);

        // get items for current page...
        const albums_displayed = this.state.__filtered_data
            .filter((album) => {
                let search_text = this.state.__search_text.toLowerCase();
                let album_name_included = album.album_name.toLowerCase().includes(search_text);
                let artist_name_included = album.artist_name.toLowerCase().includes(search_text);
                return album_name_included || artist_name_included;
            });
        
        let less_than_12_albums_on_display = "";
        if (albums_displayed.length <= 12) {
            less_than_12_albums_on_display = `there-are-less-than-12-albums-on-display`;
        }

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

        // generate array of intervals (e.g. [1,25,50,75,100,...,600])
        const navigation = [1];
        const gap = 25;
        const max = 600;
        const num_of_sections = max / gap;
        for (let i = 1; i < num_of_sections+1; i++) {
            navigation.push(gap*i);
        }

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

                            {/* Information about what is currently being filtered (if anything) */}
                            <div id="filtered-albums-list-info">
                                <p className={`avgPos avgPos_`+filter['avg_pos']}>Average position: <span>#{filter['avg_pos']}</span></p>
                                <p className={`avgRating avgRating_`+filter['avg_rating']}>Average rating: <span>{filter['avg_rating']}/10</span></p>
                                <p className={`numOfAlbums_`+filter['num_of_albums']}>Num of albums: <span>{filter['num_of_albums']}</span></p>
                                <p>Filtered by <span>{filter_type} {(filter_url.length > 0) ? <a href={filter_url} target='_blank'>{filter_criteria}</a> : filter_criteria}</span></p>
                            </div>

                            {/* Top albums list */}
                            <div className='top-albums-list-innerContainer'>
                                <div id='top-albums-list-sidebar'>         
                                    {/* Searchbox... */}
                                    <div id='albums-searchbox' className='top-albums-list-sideSection'>
                                        <div className="searchbox">
                                            <input onChange={this.handle_searchbox_input} placeholder="search..." type="text" />
                                        </div>
                                    </div>

                                    {/* Filters */}                           
                                    <div id='top-albums-filtering-container' className='top-albums-list-sideSection'>
                                        <p className='sidebar-subsection-title'>Filters</p>

                                        {/* Filter by artist... */}
                                        <div id='albums-filterByArtist' className='albums-filterBtnsContainer'>
                                            <p className='current-filter'>{this.state.__current_artist_filter}</p>
                                            <div id='filter-by-artist-btns' className='albums-filterBtns'>
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
                                        </div>

                                        {/* Filter by genre... */}
                                        <div id='albums-filterByGenre' className='albums-filterBtnsContainer'>
                                            <p className='current-filter'>{this.state.__current_genre_filter}</p>
                                            <div id='filter-by-genre-btns' className='albums-filterBtns'>
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
                                        </div>

                                        {/* Filter by year... */}
                                        <div id='albums-filterByYear' className='albums-filterBtnsContainer'>
                                            <p className='current-filter'>{this.state.__current_year_filter}</p>
                                            <div id='filter-by-year-btns' className='albums-filterBtns'>
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

                                        {/* Filter by reviewer who recommened it to me... */}
                                        <div id='albums-filterByReviewer' className='albums-filterBtnsContainer'>
                                            <p className='current-filter'>{this.state.__current_reviewer_filter}</p>
                                            <div id='filter-by-Reviewer-btns' className='albums-filterBtns'>
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
                                    </div>

                                    {/* Navigation for list */}
                                    <div id='top-albums-list-navigation-container' className='top-albums-list-sideSection'>
                                        <p className='sidebar-subsection-title'>Navigation</p>

                                        <div id='top-albums-list-navigation'>
                                            {
                                                navigation.map((num => {
                                                    let classname = "navItem";
                                                    if (num == 1) {
                                                        classname = "navItem active";
                                                    }

                                                    return <HashLink 
                                                        key={num}
                                                        to={`#album-${num}`}
                                                        id={`link-to-album-${num}`}
                                                        className={classname}
                                                        onClick={(e) => this.toggle_navitem(e)}>
                                                            <p>{num}</p>
                                                    </HashLink>
                                                }))
                                            }
                                            {/*}
                                            <Link to='#album-1'   id='link-to-album-1'   className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>1</p></Link>
                                            <Link to='#album-25'  id='link-to-album-25'  className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>25</p></Link>
                                            <Link to='#album-50'  id='link-to-album-50'  className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>50</p></Link>
                                            <Link to='#album-75'  id='link-to-album-75'  className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>75</p></Link>
                                            <Link to='#album-100' id='link-to-album-100' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>100</p></Link>
                                            <Link to='#album-125' id='link-to-album-125' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>125</p></Link>
                                            <Link to='#album-150' id='link-to-album-150' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>150</p></Link>
                                            <Link to='#album-175' id='link-to-album-175' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>175</p></Link>
                                            <Link to='#album-200' id='link-to-album-200' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>200</p></Link>
                                            <Link to='#album-225' id='link-to-album-225' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>225</p></Link>
                                            <Link to='#album-250' id='link-to-album-250' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>250</p></Link>
                                            <Link to='#album-275' id='link-to-album-275' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>275</p></Link>
                                            <Link to='#album-300' id='link-to-album-300' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>300</p></Link>
                                            <Link to='#album-325' id='link-to-album-325' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>325</p></Link>
                                            <Link to='#album-350' id='link-to-album-350' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>350</p></Link>
                                            <Link to='#album-375' id='link-to-album-375' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>375</p></Link>
                                            <Link to='#album-400' id='link-to-album-400' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>400</p></Link>
                                            <Link to='#album-425' id='link-to-album-425' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>425</p></Link>
                                            <Link to='#album-450' id='link-to-album-450' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>450</p></Link>
                                            <Link to='#album-475' id='link-to-album-475' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>475</p></Link>
                                            <Link to='#album-500' id='link-to-album-500' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>500</p></Link>
                                            <Link to='#album-525' id='link-to-album-525' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>525</p></Link>
                                            <Link to='#album-550' id='link-to-album-550' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>550</p></Link>
                                            <Link to='#album-575' id='link-to-album-575' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>575</p></Link>
                                            <Link to='#album-600' id='link-to-album-600' className='navItem' onClick={(e) => this.toggle_navitem(e)}><p>600</p></Link>
                                            */}
                                        </div>
                                    </div>
                                </div>

                                <div className={`top-albums-list ${less_than_12_albums_on_display}`}>
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
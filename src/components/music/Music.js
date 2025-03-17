import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import $ from "jquery";

import TopTracksList from './TopTracksList.js';
import AlbumGridElement from './AlbumGridElement';
import AlbumListElement from './AlbumListElement.js';
import { event_listener_for_top_albums_list_nav_item } from "../../js/main.js";
import {
    handle_filter_button_toggling_stuff,
    generate_colour_v2,
    generate_colour_v1,
    get_actual_button
    // toggle_dropdown_list,
    // remove_genre_duplicates,
    // toggle_dropdown_list_arrow_icon,
    // remove_class_from_item_when_user_clicks_outside_of_item
} from '../../js/helpers.js';

import { 
    ViewType,
    AlbumProperties, 
    LocalStorageAlbums
} from '../../js/enums.js';

import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as ViewAsListIcon } from "../../icons/showList.svg";
import { ReactComponent as ViewAsGridIcon } from "../../icons/showGrid.svg";
import { useEffect } from 'react';


const MIN_GENRE_COUNT_TO_BE_DISPLAYED = 4;
const MIN_ARTIST_COUNT_TO_BE_DISPLAYED = 2;
const MIN_YEAR_COUNT_TO_BE_DISPLAYED = 2;

const NAVIGATION_GAP = 25;
const NAVIGATION_MAX = 650;

// if local storage values are empty, set default values...
if (localStorage.getItem(LocalStorageAlbums.VIEW_TYPE) == undefined) {
    localStorage.setItem(LocalStorageAlbums.VIEW_TYPE, ViewType.GRID);
}


class Music extends Component {
    state = {
        // state representation of data that is displayed/filtered/sorted
        __filtered_data: Array.from(this.props.top_albums)
            .sort((a,b) => { return a['position'] - b['position'] }),
        
        // total num of albums in my list...
        __num_of_albums: Array.from(this.props.top_albums).length,

        // current ypos...
        __ypos: localStorage.getItem(LocalStorageAlbums.YPOS),

        // filters...
        __current_genre_filter: "All genres",
        __current_artist_filter: "All artists",
        __current_year_filter: "All years",
        __current_reviewer_filter: "All reviewers",

        // search stuff...
        __search_box_contains_text: false,
        __search_box_was_clicked: false,
        __search_text: "",

        // view stuff...
        __view_type: localStorage.getItem(LocalStorageAlbums.VIEW_TYPE),

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
        let ypos = localStorage.getItem(LocalStorageAlbums.YPOS);
        document.querySelector(".top-albums-list").scrollTop = ypos;

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
        let num_of_10s = 0;
        let num_of_9s = 0;
        let num_of_8s = 0;

        // extract list of ratings, and list of positions...
        for (let i = 0; i < albums_displayed.length; i++) {
            // get all details about this current album...
            let album = albums_displayed[i];
            
            // list of all positions...
            positions.push(album['position']);

            // list of all ratings...
            if (album['my_rating'] !== undefined) { ratings.push(album['my_rating']); }

            // keep track of total number of album's this artist is associated with...
            num_of_albums += 1;
        }
        
        // calculate averages...
        avg_pos = positions.reduce((a, b) => a + b, 0) / positions.length;
        avg_rating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
        num_of_10s = [...ratings].filter(x => x == 10).length;
        num_of_9s = [...ratings].filter(x => x == 9.0 || x == 9.5).length;
        num_of_8s = [...ratings].filter(x => x == 8.0 || x == 8.5).length;

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
            "num_of_albums": num_of_albums,
            "num_of_10s": num_of_10s,
            "num_of_9s": num_of_9s,
            "num_of_8s": num_of_8s
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
                            if (genre_selected === this.state.__default_genre_filter) {
                                // show all albums...
                                return true;
                            }
                            if (a.genres !== undefined && a.genres_lowercase !== undefined) {
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
        let num_of_10s = 0;
        let num_of_9s = 0;
        let num_of_8s = 0;
        let filter_criteria = "";
        let filter_type = "";
        let filter_url = "";

        if (this.state.__current_artist_filter !== this.state.__default_artist_filter) {
            // Filtering by ARTIST
            let filter_info_div = document.getElementById('filtered-albums-list-info');
            let albums_list_container = document.getElementsByClassName('top-albums-list-container')[0];

            if (filter_info_div !== null) {
                // filter_info_div.classList.add('filters-active');
                albums_list_container.classList.add('filters-active');

                filter_criteria = this.state.__current_artist_filter;

                let obj = this.calculate_avgs(albums_displayed, filter_info_div);
                avg_pos = obj['avg_pos'];
                avg_rating = obj['avg_rating'];
                num_of_albums = obj['num_of_albums'];
                num_of_10s = obj['num_of_10s'];
                num_of_9s = obj['num_of_9s'];
                num_of_8s = obj['num_of_8s'];

                filter_type = "Artist:";
            }
        } else if (this.state.__current_genre_filter !== this.state.__default_genre_filter) {
            // Filtering by GENRE
            let filter_info_div = document.getElementById('filtered-albums-list-info');
            let albums_list_container = document.getElementsByClassName('top-albums-list-container')[0];

            if (filter_info_div !== null) {
                //filter_info_div.classList.add('filters-active');
                albums_list_container.classList.add('filters-active');

                filter_criteria = this.state.__current_genre_filter;

                let obj = this.calculate_avgs(albums_displayed, filter_info_div);
                avg_pos = obj['avg_pos'];
                avg_rating = obj['avg_rating'];
                num_of_albums = obj['num_of_albums'];
                num_of_10s = obj['num_of_10s'];
                num_of_9s = obj['num_of_9s'];
                num_of_8s = obj['num_of_8s'];

                filter_type = "Genre:";
            }
        } else if (this.state.__current_year_filter !== this.state.__default_year_filter) {
            // Filtering by YEAR
            let filter_info_div = document.getElementById('filtered-albums-list-info');
            let albums_list_container = document.getElementsByClassName('top-albums-list-container')[0];

            if (filter_info_div !== null) {
                //filter_info_div.classList.add('filters-active');
                albums_list_container.classList.add('filters-active');

                filter_criteria = this.state.__current_year_filter;

                let obj = this.calculate_avgs(albums_displayed, filter_info_div);
                avg_pos = obj['avg_pos'];
                avg_rating = obj['avg_rating'];
                num_of_albums = obj['num_of_albums'];
                num_of_10s = obj['num_of_10s'];
                num_of_9s = obj['num_of_9s'];
                num_of_8s = obj['num_of_8s'];

                filter_type = "Year:";
            }
        } else if (this.state.__current_reviewer_filter !== this.state.__default_reviewer_filter) {
            // Filtering by REVIEWER
            let filter_info_div = document.getElementById('filtered-albums-list-info');
            let albums_list_container = document.getElementsByClassName('top-albums-list-container')[0];

            if (filter_info_div !== null) {
                //filter_info_div.classList.add('filters-active');
                albums_list_container.classList.add('filters-active');

                filter_criteria = (this.state.__current_reviewer_filter);

                let obj = this.calculate_avgs(albums_displayed, filter_info_div);
                avg_pos = obj['avg_pos'];
                avg_rating = obj['avg_rating'];
                num_of_albums = obj['num_of_albums'];
                num_of_10s = obj['num_of_10s'];
                num_of_9s = obj['num_of_9s'];
                num_of_8s = obj['num_of_8s'];

                filter_type = "Recommened by...";
                //filter_url = (this.state.__current_reviewer_filter).url;
            }
        } else {
            let filter_info_div = document.getElementById('filtered-albums-list-info');
            let albums_list_container = document.getElementsByClassName('top-albums-list-container')[0];

            if (filter_info_div !== null) {
                //filter_info_div.classList.remove('filters-active');
                albums_list_container.classList.remove('filters-active');
            }
        }

        const info = {
            "filter_type": filter_type,
            "filter_criteria": filter_criteria,
            "filter_url": filter_url,
            "num_of_albums": num_of_albums,
            "avg_pos": avg_pos,
            "avg_rating": avg_rating,
            "num_of_10s": num_of_10s,
            "num_of_9s": num_of_9s,
            "num_of_8s": num_of_8s
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
     * Change view type
     * @param {*} selected_view_type 
     */
    change_view = (e, selected_view_type) => {
        let toplist = document.getElementsByClassName('top-albums-list')[0];

        // find the actual button...
        let tag_name = (e.target.tagName).toString();
        let actual_button = get_actual_button(e.target, tag_name);

        // change view type in state and html...
        if (selected_view_type === ViewType.LIST) {
            this.setState({__view_type: ViewType.LIST});
            toplist.classList.add('view-as-list');
            toplist.classList.remove('view-as-grid');
            localStorage.setItem(LocalStorageAlbums.VIEW_TYPE, ViewType.LIST);
        } else if (selected_view_type === ViewType.GRID) {
            this.setState({__view_type: ViewType.GRID});
            toplist.classList.remove('view-as-list');
            toplist.classList.add('view-as-grid');
            localStorage.setItem(LocalStorageAlbums.VIEW_TYPE, ViewType.GRID);
        }
        
        // toggle .active class on buttons
        var by_type_classname = "albums-change-view-btn";
        if (actual_button.classList.contains(by_type_classname)) {
            var active_btns = document.getElementsByClassName(by_type_classname + ' active');
            while (active_btns.length > 0) {
                active_btns[0].classList.remove('active');
            }
            actual_button.classList.add('active');
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
     * Remove active class from all navItem buttons
     * @param {*} btns 
     */
    deactivate_all_nav_items = (btns) => {
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove('active');
        }
    }

    /**
     * As user scrolls list, keep track of current ypos
     */
    update_scroll_pos = () => {
        // scrollTop tells us the y-coordinate. Store it in localStorage too!
        let ypos = document.querySelector(".top-albums-list").scrollTop;
        localStorage.setItem(LocalStorageAlbums.YPOS, ypos);

        // approximate height of each row in the top albums list
        const row_height = 295;

        // num of albums per row
        const albums_per_row = 5;
        
        // all navItem buttons in navigation
        let btns = document.querySelectorAll('#top-albums-list-navigation > a.navItem');

        let num_of_nav_btns = NAVIGATION_MAX / NAVIGATION_GAP;

        for (let i = 0; i < num_of_nav_btns; i++) {
            let lower = (row_height * albums_per_row)*i;
            let upper = (row_height * albums_per_row)*(i+1);

            // first album in this section, so I can actually activate the right button in the navigation section
            let btnId = NAVIGATION_GAP*i;
            if (i == 0) {
                // first album has id of 1, not 0
                btnId += 1;
            }

            if (ypos > lower && ypos < upper) {
                this.deactivate_all_nav_items(btns);
                let btn = document.getElementById(`link-to-album-${btnId}`);
                btn.classList.add('active');
            } 
        }
    }

    /**
     * Render function
     * @returns 
     */
    render() {
        console.log(this.props);

        // get items for current page...
        const albums_displayed = this.state.__filtered_data
            .filter((album) => {
                let search_text = this.state.__search_text.toLowerCase();
                let album_name_included = album.album_name.toLowerCase().includes(search_text);
                let artist_name_included = album.artist_name.toLowerCase().includes(search_text);
                return album_name_included || artist_name_included;
            });
        // console.log(albums_displayed);

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

        // view type...
        const view_type_classname = (this.state.__view_type === ViewType.GRID) ? "view-as-grid" : "view-as-list";
        
        // top tracks list (default to overall time period)
        let top_tracks_list = this.props.scrobble_data_top_tracks.overall;

        // generate array of intervals (e.g. [1,25,50,75,100,...,600])
        const navigation = [1];
        const num_of_sections = NAVIGATION_MAX / NAVIGATION_GAP;
        for (let i = 1; i < num_of_sections+1; i++) {
            navigation.push(NAVIGATION_GAP*i);
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
                            <div className='top-albums-list-header'>
                                <h3 className='page-title'>
                                    My favourite {this.props.top_albums.length} albums of all time
                                </h3>

                                {/* Information about what is currently being filtered (if anything) */}
                                <div id="filtered-albums-list-info">
                                    <p className={`avgPos avgPos_`+filter['avg_pos']}>avg pos: <span>#{filter['avg_pos']}</span></p>
                                    <p className={`avgRating avgRating_`+filter['avg_rating']}>avg rating: <span>{filter['avg_rating']}/10</span></p>
                                    <p className={`numOfAlbums_`+filter['num_of_albums']}>count: <span>{filter['num_of_albums']}</span></p>
                                    <p className={`numOf10s_`+filter['num_of_10s']}>10s: <span>{filter['num_of_10s']}</span></p>
                                    <p className={`numOf9s_`+filter['num_of_9s']}>9s: <span>{filter['num_of_9s']}</span></p>
                                    <p className={`numOf8s_`+filter['num_of_8s']}>8s: <span>{filter['num_of_8s']}</span></p>

                                    <p>Filtered by <span>{filter_type} {(filter_url.length > 0) ? <a href={filter_url} target='_blank'>{filter_criteria}</a> : filter_criteria}</span></p>
                                </div>
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

                                    {/* Change view */}
                                    <div id='top-albums-changeView' className='top-albums-list-sideSection changeViewOfToplist-container'>
                                        <p className='sidebar-subsection-title'>Change view</p>
                                        <div className='changeViewOfToplist-btns'>
                                            <div className={this.state.__view_type === ViewType.LIST ? 'btn albums-change-view-btn active' : 'btn albums-change-view-btn'}
                                                onClick={(e) => this.change_view(e, ViewType.LIST)}
                                                title="View as list">
                                                <ViewAsListIcon className='invertable-icon' />
                                            </div>
                                            <div className={this.state.__view_type === ViewType.GRID ? 'btn albums-change-view-btn active' : 'btn albums-change-view-btn'}
                                                onClick={(e) => this.change_view(e, ViewType.GRID)}
                                                title="View as grid">
                                                <ViewAsGridIcon className='invertable-icon' />
                                            </div>
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
                                        </div>
                                    </div>
                                </div>

                                <div className={`top-albums-list ${less_than_12_albums_on_display} ${view_type_classname}`} onScroll={this.update_scroll_pos}>
                                    {albums_displayed.map(a => {
                                        if (this.state.__view_type === ViewType.LIST)
                                            return <AlbumListElement album={a} />
                                        else if (this.state.__view_type === ViewType.GRID)
                                            return <AlbumGridElement album={a} />
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
        scrobble_data_top_tracks: state.scrobble_data_top_tracks,
    }
}

export default connect(mapStateToProps)(Music)
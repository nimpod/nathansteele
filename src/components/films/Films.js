/**
 * This is a react component that renders my 'Films' homepage
 */

import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect }  from 'react-redux';

import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as ControlsIcon } from "../../icons/controls.svg";
import { ReactComponent as SortAscendingIcon } from "../../icons/sortAscending.svg";
import { ReactComponent as SortDescendingIcon } from "../../icons/sortDescending.svg";
import { ReactComponent as ViewAsListIcon } from "../../icons/showList.svg";
import { ReactComponent as ViewAsGridIcon } from "../../icons/showGrid.svg";
import { ReactComponent as ResetFiltersIcon } from "../../icons/reset.svg";
import { ViewType, SortableType, SortableDirection, SortableTypeStr } from '../../js/enums.js';
import FilmsToplistGridElement from './FilmsToplistGridElement.js';
import FilmsToplistListElement from './FilmsToplistListElement.js';
import { 
    remove_genre_duplicates,
    remove_language_duplicates,
    generate_IMDB_diff_score,
    get_actual_button,
    override_film_poster_url,
    get_list_of_poster_urls,
    override_film_title,
    get_film_review_id,
    handle_filter_button_toggling_stuff,
    toggle_dropdown_list,
} from '../../js/helpers.js';


let STARTING_PAGE_NUM = 0;
let MAX_FILMS_PER_PAGE = 20;


class Films extends React.Component {
    
    state = {
        // state representation of data that is displayed/filtered/sorted
        __filtered_data: Array.from(this.props.top_films)
            .sort((a,b) => { return a['position'] - b['position'] }),

        // state representation of number of pages
        __total_num_of_pages: Math.ceil(this.props.top_films.length / MAX_FILMS_PER_PAGE),

        // state representation of page number the user is currently on
        __current_page_num: STARTING_PAGE_NUM,

        // state representation of list sorting
        __current_sort_type: SortableType.MY_POS,
        __current_sort_type_str: SortableTypeStr.MY_POS,
        __current_sort_order: SortableDirection.ASC,

        // filters...
        __current_genre_filter: "All Genres",
        __current_language_filter: "All Languages",

        // search stuff...
        __search_box_contains_text: false,
        __search_box_was_clicked: false,
        __search_text: "",

        // view stuff...
        __view_type: ViewType.LIST,

        // defaults...
        __default_sort_type: SortableType.MY_POS,
        __default_sort_type_str: SortableTypeStr.MY_POS,
        __default_sort_order: SortableDirection.ASC,
        __default_genre_filter: "All Genres",
        __default_language_filter: "All Languages",
    }

    /**
     * Component did mount function
     */
    componentDidMount() {
        // this.go_to_page(localStorage.getItem('currentPageNum_filmsToplist'));

        // update pagination buttons...
        this.manually_change_text_of_pagination_buttons()
        
        // highlight default filters in dropdown list, when the user opens the page...
        this.highlight_default_filters_in_dropdown_lists();
    }

    /**
     * Called when user wants to see another page...
     * @param {*} page_selected 
     */
    go_to_page = (page_selected) => {
        // the user expects to be at the top of the next page...
        window.scrollTo(0, 0);

        // update it in localstorage...
        localStorage.setItem('currentPageNum_filmsToplist', page_selected);

        // set it in state...
        this.setState(prevState => {
            return {
                __current_page_num: page_selected
            }
        })

        // console.log('Changed page to ' + newPageNum);
    }

    /**
     * Sort my list by a particular type
     * @param {*} type 
     */
    sort_list = (type) => {
        if (this.state.__current_sort_order === SortableDirection.ASC) {
            this.setState(prevState => {
                return {
                    __current_sort_type: type,
                    __current_sort_type_str: type,
                    __filtered_data: Array.from(this.props.top_films)
                        .sort((a,b) => {
                            if (type === SortableType.IMDB_DIFF) {
                                return (a["my_rating"] - a["IMDB_avg_rating"]) - (b["my_rating"] - b["IMDB_avg_rating"])
                            }
                            return a[type] - b[type];
                        })
                        .reverse()
                }
            })
        }

        else if (this.state.__current_sort_order === SortableDirection.DESC) {
            this.setState(prevState => {
                return {
                    __current_sort_type: type,
                    __current_sort_type_str: type,
                    __filtered_data: Array.from(this.props.top_films)
                        .sort((a,b) => {
                            if (type === SortableType.IMDB_DIFF) {
                                return (a["my_rating"] - a["IMDB_avg_rating"]) - (b["my_rating"] - b["IMDB_avg_rating"])
                            }
                            return a[type] - b[type] 
                        })
                }
            })
        }
    }

    /**
     * Change order of list
     * @param {*} order 
     */
    change_order = (order) => {
        // console.log(order);
        // console.log(this.state.__current_sort_type);

        if (order === SortableDirection.ASC) {
            this.setState(prevState => {
                return {
                    __current_sort_type: this.state.__current_sort_type,
                    __current_sort_type_str: this.state.__current_sort_type,
                    __current_sort_order: order,
                    __filtered_data: this.state.__filtered_data
                        .sort((a,b) => {
                            if (this.state.__current_sort_type === SortableType.IMDB_DIFF) {
                                return (a["my_rating"] - a["IMDB_avg_rating"]) - (b["my_rating"] - b["IMDB_avg_rating"])
                            }
                            return a[this.state.__current_sort_type] - b[this.state.__current_sort_type] 
                        })
                        .reverse(),
                }
            })
        }

        else if (order === SortableDirection.DESC) {
            this.setState(prevState => {
                return {
                    __current_sort_type: this.state.__current_sort_type,
                    __current_sort_type_str: this.state.__current_sort_type,
                    __current_sort_order: order,
                    __filtered_data: this.state.__filtered_data
                        .sort((a,b) => {
                            if (this.state.__current_sort_type === SortableType.IMDB_DIFF) {
                                return (a["my_rating"] - a["IMDB_avg_rating"]) - (b["my_rating"] - b["IMDB_avg_rating"])
                            }
                            return a[this.state.__current_sort_type] - b[this.state.__current_sort_type] 
                        })
                }
            })
        }
    }

    /**
     * Was going to use this with the 'pageLabelBuilder' thing but wasn't the way I wanted it to work :(
     * @param {*} first_index_of_current_page 
     * @param {*} last_index_of_current_page 
     * @returns 
     */
    set_page_index_title = (first_index_of_current_page, last_index_of_current_page) => {
        return first_index_of_current_page + " - " + last_index_of_current_page;
    }

    /**
     * Manually modify text content of pagination items
     * I couldn't figure out how to use the 'pageLabelBuilder' attribute the way I wanted to use it.
     */
    manually_change_text_of_pagination_buttons() {
        let pagination_btns = document.querySelector('.films-container ul.pagination-btns');
        let pagination_btns_list = pagination_btns.childNodes;
        // if (paginationBtnsList[1].childNodes[0].textContent === "1") {
        for (let i = 0; i < pagination_btns_list.length; i++) {
            // console.log('i = ' + i);
            let btn = pagination_btns_list[i];
            if (btn.classList.contains('previous-btn') === true || btn.classList.contains('next-btn') === true) {
                // ignore the 'previous' and 'next' buttons...
            } else {
                let anchor_tag = btn.childNodes[0];
                for (let j = 0; j < this.state.__total_num_of_pages; j++) {
                    // let upper_bound = (this.state.__filtered_data.length - ((i-1)*MAX_FILMS_PER_PAGE));
                    let upper_bound = (1 + ((i-1)*MAX_FILMS_PER_PAGE))
                    let lower_bound = upper_bound - MAX_FILMS_PER_PAGE + 1;
                    let text_content = upper_bound;
                    // let text_content = (upper_bound + " - " + lower_bound);
                    // let textContent = "Top " + upperBound;
                    anchor_tag.textContent = text_content;
                    break;
                }
            }
        }
        // }
    }
    
    /**
     * Highlight default filters in dropdown lists...
     */
    highlight_default_filters_in_dropdown_lists() {
        let default_language_option = document.querySelector('.dropdown-list-languages > div:nth-child(2)');
        let default_genre_option = document.querySelector('.dropdown-list-genres > div:nth-child(2)');
        default_genre_option.classList.add('active');
        default_language_option.classList.add('active');
    }

    /**
     * When user clicks on sorting button...
     * @param {*} e 
     */
    sorting_btn_clicked = (e) => {
        // find the actual button...
        let tag_name = (e.target.tagName).toString();
        let actual_button = get_actual_button(e.target, tag_name);

        // 
        var by_type_classname = "films-sort-by-type-btn";
        var by_order_classname = "films-sort-by-direction-btn";
        
        //
        if (actual_button.classList.contains(by_type_classname)) {
            let active_btns = document.getElementsByClassName(by_type_classname + ' active');
            while (active_btns.length > 0) {
                active_btns[0].classList.remove('active');
            }
            actual_button.classList.add('active');
        } else if (actual_button.classList.contains(by_order_classname)) {
            let active_btns = document.getElementsByClassName(by_order_classname + ' active');
            while (active_btns.length > 0) {
                active_btns[0].classList.remove('active');
            }
            actual_button.classList.add('active');
        }
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
                    __filtered_data: Array.from(this.props.top_films)
                        .filter((f) => {
                            if (genre_selected === this.state.__default_genre_filter) {
                                return true;
                            }
                            let array_of_genres = Array.from(f.genres);
                            let contains_requested_genre = array_of_genres.includes(genre_selected);
                            return contains_requested_genre;
                        }).reverse()
                }
            })

            // deal with button stuff...
            let actual_button = handle_filter_button_toggling_stuff(e.target, '.films-filter-by-genre-btn');
            
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
     * Filter list by language
     * @param {*} e 
     * @param {*} language_selected 
     */
    filter_by_language = (e, language_selected) => {
        // do nothing if the language selected is already selected...
        if (language_selected !== this.state.__current_language_filter) {
            // update the 'current_genre_filter' state...
            this.setState({__current_language_filter: language_selected})

            this.setState(prevState => {
                return {
                    __filtered_data: Array.from(this.props.top_films)
                        .filter((f) => {
                            if (language_selected === this.state.__default_language_filter) {
                                return true;
                            }
                            return f.language === language_selected;
                        })
                        .sort((a,b) => {
                            if (this.state.__current_sort_type === SortableType.IMDB_DIFF) {
                                return (a["my_rating"] - a["IMDB_avg_rating"]) - (b["my_rating"] - b["IMDB_avg_rating"])
                            }
                            return null;
                        })
                        .reverse()
                }
            })

            // deal with button stuff...
            let actual_button = handle_filter_button_toggling_stuff(e.target, '.films-filter-by-language-btn');

            // toggle the .active class
            if (!actual_button.classList.contains('active')) {
                // enable filter...
                actual_button.classList.add('active');
            } else {
                // disable filter...
                actual_button.classList.remove('active');
                this.setState({__current_language_filter: ""})
                // this.setState({__filtered_data: this.state.__filtered_data.reverse()})
            }
        }
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

        /*
        this.setState({
            __filtered_data: this.state.__filtered_data
                .filter((f) => {
                    let isTitleEqualToSearchbox = f.title.toLowerCase().includes(text.toLowerCase());
                    return isTitleEqualToSearchbox;
                })
        })*/
    }

    /**
     * Change view type
     * @param {*} selected_view_type 
     */
    change_view = (e, selected_view_type) => {
        let toplist = document.getElementsByClassName('films-toplist')[0];

        // find the actual button...
        let tag_name = (e.target.tagName).toString();
        let actual_button = get_actual_button(e.target, tag_name);

        // change view type in state and html...
        if (selected_view_type === ViewType.LIST) {
            this.setState({__view_type: ViewType.LIST});
            toplist.classList.add('view-as-list');
            toplist.classList.remove('view-as-grid');
        } else if (selected_view_type === ViewType.GRID) {
            this.setState({__view_type: ViewType.GRID});
            toplist.classList.remove('view-as-list');
            toplist.classList.add('view-as-grid');
        }
        
        // toggle .active class on buttons
        var by_type_classname = "films-change-view-btn";
        if (actual_button.classList.contains(by_type_classname)) {
            var active_btns = document.getElementsByClassName(by_type_classname + ' active');
            while (active_btns.length > 0) {
                active_btns[0].classList.remove('active');
            }
            actual_button.classList.add('active');
        }
    }

    /**
     * Reset filters
     */
    reset_filters = (e) => {
        this.setState(prevState => {
            return {
                __current_sort_type: this.state.__default_sort_type,
                __current_sort_type_str: this.state.__default_sort_type_str,
                __current_sort_order: this.state.__default_sort_order,
                __current_genre_filter: this.state.__default_genre_filter,
                __current_language_filter: this.state.__default_language_filter,
                __filtered_data: Array.from(this.props.top_films).reverse(),
            }
        });

        // also reset the highlighted items in dropdown lists...
        this.highlight_default_filters_in_dropdown_lists();
    }

    /**
     * 
     * @param {*} e 
     */
    toggle_controls = (e) => {
        // let toggle_controls_btn = document.getElementsByClassName('toggle-controls-btn')[0];
        let films_controls = document.getElementsByClassName('films-controls')[0];

        if (films_controls.classList.contains('visible')) {
            films_controls.classList.remove('visible');
        } else {
            films_controls.classList.add('visible');
        }
    }

    /**
     * Content rendered to screen
     */
    render() {
        // index of LAST item in current page
        const last_index = this.state.__current_page_num * MAX_FILMS_PER_PAGE;

        // get list of poster URLs to help with loading images more efficently...
        const poster_urls = get_list_of_poster_urls(this.state.__filtered_data);

        // determine view type classname
        const view_type_classname = (this.state.__view_type === ViewType.GRID) ? "view-as-grid" : "view-as-list";

        // get items for current page...
        const films_displayed = this.state.__filtered_data
            .filter((f) => {
                let search_text = this.state.__search_text.toLowerCase();
                if ('title_displayed' in f) {
                    return f.title_displayed.toLowerCase().includes(search_text);
                } else {
                    return f.title.toLowerCase().includes(search_text);
                }
            })
            .slice(last_index, last_index + MAX_FILMS_PER_PAGE)
            .map((film, i) => {
                // generate final data...
                let review_id = get_film_review_id(film.title, film.letterboxd_url)
                let IMDB_diff = generate_IMDB_diff_score(film.IMDB_diff_score);
                let poster_url = override_film_poster_url(film);
                let title = override_film_title(film);

                // display as list (default) or grid
                if (this.state.__view_type === ViewType.LIST) {
                    return <FilmsToplistListElement 
                        review_id={review_id}
                        poster_url={poster_url}
                        title={title}
                        diff_score_str={IMDB_diff.diff_score_str}
                        diff_score_classname={IMDB_diff.diff_score_str_classname} 
                        poster_urls={poster_urls}
                        film={film}
                        index={i} 
                        key={i} 
                    />;
                } else if (this.state.__view_type === ViewType.GRID) {
                    return <FilmsToplistGridElement
                        review_id={review_id}
                        poster_url={poster_url}
                        title={title}
                        diff_score_str={IMDB_diff.diff_score_str}
                        diff_score_classname={IMDB_diff.diff_score_str_classname} 
                        poster_urls={poster_urls}
                        film={film}
                        index={i} 
                        key={i} 
                    />;
                }

                return null;
            });
        
        // get string representations...
        let current_sort_type_str = "";
        if (this.state.__current_sort_type === SortableType.MY_POS) {
            current_sort_type_str = SortableTypeStr.MY_POS;
        } else if (this.state.__current_sort_type === SortableType.IMDB_AVG) {
            current_sort_type_str = SortableTypeStr.IMDB_AVG;
        } else if (this.state.__current_sort_type === SortableType.IMDB_VOTES) {
            current_sort_type_str = SortableTypeStr.IMDB_VOTES;
        } else if (this.state.__current_sort_type === SortableType.IMDB_DIFF) {
            current_sort_type_str = SortableTypeStr.IMDB_DIFF;
        } else if (this.state.__current_sort_type === SortableType.DURATION) {
            current_sort_type_str = SortableTypeStr.DURATION;
        } else if (this.state.__current_sort_type === SortableType.YEAR) {
            current_sort_type_str = SortableTypeStr.YEAR;
        }

        // get no duplicate lists...
        let genres = remove_genre_duplicates(this.props.top_films, this.state.__default_genre_filter);
        let languages = remove_language_duplicates(this.props.top_films, this.state.__default_language_filter);

        return(
            <div className="page-wrapper film-reviews-homepage">
                <div className="section-inner">
                    <div className='frontpage films-container'>
                        <h3 className='page-title'>My top {this.props.top_films.length} favourite films of all time</h3>

                        <div className='films-controls'>
                            {/* Search box */}
                            <div className='films-controls-subgroup searching-container'>
                                <div className="searchbox">
                                    <input
                                        onChange={this.handle_searchbox_input} 
                                        placeholder="search by film name..." 
                                        type="text"
                                    />
                                </div>
                            </div>

                            {/* Change view */}
                            <div className='films-controls-subgroup changeViewOfToplist-container'>
                                <div className='changeViewOfToplist-btns'>
                                    <div className={this.state.__view_type === ViewType.LIST ? 'btn films-change-view-btn active' : 'btn films-change-view-btn'}
                                        onClick={(e) => this.change_view(e, ViewType.LIST)}
                                        title="View as list">
                                        <ViewAsListIcon className='invertable-icon' />
                                    </div>
                                    <div className={this.state.__view_type === ViewType.GRID ? 'btn films-change-view-btn active' : 'btn films-change-view-btn'}
                                        onClick={(e) => this.change_view(e, ViewType.GRID)}
                                        title="View as grid">
                                        <ViewAsGridIcon className='invertable-icon' />
                                    </div>
                                </div>
                            </div>

                            {/* Sorting */}
                            <div className='films-controls-subgroup sorting-container'>
                                <div className='sort-type-btns'>
                                    <div className='dropdown-list-sorting-btn dropdown-list-btn' onClick={(e) => toggle_dropdown_list(e, 'dropdown-list-sorting')}>
                                        <span>{current_sort_type_str}</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                    <div className='dropdown-list-sorting dropdown-list'>
                                        <div className='dropdown-list-title'>Sort by...</div>
                                        <div className="btn films-sort-by-type-btn active" onClick={(e) => { this.sort_list(SortableType.MY_POS); this.sorting_btn_clicked(e);} }>
                                            {SortableTypeStr.MY_POS}
                                        </div>
                                        <div className="btn films-sort-by-type-btn" onClick={(e) => { this.sort_list(SortableType.IMDB_DIFF); this.sorting_btn_clicked(e);} }>
                                            {SortableTypeStr.IMDB_DIFF}
                                        </div>
                                        <div className="btn films-sort-by-type-btn" onClick={(e) => { this.sort_list(SortableType.IMDB_AVG); this.sorting_btn_clicked(e);} }>
                                            {SortableTypeStr.IMDB_AVG}
                                        </div>
                                        <div className="btn films-sort-by-type-btn" onClick={(e) => { this.sort_list(SortableType.IMDB_VOTES); this.sorting_btn_clicked(e);} }>
                                            {SortableTypeStr.IMDB_VOTES}
                                        </div>
                                        <div className="btn films-sort-by-type-btn" onClick={(e) => { this.sort_list(SortableType.DURATION); this.sorting_btn_clicked(e);} }>
                                            {SortableTypeStr.DURATION}
                                        </div>
                                        <div className="btn films-sort-by-type-btn" onClick={(e) => { this.sort_list(SortableType.YEAR); this.sorting_btn_clicked(e);} }>
                                            {SortableTypeStr.YEAR}
                                        </div>
                                    </div>
                                    <div className='beside-dropdown-btn sort-direction-btns'>
                                        <div className="btn films-sort-by-direction-btn active" 
                                            onClick={(e) => { this.change_order(SortableDirection.ASC); this.sorting_btn_clicked(e);} }
                                            title="Ascending order">
                                            <SortAscendingIcon className='invertable-icon' />
                                        </div>
                                        <div className="btn films-sort-by-direction-btn" 
                                            onClick={(e) => { this.change_order(SortableDirection.DESC); this.sorting_btn_clicked(e);} }
                                            title="Descending order">
                                            <SortDescendingIcon className='invertable-icon' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Filtering */}
                            <div className='films-controls-subgroup filtering-container'>
                                <div className='filter-by-genre-btns filter-by-something-container'>
                                    <div className='dropdown-list-genres-btn dropdown-list-btn' onClick={(e) => toggle_dropdown_list(e, 'dropdown-list-genres')}>
                                        <span>{this.state.__current_genre_filter}</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                    <div className='dropdown-list-genres dropdown-list'>
                                        <div className='dropdown-list-title'>Filter by genre...</div>
                                        {
                                            genres.map((g => {
                                                return <div className="btn films-filter-by-genre-btn" key={g} onClick={(e) => this.filter_by_genre(e, g)}>
                                                    <span className='genre-text'>
                                                        {g}
                                                    </span>
                                                    <span className='genre-count'>
                                                        {Array.from(this.props.top_films).filter((f) => {
                                                            if (g === this.state.__default_genre_filter) {
                                                                return Array.from(f.genres)
                                                            }
                                                            return Array.from(f.genres).includes(g);
                                                        }).length}
                                                    </span>
                                                </div>
                                            }))
                                        }
                                    </div>
                                </div>
                                <div className='filter-by-language-btns filter-by-something-container'>
                                    <div className='dropdown-list-languages-btn dropdown-list-btn' onClick={(e) => toggle_dropdown_list(e, 'dropdown-list-languages')}>
                                        <span>{this.state.__current_language_filter}</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                    <div className='dropdown-list-languages dropdown-list'>
                                        <div className='dropdown-list-title'>Filter by language...</div>
                                        {
                                            languages.map((l => {
                                                return <div className="btn films-filter-by-language-btn" key={l} onClick={(e) => this.filter_by_language(e, l)}>
                                                    <span className='language-text'>
                                                        {l}
                                                    </span>
                                                    <span className='language-count'>
                                                        {Array.from(this.props.top_films).filter((f) => {
                                                            if (l === this.state.__default_language_filter) {
                                                                return f.language;
                                                            }
                                                            return f.language.includes(l);
                                                        }).length}
                                                    </span>
                                                </div>
                                            }))
                                        }
                                    </div>
                                </div>
                                <div className="btn films-reset-filters-btn" 
                                    onClick={(e) => this.reset_filters(e)}
                                    title="Reset filters">
                                    <ResetFiltersIcon className='invertable-icon' />
                                </div>
                            </div>

                            {/* For mobile view */}
                            <div className='toggle-controls-btn' onClick={this.toggle_controls}>
                                <ControlsIcon className='invertable-icon' />
                            </div>
                        </div>
                        <div className='films-toplist-container'>
                            <div className='films-pagination-container'>
                                <ReactPaginate
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    pageCount={this.state.__total_num_of_pages}
                                    onPageChange={(obj) => this.go_to_page(obj.selected)}
                                    pageRangeDisplayed={100}
                                    containerClassName={"pagination-btns"}
                                    previousClassName={"previous-btn"}
                                    nextClassName={"next-btn"}
                                    disabledClassName={"pagination-disabled"}
                                    activeClassName={"pagination-active"}
                                    /*
                                    pageLabelBuilder={() => this.set_page_index_title(topIndex, (topIndex - MAX_FILMS_PER_PAGE + 1))}
                                    */
                                />
                            </div>
                            <div className={`films-toplist ${view_type_classname}`}>
                                {films_displayed}
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
        top_films: state.top_films,
    }
}

export default connect(mapStateToProps)(Films)
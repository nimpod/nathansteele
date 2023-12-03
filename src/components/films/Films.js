/**
 * This is a react component that renders my 'Films' homepage
 */

import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as ArrowRightIcon } from "../../icons/arrowRight.svg";
import { ReactComponent as ArrowLeftIcon } from "../../icons/arrowLeft.svg";
import { ReactComponent as ControlsIcon } from "../../icons/controls.svg";
import { ReactComponent as SortAscendingIcon } from "../../icons/sortAscending.svg";
import { ReactComponent as SortDescendingIcon } from "../../icons/sortDescending.svg";
import { ReactComponent as ViewAsListIcon } from "../../icons/showList.svg";
import { ReactComponent as ViewAsGridIcon } from "../../icons/showGrid.svg";
import { ReactComponent as ResetFiltersIcon } from "../../icons/reset.svg";
import { connect }  from 'react-redux';
import { removeGenreDuplicates, removeLanguageDuplicates, generateImdbDiffScoreStuff, getActualButton, overrideFilmPosterUrl, getListOfPosterUrls, overrideFilmTitle, getFilmReviewId, removeClassFromItemWhenUserClicksOutsideOfItem } from '../../js/helpers.js';
import FilmsToplistGridElement from './FilmsToplistGridElement.js';
import FilmsToplistListElement from './FilmsToplistListElement.js';
import ReactPaginate from 'react-paginate';


let STARTING_PAGE_NUM = 0;
let MAX_FILMS_PER_PAGE = 25;

const enumValue = (name) => Object.freeze({toString: () => name});
const SortableType = Object.freeze({
    IMDB_AVG: enumValue("imdbAvgRating"),
    IMDB_VOTES: enumValue("imdbNumVotes"),
    IMDB_DIFF: enumValue("imdbDiffScore"),
    MY_POS: enumValue("position"),
    DURATION: enumValue("duration"),
    YEAR: enumValue("year")
});
const SortableTypeStr = Object.freeze({
    MY_POS: "My order",
    IMDB_AVG: "IMDB avg rating",
    IMDB_VOTES: "IMDB popularity",
    IMDB_DIFF: "IMDB diff score",
    DURATION: "Duration",
    YEAR: "Year of release"
})
const SortableDirection = Object.freeze({
    ASC: enumValue("ascending"),
    DESC: enumValue("descending"),
})
const ViewType = Object.freeze({
    LIST: "View as list",
    GRID: "View as grid",
})


class Films extends React.Component {
    
    state = {
        // state representation of data that is displayed/filtered/sorted
        __filtered_data: Array.from(this.props.filmReviewsData)
            .sort((a,b) => { return a['position'] - b['position'] })
            .reverse(),

        // state representation of number of pages
        __totalNumOfPages: Math.ceil(this.props.filmReviewsData.length / MAX_FILMS_PER_PAGE),

        // state representation of page number the user is currently on
        __currentPageNum: STARTING_PAGE_NUM,

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
     * Called when user wants to see another page...
     * @param {*} obj 
     */
    goToPage = (pageSelected) => {
        // the user expects to be at the top of the next page...
        window.scrollTo(0, 0);

        // update it in localstorage...
        localStorage.setItem('currentPageNum_filmsToplist', pageSelected);

        // set it in state...
        this.setState(prevState => {
            return {
                __currentPageNum: pageSelected
            }
        })

        // console.log('Changed page to ' + newPageNum);
    }

    /**
     * Sort my list by a particular type
     * @param {*} type 
     */
    sortList = (type) => {
        if (this.state.__current_sort_order == SortableDirection.ASC) {
            this.setState(prevState => {
                return {
                    __current_sort_type: type,
                    __current_sort_type_str: type,
                    __filtered_data: Array.from(this.props.filmReviewsData)
                        .sort((a,b) => {
                            if (type == SortableType.IMDB_DIFF) {
                                return (a["myRating"] - a["imdbAvgRating"]) - (b["myRating"] - b["imdbAvgRating"])
                            }
                            return a[type] - b[type] 
                        })
                        .reverse()
                }
            })
        }

        else if (this.state.__current_sort_order == SortableDirection.DESC) {
            this.setState(prevState => {
                return {
                    __current_sort_type: type,
                    __current_sort_type_str: type,
                    __filtered_data: Array.from(this.props.filmReviewsData)
                        .sort((a,b) => {
                            if (type == SortableType.IMDB_DIFF) {
                                return (a["myRating"] - a["imdbAvgRating"]) - (b["myRating"] - b["imdbAvgRating"])
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
    changeOrder = (order) => {
        // console.log(order);
        // console.log(this.state.__current_sort_type);

        if (order == SortableDirection.ASC) {
            this.setState(prevState => {
                return {
                    __current_sort_type: this.state.__current_sort_type,
                    __current_sort_type_str: this.state.__current_sort_type,
                    __current_sort_order: order,
                    __filtered_data: this.state.__filtered_data
                        .sort((a,b) => {
                            if (this.state.__current_sort_type == SortableType.IMDB_DIFF) {
                                return (a["myRating"] - a["imdbAvgRating"]) - (b["myRating"] - b["imdbAvgRating"])
                            }
                            return a[this.state.__current_sort_type] - b[this.state.__current_sort_type] 
                        })
                        .reverse(),
                }
            })
        }

        else if (order == SortableDirection.DESC) {
            this.setState(prevState => {
                return {
                    __current_sort_type: this.state.__current_sort_type,
                    __current_sort_type_str: this.state.__current_sort_type,
                    __current_sort_order: order,
                    __filtered_data: this.state.__filtered_data
                        .sort((a,b) => {
                            if (this.state.__current_sort_type == SortableType.IMDB_DIFF) {
                                return (a["myRating"] - a["imdbAvgRating"]) - (b["myRating"] - b["imdbAvgRating"])
                            }
                            return a[this.state.__current_sort_type] - b[this.state.__current_sort_type] 
                        })
                }
            })
        }
    }

    /**
     * Was going to use this with the 'pageLabelBuilder' thing but wasn't the way I wanted it to work :(
     */
    setPageIndexTitle = (firstIndexOfCurrentPage, lastIndexOfCurrentPage) => {
        return firstIndexOfCurrentPage + " - " + lastIndexOfCurrentPage;
    }

    /**
     * Manually modify text content of pagination items
     * I couldn't figure out how to use the 'pageLabelBuilder' attribute the way I wanted to use it.
     */
    manuallyChangeTextOfPaginationButtons() {
        let paginationBtns = document.querySelector('.films-container ul.pagination-btns');
        let paginationBtnsList = paginationBtns.childNodes;
        // if (paginationBtnsList[1].childNodes[0].textContent == "1") {
        for (let i = 0; i < paginationBtnsList.length; i++) {
            // console.log('i = ' + i);
            let btn = paginationBtnsList[i];
            if (btn.classList.contains('previous-btn') == true || btn.classList.contains('next-btn') == true) {
                // ignore the 'previous' and 'next' buttons...
            } else {
                let anchorTag = btn.childNodes[0];
                for (let j = 0; j < this.state.__totalNumOfPages; j++) {
                    let upperBound = (this.state.__filtered_data.length - ((i-1)*MAX_FILMS_PER_PAGE));
                    let lowerBound = upperBound - MAX_FILMS_PER_PAGE + 1;
                    let textContent = (upperBound + " - " + lowerBound);
                    // let textContent = "Top " + upperBound;
                    anchorTag.textContent = textContent;
                    break;
                }
            }
        }
        // }
    }
    
    /**
     * Component did mount function
     */
    componentDidMount() {
        // this.goToPage(localStorage.getItem('currentPageNum_filmsToplist'));

        // update pagination buttons...
        this.manuallyChangeTextOfPaginationButtons()
        
        // highlight default filters in dropdown list, when the user opens the page...
        this.highlightDefaultFiltersInDropdownLists();
    }

    /**
     * 
     */
    highlightDefaultFiltersInDropdownLists() {
        let defaultLanguageOption = document.querySelector('.dropdown-list-languages > div:nth-child(2)');
        let defaultGenreOption = document.querySelector('.dropdown-list-genres > div:nth-child(2)');
        defaultGenreOption.classList.add('active');
        defaultLanguageOption.classList.add('active');
    }

    /**
     * 
     * @param {*} e 
     */
    sortingBtnClicked = (e) => {
        // find the actual button...
        let tagName = (e.target.tagName).toString();
        let actualButton = getActualButton(e.target, tagName);

        var byTypeClassname = "films-sort-by-type-btn";
        var byOrderClassname = "films-sort-by-direction-btn";

        if (actualButton.classList.contains(byTypeClassname)) {
            var activeBtns = document.getElementsByClassName(byTypeClassname + ' active');
            while (activeBtns.length > 0) {
                activeBtns[0].classList.remove('active');
            }
            actualButton.classList.add('active');
        } else if (actualButton.classList.contains(byOrderClassname)) {
            var activeBtns = document.getElementsByClassName(byOrderClassname + ' active');
            while (activeBtns.length > 0) {
                activeBtns[0].classList.remove('active');
            }
            actualButton.classList.add('active');
        }
    }

    /**
     * 
     * @param {*} dropdownListBtn 
     */
    toggleDropdownListArrowIcon(arrowIconInDropdownBtn) {
        if (arrowIconInDropdownBtn.classList.contains('dropdown-list-is-visible')) {
            arrowIconInDropdownBtn.classList.remove('dropdown-list-is-visible');
        } else {
            arrowIconInDropdownBtn.classList.add('dropdown-list-is-visible');
        }
    }

    /**
     * 
     * @param {*} classNameOfList 
     */
    toggleDropdownList = (e, classNameOfList) => {
        var dropdownList = document.getElementsByClassName(classNameOfList + "")[0];
        var dropdownListBtn = document.getElementsByClassName(classNameOfList + "-btn")[0];
        var arrowIconInDropdownBtn = dropdownListBtn.childNodes[1];

        if (dropdownList.classList.contains('visible')) {
            dropdownList.classList.remove('visible');
            dropdownListBtn.classList.remove('list-is-visible');
            arrowIconInDropdownBtn.classList.remove('dropdown-list-is-visible');
        } else {
            dropdownList.classList.add('visible');
            dropdownListBtn.classList.add('list-is-visible');
            arrowIconInDropdownBtn.classList.add('dropdown-list-is-visible');
        }

        // close collapsed menu if user clicks out of it...
        let itemToHide = dropdownList;
        window.addEventListener('click', function(mouseEvent) {
            removeClassFromItemWhenUserClicksOutsideOfItem(itemToHide, dropdownListBtn, mouseEvent, 'visible');
            removeClassFromItemWhenUserClicksOutsideOfItem(arrowIconInDropdownBtn, dropdownListBtn, mouseEvent, 'dropdown-list-is-visible');
            dropdownListBtn.classList.remove('list-is-visible');
        });
        
        // toggle arrow...
        // this.toggleDropdownListArrowIcon(arrowIconInDropdownBtn);
    }

    /**
     * 
     * @param {*} target 
     * @param {*} classnameOfButtonsInThisDropdownList 
     * @returns Button the user clicked on
     */
    handleFilterButtonTogglingStuff(target, classnameOfButtonsInThisDropdownList) {
        // make sure we actually find the button...
        let actualButton = NaN;
        if (target.tagName == "SPAN") {
            // user clicked on text, bit fucking annoying
            actualButton = target.parentElement;
        } else {
            // user clicked on button, well done
            actualButton = target;
        }

        // remove .active from everything first... 
        // This ensures only one filter is highlighted at a time...
        // Dont do this if the actual button is inactive (i.e. nothing has been filtered yet)
        if (!actualButton.classList.contains('active')) {
            let dropdownBtns = document.querySelectorAll(classnameOfButtonsInThisDropdownList);
            for (let i = 0; i < dropdownBtns.length; i++) {
                dropdownBtns[i].classList.remove('active');
            }
        }

        // return the button in the dropdown list that the user originally clicked
        return actualButton;
    }

    /**
     * Filter list by specified genre
     * @param {*} e 
     * @param {*} genre 
     */
    filterByGenre = (e, genreSelected) => {
        // do nothing if the language selected is already selected...
        if (genreSelected !== this.state.__current_genre_filter) {
            // update the 'current_genre_filter' state...
            this.setState({__current_genre_filter: genreSelected})

            this.setState(prevState => {
                return {
                    __filtered_data: Array.from(this.props.filmReviewsData)
                        .filter((f) => {
                            if (genreSelected == this.state.__default_genre_filter) {
                                return true;
                            }
                            let arrayOfGenres = Array.from(f.genres);
                            let containsRequestedGenre = arrayOfGenres.includes(genreSelected);
                            return containsRequestedGenre;
                        }).reverse()
                }
            })

            // deal with button stuff...
            let actualButton = this.handleFilterButtonTogglingStuff(e.target, '.films-filter-by-genre-btn');
            
            // toggle the .active class
            if (!actualButton.classList.contains('active')) {
                // enable filter...
                actualButton.classList.add('active');
            } else {
                // disable filter...
                actualButton.classList.remove('active');
                this.setState({__current_genre_filter: ""})
               // this.setState({__filtered_data: this.state.__filtered_data.reverse()})
            }
        }
    }

    /**
     * Filter list by language
     * @param {*} e 
     * @param {*} language 
     */
    filterByLanguage = (e, languageSelected) => {
        // do nothing if the language selected is already selected...
        if (languageSelected !== this.state.__current_language_filter) {
            // update the 'current_genre_filter' state...
            this.setState({__current_language_filter: languageSelected})

            this.setState(prevState => {
                return {
                    __filtered_data: Array.from(this.props.filmReviewsData)
                        .filter((f) => {
                            if (languageSelected == this.state.__default_language_filter) {
                                return true;
                            }
                            return f.language == languageSelected;
                        })
                        .sort((a,b) => {
                            if (this.state.__current_sort_type == SortableType.IMDB_DIFF) {
                                return (a["myRating"] - a["imdbAvgRating"]) - (b["myRating"] - b["imdbAvgRating"])
                            }
                        })
                        .reverse()
                }
            })

            // deal with button stuff...
            let actualButton = this.handleFilterButtonTogglingStuff(e.target, '.films-filter-by-language-btn');

            // toggle the .active class
            if (!actualButton.classList.contains('active')) {
                // enable filter...
                actualButton.classList.add('active');
            } else {
                // disable filter...
                actualButton.classList.remove('active');
                this.setState({__current_language_filter: ""})
                // this.setState({__filtered_data: this.state.__filtered_data.reverse()})
            }
        }
    }

    /**
     * New text handler for the searchbox
     * @param {Event} e 
     */
    handleSearchBoxInput = (e) => {
        let text = e.target.value;
        // get user input and update state
        this.setState({__search_text: e.target.value});
        
        // no text is in the searchbox, so set state to false
        if (text.length == 0) {
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
     * 
     * @param {*} viewType 
     */
    changeView = (e, selectedViewType) => {
        let toplist = document.getElementsByClassName('films-toplist')[0];

        // find the actual button...
        let tagName = (e.target.tagName).toString();
        let actualButton = getActualButton(e.target, tagName);

        // change view type in state and html...
        if (selectedViewType == ViewType.LIST) {
            this.setState({__view_type: ViewType.LIST});
            toplist.classList.add('view-as-list');
            toplist.classList.remove('view-as-grid');
        } else if (selectedViewType == ViewType.GRID) {
            this.setState({__view_type: ViewType.GRID});
            toplist.classList.remove('view-as-list');
            toplist.classList.add('view-as-grid');
        }
        
        // toggle .active class on buttons
        var byTypeClassname = "films-change-view-btn";
        if (actualButton.classList.contains(byTypeClassname)) {
            var activeBtns = document.getElementsByClassName(byTypeClassname + ' active');
            while (activeBtns.length > 0) {
                activeBtns[0].classList.remove('active');
            }
            actualButton.classList.add('active');
        }
    }

    /**
     * 
     */
    resetFilters = (e) => {
        this.setState(prevState => {
            return {
                __current_sort_type: this.state.__default_sort_type,
                __current_sort_type_str: this.state.__default_sort_type_str,
                __current_sort_order: this.state.__default_sort_order,
                __current_genre_filter: this.state.__default_genre_filter,
                __current_language_filter: this.state.__default_language_filter,
                __filtered_data: Array.from(this.props.filmReviewsData).reverse(),
            }
        });

        // also reset the highlighted items in dropdown lists...
        this.highlightDefaultFiltersInDropdownLists();
    }

    /**
     * 
     * @param {*} e 
     */
    toggleControls = (e) => {
        let toggleControlsBtn = document.getElementsByClassName('toggle-controls-btn')[0];
        let filmsControls = document.getElementsByClassName('films-controls')[0];

        if (filmsControls.classList.contains('visible')) {
            filmsControls.classList.remove('visible');
        } else {
            filmsControls.classList.add('visible');
        }
    }

    /**
     * Content rendered to screen
     */
    render() {
        // index of LAST item in current page
        const lastIndex = this.state.__currentPageNum * MAX_FILMS_PER_PAGE;

        // get list of poster URLs to help with loading images more efficently...
        const posterUrls = getListOfPosterUrls(this.state.__filtered_data);

        // determine view type classname
        const viewTypeClassname = (this.state.__view_type == ViewType.GRID) ? "view-as-grid" : "view-as-list";

        // get items for current page...
        const filmsDisplayed = this.state.__filtered_data
            .filter((f) => {
                // FIXME:   this searching mechanism wont work anymore due to the fact we're now using pagination to split the list over multiple pages... 
                //          So this is essentially just searching the 1st page :(
                let isTitleEqualToSearchbox = f.title.toLowerCase().includes(this.state.__search_text.toLowerCase());
                return isTitleEqualToSearchbox;
            })
            .slice(lastIndex, lastIndex + MAX_FILMS_PER_PAGE)
            .map((film, i) => {
                // generate final data...
                let reviewId = getFilmReviewId(film.title, film.letterboxdUrl)
                let imdbDiff = generateImdbDiffScoreStuff(film.imdbDiffScore);
                let posterUrl = overrideFilmPosterUrl(film);
                let title = overrideFilmTitle(film);

                // display as list (default) or grid
                if (this.state.__view_type == ViewType.LIST) {
                    return <FilmsToplistListElement 
                        reviewId={reviewId}
                        posterUrl={posterUrl}
                        title={title}
                        diffScoreStr={imdbDiff.diffScoreStr}
                        diffScoreClassname={imdbDiff.diffScoreClassname} 
                        posterUrls={posterUrls}
                        film={film}
                        index={i} 
                        key={i} 
                    />;
                } else if (this.state.__view_type == ViewType.GRID) {
                    return <FilmsToplistGridElement
                        reviewId={reviewId}
                        posterUrl={posterUrl}
                        title={title}
                        diffScoreStr={imdbDiff.diffScoreStr}
                        diffScoreClassname={imdbDiff.diffScoreClassname} 
                        posterUrls={posterUrls}
                        film={film}
                        index={i} 
                        key={i} 
                    />;
                }
            });
        
        // get string representations...
        let currentSortTypeStr = "";
        if (this.state.__current_sort_type == SortableType.MY_POS) {
            currentSortTypeStr = SortableTypeStr.MY_POS;
        } else if (this.state.__current_sort_type == SortableType.IMDB_AVG) {
            currentSortTypeStr = SortableTypeStr.IMDB_AVG;
        } else if (this.state.__current_sort_type == SortableType.IMDB_VOTES) {
            currentSortTypeStr = SortableTypeStr.IMDB_VOTES;
        } else if (this.state.__current_sort_type == SortableType.IMDB_DIFF) {
            currentSortTypeStr = SortableTypeStr.IMDB_DIFF;
        } else if (this.state.__current_sort_type == SortableType.DURATION) {
            currentSortTypeStr = SortableTypeStr.DURATION;
        } else if (this.state.__current_sort_type == SortableType.YEAR) {
            currentSortTypeStr = SortableTypeStr.YEAR;
        }

        // get no duplicate lists...
        let genres = removeGenreDuplicates(this.props.filmReviewsData, this.state.__default_genre_filter);
        let languages = removeLanguageDuplicates(this.props.filmReviewsData, this.state.__default_language_filter);

        return(
            <div className="page-wrapper film-reviews-homepage">
                <div className="section-inner">
                    <div className='frontpage films-container'>
                        <span className='page-title'>My top {this.props.filmReviewsData.length} favourite films of all time</span>
                        <div className='toggle-controls-btn' onClick={this.toggleControls}>
                            <ControlsIcon className='invertable-icon' />
                        </div>
                        <div className='films-controls'>
                            <div className='films-controls-subgroup searching-container'>
                                <div className="searchbox">
                                    <input
                                        onChange={this.handleSearchBoxInput} 
                                        placeholder="search by film name..." 
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className='films-controls-subgroup changeViewOfToplist-container'>
                                <div className='changeViewOfToplist-btns'>
                                    <div className={this.state.__view_type == ViewType.LIST ? 'btn films-change-view-btn active' : 'btn films-change-view-btn'}
                                        onClick={(e) => this.changeView(e, ViewType.LIST)}
                                        title="View as list">
                                        <ViewAsListIcon className='invertable-icon' />
                                    </div>
                                    <div className={this.state.__view_type == ViewType.GRID ? 'btn films-change-view-btn active' : 'btn films-change-view-btn'}
                                        onClick={(e) => this.changeView(e, ViewType.GRID)}
                                        title="View as grid">
                                        <ViewAsGridIcon className='invertable-icon' />
                                    </div>
                                </div>
                            </div>
                            <div className='films-controls-subgroup sorting-container'>
                                <div className='sort-type-btns'>
                                    <div className='dropdown-list-sorting-btn dropdown-list-btn' onClick={(e) => this.toggleDropdownList(e, 'dropdown-list-sorting')}>
                                        <span>{currentSortTypeStr}</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                    <div className='dropdown-list-sorting dropdown-list'>
                                        <div className='dropdown-list-title'>Sort by...</div>
                                        <div className="btn films-sort-by-type-btn active" onClick={(e) => { this.sortList(SortableType.MY_POS); this.sortingBtnClicked(e);} }>
                                            {SortableTypeStr.MY_POS}
                                        </div>
                                        <div className="btn films-sort-by-type-btn" onClick={(e) => { this.sortList(SortableType.IMDB_DIFF); this.sortingBtnClicked(e);} }>
                                            {SortableTypeStr.IMDB_DIFF}
                                        </div>
                                        <div className="btn films-sort-by-type-btn" onClick={(e) => { this.sortList(SortableType.IMDB_AVG); this.sortingBtnClicked(e);} }>
                                            {SortableTypeStr.IMDB_AVG}
                                        </div>
                                        <div className="btn films-sort-by-type-btn" onClick={(e) => { this.sortList(SortableType.IMDB_VOTES); this.sortingBtnClicked(e);} }>
                                            {SortableTypeStr.IMDB_VOTES}
                                        </div>
                                        <div className="btn films-sort-by-type-btn" onClick={(e) => { this.sortList(SortableType.DURATION); this.sortingBtnClicked(e);} }>
                                            {SortableTypeStr.DURATION}
                                        </div>
                                        <div className="btn films-sort-by-type-btn" onClick={(e) => { this.sortList(SortableType.YEAR); this.sortingBtnClicked(e);} }>
                                            {SortableTypeStr.YEAR}
                                        </div>
                                    </div>
                                    <div className='beside-dropdown-btn sort-direction-btns'>
                                        <div className="btn films-sort-by-direction-btn active" 
                                            onClick={(e) => { this.changeOrder(SortableDirection.ASC); this.sortingBtnClicked(e);} }
                                            title="Ascending order">
                                            <SortAscendingIcon className='invertable-icon' />
                                        </div>
                                        <div className="btn films-sort-by-direction-btn" 
                                            onClick={(e) => { this.changeOrder(SortableDirection.DESC); this.sortingBtnClicked(e);} }
                                            title="Descending order">
                                            <SortDescendingIcon className='invertable-icon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='films-controls-subgroup filtering-container'>
                                <div className='filter-by-genre-btns filter-by-something-container'>
                                    <div className='dropdown-list-genres-btn dropdown-list-btn' onClick={(e) => this.toggleDropdownList(e, 'dropdown-list-genres')}>
                                        <span>{this.state.__current_genre_filter}</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                    <div className='dropdown-list-genres dropdown-list'>
                                        <div className='dropdown-list-title'>Filter by genre...</div>
                                        {
                                            genres.map((g => {
                                                return <div className="btn films-filter-by-genre-btn" key={g} onClick={(e) => this.filterByGenre(e, g)}>
                                                    <span className='genre-text'>
                                                        {g}
                                                    </span>
                                                    <span className='genre-count'>
                                                        {Array.from(this.props.filmReviewsData).filter((f) => {
                                                            if (g == this.state.__default_genre_filter) {
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
                                    <div className='dropdown-list-languages-btn dropdown-list-btn' onClick={(e) => this.toggleDropdownList(e, 'dropdown-list-languages')}>
                                        <span>{this.state.__current_language_filter}</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                    <div className='dropdown-list-languages dropdown-list'>
                                        <div className='dropdown-list-title'>Filter by language...</div>
                                        {
                                            languages.map((l => {
                                                return <div className="btn films-filter-by-language-btn" key={l} onClick={(e) => this.filterByLanguage(e, l)}>
                                                    <span className='language-text'>
                                                        {l}
                                                    </span>
                                                    <span className='language-count'>
                                                        {Array.from(this.props.filmReviewsData).filter((f) => {
                                                            if (l == this.state.__default_language_filter) {
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
                                    onClick={(e) => this.resetFilters(e)}
                                    title="Reset filters">
                                    <ResetFiltersIcon className='invertable-icon' />
                                </div>
                            </div>
                        </div>
                        <div className='films-toplist-container'>
                            <div className='films-pagination-container'>
                                <ReactPaginate
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    pageCount={this.state.__totalNumOfPages}
                                    onPageChange={(obj) => this.goToPage(obj.selected)}
                                    pageRangeDisplayed={100}
                                    containerClassName={"pagination-btns"}
                                    previousClassName={"previous-btn"}
                                    nextClassName={"next-btn"}
                                    disabledClassName={"pagination-disabled"}
                                    activeClassName={"pagination-active"}
                                    /*
                                    pageLabelBuilder={() => this.setPageIndexTitle(topIndex, (topIndex - MAX_FILMS_PER_PAGE + 1))}
                                    */
                                />
                            </div>
                            <div className={`films-toplist ${viewTypeClassname}`}>
                                {filmsDisplayed}
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
        filmReviewsData: state.filmReviews,
    }
}

export default connect(mapStateToProps)(Films)
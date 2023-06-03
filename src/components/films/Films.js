/**
 * This is a react component that renders my 'Films' homepage
 */

import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as ArrowRightIcon } from "../../icons/arrowRight.svg";
import { ReactComponent as ArrowLeftIcon } from "../../icons/arrowLeft.svg";
import { ReactComponent as SortAscendingIcon } from "../../icons/sortAscending.svg";
import { ReactComponent as SortDescendingIcon } from "../../icons/sortDescending.svg";

import { connect }  from 'react-redux';
import { getValueOfCSSVariable, zip, removeGenreDuplicates, removeLanguageDuplicates, removeClassFromItemWhenUserClicksOutsideOfItem } from '../../js/helpers.js';
import FilmsToplistElement from './FilmsToplistElement.js';
import ReactPaginate from 'react-paginate';
import { act } from 'react-dom/test-utils';

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
    IMDB_AVG: "IMDB avg rating",
    IMDB_VOTES: "IMDB popularity",
    IMDB_DIFF: "My rating - IMDB avg rating",
    MY_POS: "My order",
    DURATION: "Duration",
    YEAR: "Year of release"
})
const SortableDirection = Object.freeze({
    ASC: enumValue("ascending"),
    DESC: enumValue("descending"),
})


class Films extends React.Component {
    
    state = {
        // state representation of data that is displayed/filtered/sorted
        __filtered_data: Array.from(this.props.filmReviewsWebdata)
            .sort((a,b) => { return a['position'] - b['position'] })
            .reverse(),

        // state representation of webdata (directors, year, genres, etc...)
        // the default order is lowest rating to highest rating (i.e. ascending)
        __web_data: Array.from(this.props.filmReviewsWebdata)
            .sort((a,b) => { return a['position'] - b['position'] })
            .reverse(),
                
        // state representation of localdata (my review, my rating, my tags, etc...)
        __local_data: Array.from(this.props.filmReviewsLocaldata),

        // state representation of number of pages
        __totalNumOfPages: Math.ceil(this.props.filmReviewsWebdata.length / MAX_FILMS_PER_PAGE),

        // state representation of page number the user is currently on
        __currentPageNum: STARTING_PAGE_NUM,

        // state representation of list sorting
        __sort_type: SortableType.MY_POS,
        __sort_type_str: SortableTypeStr.MY_POS,
        __sort_order: SortableDirection.ASC,

        // filters...
        __current_genre_filter: "All Genres",
        __current_language_filter: "All Languages",
        __default_genre_filter: "All Genres",
        __default_language_filter: "All Languages",

        // search stuff...
        __search_box_contains_text: false,
        __search_box_was_clicked: false,
        __search_post: ""
    }

    /**
     * Update current page number (in state, and in local storage)
     * @param {*} newPageNum 
     */
    goToPage = (newPageNum) => {
        // update it in localstorage...
        localStorage.setItem('currentPageNum_films', newPageNum);

        // set it in state...
        this.setState(prevState => {
            return {
                __currentPageNum: newPageNum
            }
        })

        // console.log('Changed page to ' + newPageNum);
    }

    /**
     * Called when user wants to see another page...
     * @param {*} obj 
     */
    changePage = (obj) => {
        // the user expects to be at the top of the next page...
        window.scrollTo(0, 0);

        // update current page number...
        this.goToPage(obj.selected);
    }

    /**
     * 
     * @param {*} previousPageNum 
     */
    retainPreviousPage() {
        // go to previous page
        let prevPageNum = localStorage.getItem('currentPageNum_films')
        this.goToPage(prevPageNum);
    }

    /**
     * Sort my list by a particular type
     * @param {*} type 
     */
    sortList = (type) => {
        if (this.state.__sort_order == SortableDirection.ASC) {
            this.setState(prevState => {
                return {
                    __sort_type: type,
                    __sort_type_str: type,
                    __filtered_data: Array.from(this.props.filmReviewsWebdata)
                        .sort((a,b) => { return a[type] - b[type] })
                        .reverse()
                }
            })
        }

        else if (this.state.__sort_order == SortableDirection.DESC) {
            this.setState(prevState => {
                return {
                    __sort_type: type,
                    __sort_type_str: type,
                    __filtered_data: Array.from(this.props.filmReviewsWebdata)
                        .sort((a,b) => { return a[type] - b[type] })
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
        // console.log(this.state.__sort_type);

        if (order == SortableDirection.ASC) {
            this.setState(prevState => {
                return {
                    __sort_type: this.state.__sort_type,
                    __sort_type_str: this.state.__sort_type,
                    __sort_order: order,
                    __filtered_data: this.state.__filtered_data
                        .sort((a,b) => { return a[this.state.__sort_type] - b[this.state.__sort_type] })
                        .reverse(),
                }
            })
        }

        else if (order == SortableDirection.DESC) {
            this.setState(prevState => {
                return {
                    __sort_type: this.state.__sort_type,
                    __sort_type_str: this.state.__sort_type,
                    __sort_order: order,
                    __filtered_data: this.state.__filtered_data
                        .sort((a,b) => { return a[this.state.__sort_type] - b[this.state.__sort_type] })
                }
            })
        }
    }

    /**
     * 
     */
    sortListImdbDiffScore() {
        let type = 'IMDB diff score';

        this.setState(prevState => {
            return {
                __sort_type: type,
                __sort_type_str: type,
                __sort_order: SortableDirection.DESC,
                __filtered_data: Array.from(this.props.filmReviewsWebdata)
                    .sort((a,b) => {
                        Array.from(this.props.filmReviewsLocaldata)
                            .sort((c,d) => {
                                if (a['letterboxdFilmId'] == c['letterboxdFilmId']) {
                                    return (a['myRating'] - c['imdbAvgRating']) - (b['myRating'] - d['imdbAvgRating'])
                                }
                            })
                    })
            }
        })
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
        // retain previous page based on localstorage value...
        // this.retainPreviousPage();

        // update pagination buttons...
        this.manuallyChangeTextOfPaginationButtons()
        
        //
        let defaultLanguageOption = document.querySelector('.dropdown-list-languages > div:first-child');
        let defaultGenreOption = document.querySelector('.dropdown-list-genres > div:first-child');
        defaultGenreOption.classList.add('active');
        defaultLanguageOption.classList.add('active');
    }

    
    /**
     * 
     * @param {*} e 
     */
    sortingBtnClicked = (e) => {
        let tagName = (e.target.tagName).toString();

        // make sure we actually find the button...
        let actualButton = NaN;
        if (tagName == "svg") {
            // user clicked on svg, bit fucking annoying
            actualButton = e.target.parentElement;
        } else if (tagName == "path") {
            // user clicked on path inside svg, bit fucking annoying
            actualButton = e.target.parentElement.parentElement;
        } else {
            // user clicked on button, well done
            actualButton = e.target;
        }

        var byTypeClassname = "films-sort-by-type-btn";
        var byOrderClassname = "films-sort-by-direction-btn";

        if (actualButton.classList.contains(byTypeClassname)) {
            var activeBtns = document.getElementsByClassName(byTypeClassname + ' active');
            while (activeBtns.length > 0) {
                activeBtns[0].classList.remove('active');
            }
            actualButton.classList.add('active');
        }

        else if (actualButton.classList.contains(byOrderClassname)) {
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
                    __filtered_data: Array.from(this.props.filmReviewsWebdata)
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
                this.setState({__filtered_data: Array.from(this.props.filmReviewsWebdata).reverse()})
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

            // filter the list...
            this.setState(prevState => {
                return {
                    __filtered_data: Array.from(this.props.filmReviewsWebdata)
                        .filter((f) => {
                            if (languageSelected == this.state.__default_language_filter) {
                                return true;
                            }
                            return f.language == languageSelected;
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
                this.setState({__filtered_data: Array.from(this.props.filmReviewsWebdata).reverse()})
            }
        }
    }


    /**
     * New text handler for the searchbox
     * @param {Event} e 
     */
    handleSearchBoxInput = (e) => {
        // get user input and update state
        this.setState({__search_post: e.target.value});
        
        // no text is in the searchbox, so set state to false
        if (e.target.value.length == 0) {
            this.setState({__search_box_contains_text: false});
        }
        // there's some text in the searchbox, so set state to true
        else if (e.target.value.length > 0) {
            this.setState({__search_box_contains_text: true});
        }
    }


    /**
     * Content rendered to screen
     */
    render() {
        // convert the localdata json into an iterable array...
        const localdata = Array.from(this.props.filmReviewsLocaldata);
        // MAX_FILMS_PER_PAGE = localdata.length;

        // index of LAST item in current page
        const lastIndex = this.state.__currentPageNum * MAX_FILMS_PER_PAGE;

        // get items for current page...
        const filmsDisplayed = this.state.__filtered_data
            .filter((f) => {
                let isTitleEqualToSearchbox = f.title.toLowerCase().includes(this.state.__search_post.toLowerCase());
                return isTitleEqualToSearchbox;
            })
            .slice(lastIndex, lastIndex + MAX_FILMS_PER_PAGE)
            .map(filmWeb => {
                // iterate over localdata, and find the matching item in webdata...
                for (let j = 0; j < localdata.length; j++) {
                    let filmLocal = localdata[j];
                    if (filmLocal.letterboxdUrl == filmWeb.letterboxdUrl) {
                        return <FilmsToplistElement filmWebdata={filmWeb} filmLocaldata={filmLocal} key={j} />;
                    }
                }
            })
        
        // get string representations...
        let currentSortTypeStr = "";
        if (this.state.__sort_type == SortableType.MY_POS) {
            currentSortTypeStr = SortableTypeStr.MY_POS;
        } else if (this.state.__sort_type == SortableType.IMDB_AVG) {
            currentSortTypeStr = SortableTypeStr.IMDB_AVG;
        } else if (this.state.__sort_type == SortableType.IMDB_VOTES) {
            currentSortTypeStr = SortableTypeStr.IMDB_VOTES;
        } else if (this.state.__sort_type == SortableType.DURATION) {
            currentSortTypeStr = SortableTypeStr.DURATION;
        } else if (this.state.__sort_type == SortableType.YEAR) {
            currentSortTypeStr = SortableTypeStr.YEAR;
        }

        // get no duplicate lists...
        let genres = removeGenreDuplicates(this.props.filmReviewsWebdata, this.state.__default_genre_filter);
        let languages = removeLanguageDuplicates(this.props.filmReviewsWebdata, this.state.__default_language_filter);

        return(
            <div className="page-wrapper film-reviews-homepage">
                <div className="section-inner">
                    <div className='films-container'>
                        <div className='films-controls'>
                            <div className='films-controls-subgroup searching-container'>
                                <span className='subgroup-title'>Search</span>
                                <div className="searchbox">
                                    <input
                                        onChange={this.handleSearchBoxInput} 
                                        placeholder="search by film name..." 
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className='films-controls-subgroup filtering-container'>
                                <span className='subgroup-title'>Filter by</span>
                                <div className='filter-by-genre-btns filter-by-something-container'>
                                    <div className='dropdown-list-genres-btn dropdown-list-btn' onClick={(e) => this.toggleDropdownList(e, 'dropdown-list-genres')}>
                                        <span>{this.state.__current_genre_filter}</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                    <div className='dropdown-list-genres dropdown-list'>
                                        {
                                            genres.map((g => {
                                                return <div className="btn films-filter-by-genre-btn" onClick={(e) => this.filterByGenre(e, g)}>
                                                    <span className='genre-text'>
                                                        {g}
                                                    </span>
                                                    <span className='genre-count'>
                                                        {this.state.__web_data.filter((f) => {
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
                                        {
                                            languages.map((l => {
                                                return <div className="btn films-filter-by-language-btn" onClick={(e) => this.filterByLanguage(e, l)}>
                                                    <span className='language-text'>
                                                        {l}
                                                    </span>
                                                    <span className='language-count'>
                                                        {this.state.__web_data.filter((f) => {
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
                            </div>
                            <div className='films-controls-subgroup sorting-container'>
                                <div className='sort-type-btns'>
                                    <span className='subgroup-title'>Sort by</span>
                                    <div className='dropdown-list-sorting-btn dropdown-list-btn' onClick={(e) => this.toggleDropdownList(e, 'dropdown-list-sorting')}>
                                        <span>{currentSortTypeStr}</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                    <div className='dropdown-list-sorting dropdown-list'>
                                        <div className="btn films-sort-by-type-btn active" onClick={(e) => { this.sortList(SortableType.MY_POS); this.sortingBtnClicked(e);} }>
                                            {SortableTypeStr.MY_POS}
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
                            <div className='films-controls-subgroup pagination-container'>
                                <span className='subgroup-title'>Pages</span>
                                <ReactPaginate
                                    previousLabel={"< previous"}
                                    nextLabel={"> next"}
                                    pageCount={this.state.__totalNumOfPages}
                                    onPageChange={this.changePage}
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
                        </div>
                        <div className="films-toplist">
                            {filmsDisplayed}
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
    let webdata = require('./reviews_web_data.json');

    return {
        filmReviewsLocaldata: state.filmReviews,
        filmReviewsWebdata: webdata
    }
}

export default connect(mapStateToProps)(Films)
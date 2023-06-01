/**
 * This is a react component that renders my 'Films' homepage
 */

import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { connect }  from 'react-redux';
import { getValueOfCSSVariable, zip } from '../../js/helpers.js';
import FilmsToplistElement from './FilmsToplistElement.js';
import ReactPaginate from 'react-paginate';

let STARTING_PAGE_NUM = 0;
let MAX_FILMS_PER_PAGE = 25;

const enumValue = (name) => Object.freeze({toString: () => name});
const SortableType = Object.freeze({
    IMDB_AVG: enumValue("imdbAvgRating"),
    IMDB_VOTES: enumValue("imdbNumVotes"),
    IMDB_DIFF: enumValue("imdbDiffScore"),
    MY_POS: enumValue("position"),
    DURATION: enumValue("duration")
});
const SortableTypeStr = Object.freeze({
    IMDB_AVG: "IMDB avg rating",
    IMDB_VOTES: "IMDB popularity",
    IMDB_DIFF: "My rating - IMDB avg rating",
    MY_POS: "My order",
    DURATION: "Duration"
})
const SortableDirection = Object.freeze({
    ASC: enumValue("ascending"),
    DESC: enumValue("descending"),
})


class Films extends React.Component {
    
    state = {
        // state representation of webdata (directors, year, genres, etc...)
        // the default order is lowest rating to highest rating (i.e. ascending)
        __webdata: Array.from(this.props.filmReviewsWebdata)
            .sort((a,b) => { return a['position'] - b['position'] })
            .reverse(),
        
        // state representation of localdata (my review, my rating, my tags, etc...)
        __localdata: Array.from(this.props.filmReviewsLocaldata),

        // state representation of number of pages
        __totalNumOfPages: Math.ceil(this.props.filmReviewsWebdata.length / MAX_FILMS_PER_PAGE),

        // state representation of page number the user is currently on
        __currentPageNum: STARTING_PAGE_NUM,

        // state representation of list sorting
        __sort_type: SortableType.MY_POS,
        __sort_type_str: SortableTypeStr.MY_POS,
        __sort_order: SortableDirection.ASC,
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
                    __webdata: Array.from(this.props.filmReviewsWebdata)
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
                    __webdata: Array.from(this.props.filmReviewsWebdata)
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
        console.log(order);
        console.log(this.state.__sort_type);

        if (order == SortableDirection.ASC) {
            this.setState(prevState => {
                return {
                    __sort_type: this.state.__sort_type,
                    __sort_type_str: this.state.__sort_type,
                    __sort_order: order,
                    __webdata: Array.from(this.props.filmReviewsWebdata)
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
                    __webdata: Array.from(this.props.filmReviewsWebdata)
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
                __webdata: Array.from(this.props.filmReviewsWebdata)
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
                    let upperBound = (this.state.__webdata.length - ((i-1)*MAX_FILMS_PER_PAGE));
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
    }

    /**
     * 
     */
    sortingBtnClicked = (e) => {
        var byTypeClassname = "films-sort-by-type-btn";
        var byOrderClassname = "films-sort-by-direction-btn";

        if (e.target.classList.contains(byTypeClassname)) {
            var activeBtns = document.getElementsByClassName(byTypeClassname + ' active');
            while (activeBtns.length > 0) {
                activeBtns[0].classList.remove('active');
            }
            e.target.classList.add('active');
        }

        else if (e.target.classList.contains(byOrderClassname)) {
            var activeBtns = document.getElementsByClassName(byOrderClassname + ' active');
            while (activeBtns.length > 0) {
                activeBtns[0].classList.remove('active');
            }
            e.target.classList.add('active');
        }
    }

    toggleDropdownSortTypesList() {
        const dropdownList = document.getElementsByClassName('dropdown-list')[0];
        const dropdownListBtn = document.getElementsByClassName('dropdown-list-btn')[0];

        if (dropdownList.classList.contains('visible')) {
            dropdownList.classList.remove('visible');
            dropdownListBtn.classList.remove('list-is-visible');
        } else {
            dropdownList.classList.add('visible');
            dropdownListBtn.classList.add('list-is-visible');
        }
    }

    /**
     * Content rendered to screen
     */
    render() {
        // convert the localdata json into an iterable array...
        const localdata = Array.from(this.props.filmReviewsLocaldata);

        // index of LAST item in current page
        const lastIndex = this.state.__currentPageNum * MAX_FILMS_PER_PAGE;

        // get items for current page...
        const filmsDisplayed = this.state.__webdata
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
        // console.log("lastIndex = " + lastIndex);
        // console.log("totalNumOfPages = " + this.state.__totalNumOfPages);
        // console.log(filmsDisplayed);
        
        let currentSortTypeStr = "";
        if (this.state.__sort_type == SortableType.MY_POS) {
            currentSortTypeStr = SortableTypeStr.MY_POS;
        } else if (this.state.__sort_type == SortableType.IMDB_AVG) {
            currentSortTypeStr = SortableTypeStr.IMDB_AVG;
        } else if (this.state.__sort_type == SortableType.IMDB_VOTES) {
            currentSortTypeStr = SortableTypeStr.IMDB_VOTES;
        } else if (this.state.__sort_type == SortableType.DURATION) {
            currentSortTypeStr = SortableTypeStr.DURATION;
        }
        
        return(
            <div className="page-wrapper film-reviews-homepage">
                <div className="section-inner">
                    <div className='films-container'>
                        <div className='films-controls'>
                            <div className='films-controls-subgroup sorting-container'>
                                <div className='sort-type-btns'>
                                    <span className='subgroup-title'>Sort by</span>
                                    <div className='dropdown-list-btn' onClick={this.toggleDropdownSortTypesList}>
                                        <span>{currentSortTypeStr}</span>
                                        <ArrowDownIcon className='invertable-icon' />
                                    </div>
                                    <div className='dropdown-list hidden'>
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
                                    </div>
                                    <div className='sort-direction-btns'>
                                        <div className="btn films-sort-by-direction-btn active" onClick={(e) => { this.changeOrder(SortableDirection.ASC); this.sortingBtnClicked(e);} } title="Ascending order">🡣</div>
                                        <div className="btn films-sort-by-direction-btn" onClick={(e) => { this.changeOrder(SortableDirection.DESC); this.sortingBtnClicked(e);} } title="Descending order">🡡</div>
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
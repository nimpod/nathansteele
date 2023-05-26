/**
 * This is a react component that renders my 'Films' homepage
 */

import React, {useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { ReactComponent as OpenDropdownIcon } from "../../icons/openDropdown.svg";
import { ReactComponent as ArrowLeftIcon } from "../../icons/arrowLeft.svg";
import { ReactComponent as ArrowRightIcon } from "../../icons/arrowRight.svg";
import { Helpers } from 'react-scroll';
import { getValueOfCSSVariable, zip } from '../../js/helpers.js';
import FilmsToplistElement from './FilmsToplistElement.js';
import ReactPaginate from 'react-paginate';

let STARTING_PAGE_NUM = 0;
let MAX_FILMS_PER_PAGE = 25;

const enumValue = (name) => Object.freeze({toString: () => name});
const SortableTypes = Object.freeze({
    IMDB_AVG: enumValue("imdbAvgRating"),
    IMDB_VOTES: enumValue("imdbNumVotes"),
    MY_POS: enumValue("position")
});
const SortableOrders = Object.freeze({
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
        __sort_type: SortableTypes.MY_POS,
        __sort_order: SortableOrders.ASC
    }

    /**
     * Called when user wants to see another page...
     * @param {*} obj 
     */
    changePage = (obj) => {
        let firstIndexOfNewPage = obj.selected;
        this.setState(prevState => {
            return {
                __currentPageNum: firstIndexOfNewPage
            }
        })
    }

    /**
     * Sort my list in ascending order (i.e Lowest to highest)
     * 
     * For example...   (lowest IMDB avg rating ----> highest IMDB avg rating) (i.e. least critically acclaimed to most critically acclaimed according to IMDB avg rating)
     *                  (lowest IMDB num votes -----> highest IMDB num votes) (i.e. least popular to most popular according to number of votes on IMDB)
     *                  (lowest IMDB diff score ----> highest IMDB diff score) (i.e. most underrated according to the difference between my rating and IMDB avg rating)
     * @param {*} type 
     */
    sortListAscendingOrder = (type) => {
        this.setState(prevState => {
            return {
                __sort_type: type,
                __sort_order: SortableOrders.ASC,
                __webdata: Array.from(this.props.filmReviewsWebdata)
                    .sort((a,b) => { return a[type] - b[type] })
                    .reverse(),
            }
        })
    }

    /**
     * Sort my list in descending order (i.e. lowest to highest)
     * I do this by simply using the .reverse() function in javascript
     * 
     * @param {*} type 
     */
    sortListDescendingOrder = (type) => {
        this.setState(prevState => {
            return {
                __sort_type: type,
                __sort_order: SortableOrders.DESC,
                __webdata: Array.from(this.props.filmReviewsWebdata)
                    .sort((a,b) => { return a[type] - b[type] })
            }
        })
    }

    /**
     * 
     * @param {*} firstIndexOfCurrentPage 
     * @param {*} lastIndexOfCurrentPage 
     * @returns 
     */
    setPageIndexTitle = (firstIndexOfCurrentPage, lastIndexOfCurrentPage) => {
        return firstIndexOfCurrentPage + " - " + lastIndexOfCurrentPage;
    }

    
    /**
     * 
     */
    componentDidMount() {
        // Manually modify text content of pagination items
        // I couldn't figure out how to use the 'pageLabelBuilder' attribute the way I wanted to use it.
        let paginationBtns = document.querySelector('.films-container ul.pagination-btns');
        let paginationBtnsList = paginationBtns.childNodes;
        // if (paginationBtnsList[1].childNodes[0].textContent == "1") {
        for (let i = 0; i < paginationBtnsList.length; i++) {
            console.log('i = ' + i);
            let btn = paginationBtnsList[i];
            if (btn.classList.contains('previous-btn') == true || btn.classList.contains('next-btn') == true) {
                // ignore the 'previous' and 'next' buttons...
            } else {
                let anchorTag = btn.childNodes[0];
                for (let j = 0; j < this.state.__totalNumOfPages; j++) {
                    let upperBound = (this.state.__webdata.length - ((i-1)*MAX_FILMS_PER_PAGE));
                    let lowerBound = upperBound - MAX_FILMS_PER_PAGE + 1;
                    // let textContent = (upperBound + " - " + lowerBound);
                    let textContent = "Top " + upperBound;
                    anchorTag.textContent = textContent;
                    break;
                }
            }
        }
        // }
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
        console.log("lastIndex = " + lastIndex);
        console.log("totalNumOfPages = " + this.state.__totalNumOfPages);
        console.log(filmsDisplayed);
        
        return(
            <div className="page-wrapper film-reviews-homepage">
                <div className="section-inner">
                    <div className='films-container'>
                        <div className='films-controls'>
                            {/*}
                            <button className='active' onClick={() => this.sortListAscendingOrder(SortableTypes.MY_POS)}>
                                My order
                            </button>
                            <button onClick={() => this.sortListAscendingOrder(SortableTypes.IMDB_AVG)}>
                                Sort by highest IMDB avg score
                            </button>
                            <button onClick={() => this.sortListDescendingOrder(SortableTypes.IMDB_AVG)}>
                                Sort by lowest IMDB avg score
                            </button>
                            */}
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
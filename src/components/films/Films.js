/**
 * This is a react component that renders my 'Films' homepage
 */

import React, {Component, useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { ReactComponent as OpenDropdownIcon } from "../../icons/openDropdown.svg";
import { ReactComponent as ArrowLeftIcon } from "../../icons/arrowLeft.svg";
import { ReactComponent as ArrowRightIcon } from "../../icons/arrowRight.svg";
import { Helpers } from 'react-scroll';
import FilmsToplistElement from './FilmsToplistElement.js';
import ReactPaginate from 'react-paginate';

let STARTING_PAGE_NUM = 0;


class Films extends Component {

    constructor(props) {
        super(props);

        //const __webdata = Array.from(this.props.filmReviewsWebdata).sort((a,b) => { return a['position'] - b['position'] }).reverse()
        //const __localdata = Array.from(this.props.filmReviewsLocaldata);
        //console.log("Webdata length: " + __webdata.length);
        //console.log("Localdata length: " + __localdata.length);

        this.state = {
            // state representation of webdata
            //webdata: __webdata,

            // state representation of localdata 
            //localdata: __localdata,

            // state representing which page the user is currently in. This is constantly updated as the user navigates through the list
            pageNum: STARTING_PAGE_NUM
        };
    }

    changePage(selected) {
        this.setState({pageNum: selected})
    }

    /**
     * The Render() function, content rendered to screen
     */
    render() {
        // convert the webdata json into an iterable array...
        const webdata = Array.from(this.props.filmReviewsWebdata)
            .sort((a,b) => { return a['position'] - b['position'] })
            .reverse()
            .slice(0, this.props.filmReviewsWebdata.length);
    
        let MAX_FILMS_PER_PAGE = webdata.length;

        // convert the localdata json into an iterable array...
        const localdata = Array.from(this.props.filmReviewsLocaldata);

        // index of LAST item in current page
        const lastIndex = this.state.pageNum * MAX_FILMS_PER_PAGE;

        // calculate total number of pages...
        const totalNumOfPages = Math.ceil(webdata.length / MAX_FILMS_PER_PAGE);

        // get items for current page...
        const filmsDisplayed = webdata
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
        
        return(
            <div className="page-wrapper film-reviews-homepage">
                <div className="section-inner">
                    <div className='films-container'>
                        <div className='films-controls'>
                        
                        </div>
                        <div className="films-toplist">
                            <ReactPaginate
                                previousLabel={"< previous"}
                                nextLabel={"> next"}
                                pageCount={totalNumOfPages}
                                onPageChange={() => this.changePage()}
                                containerClassName={"pagination-btns"}
                                previousLinkClassName={"previous-btn"}
                                nextLinkClassName={"next-btn"}
                                disabledClassName={"pagination-disabled"}
                                activeClassName={"pagination-active"}
                            />
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
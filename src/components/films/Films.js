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
import $ from 'jquery';

let filmReviewsSorted = [];


class Films extends Component {

    /**
     * The Render() function, content rendered to screen
     */
    render() {
        // this.mergeData();
        filmReviewsSorted = Array.from(this.props.filmReviewsWebdata).sort((a,b) => { return a['position'] - b['position'] }).reverse();

        return(
            <div className="page-wrapper film-reviews-homepage">
                <div className="section-inner">
                    <div className='films-container'>
                        <div className='films-controls'>
                        
                        </div>
                        <div className="films-toplist">
                            {filmReviewsSorted.map((film, i) => {
                                for (let j = 0; j < this.props.filmReviewsLocaldata.length; j++) {
                                    let local = Array.from(this.props.filmReviewsLocaldata)[j];
                                    if (local.letterboxdUrl == film.letterboxdUrl) {
                                        return <FilmsToplistElement filmWebdata={film} filmLocaldata={local} key={i} />;
                                    }
                                }
                            })}
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
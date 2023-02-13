import React, { Redirect, Component, useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import FilmsSubmenu from './FilmsSubmenu';
import TopFilmsGridElement from './TopFilmsGridElement';
import FilmsJsonList from './reviews-allData.json';
import { camelize } from '../../js/helpers.js';

let filmReviewsSorted = []
export {filmReviewsSorted};

class Films extends Component {

    /**
     * Click handler when grid item clicked
     * @param {} idOfFilmClicked
     */
    clickedGridElement = (idOfFilmClicked) => {        
        let gridItems = document.getElementsByClassName('film-grid-element');
        for (const item of gridItems) {
            item.classList.remove('active');
        }

        let gridItemClicked = document.querySelector('#grid-element-' + idOfFilmClicked + '.film-grid-element');
        gridItemClicked.classList.toggle('active');
    }

    /**
     * 
     */
    componentDidMount() {
        /*
        let topFilmsGrid = document.querySelector('#top-films-list');
        if (topFilmsGrid !== null) {
            topFilmsGrid.scrollIntoView(false);
        }*/
    }

    /**
     * 
     */
    mergeData() {
        let moreJsonData = require('./reviews_web_data.json');
        for (let i = 0; i < moreJsonData.length; i++) {
            let moreData = moreJsonData[i];
            // console.log('moreData: ', moreData);
            
            for (let j = 0; j < this.props.filmReviews.length; j++) {
                let reducerData = this.props.filmReviews[j];
                //console.log('localData BEFORE: ', localData);

                if (reducerData.letterboxdUrl === moreData.letterboxdUrl) {
                    console.log('MATCH(', j, '): reducerData.title = ', reducerData);
                    reducerData.year = moreData['year'];
                    reducerData.duration = moreData['duration'];
                    reducerData.position = moreData['position'];
                    reducerData.directors = moreData['directors'];
                    reducerData.genres = moreData['genres'];
                    reducerData.language = moreData['language'];
                    reducerData.letterboxdUrl = moreData['letterboxdUrl'];
                    reducerData.imdbUrl = moreData['imdbUrl'];
                    reducerData.letterboxdFilmId = moreData['letterboxdFilmId'];
                    reducerData.imdbFilmId = moreData['imdbFilmId'];
                    reducerData.imdbAvgRating = moreData['imdbAvgRating'];
                    reducerData.imdbNumVotes = moreData['imdbNumVotes'];
                    reducerData.posterUrl = moreData['posterUrl'];
                    
                    // console.log(reducerData.customPosterUrl);
                    // use custom poster url if it exists...
                    if (reducerData.customPosterUrl !== undefined) {
                        console.log(reducerData.customPosterUrl);
                        reducerData.posterUrl = reducerData.customPosterUrl;
                    }
                    if (reducerData.posterUrl == undefined) {    // use default posterUrl if I didnt specify one...
                        reducerData.posterUrl = moreData['posterUrl'];
                    }
                    // use custom title if it exists...
                    if (reducerData.titleDisplayed !== undefined) {
                        reducerData.title = reducerData['titleDisplayed'];
                    }
                    break;
                }

                // console.log('AFTER: ', localData);
            }
        }
    }

    render() {
        this.mergeData();
        filmReviewsSorted = Array.from(this.props.filmReviews).sort((a,b) => { return a['position'] - b['position'] }).reverse();
        let idOfFilmDisplayed = filmReviewsSorted[filmReviewsSorted.length - 1].letterboxdFilmId;
        let newPath = '/films/' + idOfFilmDisplayed;
        console.log(newPath);
        
        return (
            <div className='top-films-grid-container'>
                <div className='top-films-grid-controls'>

                </div>
                <div id='top-films-list'>
                    {filmReviewsSorted.map(f => {
                        return <TopFilmsGridElement
                            film={f}
                            filmsList={filmReviewsSorted}
                            clickedGridElement={this.clickedGridElement}
                        />
                    })}
                </div>
            </div>
        )

        /*
        return(
            <Redirect to={'/films/' + idOfFilmDisplayed} />
        )*/
    }
}

/**
 * [function: Connect this React component to the Redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        filmReviews: state.filmReviews
    }
}

export default connect(mapStateToProps)(Films)
import React, {Component, useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import MovieToplistItem from './MoviesToplistElement.js';
import FilmsJsonList from './reviews_web_data.json';
import { mergeWebAndLocalData } from './merge_webdata_with_localdata.js';


let filmReviewsSorted = []
export {filmReviewsSorted};


class Movies extends Component {

    /**
     * 
     */
    mergeData() {
        let moreJsonData = require('./reviews_web_data.json');
        for (let i = 0; i < moreJsonData.length; i++) {
            let moreData = moreJsonData[i];
            /// console.log('moreData: ', moreData);
            
            for (let j = 0; j < this.props.filmReviews.length; j++) {
                let reducerData = this.props.filmReviews[j];
                /// console.log('localData BEFORE: ', localData);

                if (reducerData.letterboxdUrl === moreData.letterboxdUrl) {
                    /// console.log('MATCH(', j, '): reducerData.title = ', reducerData);
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
                    reducerData.reviewId = moreData['reviewId'];
                    
                    // use custom poster url if it exists...
                    if (reducerData.customPosterUrl !== undefined) {
                        reducerData.posterUrl = reducerData.customPosterUrl;
                    }
                    // use default posterUrl if I didnt specify one...
                    if (reducerData.posterUrl == undefined) {
                        reducerData.posterUrl = moreData['posterUrl'];
                    }
                    // use custom title if it exists...
                    if (reducerData.titleDisplayed !== undefined) {
                        reducerData.title = reducerData['titleDisplayed'];
                    }
                    break;
                }

                /// console.log('AFTER: ', localData);
            }
        }
    }

    render() {
        let webdata = require('./reviews_web_data.json');
        mergeWebAndLocalData(webdata, this.props.filmReviews);

        this.mergeData();
        filmReviewsSorted = Array.from(this.props.filmReviews).sort((a,b) => { return a['position'] - b['position'] }).reverse();
        console.log(filmReviewsSorted);
        // let idOfFilmDisplayed = filmReviewsSorted[filmReviewsSorted.length - 1].letterboxdFilmId;
        // let newPath = '/movies/' + idOfFilmDisplayed;
        // console.log(newPath);

        return (
            <div className="page-wrapper film-reviews-homepage">
                <div className="section-inner">
                    <div className='films-controls'>

                    </div>
                    <div className="films-toplist">
                        {filmReviewsSorted.map((film, i) => {
                            return <MovieToplistItem film={film} key={i}/>;
                        })}
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
        filmReviews: state.filmReviews
    }
}

export default connect(mapStateToProps)(Movies)
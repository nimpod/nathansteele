/**
 * This RootReducer JS file is essentially a shite database.
 */

import ReactDomServer from 'react-dom/server';
import React from 'react';
import { getAlbumReviewId, getFilmReviewId } from '../js/helpers.js';

// import local data json files...
import { filmReviews as localDataFilmReviews } from './localData/filmReviews.js';
import { albumReviews as localDataAlbumReviews } from './localData/albumReviews.js';
import { blogPosts as localDataBlogPosts } from './localData/blogPosts.js';


/**
 * Database
 */
const initState = {
    // blog posts...
    posts: localDataBlogPosts,

    // album reviews (will be merged with some web data)...
    albumReviews: localDataAlbumReviews,

    // film reviews (will be merged with some web data)...
    filmReviews: localDataFilmReviews,
}


/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const RootReducer = (state=initState, action) => {
    // merge film data...
    let mergedFilmData = mergeFilmData(initState);
    state.filmReviews = mergedFilmData;

    // merge album data...
    let mergedAlbumData = mergeAlbumData(initState);
    state.albumReviews = mergedAlbumData;

    // return modified state...
    return state;
}


/**
 * 
 * @param {*} initState 
 * @returns 
 */
const mergeFilmData = (initState) => {
    // retrieve local film data...
    const mappedById = (initState.filmReviews.reduce((acc, film) => {
        acc[film.letterboxdUrl] = film;
        return acc;
    }, {}));

    // retrieve web film data...
    let webdata = require('../components/films/reviews_web_data.json');

    // merge local & web film data...
    const mergedData = webdata.map(film => ({...film, ...mappedById[film.letterboxdUrl]}))

    // add new attributes...
    Object.entries(mergedData).forEach(([k,v]) => {
        // calculate imdb diff score for each film...
        v["imdbDiffScore"] = (v["myRating"] - v["imdbAvgRating"]).toFixed(1)

        // calculate average of gradual interest array...
        if (v["gradualInterest"] !== undefined) {
            let arr = v["gradualInterest"];
            v["gradualInterestAverage"] = (arr.reduce((x,y) => x+y) / arr.length).toFixed(1);
        }
        
        // find id of next/previous films
        let currentFilm = mergedData[v["position"] - 1];  // remember, arrays start at 0.... so current film is N-1
        let nextFilm = mergedData[v["position"] - 2];  // therefore, next film is N-2
        let prevFilm = mergedData[v["position"]];  // and previous film is N-0

        let reviewIdOfNextFilm = "";
        let reviewIdOfPrevFilm = "";
        if (nextFilm !== undefined) {
            reviewIdOfNextFilm = getFilmReviewId(nextFilm.title, nextFilm.letterboxdUrl);
        }
        if (prevFilm !== undefined) {
            reviewIdOfPrevFilm = getFilmReviewId(prevFilm.title, prevFilm.letterboxdUrl);
        }
        v["reviewIdOfNextFilm"] = reviewIdOfNextFilm;
        v["reviewIdOfPrevFilm"] = reviewIdOfPrevFilm;
    });

    return mergedData;
}


/**
 * 
 * @param {*} initState 
 */
const mergeAlbumData = (initState) => {
    // retrieve local film data...
    const mappedById = (initState.albumReviews.reduce((acc, album) => {
        acc[album.lastFmUrl] = album;
        return acc;
    }, {}));

    // retrieve web album data...
    let webdata = require('../components/music/reviews_web_data.json');

    // merge local & web album ata...
    const mergedData = webdata.map(album => ({...album, ...mappedById[album.lastFmUrl]}))

    // add new attributes...
    Object.entries(mergedData).forEach(([k,v]) => {
        // find id of next/previous albums
        let currentAlbum = mergedData[v["position"] - 1];  // remember, arrays start at 0.... so current film is N-1
        let prevAlbum = mergedData[v["position"] - 2];
        let nextAlbum = mergedData[v["position"]];

        let reviewIdOfNextAlbum = "";
        let reviewIdOfPrevAlbum = "";
        if (nextAlbum !== undefined) {
            reviewIdOfNextAlbum = getAlbumReviewId(nextAlbum.artistName, nextAlbum.albumName);
        }
        if (prevAlbum !== undefined) {
            reviewIdOfPrevAlbum = getAlbumReviewId(prevAlbum.artistName, prevAlbum.albumName)
        }
        v["reviewIdOfNextAlbum"] = reviewIdOfNextAlbum;
        v["reviewIdOfPrevAlbum"] = reviewIdOfPrevAlbum;

        // create proper array from the 'list' of genres (each genre is seperated by a semi colon (copying the genres from Musicbee, rather than rewritting each one manually enclosed in quotations))
        if (v["genres"]) {
            v["genres"] = v["genres"][0].split(';');
        }
    });

    return mergedData;
}

export default RootReducer;
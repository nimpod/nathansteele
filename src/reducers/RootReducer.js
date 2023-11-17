/**
 * This RootReducer JS file is essentially a shite database.
 */

import ReactDomServer from 'react-dom/server';
import React from 'react';
import { getAlbumReviewId, getFilmReviewId } from '../js/helpers.js';

import { filmReviews as local_data_films } from './localData/filmReviews.js';
import { albumReviews as local_data_albums } from './localData/albumReviews.js';
import { blogPosts as local_data_blog } from './localData/blogPosts.js';


/**
 * Initial state
 */
const init_state = {
    // blog posts...
    posts: local_data_blog,

    // album reviews (this is merged with web data)...
    albumReviews: local_data_albums,

    // film reviews (this is merged with web data)...
    filmReviews: local_data_films,
}


/**
 * Merge local data, with web data
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const RootReducer = (state=init_state, action) => {
    // merge local and web data for films...
    let all_films_data = merge_films_local_and_web_data(init_state);
    state.filmReviews = all_films_data;

    // merge local and web data for albums...
    let all_albums_data = merge_albums_local_and_web_data(init_state);
    state.albumReviews = all_albums_data;

    // return modified state...
    return state;
}


/**
 * Merge local film review data, with web film review data.
 * @param {*} init_state 
 * @returns 
 */
const merge_films_local_and_web_data = (init_state) => {
    // retrieve local film data...
    const mapped_by_id = (init_state.filmReviews.reduce((acc, film) => {
        acc[film.letterboxdUrl] = film;
        return acc;
    }, {}));

    // retrieve web film data...
    let webdata = require('../components/films/reviews_web_data.json');

    // merge local & web film data...
    const merged_data = webdata.map(film => ({...film, ...mapped_by_id[film.letterboxdUrl]}))

    // add new attributes...
    Object.entries(merged_data).forEach(([k,v]) => {
        // calculate imdb diff score for each film...
        v["imdbDiffScore"] = (v["myRating"] - v["imdbAvgRating"]).toFixed(1)

        // calculate average of gradual interest array...
        if (v["gradualInterest"] !== undefined) {
            let arr = v["gradualInterest"];
            v["gradualInterestAverage"] = (arr.reduce((x,y) => x+y) / arr.length).toFixed(1);
        }
        
        // find id of next/previous films
        let current_film = merged_data[v["position"] - 1];  // remember, arrays start at 0.... so current film is N-1
        let next_film = merged_data[v["position"] - 2];  // therefore, next film is N-2
        let prev_film = merged_data[v["position"]];  // and previous film is N-0

        let review_id_of_next_film = "";
        let review_id_of_prev_film = "";
        if (next_film !== undefined) {
            review_id_of_next_film = getFilmReviewId(next_film.title, next_film.letterboxdUrl);
        }
        if (prev_film !== undefined) {
            review_id_of_prev_film = getFilmReviewId(prev_film.title, prev_film.letterboxdUrl);
        }
        v["reviewIdOfNextFilm"] = review_id_of_next_film;
        v["reviewIdOfPrevFilm"] = review_id_of_prev_film;
    });

    return merged_data;
}


/**
 * Merge local album review data, with album review data.
 * @param {*} init_state
 * @returns 
 */
const merge_albums_local_and_web_data = (init_state) => {
    // retrieve local film data...
    const mapped_by_id = (init_state.albumReviews.reduce((acc, album) => {
        acc[album.lastFmUrl] = album;
        return acc;
    }, {}));

    // retrieve web album data...
    let webdata = require('../components/music/reviews_web_data.json');

    // merge local & web album ata...
    const merged_data = webdata.map(album => ({...album, ...mapped_by_id[album.lastFmUrl]}))

    // add new attributes...
    Object.entries(merged_data).forEach(([k,v]) => {
        // find id of next/previous albums
        let current_album = merged_data[v["position"] - 1];  // remember, arrays start at 0.... so current film is N-1
        let prev_album = merged_data[v["position"] - 2];
        let next_album = merged_data[v["position"]];

        let review_id_of_next_album = "";
        let review_id_of_prev_album = "";
        if (next_album !== undefined) {
            review_id_of_next_album = getAlbumReviewId(next_album.artistName, next_album.albumName);
        }
        if (prev_album !== undefined) {
            review_id_of_prev_album = getAlbumReviewId(prev_album.artistName, prev_album.albumName)
        }
        v["reviewIdOfNextAlbum"] = review_id_of_next_album;
        v["reviewIdOfPrevAlbum"] = review_id_of_prev_album;

        // create proper array from the 'list' of genres (each genre is seperated by a semi colon (copying the genres from Musicbee, rather than rewritting each one manually enclosed in quotations))
        if (v["genres"]) {
            v["genres"] = v["genres"][0].split(';');
        }
    });

    return merged_data;
}

export default RootReducer;
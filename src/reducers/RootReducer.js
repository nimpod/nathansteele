/**
 * This RootReducer JS file is essentially a shite database.
 */

import ReactDomServer from 'react-dom/server';
import React from 'react';
import { get_album_review_id, get_film_review_id } from '../js/helpers.js';

// data...
import { blog_posts as localdata_blog } from './localData/blog_posts.js';
import { film_reviews as localdata_films } from './localData/film_reviews.js';
import { album_reviews as localdata_albums } from './localData/album_reviews.js';

// retrieve web film data...
let webdata_top_films = require(`../components/films/webdata_top_films_list.json`);
let webdata_top_tracks = require(`../components/music/webdata_top_tracks_list.json`);
let webdata_top_albums = require(`../components/music/webdata_top_albums_list.json`);


/**
 * Initial state
 */
const init_state = {
    posts: localdata_blog,
    top_films: localdata_films,
    top_albums: localdata_albums,
    top_tracks: webdata_top_tracks,
}


/**
 * Actual database...
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const RootReducer = (state=init_state, action) => {
    // merge local & web data...
    state.top_films = merge_films_data(
        init_state.top_films,       // local data (my review, my rating, etc...)
        webdata_top_films           // web data (genres, year, poster, etc...)
    );
    
    // merge local & web data...
    state.top_albums = merge_albums_data(
        init_state.top_albums,      // local data (my review, my rating, etc...)
        webdata_top_albums          // web data (genres, year, album cover, etc...)
    );

    // top tracks (no local data being stored, just web data)
    state.top_tracks = init_state.top_tracks;

    // return modified state...
    return state;
}


/**
 * Merge local data & web data
 * @param {Local representation of top films list} local_data 
 * @param {Online representation of top films list} web_data 
 * @returns 
 */
const merge_films_data = (local_data, web_data) => {
    // retrieve local film data...
    const mapped_by_id = (local_data.reduce((acc, film) => {
        acc[film.letterboxd_url] = film;
        return acc;
    }, {}));

    // merge local & web film data...
    const merged_data = web_data.map(film => ({...film, ...mapped_by_id[film.letterboxd_url]}))

    // add new attributes...
    Object.entries(merged_data).forEach(([k,v]) => {
        // calculate imdb diff score for each film...
        v["IMDB_diff_score"] = (v["my_rating"] - v["IMDB_avg_rating"]).toFixed(1)

        // calculate average of gradual interest array...
        if (v["gradual_interest"] !== undefined) {
            let arr = v["gradual_interest"];
            v["gradual_interest_average"] = (arr.reduce((x,y) => x+y) / arr.length).toFixed(1);
        }
        
        // find id of next/previous films
        let current_film = merged_data[v["position"] - 1];  // remember, arrays start at 0.... so current film is N-1
        let next_film = merged_data[v["position"] - 2];  // therefore, next film is N-2
        let prev_film = merged_data[v["position"]];  // and previous film is N-0

        let review_id_of_next_film = "";
        let review_id_of_prev_film = "";
        if (next_film !== undefined) {
            review_id_of_next_film = get_film_review_id(next_film.title, next_film.letterboxd_url);
        }
        if (prev_film !== undefined) {
            review_id_of_prev_film = get_film_review_id(prev_film.title, prev_film.letterboxd_url);
        }
        v["review_id_of_next_film"] = review_id_of_next_film;
        v["review_id_of_prev_film"] = review_id_of_prev_film;
    });

    return merged_data;
}


/**
 * Merge local data & web data
 * @param {Local representation of top albums list} local_data 
 * @param {Online representation of top albums list} web_data 
 * @returns 
 */
const merge_albums_data = (local_data, web_data) => {
    // retrieve local film data...
    const mapped_by_id = (local_data.reduce((acc, album) => {
        acc[album.lastfm_url] = album;
        return acc;
    }, {}));

    // merge local & web album ata...
    const merged_data = web_data.map(album => ({...album, ...mapped_by_id[album.lastfm_url]}))

    // add new attributes...
    Object.entries(merged_data).forEach(([k,v]) => {
        // find id of next/previous albums
        let current_album = merged_data[v["position"] - 1];  // remember, arrays start at 0.... so current film is N-1
        let prev_album = merged_data[v["position"] - 2];
        let next_album = merged_data[v["position"]];

        let review_id_of_next_album = "";
        let review_id_of_prev_album = "";
        if (next_album !== undefined) {
            review_id_of_next_album = get_album_review_id(next_album.artist_name, next_album.album_name);
        }
        if (prev_album !== undefined) {
            review_id_of_prev_album = get_album_review_id(prev_album.artist_name, prev_album.album_name)
        }
        v["review_id_of_next_album"] = review_id_of_next_album;
        v["review_id_of_prev_album"] = review_id_of_prev_album;

        // create proper array from the 'list' of genres (each genre is seperated by a semi colon (copying the genres from Musicbee, rather than rewritting each one manually enclosed in quotations))
        if (v["genres"]) {
            v["genres"] = v["genres"][0].split(';');
        }
    });

    return merged_data;
}

export default RootReducer;
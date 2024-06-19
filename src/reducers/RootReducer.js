/**
 * This RootReducer JS file is essentially a shite database.
 */

import ReactDomServer from 'react-dom/server';
import React from 'react';
import { get_album_review_id, get_film_review_id, remove_special_characters_for_musicbee_export } from '../js/helpers.js';

// import local data json files...
import { film_reviews as localdata_film_reviews } from './localData/films/film_reviews.js';
import { album_reviews as localdata_album_reviews } from './localData/albums/album_reviews.js';
import { blog_posts as localdata_blog_posts } from './localData/blog/blog_posts.js';

// import webdata...
let webdata_top_tracks = require('../components/music/webdata_top_tracks_list.json');
let webdata_top_albums = require('../components/music/webdata_top_albums_list.json');
let webdata_top_films = require('../components/films/webdata_top_films_list.json');

/**
 * Database
 */
const init_state = {
    posts: localdata_blog_posts,
    top_albums: localdata_album_reviews,
    top_films: localdata_film_reviews,
    top_tracks: webdata_top_tracks,
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const RootReducer = (state=init_state, action) => {
    state.top_films = merge_films_data(init_state);
    state.top_albums = merge_albums_data(init_state);
    state.top_tracks = init_state.top_tracks;
    return state;
}

/**
 * 
 * @param {*} init_state 
 * @returns 
 */
const merge_films_data = (init_state) => {
    // retrieve local film data...
    const mappedById = (init_state.top_films.reduce((acc, film) => {
        acc[film.letterboxd_url] = film;
        return acc;
    }, {}));

    // merge local & web film data...
    const mergedData = webdata_top_films.map(film => ({...film, ...mappedById[film.letterboxd_url]}))

    // add new attributes...
    Object.entries(mergedData).forEach(([k,v]) => {
        // calculate imdb diff score for each film...
        v["IMDB_diff_score"] = (v["my_rating"] - v["IMDB_avg_rating"]).toFixed(1)

        // calculate average of gradual interest array...
        if (v["gradual_interest"] !== undefined) {
            let arr = v["gradual_interest"];
            v["gradual_interest_average"] = (arr.reduce((x,y) => x+y) / arr.length).toFixed(1);
        }

        // my rating but without the decimal point (e.g. 9.5 -> 95)
        if (v["my_rating"]) {
            v["my_rating_nodp"] = v["my_rating"].toString().replace(".", "");
        }
        
        // find id of next/previous films
        let currentFilm = mergedData[v["position"] - 1];  // remember, arrays start at 0.... so current film is N-1
        let nextFilm = mergedData[v["position"] - 2];  // therefore, next film is N-2
        let prevFilm = mergedData[v["position"]];  // and previous film is N-0

        let reviewIdOfNextFilm = "";
        let reviewIdOfPrevFilm = "";
        if (nextFilm !== undefined) {
            reviewIdOfNextFilm = get_film_review_id(nextFilm.title, nextFilm.letterboxd_url);
        }
        if (prevFilm !== undefined) {
            reviewIdOfPrevFilm = get_film_review_id(prevFilm.title, prevFilm.letterboxd_url);
        }
        v["review_id_of_next_film"] = reviewIdOfNextFilm;
        v["review_id_of_prev_film"] = reviewIdOfPrevFilm;
    });

    return mergedData;
}

/**
 * 
 * @param {*} initState 
 */
const merge_albums_data = (init_state) => {
    // retrieve local film data...
    const mappedById = (init_state.top_albums.reduce((acc, album) => {
        acc[album.lastfm_url] = album;
        return acc;
    }, {}));

    // merge local & web album ata...
    const mergedData = webdata_top_albums.map(album => ({...album, ...mappedById[album.lastfm_url]}))

    // add new attributes...
    Object.entries(mergedData).forEach(([k,v]) => {
        // find id of next/previous albums
        let currentAlbum = mergedData[v["position"] - 1];  // remember, arrays start at 0.... so current film is N-1
        let prevAlbum = mergedData[v["position"] - 2];
        let nextAlbum = mergedData[v["position"]];
        
        //console.log(mergedData);
        v["artist_name_backend"] = remove_special_characters_for_musicbee_export(v["artist_name"]);
        v["album_name_backend"] = remove_special_characters_for_musicbee_export(v["album_name"]);

        if (v["my_rating"]) {
            v["my_rating_nodp"] = v["my_rating"].toString().replace(".", "");
        }

        let review_id_of_next_album = "";
        let review_id_of_prev_album = "";
        if (nextAlbum !== undefined) {
            let __next_artist_name = remove_special_characters_for_musicbee_export(nextAlbum.artist_name);
            let __next_album_name = remove_special_characters_for_musicbee_export(nextAlbum.album_name);
            review_id_of_next_album = get_album_review_id(__next_artist_name, __next_album_name);
        }
        if (prevAlbum !== undefined) {
            let __prev_artist_name = remove_special_characters_for_musicbee_export(prevAlbum.artist_name);
            let __prev_album_name = remove_special_characters_for_musicbee_export(prevAlbum.album_name);
            review_id_of_prev_album = get_album_review_id(__prev_artist_name, __prev_album_name)
        }
        v["review_id_of_next_album"] = review_id_of_next_album;
        v["review_id_of_prev_album"] = review_id_of_prev_album;

        if (v["artist_name_English"]) {
            v["artist_name_displayed"] = v["artist_name_English"] + " [" + v["artist_name"] + "]";
        } 
        
        if (v["artist_name_Japanese"]) {
            v["artist_name_displayed"] = v["artist_name"] + " [" + v["artist_name_Japanese"] + "]";
        }

        if (v["genres"] !== undefined) {
            // convert from string representation to an actual list (because I'm storing the list of genres as a copy-and-pasted string from musicbee...)
            let arr = v["genres"].split(';');

            // it's helpful to have two versions of the genres list...
            // 1) Displayed in the UI
            let genres = arr.map(el => { return el.trim() });
            // 2) For filtering/sorting, otherwise filtered data doesn't work since album names & artist names are case sensitive
            let genres_lowercase = arr.map(el => { return el.trim().toLowerCase() })

            // replace string version of the list, with an actual list!
            v["genres"] = genres;
            v["genres_lowercase"] = genres_lowercase;
        }
    });

    return mergedData;
}

export default RootReducer;
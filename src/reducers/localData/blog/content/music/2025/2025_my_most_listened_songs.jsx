import React from 'react';
import { Link, withRouter, BrowserRouter } from 'react-router-dom';
import $ from "jquery";
import TrackHeader from '../track_header.js';
import TrackFooter from '../track_footer.js';
import ScrobbleAllTimeDataSummary from '../scrobble_data_per_year_summary.js';
import { get_album_review_id } from '../../../../../../js/helpers.js'
import data from './2025_scrobble_track_data.json';

let MAX_SCROBBLES = data[0]['scrobbles'];
let YEAR = "2025";

export const post = () => (
    <div className='top-songs-EOY'>
        <BrowserRouter>
        <div className='intro-text blog-subsection' id='section1'>
            <div>
                <h3 className='subgroup-title'></h3>
                <ScrobbleAllTimeDataSummary></ScrobbleAllTimeDataSummary>

                <p>
                    <b>2025</b> has has been a less active listening year for me personally, by quite a significant margin too.
                    As you can see, the average daily scrobbles was 38, quite a bit lower compared to previous years.
                </p>
                <p>
                    The month with the lowest scrobbles was June, with just <b>798</b> scrobbles (I was busy exploring China in June, so really didn't have much time for music!)
                </p>
                <p>
                    The month with the most scrobbles was March, with <b>1629</b> scrobbles (which is a fairly normal month compared to past years, it was my last month travelling in India, and I think I was starting to get sick of the chaotic traffic noise and found myself listening to a lot of music to block out the noise.
                </p>
                <p>
                    Despite less listening time overall during <b>2025</b>, I did discover some fantastic music this year that I'd love to tell you all about.
                    So like previous years, I will go over the 25 songs that I listened to most this year.
                </p>

                <p>
                    <a href="https://www.last.fm/user/gutash/library/tracks?from=2025-01-01&rangetype=year" target="_blank">
                        All my data for {YEAR} is here
                    </a> if you want to see that.
                </p>
                
                <p><a href="https://youtube.com/playlist?list=PL_m58L0UBc3VOPqbZf7Bxu8IO7xpwbeaH&si=aRUN7AhLWQGZRG-5" target="_blank">
                    YouTube playlist of all the songs
                </a> from this list.</p>
            </div>
        </div>

        {data.map(obj => {
            let pos = obj['pos'];
            let track = obj['track'];
            let artist = obj['artist'];
            let scrobbles = obj['scrobbles'];
            let youtube = obj['youtube'];
            let genres = obj['genres'];
            let div_id = `track${pos}`;
            let album = obj['album']? obj['album'] : "";
            let album_review_id = "";
            let thoughts = obj['thoughts']? obj['thoughts'] : "";
            let thoughts_p2 = obj['thoughts_p2']? obj['thoughts_p2'] : "";

            if (obj['album'] !== undefined) {
                if (obj['album_review_id'] !== undefined) {
                    album_review_id = obj['album_review_id']; 
                } else {
                    album_review_id = get_album_review_id(artist, album);
                }
            }

            return <div className='blog-subsection' id={div_id}>
                <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                <div className='track-review'>
                    <p className='track-genresList'>{genres}</p>

                    <p>
                        {thoughts}
                    </p>

                    { thoughts_p2 !== "" ? 
                    <p>{thoughts_p2}</p> : null 
                    }

                    <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                </div>
            </div>
            
        })}

        </BrowserRouter>
    </div>
)
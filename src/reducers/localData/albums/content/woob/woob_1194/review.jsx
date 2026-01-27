import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
import { Link, Router, BrowserRouter } from 'react-router-dom';

const tracklist = [
    { "rating": 12, "title": "On Earth" },
    { "rating": 10, "title": "Odonna" },
    { "rating": 8, "title": "Amoeba" },
    { "rating": 8, "title": "Wuub" },
    { "rating": 9, "title": "Strange Air" },
    { "rating": 9, "title": "Emperor" },
];

export const review = () => (
    <BrowserRouter>
    <div className='review-content'>

        <div className="review-main">
            <p>
                Similar in essence to <Link to={`#/music/the_klf-come_down_dawn`}>Chillout</Link>, <Link to={`#/music/the_future_sound_of_london-lifeforms`}>Lifeforms</Link>, <Link to={`#/music/the_orb-adventures_beyond_the_ultraworld`}>Adventures Beyond the Ultraworld</Link>, <Link to={`#/music/the_orb-uforb`}>U.F.Orb</Link>, etc...
                These types of continuous, scifi insipired, ambient techno albums, featuring lots of field recordings and long hypnotic soundscapes.
                It's a very specific niche in electronic music, one that peaked in the 90s.
            </p>

            <p>
                I absoluteley love the vibe of this album. Must listen for fans of ambient techno.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0S3owK3pN64?si=8h7dvrtdBWRLIT4f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className="review-summary">
            <p>
            </p>
        </div>

        {/*
        <div className="review-footer">
            <p>
                Nathan Steele | {date_of_review}
            </p>
        </div>
        */}
    </div>
    </BrowserRouter>
)
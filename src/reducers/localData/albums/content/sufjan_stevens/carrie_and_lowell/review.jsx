import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Death with Dignity" },
    { "rating": 11, "title": "Should Have Known Better" },
    { "rating": 10, "title": "All of Me Wants All of You" },
    { "rating": 9, "title": "Drawn to the Blood" },
    { "rating": 9, "title": "Eugene" },
    { "rating": 11, "title": "Fourth of July" },
    { "rating": 9, "title": "The Only Thing" },
    { "rating": 10, "title": "Carrie & Lowell" },
    { "rating": 11, "title": "John My Beloved" },
    { "rating": 8, "title": "No Shade in the Shadow of the Cross" },
    { "rating": 8, "title": "Blue Bucket of Gold" },
];

const themes = [
    "Melancholic",
    "Depressing",
    "Peaceful",
];

const date_of_review = "June 10, 2025";

export const review = () => (
    <div className='review-content'>

        <div className="review-albumThemes">
            <div className='themes list-of-tags'>
                {themes.map(theme => {
                    return <span className='theme-tag' key={theme}>
                        {theme}
                    </span>
                })}
            </div>
        </div>

        <div className="review-main">
            <p>

            </p>
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
)
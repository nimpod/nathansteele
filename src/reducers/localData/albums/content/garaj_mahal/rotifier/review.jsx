import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "7 Minds" },
    { "rating": 10, "title": "Brd" },
    { "rating": 10, "title": "Some Rules" },
    { "rating": 8, "title": "Crisco Rides Again" },
    { "rating": 8, "title": "Agp" },
    { "rating": 8, "title": "Inner Vibe" },
    { "rating": 10, "title": "Doin' It Again" },
    { "rating": 10, "title": "Pairs" },
    { "rating": 8, "title": "We Are The Survivors" },
];

const themes = [
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Garden of Earthly Delights" },
    { "rating": 8, "title": "Mayor of Simpleton" },
    { "rating": 9, "title": "King For A Day" },
    { "rating": 7, "title": "Here Comes President Kill Again" },
    { "rating": 8, "title": "The Loving" },
    { "rating": 10, "title": "Poor Skeleton Steps Out" },
    { "rating": 9, "title": "One of the Millions" },
    { "rating": 11, "title": "Scarecrow People" },
    { "rating": 7, "title": "Merely A Man" },
    { "rating": 9, "title": "Cynical Days" },
    { "rating": 7, "title": "Across This Antheap" },
    { "rating": 7, "title": "Hold Me Daddy" },
    { "rating": 8, "title": "Pink Thing" },
    { "rating": 8, "title": "Minature Sun" },
    { "rating": 10, "title": "Chalkhills and Children" },
];

const themes = [,
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
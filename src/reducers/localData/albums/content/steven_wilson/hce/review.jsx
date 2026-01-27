import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "First Regret / 3 Years Older" },
    { "rating": 9, "title": "Hand Cannot Erase" },
    { "rating": 9, "title": "Perfect Life" },
    { "rating": 11, "title": "Routine" },
    { "rating": 7, "title": "Home Invasion / Regret #9" },
    { "rating": 8, "title": "Transience" },
    { "rating": 8, "title": "Ancestral" },
    { "rating": 8, "title": "Happy Returns / Ascendant Here" },
];

const date_of_review = "June 10, 2025";

export const review = () => (
    <div className='review-content'>

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
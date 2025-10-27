import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "Flat Earth" },
    { "rating": 8, "title": "Van" },
    { "rating": 8, "title": "Song" },
    { "rating": 9, "title": "Computers" },
    { "rating": 8, "title": "Tears of God" },
    { "rating": 10, "title": "Keyboard" },
    { "rating": 8, "title": "Bologna Penis" },
    { "rating": 8, "title": "McDonalds" },
    { "rating": 8, "title": "You Are Pregnant" },
    { "rating": 10, "title": "Existence" },
    { "rating": 7, "title": "End" },
    { "rating": 9, "title": "Infinite Realm of Incomprehensible" },
];

const themes = [
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
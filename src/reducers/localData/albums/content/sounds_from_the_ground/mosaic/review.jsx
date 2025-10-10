import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 7, "title": "Snow" },
    { "rating": 8, "title": "Treasure" },
    { "rating": 11, "title": "Bodega Bay" },
    { "rating": 10, "title": "Drugstore" },
    { "rating": 7, "title": "The Cut" },
    { "rating": 7, "title": "Marshmello" },
    { "rating": 11, "title": "Rye" },
    { "rating": 7, "title": "Circle & Star" },
    { "rating": 7, "title": "Planted" },
];

const themes = [
    "Hypnotic",
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
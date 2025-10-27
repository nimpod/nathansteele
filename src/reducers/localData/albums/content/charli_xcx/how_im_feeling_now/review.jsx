import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Pink Diamond" },
    { "rating": 11, "title": "forever" },
    { "rating": 11, "title": "claws" },
    { "rating": 8, "title": "7 years" },
    { "rating": 8, "title": "detonate" },
    { "rating": 8, "title": "enemy" },
    { "rating": 8, "title": "i finally understand" },
    { "rating": 9, "title": "c2.0" },
    { "rating": 9, "title": "party 4 u" },
    { "rating": 10, "title": "anthems" },
    { "rating": 9, "title": "visions" },
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
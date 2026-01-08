import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Stairway to the Stars" },
    { "rating": 8, "title": "The Late Late Blues" },
    { "rating": 8, "title": "Bags & Trane" },
    { "rating": 10, "title": "Three Little Words" },
    { "rating": 8, "title": "The Night We Called It A Day" },
    { "rating": 10, "title": "Be-Bop" },
    { "rating": 9, "title": "Blues Legacy" },
    { "rating": 8, "title": "Centerpiece" },
];

const themes = [
];

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
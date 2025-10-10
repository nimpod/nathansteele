import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Forever" },
    { "rating": 8, "title": "I Wish I Had Duck Feet" },
    { "rating": 10, "title": "Sad but true" },
    { "rating": 10, "title": "Crash and Carry" },
    { "rating": 9, "title": "Science Friction" },
    { "rating": 11, "title": "Philosophy by Numbers" },
    { "rating": 10, "title": "Kein Trink Wasser" },
    { "rating": 9, "title": "Quality Seconds" },
    { "rating": 9, "title": "Are We Here?" },
    { "rating": 9, "title": "Attached" },
];

const themes = [
    "",
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
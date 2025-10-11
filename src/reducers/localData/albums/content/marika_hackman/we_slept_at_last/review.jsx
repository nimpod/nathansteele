import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Drown" },
    { "rating": 10, "title": "Before I Sleep" },
    { "rating": 11, "title": "Ophelia" },
    { "rating": 10, "title": "Open Wide" },
    { "rating": 10, "title": "Skin" },
    { "rating": 11, "title": "Claude's Girl" },
    { "rating": 10, "title": "Animal Fear" },
    { "rating": 10, "title": "In Words" },
    { "rating": 10, "title": "Monday Afternoon" },
    { "rating": 10, "title": "Undone, Undress" },
    { "rating": 10, "title": "Next Year" },
    { "rating": 10, "title": "Let Me In" },
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
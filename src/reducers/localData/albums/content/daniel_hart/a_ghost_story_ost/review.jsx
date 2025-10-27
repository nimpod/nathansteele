import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Whatever Hour You Woke" },
    { "rating": 10, "title": "Little Notes" },
    { "rating": 8, "title": "One Door Closes" },
    { "rating": 10, "title": "Post Pie" },
    { "rating": 8, "title": "Gentleman Caller" },
    { "rating": 9, "title": "I Get Overwhelmed" },
    { "rating": 10, "title": "The Secret In The Wall" },
    { "rating": 8, "title": "Vivintes Enim" },
    { "rating": 8, "title": "Sciunt Se Esse Mortui" },
    { "rating": 8, "title": "Last One" },
    { "rating": 8, "title": "Thesaurus Tuus" },
    { "rating": 9, "title": "History" },
    { "rating": 8, "title": "Safe Safe Safe" },
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
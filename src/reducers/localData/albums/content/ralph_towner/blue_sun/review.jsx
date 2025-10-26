import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 12, "title": "Blue Sun" },
    { "rating": 10, "title": "The Prince and the Sage" },
    { "rating": 8, "title": "C.T. Kangaroo" },
    { "rating": 9, "title": "Mevlana Etude" },
    { "rating": 8, "title": "Wedding of the Streams" },
    { "rating": 8, "title": "Shadow Fountain" },
    { "rating": 10, "title": "Rumours of the Rain" },
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
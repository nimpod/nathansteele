import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "The Girl with the Sun in Her Head" },
    { "rating": 9, "title": "Petrol" },
    { "rating": 12, "title": "The Box, Pt. 1" },
    { "rating": 10, "title": "The Box, Pt. 2" },
    { "rating": 10, "title": "Dwr Budr" },
    { "rating": 10, "title": "Adnans" },
    { "rating": 10, "title": "Out There Somewhere - Part 1" },
    { "rating": 10, "title": "Out There Somewhere - Part 2" },
    { "rating": 11, "title": "The Saint" },
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
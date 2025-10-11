import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 12, "title": "Close to the Edge (i. The Solid Time of Change, ii. Total Mass Retain, iii. I Get up I Get Down, iv. Seasons of Man)" },
    { "rating": 9, "title": "And You and I" },
    { "rating": 9, "title": "Siberian Khartu" },
    { "rating": 8, "title": "America" },
    { "rating": 10, "title": "Total Mass Retain" },
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
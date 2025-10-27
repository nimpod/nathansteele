import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Foil" },
    { "rating": 9, "title": "Montreal" },
    { "rating": 9, "title": "Summerside" },
    { "rating": 8, "title": "Slip" },
    { "rating": 9, "title": "Glitch" },
    { "rating": 9, "title": "Piezo" },
    { "rating": 8, "title": "Nine" },
    { "rating": 8, "title": "Further" },
    { "rating": 8, "title": "Yulquen" },
    { "rating": 9, "title": "Nil" },
    { "rating": 8, "title": "Teartear" },
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
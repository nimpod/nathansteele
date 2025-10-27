import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Hips" },
    { "rating": 11, "title": "Incertitude" },
    { "rating": 9, "title": "Thimothee" },
    { "rating": 9, "title": "Jack Rabbit" },
    { "rating": 9, "title": "Clair obscur" },
    { "rating": 8, "title": "Foreign Affairs" },
    { "rating": 8, "title": "Josef" },
    { "rating": 8, "title": "Berga" },
    { "rating": 9, "title": "Hips House" },
    { "rating": 9, "title": "Timothee (Version Courte)" },
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
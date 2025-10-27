import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "And That, Too" },
    { "rating": 9, "title": "Speaking Gently" },
    { "rating": 10, "title": "Time Moves Slow" },
    { "rating": 8, "title": "Confessions Pt. II" },
    { "rating": 8, "title": "Lavender" },
    { "rating": 8, "title": "Chompy's Paradise" },
    { "rating": 9, "title": "IV" },
    { "rating": 9, "title": "Hyssop of Love" },
    { "rating": 8, "title": "Structure No. 3" },
    { "rating": 11, "title": "In Your Eyes" },
    { "rating": 9, "title": "Cashmere" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Give Life Back To Music" },
    { "rating": 8, "title": "The Game Of Love" },
    { "rating": 9, "title": "Giorgio by Moroder" },
    { "rating": 9, "title": "Within" },
    { "rating": 9, "title": "Instant Crush" },
    { "rating": 9, "title": "Lose Yourself To Dance" },
    { "rating": 11, "title": "Touch" },
    { "rating": 9, "title": "Get Lucky" },
    { "rating": 9, "title": "Beyond" },
    { "rating": 9, "title": "Motherboard" },
    { "rating": 9, "title": "Fragments of Time" },
    { "rating": 9, "title": "Doin' it Right" },
    { "rating": 9, "title": "Contact" },
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
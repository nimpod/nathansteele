import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Army of Me" },
    { "rating": 10, "title": "Hyper Ballad" },
    { "rating": 8, "title": "The Modern Things" },
    { "rating": 10, "title": "It's Oh So Quiet" },
    { "rating": 8, "title": "Enjoy" },
    { "rating": 9, "title": "You've Been Flirting Again" },
    { "rating": 9, "title": "Isobel" },
    { "rating": 9, "title": "Possibly Maybe" },
    { "rating": 9, "title": "I Miss You" },
    { "rating": 9, "title": "Cover Me" },
    { "rating": 9, "title": "Headphones" },
];

const themes = [
    "Melancholic",
    "Peaceful",
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
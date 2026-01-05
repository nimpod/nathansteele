import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Amigo" },
    { "rating": 9, "title": "Flangeslab" },
    { "rating": 8, "title": "Housedream" },
    { "rating": 10, "title": "Capsule In Space - Album mix" },
    { "rating": 9, "title": "Darqcyde" },
    { "rating": 8, "title": "Galahad" },
    { "rating": 7, "title": "Meadow Track" },
    { "rating": 8, "title": "Waltzacid" },
    { "rating": 8, "title": "Newsround" },
    { "rating": 8, "title": "Fossil Funk" },
    { "rating": 9, "title": "Bureau de Rave" },
    { "rating": 8, "title": "Eurozone" },
    { "rating": 11, "title": "Capsule In Space - Bonus slam" },
    { "rating": 8, "title": "Bureau de Rave - Parodigy mix" },
    { "rating": 8, "title": "Newsround - Craven mix" },
    { "rating": 8, "title": "Eurozone - Video mix" },
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
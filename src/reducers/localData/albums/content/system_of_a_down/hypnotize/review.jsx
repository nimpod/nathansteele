import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Attack" },
    { "rating": 9, "title": "Dreaming" },
    { "rating": 8, "title": "Kill Rock n Roll" },
    { "rating": 9, "title": "Hypnotize" },
    { "rating": 10, "title": "Stealing Society" },
    { "rating": 9, "title": "Tentative" },
    { "rating": 9, "title": "U-Fig" },
    { "rating": 9, "title": "Holy Mountains" },
    { "rating": 10, "title": "Vicinity of Obscenity" },
    { "rating": 10, "title": "She's Like Heroin" },
    { "rating": 10, "title": "Lonely Day" },
    { "rating": 9, "title": "Soldier Side" },
];

const themes = [
    "Energetic",
    "Aggressive",
    "Accessible",
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
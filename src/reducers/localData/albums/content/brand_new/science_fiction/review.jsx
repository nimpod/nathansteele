import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Lit Me Up" },
    { "rating": 10, "title": "Can't Get It Out" },
    { "rating": 9, "title": "Waste" },
    { "rating": 10, "title": "Could Never Be Heaven" },
    { "rating": 8, "title": "Same Logic/Teeth" },
    { "rating": 9, "title": "137" },
    { "rating": 10, "title": "Out of Mana" },
    { "rating": 9, "title": "In the Water" },
    { "rating": 8, "title": "Desert" },
    { "rating": 9, "title": "No Control" },
    { "rating": 8, "title": "451" },
    { "rating": 10, "title": "Batter Up" },
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
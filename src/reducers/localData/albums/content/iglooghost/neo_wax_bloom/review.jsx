import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Pale Eyes" },
    { "rating": 10, "title": "Super Ink Burst" },
    { "rating": 9, "title": "Bug Thief" },
    { "rating": 8, "title": "Solar Blade" },
    { "rating": 10, "title": "White Gum" },
    { "rating": 8, "title": "Purity Shards" },
    { "rating": 8, "title": "Zen Champ" },
    { "rating": 9, "title": "Infinite Mist" },
    { "rating": 10, "title": "Teal Yomi / Olivine" },
    { "rating": 8, "title": "Peanut Choker" },
    { "rating": 8, "title": "God Grid" },
];

const themes = [
    "Intense",
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
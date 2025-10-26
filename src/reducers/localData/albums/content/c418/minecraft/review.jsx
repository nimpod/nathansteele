import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Key" },
    { "rating": 9, "title": "Door" },
    { "rating": 11, "title": "Subwoofer Lullaby" },
    { "rating": 9, "title": "Death" },
    { "rating": 11, "title": "Living Mice" },
    { "rating": 8, "title": "Moog City" },
    { "rating": 10, "title": "Haggstrom" },
    { "rating": 11, "title": "Minecraft" },
    { "rating": 10, "title": "Oxygene" },
    { "rating": 8, "title": "Equinox" },
    { "rating": 11, "title": "Mice on Venus" },
    { "rating": 10, "title": "Dry Hands" },
    { "rating": 12, "title": "Wet Hands" },
    { "rating": 10, "title": "Clark" },
    { "rating": 9, "title": "Chris" },
    { "rating": 9, "title": "Thirteen" },
    { "rating": 9, "title": "Excuse" },
    { "rating": 9, "title": "Sweden" },
    { "rating": 9, "title": "Cat" },
    { "rating": 8, "title": "Dog" },
    { "rating": 11, "title": "Danny" },
    { "rating": 9, "title": "Beginning" },
    { "rating": 8, "title": "Droopy Likes Richochet" },
    { "rating": 8, "title": "Droopy Likes Your Face" },
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
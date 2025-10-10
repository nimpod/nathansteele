import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Razz" },
    { "rating": 7, "title": "As The Day Goes By" },
    { "rating": 10, "title": "Stampede" },
    { "rating": 8, "title": "Ten Tons Of Dope" },
    { "rating": 12, "title": "London Fields" },
    { "rating": 7, "title": "Tumbledown" },
    { "rating": 8, "title": "Move On" },
    { "rating": 10, "title": "Burning Bright" },
    { "rating": 7, "title": "Poems" },
];

const themes = [
    "Hypnotic",
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
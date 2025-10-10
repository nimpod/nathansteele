import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Sun It Rises" },
    { "rating": 9, "title": "White Winter Hymnal" },
    { "rating": 9, "title": "Ragged Wood" },
    { "rating": 10, "title": "Tiger Mountain Peasant Song" },
    { "rating": 9, "title": "Quiet Houses" },
    { "rating": 9, "title": "He Doesn't Know Why" },
    { "rating": 9, "title": "Heard Them Stirring" },
    { "rating": 9, "title": "Your Protector" },
    { "rating": 9, "title": "Meadowlarks" },
    { "rating": 10, "title": "Blue Ridge Mountains" },
    { "rating": 9, "title": "Oliver James" },
];

const themes = [
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
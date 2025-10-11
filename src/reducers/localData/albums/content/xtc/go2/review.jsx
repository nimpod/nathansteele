import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "Meccanik Dancing" },
    { "rating": 9, "title": "Battery Bridges" },
    { "rating": 9, "title": "Buzzcity Talking" },
    { "rating": 9, "title": "Crowded Room" },
    { "rating": 9, "title": "The Rhythm" },
    { "rating": 8, "title": "Red" },
    { "rating": 10, "title": "Beatown" },
    { "rating": 8, "title": "Life Is Good In The Greenhouse" },
    { "rating": 10, "title": "Jumping In Gomorrah" },
    { "rating": 8, "title": "My Weapon" },
    { "rating": 8, "title": "Super-Tuff" },
    { "rating": 9, "title": "I Am The Audience" },
    { "rating": 9, "title": "Are You Receiving Me?" },
];

const themes = [,
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
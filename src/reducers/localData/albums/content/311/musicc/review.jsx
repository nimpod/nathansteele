import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Welcome" },
    { "rating": 9, "title": "Freak Out" },
    { "rating": 10, "title": "Visit" },
    { "rating": 9, "title": "Paradise" },
    { "rating": 10,  "title": "Unity" },
    { "rating": 8, "title": "Hydroponic" },
    { "rating": 10, "title": "My Stoney Baby" },
    { "rating": 8, "title": "Nix Hex" },
    { "rating": 10, "title": "Plain" },
    { "rating": 9, "title": "Feels So Good" },
    { "rating": 9, "title": "Do You Right" },
    { "rating": 10, "title": "Fat Chance" },
];

const themes = [
    
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
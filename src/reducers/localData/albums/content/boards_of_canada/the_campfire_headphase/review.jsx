import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Into The Rainbow Vein" },
    { "rating": 9, "title": "Chromakey Dreamcoat" },
    { "rating": 8, "title": "Satellite Anthem Icarus" },
    { "rating": 9, "title": "Peacock Tail" },
    { "rating": 8,  "title": "Dayvan Cowboy" },
    { "rating": 9, "title": "A Moment of Clarity" },
    { "rating": 8, "title": "84 Pontiac Dream" },
    { "rating": 10, "title": "Sherbet Head" },
    { "rating": 8, "title": "Oscar See Through Red Eye" },
    { "rating": 8, "title": "Ataronchronon" },
    { "rating": 8, "title": "Hey Saturday Sun" },
    { "rating": 8, "title": "Constants Are Changing" },
    { "rating": 12, "title": "Slow This Bird Down" },
    { "rating": 10, "title": "Tears From The Compound Eye" },
    { "rating": 8, "title": "Farewell Fire" },
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
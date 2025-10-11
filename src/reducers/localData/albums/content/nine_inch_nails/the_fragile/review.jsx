import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Somewhat Damaged" },
    { "rating": 10, "title": "The Day The World Went Away" },
    { "rating": 10, "title": "The Frail" },
    { "rating": 9, "title": "The Wretched" },
    { "rating": 9,  "title": "We're In This Together" },
    { "rating": 8, "title": "The Fragile" },
    { "rating": 8, "title": "Just Like You Imagined" },
    { "rating": 8, "title": "Even Deeper" },
    { "rating": 7, "title": "Pilgrimage" },
    { "rating": 9, "title": "No, You Don't" },
    { "rating": 11, "title": "La Mer" },
    { "rating": 10, "title": "The Great Below" },
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
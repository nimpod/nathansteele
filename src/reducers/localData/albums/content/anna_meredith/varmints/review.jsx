import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "Nautilus" },
    { "rating": 10, "title": "Taken" },
    { "rating": 9, "title": "Scrimshaw" },
    { "rating": 8, "title": "Something Helpful" },
    { "rating": 8, "title": "R-Type" },
    { "rating": 10, "title": "Dowager" },
    { "rating": 8, "title": "The Vapours" },
    { "rating": 8, "title": "Honeyed Words" },
    { "rating": 8, "title": "Last Rose" },
    { "rating": 8, "title": "Shill" },
    { "rating": 8, "title": "Blackfriars" },
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
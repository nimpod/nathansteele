import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Son Of Sam" },
    { "rating": 10, "title": "Somebody That I Used To Know" },
    { "rating": 8, "title": "Junk Bond Trader" },
    { "rating": 10, "title": "Everything Reminds Me Of Her" },
    { "rating": 10, "title": "Everything Measn Nothing To Me" },
    { "rating": 7, "title": "L.A." },
    { "rating": 9, "title": "In The Lost And Found" },
    { "rating": 8, "title": "Stupidity Tries" },
    { "rating": 8, "title": "Easy Way Out" },
    { "rating": 8, "title": "Wouldn't Mama Be Proud" },
    { "rating": 8, "title": "Colorbars" },
    { "rating": 10, "title": "Happiness/The Gondola Man" },
    { "rating": 8, "title": "Pretty Mary Kay" },
    { "rating": 8, "title": "Better Be Quiet Now" },
    { "rating": 8, "title": "Can't Make A Sound" },
    { "rating": 10, "title": "Bye" },
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
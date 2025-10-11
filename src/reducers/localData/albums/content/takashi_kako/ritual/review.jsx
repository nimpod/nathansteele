import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "Kankei" },
    { "rating": 10, "title": "Sesshoku" },
    { "rating": 10, "title": "Naika" },
    { "rating": 10, "title": "Gekai" },
    { "rating": 10,  "title": "Touhi" },
    { "rating": 10, "title": "Shinshoku" },
    { "rating": 11, "title": "Yuuutu" },
    { "rating": 10, "title": "Hirou" },
    { "rating": "interlude", "title": "Mousou" },
    { "rating": 9, "title": "Atureki" },
    { "rating": 11, "title": "Kibou" },
    { "rating": 10, "title": "Toro" },
];

const themes = [
    "Melancholic"
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
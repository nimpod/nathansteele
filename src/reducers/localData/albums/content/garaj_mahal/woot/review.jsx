import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "Semos" },
    { "rating": 8, "title": "Hotel" },
    { "rating": 9, "title": "Pundit-Ji" },
    { "rating": "interlude", "title": "Bass Solo" },
    { "rating": 9, "title": "7 Cows Jumping Over The Moon" },
    { "rating": 8, "title": "Corner Peace" },
    { "rating": 10, "title": "Ishmael And Isaac" },
    { "rating": 8, "title": "Uptown Tippitinas" },
    { "rating": 8, "title": "Jamie's Jam" },
];

const themes = [

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
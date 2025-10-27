import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "Boogie" },
    { "rating": 9, "title": "Zipper" },
    { "rating": 9, "title": "Johnny" },
    { "rating": 8, "title": "Liquid" },
    { "rating": "interlude", "title": "Cinema 1" },
    { "rating": 9, "title": "Stupid" },
    { "rating": 8, "title": "Bleach" },
    { "rating": 9, "title": "Alaska" },
    { "rating": 10, "title": "Hottie" },
    { "rating": "interlude", "title": "Cinema 2" },
    { "rating": 9, "title": "Sister/Nation" },
    { "rating": 9, "title": "Rental" },
    { "rating": 9, "title": "Stains" },
    { "rating": "interlude", "title": "Cinema 3" },
    { "rating": 7, "title": "Team" },
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
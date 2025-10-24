import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Hocus Pocus" },
    { "rating": 11, "title": "The Phantom Below" },
    { "rating": 8, "title": "The Invisible King" },
    { "rating": 8, "title": "Beware The Blue Skies" },
    { "rating": 10, "title": "The Dog Song" },
    { "rating": 10, "title": "Captain Awkward" },
    { "rating": 8, "title": "The Undersea" },
    { "rating": 11, "title": "Isn't It Easy" },
];

const themes = [
    "Intense",
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
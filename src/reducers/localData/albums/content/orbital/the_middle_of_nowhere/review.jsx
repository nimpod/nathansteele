import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "Way Out -->" },
    { "rating": 10, "title": "Spare Parts Express" },
    { "rating": 10, "title": "Know Where to Run" },
    { "rating": 10, "title": "I Don't Know You People" },
    { "rating": 9, "title": "Otono" },
    { "rating": 10, "title": "Nothing Left 1" },
    { "rating": 11, "title": "Nothing Left 2" },
    { "rating": 9, "title": "Style" },
];

const themes = [
    "",
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
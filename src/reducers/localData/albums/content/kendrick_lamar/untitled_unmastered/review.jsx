import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "untitled 01" },
    { "rating": 9, "title": "untitled 02" },
    { "rating": 10, "title": "untitled 03" },
    { "rating": 8, "title": "untitled 04" },
    { "rating": 9, "title": "untitled 05" },
    { "rating": 10, "title": "untitled 06" },
    { "rating": 10, "title": "untitled 07" },
    { "rating": 10, "title": "untitled 08" },
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
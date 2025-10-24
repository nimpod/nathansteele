import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "#1" },
    { "rating": 8, "title": "#2" },
    { "rating": 12, "title": "#3" },
    { "rating": 10, "title": "#4" },
    { "rating": 8, "title": "#5" },
    { "rating": 8, "title": "#6" },
    { "rating": 10, "title": "#7" },
    { "rating": 8, "title": "#8" },
    { "rating": 9, "title": "#9" },
    { "rating": 9, "title": "#10" },
    { "rating": 8, "title": "#11" },
    { "rating": 8, "title": "#12" },
    { "rating": 8, "title": "#13" },
    { "rating": 8, "title": "#14" },
    { "rating": 8, "title": "#15" },
    { "rating": 8, "title": "#16" },
    { "rating": 8, "title": "#17" },
    { "rating": 8, "title": "#18" },
    { "rating": 8, "title": "#18" },
    { "rating": 8, "title": "#19" },
    { "rating": 8, "title": "#20" },
    { "rating": 8, "title": "#21" },
    { "rating": 8, "title": "#22" },
    { "rating": 8, "title": "#23" },
    { "rating": 8, "title": "#24" },
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
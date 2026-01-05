import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "寂靜的天空" },
    { "rating": 8, "title": "雪山" },
    { "rating": 9, "title": "Ongmanibamai" },
    { "rating": 8, "title": "青海湖" },
    { "rating": 9, "title": "往日時光" },
    { "rating": 9, "title": "黑暗中的舞者" },
    { "rating": 8, "title": "懷念" },
    { "rating": 8, "title": "金色的鐲子" },
    { "rating": 8, "title": "重生" },
];

const themes = [];

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
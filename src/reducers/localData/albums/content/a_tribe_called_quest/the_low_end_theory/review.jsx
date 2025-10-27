import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Excursions" },
    { "rating": 11, "title": "Buggin' Out" },
    { "rating": 9, "title": "Rap Promoter" },
    { "rating": 9, "title": "Butter" },
    { "rating": 8, "title": "Verses from the abstract" },
    { "rating": 8, "title": "Show Business" },
    { "rating": 9, "title": "Vibes and Stuff" },
    { "rating": 8, "title": "Infamous Date Rape" },
    { "rating": 10, "title": "Check the Rhime" },
    { "rating": 8, "title": "Everything Is Fair" },
    { "rating": 10, "title": "Jazz (we've got)" },
    { "rating": 8, "title": "Skypager" },
    { "rating": 9, "title": "What?" },
    { "rating": 11, "title": "Scenario" },
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
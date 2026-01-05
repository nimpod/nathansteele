import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Robot Stop" },
    { "rating": 8, "title": "Big Fat Wasp" },
    { "rating": 9, "title": "Gamma Knife" },
    { "rating": 10, "title": "People Vultures" },
    { "rating": 8, "title": "Mr Beat" },
    { "rating": 8, "title": "Evil Death Roll" },
    { "rating": 10, "title": "Invisible Face" },
    { "rating": 9, "title": "Wah Wah" },
    { "rating": 8, "title": "Road Train" },
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
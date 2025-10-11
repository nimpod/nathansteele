import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "Every Single Night" },
    { "rating": 10, "title": "Daredevil" },
    { "rating": 11, "title": "Valentine" },
    { "rating": 9, "title": "Jonathan" },
    { "rating": 9,  "title": "Left Alone" },
    { "rating": 10, "title": "Werewolf" },
    { "rating": 11, "title": "Periphery" },
    { "rating": 9, "title": "Regret" },
    { "rating": 10, "title": "Anything We Want" },
    { "rating": 9, "title": "Hot Knife" },
    { "rating": 9, "title": "Largo" },
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
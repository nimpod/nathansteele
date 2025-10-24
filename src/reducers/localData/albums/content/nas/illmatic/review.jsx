import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "The Genesis" },
    { "rating": 9, "title": "N.Y. State of Mind" },
    { "rating": 9, "title": "Life's A Bitch" },
    { "rating": 11, "title": "The World Is Yours" },
    { "rating": 10, "title": "Halftime" },
    { "rating": 10, "title": "Memory Lane" },
    { "rating": 8, "title": "One Love" },
    { "rating": 9, "title": "One Time 4 Your Mind" },
    { "rating": 10, "title": "Represent" },
    { "rating": 9, "title": "It Ain't Hard To Tell" },
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
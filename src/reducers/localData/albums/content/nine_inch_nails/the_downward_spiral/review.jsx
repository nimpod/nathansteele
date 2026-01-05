import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Mr. Self Destruct" },
    { "rating": 7, "title": "Piggy" },
    { "rating": 8, "title": "Heresy" },
    { "rating": 9, "title": "March Of The Pigs" },
    { "rating": 9,  "title": "Closer" },
    { "rating": 8, "title": "Ruiner" },
    { "rating": 9, "title": "The Becoming" },
    { "rating": 8, "title": "I Do Not Want This" },
    { "rating": 9, "title": "Big Man With A Gun" },
    { "rating": 10, "title": "A Warm Place" },
    { "rating": 9, "title": "Eraser" },
    { "rating": 8, "title": "Reptile" },
    { "rating": 8, "title": "The Downward Spiral" },
    { "rating": 10, "title": "Hurt" },
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
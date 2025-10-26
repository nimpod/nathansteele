import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Taming The Dragon" },
    { "rating": 10, "title": "Luxe" },
    { "rating": 10, "title": "You Can't Go Back Now" },
    { "rating": 10, "title": "The Dreamer" },
    { "rating": 8, "title": "Elegy For Amelia E." },
    { "rating": 8, "title": "Sleeping Giant" },
    { "rating": 9, "title": "Hungry Ghost" },
    { "rating": 9, "title": "Gainsbourg" },
    { "rating": 10, "title": "Just Call Me Nige" },
    { "rating": 9, "title": "Sassyassed Sassafrass" },
    { "rating": 9, "title": "Swimming" },
    { "rating": 9, "title": "London Gloaming" },
];

const themes = [
];

const date_of_review = "June 10, 2025";

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
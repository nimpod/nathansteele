import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Exercise 1" },
    { "rating": 10, "title": "Private Road" },
    { "rating": 8, "title": "Cylons In Love" },
    { "rating": 8, "title": "Chocolate Wings" },
    { "rating": 8, "title": "Invisible Pedestrians" },
    { "rating": 9, "title": "I Remember Johnny" },
    { "rating": 11, "title": "Swollen" },
    { "rating": 8, "title": "Well Top Mary" },
    { "rating": 8, "title": "Irritating Noises" },
    { "rating": 8, "title": "Always" },
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
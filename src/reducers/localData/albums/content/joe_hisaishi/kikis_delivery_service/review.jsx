import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "On A Clear Day" },
    { "rating": 9, "title": "Departure" },
    { "rating": 9, "title": "A Town With An Ocean View" },
    { "rating": 9, "title": "Flying Delivery Service" },
    { "rating": 8, "title": "The Baker's Assistant" },
    { "rating": 9, "title": "Starting The Job" },
    { "rating": 10, "title": "Surrogate Jiji" },
    { "rating": 8, "title": "Jeff" },
    { "rating": 9, "title": "A Very Busy Kiki" },
    { "rating": 8, "title": "Late For The Party" },
    { "rating": 9, "title": "Osono's Request" },
    { "rating": 10, "title": "A Propeller Driven Bicycle" },
    { "rating": 8, "title": "I Can't Fly" },
    { "rating": 10, "title": "Heartbroken Kiki" },
    { "rating": 10, "title": "To Ursula's Cabin" },
    { "rating": 8, "title": "Un Unusual Painting" },
    { "rating": 8, "title": "The Adventure of Freedom, Out Of Control" },
    { "rating": 8, "title": "The Old Mans' Push Broom" },
    { "rating": 8, "title": "Rendevous on the Push Broom" },
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
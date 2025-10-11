import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "25 O'Clock" },
    { "rating": 9, "title": "Bike Ride To The Moon" },
    { "rating": 8, "title": "My Love Explodes" },
    { "rating": 10, "title": "What In The World?" },
    { "rating": 8,  "title": "Your Gold Dress" },
    { "rating": 8, "title": "The Mole From The Ministry" },
    { "rating": 11, "title": "Vanishing Girl" },
    { "rating": 10, "title": "Have You Seen Jackie?" },
    { "rating": 9, "title": "Little Lighthouse" },
    { "rating": 11, "title": "You're A Good Man Albert Brown" },
    { "rating": 8, "title": "Collideascope" },
    { "rating": 7, "title": "You're My Drug" },
    { "rating": 8, "title": "Shiny Cage" },
    { "rating": 11, "title": "Braniac's Daughter" },
    { "rating": 8, "title": "The Affliated" },
    { "rating": 10, "title": "Pale And Precious" },
];

const themes = [,
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
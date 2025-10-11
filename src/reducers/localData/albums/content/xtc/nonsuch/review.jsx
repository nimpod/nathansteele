import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Ballad of Peter Pumpkinhead" },
    { "rating": 9, "title": "My Bird Performs" },
    { "rating": 8, "title": "Dear Madam Barnum" },
    { "rating": 8, "title": "Humle Daisy" },
    { "rating": 8, "title": "The Smartest Monkeys" },
    { "rating": 8, "title": "The Disappointed" },
    { "rating": 8, "title": "Holly Up On Poppy" },
    { "rating": 7, "title": "Crocodile" },
    { "rating": 10, "title": "Rook" },
    { "rating": 10, "title": "Omnibus" },
    { "rating": 8, "title": "That Wave" },
    { "rating": 8, "title": "Then She Appeared" },
    { "rating": 9, "title": "War Dance" },
    { "rating": 10, "title": "Wrapped In Grey" },
    { "rating": 9, "title": "The Ugly Underneath" },
    { "rating": 8, "title": "Bungalow" },
    { "rating": 10, "title": "Books Are Burning" },
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
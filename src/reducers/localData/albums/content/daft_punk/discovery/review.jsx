import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "One More Time" },
    { "rating": 8, "title": "Aerodynamic" },
    { "rating": 10, "title": "Digital Love" },
    { "rating": 8, "title": "Harder, Better, Faster, Stronger" },
    { "rating": 8, "title": "Crescendolls" },
    { "rating": 7, "title": "Nightvision" },
    { "rating": 8, "title": "Superhereos" },
    { "rating": 10, "title": "High Life" },
    { "rating": 9, "title": "Something About Us" },
    { "rating": 9, "title": "Voyager" },
    { "rating": 10, "title": "Veridis Quo" },
    { "rating": 11, "title": "Short Circuit" },
    { "rating": 8, "title": "Face To Face" },
    { "rating": 9, "title": "Too Long" },
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
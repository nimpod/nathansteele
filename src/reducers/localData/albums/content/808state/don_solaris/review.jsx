import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Intro" },
    { "rating": 9, "title": "Bond" },
    { "rating": 8, "title": "Bird" },
    { "rating": 8, "title": "Azura" },
    { "rating": 9,  "title": "Black Dartangnon" },
    { "rating": 10, "title": "Joyrider" },
    { "rating": 10, "title": "Lopez" },
    { "rating": 10, "title": "Balboa" },
    { "rating": 9, "title": "Kohoutek" },
    { "rating": 8, "title": "Mooz" },
    { "rating": 9, "title": "Jerusahat" },
    { "rating": 10, "title": "Banacheq" },
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
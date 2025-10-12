import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Shrini's Dream" },
    { "rating": 10, "title": "Bending The Rules" },
    { "rating": 10, "title": "Karuna" },
    { "rating": 9, "title": "Mohanam" },
    { "rating": 8, "title": "Giriaj Sudha" },
    { "rating": 9, "title": "Las Palmas" },
    { "rating": 10, "title": "Changay Naino" },
    { "rating": 9, "title": "Sono Mama" },
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
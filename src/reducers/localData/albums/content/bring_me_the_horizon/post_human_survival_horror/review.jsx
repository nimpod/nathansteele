import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Dear Diary" },
    { "rating": 10, "title": "Parasite Eve" },
    { "rating": 10, "title": "Teardrops" },
    { "rating": 9, "title": "Obey" },
    { "rating": 9,  "title": "Itch For The Cure" },
    { "rating": 10, "title": "Kingslayer" },
    { "rating": 8, "title": "1x1" },
    { "rating": 9, "title": "Ludens" },
    { "rating": 10, "title": "One Day The Only Butterflies Left Will Be In Your Chest" },
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
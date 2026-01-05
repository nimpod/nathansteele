import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 7, "title": "Legendary Iron Hood" },
    { "rating": 11, "title": "(How Could Anybody) Feel At Home" },
    { "rating": 8, "title": "Hymnal" },
    { "rating": 7, "title": "No Selling" },
    { "rating": 7,  "title": "Happy Wasteland Day" },
    { "rating": 7, "title": "Daydreaming in the projects" },
    { "rating": 8, "title": "Brick Body Complex" },
    { "rating": 8, "title": "Tldr (Smithing)" },
    { "rating": 7, "title": "Breezeway Ritual" },
    { "rating": 7, "title": "Wedding Ghosts" },
    { "rating": 9, "title": "95 Radios" },
    { "rating": 7, "title": "My Auntie's Building" },
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
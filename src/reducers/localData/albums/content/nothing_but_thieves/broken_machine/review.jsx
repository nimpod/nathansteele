import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "I Was Just A Kid" },
    { "rating": 9, "title": "Amsterdam" },
    { "rating": 9, "title": "Sorry" },
    { "rating": 10, "title": "Broken Machine" },
    { "rating": 9, "title": "Live Like Animals" },
    { "rating": 8, "title": "Soda" },
    { "rating": 8, "title": "I'm Not Made By Design" },
    { "rating": 10, "title": "Particles" },
    { "rating": 8, "title": "Get Better" },
    { "rating": 7, "title": "Hell Yeah" },
    { "rating": 10, "title": "Afterlife" },
    { "rating": 9, "title": "Reset Me" },
    { "rating": 9, "title": "Number 13" },
    { "rating": 9, "title": "Sorry - acoustic" },
    { "rating": 10, "title": "Particles - piano version" },
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
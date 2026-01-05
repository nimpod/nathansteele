import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Earl" },
    { "rating": 9, "title": "Vices" },
    { "rating": 10, "title": "Rotten Decay" },
    { "rating": 8, "title": "Limit To Your Love" },
    { "rating": 9, "title": "Bastard / Lemonade" },
    { "rating": 9, "title": "CHSTR" },
    { "rating": 8, "title": "UWM" },
    { "rating": 8, "title": "DMZ" },
    { "rating": 8, "title": "CMYK" },
    { "rating": 8, "title": "Flashing Lights" },
    { "rating": 8, "title": "You Made Me Realise" },
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
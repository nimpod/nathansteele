import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Nikes" },
    { "rating": 8, "title": "Ivy" },
    { "rating": 10, "title": "Pink + White" },
    { "rating": "interlude", "title": "Be Yourself" },
    { "rating": 8, "title": "Solo" },
    { "rating": 8, "title": "Skyline To" },
    { "rating": 7, "title": "Self Control" },
    { "rating": 7, "title": "Good Guy" },
    { "rating": 10, "title": "Nights" },
    { "rating": 9, "title": "Solo (reprise)" },
    { "rating": 7, "title": "Pretty Sweet" },
    { "rating": "interlude", "title": "Facebook Story" },
    { "rating": 7, "title": "Close To You" },
    { "rating": 7, "title": "White Ferrari" },
    { "rating": 7, "title": "Seigfried" },
    { "rating": 8, "title": "Godspeed" },
    { "rating": 8, "title": "Futura Free" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "The Sun Won't Set" },
    { "rating": 8, "title": "Flight" },
    { "rating": 8, "title": "Indian Summer" },
    { "rating": 8, "title": "Maya" },
    { "rating": 10, "title": "Lasya" },
    { "rating": 8, "title": "Fathers" },
    { "rating": 8, "title": "Metamorphosis" },
    { "rating": 10, "title": "In Jyoti's Name" },
    { "rating": 8, "title": "Monsoon" },
    { "rating": 9, "title": "Traces of You" },
    { "rating": 8, "title": "River Pulse" },
    { "rating": 10, "title": "Chasing Shadows" },
    { "rating": 10, "title": "Unsaid" },
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
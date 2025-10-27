import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Resiliencia" },
    { "rating": 9, "title": "Busqueda Infinita" },
    { "rating": 10, "title": "Gift" },
    { "rating": 9, "title": "Sueno Lucido" },
    { "rating": 9, "title": "Tres Dobleces" },
    { "rating": 8, "title": "Anecdotas De Un Paraiso" },
    { "rating": 9, "title": "Amanecer Cercano" },
    { "rating": 9, "title": "Swing Trigger" },
    { "rating": 9, "title": "Plenitud/Busqueda 2" },
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
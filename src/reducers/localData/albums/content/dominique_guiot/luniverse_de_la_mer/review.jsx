import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Wind Surf Ballad" },
    { "rating": 9, "title": "La Danse Des Meduses" },
    { "rating": 8, "title": "Une Ballade Pour Une Goelette" },
    { "rating": 10, "title": "Les Deux Poissons" },
    { "rating": 8, "title": "Ballet Amoureux Des Dauphins" },
    { "rating": 8, "title": "Les Pingouins S'Amusent" },
    { "rating": 8, "title": "Destination Inconnue" },
    { "rating": 8, "title": "Iceberg En Voyage" },
    { "rating": 8, "title": "L'Univers De La Mer" },
    { "rating": 10, "title": "Alerte En Mer" },
    { "rating": 8, "title": "Les Emigrants De La Mer" },
    { "rating": 8, "title": "A La Decouverte D'Une Amphore" },
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
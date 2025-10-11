import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Sous les draps" },
    { "rating": 10, "title": "Trois petites filles" },
    { "rating": 10, "title": "Waltz" },
    { "rating": 10, "title": "La nature des peurs" },
    { "rating": 10, "title": "Du bout des doigts" },
    { "rating": 11, "title": "Le temps immobile" },
    { "rating": 10, "title": "Cercles" },
    { "rating": 9, "title": "Celui qui n'existe pas" },
    { "rating": 10, "title": "Au fond des bois" },
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
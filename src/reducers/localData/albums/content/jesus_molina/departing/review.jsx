import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "What Is This Thing Called Love" },
    { "rating": 9, "title": "Cumbialada" },
    { "rating": 11, "title": "Departing" },
    { "rating": 9, "title": "Spain" },
    { "rating": 10, "title": "Night In Tunisia" },
    { "rating": 10, "title": "Choro Meu" },
    { "rating": 11, "title": "Dinner Waltz" },
    { "rating": 10, "title": "Guadalquivir Tiburon" },
    { "rating": 9, "title": "Du, Du Liegst Mir Im Herzen" },
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
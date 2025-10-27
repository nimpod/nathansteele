import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "A Journey (A Dream of Flight)" },
    { "rating": 8, "title": "A Shooting Star" },
    { "rating": 8, "title": "Caproni (An Aeronautical Designer's Dream)" },
    { "rating": 10, "title": "A Journey (A Decision)" },
    { "rating": 11, "title": "Nahoko (The Encounter)" },
    { "rating": 8, "title": "The Refuge" },
    { "rating": 8, "title": "The Lifesaver" },
    { "rating": 8, "title": "Caproni (A Phantom Giant Aircraft)" },
    { "rating": 9, "title": "A Heart Aflutter" },
    { "rating": 10, "title": "A Journey (Jiro's Sister)" },
    { "rating": 9, "title": "A Journey (First Day At Work)" },
    { "rating": 8, "title": "The Falcon Project" },
    { "rating": 8, "title": "The Falcon" },
    { "rating": 8, "title": "Junkers" },
    { "rating": 9, "title": "A Journey (Italian Winds)" },
    { "rating": 8, "title": "A Journey (Caproni Retires)" },
    { "rating": 9, "title": "A Journey (An Encounter at Karuizawa)" },
    { "rating": 10, "title": "Nahoko (Her Destiny)" },
    { "rating": 8, "title": "Nahoko (A Rainbow)" },
    { "rating": 8, "title": "Castorp (The Magic Mountain)" },
    { "rating": 9, "title": "The Wind" },
    { "rating": 9, "title": "Paper Airplane" },
    { "rating": 9, "title": "Nahoko (The Proposal)" },
    { "rating": 8, "title": "Prototype 8" },
    { "rating": 8, "title": "Castorp (A Seperation)" },
    { "rating": 8, "title": "Nahoko (I Miss You)" },
    { "rating": 8, "title": "Nahoko (An Unexpected Meeting)" },
    { "rating": 10, "title": "Nahoko (The Wedding)" },
    { "rating": 8, "title": "Nahoko (Together)" },
    { "rating": 8, "title": "A Journey (A Parting)" },
    { "rating": 9, "title": "A Journey (A Kingdom of Dreams)" },
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
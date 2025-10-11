import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "As The Sun Kissed The Horizon" },
    { "rating": 9, "title": "Poa Alpine" },
    { "rating": 8, "title": "Chukhung" },
    { "rating": 8, "title": "The Things I Tell You" },
    { "rating": 10, "title": "Times When I Know You'll Be Sad " },
    { "rating": 9, "title": "Hyperborea" },
    { "rating": 11, "title": "Kobresia" },
    { "rating": 10, "title": "Antennaria" },
    { "rating": 9, "title": "Uva-Ursi" },
    { "rating": 10, "title": "Sphere of No Form" },
    { "rating": 10, "title": "Silene" },
];

const themes = [
    "Melancholic",
    "Peaceful",
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
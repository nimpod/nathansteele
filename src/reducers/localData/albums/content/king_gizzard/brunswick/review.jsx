import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Sketches of Brunswick East I" },
    { "rating": 8, "title": "Countdown" },
    { "rating": 8, "title": "D-Day" },
    { "rating": 9, "title": "Tezeta" },
    { "rating": 8, "title": "Cranes, Planes, Migraines" },
    { "rating": 9, "title": "The Spider and Me" },
    { "rating": 8, "title": "Sketches of Brunswick East II" },
    { "rating": 8, "title": "Dusk to Dawn On Lygon St" },
    { "rating": 8, "title": "The Book" },
    { "rating": 8, "title": "A Journey to (S)Hell" },
    { "rating": 9, "title": "Rolling Stoned" },
    { "rating": 9, "title": "You Can Be Your Silhouette" },
    { "rating": 8, "title": "Sketches of Brunswick East III" },
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
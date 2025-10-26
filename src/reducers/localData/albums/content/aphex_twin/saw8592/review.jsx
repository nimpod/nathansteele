import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Xtal" },
    { "rating": 9, "title": "Tha" },
    { "rating": 9, "title": "Pulsewidth" },
    { "rating": 8, "title": "Ageispolis" },
    { "rating": 8, "title": "I" },
    { "rating": 9, "title": "Green Calx" },
    { "rating": 10, "title": "Heliospan" },
    { "rating": 9, "title": "We Are The Music Makers" },
    { "rating": 9, "title": "Schottkey 7th Path" },
    { "rating": 8, "title": "Ptolemy" },
    { "rating": 9, "title": "Hedphelym" },
    { "rating": 9, "title": "Delphium" },
    { "rating": 9, "title": "Actium" },
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
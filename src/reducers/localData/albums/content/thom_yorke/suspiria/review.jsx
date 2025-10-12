import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "A Storm That Took Everything" },
    { "rating": 9, "title": "The Hooks" },
    { "rating": 10, "title": "Suspirium" },
    { "rating": 9, "title": "Belongings Thrown In a River" },
    { "rating": 8, "title": "Has Ended" },
    { "rating": 9, "title": "Klemperer Walks" },
    { "rating": 11, "title": "Open Again" },
    { "rating": 8, "title": "Sabbath Incantation" },
    { "rating": 7, "title": "The Inevitable Pull" },
    { "rating": 9, "title": "Olga's Destruction - Volk tape" },
    { "rating": 8, "title": "The Conjuring of Anke" },
    { "rating": 8, "title": "A Light Green" },
    { "rating": 11, "title": "Unmade" },
    { "rating": 8, "title": "The Jumps" },
];

const themes = [
    "Melancholic",
    "Eerie",
    "Spooky",
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
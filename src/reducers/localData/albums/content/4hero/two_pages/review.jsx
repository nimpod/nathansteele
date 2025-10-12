import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Loveless" },
    { "rating": 9, "title": "Golden Age Of Life" },
    { "rating": 10, "title": "Planetaria" },
    { "rating": 10, "title": "Third Stream" },
    { "rating": "interlude", "title": "Wormholes" },
    { "rating": 10, "title": "Escape That" },
    { "rating": 9, "title": "Mother Solar, Pt. 1" },
    { "rating": 9, "title": "Spirits In Transit" },
    { "rating": 7, "title": "Greys" },
    { "rating": 8, "title": "The Action" },
    { "rating": 10, "title": "Star Chasers" },
    { "rating": 8, "title": "Wishful Thinking" },
    { "rating": "interlude", "title": "Normal Changing World" },
    { "rating": 8, "title": "Universal Reprise" },
    { "rating": 8, "title": "We Who Are Not As Others" },
    { "rating": 8, "title": "Humans" },
    { "rating": 8, "title": "Pegasus 51" },
    { "rating": 8, "title": "Three Thousand and Five" },
    { "rating": "interlude", "title": "De-Sci-Fer" },
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
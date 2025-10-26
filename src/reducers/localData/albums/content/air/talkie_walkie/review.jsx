import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Venus" },
    { "rating": 10, "title": "Cherry Blossom Girl" },
    { "rating": 8, "title": "Run" },
    { "rating": 9, "title": "Universal Traveller" },
    { "rating": 10,  "title": "Mike Mills" },
    { "rating": 8, "title": "Surfing on a Rocket" },
    { "rating": 9, "title": "Another Day" },
    { "rating": 8, "title": "Alpha Beta Gaga" },
    { "rating": 9, "title": "Biological" },
    { "rating": 9, "title": "Alone In Kyoto" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "System..." },
    { "rating": 9, "title": "...Meltdown" },
    { "rating": 9, "title": "Ssssnakepit" },
    { "rating": 9, "title": "Search Party" },
    { "rating": 9,  "title": "Arguing With Thermometers" },
    { "rating": 8, "title": "Stalemate" },
    { "rating": 10, "title": "Gandhi Mate, Gandhi" },
    { "rating": 9, "title": "Warm Smiles Do Not Make You Welcome Here" },
    { "rating": 9, "title": "Pack Of Thieves" },
    { "rating": 9, "title": "Hello Tyrannosaurus, Meet Tyrannicide" },
    { "rating": 10, "title": "Constellations" },
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
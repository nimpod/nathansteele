import React from 'react';
import TemplateTracklistComponent from '../../../TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Wildlife Analysis" },
    { "rating": 11, "title": "An Eagle In Your Mind" },
    { "rating": 10, "title": "The Color Of The Fire" },
    { "rating": 11, "title": "Telepathic Workshop" },
    { "rating": 10, "title": "Triangles & Rhombuses" },
];

const themes = [
    "Atmospheric",
    "Otherworldly",
    "Mysterious",
    "Vast",
];


export const review = () => (
    <div className='review-content'>

        {/* Main themes about the album I have personally observed */}
        <div className="review-albumThemes">
            <div className='themes list-of-tags'>
                {themes.map(theme => {
                    return <span className='theme-tag' key={theme}>
                        {theme}
                    </span>
                })}
            </div>
        </div>
        
        {/* Objective introduction to the artist, and objective context around this album */}
        <div className="review-artistIntro">
            <p>
                blah blah blah
            </p>
        </div>
            
        {/* Main section of the review, overview of what I like and dislike about the album */}
        <div className="review-main">
            <p>
                blah blah blah
            </p>
        </div>

        {/* My ratings of each track */}
        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>
            
        {/* A brief overview/summary of my personal experience with the album */}
        <div className="review-summary">
            <p>
                blah blah blah
            </p>
        </div>
    </div>
)
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Ready Lets Go" },
    { "rating": 12, "title": "Music Is Math" },
    { "rating": 10, "title": "Beware The Friendly Stranger" },
    { "rating": 10, "title": "Gyroscope" },
    { "rating": 9,  "title": "Dandelion" },
    { "rating": 11, "title": "Sunshine Recorder" },
    { "rating": 9, "title": "In The Annexe" },
    { "rating": 12, "title": "Julie and Candy" },
    { "rating": 9, "title": "The Smallest Weirdest Number" },
    { "rating": 11, "title": "1969" },
    { "rating": 9, "title": "Energy Warning" },
    { "rating": 10, "title": "The Beach At Redpoint" },
    { "rating": 9, "title": "Opening The Mouth" },
    { "rating": 11, "title": "Alpha And Omega" },
    { "rating": 9, "title": "I Saw Drones" },
    { "rating": 11, "title": "The Devil Is In The Details" },
    { "rating": 10, "title": "A Is To B As B Is To A" },
    { "rating": 10, "title": "Over The Horizon Radar" },
    { "rating": 10, "title": "Dawn Chorus" },
    { "rating": 9, "title": "Diving Station" },
    { "rating": 10, "title": "You Could Feel The Sky" },
    { "rating": 10, "title": "Corsair" },
    { "rating": 10, "title": "Magic Window" },
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
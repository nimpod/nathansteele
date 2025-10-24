import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Excuse Me" },
    { "rating": 9, "title": "Ban All The Music" },
    { "rating": 10, "title": "Wake Up Call" },
    { "rating": 10, "title": "Itch" },
    { "rating": 9,  "title": "If I Get High" },
    { "rating": 10, "title": "Graveyard Whistling" },
    { "rating": 7, "title": "Hostage" },
    { "rating": 10, "title": "Trip Switch" },
    { "rating": 8, "title": "Lover, Please Stay" },
    { "rating": 8, "title": "Drawing Pins" },
    { "rating": 9, "title": "Painkiller" },
    { "rating": 9, "title": "Tempt You (Evocatio)" },
    { "rating": 9, "title": "Honey Whiskey" },
    { "rating": 9, "title": "Hanging" },
    { "rating": 9, "title": "Neon Brother" },
    { "rating": 9, "title": "Six Billion" },
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
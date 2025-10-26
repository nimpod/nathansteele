import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "The Requiem" },
    { "rating": 8, "title": "The Radiance" },
    { "rating": 9, "title": "Burning In The Skies" },
    { "rating": "interlude", "title": "Empty Spaces" },
    { "rating": 10, "title": "When They Come For Me" },
    { "rating": 9, "title": "Robot Boy" },
    { "rating": 9, "title": "Jornada Del Muerto" },
    { "rating": 9, "title": "Waiting For The End" },
    { "rating": 10, "title": "Blackout" },
    { "rating": 10, "title": "Wretches and Kings" },
    { "rating": "interlude", "title": "Wisdom, Justice, and Love" },
    { "rating": 8, "title": "Iridescent" },
    { "rating": 9, "title": "Fallout" },
    { "rating": 8, "title": "The Catalyst" },
    { "rating": 9, "title": "The Messenger" },
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
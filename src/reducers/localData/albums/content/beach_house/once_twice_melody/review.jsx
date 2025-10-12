import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Once Twice Melody" },
    { "rating": 10, "title": "Superstar" },
    { "rating": 10, "title": "Pink Funeral" },
    { "rating": 9, "title": "Through Me" },
    { "rating": 9, "title": "Runaway" },
    { "rating": 10, "title": "ESP" },
    { "rating": 9, "title": "New Romance" },
    { "rating": 9, "title": "Over and Over" },
    { "rating": 9, "title": "Sunset" },
    { "rating": 9, "title": "Only You Know" },
    { "rating": 8, "title": "Another Go Around" },
    { "rating": 10, "title": "Masquerade" },
    { "rating": 8, "title": "Illusion of Flower" },
    { "rating": "interlude", "title": "Finale" },
    { "rating": "interlude", "title": "The Bells" },
    { "rating": "interlude", "title": "Hurts to Love" },
    { "rating": "interlude", "title": "Many Nights" },
    { "rating": "interlude", "title": "Modern Love Stories" },
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
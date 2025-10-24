import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "Burn The Witch" },
    { "rating": 10, "title": "Daydreaming" },
    { "rating": 10, "title": "Decks Dark" },
    { "rating": 9, "title": "Desert Island Disk" },
    { "rating": 9, "title": "Ful Stop" },
    { "rating": 8, "title": "Glass Eyes" },
    { "rating": 8, "title": "Identikit" },
    { "rating": 8, "title": "The Numbers" },
    { "rating": 10, "title": "Present Tense" },
    { "rating": 8, "title": "Tinker Tailor Soldier..." },
    { "rating": 10, "title": "True Love Waits" },
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
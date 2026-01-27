import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "In-N-Out" },
    { "rating": 9, "title": "Introverted Soul" },
    { "rating": 10, "title": "Bombay Song" },
    { "rating": 9, "title": "Meat Eater" },
    { "rating": 9, "title": "Coloured Goddess" },
    { "rating": 10, "title": "First Food Then You" },
    { "rating": 9, "title": "Kick'B'ass" },
    { "rating": 9, "title": "Emotion" },
    { "rating": 9, "title": "Happy To Slap It" },
];

const themes = [
    "Intense",
    "Energetic"
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
                Incredible bass guitar playing from Mohini Dey.
                This is her debut album - absolutely mindblowing.
                Every track is immense, not a single weak moment.
                Not often is bass guitar the lead instrument on a fusion album, so it's great to hear a twist on the formula.
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
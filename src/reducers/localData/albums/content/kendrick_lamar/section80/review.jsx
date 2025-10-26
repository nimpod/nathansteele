import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Fuck Your Ethnicity" },
    { "rating": 9, "title": "Hol'Up" },
    { "rating": 9, "title": "A.D.H.D" },
    { "rating": 8, "title": "No Make-Up" },
    { "rating": 9, "title": "Tammy's Song" },
    { "rating": 9, "title": "Chapter Six" },
    { "rating": 9, "title": "Ronald Reagan Era" },
    { "rating": 9, "title": "Poe Mans Dreams" },
    { "rating": 8, "title": "Chapter Ten" },
    { "rating": 9, "title": "Keisha's Song" },
    { "rating": 10, "title": "Rigamortus" },
    { "rating": 8, "title": "Kush & Corinthians" },
    { "rating": 9, "title": "Blow My High" },
    { "rating": 9, "title": "Ab-Souls Outro" },
    { "rating": 10, "title": "HiiiPower" },
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
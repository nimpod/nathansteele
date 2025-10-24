import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Valkyrie" },
    { "rating": 11, "title": "Gravitas" },
    { "rating": 9, "title": "The Closer I Get To You" },
    { "rating": 10, "title": "Nyctophobia" },
    { "rating": 11, "title": "Russian Dolls" }, 
    { "rating": 8, "title": "Heaven Help Me Now" },
    { "rating": 9, "title": "I Would Die For You" },
    { "rating": 9, "title": "Joe DiMaggio's Glove" },
    { "rating": 8, "title": "Till We Meet Again" },
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
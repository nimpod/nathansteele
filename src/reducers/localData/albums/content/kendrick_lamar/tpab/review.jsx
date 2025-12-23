import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Wesley's Theory" },
    { "rating": 8, "title": "For Free?" },
    { "rating": 10, "title": "King Kunta" },
    { "rating": 9, "title": "Institutonalized" },
    { "rating": 9, "title": "These Walls" },
    { "rating": 8, "title": "u" },
    { "rating": 8, "title": "Alright" },
    { "rating": 8, "title": "For Sale?" },
    { "rating": 8, "title": "Momma" },
    { "rating": 8, "title": "Hood Politics" },
    { "rating": 10, "title": "How Much a Dollar Costs" },
    { "rating": 9, "title": "Complexion (A Zulu Love)" },
    { "rating": 10, "title": "The Blacker The Berry" },
    { "rating": 8, "title": "You Ain't Gotta Lie (Momma Said)" },
    { "rating": 9, "title": "i" },
    { "rating": 8, "title": "Mortal Man" },
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
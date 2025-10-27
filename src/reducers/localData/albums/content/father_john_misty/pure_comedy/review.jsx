import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 12, "title": "Pure Comedy" },
    { "rating": 9, "title": "Total Entertainment Forever" },
    { "rating": 11, "title": "Things It Would Be Helpful To Know Before The Revolution" },
    { "rating": 9, "title": "Ballad of the Dying Man" },
    { "rating": 8, "title": "Birdie" },
    { "rating": 8, "title": "Leaving LA" },
    { "rating": 8, "title": "A Bigger Paper Bag" },
    { "rating": 9, "title": "When The God Of Love Returns There'll Be Hell To Pay" },
    { "rating": 8, "title": "Smoochie" },
    { "rating": 8, "title": "Two Wildly Different Perspectives" },
    { "rating": 8, "title": "The Memo" },
    { "rating": 8, "title": "So I'm Growing Old on Magic Mountain" },
    { "rating": 8, "title": "In Twenty Years Or So" },
];

const themes = [
];

const date_of_review = "June 10, 2025";

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
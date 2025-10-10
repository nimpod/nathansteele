import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": "intro", "title": "Solider Side - intro" },
    { "rating": 9, "title": "B.Y.O.B" },
    { "rating": 8, "title": "Revenge" },
    { "rating": 9, "title": "Cigaro" },
    { "rating": 9, "title": "Radio/Video" },
    { "rating": 10, "title": "This Cocaine Makes Me Feel Like I'm On This Song" },
    { "rating": 10, "title": "Violent Pornogaraphy" },
    { "rating": 10, "title": "Question!" },
    { "rating": 9, "title": "Sad Statue" },
    { "rating": 9, "title": "Old School Hollywood" },
    { "rating": 9, "title": "Lost In Hollywood" },
];

const themes = [
    "Energetic",
    "Aggressive",
    "Accessible",
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
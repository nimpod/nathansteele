import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Viande" },
    { "rating": 8, "title": "ieUD" },
    { "rating": 11, "title": "Houmous" },
    { "rating": 9, "title": "Opus Brain" },
    { "rating": 9, "title": "Probleme d'emotion" },
    { "rating": 9, "title": "Spaghetti Forever" },
    { "rating": 11, "title": "Cheval" },
    { "rating": 9, "title": "Apopathodiaphulatophobie" },
    { "rating": 10, "title": "Va te foutre" },
    { "rating": 10, "title": "Robert" },
    { "rating": 9, "title": "Au Revoir" },
];

const themes = [
    "Intense",
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
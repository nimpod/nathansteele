import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Intro" },
    { "rating": 10, "title": "Interlude I (The Ripe & Ruin)" },
    { "rating": 10, "title": "Tessellate" },
    { "rating": 11, "title": "Breezblocks" },
    { "rating": 10,  "title": "Interlude II (Guitar)" },
    { "rating": 10, "title": "Something Good" },
    { "rating": 10, "title": "Dissolve Me" },
    { "rating": 11, "title": "Matilda" },
    { "rating": 10, "title": "Ms" },
    { "rating": 11, "title": "Fitzpleasure" },
    { "rating": 10, "title": "Interlude III (Piano)" },
    { "rating": 10, "title": "Bloodflood" },
    { "rating": 10, "title": "Taro" },
    { "rating": 10, "title": "Hand-Made" },
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
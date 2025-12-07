import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": "interlude", "title": "Time Becomes" },
    { "rating": 10, "title": "PLANET OF THE SHAPES" },
    { "rating": 10, "title": "LUSH 3.1" },
    { "rating": 9, "title": "LUSH 3-2" },
    { "rating": 9, "title": "IMPACT (The Earth Is Burning)" },
    { "rating": 9, "title": "REMIND" },
    { "rating": 10, "title": "WALK NOW..." },
    { "rating": 9, "title": "MONDAY" },
    { "rating": 11, "title": "HALCYON + ON + ON" },
    { "rating": "interlude", "title": "Input Out" },
];

const themes = [
    "",
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
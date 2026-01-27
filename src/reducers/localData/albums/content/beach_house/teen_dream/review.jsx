import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Zebra" },
    { "rating": 9, "title": "Silver Soul" },
    { "rating": 9, "title": "Norway" },
    { "rating": 8, "title": "Walk in the Park" },
    { "rating": 10, "title": "Used to Be" },
    { "rating": 9, "title": "Lover Of Mine" },
    { "rating": 8, "title": "Better Times" },
    { "rating": 8, "title": "10 Mile Stereo" },
    { "rating": 8, "title": "Real Love" },
    { "rating": 8, "title": "Take Care" },
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
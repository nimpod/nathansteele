import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Intro" },
    { "rating": 10, "title": "Arrival in Nara" },
    { "rating": 10, "title": "Nara" },
    { "rating": 9, "title": "Every Other Freckle" },
    { "rating": 9,  "title": "Left Hand Free" },
    { "rating": 9, "title": "Garden of England" },
    { "rating": 9, "title": "Choice Kingdom" },
    { "rating": 10, "title": "Hunger of the Pine" },
    { "rating": 10, "title": "Warm Foothills" },
    { "rating": 10, "title": "The Gospel of John Hurt" },
    { "rating": 9, "title": "Pusher" },
    { "rating": 10, "title": "Bloodflood, Pt. 2" },
    { "rating": 9, "title": "Leaving Nara" },
    { "rating": 10, "title": "Lovely Day" },
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
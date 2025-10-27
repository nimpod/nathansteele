import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Time 4 Change" },
    { "rating": 8, "title": "Make a Stand" },
    { "rating": 9, "title": "Stuck on You" },
    { "rating": 9, "title": "Acid Rain" },
    { "rating": 10, "title": "Finger in the Hole" },
    { "rating": 8, "title": "6 Days" },
    { "rating": 8, "title": "Crosby" },
    { "rating": 8, "title": "Second Skin" },
    { "rating": 8, "title": "Silently" },
    { "rating": 10, "title": "Losing You" },
    { "rating": 12, "title": "Saviour" },
    { "rating": 9, "title": "Hidden Hand" },
    { "rating": 8, "title": "Torrential Pain" },
    { "rating": 9, "title": "Al Kinda" },
    { "rating": 8, "title": "Adult" },
    { "rating": 8, "title": "Empty Tank" },
    { "rating": 8, "title": "No Return" },
    { "rating": 8, "title": "Never Ending" },
    { "rating": 8, "title": "Off out up and under" },
    { "rating": 8, "title": "Does the darkness make you feel sad?" },
    { "rating": 8, "title": "Coconut Teaser" },
    { "rating": 8, "title": "I'll Do Anything (You Want Me To)" },
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
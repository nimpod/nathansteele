import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "The Appeal & the Mindsweep I" },
    { "rating": 8, "title": "The One True Colour" },
    { "rating": 11, "title": "Anaesthetist" },
    { "rating": 8, "title": "The Last Garrison" },
    { "rating": 11,  "title": "Never Let Go Of The Microscope" },
    { "rating": 10, "title": "Myopia" },
    { "rating": 9, "title": "Torn Apart" },
    { "rating": "interlude", "title": "Interlude" },
    { "rating": 9, "title": "The Bank of England" },
    { "rating": 10, "title": "There's A Price On Your Head" },
    { "rating": 10, "title": "Dear Future Historians" },
    { "rating": 10, "title": "The Appeal & the Mindsweep II" },
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
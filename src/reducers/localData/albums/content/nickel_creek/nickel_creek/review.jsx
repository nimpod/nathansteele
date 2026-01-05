import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Ode To A Butterfly" },
    { "rating": 9, "title": "The Lighthouse's Tale" },
    { "rating": 8, "title": "Out Of The Woods" },
    { "rating": 9, "title": "In The House Of Tom Bombadil" },
    { "rating": 9,  "title": "Reasons Why" },
    { "rating": 10, "title": "When You Come Back Down" },
    { "rating": 8, "title": "Sweet Afton" },
    { "rating": 9, "title": "Cuckoo's Nest" },
    { "rating": 10, "title": "The Hand Song" },
    { "rating": 8, "title": "Robin And Marian" },
    { "rating": 8, "title": "The Fox" },
    { "rating": 8, "title": "Pastures New" },
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
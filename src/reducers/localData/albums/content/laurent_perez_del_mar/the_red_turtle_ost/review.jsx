import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Love In The Sky" },
    { "rating": 8, "title": "Flying With Turtles" },
    { "rating": 9, "title": "The Girl" },
    { "rating": 8, "title": "The Tsunami" },
    { "rating": 8, "title": "White Hair" },
    { "rating": 9, "title": "She Is Dead" },
    { "rating": 8, "title": "The Baby" },
    { "rating": 8, "title": "Despair" },
    { "rating": 8, "title": "Baby's Fall" },
    { "rating": 11, "title": "L'au Revoir" },
    { "rating": 8, "title": "The First Raft" },
    { "rating": 8, "title": "The Red Turtle" },
    { "rating": 10, "title": "I Will Stay With You" },
    { "rating": 8, "title": "The Fall" },
    { "rating": 9, "title": "The Dream" },
    { "rating": 8, "title": "I've Found Dad" },
    { "rating": 8, "title": "Where Is She?" },
    { "rating": 8, "title": "He Has To Go" },
    { "rating": 8, "title": "Anger" },
    { "rating": 8, "title": "Second Raft" },
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
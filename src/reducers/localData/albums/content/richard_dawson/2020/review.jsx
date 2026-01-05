import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Civil Servant" },
    { "rating": 8, "title": "The Queen's Head" },
    { "rating": 10, "title": "Two Halves" },
    { "rating": 10, "title": "Jogging" },
    { "rating": 8, "title": "Heart Emoji" },
    { "rating": 8, "title": "Black Triangle" },
    { "rating": 8, "title": "Fulfilment Centre" },
    { "rating": 8, "title": "Fresher's Ball" },
    { "rating": "interlude", "title": "No-One" },
    { "rating": 8, "title": "Dead Dog in an Alleyway" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
        </div>

        <div className='review-trackRatings'>
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className='review-summary'>
            <p>

            </p>
        </div>
    </div>
)
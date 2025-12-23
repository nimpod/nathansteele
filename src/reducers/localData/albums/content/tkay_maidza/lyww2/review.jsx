import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "My Flowers" },
    { "rating": 9, "title": "24k" },
    { "rating": 11, "title": "Shook" },
    { "rating": 9, "title": "Awake" },
    { "rating": 8, "title": "Grasshopper" },
    { "rating": 10, "title": "You Sad" },
    { "rating": 10, "title": "PB Jam" },
    { "rating": 8, "title": "Don't Call Again" },
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
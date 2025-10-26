import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Liquid Insects" },
    { "rating": 10, "title": "Swab" },
    { "rating": 10, "title": "Mountain Goat" },
    { "rating": 9, "title": "In Mind" },
    { "rating": 9, "title": "Ephidrena" },
    { "rating": 9, "title": "Auto Pimp" },
    { "rating": 8, "title": "Fat Cat" },
    { "rating": 9, "title": "Pod Room" },
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
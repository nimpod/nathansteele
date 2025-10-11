import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Silver Lining Suite: Isolation" },
    { "rating": 10, "title": "Silver Lining Suite: The Unknown" },
    { "rating": 9, "title": "Silver Lining Suite: Drifters" },
    { "rating": 9, "title": "Silver Lining Suite: Fortitude" },
    { "rating": 9, "title": "Uncertainty" },
    { "rating": 9, "title": "Someday" },
    { "rating": 9, "title": "Jumpstart" },
    { "rating": 11, "title": "11:49 PM" },
    { "rating": 10, "title": "Ribera Del Duero" },
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
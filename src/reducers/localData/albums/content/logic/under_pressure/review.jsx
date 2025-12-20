import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Intro" },
    { "rating": 10, "title": "Soul Food" },
    { "rating": 9, "title": "I'm Gone" },
    { "rating": 9, "title": "Gang Related" },
    { "rating": 10, "title": "Buried Alive" },
    { "rating": 10, "title": "Bounce" },
    { "rating": 9, "title": "Growing Pains III" },
    { "rating": 8, "title": "Never Enough" },
    { "rating": 9, "title": "Metropolis" },
    { "rating": 8, "title": "Nikki" },
    { "rating": 10, "title": "Under Pressure" },
    { "rating": 8, "title": "Til The End" },
    { "rating": 8, "title": "Driving Ms Daisy" },
    { "rating": 8, "title": "Now" },
    { "rating": 8, "title": "Alright" },
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
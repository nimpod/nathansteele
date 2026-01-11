import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "XYX" },
    { "rating": 9, "title": "Yes! Ramen!" },
    { "rating": 10, "title": "Pendulum" },
    { "rating": 9, "title": "OUT THERE: Takin' Off" },
    { "rating": 10, "title": "OUT THERE: Strollin'" },
    { "rating": 8, "title": "OUT THERE: Orion" },
    { "rating": 8, "title": "OUT THERE: The Quest" },
    { "rating": 8, "title": "Pendulum - Solo" },
    { "rating": 10, "title": "Balloon Pop" },
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
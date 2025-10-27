import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Bacteria Know Everything" },
    { "rating": 9, "title": "Hungry Kitchen" },
    { "rating": 9, "title": "What Is Is?" },
    { "rating": 9, "title": "Current Currency Current" },
    { "rating": 9, "title": "Meditations On Bug Motivation" },
    { "rating": 9, "title": "It's Hydro Oh" },
    { "rating": 9, "title": "Me And Dad" },
    { "rating": 9, "title": "Curious" },
    { "rating": 8, "title": "Successful Express" },
    { "rating": 8, "title": "Martha My Dear" },
    { "rating": 10, "title": "Vegetables" },
    { "rating": 9, "title": "Hello Agency" },
    { "rating": 8, "title": "Earthworms" },
    { "rating": 8, "title": "Gravity Storms" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Alive" },
    { "rating": 11, "title": "Wanderer" },
    { "rating": 11, "title": "Dreamer" },
    { "rating": 10, "title": "Seeker" },
    { "rating": 10, "title": "Player" },
    { "rating": 11, "title": "Warrior" },
    { "rating": 9, "title": "Firefly" },
    { "rating": 9, "title": "Spirit" },
    { "rating": 9, "title": "Life Goes On" },
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
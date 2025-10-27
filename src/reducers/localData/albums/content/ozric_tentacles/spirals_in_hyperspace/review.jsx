import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "Chewier" },
    { "rating": 10, "title": "Spirals In Hyperspace" },
    { "rating": 8, "title": "Slinky" },
    { "rating": 8, "title": "Toka Tola" },
    { "rating": 10, "title": "Plasmoid" },
    { "rating": 8, "title": "Oakum" },
    { "rating": 8, "title": "Akasha" },
    { "rating": 10, "title": "Psychic Chasm" },
    { "rating": 10, "title": "Zoemetra" },
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
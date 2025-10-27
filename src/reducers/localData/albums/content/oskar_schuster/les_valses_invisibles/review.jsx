import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Les Sablons" },
    { "rating": 10, "title": "Comatose" },
    { "rating": 9, "title": "Une valse invisible I" },
    { "rating": 9, "title": "Une valse invisible II" },
    { "rating": 9, "title": "Les matins" },
    { "rating": 9, "title": "Les soirs" },
    { "rating": 9, "title": "Paris est" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Mir 0-1" },
    { "rating": 9, "title": "Initiation" },
    { "rating": 9, "title": "Gravity" },
    { "rating": 9, "title": "Out There" },
    { "rating": 8, "title": "Claustrophobia" },
    { "rating": 8, "title": "Remote Control" },
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
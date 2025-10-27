import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "The Grip Tightens" },
    { "rating": 10, "title": "Spurn the Outstretched Hand" },
    { "rating": 9, "title": "Maniacally Unleased" },
    { "rating": 9, "title": "Teratogenesis" },
    { "rating": 9, "title": "Bound By Desire" },
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
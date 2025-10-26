import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 12, "title": "A Lovely Place To Be" },
    { "rating": 8, "title": "So Flows The Current" },
    { "rating": 8, "title": "The Cold Sea's Embrace" },
    { "rating": 10, "title": "Panning The Sands" },
    { "rating": 10, "title": "Beyond This Moment" },
    { "rating": 9, "title": "Along The Waterfront" },
    { "rating": 8, "title": "Northwest Passage" },
    { "rating": 9, "title": "Like So Much Lost Time" },
    { "rating": 9, "title": "Traveler's Rest" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Circle" },
    { "rating": 9, "title": "Second Sense" },
    { "rating": 8, "title": "Contact Note" },
    { "rating": 10, "title": "Searchlight" },
    { "rating": 8, "title": "Symmetry" },
    { "rating": 9, "title": "100" },
    { "rating": 11, "title": "Glasstop" },
    { "rating": 8, "title": "Sleepwalker" },
    { "rating": 10, "title": "Reprise" },
    { "rating": 8, "title": "Nightjar" },
    { "rating": 8, "title": "Black And Red" },
    { "rating": 8, "title": "Luna Moth" },
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
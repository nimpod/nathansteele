import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Move" },
    { "rating": 9, "title": "Brand New Day" },
    { "rating": 9, "title": "Endeavor" },
    { "rating": 9, "title": "Rainmaker" },
    { "rating": 11, "title": "Suite Escapism: Reality" },
    { "rating": 11, "title": "Suite Escapism: Fantasy" },
    { "rating": 10, "title": "Suite Escapism: In Between" },
    { "rating": 9, "title": "Margarita!" },
    { "rating": 10, "title": "11:49 PM" },
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
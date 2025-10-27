import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "Angel" },
    { "rating": 8, "title": "Risingson" },
    { "rating": 11, "title": "Teardrop" },
    { "rating": 8, "title": "Inertia Creeps" },
    { "rating": 9, "title": "Exchange" },
    { "rating": 9, "title": "Dissolved Girl" },
    { "rating": 10, "title": "Man Next Door" },
    { "rating": 10, "title": "Black Milk" },
    { "rating": 9, "title": "Mezzanine" },
    { "rating": 8, "title": "Group Four" },
    { "rating": 8, "title": "(exchange)" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "Introduction" },
    { "rating": 8, "title": "Hazey Jane II" },
    { "rating": 10, "title": "At The Chime Of The City Clock" },
    { "rating": 10, "title": "One Of These Things First" },
    { "rating": 8, "title": "Hazey Jane I" },
    { "rating": 9, "title": "Bryter Layter" },
    { "rating": 8, "title": "Fly" },
    { "rating": 8, "title": "Poor Boy" },
    { "rating": 8, "title": "Northern Sky" },
    { "rating": 8, "title": "Sunday" },
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
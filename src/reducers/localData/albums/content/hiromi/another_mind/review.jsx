import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "XYZ" },
    { "rating": 10, "title": "Double Personality" },
    { "rating": 9, "title": "Summer Rain" },
    { "rating": 11, "title": "Joy" },
    { "rating": 9, "title": "010101 (Binary System)" },
    { "rating": 9, "title": "Truth And Lies" },
    { "rating": 8, "title": "Dancando No Paraiso" },
    { "rating": 8, "title": "Another Mind" },
    { "rating": 9, "title": "The Tom and Jerry Show" },
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
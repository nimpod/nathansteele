import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Ceramic Skies" },
    { "rating": 8, "title": "Know Me" },
    { "rating": 11, "title": "Hang Tight" },
    { "rating": 9, "title": "A Passage" },
    { "rating": 8, "title": "Looper" },
    { "rating": 8, "title": "Ace Ransom" },
    { "rating": 8, "title": "Revealing Light" },
    { "rating": 8, "title": "Give Your Best" },
    { "rating": 8, "title": "Everything" },
    { "rating": 8, "title": "Voracity in the Warehouse" },
    { "rating": 8, "title": "Think Lavender" },
    { "rating": 9, "title": "Tethered to Us" },
    { "rating": 9, "title": "Setting Sun" },
    { "rating": 10, "title": "Underthoughts" },
    { "rating": 9, "title": "Hummingbird" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Showdown" },
    { "rating": 9, "title": "Different" },
    { "rating": 9, "title": "Propane Nightmares" },
    { "rating": 8, "title": "Visions" },
    { "rating": 8, "title": "Midnight Runner" },
    { "rating": 9, "title": "The Other Side" },
    { "rating": 9, "title": "Mutiny" },
    { "rating": 8, "title": "9,000 Miles" },
    { "rating": 9, "title": "Granite" },
    { "rating": 9, "title": "The Tempest" },
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
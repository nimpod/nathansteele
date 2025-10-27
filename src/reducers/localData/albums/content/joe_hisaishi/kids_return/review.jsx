import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Meet Again" },
    { "rating": 8, "title": "Graduation" },
    { "rating": 10, "title": "Angel Doll" },
    { "rating": 9, "title": "Alone" },
    { "rating": 8, "title": "As A Rival" },
    { "rating": 9, "title": "Promise... For us" },
    { "rating": 10, "title": "Next Round" },
    { "rating": 8, "title": "Destiny" },
    { "rating": 9, "title": "I Don't Care" },
    { "rating": 11, "title": "High Spirits" },
    { "rating": 8, "title": "Defeat" },
    { "rating": 11, "title": "Break Down" },
    { "rating": 9, "title": "No Way Out" },
    { "rating": 9, "title": "The Day After" },
    { "rating": 11, "title": "Kids Return" },
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
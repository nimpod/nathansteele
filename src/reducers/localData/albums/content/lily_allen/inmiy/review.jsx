import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Everybody's At It" },
    { "rating": 10, "title": "The Fear" },
    { "rating": 10, "title": "Not Fair" },
    { "rating": 9, "title": "22" },
    { "rating": 7, "title": "I Could Say" },
    { "rating": 8, "title": "Back to the Start" },
    { "rating": 9, "title": "Never Gonna Happen" },
    { "rating": 8, "title": "Fuck You" },
    { "rating": 9, "title": "Who'd Have Known" },
    { "rating": 9, "title": "Chinese" },
    { "rating": 11, "title": "Him" },
    { "rating": 10, "title": "He Wasn't There" },
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
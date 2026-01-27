import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 11, "title": "The Riddle of the Model" },
    { "rating": 10, "title": "Up" },
    { "rating": 9, "title": "To Find You" },
    { "rating": 11, "title": "A Beautiful Sea" },
    { "rating": 8, "title": "Drive It Like You Stole It" },
    { "rating": 9, "title": "Up - bedrooom mix" },
    { "rating": 6, "title": "Girls" },
    { "rating": 9, "title": "Brown Shoes" },
    { "rating": 9, "title": "Go Now" },
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
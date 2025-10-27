import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Prelude" },
    { "rating": 9, "title": "Slam" },
    { "rating": 8, "title": "Plasticworld" },
    { "rating": 10, "title": "Fasten Your Seatbelt" },
    { "rating": 8, "title": "Through The Loop" },
    { "rating": 9, "title": "Sounds Of Life" },
    { "rating": 9, "title": "Girl In The Fire" },
    { "rating": 11, "title": "Tarantula" },
    { "rating": 9, "title": "Out Here" },
    { "rating": 8, "title": "Hold Your Colour" },
    { "rating": 9, "title": "The Terminal" },
    { "rating": 9, "title": "Streamline" },
    { "rating": 10, "title": "Blood Sugar" },
    { "rating": 9, "title": "Axel Grinder" },
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
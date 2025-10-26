import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "New Colour" },
    { "rating": 8, "title": "The Animal Pattern" },
    { "rating": 10, "title": "As a Child" },
    { "rating": 10, "title": "Lying in the Reeds" },
    { "rating": 8, "title": "Dragon Blue Eyes" },
    { "rating": 11, "title": "Crystal Caverns 1991" },
    { "rating": 7, "title": "Raindance" },
    { "rating": 9, "title": "Dream Girl/Sky Surfer" },
    { "rating": 9, "title": "Earth's Lungs" },
    { "rating": 8, "title": "Cthulu" },
    { "rating": 8, "title": "Stands Tidal Waves" },
    { "rating": 8, "title": "Spirals" },
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
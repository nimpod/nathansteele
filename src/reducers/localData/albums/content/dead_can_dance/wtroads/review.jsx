import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Anywhere Out of the World" },
    { "rating": 10, "title": "Windfall" },
    { "rating": 9, "title": "In The Wake of Adversity" },
    { "rating": 9, "title": "Xavier" },
    { "rating": 8, "title": "Dawn of the Iconoclast" },
    { "rating": 9, "title": "Cantara" },
    { "rating": 8, "title": "Summoning of the Muse" },
    { "rating": 9, "title": "Persephone" },
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
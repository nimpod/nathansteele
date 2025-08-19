import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "Cracking" },
    { "rating": 9, "title": "Nina" },
    { "rating": 9, "title": "Ghostride" },
    { "rating": 7, "title": "Fall Down" },
    { "rating": 7, "title": "M.R." },
    { "rating": 8, "title": "The Letter" },
    { "rating": 9, "title": "Part III" },
    { "rating": 9, "title": "And It Never Ends" },
    { "rating": 7, "title": "Faces" },
    { "rating": 7, "title": "Jinx" },
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
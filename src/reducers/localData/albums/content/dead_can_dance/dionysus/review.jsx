import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Act I: Sea Borne" },
    { "rating": 9, "title": "Act I: Liberator of Minds" },
    { "rating": 10, "title": "Act I: Dance of the Bacchantes" },
    { "rating": 8, "title": "Act II: The Mountain" },
    { "rating": 8, "title": "Act II: The Invocation" },
    { "rating": 8, "title": "Act II: The Forest" },
    { "rating": 8, "title": "Act II: Psychopomp" },
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
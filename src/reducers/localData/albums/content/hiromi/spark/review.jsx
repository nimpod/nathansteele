import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 11, "title": "Spark" },
    { "rating": 9, "title": "In A Trance" },
    { "rating": 9, "title": "Take Me Away" },
    { "rating": 11, "title": "Wonderland" },
    { "rating": 9, "title": "Indulgence" },
    { "rating": 9, "title": "Dilemma" },
    { "rating": 9, "title": "What Will Be, Will Be" },
    { "rating": 10, "title": "Wake Up And Dream" },
    { "rating": 9, "title": "All's Well" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "Time Difference" },
    { "rating": 9, "title": "Time Out" },
    { "rating": 10, "title": "Time Travel" },
    { "rating": 10, "title": "Deep Into The Night" },
    { "rating": 10, "title": "Real Clock vs Body Clock = Jet Lag" },
    { "rating": 10, "title": "Time And Space" },
    { "rating": 9, "title": "Time Control Or Controlled By Time" },
    { "rating": 10, "title": "Time Flies" },
    { "rating": 9, "title": "Times Up" },
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
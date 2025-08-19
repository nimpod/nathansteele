import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "yankee and the brave (ep. 4)" },
    { "rating": 8, "title": "ooh la la" },
    { "rating": 10, "title": "out of sight" },
    { "rating": 8, "title": "holy calamafuck" },
    { "rating": 8, "title": "goonies vs E.T." },
    { "rating": 10, "title": "walking in the snow" },
    { "rating": 6, "title": "JU$T" },
    { "rating": 7, "title": "never look back" },
    { "rating": 9, "title": "the ground below" },
    { "rating": 7, "title": "pulling the pin" },
    { "rating": 9, "title": "a few words for the firing squad" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Foreword" },
    { "rating": 9, "title": "Where This Flower Blooms" },
    { "rating": "interlude", "title": "Sometimes.." },
    { "rating": 9, "title": "See You Again" },
    { "rating": 8, "title": "Who Dat Boy" },
    { "rating": 8, "title": "Pothole" },
    { "rating": 9, "title": "Garden Shed" },
    { "rating": 10, "title": "Boredom" },
    { "rating": 10, "title": "I Ain't Got Time" },
    { "rating": 8, "title": "911 / Mr Lonely" },
    { "rating": 8, "title": "Droppin Seeds" },
    { "rating": 8, "title": "November" },
    { "rating": 9, "title": "Glitter" },
    { "rating": 8, "title": "Enjoy Right Now, Today" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 11, "title": "Westward Bound" },
    { "rating": 10, "title": "Ghost In Every Town" },
    { "rating": 10, "title": "Delta Line" },
    { "rating": 11, "title": "Better With Time" },
    { "rating": 10, "title": "Borrowed Rooms and Old Wood Floors" },
    { "rating": 9, "title": "White Hot Country Mess" },
    { "rating": 11, "title": "Pie Song" },
    { "rating": 9, "title": "The Dress" },
    { "rating": 9, "title": "Shoshone Rose" },
    { "rating": 9, "title": "Run" },
    { "rating": 10, "title": "Overalls" },
    { "rating": 9, "title": "Traveling Mercies" },
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
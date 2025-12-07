import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "Intro" },
    { "rating": 11, "title": "Hymn Bream" },
    { "rating": 10, "title": "Man-Q-Neons" },
    { "rating": 9, "title": "Mops" },
    { "rating": 8, "title": "Liquid Gel" },
    { "rating": 8, "title": "Ying Yang Mang" },
    { "rating": 9, "title": "Hot Synchronomy" },
    { "rating": 8, "title": "Midnight Sun Pig" },
    { "rating": 8, "title": "Vocoder Odour" },
    { "rating": 8, "title": "Spacemang" },
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
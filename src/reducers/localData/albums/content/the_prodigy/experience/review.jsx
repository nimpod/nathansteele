import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Jericho" },
    { "rating": 9, "title": "Music Reach" },
    { "rating": 11, "title": "Your Love" },
    { "rating": 9, "title": "Hyperspeed" },
    { "rating": 8, "title": "Charly" },
    { "rating": 10, "title": "Out Of Space" },
    { "rating": 10, "title": "Everybody in the Place" },
    { "rating": 8, "title": "Weather Experience" },
    { "rating": 8, "title": "Fire - sunrise version" },
    { "rating": 8, "title": "Ruff in the Jungle Bizness" },
    { "rating": 8, "title": "Death Of The Prodigy Dancers" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Abla Eedio" },
    { "rating": 9, "title": "Kortisn" },
    { "rating": 9, "title": "Headspin" },
    { "rating": 10, "title": "Myopia" },
    { "rating": 8, "title": "Lat" },
    { "rating": 9, "title": "Extork" },
    { "rating": 9, "title": "Prague Radio" },
    { "rating": 8, "title": "Fer" },
    { "rating": 8, "title": "Ladyburst" },
    { "rating": 9, "title": "Rakimou" },
    { "rating": 8, "title": "OI" },
    { "rating": 8, "title": "Seph" },
    { "rating": 9, "title": "Lilth" },
    { "rating": 8, "title": "Forever" },
    { "rating": 8, "title": "Getting" },
    { "rating": 8, "title": "Milh" },
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
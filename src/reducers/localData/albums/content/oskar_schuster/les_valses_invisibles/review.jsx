import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Les Sablons" },
    { "rating": 10, "title": "Comatose" },
    { "rating": 9, "title": "Une valse invisible I" },
    { "rating": 9, "title": "Une valse invisible II" },
    { "rating": 9, "title": "Les matins" },
    { "rating": 9, "title": "Les soirs" },
    { "rating": 9, "title": "Paris est" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>

            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Q0yXLRENa5U?si=nkY3-uB3KY-NVZNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
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
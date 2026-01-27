import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "The Grip Tightens" },
    { "rating": 10, "title": "Spurn the Outstretched Hand" },
    { "rating": 9, "title": "Maniacally Unleased" },
    { "rating": 8, "title": "Teratogenesis" },
    { "rating": 8, "title": "Bound By Desire" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>

            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/C_Eg4NgoUNg?si=EL3PKtR-8Yx0YRPq&amp;start=26" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
    
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
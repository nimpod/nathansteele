import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "I Rum Sø" },
    { "rating": 9, "title": "Vinheks" },
    { "rating": 8, "title": "Skibbruden" },
    { "rating": 8, "title": "Gniben" },
    { "rating": 11, "title": "Isola" },
    { "rating": 10, "title": "Løvfald" },
    { "rating": 9, "title": "Jossi" },
    { "rating": 8, "title": "Mangrove" },
    { "rating": 10, "title": "Overdrev" },
    { "rating": 10, "title": "Memento Mori" },
    { "rating": 9, "title": "Lazar" },
    { "rating": 9, "title": "Slumre Sløjfer" },
    { "rating": 8, "title": "New Beginning" },
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
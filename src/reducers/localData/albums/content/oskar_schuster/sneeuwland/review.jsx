import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Fjarlægur" },
    { "rating": 10, "title": "Valse Imaginaire" },
    { "rating": 9, "title": "Valtameri" },
    { "rating": 9, "title": "Sneeuwland" },
    { "rating": 10, "title": "Vleurgat" },
    { "rating": 8, "title": "Marlene" },
    { "rating": 9, "title": "Les Sablons - alternate version" },
    { "rating": 9, "title": "Les Îles Féroé" },
    { "rating": 9, "title": "Dinan" },
    { "rating": 8, "title": "Wunder" },
    { "rating": 10, "title": "Lumehelves" },
    { "rating": 8, "title": "Koma Aftur" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Feminina" },
    { "rating": 9, "title": "Moreno" },
    { "rating": 8, "title": "Coracao Sonhador" },
    { "rating": 10, "title": "Descompassdamente" },
    { "rating": 9, "title": "Misterios" },
    { "rating": 9, "title": "Ciclo Da Vida" },
    { "rating": 10, "title": "Pega Leve" },
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "No Pressure Intro" },
    { "rating": 10, "title": "Hit My Line" },
    { "rating": 9, "title": "GP4" },
    { "rating": 8, "title": "Celebration" },
    { "rating": 10, "title": "Open Mic/Aquarius III" },
    { "rating": 9, "title": "Soul Food II" },
    { "rating": 8, "title": "Perfect" },
    { "rating": 8, "title": "man i is" },
    { "rating": 8, "title": "DadBod" },
    { "rating": 8, "title": "5 Hooks" },
    { "rating": 8, "title": "Dark Place" },
    { "rating": 8, "title": "A2Z" },
    { "rating": 10, "title": "Heard Em Say" },
    { "rating": 8, "title": "Amen" },
    { "rating": 8, "title": "Obediently Yours" },
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
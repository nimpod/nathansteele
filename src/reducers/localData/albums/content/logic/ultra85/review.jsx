import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "Paul Rodriquez" },
    { "rating": 9, "title": "Mission Control" },
    { "rating": 8, "title": "Deja Vu" },
    { "rating": "interlude", "title": "Glorious Ultra Panavision" },
    { "rating": 8, "title": "Fear" },
    { "rating": 9, "title": "Favela" },
    { "rating": 9, "title": "Gardens III" },
    { "rating": 9, "title": "Ghost in the Machine" },
    { "rating": 9, "title": "Innerstellar" },
    { "rating": 8, "title": "In Retrospect" },
    { "rating": 9, "title": "44ever" },
    { "rating": 10, "title": "Love Me" },
    { "rating": "interlude", "title": "Planet Death" },
    { "rating": 9, "title": "Teleport" },
    { "rating": "interlude", "title": "Chess" },
    { "rating": 7, "title": "Antitode" },
    { "rating": 8, "title": "Once Upon A Time In Hollywood" },
    { "rating": 8, "title": "Peace Love & Positivity" },
    { "rating": 8, "title": "City In The Stars" },
    { "rating": 8, "title": "Thank You For Believing In Me" },
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
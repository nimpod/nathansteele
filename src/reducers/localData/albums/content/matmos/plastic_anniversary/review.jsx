import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Breaking Bread" },
    { "rating": 10, "title": "The Crying Pill" },
    { "rating": 9, "title": "Interior With Billiard Balls" },
    { "rating": "interlude", "title": "Extending The Plastisphere To GJ237b" },
    { "rating": 8, "title": "Silicone Gel Implant" },
    { "rating": 9, "title": "Plastic Anniversary" },
    { "rating": 9, "title": "Thermoplastic Riot Shield" },
    { "rating": 8, "title": "Fanfare For Polyethylene Waste Containers" },
    { "rating": 8, "title": "The Singing Tube" },
    { "rating": 8, "title": "Collapse Of The Fourth Kingdom" },
    { "rating": 8, "title": "Plastisphere" },
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
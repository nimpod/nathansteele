import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "It's Good To Be Here" },
    { "rating": 9, "title": "Pacifics" },
    { "rating": 8, "title": "Where I'm From" },
    { "rating": 7, "title": "What Cool Breezes Do" },
    { "rating": 10, "title": "Time & Space (A New Refutation Of)" },
    { "rating": 9, "title": "Rebirth of Slick (Cool Like Dat)" },
    { "rating": 8, "title": "Last Of The Spiddyocks" },
    { "rating": 7, "title": "Jimmi Diggin Cats" },
    { "rating": 8, "title": "La Femme Fetal" },
    { "rating": 7, "title": "Escapism (Gettin Free)" },
    { "rating": 7, "title": "Appointment At The Fat Clinic" },
    { "rating": 7, "title": "Nickel Bags" },
    { "rating": 7, "title": "Swoon Units" },
    { "rating": 7, "title": "Examination Of What" },
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
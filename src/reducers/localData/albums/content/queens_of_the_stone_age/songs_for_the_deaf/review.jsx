import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "You Think I Ain't Worth A Dollar..." },
    { "rating": 9, "title": "No One Knows" },
    { "rating": 9, "title": "First It Giveth" },
    { "rating": 10, "title": "Song For The Dead" },
    { "rating": 9, "title": "The Sky Is Fallin'" },
    { "rating": 8, "title": "Six Shooter" },
    { "rating": 8, "title": "Hanging Tree" },
    { "rating": 10, "title": "Go With The Flow" },
    { "rating": 9, "title": "Gonna Leave You" },
    { "rating": 8, "title": "Do It Again" },
    { "rating": 8, "title": "God Is In The Radio" },
    { "rating": 8, "title": "Another Love Song" },
    { "rating": 8, "title": "Song For The Deaf" },
    { "rating": 8, "title": "Mosquito Song" },
    { "rating": 8, "title": "The Lost Art of Keeping A Secret" },
    { "rating": 8, "title": "Everybody's Gonna Be Happy" },
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
import React from 'react';
import TemplateTracklistComponent from '../TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "DT" },
    { "rating": 11, "title": "Magic Mirror Mayhem!" },
    { "rating": 10, "title": "1,000,001 MOLA" },
    { "rating": 11, "title": "Meter Workbench" },
    { "rating": 8, "title": "Endless Higabana" },
    { "rating": 10, "title": "Myztic Stage: Frost and Fire" },
    { "rating": 9, "title": "Magmatic Refinery" },
    { "rating": 8, "title": "reg" },
    { "rating": 8, "title": "Inner Core" },
    { "rating": 9, "title": "Become YOU" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                Super intense fusion of breakcore + glitch + jungle + ambient. 
                Combine this album with indoor cycling and your mind (and body) will explode into a million tiny frivolous pieces.
                This album has quickly become one of my favourite breakcore albums of all time. It's endlessley relistenable and so fun to experience.
                For my taste this is almost a perfect combination of my favourite genres.
                Not every song is perfect, the latter half of the album is a significant change in tone. But that doesn't take away from how insane some of these songs are.
            </p>
        </div>

        <div className='review-trackRatings'>
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className='review-summary'>
            <p>
                Super intense fusion of breakcore + glitch + jungle + ambient. 
                Your mind and body will explode into a million tiny frivolous pieces.
                Strong recommend if you like your electronic music at a high intensity.
            </p>
        </div>
    </div>
)
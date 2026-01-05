import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "IGORS THEME" },
    { "rating": 8, "title": "EARFQUAKE" },
    { "rating": 8, "title": "I THINK" },
    { "rating": "interlude", "title": "EXACTLY WHAT YOU RUN FROM..." },
    { "rating": 8, "title": "RUNNING OUT OF TIME" },
    { "rating": 9, "title": "NEW MAGIC WAND" },
    { "rating": 8, "title": "A BOY IS A GUN" },
    { "rating": 8, "title": "PUPPET" },
    { "rating": 8, "title": "WHAT'S GOOD" },
    { "rating": 9, "title": "GONE, GONE / THANK YOU" },
    { "rating": 8, "title": "I DON'T LOVE YOU ANYMORE" },
    { "rating": 8, "title": "ARE WE STILL FRIENDS" },
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
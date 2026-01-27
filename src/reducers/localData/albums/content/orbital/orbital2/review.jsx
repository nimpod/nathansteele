import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": "interlude", "title": "Time Becomes" },
    { "rating": 10, "title": "PLANET OF THE SHAPES" },
    { "rating": 10, "title": "LUSH 3.1" },
    { "rating": 9, "title": "LUSH 3-2" },
    { "rating": 9, "title": "IMPACT (The Earth Is Burning)" },
    { "rating": 9, "title": "REMIND" },
    { "rating": 10, "title": "WALK NOW..." },
    { "rating": 9, "title": "MONDAY" },
    { "rating": 11, "title": "HALCYON + ON + ON" },
    { "rating": "interlude", "title": "Input Out" },
];

const themes = [
];

export const review = () => (
    <div className='review-content'>

        <div className="review-main">
            <p>
                Not a single skippable track in the album. Full of bangers.
                This came out in 1993 and is still absolutely amazing.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jCDzdH1FTO0?si=3FyBHzYzCOM_8L53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p>
                The closing track Halcyon + On + On is a masterpiece of ambient techno.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bV-hSgL1R74?si=1UzeajJqNqJ9HLVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className="review-summary">
            <p>
            </p>
        </div>

        {/*
        <div className="review-footer">
            <p>
                Nathan Steele | {date_of_review}
            </p>
        </div>
        */}
    </div>
)
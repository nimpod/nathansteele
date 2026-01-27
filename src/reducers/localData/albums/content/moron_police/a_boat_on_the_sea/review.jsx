import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Hocus Pocus" },
    { "rating": 11, "title": "The Phantom Below" },
    { "rating": 8, "title": "The Invisible King" },
    { "rating": 8, "title": "Beware The Blue Skies" },
    { "rating": 10, "title": "The Dog Song" },
    { "rating": 10, "title": "Captain Awkward" },
    { "rating": 8, "title": "The Undersea" },
    { "rating": 11, "title": "Isn't It Easy" },
];

export const review = () => (
    <div className='review-content'>

        <div className="review-main">
            <p>

            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JlBr29H65ig?si=iYq5hsV6XzhEsHwf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gnnAw8V2jTE?si=dBPXTQKztXoBurJH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iQZzHqjpwc0?si=hhYwXa5JHiPvIWFn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className="review-summary">
            <p>
                One of my favourite prog rock / symphonic rock albums of all time. Every track is great, high energy and always enjoyable.
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
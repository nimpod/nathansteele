import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Pink Diamond" },
    { "rating": 10, "title": "forever" },
    { "rating": 10, "title": "claws" },
    { "rating": 8, "title": "7 years" },
    { "rating": 8, "title": "detonate" },
    { "rating": 8, "title": "enemy" },
    { "rating": 8, "title": "i finally understand" },
    { "rating": 9, "title": "c2.0" },
    { "rating": 9, "title": "party 4 u" },
    { "rating": 10, "title": "anthems" },
    { "rating": 9, "title": "visions" },
];

const themes = [
];

const date_of_review = "June 10, 2025";

export const review = () => (
    <div className='review-content'>

        <div className="review-main">
            <p>

            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/E6oq5HCzG4c?si=JrSALTjbso0y7KUX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TbJE-KVZvTA?si=MlBldRjK0sXRilq2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Will I Know" },
    { "rating": 10, "title": "Calvisius" },
    { "rating": 10, "title": "Lost Song" },
    { "rating": 9, "title": "Carrying" },
    { "rating": 11, "title": "Gardens" },
    { "rating": 10, "title": "On Possession" },
    { "rating": 7, "title": "Horses" },
];

const themes = [
    "Melancholic",
    "Soothing",
    "Relaxing",
];

const date_of_review = "June 10, 2025";

export const review = () => (
    <div className='review-content'>

        <div className="review-albumThemes">
            <div className='themes list-of-tags'>
                {themes.map(theme => {
                    return <span className='theme-tag' key={theme}>
                        {theme}
                    </span>
                })}
            </div>
        </div>

        <div className="review-main">
            <p>
                A very soothing and melancholic album that has brought me a lot of comfort and reflection in recent years.
            </p>

            <p>
                Lead vocalist Charlotte Oleena, her voice is very majestic.
                The whole album is like flying through a vast landscape of autumnal trees, a forest that goes on forever.
            </p>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Njo_SX5fKGk?si=GeeIKmm0mygUZdJR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p>
                Only track here I'm not a big fan of is the final song "Horses", 
                which never captivated me in the same way every other song did.
                It's also the longest song on the album, so not the best conclusion to a fantastic album.
            </p>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className="review-summary">
            <p>
                Melancholic heaven, ethereal soundscapes, a relaxing atmosphere to immerse yourself in.
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
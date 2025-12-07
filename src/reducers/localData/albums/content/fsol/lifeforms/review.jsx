import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Cascade" },
    { "rating": 10, "title": "III Flower" },
    { "rating": 10, "title": "Flak" },
    { "rating": 10, "title": "Bird Wings" },
    { "rating": 9, "title": "Dead Skin Cells" },
    { "rating": 10, "title": "Lifeforms" },
    { "rating": 9, "title": "Eggshell" },
    { "rating": 9, "title": "Among Myselves" },
    { "rating": 8, "title": "Domain" },
    { "rating": 10, "title": "Spineless Jelly" },
    { "rating": 9, "title": "Interstat" },
    { "rating": 9, "title": "Vertical Pig" },
    { "rating": 9, "title": "Cerebral" },
    { "rating": 9, "title": "Life Form Ends" },
    { "rating": 9, "title": "Vit" },
    { "rating": 9, "title": "Omnipresence" },
    { "rating": 9, "title": "Room 208" },
    { "rating": 9, "title": "Elaborate Burn" },
    { "rating": 10, "title": "Little Brother" },
];

const themes = [
    "Surreal",
    "Otherworldly",
    "Spooky",
    "Mysterious"
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BVpWQcLZzIY?si=iFNt2IGnZhWeqj5R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <p>

            </p>
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
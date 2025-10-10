import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Concerning the UFO sighting near, Illinois" },
    { "rating": 7, "title": "The Black Hawk War" },
    { "rating": 10, "title": "Come On! Feel the Illinoise!" },
    { "rating": 8, "title": "John Wayne Gacy, Jr." },
    { "rating": 8, "title": "Jacksonville" },
    { "rating": "interlude", "title": "A short reprise for Mary Todd" },
    { "rating": 7, "title": "Decatur, or, Round of Applause" },
    { "rating": "interlude", "title": "One last 'Whoo-hoo! for the Pullman" },
    { "rating": 8, "title": "Chicago" },
    { "rating": 10, "title": "Casimir Pulaski Day" },
    { "rating": 7, "title": "To The Workers of the Rock River Valley" },
    { "rating": 7, "title": "The Man of Metropolis Steals Our Hearts" },
    { "rating": 7, "title": "Prairie Fire That Wanders About" },
    { "rating": "interlude", "title": "A conjunction of drones..." },
    { "rating": 7, "title": "The Predatory Wasp of the Palisades..." },
    { "rating": 7, "title": "They Are Night Zombies!!" },
    { "rating": "interlude", "title": "Let's hear that string part again..." },
    { "rating": "interlude", "title": "In this temple as in the hearts of man..." },
    { "rating": 7, "title": "The Seers Tower" },
    { "rating": 7, "title": "The Tallest Man, the Broadest Shoulders..." },
    { "rating": "interlude", "title": "Riffs and Variations on a single note..." },
    { "rating": 7, "title": "Out of Egypt, into the Great Laugh..." },
];

const themes = [
    "Melancholic",
    "Depressing",
    "Peaceful",
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
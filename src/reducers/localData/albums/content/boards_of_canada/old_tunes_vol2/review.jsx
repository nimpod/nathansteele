import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "We've Started Up" },
    { "rating": 8, "title": "Jimbo Rehearsing" },
    { "rating": 8, "title": "Staircase Whip" },
    { "rating": 8, "title": "Statue of Liberty" },
    { "rating": 8,  "title": "Dave (I'm a real traditionalist)" },
    { "rating": 8, "title": "Peace Tony Devil" },
    { "rating": 9, "title": "To the Wind" },
    { "rating": 8, "title": "Iraq Says" },
    { "rating": 8, "title": "Nine Rubber Wisdom" },
    { "rating": 8, "title": "On A Rolling Sea" },
    { "rating": 8, "title": "Iced Cooly Beatnik" },
    { "rating": 9, "title": "David Came to Mahana'im" },
    { "rating": 8, "title": "Sir Prancelot Brainfire" },
    { "rating": 8, "title": "North Sea Arbeit" },
    { "rating": 8, "title": "Mushyz" },
    { "rating": 9, "title": "Heysanna Hosanna" },
    { "rating": 8, "title": "Fly In The Pool" },
    { "rating": 11, "title": "Mukinabaht" },
    { "rating": 8, "title": "It's A Whole 'Nother Year" },

    { "rating": 8, "title": "Kiteracer 2" },
    { "rating": 8, "title": "BMX Track" },
    { "rating": 9, "title": "Hiscores" },
    { "rating": 8, "title": "Geometric Piss" },
    { "rating": 8, "title": "Zander Two" },
    { "rating": 8, "title": "Magic Teens" },
    { "rating": 8, "title": "Apparatus" },
    { "rating": 8, "title": "Music for Pylons" },
    { "rating": 8, "title": "Alpha Rainbow" },
    { "rating": 9, "title": "Northern Plastics" },
    { "rating": 9, "title": "Buckie High" },
    { "rating": 8, "title": "I Love My New Shears" },
    { "rating": 8, "title": "Solarium" },
    { "rating": 8, "title": "Breaking Nehushtan" },
    { "rating": 8, "title": "Orange Hexagon Sun" },
    { "rating": 8, "title": "Lick" },
    { "rating": 9, "title": "Powerline Misfortune" },    
];

const themes = [
    
];

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
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Main Title" },
    { "rating": 9, "title": "Spiral Mountain" },
    { "rating": 8, "title": "Witch's Lair" },
    { "rating": 10, "title": "Mumbo's Mountain" },
    { "rating": 10, "title": "Treasure Trove Cove" },
    { "rating": 8, "title": "Clanker's Cavern" },
    { "rating": 9, "title": "Bubblegloop Swamp" },
    { "rating": 10, "title": "Freezey Peak" },
    { "rating": 10, "title": "Gobi's Valley" },
    { "rating": 9, "title": "Mad Monster Mansion" },
    { "rating": 9, "title": "Rusty Bucket Bay" },
    { "rating": 9, "title": "Click Clock Wood" },
    { "rating": 9, "title": "Credits Roll" },
    { "rating": 9, "title": "Grunty's Furnace Fun" },
    { "rating": 9, "title": "Final Battle" },
    { "rating": 9, "title": "Overture" },
    { "rating": 9, "title": "Squirrel" },
];

const themes = [
    "Quirky",
    "Weird",
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
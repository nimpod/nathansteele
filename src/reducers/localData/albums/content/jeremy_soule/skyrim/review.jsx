import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Dragonborn" },
    { "rating": 10, "title": "Awake" },
    { "rating": 10, "title": "From Past to Present" },
    { "rating": 8, "title": "Unbroken Road" },
    { "rating": 11, "title": "Ancient Stones" },
    { "rating": 10, "title": "The City Gates" },
    { "rating": 11, "title": "Silent Footsteps" },
    { "rating": 8, "title": "Dragonsreach" },
    { "rating": 8, "title": "Tooth and Claw" },
    { "rating": 8, "title": "Under and Ancient Sun" },
    { "rating": 8, "title": "Death or Sovangrade" },
    { "rating": 8, "title": "Masser" },
    { "rating": 9, "title": "Distant Horizons" },
    { "rating": 9, "title": "Dawn" },
    { "rating": 8, "title": "The Jerall Mountains" },
    { "rating": 9, "title": "Steel on Steel" },
    { "rating": 10, "title": "Secunda" },
    { "rating": 9, "title": "Imperial Throne" },
    { "rating": 9, "title": "Frostfall" },
    { "rating": 8, "title": "Night Without Stars" },
    { "rating": 8, "title": "Into Darkness" },
    { "rating": 8, "title": "Kyne's Peace" },
    { "rating": 8, "title": "Unbound" },
    { "rating": 8, "title": "Far Horizons" },
    { "rating": 8, "title": "A Winter's Tale" },
    { "rating": 9, "title": "The Bannered Mare" },
    { "rating": 8, "title": "The Streets of Whiterun" },
    { "rating": 8, "title": "One They Fear" },
    { "rating": 9, "title": "The White River" },
    { "rating": 8, "title": "Silence Unbroken" },
    { "rating": 8, "title": "Standing Stones" },
    { "rating": 8, "title": "Beneath The Ice" },
    { "rating": 9, "title": "Tundra" },
    { "rating": 8, "title": "Journey's End" },
    { "rating": 8, "title": "Before The Storm" },
    { "rating": 8, "title": "A Chance Meeting" },
    { "rating": 8, "title": "Out of the Cold" },
    { "rating": 10, "title": "Around the Fire" },
    { "rating": 9, "title": "Shadows and Echoes" },
    { "rating": 8, "title": "Caught off Guard" },
    { "rating": 8, "title": "Aurora" },
    { "rating": 8, "title": "Blood and Steel" },
    { "rating": 8, "title": "Towers and Shadows" },
    { "rating": 8, "title": "Seven Thousand Steps" },
    { "rating": 8, "title": "Solitude" },
    { "rating": 8, "title": "Watch the Skies" },
    { "rating": 8, "title": "The Gathering Storm" },
    { "rating": 8, "title": "Sky Above, Voice Within" },
    { "rating": 8, "title": "Death in the Darkness" },
    { "rating": 8, "title": "Shattered Shields" },
    { "rating": 8, "title": "Sovngarde" },
    { "rating": 8, "title": "Wind Guide You" },
    { "rating": 8, "title": "Skyrinm Atmospheres" },
];

const themes = [
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
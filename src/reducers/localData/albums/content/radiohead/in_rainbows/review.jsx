import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "15 Step" },
    { "rating": 7, "title": "Bodysnatchers" },
    { "rating": 10, "title": "Nude" },
    { "rating": 10, "title": "Weird Fishes/Arpeggi" },
    { "rating": 9, "title": "All I Need" },
    { "rating": 8, "title": "Faust Arp" },
    { "rating": 10, "title": "Reckoner" },
    { "rating": 8, "title": "House of Cards" },
    { "rating": 9, "title": "Jigsaw Falling Into Place" },
    { "rating": 7, "title": "Videotape" },
    { "rating": 8, "title": "MK1" },
    { "rating": 8, "title": "Down Is The New Up" },
    { "rating": 8, "title": "Go Slowly" },
    { "rating": 8, "title": "MK2" },
    { "rating": 9, "title": "Last Flowers" },
    { "rating": 7, "title": "Up On The Ladder" },
    { "rating": 8, "title": "Bangers + Mash" },
    { "rating": 7, "title": "4 Minute Warning" },
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
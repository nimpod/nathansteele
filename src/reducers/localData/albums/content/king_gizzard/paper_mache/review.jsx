import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Sense" },
    { "rating": 8, "title": "Bone" },
    { "rating": 9, "title": "Dirt" },
    { "rating": 8, "title": "Paper Mache Dream Balloon" },
    { "rating": 8, "title": "Trapdoor" },
    { "rating": 8, "title": "Cold Cadaver" },
    { "rating": 8, "title": "The Bitter Boogie" },
    { "rating": 9, "title": "N.G.R.I (Bloodstain)" },
    { "rating": 8, "title": "Time = Fate" },
    { "rating": 8, "title": "Time = $$$" },
    { "rating": 8, "title": "Most Of What I Like" },
    { "rating": 8, "title": "Paper Mache" },
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
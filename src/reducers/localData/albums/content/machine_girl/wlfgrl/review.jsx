import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": "interlude", "title": "Mg1" },
    { "rating": 9, "title": "Ionic Funk - 20xx Battle Music" },
    { "rating": 9, "title": "Krystle - URL Cyber Palace Mix" },
    { "rating": 8, "title": "Ginger Claps" },
    { "rating": 8, "title": "Ghost" },
    { "rating": 8, "title": "Frenesi - Machine Girl GabberTrap Mix" },
    { "rating": 8, "title": "Out By 16, Dead On The Scene" },
    { "rating": 11, "title": "Post Rave Maximalist" },
    { "rating": 8, "title": "Phase Alpha" },
    { "rating": 8, "title": "Freewill" },
    { "rating": 11, "title": "Excruciating Deth" },
    { "rating": 9, "title": "Hidden Power" },
    { "rating": 9, "title": "Mg2" },
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
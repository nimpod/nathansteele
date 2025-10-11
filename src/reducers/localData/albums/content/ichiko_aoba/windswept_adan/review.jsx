import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "Prologue" },
    { "rating": 10, "title": "Pilgrimage" },
    { "rating": 10, "title": "Porcelain" },
    { "rating": 10, "title": "Horo" },
    { "rating": 11, "title": "Easter Lily" },
    { "rating": 12, "title": "Parfum d'etoiles" },
    { "rating": 10, "title": "Kirinaki Shima" },
    { "rating": 9, "title": "Sagu Palm's Song" },
    { "rating": 9, "title": "Chinuhaji" },
    { "rating": 10, "title": "Chi no Kaze" },
    { "rating": 10, "title": "Hagupit" },
    { "rating": 10, "title": "Dawn in the Adan" },
    { "rating": 9, "title": "Ohayashi" },
    { "rating": 10, "title": "Adan no Shima no Tanjyosai" },
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
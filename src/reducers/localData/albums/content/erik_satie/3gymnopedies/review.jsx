import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "Gymnopédie No. 1. Lent et douloureux" },
    { "rating": 10, "title": "Gymnopédie No. 2. Lent et triste" },
    { "rating": 12, "title": "Gymnopédies: No.3. Lent et grave" },
    { "rating": 10, "title": "Je te veux" },
    { "rating": 8, "title": "Préludes flasques" },
    { "rating": 9, "title": "Prélude en tapisserie" },
    { "rating": 8, "title": "5 Nocturnes: No. 4 [Quaver = 92] Mysterieux et tendre" },
    { "rating": 8, "title": "Vieux sequins et vieilles cuirasses" },
    { "rating": 8, "title": "Embryons desseches" },
    { "rating": 10, "title": "Gnossienne No. 1" },
    { "rating": 8, "title": "Gnossienne No. 2" },
    { "rating": 10, "title": "Gnossienne No. 3" },
    { "rating": 8, "title": "Gnossienne No. 4" },
    { "rating": 8, "title": "Gnossienne No. 5" },
    { "rating": 8, "title": "Gnossienne No. 6" },
    { "rating": 8, "title": "Sonatine bureaucratique" },
    { "rating": 8, "title": "Le piccadilly" },
];

const themes = [
    "Melancholic",
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
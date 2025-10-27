import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "The Girl From Ipaema" },
    { "rating": 10, "title": "Amor Em Paz (Once I Loved)" },
    { "rating": 10, "title": "Agua De Beber" },
    { "rating": 10, "title": "Vivo Sonhando (Dreamer)" },
    { "rating": 8, "title": "O Morro Nao Tem Vez" }, 
    { "rating": 9, "title": "Insensatez (How Insensitive)" },
    { "rating": 9, "title": "Corcovado" },
    { "rating": 10, "title": "Samba De Uma Nota So" },
    { "rating": 8, "title": "Meditacao" },
    { "rating": 8, "title": "So Dance Samba" },
    { "rating": 8, "title": "Chega De Saudade" },
    { "rating": 9, "title": "Desafinado" },
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
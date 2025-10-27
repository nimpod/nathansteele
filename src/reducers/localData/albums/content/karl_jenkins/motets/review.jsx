import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Gloria: I'll Make Music" },
    { "rating": 11, "title": "Adiemus - Songs of Sanctuary: Cantate Domino" },
    { "rating": 10, "title": "Gloria: Laudamus te" },
    { "rating": 9, "title": "The Armed Man - A Mass For Peace: Benedictus" },
    { "rating": 9, "title": "The Healer - A Cantata For St. Luke's: The Shepherd" },
    { "rating": 9, "title": "Adiemus - Songs of Sanctuary: Ave Maria" },
    { "rating": 9, "title": "Stabat mater: Ave verum corpus" },
    { "rating": 8, "title": "The Armed Man - A Mass For Peace: 10. Agnus Dei" },
    { "rating": 9, "title": "The Peacemakers: Healing Light" },
    { "rating": 9, "title": "Miserere: Songs of Mercy and Redemption: 8. Hymnus: Locus iste" },
    { "rating": 9, "title": "Requiem: Pie Jesu" },
    { "rating": 9, "title": "Exsultate, jubilate" },
    { "rating": 9, "title": "The Armed Man - A Mass For Peace: God Shall Wipe Away All Tears" },
    { "rating": 9, "title": "Stabat mater: And The Mother Did Weep" },
    { "rating": 9, "title": "Stella natalis: Lullay" },
    { "rating": 9, "title": "The Peacemakers: Peace, Peace!" },
    { "rating": 9, "title": "Requiem: In paradisum" },
    { "rating": 9, "title": "The Peacemakers: Dona nobis paceum" },
    { "rating": 9, "title": "The Healer - A Cantata For St Luke: Nunc dimittis" },
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
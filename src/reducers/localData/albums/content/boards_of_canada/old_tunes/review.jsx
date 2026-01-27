import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Spectrum" },
    { "rating": 8, "title": "Light Clear Hair" },
    { "rating": "interlude", "title": "P.C." },
    { "rating": 11, "title": "Trapped" },
    { "rating": 8, "title": "Rodox Video" },
    { "rating": 8, "title": "Happy Cycling" },
    { "rating": 8, "title": "House of Abin'adab" },
    { "rating": 12, "title": "Finity" },
    { "rating": 9, "title": "Forest Moon" },
    { "rating": 8, "title": "Skimming Stones" },
    { "rating": 8, "title": "Carcan" },
    { "rating": "interlude", "title": "Devil" },
    { "rating": 7, "title": "Mansel" },
    { "rating": 9, "title": "She Is P" },
    { "rating": 8, "title": "Davie Addison" },
    { "rating": 8, "title": "Sac" },
    { "rating": "interlude", "title": "Blockbusters" },
    { "rating": 8, "title": "I Will Get It Tattoed" },
    { "rating": 11, "title": "The Way You Show" },

    { "rating": 8, "title": "I Love U" },
    { "rating": 8, "title": "King of Carnival" },
    { "rating": 9, "title": "M9" },
    { "rating": 8, "title": "Original Nlogax" },
    { "rating": 8, "title": "Sequoia" },
    { "rating": 8, "title": "Boqurant" },
    { "rating": 12, "title": "5.9.78" },
    { "rating": 8, "title": "Wendy Miller" },
    { "rating": 8, "title": "Paul Russel's Piece" },
    { "rating": 9, "title": "Up the March Bank" },
    { "rating": 9, "title": "Nova Scotia Robots" },
];

const themes = [
    "Strange", "Unique", "Memorable"
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
                Another weird side project from BoC that's not on Spotfiy.
                It's a unique and strange album experience.
            </p>

            <p>
                [08 - Finity], and [26 - 5.9.78] are standout tracks for me, very classic BoC style and some of their best work ever.
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/GQrQt8XtKAk?si=FNbNeOo8_miUVXQ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3A786lOX8jc?si=lTvuE5qrIS4uUyTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p>
                [04 - Trapped] is a bit of an outlier in their style, more funky and ubpeat, but somehow still fits the quirky style of the album.
            </p>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className="review-summary">
            <p>
                Another strange and quirky side project from BoC.
                A really memorable album experience and some of their best individual tracks (Finity, 5.9.78).
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
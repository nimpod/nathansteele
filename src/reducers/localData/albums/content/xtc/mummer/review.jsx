import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Beating of Hearts" },
    { "rating": 10, "title": "Wonderland" },
    { "rating": 9, "title": "Love On A Farmboys Wages" },
    { "rating": 10, "title": "Great Fire" },
    { "rating": 9, "title": "Deliver Us From The Elements" },
    { "rating": 9, "title": "Human Alchemy" },
    { "rating": 10, "title": "Ladybird" },
    { "rating": 10, "title": "In Loving Memory Of A Name" },
    { "rating": 9, "title": "Me And The Wind" },
    { "rating": 8, "title": "Funk Pop A Roll" },
    { "rating": 11, "title": "Frost Circus" },
    { "rating": 9, "title": "Jump" },
    { "rating": 11, "title": "Toys" },
    { "rating": 9, "title": "Gold" },
    { "rating": 7, "title": "Procession Towards Learning Land" },
    { "rating": 11, "title": "Desert Island" },
];

const themes = [
    "Energetic",
    "Quirky",
    "Melodic",
    "Psychedelic",
    "Strange",
    "Diverse",
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
                My favourite XTC album, and also one of my favourite albums of all time. So many highlights.
                From the lovely ambient moments on <strong>[02] Wonderland</strong>, and <strong>[11] Frost Circus</strong>, to the strange pagan/tribal/ritualistic vibes on <strong>[01] Beating of Hearts</strong>, and <strong>[06] Human Alchemy</strong>, to the catchy <strong>[07] Ladybird</strong>, and <strong>[13] Toys</strong>, or the more acoustic moments on <strong>[03] Love On A Farmboys Wages</strong>, and <strong>[16] Desert Island</strong>.
                There isn't a single bad song on the album. Every song explores a different style. For me, this is XTC at their best.
            </p>
            <p>
                <strong>[13] Toys</strong> is possibly my favourite XTC song of all time:
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nAWT6ThtLZE?si=8ZZ49w-2KAlVW-Q-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </p>
            <p>
                Great Fire is also a great tune, here's a clip of the band performing an acoustic version on some quirky looking 80s tv show:
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XMtw2PhZwek?si=PW1AmCpGEl-sXWHx&amp;start=17" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </p>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className="review-summary">
            <p>
                My favourite XTC album, so many great tunes.
            </p>
        </div>
    </div>
)
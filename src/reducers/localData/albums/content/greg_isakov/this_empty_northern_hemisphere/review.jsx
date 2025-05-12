import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Dandelion Wine" },
    { "rating": 8, "title": "Light Year" },
    { "rating": 8, "title": "That Moon Song" },
    { "rating": 8, "title": "Evelyn" },
    { "rating": 9, "title": "Virgina May" },
    { "rating": 9, "title": "Big Black Car" },
    { "rating": 10, "title": "Master and a Hound" },
    { "rating": 10, "title": "This Empty Northern Hemisphere" },
    { "rating": 8, "title": "Idaho" },
    { "rating": 8, "title": "Words" },
    { "rating": 8, "title": "Fire Escape" },
    { "rating": 8, "title": "If I Go, I'm Going" },
    { "rating": 8, "title": "One of Us Cannot Be Wrongq" },
];

const themes = [
    "Mellow",
    "Lonely",
    "Melancholic",
    "Peaceful",
    "Introspective",
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
        
        <div className="review-artistIntro">
            <p>
                Greg Isakov is an indie folk artist from South Africa. This Empty Northern Hemisphere (TENH) was his 4th album.
            </p>
        </div>
            
        <div className="review-main">
            <p>
                This whole album is just a very peaceful experience. There's a strong sense of melancholia throughout the songs.
                A few of the songs on this album are just okay. But there isn't a "bad" song on the album. The songwriting and quality is very consistent.
                Sometimes it's nice to take a break from complex/experimental/abstract music, and just reconnect to simplicity.
            </p>
            <p>
                My favourite tracks are <strong>01: Dandelion Wine</strong>, <strong>05: Virgina May</strong>, <strong>07: Master and a Hound</strong>, <strong>08: This Empty Northern Hemisphere</strong>.
            </p>
            <p>
                The music video for <strong>05: Virgina May</strong> is very soothing:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3jHCje51xsc?si=OL7xL5Xv7fF3kW5V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>
                There are also some great live performances you can see online:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9I44W7kRJEg?si=6jUOM4c0MoD-9_i5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>
            
        <div className="review-summary">
            <p>
                An album with a very peaceful soul. It's impossible to not feel some kind of emotion when listening to this music.
            </p>
        </div>
    </div>
)
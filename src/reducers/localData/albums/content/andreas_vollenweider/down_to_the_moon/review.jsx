import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Down To The Moon" },
    { "rating": 10, "title": "Moon Dance" },
    { "rating": 10, "title": "Steam Forest" },
    { "rating": 10, "title": "Water Moon" },
    { "rating": 11, "title": "Night Fire Dance" },
    { "rating": 10, "title": "Quiet Observer" },
    { "rating": 9, "title": "Silver Wheel" },
    { "rating": 8, "title": "Drown In Pale Light" },
    { "rating": 8, "title": "The Secret, the Candle and Love" },
    { "rating": "interlude", "title": "Hush-Patience at Bamboo Forest" },
    { "rating": 8, "title": "Three Silver Ladies Dance" },
    { "rating": 8, "title": "La lune et l'enfant" },
];

const themes = [
    "Mystical",
    "Ethereal",
    "Energetic",
    "Peaceful",
    "Aquatic",
    "Atmospheric",
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
                Andreas Vollenweider is a harpist from Switzerland. <strong>Down To The Moon</strong> was his 5th album, released in 1986. He has a vast catalogue, all centering around the 'New Age' genre, with the harp being his primary instrument. I discovered his music just browsing the New Age genre on RYM.
            </p>
            <p>
                The sound design on this album is immaculate. There are so many layers to each song, the harp, the flute, the drums, and so many other instruments you can hear throughout the album.
            </p>
            <p>
                His music is relatively well-known in the New Age genre, but this album crosses into many other genres (jazz; prog pop; ambient). For fans of ambient music, Vollenweider's music must be experienced. This album, and Vollenweider's music in general, deserves so much more attention. He is still releasing new music to this day. In my opinion, this album is his greatest creation.
            </p>
            <p>
                <strong>Moon Dance</strong> is an absolute banger, amazing intro to the album that keeps new listeners captivated. <strong>Steam Forest</strong>, and <strong>Quiet Observer</strong>, are beautiful more ambient-focused. It's hard to pick a favourite song from the album, but <strong>Night Fire Dance</strong> is an absolute tune. Makes me feel like I am exploring a 13th-century mystical alchemy lab trying to find ingredients for a potion. It has a mysterious, energetic, unique vibe. <strong>Silver Wheel</strong> feels like an undiscovered song from the Donkey Kong soundtrack.
            </p>
            <p>
                The first 7 songs on this album flow into each other so perfectly. I feel like the latter half of this album is slightly weaker (track 8 onwards), it feels a bit less layered to my ears. Albeit it is just 4 weaker tracks (in my opinion), which does unfortunately stop this from being a 10/10 album (in my opinion). But the overall vibe of this album is wonderful. So many majestic moments of pure joy.
            </p>
            <p>
                Here is a wonderful live performance of <strong>Night Fire Dance</strong>:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pqWfIHmJIb0?si=QYHOJwnt0QIk6flL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>
            
        <div className="review-summary">
            <p>
                A true hidden gem, one of the greatest New Age albums I have ever heard. Masterful harp playing, beautiful ambient moments, and endlessly re-listenable.
            </p>
        </div>
    </div>
)
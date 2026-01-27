import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 12, "title": "Blue Sun" },
    { "rating": 10, "title": "The Prince and the Sage" },
    { "rating": 8, "title": "C.T. Kangaroo" },
    { "rating": 9, "title": "Mevlana Etude" },
    { "rating": 8, "title": "Wedding of the Streams" },
    { "rating": 9, "title": "Shadow Fountain" },
    { "rating": 10, "title": "Rumours of the Rain" },
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
                Ralph Towner occupies a unique space in jazz music.
                He specialises in the 12-string guitar, and I am a big fan of his work in the <a href="https://rateyourmusic.com/genre/ecm-style-jazz/">ECM jazz label</a>.
            </p>
            <p>
                ECM is an interesting combination of jazz, classical, new age, and ambient music.
                It has a spacious, atmospheric quality, with a focus on mood and texture, over structure.
            </p>
            <p>
                A lot of people associate jazz with fast tempo, complexity, high energy - but I personally love to see this more mellow side of jazz.
            </p>
            <p>
                Ralph Towner has a vast discography. This album 'Blue Sun' is probably my favourite of his. 
                There are so many beautiful tracks on here.
                [01 - Blue Sun] is genuinely one of my favourite tracks of any genre of all time.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lqMtfxDPZQ4?si=L0UFgdK0L6h0a2sd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p>
                [02 - The Prince and the Sage] is another highlight, with a lovely melody and intricate guitar work.
                [04 - Mevlana Etude] is more focussed on the 12-string guitar but there's some great detail here.
                [06 - Shadow Fountain] has a unique energy to it, the synths and guitar play off eachother really well, and then the trumpet kicks in and all the instrumentation comes together.
                [07 - Rumours of the Rain] is the longest track on the album, but it flys by every time I listen to it, ends the album beautifully.
            </p>

            <p>
                Here is a recent live performance (2019) of Ralph Towner playing his 12-string guitar. It's interesting to see his technique live as there is some amount of improvisation.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/swVNSa8AAic?si=JDuGqy1Zx05PlATh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className="review-summary">
            <p>
                I highly recommened this album to fans of ambient music, and jazz music.
                It's my personal favourite ECM album, and one of my favourite jazz albums overall.
                The combination of the 12-string guitar, trumpet, and synths creates a unique and captivating soundscape.
                Not often is jazz so peaceful and relaxing. If that is what you seek in music, listen to this!
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
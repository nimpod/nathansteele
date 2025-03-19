import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Summer's Cauldron" },
    { "rating": 9, "title": "Grass" },
    { "rating": 9, "title": "The Meeting Place" },
    { "rating": 10, "title": "That's Really Super Supergirl" },
    { "rating": 9, "title": "Ballet For A Rainy Day" },
    { "rating": 10, "title": "1000 Umbrellas" },
    { "rating": 10, "title": "Season Cycle" },
    { "rating": 8, "title": "Earn Enough For Us" },
    { "rating": 8, "title": "Big Day" },
    { "rating": 9, "title": "Another Satellite" },
    { "rating": 9, "title": "Mermaid Smiled" },
    { "rating": 9, "title": "The Man Who Sailed Around His Soul" },
    { "rating": 10, "title": "Dying" },
    { "rating": 10, "title": "Sacrificial Bonfire" },
    { "rating": 10, "title": "Dear God" },
];

const themes = [
    "Energetic", "Quirky", "Melodic", "Psychedelic"
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
                XTC, probably my all-time favorite artist. 70s/80s/90s new wave band from Swindon, UK. Their discography is insane, so much quantity and quality.
            </p>
        </div>
            
        <div className="review-main">
            <p>
                XTC classic, so many examples of great songwriting.
            </p>
            <p>
                Tracks 8 and 9 I'm not too fond of. But apart from that, every song on this album is a joy to listen to.
            </p>
            <p>
                One of XTC's most well-known songs is on this album - <strong>Dear God</strong>. It's not XTC's usual style of song, most of their songs are upbeat and energetic, whereas this one is a bit more sombre and dark. The music video is great though:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/p554R-Jq43A?si=WB1tuxTDYwX14Fbt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>
            
        <div className="review-summary">
            <p>
                Strong recommend to anyone that likes music.
            </p>
        </div>
    </div>
)
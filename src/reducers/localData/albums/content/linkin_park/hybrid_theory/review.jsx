import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Papercut" },
    { "rating": 9, "title": "One Step Closer" },
    { "rating": 9, "title": "With You" },
    { "rating": 9, "title": "Points of Authority" },
    { "rating": 9, "title": "Crawling" },
    { "rating": 10, "title": "Runaway" },
    { "rating": 11, "title": "By Myself" },
    { "rating": 10, "title": "In the End" },
    { "rating": 10, "title": "A Place For My Head" },
    { "rating": 11, "title": "Forgotten" },
    { "rating": 9, "title": "Cure for the Itch" },
    { "rating": 9, "title": "Pushing Me Away" },
    { "rating": 8, "title": "My December" },
    { "rating": 9, "title": "High Voltage" },
];

const themes = [
    "Angry",
    "Rebellious",
    "Energetic",
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
                There was once a time when this album was among my top 10 of all time. I still respect the album a lot, but I don't feel quite the same love for it anymore. From track 6 to 10, are some of my favourite examples of the Nu Metal genre, very maximalist.
            </p>
            <p>
                <strong>[07] By Myself</strong> and <strong>[10] Forgotten</strong> are absolute tunes. It's a shame they didn't get official music videos, but this is a great live performance:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ACoZdWKJ_QA?si=kGM8ywaZRsy-y1xs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>
                The music video for <strong>[02] One Step Closer</strong> is pretty wild:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4qlCC1GOwFw?si=YiPGBBtYEcjAFcoF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>
                The music video for <strong>[04] Points of Authority</strong> really captures the energy of the era well:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jZSPAp8kCl4?si=OTJcNFhQls6dHG56" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>
                I actually think the first 5 songs on the album, despite being by far more popular, are some of the less exciting on the album. I'm also not the biggest fan of <strong>[13] My December</strong>.
            </p>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>
            
        <div className="review-summary">
            <p>
                Not quite as high on my list as it once was, but still a classic in the Nu Metal genre. The energy and anger within this album is fantastic.
            </p>
        </div>
    </div>
)
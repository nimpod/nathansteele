import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Ready Lets Go" },
    { "rating": 12, "title": "Music Is Math" },
    { "rating": 10, "title": "Beware The Friendly Stranger" },
    { "rating": 10, "title": "Gyroscope" },
    { "rating": 9,  "title": "Dandelion" },
    { "rating": 11, "title": "Sunshine Recorder" },
    { "rating": 9, "title": "In The Annexe" },
    { "rating": 12, "title": "Julie and Candy" },
    { "rating": 9, "title": "The Smallest Weirdest Number" },
    { "rating": 11, "title": "1969" },
    { "rating": 9, "title": "Energy Warning" },
    { "rating": 10, "title": "The Beach At Redpoint" },
    { "rating": 9, "title": "Opening The Mouth" },
    { "rating": 11, "title": "Alpha And Omega" },
    { "rating": 9, "title": "I Saw Drones" },
    { "rating": 11, "title": "The Devil Is In The Details" },
    { "rating": 10, "title": "A Is To B As B Is To A" },
    { "rating": 10, "title": "Over The Horizon Radar" },
    { "rating": 10, "title": "Dawn Chorus" },
    { "rating": 9, "title": "Diving Station" },
    { "rating": 10, "title": "You Could Feel The Sky" },
    { "rating": 10, "title": "Corsair" },
    { "rating": 10, "title": "Magic Window" },
];

const themes = [
    "Creepy", "Nostalgic", "Strange", "Hypnotic", "Melancholic"
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
                This album has been a companion throughout my adult life.
                It's a deeply emotional and introspective work that captures the essence of nostalgia and melancholy.
                There are so many memorable moments throughout the album.
                The entire atmosphere and individual moments, it's a perfect album experience so 10/10 for me.
            </p>

            <p>
                Track #08 Julie and Candy was the first BoC track I ever heard, it was on a "Trip Hop Essentials" youtube mix.
                The moment the song started playing, I was intrigued. It just instantly aligned with my brainwaves.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vuG39sZxMp8?si=wfnFyAIMbUPunPhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <p>
                But there are so many other great individual tracks throughout the album. Give it a listen!!
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/F7bKe_Zgk4o?si=V9L04o_Uixoszc7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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
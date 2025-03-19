import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Concrete" },
    { "rating": 10, "title": "I Disagree" },
    { "rating": 8, "title": "Bloodmoney" },
    { "rating": 10, "title": "Anything Like Me" },
    { "rating": 8, "title": "Fill The Crown" },
    { "rating": 9, "title": "Nothing I Need" },
    { "rating": 8, "title": "Sit Stay" },
    { "rating": 9, "title": "Bite Your Teeth" },
    { "rating": 7, "title": "Sick of the Sun" },
    { "rating": 8, "title": "Don't Go Outside" }
];

export const review = () => (
    <div className='review-content'>
        <div className="review-artistIntro">
            <p>Poppy (i.e. Moriah Rose Pereira) is a genre-fluid artist, constantly reinventing her sound with each album. 'I Disagree,' released in 2020, showcases her unique blend of pop, industrial, and alt-metal influences.</p>
        </div>
        
        <div className="review-content">
            <p>One of the things that makes this album so entertaining to listen to (and Poppy as an artist in general) is the contrast from cute pop moments, to aggressive alt-metal. It's unique and very distinctive, introducing a bit of spice into the well-trodden genres.</p>
            
            <p>
                Within a few weeks of discovering this album back in early 2021, I was absolutely hooked. I was convinced this was a full on alt-metal masterpiece.
                A few years later (writing this in 2024) and unfortunately a few songs on the album don't hit the same as they used to.
                I still love the album and rate it highly, but it's no longer in my top 10 albums of all time as it was for at least 2 years (2021 and 2022).
                It happens to everyone, our taste changes over time.
            </p>
            
            <p>[02] I Disagree, and [04] Anything Like Me, are still brilliant songs.</p>
            <p>The music video for [04] Anything Like Me is pretty fantastic, a piece of art:</p>       
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qmMm1TwYYns?si=8GML5MPZt7OYj1O6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>
        
        <div className="review-summary">
            <p>A blistering exploration of fun alt-metal. The album hasn't aged too well for me personally, but I still enjoy listening to it.</p>
        </div>
    </div>
)

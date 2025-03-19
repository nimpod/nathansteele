import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 8, "title": "Wildlife Analysis" },
    { "rating": 11, "title": "An Eagle In Your Mind" },
    { "rating": 10, "title": "The Color Of The Fire" },
    { "rating": 11, "title": "Telepathic Workshop" },
    { "rating": 10, "title": "Triangles & Rhombuses" },
    { "rating": 10, "title": "Sixtyten" },
    { "rating": 9, "title": "Kaini Industries" },
    { "rating": 9, "title": "Bocuma" },
    { "rating": 10, "title": "Roygbiv" },
    { "rating": 10, "title": "Rue The Whirl" },
    { "rating": 9, "title": "Aquarius" },
    { "rating": 9, "title": "Olson" },
    { "rating": 9, "title": "Pete Standing Alone" },
    { "rating": 10, "title": "Smokes Quantity" },
    { "rating": 9, "title": "Open The Light" },
    { "rating": 10, "title": "One Very Important Thought" },
    { "rating": 10, "title": "Happy Cycling" },
];

const themes = [
    "Atmospheric",
    "Otherworldly",
    "Mysterious",
    "Vast",
    "Dark", 
    "Nostalgic", 
    "Ethereal", 
    "Creepy", 
    "Weird", 
    "Surreal"
];


export const review = () => (
    <div className='review-content'>

        {/* Main themes about the album I have personally observed */}
        <div className="review-albumThemes">
            <div className='themes list-of-tags'>
                {themes.map(theme => {
                    return <span className='theme-tag' key={theme}>
                        {theme}
                    </span>
                })}
            </div>
        </div>
        
        {/* Objective introduction to the artist, and objective context around this album */}
        <div className="review-artistIntro">
            <p>
                Boards of Canada (aka. BoC) are a highly mysterious ambient/downtempo/IDM/electronic group hailing from Scotland.
                In the year of 1998 they released their 2nd album Music Has The Right to Children.
            </p>
            <p>
                I first discovered BoC in 2017 on a YouTube trip-hop mix that included the song "Julie and Candy", one of my favourite songs ever on their 2002 album "Geogaddi". 
                Upon listening to the mix many times, this one song stood out to me. It was different from any other style of music I'd heard it before.
                Pretty quickly I started going through their discography, and while all of their albums are very special, something about this 1998 album was and still is the most unique/engaging/otherworldly album I have ever experienced.
            </p>
        </div>
            
        {/* Main section of the review, overview of what I like and dislike about the album */}
        <div className="review-positivesAndNegatives">
            <p>
                BoC's style appeals to my personal taste in many ways, most notably...
                <ul>
                    <li>The marriage of futurism and nostalgia</li>
                    <li>The balance between melancholia and happiness</li>
                    <li>A reminder that life is a fleeting cosmic miracle and that one day humanity will cease to exist</li>
                    <li>An ethereal/mysterious/creepy/surreal/cosmic/atmospheric vibe</li>
                </ul>
            </p>
            <p>
                To give an album a 10/10, every song has to be perfect. 
                This album absolutely achieves that, and goes beyond, in terms of achieving high quality AND quantity. 
                There are so many amazing moments on this album.
            </p>
        </div>

        {/* My ratings of each track */}
        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>
            
        {/* A brief overview/summary of my personal experience with the album */}
        <div class="review-summary">
            <p>
                Truly the greatest album of all time. The marriage of futurism and nostalgia is unlike any album I have ever heard.
                The balance between melancolia and happienss is perfect.
                It has an ethereal/mysterious/creepy/surreal/cosmic/atmospheric vibe like no other album.
                The quantity of the quality on this album is unmatched.
            </p>
        </div>
    </div>
)
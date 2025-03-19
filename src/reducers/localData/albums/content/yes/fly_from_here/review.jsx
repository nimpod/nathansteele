import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Fly From Here: Overture" },
    { "rating": 11, "title": "Fly From Here, Part I: We Can Fly" },
    { "rating": 11, "title": "Fly From Here, Part II: Sad Night at the Airfield" },
    { "rating": 10, "title": "Fly From Here, Part III: Madman at the Screens" },
    { "rating": 10, "title": "Fly From Here, Part IV: Bumpy Ride" },
    { "rating": 11, "title": "Fly From Here, Part V: We Can Fly" },
    { "rating": 11, "title": "The Man You Always Wanted To Be" },
    { "rating": 10, "title": "Life On A Film Set" },
    { "rating": 10, "title": "Hour of Need" },
    { "rating": 10, "title": "Solitaire" },
    { "rating": 10, "title": "Into the Storm" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                Truly one of the most grandiose, epic, uplifting musical experiences of my life. 
                Every song absolutley bangs, flows perfectly, and as an album experience it just all feels so cohesive and well-crafted. 
                Solitaire is undoubetley one of the weaker tracks on the album, but its not bad, better than most acoustic tracks you find on any other prog album in my opinion. 
                It will forever baffle me why more people don't adore this album as much as I do. 
                Shame they had to go and ruin that with the shitty 'remaster' in 2018 with no Benoît David.    
            </p>
        </div>

        <div className='review-trackRatings'>
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className='review-summary'>
            <p>
                Very underrated in Yes's vast discography. It's a true album experience, not a single bad track, flows perfectly in my opinion, there is quality AND quantity on this album.
            </p>
        </div>
    </div>
)
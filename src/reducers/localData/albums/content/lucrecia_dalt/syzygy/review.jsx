import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Glosolalia" },
    { "rating": 10, "title": "Inframince" },
    { "rating": 10, "title": "Soliloquios" },
    { "rating": 10, "title": "Vitti" },
    { "rating": 8, "title": "Levedad" },
    { "rating": 8, "title": "Volaverunt" },
    { "rating": 8, "title": "Edgewise" },
    { "rating": 8, "title": "Murmur" },
    { "rating": 8, "title": "Mirage" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                A delectable medley of layered minimalist soundscapes.
                There's something so mysterious and detailed about this album. 
                Every time I listen to this album I feel like I'm uncovering new things about it - a musical onion enigma. 
                The sound expressed on this album is kinda like a abstract version of Air..... 
                With trilingual vocals..... 
                And surrealistic tropical interludes....
                and hypnotising sub-bass drones.... 
                There are few forgettable tracks, but its mostly a great album.
            </p>
        </div>

        <div className='review-trackRatings'>
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className='review-summary'>
            <p>
                A delectable medley of layered minimalist soundscapes. 
                There's something so mysterious and detailed about this album.
                Strong recommend to anyone that likes their electronic music a little different and experimental.
            </p>
        </div>
    </div>
)
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Brownsville Turnaround On The Tex-Mex Border" },
    { "rating": 10, "title": "Pulling Out Of Ricardo And The Dusk Is Falling Fast" },
    { "rating": 10, "title": "Six Hours To Louisiana, Black Coffee Going Cold" },
    { "rating": 11, "title": "Dream Time In Lake Jackson" },
    { "rating": 9, "title": "Madrugada Eterna" },
    { "rating": 9, "title": "Justified And Ancient Seems A Long Time Ago" },
    { "rating": 9, "title": "Elvis On The Radio, Steel Guitar In My Soul" },
    { "rating": 9, "title": "3am Somewhere Out Of Beaumont" },
    { "rating": 10, "title": "Wichita Lineman Was A Song I Once Heard" },
    { "rating": 9, "title": "Trancentral Lost In My Mind" },
    { "rating": 9, "title": "The Lights Of Baton Rouge Pass By" },
    { "rating": 9, "title": "A Melody From A Past Life Keeps Pulling Me Back" },
    { "rating": 9, "title": "Rock Radio Into The Nineties And Beyond" },
    { "rating": 9, "title": "Alone Again With The Dawn Coming Up" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/L6p16dZ5Bz8?si=rf_1EUV5nPCmM4VY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
            <p>

            </p>
        </div>

        <div className='review-trackRatings'>
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className='review-summary'>
            <p>

            </p>
        </div>
    </div>
)
import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Liquid Insects" },
    { "rating": 10, "title": "Swab" },
    { "rating": 10, "title": "Mountain Goat" },
    { "rating": 9, "title": "In Mind" },
    { "rating": 9, "title": "Ephidrena" },
    { "rating": 9, "title": "Auto Pimp" },
    { "rating": 8, "title": "Fat Cat" },
    { "rating": 9, "title": "Pod Room" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                Amorphous Androgynous is an alias of one of my favourite electronic artists The Future Sound of London (FSOL).
                Basically, this album should really be under FSOL, but they decided to release it under this name instead.
                Released after FSOL's 1st album Accelerator (1992) but before their 2nd album Lifeforms (1994).
                This album is the logical evolution of their sound, and I absolutely love the style of this album.
                It's a shame more people don't know about this album.
            </p>

            <p>
                Tales of Ephidrina is a concept album framed as the soundtrack to a journey through a fictional, psychedelic landscape called "Ephidrina." 
                The name is a play on "ephedrine," a stimulant, hinting at its altered-state intentions
            </p>

            <p>
                I feel like I am walking through an alien lanscape, discovering deformed monsters and poisonous plants and unfamilar terrain.
                The production is top-notch, with layers upon layers of sound creating a rich and immersive experience.
                And this came out in 1993 - truly incredible.
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/7qkKh7o1Tzg?si=0SBiQQFKmOu4P6Eo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p>
                This album wasn't the end of Amorphous Androgynous either, they went on to release several more albums and EPs under this name.
                They shifted more into psychedelic rock later on.
                There is a very interesting interview shown below:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kJOALPKDCGg?si=fJlCHGegcYXZ2W2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className='review-trackRatings'>
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className='review-summary'>
            <p>
                If this was part of FSOL's main discography it would be my 2nd favourite in their discography (behind Lifeforms).
                There's not a single bad track on the album. Every time I listen to it it flys by.
                This album and its style occupies a very niche area in music, a sort of psychedelic ambient techno with scifi concepts.
            </p>
        </div>
    </div>
)
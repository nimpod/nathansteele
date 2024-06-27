import React from 'react';
import TemplateTracklistComponent from '../TemplateTracklistComponent.jsx';

const tracklist = [
    {
        "title": "Wildlife Analysis",
        "my_rating": 10,
        "my_feelings": "Great intro, great vibes.",
        "spotify_track_id": "1XZdwzd8DTDvkjVc0eJ9BI",
        "track_url": "https://open.spotify.com/track/1XZdwzd8DTDvkjVc0eJ9BI?si=fcd3409fe49940a6",
    },
    {
        "title": "An Eagle In Your Mind",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "The Color Of The Fire",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Telepathic Workshop",
        "my_rating": 11,
        "my_feelings": "The greatest song of all time?",
        "spotify_track_id": "7AfbtT8GN1iv3Crb11NaVI",
        "track_url": "https://open.spotify.com/track/7AfbtT8GN1iv3Crb11NaVI?si=d054a4bc1fc64c42",
    },
    {
        "title": "Triangles & Rhombuses",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Sixtyten",
        "my_rating": 11,
        "my_feelings": "",
    },
    {
        "title": "Turquoise Hexagon Sun",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Kaini Industries",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Bocuma",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Roygbiv",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Rue The Whirl",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Aquarius",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Olson",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Pete Standing Alone",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Smokes Quantity",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Open The Light",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "One Very Important Thought",
        "my_rating": 10,
        "my_feelings": "",
    },
    {
        "title": "Happy Cycling",
        "my_rating": 10,
        "my_feelings": "",
    },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-briefIntro">
            <p>
                Boards of Canada (aka. BOC) are a highly mysterious ambient/downtempo/IDM/electronic group hailing from Scotland.
                In the year of 1998 they released their 2nd album Music Has The Right to Children, what I would say is unequivocally my favourite album of all time.
                Their style appeals to my personal taste in many ways, most notably...
                <ul>
                    <li>The marriage of futurism and nostalgia</li>
                    <li>The balance between melancholia and happiness</li>
                    <li>A reminder that life is a fleeting cosmic miracle and that one day humanity will cease to exist</li>
                    <li>An ethereal/mysterious/creepy/surreal/cosmic/atmospheric vibe</li>
                </ul>
            </p>
            <p>
                I first discovered BoC in 2017 on a YouTube trip-hop mix that included the song "Julie and Candy", one of my favourite songs ever on their 2002 album "Geogaddi". 
                Upon listening to the mix many times, this one song stood out to me. It was different from any other style of music I'd heard it before.
                Pretty quickly I started going through their discography, and while all of their albums are very special, something about this 1998 album was and still is the most unique/engaging/otherworldly album I have ever experienced.
            </p>
        </div>
        <TemplateTracklistComponent tracklist={tracklist} />
    </div>
)
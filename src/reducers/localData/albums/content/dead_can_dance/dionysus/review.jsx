import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Act I: Sea Borne" },
    { "rating": 9, "title": "Act I: Liberator of Minds" },
    { "rating": 10, "title": "Act I: Dance of the Bacchantes" },
    { "rating": 8, "title": "Act II: The Mountain" },
    { "rating": 9, "title": "Act II: The Invocation" },
    { "rating": 9, "title": "Act II: The Forest" },
    { "rating": 8, "title": "Act II: Psychopomp" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                This album is a bit of an outlier in Dead Can Dance's discography.
                Dead Can Dance are best known for their neoclassical darkwave style.
                This album is closer to folk trance / ritual music.
                It fuses many styles together - Greek & Mediterranean folk, Middle-Eastern sounds, North African rhythms, Balkan-style trance vocals
            </p>
            <p>
                The Balkan elements most intrigue me - the group chanting, circular rhythms, Greek village music, Bulgarian women's choirs, Balkan pagan rituals.
            </p>
            <p>
                There is also a wide variety of instruments being used.
                <ul>
                    <li>Strings: Bouzouki (Mediterranean lute), Violins</li>
                    <li>Winds: Ney (end-blown flute), Reed pipes</li>
                    <li>Percussion: Darbuka (goblet drum), Frame drum</li>
                    <li>Voice: Huge layered group vocals, shouts, chants, ritual cries</li>
                    <li>Field recordings: Nature sounds, water, wind, fire.</li>
                </ul>
            </p>
            <p>
                The word "Dionysus" refers to the ancient Greek god of wine, madness, ecstasy, dance, and theatre.
                He is basically the god of "getting so overwhelmed by rhythm and emotion that you forget who you are"
            </p>
            <p>
                I love how earthy, organic, primitive, rhythmic, and raw this album sounds.
                You really feel as though you are floating through these ancient rituals and ceremonies, rather than over-analysing any narrative structure.
                The whole album is a great vibe, the 36 minutes flys by whenever I put it on, there's not a single song I skip, every song brings something interesting.
                Highly recommend if you are interested in music that fuses folk music from around the world.
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
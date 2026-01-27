import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Time Difference" },
    { "rating": 9, "title": "Time Out" },
    { "rating": 10, "title": "Time Travel" },
    { "rating": 10, "title": "Deep Into The Night" },
    { "rating": 11, "title": "Real Clock vs Body Clock = Jet Lag" },
    { "rating": 11, "title": "Time And Space" },
    { "rating": 9, "title": "Time Control Or Controlled By Time" },
    { "rating": 10, "title": "Time Flies" },
    { "rating": "interlude", "title": "Times Up" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                Hiromi's 2007 album "Time Control" has slowly risen to become my favourite Hiromi album of all time.
                The energy, variety, technical ability, and detail is incredible.
                There's not a single skippable track, every moment is thrilling.
            </p>
            <p>
                Every member of the quartet performs at an incredible level throughout the album:
                <ul>
                    <li>Piano: Hiromi</li>
                    <li>Guitar: David Fiuczynski</li>
                    <li>Bass: Tony Grey</li>
                    <li>Drums: Martin Valihora</li>
                </ul>
            </p>
            <p>
                The 4 track run from [03 - Time Travel] to [06 - Time And Space] is unreal.
            </p>
            <p>
                The live version of [02 - Time Out] is a great vibe, see the video below:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KLSuSwLOv8c?si=oUK95pSW6SNq3HSK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <p>
                And the video below is [07 - Time Control Or Controlled By Time] which in my opinion is slightly less exciting than other tracks on the album, but it's still great.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DtVrXTdEbF0?si=_HwUzfdY3BnH1l8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <p>

            </p>
        </div>

        <div className='review-trackRatings'>
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className='review-summary'>
            <p>
                The energy, variety, technical ability, and detail is incredible. There's not a single skippable track, every moment is thrilling.
                Jazz fusion at its absolute best.
            </p>
        </div>
    </div>
)
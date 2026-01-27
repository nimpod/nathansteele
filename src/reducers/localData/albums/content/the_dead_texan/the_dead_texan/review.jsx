import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "The Six Million Dollar Sandwich" },
    { "rating": 9, "title": "Glen's Goo" },
    { "rating": 9, "title": "A Chronicle of Early Failures - Part 1" },
    { "rating": 9, "title": "A Chronicle of Early Failures - Part 2" },
    { "rating": 11, "title": "Taco De Macque" },
    { "rating": 11, "title": "Aegina Airlines" },
    { "rating": 10, "title": "When I See Scissors I Can't Help But Think Of You" },
    { "rating": 8, "title": "Girth Rides A (Horse)" },
    { "rating": 11, "title": "La Ballade D'alain Georges" },
    { "rating": 9, "title": "Beatrice Part 2" },
    { "rating": 9, "title": "The Struggle" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                This is one of Adam Wiltzie's many side projects (his most well known aliase being <a href='https://rateyourmusic.com/artist/stars-of-the-lid'>Stars of the Lid</a>, or just <a href='https://rateyourmusic.com/artist/adam_wiltzie'>Adam Wiltize</a>.
            </p>

            <p>
                Incredible melancholia. Soothes the soul if you are in need of reflection and relaxation.
            </p>

            <p>
                I can't believe it took me so long to start listening to this album (2025).
                I was vaguely aware of it for several years before, having gradually been getting more and more into ambient music in recent years. But until I gave it the entire album its deserved attention, during quiet moments of contemplation in my life, I truly realised how magnificent this album is.
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/V-6H0DOujx8?si=gKawxsaNdbefU1ca" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2aODVvvassI?si=jKS1G046Fl9Fbr3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mRnl7x_PzE4?si=NzQxiofyYby7j_QY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KqE6NkIpRZA?si=pS9DxgliEG-j9msV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
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
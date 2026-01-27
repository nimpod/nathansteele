import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Alive" },
    { "rating": 11, "title": "Wanderer" },
    { "rating": 11, "title": "Dreamer" },
    { "rating": 10, "title": "Seeker" },
    { "rating": 10, "title": "Player" },
    { "rating": 11, "title": "Warrior" },
    { "rating": 9, "title": "Firefly" },
    { "rating": 9, "title": "Spirit" },
    { "rating": 9, "title": "Life Goes On" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                Hiromi found a perfect balance of melancholic moments and energetic moments on this album.
                Most of her albums are 90% energetic moments and 10% melancholic moments.
                That can be quite intense. I personally like a few moments to breath and reflect on the journey.
                Perhaps this album is 80% energetic moments and 20% melancholic moments. 80/20 principle! Kanpeki!
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/GAfUpYTAZgg?si=-vXzha3jAALipLRS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p>
                The trio lineup for this album is my favourite of Hiromi's lineups. The musicianship between them is fantastic and they sounds great live:
                <ul>
                    <li>Hiromi - piano</li>
                    <li>Anthony Jackson - contrabass guitar</li>
                    <li>Simon Phillips - drums</li>
                </ul>
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/pkfrBUscKVw?si=pcg5g0Yem3XM_kq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
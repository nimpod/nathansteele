import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Move" },
    { "rating": 9, "title": "Brand New Day" },
    { "rating": 9, "title": "Endeavor" },
    { "rating": 9, "title": "Rainmaker" },
    { "rating": 11, "title": "Suite Escapism: Reality" },
    { "rating": 11, "title": "Suite Escapism: Fantasy" },
    { "rating": 10, "title": "Suite Escapism: In Between" },
    { "rating": 9, "title": "Margarita!" },
    { "rating": 10, "title": "11:49 PM" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                Another epic jazz fusion album from Hiromi's trio. Simon, Anthony, and Hiromi as a trio are totally unmatched. High quality jazz.
                The 5 track run from [05 - Suite Escapism: Reality] to [09 - 11:49 PM] is amazing.
                <ul>
                    <li>Piano: Hiromi</li>
                    <li>Bass: Anthony Jackson</li>
                    <li>Drums: Simon Phillips</li>
                </ul>
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/e15Bg-tBSt0?si=VzXJ14O_cwfOgEo7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/j90VyHRFSu0?si=zIcYTNd74mJWkNx5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/j90VyHRFSu0?si=zIcYTNd74mJWkNx5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
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
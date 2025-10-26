import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Smile" },
    { "rating": 9, "title": "Knock Em Out" },
    { "rating": 10, "title": "LDN" },
    { "rating": 9, "title": "Everything's Just Wonderful" },
    { "rating": 8, "title": "Not Big" },
    { "rating": 9, "title": "Friday Night" },
    { "rating": 9, "title": "Shame For You" },
    { "rating": 9, "title": "Littlest Things" },
    { "rating": 7, "title": "Take What You Take" },
    { "rating": 9, "title": "Friend of Mine" },
    { "rating": 10, "title": "Alfie" },
    
    { "rating": 10, "title": "Mr Blue Sky" },
    { "rating": 9, "title": "Cheryl Tweedy" },
    { "rating": 10, "title": "Nan You're A Window Shopper" },
    { "rating": 8, "title": "Blank Expression" },
    { "rating": 8, "title": "Absolutely Nothing" },
    { "rating": 9, "title": "U Killed It" },
    { "rating": 9, "title": "Everybody's Changing" },
    { "rating": 9, "title": "Naive" },

]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
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
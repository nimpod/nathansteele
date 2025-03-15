import React from 'react';
import TemplateTracklistComponent from '../TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 11, "title": "EAT" },
    { "rating": 11, "title": "Say Cheese" },
    { "rating": 8, "title": "CUE" },
    { "rating": 8, "title": "Breeders" },
    { "rating": 10, "title": "Dark Dark World" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                Absolutely savage, relatable in it's most introspective moments, chaotic in ways I didn't know were possible, and so distinctive.
                In my opinion Poppy's greatest music so far. 
                Absolute maximalist alt-metal vibes.
                Certainly one of the most exciting prospects in alt-metal today.
                Very memorable despite it's short runtime.
                I really hope Poppy continue with this sound in future albums. What she created here in just 14 minutes is phenomenal and far more memorable and aggressive than most alt-metal albums out there.
            </p>
        </div>

        <div className='review-trackRatings'>
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className='review-summary'>
            <p>
                In my opinion Poppy's greatest music so far. 
                Absolute maximalist alt-metal vibes. 
                Poppy's style is so distinctive and unique.
            </p>
        </div>
    </div>
)
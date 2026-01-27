import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": "intro", "title": "スキ" },
    { "rating": 10, "title": "ゆきこさん" },
    { "rating": 9, "title": "かなしい日々。" },
    { "rating": 10, "title": "お猿" },
    { "rating": 8, "title": "根性無しあたし、あほぼけかす" },
    { "rating": 8, "title": "ちはるの恋" },
    { "rating": 10, "title": "ひみつの2人" },
    { "rating": 8, "title": "5拍子" },
    { "rating": 8, "title": "ハウリング地獄" },
    { "rating": 8, "title": "無欲の無力" },
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
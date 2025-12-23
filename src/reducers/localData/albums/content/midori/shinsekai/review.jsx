import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "鳩" },
    { "rating": 10, "title": "凡庸VS茫洋" },
    { "rating": 10, "title": "さよなら、パーフェクトワールド。" },
    { "rating": 10, "title": "メカ" },
    { "rating": 8, "title": "スピードビート" },
    { "rating": 8, "title": "春メロ" },
    { "rating": 10, "title": "リズム" },
    { "rating": 8, "title": "あたし、ギターになっちゃった!!!!!" },
    { "rating": 8, "title": "鉄塔の上の2人" },
    { "rating": 8, "title": "どんぞこ" },
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
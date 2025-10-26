import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Yoshu Fukushu" },
    { "rating": 8, "title": "Bluetiful Intro" },
    { "rating": 9, "title": "Utsukushi" },
    { "rating": 11, "title": "Benjo Sandal Dance" },
    { "rating": 9, "title": "Chu2 The Beam" },
    { "rating": 9, "title": "'F'" },
    { "rating": 8, "title": "Tsume Tsume Tsume" },
    { "rating": 9, "title": "Rock Oreimairi" },
    { "rating": 9, "title": "Unbelievable!" },
    { "rating": 9, "title": "A-L-I-E-N" },
    { "rating": 9, "title": "my girl" },
    { "rating": 8, "title": "Mesubuta no ketsu ni binta" },
    { "rating": 8, "title": "Beauty Killosseum" },
    { "rating": 8, "title": "maximum the hormone" },
    { "rating": 8, "title": "Koino Sperm" },

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
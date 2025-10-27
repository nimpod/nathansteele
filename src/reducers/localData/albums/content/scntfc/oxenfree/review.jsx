import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 9, "title": "Lost (prologue)" },
    { "rating": 10, "title": "Beacon Beach" },
    { "rating": 9, "title": "Epiphany Fields" },
    { "rating": 10, "title": "Against The Rocks" },
    { "rating": 8, "title": "Towhee Grove" },
    { "rating": 9, "title": "Cleanslate" },
    { "rating": 8, "title": "Alsos" },
    { "rating": 9, "title": "Cold Comfort" },
    { "rating": 8, "title": "Lantern" },
    { "rating": 8, "title": "Argonaut" },
    { "rating": 10, "title": "Catbird Station" },
    { "rating": 8, "title": "Against The Waves" },
    { "rating": 8, "title": "Kanaloa" },
    { "rating": 8, "title": "Dead Light" },
    { "rating": 9, "title": "Catchpole Station" },
    { "rating": 8, "title": "From The Leads" },
    { "rating": 8, "title": "The Gate" },
    { "rating": 10, "title": "Lost" },
    { "rating": 8, "title": "Argonaut Atalanta" },
    { "rating": 9, "title": "Days Past" },
    { "rating": 9, "title": "The Beach, 7am" },
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
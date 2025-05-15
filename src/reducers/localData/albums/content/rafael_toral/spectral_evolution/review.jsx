import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    
];

export const review = () => (
    <div className='review-content'>
        <div className="review-artistIntro">
            <p>
                Rafael Toral is a Portugese ambient/experimental guitarist and electronic musician. 
                He creates some pretty wild and "out there" music.
            </p>
        </div>
        
        <div className="review-content">
            <p>I discovered this wonderful album from this list - <a href="https://www.stereogum.com/2290265/the-10-best-experimental-albums-of-2024/lists/album-list/" target='_blank'>SteroGum - the 10 best experimental albums of 2024</a>.</p>
        </div>
        
        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>
        
        <div className="review-summary">
            <p></p>
        </div>
    </div>
)

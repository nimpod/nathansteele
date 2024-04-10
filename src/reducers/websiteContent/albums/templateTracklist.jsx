import React from 'react';

/**
 * Template UI layout of tracklist.
 * You must pass in a list of tracks to display.
 * @param {*} props 
 * @returns 
 */
function TemplateTracklist(props) {
    return (
        <div className="review-fullTracklist">
            <div className='tracklist-header'>
                <span>#</span>
                <span>Title</span>
                <span>My rating</span>
            </div>
            
            {props.tracklist.map((track, i) => {
                // automate the tracklist num, rather than manually inserting 
                i++;

                // add a 'my feelings' section, if we actually wrote something...
                if (track.my_feelings.length > 0) {
                    return <div className='track-item' id={`track-${i}`}>
                        <span className='track-num'>{i}</span>
                        <span className='track-title'>{track.title}</span>
                        <span className={`track-myRating r${track.my_rating}`}>{track.my_rating}</span>
                        <div className='track-myFeelings-wrapper'>
                            <div class='curvy-line'></div>
                            <div className='track-myFeelings'>
                                {track.my_feelings}
                            </div>
                        </div>
                    </div>
                }

                return <div className='track-item' id={`track-${i}`}>
                    <span className='track-num'>{i}</span>
                    <span className='track-title'>{track.title}</span>
                    <span className={`track-myRating r${track.my_rating}`}>{track.my_rating}</span>
                </div>
            })}
        </div>
    )
}

export default TemplateTracklist

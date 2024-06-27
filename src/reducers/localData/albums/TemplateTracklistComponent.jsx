import React from 'react';

/**
 * Template UI layout of tracklist.
 * You must pass in a list of tracks to display.
 * @param {*} props 
 * @returns 
 */
function TemplateTracklistComponent(props) {
    return (
        <div className="review-fullTracklist">
            <div className='tracklist-header'>
                <span>#</span>
                <span>Title</span>
                <span>My rating</span>
            </div>
            
            {props.tracklist.map((track, i) => {
                let i_have_feelings = (track.my_feelings.length > 0);
                let i_have_feelings_str = (i_have_feelings == true) ? "iHaveFeelings" : "";
                let embed_spotify = (track.spotify_track_id !== undefined);

                // automate the tracklist num, rather than manually inserting 
                i++;

                return <div className={`track-item ${i_have_feelings_str}`} id={`track-${i}`}>
                    {/* Num in tracklist */}
                    <span className='track-num'>{i}</span>

                    {/* Track title */}
                    <span className='track-title'>{track.title}</span>

                    {/* My rating */}
                    <span className={`track-myRating r${track.my_rating}`}>{track.my_rating}</span>

                    {/* My feelings */}
                    {
                        (i_have_feelings) ? 
                        <div className='track-myFeelings-wrapper'>
                            <div className='curvy-line'></div>
                            <div className='track-myFeelings'>
                                {track.my_feelings}

                                {/* Spotify link */}
                                {
                                    (embed_spotify) ? 
                                        <iframe src={`https://open.spotify.com/embed/track/${track.spotify_track_id}?utm_source=generator&theme=0`} 
                                                width="100%"
                                                height="152"
                                                frameBorder="0"
                                                allowfullscreen=""
                                                loading="lazy"
                                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                                :
                                                ""
                                }
                            </div>
                        </div> :
                        ""
                    }
                </div>
            })}
        </div>
    )
}

export default TemplateTracklistComponent

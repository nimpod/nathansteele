import React from 'react';

/**
 * Template UI layout of tracklist.
 * You must pass in a list of tracks to display.
 * @param {*} props 
 * @returns 
 */
function TemplateTracklistComponent(props) {
    let ratings = [];
    props.tracklist.forEach(track => {
        if (track['rating'] == 'interlude' || track['rating'] == 'intro') {
            // dont add to list...
        } else {
            ratings.push(track['rating']);
        }
    });
    let avg = ratings.reduce((acc, c) => acc + c, 0) / ratings.length;
    avg = avg.toFixed(3);

    return (
        <div className="review-fullTracklist">
            <div className='tracklist-header'>
                <span>#</span>
                <span>Title</span>
                <span>My rating</span>
            </div>
            
            {props.tracklist.map((track, i) => {
                if (track.my_feelings !== undefined) {
                    let i_have_feelings = (track.my_feelings.length > 0);
                    let i_have_feelings_str = (i_have_feelings == true) ? "iHaveFeelings" : "";
                }
                let i_have_feelings = undefined;
                let embed_spotify = (track.spotify_track_id !== undefined);

                // automate the tracklist num, rather than manually inserting 
                i++;

                // return <div className={`track-item ${i_have_feelings_str}`} id={`track-${i}`}>
                return <div className={`track-item r${track.rating}`} id={`track-${i}`}>
                    {/* Num in tracklist */}
                    <span className='track-num'>{i}</span>

                    {/* Track title */}
                    <span className={`track-title`}>{track.title}</span>

                    {/* My rating */}
                    <span className={`track-myRating`}>{track.rating}</span>

                    {/* My feelings */}
                    {
                        (i_have_feelings) ? 
                        <div className='track-myFeelings-wrapper'>
                            <div className='curvy-line'></div>
                            <div className='track-myFeelings'>
                                {/* { track.my_feelings } */}

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

            <span className='avg-rating'>Average = {avg}</span>
        </div>
    )
}

export default TemplateTracklistComponent

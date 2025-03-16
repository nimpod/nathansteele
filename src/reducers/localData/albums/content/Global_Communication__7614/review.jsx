import React from 'react';
import TemplateTracklistComponent from '../../TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "4:02" },
    { "rating": 10, "title": "14:31" },
    { "rating": 10, "title": "9:25" },
    { "rating": 11, "title": "9:39" },
    { "rating": 10, "title": "7:39" },
    { "rating": 10, "title": "0:54" },
    { "rating": 10, "title": "8:07" },
    { "rating": 10, "title": "5:23" },
    { "rating": 10, "title": "4:14" },
    { "rating": 10, "title": "12:18" },
];

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>Some of the most mesmerising ambient music I have ever heard.</p>
            <p>I debated for a long time whether this album feels like a 10 or not... And then I realised every time I put this album on I always end up listening to the entire thing. There isn't a single track that feels out of place.</p>
            <p>I remember the exact moment I heard this album for the first time - I was wandering around Heathrow airport on the 2nd August 2024, waiting for my delayed flight - and suddenly 4:02 started playing on my shuffled ambient recommendations playlist. It transported me to an entirely different world the moment I started listening to this album.</p>
            <p>Personally for me, it signified the beginning of a new journey in my life. Since the 2nd August 2024, this album has become one of my 10 most listened albums of all time in less than 6 months.</p>
            <p>Every sound on this album is absolute perfection. It's not just ambient music. It's music that pierces the soul deeply, placing the mind in a truly meditative state.</p>
            <p>Every time I listen to this album, I feel like I'm exploring a desolate landscape, devoid of materialism, appreciating the vastness of where we come from and who we are.</p>
            <p>In case you hadn't noticed, the name of each track on this album corresponds to the length.</p>
            <p>Global Communication are an electronic duo consisting of Mark Pritchard and Tom Middleton. The duo (and Mark himself) have a vast discography not available on Spotify. You will have to scour the depths of <a href="https://www.youtube.com">YouTube</a> and torrents to discover their other music. This one album of theirs seems to have maintained its place on streaming platforms, which can be considered a good thing because everyone should have the opportunity to listen to this beautiful music.</p>
        </div>
        
        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>
        
        <div className="review-summary">
            <p>An absolute must-listen for fans of ambient music. Majestic, ethereal, otherworldly, vast - words cannot describe the feeling of listening to this album.</p>
        </div>
    </div>
);

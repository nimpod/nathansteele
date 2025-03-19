import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "A01" },
    { "rating": 9, "title": "A02" },
    { "rating": 9, "title": "A03" },
    { "rating": 11, "title": "A05 - Finity" },
    { "rating": 11, "title": "A06" },
    { "rating": 9, "title": "A08" },
    { "rating": 9, "title": "A09" },
    { "rating": 11, "title": "A13" },
    { "rating": 10, "title": "A14" },
    { "rating": 11, "title": "B07" },
    { "rating": 10, "title": "B09" },
    { "rating": 9, "title": "B11" },
    { "rating": 10, "title": "B16" },
    { "rating": 9, "title": "B18" },
    { "rating": 9, "title": "B19" }
];

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>For a long time, I considered this album as a 10/10, a perfect album.</p>
            <p>Recently, I have been thinking about what actually makes for a perfect album.</p>
            <p>Personally, this album for me is a complete album experience, I can listen to the entire album skipping a song along the way. Every song feels part of the journey this album takes you on.</p>
            <p>However, some tracks in isolation (mostly the interlude-type tracks) would not make sense outside of the context of the full album.</p>
            <p>But for me they don't diminish the album experience. They just add to the distinctive vibe of the album.</p>
            <p>As the name of the album would suggest, there are 35 songs on the album. And for that reason I haven't rated every song. Just my favourites.</p>
            <p>A few songs in particular, are absolutely transcendental.</p>
            
            <p>For example, A05 - Finity, what a beauty of a song. To pair it with visuals is a great experience too:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GQrQt8XtKAk?si=MCVJcqJZE324kOZm" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
            
            <p>A06 is a beautiful track:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dbyp6gE8aMg?si=o6Fqg7sa8m2d2QbP" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
            
            <p>A13 has a very grand vibe to it:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DztkYtID0ME?si=WkgzeVc8YQVfn15h" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
            
            <p>B07 is a very curious little tune, great quirky vibe:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KuB4Au2rIUc?si=sj0wv2zzf_5KwCAF" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
            
            <p>B09 is another very quirky little banger:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_pFSC1x3k2g?si=nnFsO6inAupJwnNX" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
            
            <p>I could keep going on for a while. As you can see, there's a lot to uncover from this album.</p>
        </div>
        
        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>
        
        <div className="review-summary">
            <p>A one-of-a-kind ambient album, very distinct sound, and so many BoC classics.</p>
        </div>
    </div>
);



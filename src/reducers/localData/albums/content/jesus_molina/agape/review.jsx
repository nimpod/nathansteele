import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 9, "title": "Omnipotent" },
    { "rating": 10, "title": "Saviour" },
    { "rating": 11, "title": "Agape" },
    { "rating": 10, "title": "Grace" },
    { "rating": 10, "title": "Galilea" },
    { "rating": 9, "title": "Kadosin" },
    { "rating": 8, "title": "Mass Ave Blues" },
    { "rating": 8, "title": "Worthy Lamb" },
    { "rating": 10, "title": "Thankfulness" }
]


export const review = () => (
    <div className='review-content'>
        <div className="review-briefIntro">
            <p>Piano: Jesus Molina (Colombia), Drums: Euan Leslie (Scotland), Guitar: Mike Stern (USA), Chad Lefkowitz-Brown (USA)</p>
            <p>To my ears, this music is phenomenal, and deserves much more attention.</p>
            <p>It crosses all spectrums of emotions, it's not just an onslaught of energetic chaos like many classic fusion records. I believe "variety is the spice of life". This album has quiet, melancholic, contemplative moments to balance the energetic moments. This contrast is the key to me enjoying this album so much. Every song is so different, I hear different things every time I put it on.</p>
            <p>The production is impeccable, Jesus's playing is constantly engaging.</p>
            <p>Discovered this album through <a href="https://rateyourmusic.com/music-review/GeorgeX/jesus-molina/agape/113547882">GeorgeX's wonderful review</a>.</p>
            <p>The album's name "Agape" originates from the Greek word ἀγάπη (agápē), which is the highest form of love; unconditional/selfless/sacrificial love, compassionate concern for others, love that persists no matter the circumstances.</p>
        </div>
        
        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>
        
        <div className="review-summary">
            <p>
                Massively underrated jazz fusion album. 
                Jazz fusion that understands the full spectrum of emotions that music is capable of. 
                Highly recommend for all lovers of music, whether you are well versed in jazz or not. There's something here for everyone to love.
            </p>
        </div>
    </div>
);

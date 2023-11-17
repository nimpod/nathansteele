import React from 'react';

export const review = (screenshots) => (
    <div className='review-content'>
        <div className="review-meRambling">
            <p className="review-section-subtitle"># me rambling</p>
            <p>The <b>animation style</b> of this film is incredibly attractive and majestic, the <b>atmosphere</b> enveloped me, the <b>soundtrack</b> has since been engraved in my mind,
                and some aspects of the <b>narrative</b> have really resonated with me in terms of embracing life and death.</p>
            <img src={screenshots[2]} alt="Screenshot from film" />
            <img src={screenshots[1]} alt="Screenshot from film" />
        </div>

        <div className="review-synopsis">
            <p className="review-section-subtitle"># brief synposis</p>
            <p>Beyond the human realm, there exists a magical race of beings who control the tides and the changing of the seasons.
                One of these beings, a young girl named Chun, seeks something more than her contained life and wants to visit Earth. 
                But she soon discovers that it is a dangerous place...</p>
            <img src={screenshots[0]} alt="Screenshot from film" />
        </div>
    </div>
)
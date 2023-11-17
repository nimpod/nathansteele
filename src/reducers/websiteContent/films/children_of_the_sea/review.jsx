import React from 'react';

export const review = (screenshots) => (
    <div className='review-content'>
        <div className="review-meRambling">
            <p className="review-section-subtitle"># me rambling</p>
            <p>Absolutely essential viewing if you are interested in <b>astronomy</b>, <b>spirituality</b>, the <b>mysteries of the ocean</b>, the <b>origins of life</b>, 
                the <b>universe</b>, and combining all of that with <b>unique stylish visual art</b>.</p>
            <p>The depth and scale of the cinematography in the ocean was huge. This creates an interesting contrast compared to the vast incomprehensible scale of the Universe, since we have imaged a lot more of this space we constantly spin and whiz through, in comparison to the oceans all around us that are too dark, inhabitable, vast, and difficult to study to the same level of detail.</p>
            <p>It experiments with style and narrative in ways most films wouldn't risk doing, balancing these two pillars of filmmaking perfectly, once again proving that the 80/20 principle applies to the style vs. substance debate.</p>
            <img src={screenshots[0]} alt="Screenshot from film" />
            <p>The soundtrack by Hisaishi has since been engraved in my mind in melody and atmosphere (even if it's not his best, it's still better than 90% of film soundtracks).</p>
            <p>The first 30 mins are a bit tame and unremarkable, but it sets the scene perfectly and I think it retains enough mystery to keep the viewer engaged.</p>
            <p>If you are interested in stylish visual art, cosmology, the mysteries of the ocean, and the origins of the Universe, this is an absolute must watch. Do it NOW!</p>
            <img src={screenshots[1]} alt="Screenshot from film" />
        </div>
        <div className="review-synopsis">
            <p className="review-section-subtitle"># brief synopsis</p>
            <p>Ruka has just finished school and endless months of summer are looming. She feels bored and disconnected from her classmates and life at home.</p>
            <p>She longs for solitude, friendship, and a greater purpose in life, and finds it at a local aquarium where she encounters a strange boy who has adapted to living in the ocean, and is undergoing experiments at the aquarium to prolong his short lifespan.</p>
            <p>The deep dark mysteries of the ocean slowly unravel, and Ruka undergoes an aquatic awakening, revealing the cosmos in its vast beauty.</p>
            <img src={screenshots[2]} alt="Screenshot from film" />
        </div>
    </div>
)
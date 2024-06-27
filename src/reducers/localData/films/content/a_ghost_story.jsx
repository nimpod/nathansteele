import React from 'react';
import AllScreenshotsComponent from '../TemplateAllScreenshotsComponent.jsx';

export const review = (screenshots) => (
    <div className='review-content'>
        <div className="review-meRambling">
            <p className="review-section-subtitle"># me rambling</p>
            <p>There are so many layers to this wonderful thoughtful piece of art - it's so atmospheric, mysterious, sad, beautiful, ambitious, unusual, creative, minimal, cosmic, vast, and its all centered around such a simple idea but with immaculate execution. </p>
            <p>The soundtrack is just beautiful. Quiet and ambient at times, heartbreaking at other times, and explosive with energy other times. </p>
            <img src={screenshots[2]} alt="Screenshot from film" />
            <p>And crikey the cinematography and use of light is FANTASTIC!!</p>
            <p>Many questions are posed about life, death, and what happens after. It made me think about what impact my life may have in the far future. How will people remember me? 
                Will I be forgotten in amongst billions of others? What unbelievable cosmic events will I miss out on outside of my lifetime? I believe that we should not feel small, 
                insignificant, unimportant or pointless. Instead, we should thank our eyes, our brain, our body and our own silent companion throughout our life for allowing you consciousness
                at such an extraordinary time period where we can study the mysteries of the universe and observe things that are incomprehensibly far away. 
                We too as human beings are made up of the same stuff as galaxies - we are just a particular arrangment of atoms that somehow results in consciouness and an understanding of 
                our place in the universe. Maybe the true meaning of life, while you have it, is to simply give it some meaning.
            </p>
            <img src={screenshots[1]} alt="Screenshot from film" />
        </div>

        <div className="review-synopsis">
            <p className="review-section-subtitle"># brief synposis</p>
            <p>A nameless partner are deeply in love. One day the nameless man dies, but returns to his home in a spectral state that has become stuck in time,
            forced to watch passively as the life he knew and the woman he loves slowly fades away.</p>
            <img src={screenshots[0]} alt="Screenshot from film" />
        </div>

        <div className='review-allScreenshots'>
            <AllScreenshotsComponent screenshots={screenshots} />
        </div>
    </div>
)
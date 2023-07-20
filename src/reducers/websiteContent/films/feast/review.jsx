import React from 'react';

export const review = (screenshots) => (
    <div className='review-content'>
        <div className="review-meRambling">
            <img src={screenshots[0]} alt="Screenshot from film" />
            <img src={screenshots[1]} alt="Screenshot from film" />
            <img src={screenshots[2]} alt="Screenshot from film" />
        </div>
    </div>
)
import React, { Component }  from 'react';

export const review = (screenshots) => (
    <div class='review-content'>
        <div class="review-meRambling">
            <img src={screenshots[0]} />
            <img src={screenshots[1]} />
            <img src={screenshots[2]} />
        </div>
        <div class="review-synopsis">

        </div>
    </div>
)
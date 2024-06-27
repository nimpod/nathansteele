import React from 'react';
import AllScreenshotsComponent from './TemplateAllScreenshotsComponent.jsx';
import { ReactComponent as FullscreenIcon } from "../../../icons/fullscreen.svg";
import { display_fullscreen_image } from '../../../js/helpers.js';
import $ from "jquery";

export const review = (screenshots) => {
    return (
        <div className='review-content'>

            <div id='FullImageView'>
                <img id='FullImage' />
            </div>

            <div className="review-meRambling">
                <p className="review-section-subtitle"># me rambling</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <picture className="img">
                    <img src={screenshots[0]} id={`img-0`} alt="Screenshot from film" />
                    {/* WHY IS THIS ONCLICK EVENT LISTENER NOT WORKING?!??!?!??!?!?!?! ANNOYING!!!!! */}
                    <div className='img-content' onClick={(e) => { display_fullscreen_image(screenshots[0]) } }>
                        <FullscreenIcon width={70} />
                    </div>
                </picture>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt porttitor elementum. Quisque sed aliquam mauris, eu feugiat lectus. Vestibulum et consectetur nisi. Duis cursus urna vitae diam condimentum vulputate sed a orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac dapibus purus. Etiam egestas diam quis laoreet interdum. Nullam mattis faucibus sodales. Etiam ornare tortor et lacus ornare, ac pharetra magna sodales. Quisque sit amet augue elementum metus blandit consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in arcu non sapien vestibulum pulvinar a vel libero. Morbi ut nisl mollis, porttitor nunc eget, placerat dolor. Donec quis sodales diam. </p>
                <picture className="img">
                    <img src={screenshots[1]} id={`img-1`} alt="Screenshot from film" />
                </picture>
            </div>

            <div className="review-synopsis">
                <p className="review-section-subtitle"># brief synopsis</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt porttitor elementum. Quisque sed aliquam mauris, eu feugiat lectus. Vestibulum et consectetur nisi. Duis cursus urna vitae diam condimentum vulputate sed a orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac dapibus purus. Etiam egestas diam quis laoreet interdum. Nullam mattis faucibus sodales. Etiam ornare tortor et lacus ornare, ac pharetra magna sodales. Quisque sit amet augue elementum metus blandit consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in arcu non sapien vestibulum pulvinar a vel libero. Morbi ut nisl mollis, porttitor nunc eget, placerat dolor. Donec quis sodales diam. </p>
                <picture className="img">
                    <img src={screenshots[2]} id={`img-2`} alt="Screenshot from film" />
                </picture>
            </div>
            
            <div className='review-allScreenshots'>
                <AllScreenshotsComponent screenshots={screenshots} />
            </div>
        </div>
    )
}

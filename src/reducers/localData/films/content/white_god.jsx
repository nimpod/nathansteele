import React  from 'react';
import AllScreenshotsComponent from '../template_all_screenshots_component.jsx';

export const review = (screenshots) => (
    <div className='review-content'>
    
        <div className="review-meRambling">
            <p>I never thought a Hungarian schoolgirl playing Franz Liszt's Hungarian Rhapsody on a trumpet to a group of dogs would make me cry, but here we are.</p>
            <p>Also love how most of the credits are just dogs and dog trainers.</p>
            <p>It's incredible how the filmmakers were able to portray so much emotion/despair/sadness just by filming dogs.</p>
            <img src={screenshots[0]} alt="Screenshot from film" />
            <p>White God is one of those kind of films where loads of things at the beginning piss me off and I'm almost ready to stop watching, and then BOOM everything goes nuts and I'm totally on board with the story and characters. (similar feelings to The Nightingale, The Revenant, Revenge, mother!)</p>
            <p>Sometimes a picture speaks a thousand words, so why stuff your films with meandering filler conversations when you could be expressing raw emotions and compelling character development!</p>
            <p>Jó napot kívánok!!!!</p>
            <img src={screenshots[1]} alt="Screenshot from film" />
        </div>

        <div className="review-synopsis">
            <p>A cautionary tale between a superior species and its disgraced inferior - Favoring pedigree dogs, a new regulation puts a severe tax on mixed breeds. Owners dump their dogs and shelters become overcrowded. 13-year-old Lili fights desperately to protect her pet Hagen, but her father eventually sets the dog free on the streets.</p>
            <img src={screenshots[2]} alt="Screenshot from film" />
        </div>

        <div className='review-allScreenshots'>
            <AllScreenshotsComponent screenshots={screenshots} />
        </div>
    </div>
)
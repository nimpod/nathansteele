import React  from 'react';
import AllScreenshotsComponent from '../TemplateAllScreenshotsComponent.jsx';

export const review = (screenshots) => (
    <div className='review-content'>

        <div className="review-meRambling">
            <p className="review-section-subtitle"># me rambling</p>
            <p>I am rarely so enamored by a film that is centered entirely on 2 people, but the chemistry between them is just so infectious and authentic. 
                I found the first half of this film to be addictively gentle and brimming with genuine passion, joy, and inspiration. 
                I could have watched another 10 hours of them just chatting about anime and books and just hanging out.
                The chemistry between these two characters was just off the charts. 
                The fusion of their personal interests made it so clear they were soulmates.
            </p>
            <p>Considering this, the second half of this film was a difficult punch to take, but a very intentional descent into the depressing realization that relationships often don't work out, 
                because hobbies and work often take separate paths when youngsters begin trying to earn a living.
            </p>
            <img src={screenshots[0]} alt="Screenshot from film" />
            <p>I loved the soundtrack. Perhaps if there were more of a gradual instrumental progression (like Ritual) it could have been even better. 
                But the simple melody, the subtle instrumentation, the way its used, when it's used in scenes, is all done so wonderfully. It wouldn't have been the same film without it.
            </p>
            <p>They even got Mamoru Oshii on this film!?!? If there's any film I didn't expect the legendary anime director to randomly appear on as a supporting actor, it was definitely this one!</p>
            <p>The cinematography wasn't the most adventurous, but didn't affect my overall enjoyment of the film too much.</p>
            <img src={screenshots[1]} alt="Screenshot from film" />
            <p>However, the more J-drama's I watch, the more I realise how good they are at creating characters because they feel so real.
                I guess this is the combination of the actors ability to say a lot without saying much, the actors ability to understand the character based on the director's advice, 
                and the actors ability to understand the original script's intention of the character.
            </p>
            <p>Creating a complex character seems to be a pillar of filmmaking that the Japanese understand very well.</p>
            <p>Generally, if like me your life is full of uncertainty, chaos, insecurities, and unknowns, films like these are basically medication that help to sooth the mind and soul.</p>
        </div>

        <div className="review-synopsis">
            <p className="review-section-subtitle"># brief synopsis</p>
            <p>Two people meet each other after missing the last train home, leading to a beautiful relationship over five years.</p>
            <img src={screenshots[2]} alt="Screenshot from film" />
        </div>

        <div className='review-allScreenshots'>
            <AllScreenshotsComponent screenshots={screenshots} />
        </div>
    </div>
)
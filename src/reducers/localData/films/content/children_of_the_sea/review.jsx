import React from 'react';

export const review = (screenshots) => (
    <div className='review-content'>
        <div className="review-meRambling">
            <p className="review-section-subtitle"># summary of why I like it</p>
            <p>Every crevice of this film oozes ethereal cosmic beauty. Absolutely essential viewing if you are interested in <b>astronomy</b>, <b>spirituality</b>, the <b>mysteries of the ocean</b>, 
                the <b>origins of life</b>, the <b>universe</b>, and combining all of that with <b>unique stylish visual art</b>.
            </p>
            <p>It's great to see such intriguing audio-visual experiences tackle subject matters larger than life, exploring the unknown, things beyond human comprehension. 
                This film is a wonderful form of creative expression, that speaks openly about the incomprehensible vastness of life and the mysterious universe that
                we have the luck, technology, and time to explore for a brief amount of its existence and an even briefer amount of our existence.
                This film is a cautionary tale of curiosity, forgiveness, ikigai, personal awakenings, and cosmic self-awareness.</p>
            <p>As with many Japanese films, the dialogue and (voice) acting is very expressive. Due to this, it's absolutely essential that you watch this in 
                Japanese with subtitles in your native language, and not with dubbed audio. This can be challenging with a film like this as there is a 
                lot thrown at the viewer, but it's essential if you want to feel immersed in the full audio-visual-linguistic experience.</p>
            <p>If you are interested in stylish visual art, cosmology, the mysteries of the ocean, and the origins of the Universe, this is an absolute must watch.</p>
            <img src={screenshots[0]} alt="Screenshot from film" />
        </div>
        <div className='review-subratings'>
            <p className='review-section-subtitle'># rating each aspect of the film</p>
            <p><b>Art style (10/10)</b> - This is one of the most visually original, intense, polarising animation styles I have ever seen, 
                thanks to the very forward-thinking animation studio <a href="https://www.studio4c.co.jp/english/">Studio 4°C</a>.</p>
            <p><b>Cinematography (10/10)</b> - The depth and scale of the cinematography in the ocean was huge. 
                This creates an interesting contrast compared to the vast incomprehensible scale of the Universe, 
                since we have imaged a lot more of this space we constantly spin and whiz through, in comparison to the oceans all around us that are too dark, 
                inhabitable, vast, and difficult to study to the same level of detail.</p>
            <p><b>Narrative (10/10)</b> - Philosophical musings on the mysteries of the universe and the ocean is an easy way to win me over in film, 
                and this film executes it to perfection. Some may argue that the first 30 mins are a bit tame and unremarkable, 
                and while that's partly true it sets the scene perfectly and I think it retains enough mystery to keep the viewer engaged.</p>
            <p><b>Soundtrack (9/10)</b> - Joe Hisaishi created another spectacular soundtrack. Several songs are absolutely transendental, 
                a few are middling and not overly memorable but doesn't affect how I feel about the film, merely my rating to the soundtrack itself -
                nevertheless, the melodies and atmosphere the soundtrack emits has stuck with me ever since I watche this film, and is absolutely intergral to developing the atmosphere, tension, and cosmic self-awareness.</p>
            <img src={screenshots[1]} alt="Screenshot from film" />
        </div>

        <div className="review-synopsis">
            <p className="review-section-subtitle"># brief synopsis</p>
            <p><b>Brief synopsis</b> - 
                Ruka has just finished school and endless months of summer are looming. 
                She feels bored and disconnected from her classmates and life at home.
                She longs for solitude, friendship, and a greater purpose in life, and finds it at a local aquarium where she encounters a strange boy who has adapted to living in the ocean, and is undergoing experiments at the aquarium to prolong his short lifespan.
                The deep dark mysteries of the ocean slowly unravel, and Ruka undergoes an aquatic awakening, revealing the cosmos in its vast beauty.
            </p>
            <img src={screenshots[2]} alt="Screenshot from film" />
        </div>
    </div>
)
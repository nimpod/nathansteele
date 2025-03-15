import React from 'react';
import TemplateTracklistComponent from '../TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 8, "title": "The First Movement (Ferry To Shamisen) 第一楽章 （渡来三味)" },
    { "rating": 9, "title": "The Second Movement (Echizen Flow Nodes)] 第二楽章 （越前流れ節" },
    { "rating": 11, "title": "The Third Movement (Collar People a Shallow Premier Lai Ishikawa) 第三楽章 （領民一揆浅瀬石川)" },
    { "rating": 11, "title": "The Fourth Movement (In Indigenous Kamigawara Fushitamashi Forever) 第四楽章 （土着上河原節魂永遠に)" },
    { "rating": 11, "title": "Tsugaru Spring Song 津軽春唄" },
    { "rating": 10, "title": "Tsugaru Autumn Song 津軽秋唄" },
    { "rating": 10, "title": "Tsugaru Winter Song 津軽冬唄" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                Japanese tsugaru-jamisen musician Chisato Yamanda created one of the best fusions of Japanese funk and Min'yō music I've ever heard in my life!
                This is so underrated and underappreciated in the modern era.
                It's authentically Japanese and incredibly unique in its combination of genres and instrumentaiton - 
            </p>
            <p>
                <b>Shamisen (plucked string instrument)</b> + <b>grand orchestral production</b> + <b>funky vibes</b> + <b>field recordings of wind</b>. 
            </p>
            <p>
                The Third Movement, The Fourth Movement, and Tsugaru Spring Song is legitmatley one of my favourite 3 track runs in any album, EVER!!! 
                Tsugaru Spring Song in particular is amazing. 
                And the epic harmonised vocals being introduced at in the Third Movement begins this amazing run of musical splendour. 
            </p>
            <p>
                There's a wonderful sense of musicianship that I sense whenever I listen to this album. 
                Everything just works. I have rarely any criticims of this album, I think almost every song flow perfectly and the variety of instrumentation is a delectable splendour you should give your ears the chance. 
                Honestly the only song I'm a bit meh on is The First Movement, the intro to the album. But this is because the album develops at its own pace, gradually introducing new layers of instrumentation and production, which is part of its charm in my opinion. 
            </p>
        </div>

        <div className='review-trackRatings'>
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className='review-summary'>
            <p>It's a very memorable, funky, catchy hidden gem of an album from Japan's finest tsugaru-jamisen player. An album I highly recommend for anyone that wants something a little different from the usual.</p>
        </div>
    </div>
)
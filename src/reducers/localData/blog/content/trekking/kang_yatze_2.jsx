import React  from 'react';

const MEDIA = {
    // images...
    summit_photo: "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/trekking/kang_yatze/summit_photo.jpeg",
}

export const post = () => (
    <div>
        <div className='intro-text blog-subsection' id='section1'>
            <h3 className='subgroup-title'></h3>
            <p>Kang Yatze II (6250m) (aka. KY2) is a mountain in North India, Ladakh, Hemis national park. It is roughly the <a href="https://en.wikipedia.org/wiki/List_of_mountains_by_elevation">237th highest (named) mountain in the world!</a></p>
            {/*
            <p>Kang Yatze I (6400m) (aka. KY1) is the highest, at 6400m altitude. It requires a bit more advanced mounteering experience. 
            */}
            <p>To summit KY2 no mountaineering experience is required, 
                and is a perfect high altitude peak for beginners to attempt
                - enter me! I had never been higher than Mount Toubkal in Morocco before this, 
                a height of 4167m. 
                I was ready for a new challenge, 
                and Ladakh is an area of the world that I had wanted to visit for a long time.
            </p>
            <p>You can see the <a href="https://www.strava.com/athletes/45999759#interval?interval=202433&interval_type=week&chart_type=miles&year_offset=0">Strava data</a> here.</p>
            <ul>
                <li>Total distance = 108km</li>
                <li>Total elevation gain = 6000m</li>
                <li>Max altitude = 6200m (Kang Yatze II summit)</li>
                <li>Type = Camping</li>
                <li>Duration = 10 days</li>
                <li>Agency: <a href="https://www.ju-lehadventure.com/">Ju-Leh adventures</a></li>
                <li>Guide: Jit</li>
                <li>With: Giovanni, Maria, Patrick, Helene</li>
            </ul>
            <picture className="img">
                <img className='larger-image' src={MEDIA.summit_photo} alt='Summit photo' />
                <p className='external-link-container'>Photo from the summit of KY2</p>
            </picture>
        </div>

        <div className='blog-subsection' id='section2'>
            <h3 className='subgroup-title'>Day 1 - 13/08/2024</h3>
            <p>Zingchen (3402m) - Rumbak (3956m)</p>
            <p><a href="https://www.strava.com/activities/12192430676">Strava data</a></p>
            <ul>
                <li>Distance = 5.14km</li>
                <li>Ascent = 397m</li>
                <li>Duration = 1.5 hours</li>
                <li>Steps = 13,085 steps</li>
            </ul>
            <p>We met in the Ju-Leh adventures office, in the Leh town centre – the office was a bit tricky to find but got there eventually. Giovanni works in construction, building bridges etc… Maria works in environmental science, they both live in Rome. Helene works in a school, and Patrick works for a sport clothing brand, they both live in Strausberg.</p>
            <p>I was informed that the crampons required for summit day would not fit on my chosen shoes (Salomon speedcross 6 GTX). I had to rent these humongous ski boots (2.5kg each boot). I was immediately a bit nervous about the challenges that lay ahead…</p>
            <p>We got a 1 hour jeep to the start of the trek – Zingchen – and then started walking! It felt pretty hot, however, at high altitudes, the temperature your body feels can be deceiving. The UV index is higher it can seem much hotter than it really is. This is more obvious when the sun goes down, or you find some shade (more on this later…)</p>
            <p>Day 1 was a relatively easy day, we got to our camp site by around 2pm. I wasn’t expecting it but every day Tamil (our chef) prepared amazing lunch boxes for us full of great food – mangos, chapati veg wrap, potatoes, boiled eggs, cheese, guava juice, and chocolate.</p>
            <p>This was topped even further by a fantastic dinner. The food they can conjure up despite being far from civilization is very impressive.</p>
            <p>Unfortunately, on day 1, I had already made a fatal mistake. Prior to dinner, I was organising my big bag. I got the call for food, and left my bag outside. After food, maybe 7pm’ish, I returned to my tent, picked up my big bag and chucked it inside my tent. I then turned off my headtorch (to prevent insects following me), shuffled inside my tent, and switched my headtorch back on, and there was an extremely unpleasant sight – about 20 spiders crawling up onto the walls of the tent having been attached to my big bag outside! They were not small spiders either, relatively big ones with thin legs and a big face.</p>
            <p>I panicked and didn’t know what to do, I wanted to get out but that would risk further contamination now that I’d already closed the tent. So I got into my sleeping bag and hid my entire body leaving my head poking out, grabbed my shoe, and gently pushed the side of the tent whenever a spider crawled in that direction, and the spider would fall on the ground I smashed it with my shoe… I did this at least 20 times… This ended up taking about 1.5 hours of my life… I never made the same mistake again. Quite an introduction to the Ladakhi entomology! The closest comparison I can make is the scene in Harry Potter with all the spiders in the forest…</p>
        </div>

        <div className='blog-subsection' id='section3'>
            <h3 className='subgroup-title'>Day 2 - 14/08/2024</h3>
            <p>Rumbak (3956m) - Stok La base camp (4438m) - Yurutse (4148m)</p>
            <ul>
                <li>Distance = 12.89km</li>
                <li>Ascent = 864m</li>
                <li>Duration = 4 hours</li>
                <li>Steps = 25,501</li>
            </ul>
            <p>Today we walked to Stok La base camp, a slow gentle incline. Then back to Rumbak, and then to Yurutse for our campsite. The views were immense and vast. I did not make the same spider mistake as last time… We had an amazing view of the Stok Kangri mountain (6100m) from our campsite.</p>
        </div>

        <div className='blog-references references-text' id='section14'>
            <h3 className='subgroup-title'>References</h3>
            <ul>
                <li><a href='https://medium.com/@hunterscott/what-a-soviet-spacecraft-on-venus-can-teach-you-about-failure-f74f9c970a45' target='_blank'>https://medium.com/@hunterscott/what-a-soviet-spacecraft-on-venus-can-teach-you-about-failure-f74f9c970a45</a></li>
                <li><a href='https://en.wikipedia.org/wiki/Venera' target='_blank'>https://en.wikipedia.org/wiki/Venera</a></li>
                <li><a href='https://nssdc.gsfc.nasa.gov/planetary/venera.html'>https://nssdc.gsfc.nasa.gov/planetary/venera.html</a></li>
                <li><a href='https://www.youtube.com/watch?v=-Ecm4N0NLYI&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=4' target='_blank'>https://www.youtube.com/watch?v=-Ecm4N0NLYI&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=4</a></li>
                <li><a href='https://www.youtube.com/watch?v=M5pXx_AjjlM&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=34&t=426s' target='_blank'>https://www.youtube.com/watch?v=M5pXx_AjjlM&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=34&t=426s</a></li>
                <li><a href='https://www.youtube.com/watch?v=ztmu__xo-vI&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=24' target='_blank'>https://www.youtube.com/watch?v=ztmu__xo-vI&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=24</a></li>
                <li><a href='https://www.youtube.com/watch?v=P3Ife6iBdsU&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=99' target='_blank'>https://www.youtube.com/watch?v=P3Ife6iBdsU&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=99</a></li>
                <li><a href='https://www.space.com/18551-venera-13.html' target='_blank'>https://www.space.com/18551-venera-13.html</a></li>
            </ul>
        </div>
    </div>
)
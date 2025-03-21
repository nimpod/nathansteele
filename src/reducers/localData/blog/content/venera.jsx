import React  from 'react';

const MEDIA = {
    /*
    // images...
    venus_topography_map: require('./venus_topography_map.png'),
    venera_falling_through_venus_atmosphere: require('./venera_falling_through_venus_atmosphere.png'),

    // audio...
    venera_audio_recording: require('./veneraAudioRecording.wav'),
    */
   
    // images...
    venus_topography_map:                       "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/venera/venus_topography_map.png",
    venera_falling_through_venus_atmosphere:    "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/venera/venera_falling_through_venus_atmosphere.png",

    // audio...
    venera_audio_recording:                     "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/venera/veneraAudioRecording.wav",
}

export const post = () => (
    <div>
        <div className='intro-text blog-subsection' id='section1'>
            <h3 className='subgroup-title'></h3>
            <p>The Soviets succesfully landing an autonomous robot on Venus in 1975 and snapping a picture from one of the most inhospitable places in the solar system is probably
                the <b>most underrated space achievement of all time</b>.</p>
            <p>The <a href='https://en.wikipedia.org/wiki/Venera' target='_blank'>Venera program</a> <i>(Venera translates to Venus in Russian)</i> was a series of 18 space probes launched between
                1961 to 1983 designed to study the mysterious surface of Venus lurking underneath the planet's thick atmosphere. Given the technology available at the time, and the extremely
                hostile conditions on Venus, the fact that we got any data back, let alone pictures and audio recordings from another planet, is a remarkable <b>feat of engineering
                and science</b>. The Soviet engineers who contributed to the Venera project showed immense <b>perseverance</b> and <b>passion for astronomy</b>, and remains a powerful example
                of <b>science and teamwork</b> being more beneficial for the progress of civilization than war and politics has ever been.
            </p>
            <p>For a long time <a href='https://solarsystem.nasa.gov/planets/venus/overview/' target='_blank'>Venus</a> was thought to be Earth-like due to being a similar size and composition. No telescope could pierce the thick cloud layers that enveloped the mysterious planet, so
                we really had no idea what lurked on Venus without actually going there with scientific instruments to make measurements. The Venera probes gradually revealed to us that Venus is a hellish world full of volcanoes
                and sulphuric acid rain and inconceivably high surface temperatures (475°C). Venus is completely inhospitable for life as we know it, and despite the otherworldly challenges that Venus presented to the
                Venera engineers, they still succeeded in landing probes on the planet, snapping pictures, drilling holes, making audio recordings, and gathering a vast set of data that completely changed our understanding
                of the Universe and our insignificant but precious place within it.
            </p>
            <picture className="img">
                <img className='larger-image' src={MEDIA.venus_topography_map} alt='Venus topography map' />
                <p className='external-link-container'>Map of Venus based on radar imagery from the Pioneer Venus Orbiter spacecraft - [<a href="https://solarsystem.nasa.gov/news/930/30-years-ago-magellan-off-to-map-venus/">source of image</a>]</p>
            </picture>
        </div>

        <div className='blog-subsection' id='section2'>
            <h3 className='subgroup-title'>Venera 1 & 2</h3>
            <p><a href='https://en.wikipedia.org/wiki/Venera_1' target='_blank'>Venera 1</a> was launched in <b>Febuary 1961</b> (that's just 4 years post-<a href='https://en.wikipedia.org/wiki/Sputnik_1'>Sputnik</a>, and 7 years pre-<a href='https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html'>Apollo 11</a>). Unfortunately we lost radio contact with Venera 1, it is believed that it failed due to the overheating of a solar-direction sensor, it returned no data...</p>
            <p><a href='https://en.wikipedia.org/wiki/Venera_2' target='_blank'>Venera 2</a> was launched in <b>November 1965</b> but also suffered from similar problems. The spacecraft made its closest appraoch to Venus at a distance of 23,810km (that's pretty close!)</p> 
            <p>Both probes were intended to fly past Venus without entering orbit.</p>
            <p className='acolade'>1st ever interplanetary probe</p>
            <p className='acolade'>1st ever flyby past another planet</p>
            <p className='acolade'>1st ever probe to make course corrections in deep space</p>
        </div>

        <div className='blog-subsection' id='section3'>
            <h3 className='subgroup-title'>Venera 3</h3>
            <p>Launched in <b>March 1966</b>, <a href='https://en.wikipedia.org/wiki/Venera_3' target='_blank'>Venera 3</a> made a partially successful landing on the surface of Venus on the 1st of March 1966!
                This makes <b>Venera 3 the first human-made spacecraft to land on another planet!! In the year 1966!! Insane!</b></p>
            <p>We say partially successful, because its scientific instruments failed during atmospheric insertion. The probe returned no valuable data regarding the
                atmosphere or surface conditions, but <b>IT DID LAND!</b>
            </p>
            <p className='acolade'>1st ever hard landing on another planet</p>
            <picture className="img">
                <img width="250" height="100" className='dont-resize' src="https://www.wired.com/images_blogs/wiredscience/2010/02/venera_3.jpg" alt='Venera-3 probe' />
                <p className='external-link-container'>Photo of Venera 3 - [<a href="http://mentallandscape.com/V_OKB1.htm">Source of image</a>]</p>
            </picture>
        </div>

        <div className='blog-subsection' id='section4'>
            <h3 className='subgroup-title'>Venera 4</h3>
            <p>Launched in <b>June 1967</b>, <a href='https://en.wikipedia.org/wiki/Venera_4' target='_blank'>Venera 4</a> provided our first insight into the Venusian atmosphere.</p>
            <p>Turns out the planet has <b>extremely intense air pressure</b>, about 90x greater than on Earth! Initial chemical analysis of the atmopshere 
                showed it was composed mostly of <b>carbon dioxide</b> and was far denser than expected. The probe also recorded evidence of <b>zonal winds with speeds of up to 225mph</b>!</p>
            <p>Unfortunately the probe <b>was crushed due to the intense pressure</b> experienced during the 93 minute descent.</p>
            <p className='acolade'>1st measurements of another planets atmosphere</p>
            <p className='acolade'>1st measurements of wind in another planet.</p>
        </div>

        <div className='blog-subsection' id='section5'>
            <h3 className='subgroup-title'>Venera 5 & 6</h3>
            <p><a href='https://en.wikipedia.org/wiki/Venera_5' target='_blank'>Venera 5</a> and <a href='https://en.wikipedia.org/wiki/Venera_6' target='_blank'>Venera 6</a> launched in <b>January 1969</b> just 5 days apart from eachother.</p>
            <p>They both lasted just under 1 hour in the Venusian atmosphere, but didn't come close to reaching the surface (about 26km and 11km respectively).</p>
            <p>These probes carried more scientific instruments, including a thermometer recording a temperature of 320°C (it will get even hotter when we reach the surface!).</p>
            <p className='acolade'>1st temperature readings from another planet.</p>
        </div>

        <div className='blog-subsection' id='section6'>
            <h3 className='subgroup-title'>Venera 7 & 8</h3>
            <p><a href='https://en.wikipedia.org/wiki/Venera_7' target='_blank'>Venera 7</a> was launched in <b>August 1970</b>, and made <b>the first ever soft landing on another planet!!!</b> </p>
            <p>Several adjustments were made to the spacecraft design allowing it survive inside the intense Venusian atmosphere. Including a parachute to enable a soft landing. The parachute opened at 60km above the
                surface, but 6 minutes later the parachute melted sending the probe into a dramatic uncontrolled freefall, striking the surface at about 60km/h. The probe survived <b>23 minutes</b> on the surface
                before its batteries expired. The probe recorded an <b>insane surface temperature of 475°C</b>!!</p>
            <p><a href='https://en.wikipedia.org/wiki/Venera_8' target='_blank'>Venera 8</a> was launched in <b>March 1972</b>, verifying the temperature readings and atmospheric data Venera 7 recorded was valid.
                The on-board gamma ray spectrometer measured the uranium/thorium/potassium ratio of the surface rock, indicating it
                was <b>similar</b> to <a href='https://en.wikipedia.org/wiki/Alkali_basalt' target='_blank'>Alkali basalt</a>, a volcanic rock usually found in oceanic and continental areas associated with volcanic activity.</p>
            <p className='acolade'>1st soft landing on another planet.</p>
        </div>

        <div className='blog-subsection' id='section7'>
            <h3 className='subgroup-title'>Venera 9</h3>
            <p>Launched in <b>June 1975</b>, <a href='https://en.wikipedia.org/wiki/Venera_9' target='_blank'>Venera 9</a> successfully landed and became the first human-made probe to take <b>a picture from another planet!!!!</b></p>
            <p>The engineers made many adjustments to the spacecraft design, most notably a camera, also liquid cooling to help withstand the extreme surface temperatures, and also removing the parachutes
                favoring a hard landing instead of a soft landing. The probe lasted for <b>53 minutes</b> before succumbing to the extreme surface temperatures. This was a huge improvement and allowed much more time
                to collect data and obviously take a photograph! The lander measured a light level of <a href='https://www.infinity-energy.co.uk/led-lighting/what-does-lux-mean/' target='_blank'>14,000 lux</a> similar to that of Earth in full daylight but no direct sunshine.</p>
            <p>The image revealed a <b>rocky uneven surface with <a href='https://www.bgs.ac.uk/discovering-geology/geological-processes/weathering/' target='_blank'>weatherd rocks</a></b> and our <b>first glimpse of the hazy Venusian sky</b>.</p>
            <p className='acolade'>1st picture from another planet.</p>
            <picture className="img">
                <img className='larger-image' src="https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x248_crop_center-center_82_line/venus-surface-venera-9.jpg.webp" title='' />
                <p className='external-link-container'>1st ever picture of the Venusian surface - [<a href="https://en.wikipedia.org/wiki/Venera">Source of image</a>]</p>
            </picture>
        </div>

        <div className='blog-subsection' id='section8'>
            <h3 className='subgroup-title'>Venera 10</h3>
            <p>Launched in <b>June 1975</b>, <a href='https://en.wikipedia.org/wiki/Venera_10' target='_blank'>Venera 10</a> landed 2200km from Venera 9 between <a href='https://en.wikipedia.org/wiki/Beta_Regio'>Beta Regio</a> and <a href='https://wenamethestars.inkleby.com/feature/2608' target='_blank'>Hyndla Regio</a>. It took another amazing photograph of the Venusian surface.</p>
            <picture className="img">
                <img className='larger-image' src="https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x492_crop_center-center_82_line/venus-surface-venera-10.jpg.webp" title='' />
                <p className='external-link-container'>2nd ever picture of the Venusian surface - [<a href="http://mentallandscape.com/V_Cameras.htm">Source of image</a>]</p>
            </picture>
            <p>Venera 10 captured an even more insane photograph <b>whilst descending through the Venusian atmosphere</b>, revealing huge <b>lava rocks</b> and a <b>vast landscape of spooky unexplored terrain</b>.
                This little photograph ignities my curiousity every time I see it. Not only is it an engineering marvel that these cameras actually worked, but the fact that these <b>tiny 64kp images</b> were
                transmitted back to Earth for you and me to gaze at through our computer screens 40 years later - such otherworldly discoveries within an photograph containing 750x less
                data than a photograph on your average modern-day smartphone. A profound example of quality over quantity.</p>
            <picture className="img">
                <img width="600" height="200" src={MEDIA.venera_falling_through_venus_atmosphere} alt='Venus landscape' />
                <p className='external-link-container'>[<a href="http://planetimages.blogspot.com/2014/">Source of image</a>]</p>
            </picture>
        </div>
        
        <div className='blog-subsection' id='section9'>
            <h3 className='subgroup-title'>Venera 11 & 12</h3>
            <p><a href='https://en.wikipedia.org/wiki/Venera_11' target='_blank'>Venera 11</a> and <a href='https://en.wikipedia.org/wiki/Venera_12' target='_blank'>Venera 12</a> 
                (both launched in September 1978) successfully landed, but the <b>lens cap malfunctioned and wasn't released... ( ._.)</b>
            </p>
            <p>They operated for 95 and 110 minutes respectively, gathering lots of data regarding the temperature and atmospheric and soil chemical composition. 
                Evidence of thunder and lightning was also reported, the discovery of carbon monoxide at low altitudes. But no photos unfortunately :(
            </p>
            <picture className="img">
                <img width="250" height="200" className='dont-resize' src="https://nssdc.gsfc.nasa.gov/planetary/image/venera_11_descent.jpg" alt='Venera-11 descent module' />
                <p className='external-link-container'>Photo of Venera 11 - [<a href="http://mentallandscape.com/V_OKB1.htm">Source of image</a>]</p>
            </picture>
            <p className='acolade'>1st evidence of thunder on another planet.</p>
        </div>

        <div className='blog-subsection' id='section10'>
            <h3 className='subgroup-title'>Venera 13 & 14</h3>
            <p>Launched in <b>October 1981</b>, <a href='https://en.wikipedia.org/wiki/Venera_13' target='_blank'>Venera 13</a> sucesfully landed and became the first ever probe to capture a <b>colour photograph from another planet!!!</b></p>
            <p><b>Venera 13</b> landed just east of the eastern extension of an elevated region known as <a href='https://www.jpl.nasa.gov/images/pia00212-venus-phoebe-regio' target='_blank'>Phobe Regio</a>,
                observations from the photograph show an area <b>composed of bedrock surrounded by dark <a href='https://www.britannica.com/science/regolith' target='_blank'>regolith</a></b>. The probe also extended its
                drilling arm into the surface, picked up a bit of Venusian regolith and analysed it in a sealed chamber. \"<i>The results showed that the surface characteristics correspond to
                compacted ash material such as volcanic tuff.</i>\" [<a href='https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1981-106D-08' target='_blank'>NASA</a>]</p>
            <p>Venera 13 lasted an impressive <b>127 minutes</b> in the extremely harsh Venusian weather, the longest of all the Venera probes!</p>
            <picture className="img">
                <img className='larger-image' src="https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x491_crop_center-center_82_line/venus-surface-venera-13-a.jpg.webp" alt='Venera 13 front camera' />
                <p className='external-link-container'>[<a href="http://mentallandscape.com/C_CatalogVenus.htm">Source of image</a>]</p>
            </picture>
            <picture className="img">
                <img className='larger-image' src="https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x507_crop_center-center_82_line/venus-surface-venera-13-b.jpg.webp" alt='Venera 13 back camera' />
                <p className='external-link-container'>[<a href="http://mentallandscape.com/C_CatalogVenus.htm">Source of image</a>]</p>
            </picture>
            <picture className="img">
                <img className='larger-image' src="https://universemagazine.com/wp-content/uploads/2022/02/erkj8dfxuaesmzh.jpg" alt='Venera 13 front camera' />
                <p className='external-link-container'>[<a href="http://mentallandscape.com/C_CatalogVenus.htm">Source of image</a>]</p>
            </picture>
            <p><a href='https://en.wikipedia.org/wiki/Venera_14'>Venera 14</a> was launched 5 days later, landing 950km southwest of Venera 13, the landing area was <b>far more fractured</b> containing none
                of the regolith seen in Venera 13's pictures. Venera 14 lasted just 57 minutes, not as long as its predecesoor but long enough to capture some more amazing photographs of the alien world.</p>
            <picture className="img">
                <img className='larger-image' src="https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x496_crop_center-center_82_line/venus-surface-venera-14-camera-1.jpg.webp" alt='Venera 13 front camera' />
                <p className='external-link-container'>[<a href="http://mentallandscape.com/C_CatalogVenus.htm">Source of image</a>]</p>
            </picture>
            <picture className="img">
                <img className='larger-image' src="https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x507_crop_center-center_82_line/venus-surface-venera-13-b.jpg.webp" alt='Venera 13 back camera' />
                <p className='external-link-container'>[<a href="http://mentallandscape.com/C_CatalogVenus.htm">Source of image</a>]</p>
            </picture>
            <p>Venera 14 also became the <b>first ever probe to make an audio recording from another planet!!</b> 
                We still have access to this glorious <a href='https://www.youtube.com/watch?v=P3Ife6iBdsU&t=132'>three minute audio recording</a> which begins as it was still descending through the atmosphere. There were some fascinating things
                captured in the audio...</p>
            <ul>
                <li><b>[0:00 - 0:24]</b> - The sound of the lander descending through Venus's dense atmosphere</li>
                <li><b>[0:25]</b> - The lander hitting the ground</li>
                <li><b>[0:34]</b> - The lens cap removal hitting the ground</li>
                <li><b>[0:52 - 2:02]</b> - The drilling apparatus delving into the rocks beneath the lander</li>
                <li><b>[2:07]</b> - Soil being injected into chamber for analysis</li>
                <li><b>[2:07 - 3:00]</b> - lonely Venusian wind</li>
            </ul>
            <audio controls>
                <source src={MEDIA.venera_audio_recording} type='audio/wav' />
            </audio>
            <p>Take a minute to reflect on this. Billions of years of existence where nothing but the sound of wind, volcanic eruptions, and sulfuric acid rain existed, until one day from above, a machine lands and starts drilling...
                And now in today's digital era can listen to the audio from another planet.</p>
            <p><a href='https://airandspace.si.edu/exhibitions/exploring-the-planets/online/solar-system/venus/volcanism.cfm'>Volcanic eruptions on Venus</a> are a major force reshaping the landscape, ongoing as we speak. As a result there are differences in the types of erupted magma and the eruption rate
                lead to a wide variety of surface features, two of which we observed in the photographs. There are probably other surface types on Venus we don't even know exist.</p>
            <p> As of writing (2023) we have not returned to the surface of Venus since the spectacular success of Venera 14 in 1982. There are currently no plans to return to the surface of Venus.
                It remains conqurered by the Soviet Union.</p>
            <p className='acolade'>1st audio recording from another planet</p>
            <p className='acolade'>1st colour picture from another planet</p>
        </div>

        <div className='blog-subsection' id='section11'>
            <h3 className='subgroup-title'>Further mapping of Venus</h3>
            <p>There is a lot of great science that we can do without having to plunge our spacecrafts into the atmosphere of dangerous planets. 
                For example, radar imaging from the <a href='https://solarsystem.nasa.gov/missions/magellan/in-depth/' target='_blank'>Magellan mission</a>. 
                Magellan launched in 1991, and uses <a href="https://asf.alaska.edu/information/sar-information/what-is-sar/">SAR imaging</a>, which provides high resolution radar images for mapping the surface of nearby planets
            </p>
            <picture className="img">
                <img width="600" height="200" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Tessera_Terrain_on_Venus_gif.gif" alt='Outline of tessera terrain imposed on the GIS Map of Venus' />
                <p className='external-link-container'>The high topography <a href='https://en.wikipedia.org/wiki/Tessera_(Venus)' target='_blank'>Tessera terrain</a>, layered ontop of a GIS map of Venus - [<a href="https://www.gfd-dennou.org/library/wtp/welcome/venus.htm">Source of image</a>]</p>
            </picture>
            <picture className="img">
                <img width="600" height="200" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Aphrodite_Terra_on_Venus.jpg" alt='Aphrodite Terra, a complex terrain' />
                <p className='external-link-container'>Magellan radar image of the <a href='https://en.wikipedia.org/wiki/Aphrodite_Terra'>Aphrodite Terra</a> region, containing complex ridged terrain - [<a href="https://www.gfd-dennou.org/library/wtp/welcome/venus.htm">Source of image</a>]</p>
            </picture>
            <picture className="img">
                <img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/0/09/Alpha_Regio%2C_northern_part%2C_781-%2C663%2C-118.jpg" alt='Alpha Regio' />
                <p className='external-link-container'>Magellan radar image of the <a href='https://en.wikipedia.org/wiki/Alpha_Regio'>Alpha Regio</a> region, containing a ridged and fractured terrain - [<a href="https://www.gfd-dennou.org/library/wtp/welcome/venus.htm">Source of image</a>]</p>
            </picture>
            <picture className="img">
                <img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/4/49/PIA00215-cropped.jpg" alt='Volcanic Domes on Venus' />
                <p className='external-link-container'>Magellan radar image of <a href='https://en.wikipedia.org/wiki/Lava_dome'>Volcanic Domes</a> in the eastern edge of Alpha Region - [<a href="https://www.jpl.nasa.gov/images/pia00215-venus-alpha-regio">Source of image</a>]</p>
            </picture>
            <picture className="img">
                <img width="300" height="200" className='dont-resize' src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Akna_montes_PIA00250.jpg" alt='Northern part of the Akna Montes' />
                <p className='external-link-container'>Magellan radar image of the northern portion of the Akna Montes - [<a href="https://en.wikipedia.org/wiki/Akna_Montes">Source of image</a>]</p>
            </picture>
        </div>

        <div className='blog-subsection' id='section12'>
            <h3 className='subgroup-title'>Conclusion</h3>
            <p>Among all of the achievements made by space agencies from the 60s, 70s, 80s, 90s, 00s, 10s, and the current 20s, I am of the opinion that the exploration of Venus by the Soviet Union
                is still one of humanity's greatest scientific achievements.</p>
            <p>The Venera project is a real testament to perseverance, hard work, experimentation, teamwork, collaboration, and an incredible use of primitive technology given this happened
                in the 60s/70s/80s. It gathered data from the hottest planet in the entire solar system (475°C), <b>a lonely world that once only knew the sound of wind and rain and volcanoes
                until one day a strange machine landed and started taking pictures and drilling holes</b>. It's not sci-fi, it's real, and I believe the Russians deserve more love and respect for
                their engineering and discoveries. This precious data remains one of the most profound realizations of extreme environments on other planets - one of only 6 worlds we have successfully
                placed landers on (Venus (1966), our Moon (1969), Mars (1976), Titan (2004), P67 comet (2015)).</p>
            <p>Whilst it's entirely speculative, Venus may once have been Earth-like. Perhaps 300 million years ago Venus could have had similar conditions to current Earth. Perhaps the fate of future
                Earth is similar to that of Venus's scorching hellscape - covered in volcanos, inconceivably high surface temperatures, and an almost impenetrable atmosphere polluted with
                carbon dioxide - in other words, <b>climate change</b>.</p>
            <picture className="img">
                <img width="600" height="200" src="https://universemagazine.com/wp-content/uploads/2020/12/800px-PIA23791-Venus-NewlyProcessedView-20200608.jpg" alt='Aphrodite Terra, a complex terrain' />
                <p className='external-link-container'>[<a href="https://photojournal.jpl.nasa.gov/catalog/PIA23791">Source of image</a>]</p>
            </picture>
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
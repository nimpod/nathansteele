import React  from 'react';

const IMAGES = {
    Enceladus: require('./photos/Enceladus.jpg'),
    Encealdus_geysers: require('./photos/Enceladus_geysers.jpg'),
    an_enceladus_rise: require('./photos/an_Enceladus_rise.png'),
    huygens_lander_descent: require('./photos/huygens_lander_descent.jpg'),
    huygens_lander_Titan_surface: require('./photos/huygens_lander_Titan_surface.jpg'),
    jwst_photo_of_Titan: require('./photos/jwst_photo_of_Titan.webp'),

    // diagrams...
    titan_map: require('./diagrams/Titan_map.jpg'),
    titan_map2: require('./diagrams/Titan_map2.jpg'),
    cassini_huygens_mission_summary: require('./diagrams/cassini_huygens_mission_summary.png'),
}

export const post = () => (
    <div>
        <div className='intro-text blog-subsection' id='section1'>
            <h3 className='subgroup-title'>Intro</h3>
            <p>NASA's space-research mission <a href='https://solarsystem.nasa.gov/missions/cassini/overview/'>Cassini-Huygens</a> (named after Italian Astronmer <a href='https://en.wikipedia.org/wiki/Giovanni_Domenico_Cassini'>Giovanni Cassini</a>, and Dutch
                Astronomer <a href='https://en.wikipedia.org/wiki/Christiaan_Huygens'>Christiaan Huygens</a>) embarked on an epic 7 year voyage to Saturn.
                It was launched in <b>1997</b>, arrived 7 years later, and remained active for another 13 years, with the mission ending in dramatic fashion in <b>2017</b>.
                The spacecraft made many profound discoveries, completely changing our understanding of solar system formation, planet evolution, moons, etc...
            </p>
            <picture className="img">
                <img className='larger-image' width="600" height="400" src={IMAGES.cassini_huygens_mission_summary} alt='Infographic of Cassini-Huygens 7 year journey from Earth to Saturn' />
            </picture>
        </div>
        <div className='blog-subsection' id='section2'>
            <h3 className='subgroup-title'>Huygens Titan lander</h3>
            <p>The 'Huygens' part of the mission was the lander, which touched down on <a href='https://en.wikipedia.org/wiki/Titan_(moon)'>Titan</a> (the largest of Saturn's 83 moons) on July 1st 2004, shortly after the spacecraft arrived at Saturn.</p>
            <p>Remarkably, we have <a href='https://www.youtube.com/watch?v=svmGxFaGILY'>video footage</a> of the lander descending for onto the surface of Titan for 2h 27m!!!! The image shown below is a screenshot of that slow descent.</p>
            <picture className="img">
                <img width="500" height="400" src={IMAGES.huygens_lander_descent} alt='Screenshot of video footage showing Huygens descending' />
            </picture>
            <p>The Huygens probe landed just off the easternmost tip of a region called Adiri. Adiri is packed with lakes and islands.</p>
            <p>When the spacecraft landed, it felt the surface as similar to a slightly more absorbent, sludgy mud texture... This is a photograph Huygens took when it landed!!!!</p>
            <picture className="img">
                <img width="200" height="100" className='dont-resize' alt='Surface of Titan' src={IMAGES.huygens_lander_Titan_surface} />
            </picture>
            <h5 className='subgroup-title'>What is it like on Titan?</h5>
            <p><b>Extremely cold</b> - the Titanian lakes are estimated to be around <b>-179°C</b>...</p> 
            <p>These lakes are <b>not</b> comprised of liquid water like on Earth, but rather <b>hydrocarbon fluids (i.e. lakes of liquid methane/ethane!)</b> It's estimated that Titan contains about 300 times the volume
                of Earth's proven oil reserves.</p>
            <p>It also <b>rains liquid methane</b>. Organic compounds are produced by ultraviolet radiation in the atmosphere, and the rain deposits all these compounds onto the surface forming the lakes. There is no reason
                why complex organic chemistry that gives rise to bacterial life could not emerge in this atmosphere.</p>
            <p>Titan is thought to be a prebiotic environment rich in complex organic chemistry. It has been suggested that life could exist in the lakes of liquid methane on Titan, just as organisms on Earth live in water. 
                Such organisms would inhale H2 in place of O2, metabolize it with acetylene instead of glucose, and exhale methane instead of carbon dioxide.</p>
            <p>Titan is also home to cryovolcanoes, which also contribute to adding methane to the atmosphere.</p>
            <p>On Titan, the little sunlight it gets allows only about one centimeter of evaporation per year (versus one meter of water on Earth), but the atmosphere can hold the equivalent of about 10 meters of liquid before rain 
                forms (versus about 2 cm on Earth). So Titan's weather is expected to feature downpours of several meters causing flash floods, interspersed by decades or centuries of drought (whereas typical weather on Earth
                includes a little rain most weeks). Cassini has observed equatorial rainstorms only once since 2004. Despite this, a number of long-standing tropical hydrocarbon lakes were unexpectedly discovered in 2012.
                This may explain the reason for the strange reappearance and disappearance of small islands which Cassini saw happening.</p>
            <p>Huygens Titan lander remains the most distant landing of any human made spacecraft EVER.</p>
            <picture className="img">
                <img width="600" height="400" src={IMAGES.titan_map} alt="Map of Titan" />
            </picture>
            <h5 className='subgroup-title'>Returning to Titan?</h5>
            <p>There has been a mission proposed called the <a href='https://www.nasa.gov/content/titan-submarine-exploring-the-depths-of-kraken/'>Titan Mare Explorer</a> to send a submarine-like lander to investigate these mysterious Titanian lakes in more detail.</p>
            <p>The lake of particular interest is the <a href='https://en.wikipedia.org/wiki/Kraken_Mare'>Kraken Mare</a>.</p>
            <picture className="img">
                <img width="300" height="400" className='dont-resize' src={IMAGES.jwst_photo_of_Titan} alt='Titan imaged by the James Webb Space Telescope' />
            </picture>
            <h5 className='subgroup-title'>The far future of Titan</h5> 
            <p>Unfortunately it's probably too cold on the surface for life as we know it to emerge. Titan-specific life could potentially evolve to work with the cold temperatures on Titan, but it's an unknown...</p>
            <p>However, what about when the Sun expands into a red giant? Suddenly, Titan will start receiving much more heat and won't be as cold!</p>
            <p>Temperatures could potentially be high enough to melt the ice mountains, allowing liquid water to flow into the liquid methane lakes which would of evaporated due to heat. The building blocks for DNA, RNA, proteins and cells could form. These chemical reactions could one day give rise to unique complex life.</p>\
            <p>In other words, Titan will become an Earth-like oasis when the Sun is dying. Our Earth will be long gone, but perhaps Titan will be the place to be when it goes supernova.</p>
            <p>This Earth-like period could last anywhere between 100,000,000 - 500,000,000 years. Possibly not long enough for intelligent life to emerge, but long enough for some life to develop.</p>
            <picture className="img">
                <img width="600" height="400" src={IMAGES.titan_map2} alt='Map of Titan' />
            </picture>
        </div>
        <div className='blog-subsection' id='section3'>
            <h3 className='subgroup-title'>Enceladus</h3>
            <p>The Cassini spacecraft continued exploring Saturn and its many fascinating moons, one of them being <a href='https://en.wikipedia.org/wiki/Enceladus'>Enceladus</a>, a majestic/mysterious/fascinating/terrifying world of unknowns.</p>
            <p>Whilst orbiting the icy moon came the spacecraft came extremely close to <a href='https://phys.org/news/2015-04-icy-tendrils-saturn-source.html'>geyser tendrils</a> bursting jets of icy particles from Enceladus's south polar region at speeds of 1,360mph.</p>
            <p>The geysers shoot out water vapor, other volatiles, and solid material, including sodium chloride crystals and ice particles, into space, totaling approximately 200 kilograms (440 lb) per second. This indicates geothermal energy.</p>
            <p>The image shown below showing those geyser tendrils is a REAL IMAGE!!!!!</p>
            <picture className="img">
                <img width="600" height="400" src={IMAGES.Encealdus_geysers} alt="Photograph of geysers on Enceladus spewing out liquid water" />
            </picture>
            <p>In 2014 Cassini confirmed the existence of a deep, warm, sub-surface ocean making it a prime suspect for life elsewhere in our Solar System.</p>\
            <p>Enceladus's ocean is <b>10-30km deep</b>, whilst Earth's average ocean depth is a mere 3.7km... This is MAD considering how much of Earth's oceans are a complete mystery to us, and we live on this damn world!</p>
            <p>In order for the liquid water to be useful, and be a source of life creating stuff, it needs to react with a rocky surface. Luckily, Enceladus has a rocky core, meaning geothermal reactions like the ones in Earth's oceans are likely happening as we speak.</p>
            <p>This makes Enceladus the most likely candidate for extra terrestrial life in our solar system. Astrobiologists are almost certain extremophiles could develop in Enceledus's ocean.</p>
            <picture className="img">
                <img width="600" height="400" src={IMAGES.Enceladus} alt="https://solarsystem.nasa.gov/missions/cassini/science/enceladus/" />
            </picture>
        </div>
        <div className='blog-subsection' id='section4'>
            <h3 className='subgroup-title'>The end of Cassini's mission</h3>
            <p>Cassini's main missions was to observe and collect data about Saturn and it's moons. It was doing that for <b>14 years</b>, capturing thousands of stunning photographs of Saturn and it's moons and has travelled over 1 billion miles since launch.</p>
            <p>
                Since November 30th 2016, Cassini was diving in and out of Saturn's rings once every week, collecting data and photographing the 'inside' of the rings. No man-made spacecraft had ever attempted
                this before, and we got some <a href="https://www.youtube.com/watch?v=ROJOnOPHFvo">incredible photos</a> from this final phase of the mission. NASA have also provided us with
                <a href="https://saturn.jpl.nasa.gov/galleries/raw-images/">thousands of raw images</a> from Cassini.
            </p>
            <p>Due to the spacecraft being <b>low on rocket fuel</b>, NASA decided Cassini must end its mission soon. They decided to send Cassini into Saturn's atmosphere, destroying the spacecraft in the process. This method was chosen because...</p>
            <ul>
                <li>1) It is imperative to ensure protection and prevent biological contamination to any of the moons of Saturn thought to offer potential habitability.</li>
                <li>2) It's a unique opportunity to gather data about Saturn's gravity and magnetic fields.</li>
                <li>3) As I said, Cassini was low on rocket fuel.</li>
            </ul>
            <p>
                When Cassini began it's grand finale and took its first dive into Saturn's atmosphere, it was 1900 miles above the top of Saturn's clouds, and was able to transmit stunning 
                images of Saturn's atmosphere. See more photos of <a href='https://solarsystem.nasa.gov/news/13120/cassinis-final-images/'>Cassini's final moments here</a>.
            </p>
            <p>Cassini officially descended into Saturn on September 15th 2017.</p> 
            <picture className="img">
                <img width="400" height="200" src={IMAGES.an_enceladus_rise} alt="Final image from Cassini spacecraft, you can see Enceladus setting behind Saturn" />
            </picture>
            <p>
                I don't think enough people know about the Cassini-Huygens mission and it's discoveries, and there's a lot more that can be talked about, but unfortunately 'this margin is too small'
                to contain my ramblings. It will be regarded as one of the most successful space-related missions ever... Thanks for reading 😊
            </p>
        </div>
        <div className='blog-subsection references-text' id='section5'>
            <h3 className='subgroup-title'>References</h3>
            <ul>
                <li><a href='https://www.youtube.com/watch?v=xrGAQCq9BMU'>https://www.youtube.com/watch?v=xrGAQCq9BMU</a></li>
                <li><a href='https://www.youtube.com/watch?v=CDGrhJ4kjFk'>https://www.youtube.com/watch?v=CDGrhJ4kjFk</a></li>
                <li><a href='https://www.youtube.com/watch?v=G0g4L6a6Ns4'>https://www.youtube.com/watch?v=G0g4L6a6Ns4</a></li>
                <li><a href='https://www.youtube.com/watch?v=_9GY6njkMI8&t=0s'>https://www.youtube.com/watch?v=_9GY6njkMI8&t=0s</a></li>
            </ul>
        </div>
    </div>
)
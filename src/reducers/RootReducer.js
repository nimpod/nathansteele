

const initState = {
    posts: [
        {
            id: "1",
            date: "27 Apr 2017",
            title: "Cassini-Huygens",
            content: "\
                <div class='intro-text blog-subsection' id='section1'> \
                    <h3 class='subgroup-title'>Intro</h3> \
                    <p>NASA's space-research mission <a href='https://solarsystem.nasa.gov/missions/cassini/overview/'>Cassini-Huygens</a> (named after Italian Astronmer <a herf='https://en.wikipedia.org/wiki/Giovanni_Domenico_Cassini'>Giovanni Cassini</a>, and Dutch \
                       Astronomer <a href='https://en.wikipedia.org/wiki/Christiaan_Huygens'>Christiaan Huygens</a>) embarked on an epic 7 year voyage to Saturn. \
                       It was launched in <b>1997</b>, arrived 7 years later, and remained active for another 13 years, with the mission ending in dramatic fashion in <b>2017</b>.\
                       The spacecraft made many profound discoveries, completely changing our understanding of solar system formation, planet evolution, moons, etc... \
                    </p> \
                    <picture class=\"img\">\
                        <img width=600 height=400 src=\"https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/52866f89042123.5de8954d6880a.png\" title='Infographic of Cassini-Huygens 7 year journey from Earth to Saturn' />\
                    </picture>\
                </div> \
                <div class='blog-subsection' id='section2'> \
                    <h3 class='subgroup-title'>Huygens Titan lander</h3>\
                    <p>The 'Huygens' part of the mission was the lander, which touched down on <a href='https://en.wikipedia.org/wiki/Titan_(moon)'>Titan</a> (the largest of Saturn's 83 moons) on July 1st 2004, shortly after the spacecraft arrived at Saturn.</p>\
                    <p>Remarkably, we have <a href='https://www.youtube.com/watch?v=svmGxFaGILY'>video footage</a> of the lander descending for onto the surface of Titan for 2h 27m!!!! The image shown below is a screenshot of that slow descent.</p> \
                    <picture class=\"img\">\
                        <img width=500 height=400 src=\"https://i.ytimg.com/vi/svmGxFaGILY/maxresdefault.jpg\" title='Screenshot of video footage showing Huygens descending' />\
                    </picture>\
                    <p>The Huygens probe landed just off the easternmost tip of a region called Adiri. Adiri is packed with lakes and islands.</p>\
                    <p>When the spacecraft landed, it felt the surface as similar to a slightly more absorbent, sludgy mud texture... This is a photograph Huygens took when it landed!!!!</p>\
                    <picture class=\"img\">\
                        <img width=200 height=100 class='dont-resize' src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Huygens_surface_color_sr.jpg/200px-Huygens_surface_color_sr.jpg\" title='Photo taken of Titan surface' />\
                    </picture>\
                    <h5 class='subgroup-title'>What is it like on Titan?</h5> \
                    <p><b>Extremely cold</b> - the Titanian lakes are estimated to be around <b>-179°C</b>...</p> \
                    <p>These lakes are <b>not</b> comprised of liquid water like on Earth, but rather <b>hydrocarbon fluids (i.e. lakes of liquid methane/ethane!)</b> It's estimated that Titan contains about 300 times the volume of Earth's proven oil reserves.</p>\
                    <p>It also <b>rains liquid methane</b>. Organic compounds are produced by ultraviolet radiation in the atmosphere, and the rain deposits all these compounds onto the surface forming the lakes. There is no reason why complex organic chemistry that gives rise to bacterial life could not emerge in this atmosphere.</p>\
                    <p>Titan is thought to be a prebiotic environment rich in complex organic chemistry. It has been suggested that life could exist in the lakes of liquid methane on Titan, just as organisms on Earth live in water. Such organisms would inhale H2 in place of O2, metabolize it with acetylene instead of glucose, and exhale methane instead of carbon dioxide.</p>\
                    <p>Titan is also home to cryovolcanoes, which also contribute to adding methane to the atmosphere.</p>\
                    <p>On Titan, the little sunlight it gets allows only about one centimeter of evaporation per year (versus one meter of water on Earth), but the atmosphere can hold the equivalent of about 10 meters of liquid before rain forms (versus about 2 cm on Earth). So Titan's weather is expected to feature downpours of several meters causing flash floods, interspersed by decades or centuries of drought (whereas typical weather on Earth includes a little rain most weeks). Cassini has observed equatorial rainstorms only once since 2004. Despite this, a number of long-standing tropical hydrocarbon lakes were unexpectedly discovered in 2012. This may explain the reason for the strange reappearance and disappearance of small islands which Cassini saw happening.</p>\
                    <p>Huygens Titan lander remains the most distant landing of any human made spacecraft EVER.</p>\
                    <picture class=\"img\">\
                        <img width=600 height=400 src=\"https://aasnova.wpenginepowered.com/wp-content/uploads/2018/05/fig1-7.jpg\" alt=\"Map of Titan\" />\
                    </picture>\
                    <h5 class='subgroup-title'>Returning to Titan?</h5> \
                    <p>There has been a mission proposed called the <a href='https://www.nasa.gov/content/titan-submarine-exploring-the-depths-of-kraken/'>Titan Mare Explorer</a> to send a submarine-like lander to investigate these mysterious Titanian lakes in more detail.</p> \
                    <p>The lake of particular interest is the <a href='https://en.wikipedia.org/wiki/Kraken_Mare'>Kraken Mare</a>.</p> \
                    <picture class=\"img\">\
                        <img width=300 height=400 class='dont-resize' src=\"https://imageio.forbes.com/specials-images/imageserve/638a3d6abc51bdee9320296e/0x0.jpg?format=jpg&width=1200\" title='Photo of Titan taken by the James Webb Space Telescope' />\
                    </picture>\
                    <h5 class='subgroup-title'>The far future of Titan</h5> \
                    <p>Unfortunately it's probably too cold on the surface for life as we know it to emerge. Titan-specific life could potentially evolve to work with the cold temperatures on Titan, but it's an unknown...</p>\
                    <p>However, what about when the Sun expands into a red giant? Suddenly, Titan will start receiving much more heat and won't be as cold!</p>\
                    <p>Temperatures could potentially be high enough to melt the ice mountains, allowing liquid water to flow into the liquid methane lakes which would of evaporated due to heat. The building blocks for DNA, RNA, proteins and cells could form. These chemical reactions could one day give rise to unique complex life.</p>\
                    <p>In other words, Titan will become an Earth-like oasis when the Sun is dying. Our Earth will be long gone, but perhaps Titan will be the place to be when it goes supernova.</p>\
                    <p>This Earth-like period could last anywhere between 100,000,000 - 500,000,000 years. Possibly not long enough for intelligent life to emerge, but long enough for some life to develop.</p>\
                    <picture class=\"img\">\
                        <img width=600 height=400 src=\"https://cdn.mos.cms.futurecdn.net/dpNszjv28a6t8x3krC7JXT.jpg\" title='Map of Titan' />\
                    </picture>\
                </div> \
                    <div class='blog-subsection' id='section3'> \
                        <h3 class='subgroup-title'>Enceladus</h3>\
                        <p>The Cassini spacecraft continued exploring Saturn and its many fascinating moons, one of them being <a href='https://en.wikipedia.org/wiki/Enceladus'>Enceladus</a>, a majestic/mysterious/fascinating/terrifying world of unknowns.</p>\
                        <p>Whilst orbiting the icy moon came the spacecraft came extremely close to <a href='https://phys.org/news/2015-04-icy-tendrils-saturn-source.html'>geyser tendrils</a> bursting jets of icy particles from Enceladus’s south polar region at speeds of 1,360mph.</p>\
                        <p>The geysers shoot out water vapor, other volatiles, and solid material, including sodium chloride crystals and ice particles, into space, totaling approximately 200 kilograms (440 lb) per second. This indicates geothermal energy.</p>\
                        <p>The image shown below showing those geyser tendrils is a REAL IMAGE!!!!!</p> \
                        <picture class=\"img\">\
                            <img width=600 height=400 src=\"https://solarsystem.nasa.gov/system/news_items/main_images/13148_Enceladus_plumes-16x9-rotated-180.jpg\" title=\"Photograph of geysers on Enceladus spewing out liquid water\" />\
                        </picture>\
                        <p>In 2014 Cassini confirmed the existence of a deep, warm, sub-surface ocean making it a prime suspect for life elsewhere in our Solar System.</p>\
                        <p>Enceladus’s ocean is <b>10-30km deep</b>, whilst Earth’s average ocean depth is a mere 3.7km... This is MAD considering how much of Earth's oceans are a complete mystery to us, and we live on this damn world!</p>\
                        <p>In order for the liquid water to be useful, and be a source of life creating stuff, it needs to react with a rocky surface. Luckily, Enceladus has a rocky core, meaning geothermal reactions like the ones in Earth's oceans are likely happening as we speak.</p>\
                        <p>This makes Enceladus the most likely candidate for extra terrestrial life in our solar system. Astrobiologists are almost certain extremophiles could develop in Enceledus's ocean.</p>\
                        <picture class=\"img\">\
                            <img width=600 height=400 src=\"https://solarsystem.nasa.gov/system/content_pages/main_images/1534_50_Enceladus_768.jpg\" alt=\"https://solarsystem.nasa.gov/missions/cassini/science/enceladus/\" />\
                        </picture>\
                    </div> \
                    <div class='blog-subsection' id='section4'> \
                        <h3 class='subgroup-title'>The end of Cassini's mission</h3>\
                        <p>Cassini’s main missions was to observe and collect data about Saturn and it's moons. It was doing that for <b>14 years</b>, capturing thousands of stunning photographs of Saturn and it’s moons and has travelled over 1 billion miles since launch.</p>\
                        <p>\
                            Since November 30th 2016, Cassini was diving in and out of Saturn’s rings once every week, collecting data and photographing the ‘inside’ of the rings. No man-made spacecraft had ever attempted \
                            this before, and we got some <a href=\"https://www.youtube.com/watch?v=ROJOnOPHFvo\">incredible photos</a> from this final phase of the mission. NASA have also provided us with \
                            <a href=\"https://saturn.jpl.nasa.gov/galleries/raw-images/\">thousands of raw images</a> from Cassini.\
                        </p>\
                        <p>Due to the spacecraft being <b>low on rocket fuel</b>, NASA decided Cassini must end its mission soon. They decided to send Cassini into Saturn’s atmosphere, destroying the spacecraft in the process. This method was chosen because...</p> \
                        <ul>\
                            <li>1) It is imperative to ensure protection and prevent biological contamination to any of the moons of Saturn thought to offer potential habitability.</li> \
                            <li>2) It's a unique opportunity to gather data about Saturn's gravity and magnetic fields.</li> \
                            <li>3) As I said, Cassini was low on rocket fuel.</li> \
                        </ul> \
                        <p>\
                            When Cassini began it’s grand finale and took its first dive into Saturn’s atmosphere, it was 1900 miles above the top of Saturn’s clouds, and was able to transmit stunning \
                            images of Saturn’s atmosphere. See more photos of <a href='https://solarsystem.nasa.gov/news/13120/cassinis-final-images/'>Cassini's final moments here</a>.\
                        </p>\
                        <p>Cassini officially descended into Saturn on September 15th 2017.</p> \
                        <picture class=\"img\">\
                            <img width=400 height=200 src=\"https://solarsystem.nasa.gov/internal_resources/1910/\" alt=\"Final image from Cassini spacecraft, you can see Enceladus setting behind Saturn\" />\
                        </picture>\
                        <p>\
                            I don’t think enough people know about the Cassini-Huygens mission and it's discoveries, and there’s a lot more that can be talked about, but unfortunately 'this margin is too small' \
                            to contain my ramblings. It will be regarded as one of the most successful space-related missions ever... Thanks for reading 😊 \
                        </p>\
                    </div> \
                    <div class='blog-subsection references-text' id='section5'> \
                        <h3 class='subgroup-title'>References</h3> \
                        <ul>\
                            <li><a href='https://www.youtube.com/watch?v=xrGAQCq9BMU'>https://www.youtube.com/watch?v=xrGAQCq9BMU</a></li> \
                            <li><a href='https://www.youtube.com/watch?v=CDGrhJ4kjFk'>https://www.youtube.com/watch?v=CDGrhJ4kjFk</a></li> \
                            <li><a href='https://www.youtube.com/watch?v=G0g4L6a6Ns4'>https://www.youtube.com/watch?v=G0g4L6a6Ns4</a></li> \
                            <li><a href='https://www.youtube.com/watch?v=_9GY6njkMI8&t=0s'>https://www.youtube.com/watch?v=_9GY6njkMI8&t=0s</a></li> \
                       </ul>\
                    </div>",
            tags: ["Astronomy"]
        },
        {
            id: "2",
            date: "08 Sep 2016",
            title: "Why the moon landing was not a hoax",
            content: "\
                    <div class='intro-text blog-subsection'> \
                        <h3 class='subgroup-title'>Intro</h3> \
                        <p>This is a quick blog post to vent my frustrations regarding anti-moon landing people.</p>\
                        <p>There are <b>several pieces of evidence</b> that support the moon landings...</p>\
                        <ul>\
                            <li>1.1) The Lunar Laser Ranging Experiment</li>\
                            <li>1.2) Lunar rocks</li> \
                            <li>1.3) We can see it</li> \
                            <li>1.4) Limitations of camreas in the 60's</li> \
                            <li>1.5) Worldwide research and publicity</li> \
                            <li>1.6) Conspiracy theorists are crazy</li> \
                        </ul>\
                        <p>And some <b>typical arguments</b> that are raised...</p> \
                        <ul>\
                            <li>2.1) Where are the stars?</li>\
                            <li>2.2) But the flag is waving?</li> \
                            <li>2.3) But they passed through the Van Allen Radiation Belt</li>\
                            <li>2.4) Who filmed Armstrong's first steps then?</li> \
                            <li>2.5) But we haven't we been back for 40 years?!</li> \
                        </ul>\
                    </div> \
                    <div class='blog-subsection' id='several-pieces-of-evidence'> \
                        <h3 class='subgroup-title'>1.1) The Lunar Laser Ranging Experiment</h3> \
                            <p>Reflectors were placed on the moon at just the right angle so that a laser can be fired from earth to the moon, which then bounces off these reflectors and back to the earth at the exact point it left.\
                            <p>This is done with pin-point accuracy and is still in operation today. Many countries including Russia use the reflectors placed on the moon to conduct their own experiments.</p> \
                            <p>This was part of The <a href='https://en.wikipedia.org/wiki/Lunar_Laser_Ranging_experiment'>Lunar Laser Ranging Experiment</a></p> \
                            <picture class=\"img\">\
                                <img width=400 height=200 src=\"https://media.springernature.com/lw685/springer-static/image/art%3A10.12942%2Flrr-2010-7/MediaObjects/41114_2016_9126_Fig1.jpg\" alt=\"https://media.springernature.com/lw685/springer-static/image/art%3A10.12942%2Flrr-2010-7/MediaObjects/41114_2016_9126_Fig1.jpg\" />\
                            </picture>\
                        <h3 class='subgroup-title'>1.2) Lunar rocks</h5> \
                            <p>Buzz Aldrin collected 16 <a href='https://en.wikipedia.org/wiki/Moon_rock'>Moon Rocks</a> and brought them back to Earth to examine. Once they were returned, there was still 16 rocks, and they were all legit.</p> \
                            <p>Many other missions have brought Moon rocks and have all been similar to Apollo 11’s rocks and are all carbon dated and documented to their landing dates.</p> \
                            <p>We have brought back 350kg lunar rock on the Apollo missions.</p> \
                            <p>The rocks we've brought back date to about 3,900 million years old.</p> \
                            <p>The oldest natural glass on earth that has been found pales in comparison at just 160 million years. This is due to the atmospheric decay of glass on earth.</p> \
                            <p>The moon has no atmosphere, so glass does not decay the same way.</p>  \
                            <p>These lunar glass balls have been tested throughout the world by numerous scientists.</p> \
                            <picture class=\"img\">\
                                <img width=200 height=100 src=\"https://cdn.britannica.com/26/76826-050-D9D81830/samples-breccia-Basalt-astronauts-sample-Moon-Apollo-1971.jpg\" alt=\"https://cdn.britannica.com/26/76826-050-D9D81830/samples-breccia-Basalt-astronauts-sample-Moon-Apollo-1971.jpg\" />\
                            </picture>\
                        <h3 class='subgroup-title'>1.3) We can see it</h3> \
                            <p>The Apollo landing sites and lunar rover trails from NASA's Lunar Reconnaissance Orbiter (LRO), about 21km above the surface.</p> \
                            <picture class=\"img\">\
                                <img width=200 height=100 src=\"https://www.gannett-cdn.com/presto/2019/06/06/PPHX/1fa11563-b89c-4e14-8f50-9d9c951d2b95-Apollo_17_landing_site_showing_American_flag.png?width=509&height=509&fit=crop&format=pjpg&auto=webp\" alt=\"Photographic evidence of rovers\" />\
                            </picture>\
                        <h3 class='subgroup-title'>1.4) Limitations of camreas in the 60's</h5> \
                            <p>Cameras and films in 1969 were very different to present day.</p> \
                            <p><a href='https://www.youtube.com/watch?v=_loUDS4c3Cs&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=123'>A very informative video</a> goes into a lot of detail</p> \
                        <h3 class='subgroup-title'>1.5) Worldwide research and publicity</h3> \
                            <p>In order for NASA to fake The Moon Landing, around 400,000 people would of had to keep it a secret, for almost 50 YEARS... really? </p>\
                            <p>You think 400,000 scientific researchers around the world are gonna create an incredibly elaborate 'movie set' just so they can say they went to The Moon?</p>\
                        <h3 class='subgroup-title'>1.6) Conspiracy theorists are crazy</h3> \
                            <p>The person who created this ridiculous conspiracy theory is this drug addict called Bill Kaysing.</p>\
                            <p>He was always having illucinations about travelling to The moon and being humiliated in front of people in his dreams.</p>\
                            <p>He then then spread the rumour around to the public.</p>\
                    </div> \
                    <div class='blog-subsection' id='typical-questions'> \
                        <h3 class='subgroup-title'>2.1) Where are the stars?</h3>\
                            <p>One of the claims made to support the hoax theory is that there were no stars pictured from the surface of the Moon.</p>\
                            <p>The true reason you can’t see the stars in photos and videos of Moon is not that the stars aren’t there, but rather because of the omnipresent sunlight and the exposure limits of cameras.</p>\
                            <p>When these photos were taken, it was full daylight on the Moon. Because there is only an extremely thin atmosphere on the Moon,the sky appears black.</p>\
                            <p>In addition, sunlight at the Moon’s surface was incomparably strong with the starlight; the stars simply faded in comparison with the sun.</p>\
                            <p>If the astronauts used sufficiently long exposures, stars would, indeed, be visible.</p>\
                            <p>There are no stars because the cameras couldn’t pick them up. And like I mentioned before, considering that it is 1969, there are a lot of limitations on the ability to carry out documentation in the form of photo/video media.</p>\
                        <h3 class='subgroup-title'>2.2) But the flag is waving?</h3>\
                            <p>The flag was actually made from plastic material, similar to the one that tents are usually made of.</p>\
                            <p>For practical reasons, the flag was originally folded to maximize space and stored in a thin tube.</p>\
                            <p>After Neil Armstrong planted it to the surface of the Moon, it briefly appeared to move as it was unfolding itself to its final shape.</p>\
                            <p>I like to imagine the flag as tinfoil, try and make a nice flat piece of tinfoil!</p> \
                        <h3 class='subgroup-title'>2.3) But they passed through the Van Allen Radiation Belt?</h5>\
                            <p>The truth is, during their entire voyage to the Moon and back to Earth, Armstrong, Aldrin and Collins only received amount of radiation equal to about 0.1% of the deadly dose.</p>\
                            <p>Their total exposure was approximately 11 milisieverts. Lethal levels of radiation is around 8,000 millisieverts.</p>\
                            <p>The harmful effects of radiation are based both on its strength and the time of exposure to its source.</p>\
                            <p>Average human would need to spend nearly four months inside the Van Allen belts to accumulate a lethal dose.</p>\
                            <p>The astronauts managed to pass through them during less than one hour.</p>\
                            <p>Regarding the time spent out of Earth’s magnetic field, where the astronauts were exposed to solar radiation, an average human could endure a radiation exposure equivalent to one-way trip to Mars and still not receive a dose which exceedslifetime levels set up by NASA.</p>\
                        <h3 class='subgroup-title'>2.4) Who filmed Armstrong's first steps then?</h3>\
                            <p>A video camera was fixed on an extending arm to the side of the lander.</p>\
                            <p>But why wasn't the surface that the Lander made contact with disturbed??!?!</p>\
                            <p>According to conspiracy theorists the power from the lunar module should have left a large impact crater under the lunar module.\
                                Firstly the lunar module was descending at an angle flying over the lunar landscape, as it is one sixth of the earth’s gravity it requires one sixth less power/trust to fly over the surface.\
                                In addition the lunar module flying in at an angle meant it was not hovering over the same spot for more than a fraction of a second.\
                                Further, just before touch down the lunar module was operating at 25% of its power.\
                                This 25% power was subjected to the landing site for about half a second at most, which was enough to disturb the landing site slightly, as you can see in the photographs, but not as much as conspiracy theorists would have you believe.\
                            </p>\
                        <h3 class='subgroup-title'>2.5) But we haven't we been back for 40 years?!</h3>\
                            <p>Some people get suspicious for the fact that we haven’t gone back to The Moon in over 40 years.\
                                NASA announced that they didn’t want to be spending any more money on visiting The Moon as it’s extremely expensive to constantly visit The Moon.\
                                Maybe NASA are running out of astronauts to send over there? Maybe NASA are saving up money for a future Mars landing? (Curiosity).\
                                Another way to put this is by saying 'I used to travel to Kazakhstan every year to ski. Just because I don't go anymore, doesn't mean I never went.'​\
                            </p> \
                        <h3 class='subgroup-title'>Summary</h3>\
                            <p>As you can see people love a good conspiracy theory, and perhaps some conspiracy theories are true, after all governments across the world have a large history of corruption and deception.\
                                But it's the idea of faking the moon landings is just too big to be a hoax.\
                                Too many people and competing countries are involved, and all the points conspiracy theorists make are easily explained.\
                                The first point I made about the Lunar laser ranging experiment is something that could not have been set up any other way than by going to the moon and placing reflectors in exact positions on the lunar surface.\
                                It’s a piece of evidence that one simply can-not ignore.\
                                When people get an idea into their head sometimes they can identify with it so much that it becomes their identity.\
                                They then do everything they can to defend this identity even in the face of irrefutable evidence.\
                            </p>\
                            <p>Isn't it nice though to look at the evidence and see that actually, we did go to the moon!\
                                What an amazing achievement that was in bringing humanity together as one, towards a common goal.\
                                That’s what space exploration and the International Space Station is really all about, to show that we are a whole species much more similar than we are different, and that instead of wasting all this energy competing with one another we should move forward together, out into the cosmos.\
                            </p>\
                            <p>Here is a beautiful diagram of all the (successfull) <a href='https://en.wikipedia.org/wiki/Moon_landing'>moon landings on The Moon</a>:</p>\
                            <picture class=\"img\">\
                                <img width=200 height=100 src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Moon_landing_sites.svg/800px-Moon_landing_sites.svg.png\" alt=\"Map of all moon landings\" />\
                            </picture>\
                        </div> \
                        <div class='blog-subsection' id='references'> \
                            <h3 class='subgroup-title'>References</h3> \
                            <p><a href='https://www.smithsonianmag.com/science-nature/interactive-map-shows-all-21-successful-moon-landings-180972687/'>Cool interactive diagram of moon landings</a></p> \
                            <p><a href='https://en.wikipedia.org/wiki/Moon_landing'>Wikipedia, Moon Landing</a></p>\
                        </div>",
            tags: ["Astronomy"]
        },
        {
            id: "3",
            date: "23 Aug 2019",
            title: "How to digitize Mini DV tapes",
            content: "\
            <div class='intro-text blog-subsection'> \
                <h3 class='subgroup-title'>What is a Mini DV Tape?</h3> \
                <p>A Mini DV tape is a type of cassette tape used in most <a href='https://en.wikipedia.org/wiki/Camcorder'>digital camcorders</a> until the early 2000's.</p> \
                <p><a href='https://en.wikipedia.org/wiki/DV'>Digital Video (DV)</a> is a format for storing digital videos, created by Sony, JVC, Panasonic and other video camera manufacturers in 1995.</p> \
                <picture class=\"img\">\
                    <img width=200 class='dont-resize' src=\"https://img.fruugo.com/product/2/52/138446522_max.jpg\" alt=\"Picture of DV tape\" />\
                </picture>\
                <h3 class='subgroup-title'>Why do we need to digitize Mini DV tapes?</h3> \
                <p>In 2003, DV was joined by a successor format <a href='https://en.wikipedia.org/wiki/HDV'>HDV</a>, which used the same tape format with a different video codec. Some cameras at the time had the ability to switch between DV and HDV recording modes. Some, however, do not have that ability, meaning the only way to watch videos back is through the device itself. Such is the case with the Sony DCR-TRV900E Camcorder.</p> \
                <h3 class='subgroup-title'>How do you digitize Mini DV tapes?</h3> \
                <p>Mini DV tapes store data digitally, the footage can be exported directly to a computer using a Firewire (IEEE 1394) cable. </p> \
                <p> \
                    The basic idea is that we will replay the footage of a tape, capturing the footage on a PC by using <a href='https://etc.usf.edu/techease/mac/hardware/what-is-firewire/'>firewire connection</a>. \
                    We can capture the footage using video editing software (e.g. Windows Movie Maker) and converting what is recorded to an .mp4. \
                    You will have to wait for the duration of the tape in order for it to be digitized. \
                    This seems to be the cheapest, most simple (and definitely most time-consuming) method out there for converting those old fashioned Mini DV tapes to mp4 files. \
                </p> \
            </div> \
            <div class='blog-subsection'> \
                <h3 class='subgroup-title'>Checklist</h3> \
                <ul>\
                    <li>Firewire adapter <a href='https://www.amazon.co.uk/gp/product/B00MMKJJY4/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1'>SEDNA - PCIe (PCI EXpress) 3+1 Ports 1394A (Firewire) Adapter card</a></li> \
                    <li>Firewire cable <a href='https://www.amazon.co.uk/gp/product/B008UT7C6I/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1'>Neet Firewire Cable 6-4 pin 2M </a></li> \
                    <li>Mini DV camcorder <a href='https://www.amazon.co.uk/Sony-DCR-TRV900-DCR-TRV900-MiniDV-Camcorder/dp/B00005K4JV'>Sony DCR-TRV900E Camcorder</a></li> \
                    <li>Mini DV tapes <a href='https://www.amazon.co.uk/Sony-Pack-min-DVM-Premium/dp/B0007A57K6/ref=sr_1_1?dchild=1&keywords=mini+dv+tape&qid=1593163830&s=computers&sr=1-1'>Sony 10 Pack 60m DVM</a></li> \
                    <li>A spare PCIe port in your computer</li> \
                    <li>Windows movie maker</li> \
                </ul> \
                <p class=\"note\">Firewire cables come in different shapes and sizes. For the camera I was using, I needed the 6-4 pin 2M firewire cable. Check what your camera supports. \
                <h3 class='subgroup-title'>Step 1 - installing firewire adapter</h3> \
                <ul> \
                    <li>Insert adapter into PCIe slot. The metal bracket should rest on the outer part of your PC case. Depending on the size of your PC, you will have to decide whether to use the small or large metal bracket. In my case, I used the large bracket.</li> \
                    <li>Screw the metal bracket into the case using the screws provided with your own PC.</li> \
                </ul> \
                <h3 class='subgroup-title'>Step 2 - connect firewire cable</h3> \
                <ul> \
                    <li>A firewire cable has 2 different parts - the part that connects to your camcorder, and the part that connects to your computer.</li> \
                    <li>In my case, the part that connects to your camcorder was the 4-pin end.</li> \
                    <li>And the part that connects to your computer was the 6-pin end.</li> \
                    <li>Find the correct port on your camcorder for the 4-pin end.</li> \
                    <li>Take the other end of the firewire cable and plug it into the correct port on your firewire adapter.</li> \
                </ul> \
                <h3 class='subgroup-title'>Step 3 - prepare tape</h3> \
                <ul> \
                    <li>This step is very specific for the camcorder I was using. Basically we are just preparing the tape to be played.</li> \
                    <li>Press '' button to open tape holder.</li> \
                    <li>Insert tape into tape holder.</li> \
                    <li>Hold rewind button until the camera stops making a loud noise. That means you have returned to the beginning of the tape.</li> \
                </ul> \
                <h3 class='subgroup-title'>Step 4 - recapture video footage</h3> \
                <ul> \
                    <li>Open Windows Movie Maker.</li> \
                    <li>Click 'File' in the top right.</li> \
                    <li>Click 'Import from device'.</li> \
                    <li>Your camcorder should be detected, click on it.</li> \
                    <li>Press the play button on your camcorder, also pressing the record button on Movie Maker at the same time.</li> \
                    <li>Wait...</li> \
                    <li>When the tape ends, stop the recording, and save the video as an .mp4 (be prepared for this part to take a while, the files can get quite large! For reference a 1 hour video I recently digitized was 4.52GB).</li> \
                </ul> \
            </div> \
            ",
            tags: ["Hardware"]
        },
        {
            id: "4",
            date: "16 Jan 2023",
            title: "The incomprehensible vastness of space",
            content: "\
                <div class='intro-text blog-subsection'> \
                    <h3 class='subgroup-title'></h3> \
                    <p>The nearest solar system to us is <a href='https://en.wikipedia.org/wiki/Alpha_Centauri'>Alpha Centuri</a>, a meagre <b>4.246 lightyears</b> away.</p>\
                    <p class='note'>A <a href='https://exoplanets.nasa.gov/faq/26/what-is-a-light-year/'>lightyear</a> is a measurement of distance, specifically the amount of distance covered if you were travelling at the speed of light. This is 9,460,730,472,580 km (9.46 trillion km).</p>\
                    <p>So in astronomical terms, Alpha Centuri is relatively close to us, just <b>4.246 lightyears</b> away... Unfortuantly our humans minds find it difficult to comprehend this vast distance because it's actually equivalent to <b>40,174,991,951,814 km (40.17 trillion km)</b>...</p> \
                    <p>To get some perspective, let's measure how long it would take to travel to Alpha Centuri in various forms of transport, starting with a car...</p>\
                    <table class='time-to-get-to-alphacenturi-table'> \
                        <thead> \
                            <th>Form of transport</th> \
                            <th>Average speed (mph)</th> \
                            <th>Average speed (kms)</th> \
                            <th>Percentage of the speed of light</th> \
                            <th>Number of years to get to Proxima Centuri</th> \
                        </thead> \
                        <tbody> \
                            <tr> \
                                <td><a href='https://content.instructables.com/FB7/LHFS/JB3ZPO82/FB7LHFSJB3ZPO82.jpg?auto=webp&frame=1&width=320&md=7889e426df2974e5d95b1817c52ede0f'>Car</a></td> \
                                <td>70</td> \
                                <td>0.03</td> \
                                <td>0.00000113%</td> \
                                <td>40,600,000</td>\
                            </tr> \
                            <tr> \
                                <td><a href='https://en.wikipedia.org/wiki/Speed_of_sound'>Sound</a></td> \
                                <td>760</td> \
                                <td>0.339</td> \
                                <td>0.00000113%</td> \
                                <td>4,600,000</td>\
                            </tr> \
                            <tr> \
                                <td><a href='https://voyager.jpl.nasa.gov/'>Voyager 1</a></td> \
                                <td>38,214</td> \
                                <td>17.3</td> \
                                <td>0.00000576%</td> \
                                <td>73,000</td> \
                            </tr> \
                            <tr> \
                                <td><a href='https://www.nasa.gov/content/goddard/parker-solar-probe/'>Parker Solar Probe</a></td> \
                                <td>429,988</td> \
                                <td>692</td> \
                                <td>0.0023%</td> \
                                <td>6,300</td> \
                            </tr> \
                            <tr> \
                                <td><a href='https://www.youtube.com/watch?v=SkGRVvA23qI&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=8&t=126s'>Riding solar wind (theoretical)</a></td> \
                                <td>1,000,000</td> \
                                <td>40,000</td> \
                                <td>20%</td> \
                                <td>40.50</td> \
                            </tr> \
                            <tr> \
                                <td><a href='https://www.planetary.org/articles/what-is-solar-sailing'>Solar sail (theoretical)</a></td> \
                                <td>2,236,936</td> \
                                <td>60,000</td> \
                                <td>20%</td> \
                                <td>21.23</td>\
                            </tr> \
                            <tr> \
                                <td><a href='https://www.space.com/15830-light-speed.html'>Light speed</a></td> \
                                <td>670,616,629</td> \
                                <td>300,000</td> \
                                <td>100%</td> \
                                <td>4.246</td>\
                            </tr> \
                        </tbody>\
                    </table>\
                    <p>Of all the spacecrafts venturing beyond the solar system, <a href='https://www.space.com/most-distant-spacecraft-voyagers-new-horizons'>Voyager 1 has been going the longest</a> - launched in 1977, and has been moving at 17.3km/s for over 45 years... It's covered <b>23,816,382,064 km (or 23.8 billion km)</b>...</p>\
                    <p>In other words, it's covered <b>0.00005928% of the distance to Alpha Centuri</b>... And it's not even heading in that direction!</p> \
                    <p>However it is due to pass within 1.6 lightyears (9.3 trillion miles) of an obscure star in the constellation Ursa Minor (aka. the little dipper) called AC+79 3888, in the year 40,272 AD (more than 38,200 years from now)...</p> \
                    <picture class=\"img\">\
                        <img width=400 height=200 src=\"https://cdn.mos.cms.futurecdn.net/38UnvH7oaiQX4VkAHhNqbN-970-80.png\" alt=\"Not to scale illustration of spacecrafts venturing beyond the solar system\" />\
                    </picture>\
                </div> \
            ",
            tags: ["Life", "Astronomy"]
        },
        {
            id: "9",
            date: "10 Sep 2017",
            title: "Analysing my Garmin data",
            content: "",
            tags: ["Python", "Running"]
        },
        {
            id: "10",
            date: "24 Mar 2023",
            title: "Inspiration database",
            content: "\
                <div class='blog-subsection'> \
                    <h3 class='subgroup-title'>Film reviewers</h3> \
                    <ul> \
                        <li><a href='https://letterboxd.com/onderhond/'>Niels Matthijs</a></li> \
                        <li><a href='https://letterboxd.com/luis_989/'>Luis_989</a></li> \
                        <li><a href='https://www.youtube.com/kermodeandmayostake'>Mark Kermode</a></li> \
                        <li><a href='https://www.youtube.com/@deepfocuslens'>deepfocuslens</a></li> \
                        <li><a href='https://letterboxd.com/sitenoise/'>sitenoise</a></li> \
                        <li><a href='https://www.youtube.com/@HarrysMovingMedia'>Harrys Moving Castle</a></li> \
                    </ul> \
                </div> \
                <div class='blog-subsection'> \
                    <h3 class='subgroup-title'>Music reviewers</h3> \
                    <ul> \
                        <li><a href='https://www.youtube.com/@TheWonkyAngle'>The Wonky Angle</a></li> \
                        <li><a href='https://www.youtube.com/@theneedledrop'>The Needle Drop</a></li> \
                        <li><a href='https://rateyourmusic.com/~logstar100'>logstar100</a></li> \
                        <li><a href='https://rateyourmusic.com/~Takashi_Hafuza'>Takashi_Hafuza</a></li> \
                        <li><a href='https://www.youtube.com/@SpectrumPulseKMG'>Spectrum Pulse</a></li> \
                        <li><a href='https://www.youtube.com/@deepcuts'>Deep Cuts</a></li> \
                        <li><a href='https://www.youtube.com/@freetobewhoibe/featured'>freetobewhoibe</a></li> \
                        <li><a href='https://www.youtube.com/@ShawnCee'>Shawn Cee</a></li> \
                    </ul> \
                </div> \
                <div class='blog-subsection'> \
                    <h3 class='subgroup-title'>Astronomy</h3> \
                    <ul> \
                        <li><a href='https://www.youtube.com/@geographics1340'>Geographics</a></li> \
                        <li><a href='https://youtube.com/@whatdamath'>Anton Petrov</a></li> \
                        <li><a href='https://youtube.com/@Drekslerr'>Dreksler Astral</a></li> \
                        <li><a href='https://youtube.com/@sea_space'>SEA</a></li> \
                        <li><a href='https://youtube.com/@SpaceRip'>Space Rip</a></li> \
                        <li><a href='https://youtube.com/@SciShow'>Sci Show</a></li> \
                        <li><a href='https://www.youtube.com/@scishowspace'>Sci Show Space</a></li> \
                        <li><a href='https://youtube.com/@3blue1brown'>3Blue1Brown</a></li> \
                        <li><a href='https://youtube.com/@frasercain'>Fraser Cain</a></li> \
                        <li><a href='https://youtube.com/@ElderFoxDocumentaries'>Elderfox Documentaries</a></li> \
                        <li><a href='https://youtube.com/@JohnMichaelGodier'>John Michael Godier</a></li> \
                        <li><a href='https://youtube.com/@Kosmo_off'>Kosmo</a></li> \
                        <li><a href='https://youtube.com/@melodysheep'>Melody Sheep</a></li> \
                        <li><a href='https://www.youtube.com/@AhSharkee'>Sharkee</a></li> \
                        <li><a href='https://youtube.com/@DrBecky'>Dr Becky</a></li> \
                        <li><a href='https://youtube.com/@EventHorizonShow'>Event Horizon</a></li> \
                        <li><a href='https://www.youtube.com/@AlwaysAsking'>AlwaysAsking</a></li> \
                        <li><a href='https://youtube.com/@isaacarthur3209'>Issac Arhur</a></li> \
                        <li><a href='https://youtube.com/@kurzgesagt'>Kurzgesagt</a></li> \
                        <li><a href='https://youtube.com/@LEMMiNO'>LEMMiNO</a></li> \
                        <li><a href='https://youtube.com/@MinutePhysics'>Minute Physics</a></li> \
                        <li><a href='https://www.youtube.com/@ChrisPattisonCosmo'>Chris Pattison</a></li> \
                        <li><a href='https://youtube.com/@CoolWorldsLab'>Cool Worlds</a></li> \
                        <li><a href='https://youtube.com/@pbsspacetime'>PBS Space Time</a></li> \
                        <li><a href='https://youtube.com/@AstroFocus'>Astro Focus</a></li> \
                        <li><a href='https://www.youtube.com/@LaunchPadAstronomy'>Launch Pad Astronomy</a></li> \
                        <li><a href='https://youtube.com/@conversationswithjoe'>Conversations With Joe</a></li> \
                        <li><a href='https://youtube.com/@parallaxnick637'>Parallax Nick</a></li> \
                        <li><a href='https://www.youtube.com/@StrangeMysteries'>Strange Mysteries</a></li> \
                        <li><a href='https://www.youtube.com/@StarTalk'>Star Talk</a></li> \
                        <li><a href='https://youtube.com/@V101SPACE'>V101 Space</a></li> \
                    </ul> \
                </div> \
                <div class='blog-subsection'> \
                    <h3 class='subgroup-title'>Music discovery</h3> \
                    <ul> \
                        <li><a href='https://www.youtube.com/@TerminalPassage'>Terminal Passage</a></li> \
                        <li><a href='https://www.youtube.com/@SaturnArchives'>Terminal Passage</a></li> \
                        <li><a href='https://www.youtube.com/@VaporMemory'>Vapor Memory</a></li> \
                        <li><a href='https://www.youtube.com/@QuoteCaveStory'>OnAScaleof1to10</a></li> \
                        <li><a href='https://www.youtube.com/@PsychedelicAngel'>Psychedlic Angel</a></li> \
                        <li><a href='https://www.youtube.com/@CubensisRecords'>Cubensis Records</a></li> \
                        <li><a href='https://www.youtube.com/@should_be_asleep'>should be asleep</a></li> \
                        <li><a href='https://www.youtube.com/@imcyborgbutthatsok'>i'm cyborg but that's ok</a></li> \
                        <li><a href='https://www.youtube.com/@yumyam'>yum yam</a></li> \
                    </ul> \
                </div> \
                <div class='blog-subsection'> \
                    <h3 class='subgroup-title'>Miscellaneous youtubers</h3> \
                    <ul> \
                        <li><a href='https://youtube.com/@CrackingTheNutshell'>Cracking the Nutshell</a> \
                        <li><a href='https://www.youtube.com/@Vsauce'>Vsauce</a> \
                        <li><a href='https://www.youtube.com/@veritasium'>Veritasium</a> \
                        <li><a href='https://www.youtube.com/@Wendoverproductions'>Wendover Productions</a> \
                        <li><a href='https://youtube.com/@RealLifeLore'>Real Life Lore</a> \
                        <li><a href='https://www.youtube.com/@smartereveryday'>SmarterEveryDay</a> \
                        <li><a href='https://www.youtube.com/@HybridLibrarian'>Hybrid Librarian</a> \
                        <li><a href='https://www.youtube.com/@CGPGrey'>CGP Grey</a> \
                        <li><a href='https://www.youtube.com/@ZuckThat'>ZuckThat</a> \
                        <li><a href='https://www.youtube.com/@NatureVideoChannel'>Nature Video</a> \
                        <li><a href='https://www.youtube.com/@ItsBloodyScience'>It's Bloody Science!</a> \
                        <li><a href='https://www.youtube.com/@numberphile'>Numberphile</a> \
                        <li><a href='https://www.youtube.com/@periodicvideos'>Periodic Videos</a> \
                        <li><a href='https://www.youtube.com/@RealEngineering'>Real Engineering</a> \
                        <li><a href='https://www.youtube.com/@TommyEdisonXP'>Tommy Edison</a> \
                        <li><a href='https://www.youtube.com/@Computerphile'>Computerphile</a> \
                        <li><a href='https://www.youtube.com/@standupmaths'>Stand-up Maths</a> \
                        <li><a href='https://www.youtube.com/@Mathologer'>Mathologger</a> \
                        <li><a href='https://www.youtube.com/@SimonClark'>Simon Clark</a> \
                        <li><a href='https://www.youtube.com/@Vihart'>Vihart</a> \
                    </ul> \
                </div> \
                <div class='blog-subsection'> \
                    <h3 class='subgroup-title'>Running</h3> \
                    <ul> \
                        <li><a href='https://www.randomforestrunner.com/'>John Kelly</a> \
                        <li><a href='https://www.youtube.com/@BenParkes'>Ben Parkes</a> \
                        <li><a href='https://www.youtube.com/@SethJamesDeMoor'>Seth James DeMoor</a> \
                        <li><a href='https://twitter.com/runcandice'>Candice</a> \
                        <li><a href='https://twitter.com/runcamille'>Camille Herron</a> \
                        <li><a href='https://www.youtube.com/@stephbruce6177'>Steph Bruce</a> \
                        <li><a href='https://www.youtube.com/@runningchannel'>The Running Channel</a> \
                        <li><a href='https://www.youtube.com/@TheGingerRunner'>The Ginger Runner</a> \
                        <li><a href='https://twitter.com/mikewardian'>Mike Wardian</a> \
                        <li><a href='https://www.instagram.com/bygolly.molly/?hl=en'>Molly Seidel</a> \
                        <li><a href='https://www.youtube.com/@HarryRunsUK'>Harry Runs</a> \
                        <li><a href='https://www.youtube.com/@HellahGood'>Hellah Good</a> \
                        <li><a href='https://www.youtube.com/@HybridCalisthenics'>Hybrid Calisthenics</a> \
                        <li><a href='https://www.youtube.com/@yogawithadriene'>Yoga With Adriene</a> \
                    </ul> \
                </div> \
                <div class='blog-subsection'> \
                    <h3 class='subgroup-title'>Outdoors</h3> \
                    <ul> \
                        <li><a href='https://www.youtube.com/@jkynaston'>John Kynaston</a> \
                        <li><a href='https://www.youtube.com/@MediocreAmateur'>Mediocre Amateur</a> \
                        <li><a href='https://www.youtube.com/@kraigadams'>Kraig Adams</a> \
                        <li><a href='https://www.youtube.com/@TheUnlazyWay'>The Unlazy Way</a> \
                    </ul> \
                </div> \
                <div class='blog-subsection'> \
                    <h3 class='subgroup-title'>Cycling</h3> \
                    <ul> \
                        <li><a href='https://www.youtube.com/@Cade_Media'>Cade Media</a> \
                        <li><a href='https://www.youtube.com/@Cameron_Jeffers'>Cameron Jeffers</a> \
                        <li><a href='https://www.youtube.com/@1bike1world'>1bike1world</a> \
                        <li><a href='https://www.youtube.com/@BikeTripping'>Bike Tripping</a> \
                    </ul> \
                </div> \
                <div class='blog-subsection'> \
                    <h3 class='subgroup-title'>Artists</h3> \
                    <ul> \
                        <li><a href='https://www.joemacgown.com/'>Joe Macgown</a> \
                        <li><a href='https://www.google.com/search?q=ojimbo&client=firefox-b-d&sxsrf=AJOqlzW2Cq-tlvV2ev7p3YGKkAScYbr7sQ:1679670949703&source=lnms&tbm=isch&sa=X&ved=2ahUKEwigrK_y7fT9AhWBWMAKHV_qBpsQ_AUoAXoECAEQAw&biw=1857&bih=967&dpr=1'>ojimbo</a> \
                        <li><a href='https://twitter.com/TormanJeremy'>Jermey Torman</a> \
                        <li><a href='https://twitter.com/DrewMedina20'>DrewMedina</a> \
                        <li><a href='https://twitter.com/jakejfried'>Jake Fried</a> \
                        <li><a href='https://twitter.com/seerlight'>SeerLight</a> \
                        <li><a href='https://twitter.com/GlennIsZen'>Glenn Marshall</a> \
                        <li><a href='https://twitter.com/AetherialDnB'>Aetherial.eth</a> \
                        <li><a href='https://twitter.com/jeffpalmer'>Jeff Palmer</a> \
                        <li><a href='https://twitter.com/zippy731'>Chris Allen</a> \
                        <li><a href='https://twitter.com/pharmapsychotic'>pharmapsychotic</a> \
                        <li><a href='https://twitter.com/garlicml'>garlicml</a> \
                        <li><a href='https://twitter.com/eps696'>vadim epstein</a> \
                        <li><a href='https://www.google.com/search?q=norman+stansfield+cornish&client=firefox-b-d&sxsrf=AJOqlzWIgeYTMY2keXJSGlpgFNwvLkdUDg:1679677352933&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjHxdXfhfX9AhVHh1wKHZZkB-UQ_AUoAXoECAEQAw&biw=1857&bih=967&dpr=1'>Norman Stansfield Cornish</a> \
                        <li><a href='https://www.instagram.com/liskaflower/'>Alisa Lariushkina</a> \
                        <li><a href='https://twitter.com/revrart'>revrart</a> \
                        </ul> \
                </div> \
            ",
            tags: ["Notes"]
        },
        {
            id: "12",
            date: "07 Oct 2020",
            title: "Are non-carbon based lifeforms possible?",
            content: "",
            tags: ["Astronomy", "Biology"]
        },
        {
            id: "13",
            date: "07 Oct 2020",
            title: "Gorgonocephalus arcticus",
            content: "",
            tags: ["Biology"]
        },
        {
            id: "14",
            date: "09 Oct 2020",
            title: "A subsurface ocean on Enceladus",
            content: "",
            tags: ["Astronomy"]
        },
        {
            id: "15",
            date: "11 Oct 2020",
            title: "The Beale Ciphers",
            content: "blah",
            tags: ["Cryptography"]
        },
        {
            id: "16",
            date: "13 Oct 2020",
            title: "The Great Pyramid of Cholula",
            content: "blah",
            tags: ["History"]
        },
        {
            id: "17",
            date: "14 Oct 2020",
            title: "Null Island",
            content: "blah",
            tags: ["Geography", "Oceanography"]
        },
        {
            id: "18",
            date: "14 Oct 2020",
            title: "Hematite Stalactite",
            content: "blah",
            tags: ["RocksAndMinerals"]
        },
        {
            id: "19",
            date: "14 Oct 2020",
            title: "Leucochloridium",
            content: "blah",
            tags: ["Entomology"]
        },
        {
            id: "20",
            date: "14 Mar 2023",
            title: "The Venera space probes",
            content: "\
                <div class='intro-text blog-subsection' id='section1'> \
                    <h3 class='subgroup-title'></h3> \
                    <p>The Soviets succesfully landing an autonomous robot on Venus in 1975 and snapping a picture from one of the most inhospitable places in the solar system is probably \
                        the <b>most underrated space achievement of all time</b>.</p> \
                    <p>The <a href='https://en.wikipedia.org/wiki/Venera'>Venera program</a> <i>(Venera translates to Venus in Russian)</i> was a series of 18 space probes launched between \
                        1961 to 1983 designed to study the mysterious surface of Venus lurking underneath the planet's thick atmosphere. Given the technology available at the time, and the extremely \
                        hostile conditions on Venus, the fact that we got any data back, let alone pictures and audio recordings from another planet, is a remarkable <b>feat of engineering \
                        and science</b>. The Soviet engineers who contributed to the Venera project showed immense <b>perseverance</b> and <b>passion for astronomy</b>, and remains a powerful example \
                        of <b>science and teamwork</b> being more beneficial for the progress of civilization than war and politics has ever been.\
                    </p>\
                    <p>For a long time <a href='https://solarsystem.nasa.gov/planets/venus/overview/'>Venus</a> was thought to be Earth-like due to being a similar size and composition. No telescope could pierce the thick cloud layers that enveloped the mysterious planet, so \
                        we really had no idea what lurked on Venus without actually going there with scientific instruments to make measurements. The Venera probes gradually revealed to us that Venus is a hellish world full of volcanoes \
                        and sulphuric acid rain and inconceivably high surface temperatures (475°C). Venus is completely inhospitable for life as we know it, and despite the otherworldy challenges that Venus presented to the \
                        Venera engineers, they still succeeded in landing probes on the planet, snapping pictures, drilling holes, making audio recordings, and gathering a vast set of data that completely changed our understanding \
                        of the Universe and our insignificant but precious place within it.\
                    </p>\
                    <picture class=\"img\">\
                        <img width=600 height=400 src=\"https://raw.githubusercontent.com/nimpod/nathansteele/master/src/img/blogPosts/venusTopographyMap.PNG\" title='' />\
                    </picture>\
                </div> \
                <div class='blog-subsection' id='section2'> \
                    <h3 class='subgroup-title'>Venera 1 & 2</h3>\
                    <p><a href='https://en.wikipedia.org/wiki/Venera_1'>Venera 1</a> was launched in <b>Febuary 1961</b> (that's just 4 years post-<a href='https://en.wikipedia.org/wiki/Sputnik_1'>Sputnik</a>, and 7 years pre-<a href='https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html'>Apollo 11</a>). Unfortunately we lost radio contact with Venera 1, it is believed that it failed due to the overheating of a solar-direction sensor, it returned no data...</p> \
                    <p><a href='https://en.wikipedia.org/wiki/Venera_2'>Venera 2</a> was launched in <b>November 1965</b> but also suffered from similar problems. The spacecraft made its closest appraoch to Venus at a distance of 23,810km (that's pretty close!)</p> \
                    <p>Both probes were intended to fly past Venus without entering orbit.</p> \
                    <p class='acolade'>1st ever interplanetary probe</p>\
                    <p class='acolade'>1st ever flyby past another planet</p>\
                    <p class='acolade'>1st ever probe to make course corrections in deep space</p>\
                </div>\
                <div class='blog-subsection' id='section3'> \
                    <h3 class='subgroup-title'>Venera 3</h3>\
                    <p>Launched in <b>March 1966</b>, <a href='https://en.wikipedia.org/wiki/Venera_3'>Venera 3</a> made a partially successful landing on the surface of Venus on the 1st of March 1966! \
                        This makes <b>Venera 3 the first human-made spacecraft to land on another planet!! In the year 1966!! Insane!</b></p> \
                    <p>We say partially successful, because its scientific instruments failed during atmospheric insertion. The probe returned no valuable data regarding the \
                        atmosphere or surface conditions, but <b>IT DID LAND!</b></p>\
                    <picture class=\"img\">\
                        <img width=250 height=100 class='dont-resize' src=\"https://www.wired.com/images_blogs/wiredscience/2010/02/venera_3.jpg\" title='Venera-3 probe' />\
                    </picture>\
                    <p class='acolade'>1st ever hard landing on another planet</p>\
                </div>\
                <div class='blog-subsection' id='section4'> \
                    <h3 class='subgroup-title'>Venera 4</h3>\
                    <p>Launched in <b>June 1967</b>, <a href='https://en.wikipedia.org/wiki/Venera_4'>Venera 4</a> provided our first insight into the Venusian atmosphere.</p> \
                    <p>Turns out the planet has <b>extremely intense air pressure</b>, about 90x greater than on Earth! Initial chemical analysis of the atmopshere \
                        showed it was composed mostly of <b>carbon dioxide</b> and was far denser than expected. The probe also recorded evidence of <b>zonal winds with speeds of up to 225mph</b>!</p> \
                    <p>Unfortunately the probe <b>was crushed due to the intense pressure</b> experienced during the 93 minute descent.</p> \
                    <p class='acolade'>1st measurements of another planets atmosphere</p> \
                    <p class='acolade'>1st measurements of wind in another planet.</p> \
                </div>\
                <div class='blog-subsection' id='section5'> \
                    <h3 class='subgroup-title'>Venera 5 & 6</h3>\
                    <p><a href-'https://en.wikipedia.org/wiki/Venera_5'>Venera 5</a> and <a href='https://en.wikipedia.org/wiki/Venera_6'>Venera 6</a> launched in <b>January 1969</b> just 5 days apart from eachother.</p> \
                    <p>They both lasted just under 1 hour in the Venusian atmosphere, but didn't come close to reaching the surface (about 26km and 11km respectively).</p> \
                    <p>These probes carried more scientific instruments, including a thermometer recording a temperature of 320°C (it will get even hotter when we reach the surface!).</p>\
                    <p class='acolade'>1st temperature readings from another planet.</p> \
                </div>\
                <div class='blog-subsection' id='section6'> \
                    <h3 class='subgroup-title'>Venera 7 & 8</h3>\
                    <p><a href='https://en.wikipedia.org/wiki/Venera_7'>Venera 7</a> was launched in <b>August 1970</b>, and made <b>the first ever soft landing on another planet!!!</b> </p> \
                    <p>Several adjustments were made to the spacecraft design allowing it survive inside the intense Venusian atmosphere. Including a parachute to enable a soft landing. The parachute opened at 60km above the \
                        surface, but 6 minutes later the parachute melted sending the probe into a dramatic uncontrolled freefall, striking the surface at about 60km/h. The probe survived <b>23 minutes</b> on the surface \
                        before its batteries expired. The probe recorded an <b>insane surface temperature of 475°C</b>!!</p> \
                    <p><a href='https://en.wikipedia.org/wiki/Venera_8'>Venera 8</a> was launched in <b>March 1972</b>, verifying the temperature readings and atmospheric data Venera 7 recorded was valid.\
                        The on-board gamma ray spectrometer measured the uranium/thorium/potassium ratio of the surface rock, indicating it \
                        was <b>similar</b> to <a href='https://en.wikipedia.org/wiki/Alkali_basalt'>Alkali basalt</a>, a volcanic rock usually found in oceanic and continental areas associated with volcanic activity.</p> \
                    <p class='acolade'>1st soft landing on another planet.</p> \
                </div>\
                <div class='blog-subsection' id='section7'> \
                    <h3 class='subgroup-title'>Venera 9</h3>\
                    <p>Launched in <b>June 1975</b>, <a href='https://en.wikipedia.org/wiki/Venera_9'>Venera 9</a> successfully landed and became the first human-made probe to take <b>a picture from another planet!!!!</b></p> \
                    <p>The engineers made many adjustments to the spacecraft design, most notably a camera, also liquid cooling to help withstand the extreme surface temperatures, and also removing the parachutes \
                        favoring a hard landing instead of a soft landing. The probe lasted for <b>53 minutes</b> before succumbing to the extreme surface temperatures. This was a huge improvement and allowed much more time \
                        to collect data and obviously take a photograph! The lander measured a light level of <a href='https://www.infinity-energy.co.uk/led-lighting/what-does-lux-mean/'>14,000 lux</a> similar to that of Earth in full daylight but no direct sunshine.</p>\
                    <p>The image revealed a <b>rocky uneven surface with <a href='https://www.bgs.ac.uk/discovering-geology/geological-processes/weathering/'>weatherd rocks</a></b> and our <b>first glimpse of the hazy Venusian sky</b>.</p>\
                    <picture class=\"img\">\
                        <img width=600 height=400 src=\"https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x248_crop_center-center_82_line/venus-surface-venera-9.jpg.webp\" title='' />\
                    </picture>\
                    <p class='acolade'>1st picture from another planet.</p> \
                </div>\
                <div class='blog-subsection' id='section8'> \
                    <h3 class='subgroup-title'>Venera 10</h3>\
                    <p>Launched in <b>June 1975</b>, <a href='https://en.wikipedia.org/wiki/Venera_10'>Venera 10</a> landed 2200km from Venera 9 between <a href='https://en.wikipedia.org/wiki/Beta_Regio'>Beta Regio</a> and <a href='https://wenamethestars.inkleby.com/feature/2608'>Hyndla Regio</a>. It took another amazing photograph of the Venusian surface.</p> \
                    <picture class=\"img\">\
                        <img width=600 height=200 src=\"https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x492_crop_center-center_82_line/venus-surface-venera-10.jpg.webp\" title='' />\
                    </picture>\
                    <p>Venera 10 captured an even more insane photograph <b>whilst descending through the Venusian atmosphere</b>, revealing huge <b>lava rocks</b> and a <b>vast landscape of spooky unexplored terrain</b>. \
                        This little photograph ignities my curiousity every time I see it. Not only is it an engineering marvel that these cameras actually worked, but the fact that these <b>tiny 64kp images</b> were \
                        transmitted back to Earth for you and me to gaze at through our computer screens 40 years later - such otherworldly discoveries within an photograph containing 750x less \
                        data than a photograph on your average modern-day smartphone. A profound example of quality over quantity.</p> \
                    <picture class=\"img\">\
                        <img width=600 height=200 src=\"https://upload.wikimedia.org/wikipedia/commons/b/bd/USSR_Venera_10_Venus_ground_1975_colorized_by_Don_P._Mitchell.png\" title='' />\
                    </picture>\
                </div>\
                <div class='blog-subsection' id='section9'> \
                    <h3 class='subgroup-title'>Venera 11 & 12</h3>\
                    <p><a href='https://en.wikipedia.org/wiki/Venera_11'>Venera 11</a> and <a href='https://en.wikipedia.org/wiki/Venera_12'>Venera 12</a> (both launched in September 1978) successfully landed, but the <b>lens cap malfunctioned and wasn't released... \\(._. )/</b></p> \
                    <p>They operated for 95 and 110 minutes respectively, gathering lots of data regarding the temperature and atmospheric and soil chemical composition. Evidence of thunder and lightning was also \
                        reported, the discovery of carbon monoxide at low altitudes. But no photos unfortunately :(</p>\
                    <picture class=\"img\">\
                        <img width=250 height=200 class='dont-resize' src=\"https://nssdc.gsfc.nasa.gov/planetary/image/venera_11_descent.jpg\" title='Venera-11 descent module' />\
                    </picture>\
                    <p class='acolade'>1st evidence of thunder on another planet.</p> \
                </div>\
                <div class='blog-subsection' id='section10'> \
                    <h3 class='subgroup-title'>Venera 13 & 14</h3>\
                    <p>Launched in <b>October 1981</b>, <a href='https://en.wikipedia.org/wiki/Venera_13'>Venera 13</a> sucesfully landed and became the first ever probe to capture a <b>colour photograph from \another planet!!!</b></p> \
                    <p><b>Venera 13</b> landed just east of the eastern extension of an elevated region known as <a href='https://www.jpl.nasa.gov/images/pia00212-venus-phoebe-regio'>Phobe Regio</a>, \
                        observations from the photograph show an area <b>composed of bedrock surrounded by dark <a href='https://www.britannica.com/science/regolith'>regolith</a></b>. The probe also extended its \
                        drilling arm into the surface, picked up a bit of Venusian regolith and analysed it in a sealed chamber. \"<i>The results showed that the surface characteristics correspond to \
                        compacted ash material such as volcanic tuff.</i>\" [<a href='https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1981-106D-08'>NASA</a>]</p> \
                    <p>Venera 13 lasted an impressive <b>127 minutes</b> in the extremely harsh Venusian weather, the longest of all the Venera probes!</p> \
                    <picture class=\"img\">\
                        <img width=600 height=200 src=\"https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x491_crop_center-center_82_line/venus-surface-venera-13-a.jpg.webp\" title='Venera 13 front camera' />\
                    </picture>\
                    <picture class=\"img\">\
                        <img width=600 height=200 src=\"https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x507_crop_center-center_82_line/venus-surface-venera-13-b.jpg.webp\" title='Venera 13 back camera' />\
                    </picture>\
                    <picture class=\"img\">\
                        <img width=600 height=200 src=\"https://universemagazine.com/wp-content/uploads/2022/02/erkj8dfxuaesmzh.jpg\" title='Venera 13 front camera' />\
                    </picture>\
                    <p><a href='https://en.wikipedia.org/wiki/Venera_14'>Venera 14</a> was launched 5 days later, landing 950km southwest of Venera 13, the landing area was <b>far more fractured</b> containing none \
                        of the regolith seen in Venera 13's pictures. Venera 14 lasted just 57 minutes, not as long as its predecesoor but long enough to capture some more amazing photographs of the alien world.</p> \
                    <picture class=\"img\">\
                        <img width=600 height=200 src=\"https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x496_crop_center-center_82_line/venus-surface-venera-14-camera-1.jpg.webp\" title='Venera 13 front camera' />\
                    </picture>\
                    <picture class=\"img\">\
                        <img width=600 height=200 src=\"https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x507_crop_center-center_82_line/venus-surface-venera-13-b.jpg.webp\" title='Venera 13 back camera' />\
                    </picture>\
                    <p>Venera 14 also became the <b>first ever probe to make an audio recording from another planet!!</b>. We still have access to this glorious \
                        <a href='https://www.youtube.com/watch?v=P3Ife6iBdsU&t=132'>three minute audio recording</a> which begins as it was still descending through the atmosphere. There were some fascinating things \
                        captured in the audio...</p> \
                    <ul> \
                        <li><b>[0:00 - 0:24]</b> - The sound of the lander descending through Venus's dense atmosphere</li> \
                        <li><b>[0:25]</b> - The lander hitting the ground</li> \
                        <li><b>[0:34]</b> - The lens cap removal hitting the ground</li> \
                        <li><b>[0:52 - 2:02]</b> - The drilling apparatus delving into the rocks beneath the lander</li> \
                        <li><b>[2:07]</b> - Soil being injected into chamber for analysis</li> \
                        <li><b>[2:07 - 3:00]</b> - lonely Venusian wind</li> \
                    </ul> \
                    <audio controls> \
                        <source src=veneraAudioRecording type='audio/wav'> \
                    </audio> \
                    <div></div> \
                    <p>Take a minute to reflect on this. Billions of years of existence where nothing but the sound of wind, volcanic eruptions, and sulfuric acid rain existed, until one day from above, a machine lands and starts drilling...\
                        And now in today's digital era can listen to the audio from another planet.</p> \
                    <p><a href='https://airandspace.si.edu/exhibitions/exploring-the-planets/online/solar-system/venus/volcanism.cfm'>Volcanic eruptions on Venus</a> are a major force reshaping the landscape, ongoing as we speak. As a result there are differences in the types of erupted magma and the eruption rate \
                        lead to a wide variety of surface features, two of which we observed in the photographs. There are probably other surface types on Venus we don't even know exist.</p> \
                    <p> As of writing (2023) we have not returned to the surface of Venus since the spectacular success of Venera 14 in 1982. There are currently no plans to return to the surface of Venus. \
                        It remains conqurered by the Soviet Union.</p> \
                    <p class='acolade'>1st audio recording from another planet</p> \
                    <p class='acolade'>1st colour picture from another planet</p> \
                </div>\
                <div class='blog-subsection' id='section11'> \
                    <h3 class='subgroup-title'>Venera 15 & 16</h3>\
                    <p>Both launched in <b>June 1983</b>, <a href='https://en.wikipedia.org/wiki/Venera_4V-2'>Venera 15 & 16</a> were orbiter missions designed to map the surface of Venus using radar.</p> \
                    <p>The discoveries made from these probes have since been superseded by the <a href='https://solarsystem.nasa.gov/missions/magellan/in-depth/'>Magellan mission</a> in 1991, as SAR imaging now provides the highest resolution dataset for mapping the surface of nearby planets.</p> \
                </div>\
                <div class='blog-subsection' id='section12'> \
                    <h3 class='subgroup-title'>Further mapping of Venus</h3>\
                    <p>There are some <b>unfucking believable maps of the surface of Venus</b> thanks to the Magellan mission and SAR imaging technology.</p> \
                    <p>This 1st image shown below is an amazing GIS map of Venus, overlayed with the high topography <a href='https://en.wikipedia.org/wiki/Tessera_(Venus)'>Tessera terrain</a>.</p> \
                    <picture class=\"img\">\
                        <img width=600 height=200 src=\"https://upload.wikimedia.org/wikipedia/commons/d/dc/Tessera_Terrain_on_Venus_gif.gif\" title='Outline of tessera terrain imposed on the GIS Map of Venus' />\
                    </picture>\
                    <p>The 2nd image shown below is the <a href='https://en.wikipedia.org/wiki/Aphrodite_Terra'>Aphrodite Terra</a> region, containing complex ridged terrain.</p> \
                    <picture class=\"img\">\
                        <img width=600 height=200 src=\"https://upload.wikimedia.org/wikipedia/commons/d/dc/Aphrodite_Terra_on_Venus.jpg\" title='Aphrodite Terra, a complex terrain' />\
                    </picture>\
                    <p>The 3rd image shown below is the <a href='https://en.wikipedia.org/wiki/Alpha_Regio'>Alpha Regio</a> region, containing a ridged and fractured terrain.</p> \
                    <picture class=\"img\">\
                        <img width=100 height=100 src=\"https://upload.wikimedia.org/wikipedia/commons/0/09/Alpha_Regio%2C_northern_part%2C_781-%2C663%2C-118.jpg\" title='Alpha Regio' />\
                    </picture>\
                    <p>The 4th image shown below are of <a href='https://en.wikipedia.org/wiki/Lava_dome'>Volcanic Domes</a> on Venus.</p> \
                    <picture class=\"img\">\
                        <img width=100 height=100 src=\"https://upload.wikimedia.org/wikipedia/commons/4/49/PIA00215-cropped.jpg\" title='Volcanic Domes on Venus' />\
                    </picture>\
                    <p>The 5th image shown below is the Northern part of the <a href='https://en.wikipedia.org/wiki/Akna_Montes'>Akna Montes</a> (a mountain range on Venus!).</p> \
                    <picture class=\"img\">\
                        <img width=300 height=200 class='dont-resize' src=\"https://upload.wikimedia.org/wikipedia/commons/1/1d/Akna_montes_PIA00250.jpg\" title='Northern part of the Akna Montes' />\
                    </picture>\
                </div>\
                <div class='blog-subsection' id='section13'> \
                    <h3 class='subgroup-title'>Conclusion</h3>\
                    <p>Among all of the achievements made by space agencies from the 60s, 70s, 80s, 90s, 00s, 10s, and the current 20s, I am of the opinion that the exploration of Venus by the Soviet Union \
                        is still one of humanity's greatest scientific achievements.</p>\
                    <p>The Venera project is a real testament to perseverance, hard work, experimentation, teamwork, collaboration, and an incredible use of primitive technology given this happened \
                        in the 60s/70s/80s. It gathered data from the hottest planet in the entire solar system (475°C), <b>a lonely world that once only knew the sound of wind and rain and volcanoes \
                        until one day a strange machine landed and started taking pictures and drilling holes</b>. It's not sci-fi, it's real, and I believe the Russians deserve more love and respect for \
                        their engineering and discoveries. This precious data remains one of the most profound realizations of extreme environments on other planets - one of only 6 worlds we have successfully \
                        placed landers on (Venus (1966), our Moon (1969), Mars (1976), Titan (2004), P67 comet (2015)).</p> \
                    <p>Whilst it's entirely speculative, Venus may once have been Earth-like. Perhaps 300 million years ago Venus could have had similar conditions to current Earth. Perhaps the fate of future \
                        Earth is similar to that of Venus's scorching hellscape - covered in volcanos, inconceivably high surface temperatures, and an almost impenetrable atmosphere polluted with \
                        carbon dioxide - in other words, <b>climate change</b>.</p> \
                    <picture class=\"img\">\
                        <img width=600 height=200 src=\"https://universemagazine.com/wp-content/uploads/2020/12/800px-PIA23791-Venus-NewlyProcessedView-20200608.jpg\" title='Aphrodite Terra, a complex terrain' />\
                    </picture>\
                </div>\
                <div class='blog-references references-text ' id='section14'> \
                    <h3 class='subgroup-title'>References</h3> \
                    <ul>\
                        <li><a href='https://medium.com/@hunterscott/what-a-soviet-spacecraft-on-venus-can-teach-you-about-failure-f74f9c970a45'>https://medium.com/@hunterscott/what-a-soviet-spacecraft-on-venus-can-teach-you-about-failure-f74f9c970a45</a></li> \
                        <li><a href='https://en.wikipedia.org/wiki/Venera'>https://en.wikipedia.org/wiki/Venera</a></li> \
                        <li><a href='https://nssdc.gsfc.nasa.gov/planetary/venera.html'>https://nssdc.gsfc.nasa.gov/planetary/venera.html</a></li> \
                        <li><a href='https://www.youtube.com/watch?v=-Ecm4N0NLYI&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=4'>https://www.youtube.com/watch?v=-Ecm4N0NLYI&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=4</a></li> \
                        <li><a href='https://www.youtube.com/watch?v=M5pXx_AjjlM&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=34&t=426s'>https://www.youtube.com/watch?v=M5pXx_AjjlM&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=34&t=426s</a></li> \
                        <li><a href='https://www.youtube.com/watch?v=ztmu__xo-vI&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=24'>https://www.youtube.com/watch?v=ztmu__xo-vI&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=24</a></li> \
                        <li><a href='https://www.youtube.com/watch?v=P3Ife6iBdsU&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=99'>https://www.youtube.com/watch?v=P3Ife6iBdsU&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=99</a></li> \
                        <li><a href='https://www.space.com/18551-venera-13.html'>https://www.space.com/18551-venera-13.html</a></li> \
                    </ul>\
                </div>\
            ".replace(/screenshot1|veneraAudioRecording/gi, function(matched) {
                var mapObj = {
                    screenshot1: require('../img/blogPosts/venusTopographyMap.PNG'),
                    veneraAudioRecording: require('../sound/veneraAudioRecording.wav')
                };
                return mapObj[matched];
            }),
            tags: ["Astronomy"]
        },
        {
            id: "21",
            date: "21 Mar 2023",
            title: "Neptune's amazing moon Triton",
            content: "\
                <div class='intro-text blog-subsection' id='section1'> \
                    <h3 class='subgroup-title'></h3> \
                    <p><b>Triton</b> is the largest moon of Neptune, the 7th largest moon in the Solar System.</p> \
                    <p>The mysterious moon contains a <b>geothermally heated sub-surface ocean</b>, the moon is geologically active with cryovolcanoes meaning the surface is constantly reshaping,\
                        <b>geysers</b> are spewing out water vapor 8km above the surface, and frosty nitrogen snow covers the moons icy surface.</p>\
                    <picture class=\"img\">\
                        <img width=600 height=400 src=\"https://www.thefactsite.com/wp-content/uploads/2019/10/triton-facts.jpg\" title='' />\
                    </picture>\
                </div> \
                <div class='blog-subsection' id='section2'> \
                    <p>Up in Triton's thin atmosphere, <b>clouds of nitrogen</b> exist beneath a highly charged ionosphere. We have observed the formation of nitrogen clouds 3km above the surface of Triton, they are likely the result of the cryovolcanism going on inside the moon.</p> \
                    <p>A single Tritonian season lasts <b>40 Earth years</b>. When Voyager 1 flew past Triton in 1989, it was spring in the Northen hemisphere. 24 years later in the year 2023, \
                        it's now summer in the Northen hemisphere. In the depths of Tritonian winter, temperatures plunge to a rather <b>chilly temperature of -240°C</b></p> \
                    <p>The surface is believed to be about 50% nitrogen snow, 33% water ice, the rest being frozen carbon dioxide (suspiciously similar to Pluto's surface... we'll get back to this later...). \
                        There are no obvious signs of impact craters on the surface, but smooth plains of shiny nitrogen snow, vast landscapes of frozen cryovolcanoes, ridges formed by outpouring \
                        of icy lava. All these observations have lead us to believe the moon is remarkably young (by the standards of our solar system - possibly a meagre 10 million years old!) \
                        which would indicate that the surface is being endlessly reshaped by geological activity.</p>\
                    <p>But the secrets behind Triton's mysterious geological activity may lie in its unusual orbit...</p> \
                    <picture class=\"img\">\
                        <img width=600 height=400 src=\"https://static01.nyt.com/images/2014/11/04/multimedia/out-there-ice-moon/out-there-ice-moon-superJumbo.jpg\" title='' />\
                    </picture>\
                </div> \
                <div class='blog-subsection' id='section3'> \
                    <p>Remember I mentioned that Triton's surface is very similar to Pluto's? Well this may be no coincidence, as it's very likely Triton began as a <b>dwarf planet billions of years ago \
                        in the Kuiper Belt alongside Pluto</b>. Neptune's strong gravitational pull captured Triton, claiming it as it's moon.</p> \
                    <p>The most compelling evidence we have of this is <b>Triton's unusual orbit</b>. Neptune turns counter-clockwise, which means all of its moons should orbit in the same \
                        direction - we have hundreds of pieces of evidence showing us this how most normal moons behave. Triton breaks this rule, orbiting in the opposite direction to its planet. \
                        This is what we call a <b>Retrograde Orbit</b>.</p>\
                    <picture class=\"img\">\
                        <img width=600 height=400 src=\"https://www.nasa.gov/sites/default/files/thumbnails/image/pia23874-1041.jpg\" title='' />\
                    </picture>\
                </div> \
                <div class='blog-references references-text ' id='section14'> \
                    <h3 class='subgroup-title'>References</h3> \
                    <ul>\
                        <li><a href='https://www.youtube.com/watch?v=qGy4uyHVUYA'>https://www.youtube.com/watch?v=qGy4uyHVUYA</a></li> \
                        <li><a href='https://www.youtube.com/watch?v=hzcNH9HHwrE'>https://www.youtube.com/watch?v=hzcNH9HHwrE</a></li> \
                        <li><a href='https://www.youtube.com/watch?v=MwkjIgGqbFo'>https://www.youtube.com/watch?v=MwkjIgGqbFo</a></li> \
                        <li><a href='https://www.youtube.com/watch?v=9JTkaXfPr0U'>https://www.youtube.com/watch?v=9JTkaXfPr0U</a></li> \
                        <li><a href='https://www.youtube.com/watch?v=fkwq5Wkkdm4'>https://www.youtube.com/watch?v=fkwq5Wkkdm4</a></li> \
                    </ul>\
                </div>\
            ".replace(/screenshot1|veneraAudioRecording/gi, function(matched) {
                var mapObj = {
                    screenshot1: require('../img/blogPosts/venusTopographyMap.PNG'),
                    veneraAudioRecording: require('../sound/veneraAudioRecording.wav')
                };
                return mapObj[matched];
            }),
            tags: ["Astronomy"]
        },
        {
            id: "22",
            date: "30 Sep 2022",
            title: "Running form",
            content: "blah",
            tags: ["Running"]
        },
        {
            id: "23",
            date: "30 Sep 2022",
            title: "Flagematics",
            content: "blah",
            tags: ["Vexilology", "Mathematics"]
        },
        {
            id: "24",
            date: "16 Jan 2022",
            title: "Johannes Kepler",
            content: "blah",
            tags: ["InterestingPeople", "Astronomy"]
        },
        {
            id: "25",
            date: "16 Jan 2022",
            title: "Samuel Pepys",
            content: "blah",
            tags: ["InterestingPeople"]
        },
        {
            id: "5",
            date: "30 Sep 2022",
            title: "The Messiah's Handbook",
            content: "<ul class=\"messiahs-handbook\">\
                        <li>\
                            <p class=\"quote-str\">\"When you are faced with the possibility of an early death, it makes you realise that there are lots of things you want to do before your life is over.\"</p>\
                            <p class=\"quote-person\">Stephen Hawking</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Most people are never going to die because they're never going to be born.\"</p>\
                            <p class=\"quote-person\">Richard Dawkins</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Action expresses priorities.\"</p>\
                            <p class=\"quote-person\">Gandhi</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"When you are faced with the possibility of an early death, it makes you realise that there are lots of things you want to do before your life is over.\"</p>\
                            <p class=\"quote-person\">Stephen Hawking</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Either we are alone in the Universe or we are not. Both are equally terrifying.\"</p>\
                            <p class=\"quote-person\">Arthur C. Clarke</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"The gulls who scorn perfection for the sake of travel go nowhere, slowly. Those who put aside travel for the sake of perfection go anywhere, instantly..\"</p>\
                            <p class=\"quote-person\">Chiang</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"A river cuts through rock, not because of its power, but because of its persistence.\"</p>\
                            <p class=\"quote-person\">James N. Watkins</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones that you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.\"</p>\
                            <p class=\"quote-person\">Minecraft end game credits</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Let everything happen to you. Beauty and terror. Just keep going. No feeling is final.\"</p>\
                            <p class=\"quote-person\">Rainer Maria Rilke</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love,  every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every superstar, every supreme leader,  every saint and sinner in the history of our species lived there-on a mote of dust suspended in a sunbeam.\"</p>\
                            <p class=\"quote-person\">Carl Sagan</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Learning is finding out what you already know. Doing is demonstrating that you already know it. Teaching is reminding others that they know just as well as you. You are all learners, doers, teachers.\"</p>\
                            <p class=\"quote-person\">Donald Shimoda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Your only obligation in any lifetime is to be true to yourself. Being true to anyone else or anything else is not only impossible, but the mark of a fake messiah.\"</p>\
                            <p class=\"quote-person\">Donald Shimoda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"The simplest questions are the most profound. Where were you born? Where is your home? Where are you going? What are you doing? Think about these once in a while, and watch your answers change.\"</p>\
                            <p class=\"quote-person\">Donald Shimoda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Happiness is not a station you arrive at, but a manner of travelling.\"</p>\
                            <p class=\"quote-person\">Margaret Lee Runbeck</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Everything has its wonders, even darkness and silence... and I learn, whatever state I may be in, therin to be content.\"</p>\
                            <p class=\"quote-person\">Hellen Keller</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"We are all born in cages with the door open. It's up to us to choose whether we leave the comfort of that cage to seek adventure.\"</p>\
                            <p class=\"quote-person\">Dean Karnazes</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Failure is the opportunity to begin again. Only this time, more wisely.\"</p>\
                            <p class=\"quote-person\">Kung Fu Panda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"However bad life may seem, there is always something you can do, and succeed at. While there's life, there is hope.\"</p>\
                            <p class=\"quote-person\">Stephen Hawking</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Everything in this book may be wrong.\"</p>\
                            <p class=\"quote-person\">Donald Shimoda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Focussing and investing yourself into something you are passionate about will always yield better results, than scattering yourself, spreading yourself thin and trying to focus on too many passions at once.\"</p>\
                            <p class=\"quote-person\">Casey Neistat</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Any powerful idea is absolutely fascinating and absolutely useless until you decide to put it to work.\"</p>\
                            <p class=\"quote-person\">Donald Shimoda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Everything is exactly as it is for a reason. The crumb on your table is no mystical reminder of this morning's cookie, it is there because you have chosen not to remove it. No exceptions.\"</p>\
                            <p class=\"quote-person\">Donald Shimoda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"I do not exist to impress the world. I exist to live my life in a way that will make me happy.\"</p>\
                            <p class=\"quote-person\">Donald Shimoda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"You're always free to change your mind and choose a different future, or a different past.\"</p>\
                            <p class=\"quote-person\">Donald Shimoda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"'You don't do anything. Cosmic Law, remember? Like attracts like. Just be who you are, calm and clear and bright. Automatically, as we shine who we are, asking ourselves every minute is this what I really want to do, doing it only when we answer yes, automatically that turns away those who have nothing to learn from who we are and attracts those who do, and from whom we have to learn, as well.' 'But that takes a lot of faith, and meanwhile you get pretty lonely.\"</p>\
                            <p class=\"quote-person\">Donald Shimoda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"You are led through your lifetime by the inner learning creature, the playful spiritual being that is your real self. Don't turn away from possible futures before you're certain you don't have anything to learn from them. You're always free to change your mind and choose a different future, or a different past.\"</p>\
                            <p class=\"quote-person\">Donald Shimoda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"If a problem can be solved there is no use worrying about it. If it can't be solved, worrying will do no good.\"</p>\
                            <p class=\"quote-person\">Donald Shimoda</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Don't be afraid to admit when you don't know something. The smartest people out there are also the ones learning the most each day.\"</p>\
                            <p class=\"quote-person\">Captian Sparklez</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.\"</p>\
                            <p class=\"quote-person\">David Goggins</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"I run because if I didn’t, I’d be sluggish and glum and spend too much time on the couch. I run to breathe the fresh air. I run to explore. I run to escape the ordinary. I run to savor the trip along the way. Life becomes a little more vibrant, a little more intense. I like that.\"</p>\
                            <p class=\"quote-person\">Dean Karnazes</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"These days, there are angry ghosts all around us - dead from wars, sickness, starvation - and nobody cares. So you say you're under a curse? So what? So's the whole damn world.\"</p>\
                            <p class=\"quote-person\">Jigo, from Princess Mononoke</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"The secret of getting ahead is getting started.\"</p>\
                            <p class=\"quote-person\">Mark Twain</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"But remember this, Japanese boy - airplanes are not tools for war, they are not for making money. Airplanes are beautiful dreams. Engineers turn dreams into reality.\"</p>\
                            <p class=\"quote-person\">Caproni, from The Wind Rises</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"There are days when the sun does not shine and the rain does not pour, but the sky sinks quietly into itself, wraps itself up, is gray but not black, sultry, but not with the tension of an imminent thunderstorm.\"</p>\
                            <p class=\"quote-person\">Joseph Knecht</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"For a committed person, there is no such thing as failure, only lessons learnt.\"</p>\
                            <p class=\"quote-person\">Nathan Steele (me!)</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Running pain is not from running itself. It's from how we interact with the ground.\"</p>\
                            <p class=\"quote-person\">John Kelly</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Don't compete with anyone, but compete with yourself.\"</p>\
                            <p class=\"quote-person\">Eluid Kipchoge</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"I wasted so much time worrying about what could go wrong. But what did go wrong was never the things I worried about.\"</p>\
                            <p class=\"quote-person\">Aksel, from 'The Worst Person in the World'</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"At my age the candles cost more than the cake. I'm not afraid of dying. I'm afraid I haven't been alive enough. It should be written on every school room blackboard: Life is a playground, or nothing.\"</p>\
                            <p class=\"quote-person\">Nemo, from Mr Nobody</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"There comes a time in life where everything seems narrow. Choices have been made. I can only continue on. I know myself like the back of my hand. I can predict my every reaction. My life has been cast in cement with airbags and seatbelts. I've done everything to reach this point and now that I'm here, I'm fucking bored. The hardest thing is knowing whether I'm still alive.\"</p>\
                            <p class=\"quote-person\">Nemo, from Mr Nobody</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Every path is the right path. Everything could've been anything else. And it would have just as much meaning.\"</p>\
                            <p class=\"quote-person\">Nemo, from Mr Nobody</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"If you hear a voice within you saying 'you cannot paint', then by all means paint, and that voice will be silenced.\"</p>\
                            <p class=\"quote-person\">Vincent Van Gogh</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Happiness can be found even in the darkest of times if one remembers to turn on the light.\"</p>\
                            <p class=\"quote-person\">Albus Dumbledore</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"The pursuit of looking young accentuates the fear of growing old. So maybe if we embraced growing old, embraced our wrinkles and other people's wrinkles, maybe marketers would have less fear to work with and magnify.\"</p>\
                            <p class=\"quote-person\">Matt Haig</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"People have forgotten what life is all about, they've forgotten what it feels like to be alive! They need to be reminded about what they have, and what they could loose.\"</p>\
                            <p class=\"quote-person\">Leonard, from Awakening</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"How lucky I am to have something that makes saying goodbye hard.\"</p>\
                            <p class=\"quote-person\">Winnie The Pooh</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Free time is the enemy of progress.\"</p>\
                            <p class=\"quote-person\">Casey Neistat</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"I have no special talent. I am passionately curious.\"</p>\
                            <p class=\"quote-person\">Albert Einstein</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"I'm not running away. But this is one corner in one country in one continent in one planet that's a corner of a galaxy that is a corner of a universe that is forever growing and shrinking and creating and destroying and never remaining the same for a single millisecond. And this is so much, SO MUCH, to see, Amy. Because it goes so fast. I'm not running away from things. I'm running to them before they flare and fade forever. That's all right. Our lives would never remain the same. They can't. One day, soon maybe, you'll stop. I've known for a while.\"</p>\
                            <p class=\"quote-person\">Doctor Who</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Talent is pursued interest. In other words, anything that you're willing to practice, you can do.\"</p>\
                            <p class=\"quote-person\">Bob Ross</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Life is suffering. It is hard. The world is cursed. But still, you find reasons to keep living.\"</p>\
                            <p class=\"quote-person\">Osa, from Princess Mononoke</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"This great evil, where's it come from? How'd it steal into the world? What seed, what root did it grow from? Who's doing this? Who's killing us, robbing us of life and light, mocking us with the sight of what we might've known? Does our ruin benefit the earth, does it help the grass to grow, the sun to shine? Is this darkness in you, too? Have you passed through this night?.\"</p>\
                            <p class=\"quote-person\">Edward Train, from The Thin Red Line</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"In later chapters, the Universe will seem different. The expansion of spacetime will make distant stars invisible, and the night skies will go dark. Perhaps life in the far future will wonder what it was like to live in the Universe's brilliant early days? We are lucky enough to know the answer. All we have to do is look up.\"</p>\
                            <p class=\"quote-person\">Melodysheep</p>\
                        </li>\
                        <li>\
                            <p class=\"quote-str\">\"Don't tell me what I can't do.\"</p>\
                            <p class=\"quote-person\">John Locke</p>\
                        </li>\
                    </ul>\
                    ",
            tags: ["Notes"]
        },
    ],

    universityAssignments: [
        {
            id: "1",
            date: "December 2018",
            moduleTitle: "Algorithm Design & Analysis",
            moduleCode: "CSC2023",
            assignmentTitle: "Bin Packing Algorithm Design & Analysis",
            stage: "Stage 2",
            percentage: "92%",
            thumbnail: require('../img/uniAssigment-card-backgrounds/algs.jpg'),
            content: "\
            <div class='intro'> \
                <p>Consider the following variant of the Bin Packing problem, called the Glass Cutting Problem.</p> \
                <p>We have an unlimited supply of two-dimensional glass sheets, each sheet having a width of W and a height of H. We also have a request of N rectangular shapes, with widths w1,w2,…,wN (where wi <= W, i=1,…,N) and heights h1,h2,…,hN (where hi <= H, i=1,…,N).</p> \
                <p>We use a glass cutting machine that conducts a specific type of cut, namely the guillotine cut. A guillotine cut is a cut from one edge of a sheet to the opposite edge, parallel to the remaining edges. In other words, when applied to a rectangle, the cut is of guillotine type if it produces two new rectangles. The cutting patterns for the sheets are produced in at most two stages (Figure 1). In the first stage, parallel (horizontal) guillotine cuts are produced on a sheet to produce a set of ‘shelves’. In the second stage, vertical guillotine cuts are made on each shelf to produce the required shapes. If the shapes in a shelf are not all of the same height, additional trimming of the shapes is required (Figure 2).</p> \
            </div> \
            <div class='main'> \
                <img src='https://raw.githubusercontent.com/nimpod/nathansteele/master/src/img/university-assignments/figure1.PNG' /> \
                <img src='https://raw.githubusercontent.com/nimpod/nathansteele/master/src/img/university-assignments/figure2.PNG' /> \
                <p>Shelves, parallel to the horizontal axis, have a height equal to the height of the leftmost shape in the shelf, and a width equals to W (the width of the sheet). All shapes in a shelf are placed such that the bottom side is on the shelf floor. There can be as many shelves in a sheet as needed as long as the total height of all shelves does not exceed H (the height of the sheet).</p> \
                <p>The problem is to place all the shapes on the smallest number of sheets. Therefore, you need to design an algorithm that lays out the shapes across as few sheets as possible under the following rules:</p>  \
            </div> \
            "
        },
        {
            id: "2",
            date: "March 2019",
            moduleTitle: "Database Technologies",
            moduleCode: "CSC2024",
            assignmentTitle: "IMDb Rating Analysis",
            stage: "Stage 2",
            percentage: "100%",
            thumbnail: require('../img/uniAssigment-card-backgrounds/databases.jpeg'),
            content: "\
            <div class='intro'> \
                <p>Intro...</p> \
            </div> \
            <div class='main'> \
                <p>Main content ...</p> \
            </div> \
            "
        }
    ],

    albumReviews: [
        {
            linkRym: "https://rateyourmusic.com/release/album/yes/fly-from-here/",
            linkYoutube: "https://www.youtube.com/watch?v=SEs-i9kMpKg",
            artistName: "Yes",
            albumName: "Fly From Here",
            yearOfRelease: "2011",
            genres: ["Progressive rock", "Symphonic prog", "Progressive pop"],
            myRating: "10",
            myReview: "Truly one of the most grandiose, epic, uplifting musical experiences of my life. Every song absolutley bangs, flows perfectly, and as an album experience it just all feels so cohesive and well-crafted. Solitaire is undoubetley one of the weaker tracks on the album, but its not bad, better than most acoustic tracks you find on any other prog album in my opinion. It will forever baffle me why more people don't adore this album as much as I do. Shame they had to go and ruin that with the shitty 'remaster' in 2018 with no Benoît David.",
            myTrackRatings: {
                "Fly From Here: Overture": "9.0",
                "Fly From Here, Part I: We Can Fly": "10.0",
                "Fly From Here, Part II: Sad Night At The Air Field": "10.0",
                "Fly From Here, Part III: Madman At The Scenes": "10.0",
                "Fly From Here, Part IV: Bumpy Ride": "10.0",
                "Fly From Here, Part V: We Can Fly (Reprise)": "10.0",
                "The Man You Always Wanted To Be": "10.0",
                "Life On A Film Set": "10.0",
                "Hour Of Need": "10.0",
                "Solitaire": "8.0",
                "Into The Storm": "9.5"
            }
        }
    ],

    filmReviews: [
        {
            "letterboxdUrl": "https://boxd.it/81lO",
            "title": "White God",
            "myRating": "9.2",
            "screenshots": [
                require('../img/films/whitegod/screenshot1.jpg'),
                require('../img/films/whitegod/screenshot2.jpg'),
                require('../img/films/whitegod/screenshot3.jpg'),
            ],
            "myTags": ["Emotional", "Friendship", "Forgiveness", "Animal welfare", "Great cinematography", "The universal power of music", "Budapest"],
            "myReview": " \
                <div class='review-content'> \
                    <div class='toggle-section-container'> \
                        <div class='toggle-section-btn'></div> \
                        <span>#context</span> \
                    </div> \
                    <div class='review-context'> \
                        <p>White God is one of those kind of films where loads of things at the beginning piss me off and I'm almost ready to stop watching, and then BOOM everything goes nuts and I'm totally on board with the story and characters. (similar feelings to The Nightingale, The Revenant, Revenge, mother!)</p> \
                        <p>Sometimes a picture speaks a thousand words, so why stuff your films with meandering filler conversations when you could be expressing raw emotions and compelling character development!</p> \
                        <p>Jó napot kívánok!!!!</p> \
                        <picture class=\"img\">\
                            <img width=400 src=screenshot1 alt=\"White God screenshot\" />\
                        </picture>\
                    </div> \
                    <div class='toggle-section-container'> \
                        <div class='toggle-section-btn'></div> \
                        <span>#synopsis</span> \
                    </div> \
                    <div class='review-briefSynopsis'> \
                        <p>A cautionary tale between a superior species and its disgraced inferior - Favoring pedigree dogs, a new regulation puts a severe tax on mixed breeds. \
                        Owners dump their dogs and shelters become overcrowded. 13-year-old Lili fights desperately to protect her pet Hagen, but her father eventually sets the dog free on the streets.</p> \
                        <picture class=\"img\">\
                            <img width=400 src=screenshot3 alt=\"White God screenshot\" />\
                        </picture>\
                    </div> \
                    <div class='toggle-section-container'> \
                        <div class='toggle-section-btn'></div> \
                        <span>#postives&negatives</span> \
                    </div> \
                    <div class='review-positivesAndNegatives'> \
                        <p>I never thought a Hungarian schoolgirl playing Franz Liszt's Hungarian Rhapsody on a trumpet to a group of dogs would make me cry, but here we are.</p> \
                        <p>Also love how most of the credits are just dogs and dog trainers.</p> \
                        <p>It's incredible how the filmmakers were able to portray so much emotion/despair/sadness just by filming dogs.</p> \
                        <picture class=\"img\">\
                            <img width=400 src=screenshot2 alt=\"White God screenshot\" />\
                        </picture>\
                    </div> \
                </div> \
            ".replace(/screenshot1|screenshot2|screenshot3/gi, function(matched) {
                var mapObj = {
                    screenshot1: require('../img/films/whitegod/screenshot1.jpg'),
                    screenshot2: require('../img/films/whitegod/screenshot2.jpg'),
                    screenshot3: require('../img/films/whitegod/screenshot3.jpg'),
                };
                return mapObj[matched];
            })
        },
        {
            "letterboxdUrl": "https://boxd.it/2sXo",
            "title": "Flatland",
            "myRating": "10",
            "screenshots": [
                require('../img/films/flatland/screenshot1.png'),
                require('../img/films/flatland/screenshot2.png'),
                require('../img/films/flatland/screenshot3.png'),
            ],
            "myTags": ["Dimensionality", "Questioning reality", "Perspective", "Mathematics", "War", "Corruption", "Emotional"],
            "myReview": "<div class='review-content'> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#context</span> \
                            </div> \
                            <div class='review-context'> \
                                <p>Controversial number pick... I know... but hear me out...</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot1 alt=\"Flatland screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#synopsis</span> \
                            </div> \
                            <div class='review-briefSynopsis'> \
                                <p>Flatland is a two-dimensional universe occupied by living geometric figures - squares, triangles, circles, etc. A Square, Attorney At Law, finds himself in the middle of two upheavals: the rise of martial law by\
                                 the circular leadership of Flatland, and the arrival of A Sphere, CEO Of Messiah, Incorporated, a creature from a hitherto-unknown third dimensional world.</p> \
                                 <picture class=\"img\">\
                                    <img width=400 src=screenshot2 alt=\"Flatland screenshot\" />\
                                </picture>\
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot3 alt=\"Flatland screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#postives&negatives</span> \
                            </div> \
                            <div class='review-positivesAndNegatives'> \
                                <p>insert potentially informative discussion here...</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot4 alt=\"Flatland screenshot\" />\
                                </picture>\
                            </div> \
                        </div> \
            ".replace(/screenshot1|screenshot2|screenshot3|screenshot4/gi, function(matched) {
                var mapObj = {
                    screenshot1: require('../img/films/flatland/screenshot1.png'),
                    screenshot2: require('../img/films/flatland/screenshot2.png'),
                    screenshot3: require('../img/films/flatland/screenshot3.png'),
                    screenshot4: require('../img/films/flatland/screenshot4.png'),
                };
                return mapObj[matched];
            })
        },
        {
            "letterboxdUrl": "https://boxd.it/1Xag",
            "title": "Feast",
            "myRating": "7.6",
            "screenshots": [
                require('../img/films/feast/screenshot1.PNG'),
                require('../img/films/feast/screenshot2.PNG'),
                require('../img/films/feast/screenshot3.PNG')
            ],
            "myTags": ["Creature-feature", "One-location", "Survival", "Fun", "Cool practical effects"],
            "myReview": "<div class='review-content'> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#context</span> \
                            </div> \
                            <div class='review-context'> \
                                <p>I went into this film with 0 expectations, expecting nothing more than a simple fun creature-feature film... Somehow it was that and a lot more!</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot1 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#synopsis</span> \
                            </div> \
                            <div class='review-briefSynopsis'> \
                                <p>A bunch of strangers are locked in a bar for the night as monsters try and get in. There really isn't much more to it and that is where the beauty of this film lies.</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot2 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#postives&negatives</span> \
                            </div> \
                            <div class='review-positivesAndNegatives'> \
                                <p>+ unusual characters</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot3 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                        </div> \
                        ".replace(/screenshot1|screenshot2|screenshot3/gi, function(matched) {
                            var mapObj = {
                                screenshot1: require('../img/films/feast/screenshot1.PNG'),
                                screenshot2: require('../img/films/feast/screenshot2.PNG'),
                                screenshot3: require('../img/films/feast/screenshot3.PNG'),
                            };
                            return mapObj[matched];
                        })
        },
        {
            "letterboxdUrl": "https://boxd.it/AF4",
            "customPosterUrl": "https://m.media-amazon.com/images/M/MV5BZDY3ZGI0ZDAtMThlNy00MzAxLTg4YjAtNjkwYTkxNmQ4MjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            "title": "The Secret World of Arrietty",
            "myRating": "9.1",
            "screenshots": [
                require('../img/films/thesecretworldofarrietty/screenshot1.jpg'),
                require('../img/films/thesecretworldofarrietty/screenshot2.jpg'),
                require('../img/films/thesecretworldofarrietty/screenshot3.jpg')
            ],
            "myTags": ["Humanity and nature coexisting", "Friendship", "Kindness", "Embrace mother nature", "Evolving perspective of life", "Intimate", "Colourful", "Great cinematography", "Great soundtrack", "Girl power"],
            "myReview": "<div class='review-content'> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#context</span> \
                            </div> \
                            <div class='review-context'> \
                                <p>Arrietty is a film about growing up and beginning your own exploration of the world, but is also a film about discovering new ways of living, \
                                integrating humanity with nature, finding positives out of negatives, and generally about the ever-changing perspectives of life and how that evolves as you \
                                gather more life experience.</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot1 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#synopsis</span> \
                            </div> \
                            <div class='review-briefSynopsis'> \
                                <p>A family of tiny people live anonymously in another family's residence, borrowing simple items to make their home. \
                                 Life changes for the tiny people when Arrietty, is discovered.</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot2 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#postives&negatives</span> \
                            </div> \
                            <div class='review-positivesAndNegatives'> \
                                <p>Instantly one of my new favourites.</p> \
                                <p>It never resorted to petty narrative cliches despite so many opportunities to do so (like many U-rated animation films these days).</p> \
                                <p>Explores similar themes to Kikis Delivery Service (a young mind venturing out into a big scary world), except with Arrietty the world is literally massive, and the characters are tiny!</p> \
                                <p>Ontop of all the thematic depth and character development, the whole experience of the film is like a beutiful moving painting, every frame looks amazing. It doesn't look like it was \
                                generated by an AI but clearly has a lot of attention to detail and rich in colour. Even the cinematography was amazing, really emphasing the difference in size and perspectives.</p> \
                                <p>Asks questions about how humanity can become more integrated with nature, instead of fighting it for our own selfish needs. It did this without seeming preachy, \
                                but rather compassionate and thought-provoking (similar thoughts to Nausicaa).</p> \
                                <p>The idea of loads of little human creatures creating their own tiny habitats inside the walls of a house, a world that looks so magical when you're inside it, \
                                but so tiny and insignificant when seeing it from their perspective. And this is obviously real! Think about how much wildlife exists just in your garden! \
                                So many interesting stories about nature, and how our existence can either harm them or benefit them.</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot3 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                        </div> \
            ".replace(/screenshot1|screenshot2|screenshot3/gi, function(matched) {
                var mapObj = {
                    screenshot1: require('../img/films/thesecretworldofarrietty/screenshot1.jpg'),
                    screenshot2: require('../img/films/thesecretworldofarrietty/screenshot2.jpg'),
                    screenshot3: require('../img/films/thesecretworldofarrietty/screenshot3.jpg'),
                };
                return mapObj[matched];
            }),
        },
        {
            "letterboxdUrl": "https://boxd.it/fb0K",
            "title": "A Ghost Story",
            "myRating": "10",
            "screenshots": [
                require('../img/films/aghoststory/screenshot1.jpg'),
                require('../img/films/aghoststory/screenshot2.jpg'),
                require('../img/films/aghoststory/screenshot3.jpg'),
                require('../img/films/aghoststory/screenshot4.jpg'),
                require('../img/films/aghoststory/screenshot5.jpg')
            ],
            "myTags": ["Death", "Life", "Vast", "Cosmic", "Beyond existence", "Mysterious", "Creative use of lighting", "Creative use of aspect ratio", "Great soundtrack"],
            "myReview": "<div class='review-content'> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#context</span> \
                            </div> \
                            <div class='review-context'> \
                                <p>There are so many layers to this wonderful thoughtful piece of art - it's so atmospheric, mysterious, sad, beautiful, ambitious, unusual, creative, minimal, \
                                cosmic, vast, and its all centered around such a simple idea but with immaculate execution. </p> \
                                <p>The soundtrack is just beautiful. Quiet and ambient at times, heartbreaking at other times, and explosive with energy other times. </p> \
                                <p>And crikey the cinematography and use of light is FANTASTIC!!</p> \
                                <p>Many questions are posed about life, death, and what happens after. It made me think about what impact my life may have in the far future. How will people remember \
                                me? Will I be forgotten in amongst billions of others? What unbelievable cosmic events will I miss out on outside of my lifetime? I believe that we should not feel \
                                small, insignificant, unimportant or pointless. Instead, we should thank our eyes, our brain, our body and our own silent companion throughout our life for allowing \
                                you consciousness at such an extraordinary time period where we can study the mysteries of the universe and observe things that are incomprehensibly far away. \
                                We too as human beings are made up of the same stuff as galaxies - we are just a particular arrangment of atoms that somehow results in consciouness and an \
                                understanding of our place in the universe. Maybe the true meaning of life, while you have it, is to simply give it some meaning.</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot1 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#synopsis</span> \
                            </div> \
                            <div class='review-briefSynopsis'> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot2 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#postives&negatives</span> \
                            </div> \
                            <div class='review-positivesAndNegatives'> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot3 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                        </div> \
            ".replace(/screenshot1|screenshot2|screenshot3|screenshot4|screenshot5/gi, function(matched) {
                var mapObj = {
                    screenshot1: require('../img/films/aghoststory/screenshot1.jpg'),
                    screenshot2: require('../img/films/aghoststory/screenshot2.jpg'),
                    screenshot3: require('../img/films/aghoststory/screenshot3.jpg'),
                    screenshot4: require('../img/films/aghoststory/screenshot4.jpg'),
                    screenshot5: require('../img/films/aghoststory/screenshot5.jpg'),
                };
                return mapObj[matched];
            }),
            "dateReviewed": "14/11/2021"
        },
        {
            "letterboxdUrl": "https://boxd.it/2BiY",
            "title": "Detachment",
            "myRating": "9.2",
            "myTags": ["School", "Teacher-student dichotomy", "Addiction", "Profound", "Melancholic", "Kindness", "Sad", "Depressing"],
            "myReview": "",
            "customPosterUrl": require('../img/films/detachment/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/tbEe",
            "title": "Belle",
            "titleDisplayed": "Belle: The Dragon and the Freckled Princess",
            "myRating": "9.0",
            "myTags": ["Virtual world", "Social media", "Bullying", "Friendship", "Sad", "Great soundtrack", "Colourful", "Anime", "Girl power"],
            "myReview": "",
            "customPosterUrl": require('../img/films/belle/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/cOo6",
            "title": "Sing Street",
            "myRating": "10",
            "myTags": ["Great soundtrack", "Emotional", "Uplifting", "Happy-Sad", "Soulmate", "Dublin", "New wave 80s music"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/hUMe",
            "title": "Aniara",
            "myRating": "9.3",
            "myTags": ["The incomprehensible vastness of space", "Civilisation on spaceship", "Contemplative sci-fi", "Virtual world", "Mysterious", "Creepy", "Dystopia", "Exploring the dark depths of humanity"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/bjvI",
            "title": "Tag",
            "myRating": "8.4",
            "myTags": ["Fun", "Stochasticity", "Determinism", "Randomness", "Simulation", "Running", "Girl power"],
            "myReview": "",
            "customPosterUrl": require('../img/films/tag/custom_poster.jpeg')
        },
        {
            "letterboxdUrl": "https://boxd.it/e1Ga",
            "title": "The Nightingale",
            "myRating": "9.4",
            "myTags": ["Revenge-fantasy", "Tasmania", "1825", "Aboriginal people", "The evil British empire", "Seeking closure", "Getting revenge on evil people", "Challenging to watch at times", "Embrace mother nature", "Intense", "Soulmate"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/26uY",
            "title": "Pleasantville",
            "myRating": "9.5",
            "myTags": ["Creative use of colour", "Virtual world", "Celebration of art", "Finding happiness", "Revolution", "Fuck the system"],
            "myReview": "",
            "customPosterUrl": require('../img/films/pleasantville/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/jpmy",
            "title": "Waves",
            "myRating": "10",
            "myTags": ["Death", "Creative use of colour", "Unconvential aspect ratios", "Emotional", "Family", "Forgiveness", "Kindness", "Great soundtrack", "Colourful", "Finding happiness"],
            "myReview": "",
            "customPosterUrl": require('../img/films/waves/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/29Wm",
            "title": "Life Is Beautiful",
            "myRating": "10",
            "myTags": ["Emotional", "Finding happiness", "Turning negatives into positives", "Family", "War"],
            "myReview": "",
            "customPosterUrl": require('../img/films/lifeisbeautiful/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/dgRU",
            "title": "mother!",
            "myRating": "9.1",
            "myTags": ["Intense", "Polarising", "One-location", "Challenging to watch at times", "Religion", "Exploring the dark depths of humanity", "Disturbing"],
            "myReview": "",
            "customPosterUrl": require('../img/films/mother/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/1JAY",
            "title": "Kiki's Delivery Service",
            "myRating": "8.4",
            "myTags": ["Endearing", "Happiness", "Growing up", "Discovering independence", "Finding yourself", "Soulmate", "Flying", "Positive reflection on witches", "Utopia", "Anime", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/4JQS",
            "title": "The Wind Rises",
            "myRating": "9.6",
            "myTags": ["Growing up", "Engineering", "War", "Flying", "Soulmate", "Finding yourself", "Anime", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/thewindrises/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/2bc6",
            "title": "Nausica\u00e4 of the Valley of the Wind",
            "myRating": "9.0",
            "myTags": ["Humanity and nature coexisting", "Embrace mother nature", "End of the world", "Dystopia", "Flying", "Great Soundtrack", "Girl power"],
            "myReview": "",
            "customPosterUrl": require('../img/films/nausicaa/custom_poster.PNG')
        },
        {
            "letterboxdUrl": "https://boxd.it/2b1i",
            "title": "Akira",
            "myRating": "8.6",
            "myTags": ["End of the world", "Profound", "Conspiracy", "War", "Colourful", "Great soundtrack", "Anime", "Confusing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/iKDo",
            "title": "Hatching",
            "myRating": "7.9",
            "myTags": ["Brutal", "Doppelganger", "Disturbing", "Metamorphosis", "Creature-feature", "Social media", "Fake celebrity personas"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/amSe",
            "title": "Victoria",
            "myRating": "8.5",
            "myTags": ["One-take", "Melancholic", "Friendship", "Great soundtrack", "Melancholic", "Nightlife", "BreakingBad-ish", "Accidently getting involved in crimminal activity", "Berlin"],
            "myReview": "",
            "customPosterUrl": require('../img/films/victoria/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/u7LW",
            "title": "Kimi",
            "myRating": "7.9",
            "myTags": ["Covid setting", "Conspiracy", "Mysterious", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1pDe",
            "title": "Love Exposure",
            "myRating": "8.1",
            "myTags": ["Exploring the dark depths of humanity", "Challenging to watch at times", "Very long", "Great soundtrack", "Poetic", "Profound", "Friendship", "Religion"],
            "myReview": "",
            "customPosterUrl": require('../img/films/loveexposure/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/1ZTM",
            "title": "The Thin Red Line",
            "myRating": "9.5",
            "myTags": ["Melancholic", "Contemplative", "War", "Poetic", "Profound", "Great cinematography", "Exploring the dark depths of humanity", "Very long"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1k44",
            "title": "Mr. Nobody",
            "myRating": "9.7",
            "myTags": ["Poetic", "Profound", "The many possibilities of life", "Beyond existence", "Immortality", "Confusing", "Randomness", "Emotional", "Utopia", "Futuristic", "Family", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/aPMO",
            "title": "The Brand New Testament",
            "myRating": "10",
            "myTags": ["Religion", "Fun"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/3Icg",
            "title": "Snowpiercer",
            "myRating": "9.5",
            "myTags": ["Total escapism", "Dystopia", "Train", "Snow", "Class", "Poverty", "Humanity condensed into a small location", "Futuristic", "One-location"],
            "myReview": "",
            "customPosterUrl": require('../img/films/snowpiercer/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/28Uk",
            "title": "Rocky",
            "myRating": "8.2",
            "myTags": ["Deeply human", "Inspiring", "Being the underdog", "Soulmate", "Sport"],
            "myReview": "",
            "customPosterUrl": require('../img/films/rocky/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/1W68",
            "title": "Happy-go-Lucky",
            "myRating": "9.3",
            "myTags": ["A slice of life", "Finding happiness", "Friendship", "Finding yourself", "Stoicism", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Iik",
            "title": "District 9",
            "myRating": "9.6",
            "myTags": ["Total escapism", "Intimate story within epic sci-fi plot", "Aliens", "Metamorphosis", "Exploring the dark depths of humanity"],
            "myReview": "",
            "customPosterUrl": require('../img/films/district9/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/i7Q4",
            "title": "Sound of Metal",
            "myRating": "9.4",
            "myTags": ["A slice of life", "Metal", "Finding yourself", "Stoicism", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": require('../img/films/soundofmetal/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/28yy",
            "title": "Apocalypto",
            "myRating": "9.3",
            "myTags": ["Total escapism", "Ancient mayan civilisation", "Architecture", "Amazing set design", "Revenge-fantasy", "Brutal", "Not giving up despite being in a shitty situation"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Bn8",
            "title": "Exte: Hair Extensions",
            "myRating": "8.2",
            "myTags": ["Brutal", "Metamorphosis", "Fun", "Mad concept"],
            "myReview": "",
            "customPosterUrl": require('../img/films/extehairextensions/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/d99c",
            "title": "A Silent Voice: The Movie",
            "myRating": "8.0",
            "myTags": ["Bullying", "Forgiveness", "Anime", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/29I0",
            "title": "Face/Off",
            "myRating": "8.1",
            "myTags": ["Total escapism", "Fun", "Mad concept", "Not giving up despite being in a shitty situation"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1En6",
            "title": "Zombieland",
            "myRating": "7.9",
            "myTags": ["Zombies", "Fun", "Short but effective", "Great character chemistry", "Nostalgic"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/376g",
            "title": "Seeking A Friend For The End Of The World",
            "myRating": "8.0",
            "myTags": ["End of the world", "Death", "Soulmate", "Uplifting", "Great character chemistry", "Stoicism", "Turning negatives into positives"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/iwYi",
            "title": "Crawl",
            "myRating": "7.6",
            "myTags": ["Total escapism", "Creature-feature", "One-location", "Claustrophobic", "Hurricane setting", "Brutal", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": require('../img/films/crawl/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/dCpo",
            "title": "Jungle",
            "myRating": "7.8",
            "myTags": ["Embrace mother nature", "Alone in the wilderness", "South American culture", "Jungle setting", "Not giving up despite being in a shitty situation", "Brutal", "Hallucinations"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2pQ0",
            "title": "Redline",
            "myRating": "8.1",
            "myTags": ["Intricate animation style", "Intepretation of an intergalactic lifestyle", "Fictional racing event", "Audio-visual spectacle", "Intense", "Great soundtrack", "Anime"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/gvme",
            "title": "MFKZ",
            "myRating": "8.0",
            "myTags": ["Intricate animation style", "South American culture", "Mad concept", "Superheros", "Great cinematography", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/4pDO",
            "title": "The Lego Movie",
            "myRating": "8.2",
            "myTags": ["Intricate animation style", "Uplifting", "Fun"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Yqu",
            "title": "Martyrs",
            "myRating": "8.3",
            "myTags": ["Challenging to watch at times", "Brutal", "Claustrophobic", "Exploring the dark depths of humanity", "Very long", "Disturbing", "Not one to watch with the family"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/uRS",
            "title": "Confessions",
            "myRating": "8.2",
            "myTags": ["Audio-visual spectacle", "Poetic", "Exploring the dark depths of humanity", "Cognitive dissonance", "Confusing", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/confessions/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/20Xg",
            "title": "Chicken Run",
            "myRating": "8.1",
            "myTags": ["Fun", "Kids film", "Animal welfare", "Emotional", "Great soundtrack", "Nostalgic"],
            "myReview": "",
            "customPosterUrl": require('../img/films/chickenrun/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/26vi",
            "title": "In The Mouth of Madness",
            "myRating": "8.3",
            "myTags": ["Lovecraftian horror", "Creature-feature", "Questioning reality", "Hallucinations", "Cults"],
            "myReview": "",
            "customPosterUrl": "https://pbs.twimg.com/media/FOVvks5UYAIF3aT.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/bdkE",
            "title": "The Red Turtle",
            "myRating": "8.3",
            "myTags": ["Alone in the wilderness", "Embrace mother nature", "Friendship", "Dialogueless", "Fairy tale", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2W60",
            "title": "Cloud Atlas",
            "myRating": "8.3",
            "myTags": ["Very long"],
            "myReview": "",
            "customPosterUrl": require('../img/films/cloudatlas/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/9fLy",
            "title": "The Wailing",
            "myRating": "8.4",
            "myTags": ["Possessed", "Paranormal", "Exorcism", "Brutal", "Tribal", "Mysterious"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/72i",
            "title": "Finding Nemo",
            "myRating": "8.2",
            "myTags": ["Fun", "Nostalgic", "Kids film", "Friendship", "Family"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2bcg",
            "title": "Before Sunset",
            "myRating": "10",
            "myTags": ["Poetic", "Travelling", "Profound", "Happy-sad", "A slice of life"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1YzQ",
            "title": "The Nightmare Before Christmas",
            "myRating": "8.4",
            "myTags": ["Stumbling across the prospect of happiness", "Creature-feature", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/azew",
            "title": "Hacksaw Ridge",
            "myRating": "8.2",
            "myTags": ["War", "Finding positives out of negatives", "Not giving up despite being in a shitty situation", "Inspiring", "Brutal"],
            "myReview": "",
            "customPosterUrl": require('../img/films/hacksawridge/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/amAY",
            "title": "Eddie the Eagle",
            "myRating": "10",
            "myTags": ["Inspiring", "Uplifting", "Proving people wrong", "Being the underdog", "Finding yourself", "Soulmate", "Friendship"],
            "myReview": "",
            "customPosterUrl": require('../img/films/eddietheeagle/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/dUu2",
            "title": "The Autopsy of Jane Doe",
            "myRating": "8.3",
            "myTags": ["Creepy", "Disturbing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/FKS",
            "title": "The Man Who Planted Trees",
            "myRating": "8.5",
            "myTags": ["Alone in the wilderness", "Embrace mother nature", "Poetic", "Profound", "Humanity and nature coexisting", "Nature thriving", "The ebb-and-flow of nature"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/28YG",
            "title": "Bridge to Terabithia",
            "myRating": "8.7",
            "myTags": ["Sad", "Depressing", "Soulmate", "Alone in the wilderness", "Friendship", "Imagination"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1WyQ",
            "title": "Fantastic Mr. Fox",
            "myRating": "8.6",
            "myTags": ["Intricate animation style", "Animal welfare", "Humanity and nature coexisting", "Fun", "Friendship", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/fantasticmrfox/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/dZrW",
            "title": "Isle of Dogs",
            "myRating": "8.7",
            "myTags": ["Intricate animation style", "Great cinematography", "Animal welfare", "Humanity and nature coexisting", "Fun", "Friendship", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/isleofdogs/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/2bcK",
            "title": "Memento",
            "myRating": "8.0",
            "myTags": ["Non-linear timeline", "Confusing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/i4IQ",
            "title": "I'm Thinking of Ending Things",
            "myRating": "8.3",
            "myTags": ["Atmospheric", "Confusing", "Weird", "Snow", "Intimate", "Lonely", "Creepy"],
            "myReview": "",
            "customPosterUrl": require('../img/films/imthinkingofendingthings/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/iIWS",
            "title": "The Empty Man",
            "myRating": "8.3",
            "myTags": ["Atmospheric", "Confusing", "Snow", "Weird", "Disturbing", "Creepy"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/210u",
            "title": "Alive",
            "myRating": "8.4",
            "myTags": ["Survival story", "Not giving up despite being in a shitty situation", "Brutal", "Snow", "Alone in the wilderness"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/dgSy",
            "title": "Split",
            "myRating": "8.5",
            "myTags": ["Claustrophobic", "Disturbing", "Multiple personality disorder"],
            "myReview": "",
            "customPosterUrl": require('../img/films/split/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/25Vu",
            "title": "1408",
            "myRating": "8.5",
            "myTags": ["Claustrophobic", "Disturbing", "One-location", "Atmospheric"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/kJyc",
            "title": "The Vast of Night",
            "myRating": "8.1",
            "myTags": ["Atmospheric", "Mysterious", "Melancholic", "Search for Extra Terrestrial Intelligence (SETI)", "Radio station", "One-take"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/Tdy",
            "title": "Monsters",
            "myRating": "7.9",
            "myTags": ["Atmospheric", "Melancholic", "Aliens", "Soulmate", "Travelling", "Alone in the wilderness", "Virus", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/monsters/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1yBw",
            "title": "Pontypool",
            "myRating": "8.0",
            "myTags": ["Atmospheric", "Mysterious", "Zombies", "Virus", "Radio station", "Starts bad but gets a lot better"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2a2k",
            "title": "Titanic",
            "myRating": "8.4",
            "myTags": ["Nostalgic", "Great soundtrack"],
            "myReview": "",
        },
        {
            "letterboxdUrl": "https://boxd.it/ljDs",
            "title": "RRR",
            "titleDisplayed": "Rise Roar Revolt",
            "myRating": "8.2",
            "myTags": ["Indian culture", "Kindness", "The evil British empire", "Poverty", "Friendship", "Great cinematography", "Very long", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/riseroarrevolt/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/dvXe",
            "title": "Okja",
            "myRating": "7.7",
            "myTags": ["Animal welfare", "Ends a bit weak but the rest is great", "Conspiracy"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/9ghu",
            "title": "The Age of Adaline",
            "myRating": "8.0",
            "myTags": ["Mad concept", "Timey-wimey"],
            "myReview": "",
            "customPosterUrl": require('../img/films/theageofadaline/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1YIe",
            "title": "The Fly",
            "myRating": "7.9",
            "myTags": ["Mad concept", "Metamorphosis", "Creature-feature", "Disturbing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2Y3M",
            "title": "Safety Not Guaranteed",
            "myRating": "7.8",
            "myTags": ["Time travel", "Soulmate", "Friendship", "Fun", "Quirky"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1VfS",
            "title": "After Hours",
            "myRating": "8.0",
            "myTags": ["Claustrophobic", "Conspiracy", "Nightlife", "Disturbing", "Quirky", "Accidently getting involved in crimminal activity"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/gc1Q",
            "title": "Arctic",
            "myRating": "7.8",
            "myTags": ["Alone in the wilderness", "Dialogueless", "Just 2 actors", "Snow", "Survival story"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1GXU",
            "title": "Castaway on the Moon",
            "myRating": "8.2",
            "myTags": ["Alone in the wilderness", "Survival story", "Soulmate", "Finding yourself", "Humanity and nature coexisting", "Quirky", "Lonelyness"],
            "myReview": "",
            "customPosterUrl": require('../img/films/castawayonthemoon/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/wMAk",
            "title": "Marcel the Shell with Shoes On",
            "myRating": "8.0",
            "myTags": ["Quirky", "Endearing", "Poetic", "Mokumentary", "Fun", "Friendship", "Finding your people", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/marceltheshellwithshoeson/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/4W9M",
            "title": "Oculus",
            "myRating": "8.0",
            "myTags": ["Disturbing", "Questioning reality", "Non-linear timeline"],
            "myReview": "",
            "customPosterUrl": require('../img/films/oculus/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/i5vI",
            "title": "Doctor Sleep",
            "myRating": "7.8",
            "myTags": ["Disturbing", "Atmospheric"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/23nq",
            "title": "Severance",
            "myRating": "7.7",
            "myTags": ["Fun", "Disturbing", "Claustrophobic", "Alone in the wilderness", "Revenge-fantasy", "British humour"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/203C",
            "title": "Creep",
            "myRating": "7.7",
            "myTags": ["Disturbing", "Claustrophobic", "Stuck underground", "Gross", "London", "Homelessness", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/29zs",
            "title": "Se7en",
            "myRating": "7.7",
            "myTags": ["Crime", "Murder mystery", "Mysterious", "Atmospheric"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/pSAG",
            "title": "Cadaver",
            "myRating": "8.1",
            "myTags": ["Atmospheric", "Post-apocalypse society", "Conspiracy", "Stuck underground", "Layered", "Mysterious", "Loss of identity", "Cults"],
            "myReview": "",
            "customPosterUrl": require('../img/films/cadaver/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1MTO",
            "title": "Speak",
            "myRating": "7.8",
            "myTags": ["Sad", "Art", "School setting", "Friendship", "Teacher-student dichotomy"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/bkFu",
            "title": "Nocturnal Animals",
            "myRating": "7.7",
            "myTags": ["Atmospheric", "Mysterious", "Murder mystery", "Confusing", "Non-linear timeline", "Story within a story", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/nocturnalanimals/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/i3a4",
            "title": "Ut\u00f8ya: July 22",
            "myRating": "8.0",
            "myTags": ["One-take", "Based on true events", "Terroism", "Brutal", "Intense", "Survival story", "Norweigan island", "Challenging to watch at times"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/oIv0",
            "title": "Shiva Baby",
            "myRating": "7.7",
            "myTags": ["One-location", "Claustrophobic", "Jewish culture", "Funny", "Family gathering"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/rRA",
            "title": "Another Earth",
            "myRating": "7.7",
            "myTags": ["Melancholic", "Mysterious", "Quirky", "Forgiveness", "Friendship", "Futuristic", "Contemplative sci-fi"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Y6O",
            "title": "Starman",
            "myRating": "7.6",
            "myTags": ["Death",  "Alien visitor disguised as human", "Melancholic", "Mysterious", "Quirky", "Forgiveness", "Soulmate", "Aliens", "Not a shit John Carpenter film", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/starman/custom_poster.PNG')
        },
        {
            "letterboxdUrl": "https://boxd.it/5ppu",
            "title": "Dead Set",
            "myRating": "8.3",
            "myTags": ["Zombies", "Depressing", "Brutal", "Gory", "Social commentary", "Mini-series but it might as well be a long film"],
            "myReview": "",
            "customPosterUrl": require('../img/films/deadset/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/2aYo",
            "title": "K-PAX",
            "myRating": "8.1",
            "myTags": ["Melancholic", "Mysterious", "Alien visitor disguised as human", "Search for Extraterrestrial Intelligence (SETI)", "Quirky", "Mental hospital"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2bf0",
            "title": "2001: A Space Odyssey",
            "myRating": "8.3",
            "myTags": ["Mysterious", "Grand", "Great cinematography", "Minimal dialogue", "Artificial Intelligence"],
            "myReview": "",
            "customPosterUrl": require('../img/films/2001spaceodyssey/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/SLa",
            "title": "127 Hours",
            "myRating": "8.6",
            "myTags": ["Alone in the wilderness", "Survival story", "Based on true events", "Hallucinations", "Questioning reality", "Minimal dialogue", "One-location"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2ZA8",
            "title": "The Perks of Being a Wallflower",
            "myRating": "8.2",
            "myTags": ["School setting", "Friendship", "Great chemistry between characters", "A slice of life", "Soulmate"],
            "myReview": "",
            "customPosterUrl": require('../img/films/theperksofbeingawallflower/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1Z5C",
            "title": "The Faculty",
            "myRating": "8.2",
            "myTags": ["Creature-feature", "School setting", "Metamorphosis", "Fun", "Mysterious"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2bde",
            "title": "War of the Worlds",
            "myRating": "8.4",
            "myTags": ["Aliens", "End of the world", "War", "Total escapism", "Intense"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/p3O8",
            "title": "The Map of Tiny Perfect Things",
            "myRating": "8.6",
            "myTags": ["Time loop", "Friendship", "Soulmate", "Turning negatives into positives", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": require('../img/films/themapoftinyperfectthings/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/200I",
            "title": "The Exorcism of Emily Rose",
            "myRating": "8.5",
            "myTags": ["Exorcism", "Disturbing", "Court scenario"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1BPm",
            "title": "Possession",
            "myRating": "8.5",
            "myTags": ["Possession", "Disturbing", "Depressing", "Gross", "Challenging to watch at times"],
            "myReview": "",
            "customPosterUrl": require('../img/films/possession/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/a5fa",
            "title": "La La Land",
            "myRating": "8.7",
            "myTags": ["Uplifting", "Finding yourself", "Friendship", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/T1C",
            "title": "Another Year",
            "myRating": "8.3",
            "myTags": ["A slice of life", "Gardening", "Finding happiness", "The ebb-and-flow of nature", "Forgiveness", "Melancholic", "British humour", "Depressing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/fVJQ",
            "title": "A Quiet Place",
            "myRating": "8.7",
            "myTags": ["Minimal dialogue", "Atmospheric", "Intense", "Aliens", "Post-apocalypse society"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2Pa",
            "title": "The Girl With The Dragon Tattoo",
            "myRating": "8.4",
            "myTags": ["Atmospheric", "Murder mystery", "Mysterious", "Gross", "Conspiracy"],
            "myReview": "",
            "customPosterUrl": require('../img/films/thegirlwiththedragontattoo/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/H4k",
            "title": "Insidious",
            "myRating": "8.9",
            "myTags": ["Disturbing", "Terrifying", "Possession"],
            "myReview": "",
            "customPosterUrl": require('../img/films/insidious/custom_poster.jpeg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/5n0s",
            "title": "Europa Report",
            "myRating": "8.7",
            "myTags": ["Contemplative sci-fi", "Profound",  "Amazing CGI", "Found footage", "Mokumentary", "Exploration of untouched places in the solar system that may harbour unique lifeforms"],
            "myReview": "",
            "customPosterUrl": require('../img/films/europareport/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/s2S",
            "title": "Beginners",
            "myRating": "8.7",
            "myTags": ["Friendship", "Soulmate", "Forgiveness", "Melancholic", "Depressing", "Honest"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/20ZQ",
            "title": "Carrie",
            "myRating": "8.7",
            "myTags": ["Bullying", "Satan", "Possession", "Telekenesis", "School setting"],
            "myReview": "",
            "customPosterUrl": require('../img/films/carrie/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/2a70",
            "title": "The Ring",
            "myRating": "8.4",
            "myTags": ["Atmospheric", "Total escapism", "Great cinematography", "Mysterious", "Death", "Gross", "Murder mystery"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/29PA",
            "title": "Aliens",
            "myRating": "8.9",
            "myTags": ["Total escapism", "Aliens"],
            "myReview": "",
            "customPosterUrl": require('../img/films/aliens/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/MxG",
            "title": "Blue Valentine",
            "myRating": "8.7",
            "myTags": ["Melancholic", "Poetic", "Sad", "Depressing", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/bluevalentine/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/d9YE",
            "title": "Notes on Blindness",
            "myRating": "8.8",
            "myTags": ["Poetic", "Contemplative", "Based on true events", "Turning negatives into positives", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": require('../img/films/notesonblindness/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/i4a",
            "title": "Midnight In Paris",
            "myRating": "8.8",
            "myTags": ["Mad concept", "Nightlife", "Exploration of a new place", "Soulmate", "Friendship", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/3178",
            "title": "Boyhood",
            "myRating": "8.7",
            "myTags": ["A slice of life", "Finding yourself", "Family", "Friendship", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/boyhood/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1NhQ",
            "title": "Coraline",
            "myRating": "8.7",
            "myTags": ["Creepy", "Terrifying", "Intricate animation style", "Colourful"],
            "myReview": "",
            "customPosterUrl": require('../img/films/coraline/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1ARc",
            "title": "Society",
            "myRating": "8.6",
            "myTags": ["Creature-feature", "Conspiracy", "Creepy", "Mysterious", "Social commentary"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/297o",
            "title": "Mulholland Drive",
            "myRating": "8.6",
            "myTags": ["Questioning reality", "Atmospheric", "Mysterious", "A story within a story", "Anti-Hollywood"],
            "myReview": "",
            "customPosterUrl": require('../img/films/mulhollanddrive/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1TKk",
            "title": "The Tenant",
            "myRating": "8.5",
            "myTags": ["Surrealist horror", "Xenophobia", "Isolation", "Hostility", "Paranoia", "Loss of identity", "Claustrophobic", "Conspiracy", "Living in flats"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1KnQ",
            "title": "Fantastic Planet",
            "myRating": "8.7",
            "myTags": ["Surrealism", "Quirky", "Aliens", "Future society"],
            "myReview": "",
            "customPosterUrl": require('../img/films/fantasticplanet/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/d1uG",
            "title": "Under the Shadow",
            "myRating": "8.6",
            "myTags": ["Terrifying", "War", "Spirits", "Possession", "Iran conflict", "Living in flats"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/9JNE",
            "title": "The Frame",
            "myRating": "8.6",
            "myTags": ["Contemplative sci-fi", "Mysterious", "Profound", "Questioning reality", "Simulation", "Creative use of framing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2pTS",
            "title": "We Need To Talk About Kevin",
            "myRating": "8.5",
            "myTags": ["Arthouse psychological thriller", "Disturbing", "Evil psychotic child"],
            "myReview": "",
            "customPosterUrl": require('../img/films/weneedtotalkaboutkevin/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/2ahu",
            "title": "Being John Malkovich",
            "myRating": "8.9",
            "myTags": ["Surrealist fantasy comedy", "Questioning reality", "Funny", "Quirky"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/20eA",
            "title": "My Neighbor Totoro",
            "myRating": "9.0",
            "myTags": ["Embrace mother nature", "Endearing", "Humanity and nature coexisting", "Nature thriving", "Colourful", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/myneighbourtotoro/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1Z2I",
            "title": "Phenomenon",
            "myRating": "8.8",
            "myTags": ["Uplifting", "Mysterious", "Awakanening-ish", "Soulmate"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/mViE",
            "title": "Malignant",
            "myRating": "9.0",
            "myTags": ["Wild", "Great cinematography", "Murder mystery", "Amazing finale"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2Wng",
            "title": "Moonrise Kingdom",
            "myRating": "8.9",
            "myTags": ["Quirky", "Great cinematography", "Friendship", "Great chemistry between characters"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/aZiu",
            "title": "10 Cloverfield Lane",
            "myRating": "8.8",
            "myTags": ["Mysterious", "Claustrophobic", "One-location", "Creepy"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2192",
            "title": "Cloverfield",
            "myRating": "8.8",
            "myTags": ["Found-footage", "Terrifying", "Wild", "Intense", "Aliens", "End of the world"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2ahY",
            "title": "Good Will Hunting",
            "myRating": "9.0",
            "myTags": ["Student teacher dichotomy", "Poetic", "Contemplative", "Learning"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Zks",
            "title": "Slither",
            "myRating": "8.5",
            "myTags": ["Disgusting", "Gross", "Creature-feature", "Zombies", "Fun", "Wild", "Short but effective"],
            "myReview": "",
            "customPosterUrl": require('../img/films/slither/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/29gg",
            "title": "Gremlins",
            "myRating": "8.9",
            "myTags": ["Fun", "Gross", "Creature-feature", "Causing havoc in a fairly normal town"],
            "myReview": "",
            "customPosterUrl": require('../img/films/gremlins/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/gmVE",
            "title": "Vivarium",
            "myRating": "8.9",
            "myTags": ["Claustrophobic", "Terrifying", "Stuck somewhere"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/6bJM",
            "title": "Predestination",
            "myRating": "8.8",
            "myTags": ["Mad concept", "Confusing", "Timey-wimey", "Very small cast"],
            "myReview": "",
            "customPosterUrl": require('../img/films/predestination/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/ppHI",
            "title": "Devs",
            "myRating": "8.6",
            "myTags": ["Contemplative sci-fi", "Conspiracy", "Quantum computing", "Religion", "Faith", "Randomness", "Determinism", "Harnessing the power of computers to do amazing things", "Great soundtrack", "Mini series but might as well be a long film"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/bYJQ",
            "title": "Coco",
            "myRating": "9.0",
            "myTags": ["Emotional", "Total escapism", "The universal power of music", "Friendship", "Deeper than a kids film", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/coco/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/4KHC",
            "title": "Inside Out",
            "myRating": "9.1",
            "myTags": ["Emotional", "Friendship", "Anger", "Clever analogy for real life feelinsg", "Layered", "Deeper than a kids film", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2aqc",
            "title": "The Pianist",
            "myRating": "9.0",
            "myTags": ["War", "Minimal", "Very small cast", "The universal power of music"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/jj4y",
            "title": "1917",
            "myRating": "9.1",
            "myTags": ["War", "One-take", "Not giving up despite being in a shitty situation", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/29J8",
            "title": "Shaun of the Dead",
            "myRating": "9.1",
            "myTags": ["Zombies", "British humour", "Funny"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/20ma",
            "title": "REC",
            "titleDisplayed": "[REC]",
            "myRating": "9.0",
            "myTags": ["Zombies", "Found-footage", "Brutal", "One-location", "Claustrophobic", "Satanic"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/jkPq",
            "title": "Portrait of a Lady on Fire",
            "myRating": "8.8",
            "myTags": ["Great cinematography", "Mysterious", "Melancholic", "France 1800s", "Art"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/dL2y",
            "title": "My Life as a Zucchini",
            "titleDisplayed": "My Life as a Courgette",
            "myRating": "9.0",
            "myTags": ["Stop motion animation", "Uplifting", "Finding happiness", "Friendship", "Emotional", "Endearing", "Soulmate", "Bad parenting"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1EmM",
            "title": "500 Days of Summer",
            "titleDisplayed": "(500) Days of Summer",
            "myRating": "9.3",
            "myTags": ["Soulmate", "Non-linear timeline", "Emotional"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/gzu2",
            "title": "The Peanut Butter Falcon",
            "myRating": "9.3",
            "myTags": ["Uplifting", "Soulmate", "Alone in the wilderness", "Roadtrip", "Underdogs", "Cerebral palsy"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/i7xm",
            "title": "The Mitchells vs the Machines",
            "myRating": "9.3",
            "myTags": ["Intricate animation style", "End of the world", "Uplifting", "Family", "Social commentary"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1VEo",
            "title": "WALL\u00b7E",
            "myRating": "9.1",
            "myTags": ["Post-apocalypse", "Civilisation on spaceship", "Minimal dialogue", "Very small cast", "Emotional", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/walle/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1tQG",
            "title": "Triangle",
            "myRating": "9.3",
            "myTags": ["Time loop", "Non-linear timeline", "One-location", "On boat", "Mad concept"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2416",
            "title": "Hot Fuzz",
            "myRating": "9.3",
            "myTags": ["Murder mystery", "British humour", "Funny"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Yoo",
            "title": "The Exorcist",
            "myRating": "9.0",
            "myTags": ["Terrifying", "Exorcism"],
            "myReview": "",
            "customPosterUrl": require('../img/films/theexorcist/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/gL9g",
            "title": "Revenge",
            "myRating": "9.2",
            "myTags": ["Revenge-fantasy thriller", "Challenging to watch at times", "Girl power"],
            "myReview": "",
            "customPosterUrl": require('../img/films/revenge/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/28xA",
            "title": "It's a Wonderful Life",
            "myRating": "9.2",
            "myTags": ["Family", "Death", "Beyond existence"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/cS4",
            "title": "Rise of the Planet of the Apes",
            "myRating": "9.3",
            "myTags": ["Emotional"],
            "myReview": "",
            "customPosterUrl": require('../img/films/riseoftheplanetoftheapes/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/2awa",
            "title": "Batman Returns",
            "myRating": "9.3",
            "myTags": ["Disturbing", "Weird", "Conspiracy", "Neogothic", "Neogothic architecture", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/batmanreturns/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/iEBG",
            "title": "Jojo Rabbit",
            "myRating": "9.4",
            "myTags": ["War", "Emotional", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/4VZ8",
            "title": "Interstellar",
            "myRating": "9.2",
            "myTags": ["Space exploration", "Timey-wimey"],
            "myReview": "",
            "customPosterUrl": require('../img/films/interstellar/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1Y2i",
            "title": "Children of Men",
            "myRating": "9.4",
            "myTags": ["Contemplative sci-fi", "Post-apocalypse society", "Near future technology"],
            "myReview": "",
            "customPosterUrl": require('../img/films/childrenofmen/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/29OM",
            "title": "Contact",
            "myRating": "9.0",
            "myTags": ["Contemplative sci-fi", "Exploration beyond the solar system", "Alien technology", "Search for Extraterrestrial Intelligence (SETI)"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/7T2k",
            "title": "Ex Machina",
            "myRating": "9.3",
            "myTags": ["Contemplative sci-fi", "Artificial Intelligence", "Revolution"],
            "myReview": "",
            "customPosterUrl": require('../img/films/exmachina/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1MLK",
            "title": "The Sound of Music",
            "myRating": "9.3",
            "myTags": ["Uplifting", "Music", "War", "Britian 1960s", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/3GPq",
            "title": "Evil Dead",
            "myRating": "8.8",
            "myTags": ["Brutal", "Gory", "Wild", "Satan", "Possession"],
            "myReview": "",
            "customPosterUrl": require('../img/films/evildead/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/29Ge",
            "title": "Evil Dead II",
            "myRating": "8.8",
            "myTags": ["Brutal", "Gory", "Wild", "Satan", "Possession", "Timey-wimey"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/b2La",
            "title": "Lion",
            "myRating": "9.4",
            "myTags": ["Poverty", "Family", "Emotional"],
            "myReview": "",
            "customPosterUrl": require('../img/films/lion/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/hTha",
            "title": "Parasite",
            "myRating": "9.3",
            "myTags": ["Claustrophobic", "Psychlogical thriller", "Quirky"],
            "myReview": "",
            "customPosterUrl": require('../img/films/parasite/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/2b4w",
            "title": "Princess Mononoke",
            "myRating": "8.2",
            "myTags": ["Embrace mother nature", "Humanity and nature coexisting", "War", "Corruption", "Evil people in power", "Anime", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/princessmononoke/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/7T0y",
            "title": "Room",
            "myRating": "9.1",
            "myTags": ["Claustrophobic", "Emotional", "Sad", "Recovering from trauma"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/28xK",
            "title": "School of Rock",
            "myRating": "10",
            "myTags": ["Uplifting", "Emotional", "The universal power of music", "School setting"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/5RFA",
            "title": "Birdman or (The Unexpected Virtue of Ignorance)",
            "myRating": "9.2",
            "myTags": ["One-take", "Inspiring", "Nightlife", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/birdman/custom_poster.jpeg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/kWlA",
            "title": "The Invisible Man",
            "myRating": "10",
            "myTags": ["Terrifying", "Total escapism", "Invisibility", "Creepy"],
            "myReview": "",
            "customPosterUrl": require('../img/films/theinvisibleman/custom_poster.jpeg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/29Nu",
            "title": "The Shining",
            "myRating": "9.5",
            "myTags": ["Terrifying", "Atmospheric", "Snow", "One-location", "Possession", "Hallucinations", "Questioning reality"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/hNVe",
            "title": "Hereditary",
            "myRating": "8.3",
            "myTags": ["Terrifying", "Gross", "Family", "Betrayl", "Possession"],
            "myReview": "",
            "customPosterUrl": require('../img/films/hereditary/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/2a46",
            "title": "Monsters, Inc.",
            "myRating": "10",
            "myTags": ["Mad concept", "Emotional", "Amazing CGI", "Endearing"],
            "myReview": "",
            "customPosterUrl": require('../img/films/monstersinc/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/8H5e",
            "title": "The Revenant",
            "myRating": "9.5",
            "myTags": ["Alone in the wilderness", "Survival story", "Mississipi 1800s", "Based on a true story", "Brutal", "Betrayl", "Finding positives from negatives", "Not giving up despite being in a shitty situation", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2a3C",
            "title": "Silent Hill",
            "myRating": "9.6",
            "myTags": ["Atmospheric", "Disgusting", "Gross", "Creature-feature", "Cults", "Religion", "Satanic worshipers", "Foggy town", "Mysterious", "Video game adapatation", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/dZ5m",
            "title": "The Shape of Water",
            "myRating": "9.7",
            "myTags": ["Atmospheric", "Water", "Beautiful", "Melancholic", "Great soundtrack", "Minimal dialogue"],
            "myReview": "",
            "customPosterUrl": require('../img/films/theshapeofwater/custom_poster.jpeg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1USu",
            "title": "Awakenings",
            "myRating": "10",
            "myTags": ["Sad", "Mental hosptital", "Depressing", "Awakanening-ish"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2b8e",
            "title": "Back to the Future",
            "myRating": "10",
            "myTags": ["Uplifting", "Timey-wimey"],
            "myReview": "",
            "customPosterUrl": require('../img/films/backtothefuture/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/18U8",
            "title": "The Truman Show",
            "myRating": "10",
            "myTags": ["Uplifting", "Conspiracy", "Questioning reality", "Religion", "Faith", "Beyond existence"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/29aC",
            "title": "Seven Years in Tibet",
            "myRating": "10",
            "myTags": ["Humanity and nature coexisting", "Exploring new places", "Mountaineering", "Tibet", "Dalia Lama", "Poetic", "Profound", "Great cinematography", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/sevenyearsintibet/custom_poster.PNG')
        },
        {
            "letterboxdUrl": "https://boxd.it/23Fk",
            "title": "The Curious Case of Benjamin Button",
            "myRating": "10",
            "myTags": ["A slice of life", "Death", "Humanity", "Friendship", "Profound"],
            "myReview": "",
            "customPosterUrl": require('../img/films/thecuriouscaseofbenjaminbutton/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/37pC",
            "title": "Life of Pi",
            "myRating": "10",
            "myTags": ["Exploring new places", "Survival story", "Based on a true story", "Stranded at sea"],
            "myReview": "",
            "customPosterUrl": require('../img/films/lifeofpi/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/2a1m",
            "title": "The Matrix",
            "myRating": "10",
            "myTags": ["Dystopia"],
            "myReview": "",
            "customPosterUrl": require('../img/films/thematrix/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/eOCm",
            "title": "Get Out",
            "myRating": "10",
            "myTags": ["Psychlogical thriller", "Social commentary", "Terrifying"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/4O24",
            "title": "Her",
            "myRating": "10",
            "myTags": ["Lonleiness", "Artificial Intelligence", "Soulmate", "Melancholic", "Emotional", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/her/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/aNGk",
            "title": "Arrival",
            "myRating": "10",
            "myTags": ["Grand sci-fi", "Linguistics", "Non-linear timeline", "Timey-wimey", "Aliens", "Melancholic", "Emotional", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/arrival/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1VGY",
            "title": "The Strangers",
            "myRating": "8.0",
            "myTags": ["Terrifying"],
            "myReview": "",
            "customPosterUrl": require('../img/films/thestrangers/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/3ybW",
            "title": "Helter Skelter",
            "myRating": "8.0",
            "myTags": ["Challenging to watch at times", "Audio-visual spectacle", "Addiction", "Isolation", "Fake celebrity personas", "Terrifying"],
            "myReview": "",
            "customPosterUrl": require('../img/films/helterskelter/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/7t3Q",
            "title": "Starry Eyes",
            "myRating": "8.2",
            "myTags": ["Fake celebrity personas", "Terrifying", "Metamorphosis", "Challenging to watch at times", "Cults"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2a8W",
            "title": "Dogville",
            "myRating": "7.6",
            "myTags": ["Innovative", "One-location", "Depressing", "Challenging to watch at times"],
            "myReview": "",
            "customPosterUrl": require('../img/films/dogville/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/48WY",
            "title": "American Mary",
            "myRating": "7.8",
            "myTags": ["Disturbing", "Body modification"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/293w",
            "title": "The Prestige",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/3SWy",
            "title": "The Secret Life of Walter Mitty",
            "myRating": "7.6",
            "myTags": ["Uplifting", "Exploring new places", "Discovering independence", "Soulmate"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/dVI",
            "title": "Super 8",
            "myRating": "7.7",
            "myTags": [""],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/77xu",
            "title": "The Babadook",
            "myRating": "8.1",
            "myTags": [""],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/oPSK",
            "title": "Infinity Pool",
            "myRating": "8.5",
            "myTags": ["Rebirth", "Hallucinogenic", "Psychedlic", "Vicious", "Disgusting", "Phantasmagoria", "Insecurity", "Ego", "Atmospheric", "Constantly surprising", "Defamiliarization", "Hedonistic", "Libertine"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 9, 8, 8, 8, 9, 9]
        },
        {
            "letterboxdUrl": "https://boxd.it/on14",
            "title": "Poupelle of Chimney Town",
            "myRating": "8.2",
            "myTags": ["Heterodox thinker", "Religion", "Friendship", "Intricate animation style", "Textures", "Steampunk", "Colourful", "Exploring new places", "Anti-smoking"],
            "gradualInterest": [8, 8, 8, 8, 7, 7, 7, 8, 9, 9],
            "screenshots": [
                require('../img/films/poupelleofchimmneytown/screenshot1.PNG'),
                require('../img/films/poupelleofchimmneytown/screenshot2.PNG'),
                require('../img/films/poupelleofchimmneytown/screenshot3.PNG')
            ],
            "customPosterUrl": require('../img/films/poupelleofchimmneytown/custom_poster.jpg'),
            "myReview": "<div class='review-content'> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#context</span> \
                            </div> \
                            <div class='review-context'> \
                                <p>..............</p> \
                                <p>..............</p> \
                                <p>..............</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot1 alt=\"Screenshot\" />\
                                </picture>\
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot2 alt=\"Screenshot\" />\
                                </picture>\
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot3 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#synopsis</span> \
                            </div> \
                            <div class='review-briefSynopsis'> \
                                <p>..............</p> \
                                <p>..............</p> \
                                <p>..............</p> \
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#postives&negatives</span> \
                            </div> \
                            <div class='review-positivesAndNegatives'> \
                                <p>..............</p> \
                                <p>..............</p> \
                                <p>..............</p> \
                            </div> \
                        </div> \
            ".replace(/screenshot1|screenshot2|screenshot3/gi, function(matched) {
                var mapObj = {
                    screenshot1: require('../img/films/poupelleofchimmneytown/screenshot1.PNG'),
                    screenshot2: require('../img/films/poupelleofchimmneytown/screenshot2.PNG'),
                    screenshot3: require('../img/films/poupelleofchimmneytown/screenshot3.PNG'),
                };
                return mapObj[matched];
            })
        },
        {
            "letterboxdUrl": "https://boxd.it/y3U4",
            "title": "xxxHOLiC",
            "myRating": "9.0",
            "myTags": ["Dimensionality", "Audio-visual spectacle", "Positive reflection on witches", "Colourful", "Time loop"],
            "myReview": "",
            "gradualInterest": [9, 8, 8, 8, 8, 8, 8, 7, 8, 9, 9],
            "customPosterUrl": require('../img/films/xxxholic/custom_poster.PNG')
        },
        {
            "letterboxdUrl": "https://boxd.it/25zS",
            "title": "Battle Royale",
            "myRating": "8.1",
            "myTags": ["Social commentary", "Great character depth"],
            "myReview": "",
            "gradualInterest": [6, 8, 9, 9, 9, 8, 8, 8, 8, 8, 7]
        },
        {
            "letterboxdUrl": "https://boxd.it/h2sY",
            "title": "In Fabric",
            "myRating": "8.3",
            "myTags": ["Atmospheric", "Ghosts", "Creepy", "Melancholic", "British humour", "Synthwave", "Great soundtrack"],
            "myReview": "",
            "gradualInterest": [8, 8, 9, 9, 8, 8, 8, 7, 7, 7, 7, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/6zhs",
            "title": "Miss Zombie",
            "myRating": "8.1",
            "myTags": ["Social commentary", "Zombies", "Black & white"],
            "myReview": "",
            "gradualInterest": [6, 5, 5, 6, 7, 8, 8, 9, 9],
            "customPosterUrl": require('../img/films/misszombie/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/23De",
            "title": "Howl’s Moving Castle",
            "myRating": "8.2",
            "myTags": ["War", "Magic", "Studio Ghibli"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 9, 9, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": require('../img/films/howlsmovingcastle/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/A3E",
            "title": "Citadel",
            "myRating": "7.6",
            "myTags": ["Ireland", "Zombies", "Agoraphobia", "Disturbing", "Dark"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/uWPK",
            "title": "All My Friends Hate Me",
            "myRating": "7.6",
            "myTags": ["Social anxiety", "Cotswolds", "British humour"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/1Qfo",
            "title": "Re-cycle",
            "myRating": "8.3",
            "myTags": ["Surreal", "Ghosts", "Abortion"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 9, 9, 9, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/1VhE",
            "title": "Them",
            "myRating": "7.5",
            "myTags": ["Claustrophobic", "Intense", "Home invasion"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 8, 8, 8, 8],
            "customPosterUrl": require('../img/films/them/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/lvxQ",
            "title": "Last Sunrise",
            "myRating": "8.7",
            "myTags": ["Astronomy", "Night skies", "End of the world", "Contemplative sci-fi", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 7, 8, 9, 9, 9],
            "customPosterUrl": require('../img/films/lastsunrise/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/NGk",
            "title": "The Tunnel",
            "myRating": "7.8",
            "myTags": ["Found footage", "Stuck underground", "Claustrophobic", "Frightening", "Creepy"],
            "myReview": "",
            "gradualInterest": [6, 6, 7, 7, 8, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/qyhw",
            "title": "Parasite in Love",
            "myRating": "8.2",
            "myTags": ["Another life-form trying to take control of a human mind", "Soulmate", "Social anxiety", "Scopophobia", "Study of unorthodox people who are outcasts from societal norms"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 7, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/gkFu",
            "title": "Guns Akimbo",
            "myRating": "8.1",
            "myTags": ["Intense", "Action genre done right", "Dystopian game"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/lpUk",
            "title": "Tokyo Vampire Hotel",
            "myRating": "9.0",
            "myTags": ["Intense", "The audience is thrown into a bizzare situation and forced to experience it", "Colourful", "Amazing soundtrack"],
            "myReview": "",
            "gradualInterest": [8, 9, 9, 9, 8, 8, 8, 9, 9, 9, 9, 8, 9, 9]
        },
        {
            "letterboxdUrl": "https://boxd.it/14z6",
            "title": "Ritual",
            "myRating": "8.1",
            "myTags": ["Melancholic", "Loneliness", "Amazing soundtrack"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 7, 8, 8, 7, 9, 8, 8, 7, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/3Ipk",
            "title": "Wolf Children",
            "myRating": "7.9",
            "screenshots": [
                require('../img/films/wolfchildren/screenshot4.png'),
                require('../img/films/wolfchildren/screenshot5.png'),
                require('../img/films/wolfchildren/screenshot7.png')
            ],
            "myTags": ["Nature", "Humanity and nature coexisting", "Summer", "Following characters through their lives as seasons pass by"],
            "myReview": "",
            "gradualInterest": [6, 6, 7, 7, 8, 8, 8, 9, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/h5Uw",
            "title": "Incident in a Ghostland",
            "myRating": "8.6",
            "myTags": ["Disturbing", "Harrowing", "Challenging to watch at times", "Intense", "Bleak", "Non-linear timeline"],
            "myReview": "",
            "gradualInterest": [7, 8, 8, 8, 8, 8, 9, 9, 9]
        },
        {
            "letterboxdUrl": "https://boxd.it/1oDC",
            "title": "Summer Wars",
            "myRating": "7.8",
            "myTags": ["End of the world", "Nature", "Summer", "Family", "Togetherness"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 7, 7, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/2b4m",
            "title": "Spirited Away",
            "myRating": "8.2",
            "myTags": ["Nature", "Japanese culture", "Ghosts", "Soulmate", "Studio ghibli"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 7, 8, 8, 8, 8, 8, 9, 9, 8],
            "customPosterUrl": require('../img/films/spiritedaway/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/2V5K",
            "title": "Wrong",
            "myRating": "7.7",
            "myTags": ["Absurd", "Surreal", "Absurdist comedy", "Confusing"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 7, 8, 7, 8],
            "customPosterUrl": require('../img/films/wrong/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/vOri",
            "title": "Meet Cute",
            "myRating": "8.2",
            "myTags": ["Time travel", "Soulmate", "Loneliness", "Self-inflicted time loop", "Exploring the inner mechanism of the female mind"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 9, 8, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/6fWg",
            "title": "The Land of Cards",
            "myRating": "7.6",
            "myTags": ["Searching for freedom", "Starting a revolution", "Dictatorship", "Politics", "Poems"],
            "myReview": "",
            "gradualInterest": [6, 6, 5, 6, 6, 7, 9, 8, 8, 8, 8],
            "customPosterUrl": require('../img/films/thelandofcards/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/Bf6G",
            "title": "Fall",
            "myRating": "8.0",
            "myTags": ["Intense", "Fear of heights", "Survival story", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/257k",
            "title": "Black Sheep",
            "myRating": "7.5",
            "myTags": ["Funny", "Gory", "Absurd", "Creature-feature"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 8],
            "customPosterUrl": require('../img/films/blacksheep/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/qIvo",
            "title": "Evil Dead Rise",
            "myRating": "8.2",
            "myTags": ["Gory", "Chaotic", "Intense", "Creature-feature"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/cXlFYrSIiRf80KYneHw4FE71u4j.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/P2m",
            "title": "Rubber",
            "myRating": "7.7",
            "myTags": ["Absurd", "Absurdist comedy", "Breaking the fourth wall"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 7, 7]
        },
        {
            "letterboxdUrl": "https://boxd.it/kOf0",
            "title": "Ready or Not",
            "myRating": "8.2",
            "myTags": ["Suprising", "Fun", "Intense"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 8, 8, 9]
        },
        {
            "letterboxdUrl": "https://boxd.it/25jq",
            "title": "The Broken",
            "myRating": "7.6",
            "myTags": ["Confusing", "Suspensful", "Atmospheric", "Murky", "Doppelganger", "Trauma", "Mental illness", "Unknown entities disguised as humans"],
            "myReview": "",
            "gradualInterest": [6, 7, 7, 7, 8, 8, 7, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/1Dnu",
            "title": "The Book of Eli",
            "myRating": "7.9",
            "myTags": ["Faith", "Religon", "Exploring unknown territory", "Post-apocalyptic world", "Humanity", "Growth", "Death", "Stylistic", "Atmospheric", "People that are blind"],
            "myReview": "",
            "gradualInterest": [6, 6, 6, 7, 7, 6, 7, 7, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/2bcU",
            "title": "Before Sunrise",
            "myRating": "9.1",
            "myTags": ["Soulmate"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 9, 9, 9, 9, 9]
        },
        {
            "letterboxdUrl": "https://boxd.it/kKi0",
            "title": "Last and First Men",
            "myRating": "8.0",
            "myTags": ["Exploring unknown territory"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 9, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/w1Im",
            "title": "Hellbender",
            "myRating": "7.9",
            "myTags": ["Satanic rituals"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": require('../img/films/hellbender/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/29zs",
            "title": "Se7en",
            "myRating": "7.9",
            "myTags": ["Neo-noir"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 8, 7, 7, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/1YUk",
            "title": "Species",
            "myRating": "7.9",
            "myTags": ["Creatures"],
            "myReview": "",
            "gradualInterest": [6, 7, 7, 8, 8, 8, 8, 8, 8, 8, 7]
        },
        {
            "letterboxdUrl": "https://boxd.it/1tXC",
            "title": "Buried",
            "myRating": "7.8",
            "myTags": ["Claustrophobic"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/fMfM",
            "title": "Leave No Trace",
            "myRating": "7.7",
            "myTags": ["Nature", "Discovering indepdence"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8],
            "customPosterUrl": require('../img/films/leavenotrace/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/27qS",
            "title": "Solaris",
            "myRating": "7.6",
            "myTags": ["Astronomy", "Psychedelic", "Confusing", "Trippy"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/zZ8",
            "title": "Tetsuo: The Bullet Man",
            "myRating": "8.4",
            "screenshots": [
                require('../img/films/tetsuothebulletman/screenshot1.PNG'),
                require('../img/films/tetsuothebulletman/screenshot2.PNG'),
                require('../img/films/tetsuothebulletman/screenshot3.PNG'),
            ],
            "myTags": ["Disturbing", "Cyberpunk", "Biopunk", "Stylish", "Metal", "Chaotic", "Claustrophobic", "Challenging to watch at times", "Great soundtrack"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8],
            "customPosterUrl": require('../img/films/tetsuothebulletman/custom_poster.jpg')
        }
    ]
}

const RootReducer = (state=initState, action) => {
    return state;
}

export default RootReducer;


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
                    <div class='references-text blog-subsection' id='section5'> \
                        <h3 class='subgroup-title'>References</h3>\
                        <p><a href='https://www.youtube.com/watch?v=xrGAQCq9BMU'>A great video about Cassini's grand finale, by NASA themselves</a></p>\
                        <p><a href='https://www.youtube.com/watch?v=CDGrhJ4kjFk'>Excellent video from 'Second Thought' one of my favourite educational youtube channels</a></p>\
                        <p><a href='https://www.youtube.com/watch?v=G0g4L6a6Ns4'>A fantastic Cassini news conference (4th April 2017):</a></p>\
                        <p><a href='https://www.youtube.com/watch?v=_9GY6njkMI8&t=0s'>Good video about Cassini's grand finale, including a fun artsy compilation using NASA's Cassini photographs, from a terrible YouTube channel about conspiracy theories and unbelievably dumb ancient alien videos, but he made a good video this time</a></p> \
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
                                <td>6,300</td>\
                            </tr> \
                            <tr> \
                                <td><a href='https://www.nasa.gov/content/goddard/parker-solar-probe/'>Parker Solar Probe</a></td> \
                                <td>429,988</td> \
                                <td>692</td> \
                                <td>0.0023%</td> \
                                <td>73,000</td>\
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
            date: "30 Sep 2022",
            title: "Venera spaceprobes",
            content: "blah",
            tags: ["Astronomy"]
        },
        {
            id: "21",
            date: "30 Sep 2022",
            title: "Running form",
            content: "blah",
            tags: ["Running"]
        },
        {
            id: "22",
            date: "30 Sep 2022",
            title: "Flagematics",
            content: "blah",
            tags: ["Vexilology", "Mathematics"]
        },
        {
            id: "23",
            date: "16 Jan 2022",
            title: "Johannes Kepler",
            content: "blah",
            tags: ["InterestingPeople", "Astronomy"]
        },
        {
            id: "24",
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

    monthlyData: [
        {
            month: '2023 January',
            url: "https://letterboxd.com/nbofni/list/2023-january-01-23/",
            myAverageRating: 5.846153846,
            imdbAverageRating: 6.8,
            numOfFilmsWatched: 39,
            numOf7s: 13,
            numOf8s: 5,
            numOf9s: 0,
            numOf10s: 0
        },
        {
            month: '2022 December',
            url: "https://letterboxd.com/nbofni/list/2022-december-12-22/",
            myAverageRating: 5.11627907,
            imdbAverageRating: 6.8,
            numOfFilmsWatched: 43,
            numOf7s: 6,
            numOf8s: 3,
            numOf9s: 0,
            numOf10s: 0
        },
        {
            month: '2022 November',
            url: "https://letterboxd.com/nbofni/list/2022-november-11-22/",
            myAverageRating: 5.1,
            imdbAverageRating: 6.9,
            numOfFilmsWatched: 32,
            numOf7s: 6,
            numOf8s: 1,
            numOf9s: 1,
            numOf10s: 0
        },
        {
            month: '2022 October',
            url: "https://letterboxd.com/nbofni/list/2022-october-10-22/",
            myAverageRating: 5.242424242,
            imdbAverageRating: 6.7,
            numOfFilmsWatched: 33,
            numOf7s: 7,
            numOf8s: 1,
            numOf9s: 2,
            numOf10s: 0
        },
        {
            month: '2022 September',
            url: "https://letterboxd.com/nbofni/list/2022-september-09-2022/",
            myAverageRating: 5.346153846,
            imdbAverageRating: 6.9,
            numOfFilmsWatched: 25,
            numOf7s: 3,
            numOf8s: 3,
            numOf9s: 2,
            numOf10s: 0
        },
        {
            month: '2022 August',
            url: "https://letterboxd.com/nbofni/list/2022-august-08-2022/",
            myAverageRating: 5.285714286,
            imdbAverageRating: 7.1,
            numOfFilmsWatched: 14,
            numOf7s: 5,
            numOf8s: 1,
            numOf9s: 0,
            numOf10s: 0
        },
        {
            month: '2022 July',
            url: "https://letterboxd.com/nbofni/list/2022-july-07-2022/",
            myAverageRating: 5.242424242,
            imdbAverageRating: 7.0,
            numOfFilmsWatched: 33,
            numOf7s: 5,
            numOf8s: 5,
            numOf9s: 1,
            numOf10s: 0
        },
        {
            month: '2022 June',
            url: "https://letterboxd.com/nbofni/list/2022-june-06-2022/",
            myAverageRating: 5.176470588,
            imdbAverageRating: 7.0,
            numOfFilmsWatched: 17,
            numOf7s: 2,
            numOf8s: 0,
            numOf9s: 0,
            numOf10s: 0
        },
        {
            month: '2022 May',
            url: "https://letterboxd.com/nbofni/list/2022-may-05-2022/",
            myAverageRating: 4.93877551,
            imdbAverageRating: 7.1,
            numOfFilmsWatched: 49,
            numOf7s: 9,
            numOf8s: 2,
            numOf9s: 0,
            numOf10s: 0
        },
        {
            month: '2022 April',
            url: "https://letterboxd.com/nbofni/list/2022-april-04-2022/",
            myAverageRating: 5.448275862,
            imdbAverageRating: 7.2,
            numOfFilmsWatched: 58,
            numOf7s: 6,
            numOf8s: 9,
            numOf9s: 1,
            numOf10s: 0
        },
        {
            month: '2022 March',
            url: "https://letterboxd.com/nbofni/list/2022-march-03-2021/",
            myAverageRating: 5.461538462,
            imdbAverageRating: 7.0,
            numOfFilmsWatched: 65,
            numOf7s: 15,
            numOf8s: 5,
            numOf9s: 3,
            numOf10s: 0
        },
        {
            month: '2022 Febuary',
            url: "https://letterboxd.com/nbofni/list/2022-february-02-2022/",
            myAverageRating: 5.400,
            imdbAverageRating: 7.1,
            numOfFilmsWatched: 35,
            numOf7s: 5,
            numOf8s: 5,
            numOf9s: 1,
            numOf10s: 1
        },
        {
            month: '2022 January',
            url: "https://letterboxd.com/nbofni/list/2022-january-01-2022/",
            myAverageRating: 5.800,
            imdbAverageRating: 7.0,
            numOfFilmsWatched: 45,
            numOf7s: 11,
            numOf8s: 6,
            numOf9s: 5,
            numOf10s: 0
        },
        {
            month: '2021 December',
            url: "https://letterboxd.com/nbofni/list/2021-december-12-2021/",
            myAverageRating: 5.666666667,
            imdbAverageRating: 7.1,
            numOfFilmsWatched: 33,
            numOf7s: 6,
            numOf8s: 4,
            numOf9s: 2,
            numOf10s: 0
        },
        {
            month: '2021 November',
            url: "https://letterboxd.com/nbofni/list/2022-august-08-2022/",
            myAverageRating: 5.529411765,
            imdbAverageRating: 7.3,
            numOfFilmsWatched: 34,
            numOf7s: 7,
            numOf8s: 3,
            numOf9s: 1,
            numOf10s: 1
        },
        {
            month: '2021 November',
            url: "https://letterboxd.com/nbofni/list/2021-november-11-2021/",
            myAverageRating: 5.529411765,
            imdbAverageRating: 7.3,
            numOfFilmsWatched: 34,
            numOf7s: 7,
            numOf8s: 3,
            numOf9s: 1,
            numOf10s: 1
        },
        {
            month: '2021 October',
            url: "https://letterboxd.com/nbofni/list/2021-october-10-2021/",
            myAverageRating: 5.766666667,
            imdbAverageRating: 7.0,
            numOfFilmsWatched: 30,
            numOf7s: 4,
            numOf8s: 5,
            numOf9s: 2,
            numOf10s: 0
        },
        {
            month: '2021 September',
            url: "https://letterboxd.com/nbofni/list/2021-september-09-2021/",
            myAverageRating: 6.043478261,
            imdbAverageRating: 7.2,
            numOfFilmsWatched: 23,
            numOf7s: 4,
            numOf8s: 4,
            numOf9s: 3,
            numOf10s: 0
        },
        {
            month: '2021 August',
            url: "https://letterboxd.com/nbofni/list/2021-august-08-2021/",
            myAverageRating: 6.000,
            imdbAverageRating: 7.4,
            numOfFilmsWatched: 36,
            numOf7s: 3,
            numOf8s: 4,
            numOf9s: 7,
            numOf10s: 1
        },
        {
            month: '2021 July',
            url: "https://letterboxd.com/nbofni/list/2021-july-07-2021/",
            myAverageRating: 5.392857143,
            imdbAverageRating: 7.0,
            numOfFilmsWatched: 28,
            numOf7s: 3,
            numOf8s: 3,
            numOf9s: 2,
            numOf10s: 1
        },
        {
            month: '2021 June',
            url: "https://letterboxd.com/nbofni/list/2021-june-06-2021/",
            myAverageRating: 5.576923077,
            imdbAverageRating: 7.2,
            numOfFilmsWatched: 26,
            numOf7s: 4,
            numOf8s: 3,
            numOf9s: 3,
            numOf10s: 0
        },
    ],

    albumReviews: [
        {
            title: "",
            artist: "",
            yearOfRelease: "",
            duration: "",
            genres: [],
            rymLink: "",
            albumCover: "",
            myRating: "",
            contentReview: "",
        }
    ],

    filmReviews: [
        {
            "letterboxdUrl": "https://boxd.it/81lO",
            "title": "White God",
            "myRating": "9.2",
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
                    screenshot1: require('../img/films/whiteGod/screenshot1.jpg'),
                    screenshot2: require('../img/films/whiteGod/screenshot2.jpg'),
                    screenshot3: require('../img/films/whiteGod/screenshot3.jpg'),
                };
                return mapObj[matched];
            })
        },
        {
            "letterboxdUrl": "https://boxd.it/2sXo",
            "title": "Flatland",
            "myRating": "10",
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
            "myTags": ["Creature-feature", "One-location", "Survival", "Fun", "Cool practical effects"],
            "myReview": "<div class='review-content'> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#context</span> \
                            </div> \
                            <div class='review-context'> \
                                <p>I went into this film with 0 expectations, expecting nothing more than a simple fun creature-feature film... Somehow it was that and a lot more!</p> \
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#synopsis</span> \
                            </div> \
                            <div class='review-briefSynopsis'> \
                                <p>A bunch of strangers are locked in a bar for the night as monsters try and get in. There really isn't much more to it and that is where the beauty of this film lies.</p> \
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#postives&negatives</span> \
                            </div> \
                            <div class='review-positivesAndNegatives'> \
                                <p>+ unusual characters</p> \
                            </div> \
                        </div> \
            "
        },
        {
            "letterboxdUrl": "https://boxd.it/AF4",
            "customPosterUrl": require('../img/films/arrietty/custom_poster.png'),
            "title": "The Secret World of Arrietty",
            "myRating": "9.1",
            "myTags": ["Humanity and nature coexisting", "Friendship", "Kindness", "Embrace mother nature", "Evolving perspective of life", "Intimate", "Colourful", "Great cinematography", "Great soundtrack", "Girl power"],
            "myReview": "<div class='review-content'> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#context</span> \
                            </div> \
                            <div class='review-context'> \
                                <p>..............</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot1 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#synopsis</span> \
                            </div> \
                            <div class='review-briefSynopsis'> \
                                <p>The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. \
                                 Life changes for the Clocks when their teenage daughter, Arrietty, is discovered.</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot5 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#postives&negatives</span> \
                            </div> \
                            <div class='review-positivesAndNegatives'> \
                                <p>+ instantly one of my new favourites.</p> \
                                <p>+ this is ultimately a film about growing up and beginning your own exploration of the world, but is also a film about discovering new ways of living, \
                                integrating humanity with nature, finding positives out of negatives, and generally about the ever-changing perspectives of life and how that evolves as you \
                                gather more life experience.</p> \
                                <p>+ it never resorted to petty narrative cliches despite so many opportunities to do so (like many U-rated animation films these days).</p> \
                                <p>+ explores similar themes to Kikis Delivery Service (a young mind venturing out into a big scary world), except with Arrietty the world is literally massive, and the characters are tiny!</p> \
                                <p>+ ontop of all the thematic depth and character development, the whole experience of the film is like a beutiful moving painting, every frame looks amazing. It doesn't look like it was \
                                generated by an AI but clearly has a lot of attention to detail and rich in colour. Even the cinematography was amazing, really emphasing the difference in size and perspectives.</p> \
                                <p>+ asks questions about how humanity can become more integrated with nature, instead of fighting it for our own selfish needs. It did this without seeming preachy, \
                                but rather compassionate and thought-provoking (similar thoughts to Nausicaa).</p> \
                                <p>+ the idea of loads of little human creatures creating their own tiny habitats inside the walls of a house, a world that looks so magical when you're inside it, \
                                but so tiny and insignificant when seeing it from their perspective. And this is obviously real! Think about how much wildlife exists just in your garden! \
                                So many interesting stories about nature, and how our existence can either harm them or benefit them.</p> \
                                <picture class=\"img\">\
                                    <img width=400 src=screenshot2 alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                        </div> \
            ".replace(/screenshot1|screenshot2|screenshot3|screenshot4|screenshot5|screenshot6/gi, function(matched) {
                var mapObj = {
                    screenshot1: require('../img/films/arrietty/screenshot1.jpg'),
                    screenshot2: require('../img/films/arrietty/screenshot2.jpg'),
                    screenshot3: require('../img/films/arrietty/screenshot3.jpg'),
                    screenshot4: require('../img/films/arrietty/screenshot4.jpg'),
                    screenshot5: require('../img/films/arrietty/screenshot5.jpg'),
                    screenshot6: require('../img/films/arrietty/screenshot6.jpg'),
                };
                return mapObj[matched];
            }),
        },
        {
            "letterboxdUrl": "https://boxd.it/fb0K",
            "title": "A Ghost Story",
            "myRating": "10",
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
                                <picture class=\"img\"> \
                                    <img src=\"https://64.media.tumblr.com/fa829abc7638311d5cd690dc54843e23/896a2170aafcb700-dc/s500x750/78befb64bfb233234af96ce5b748e050fe9443f4.jpg\" alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#synopsis</span> \
                            </div> \
                            <div class='review-briefSynopsis'> \
                                <picture class=\"img\">\
                                    <img src=\"https://film-grab.com/wp-content/uploads/photo-gallery/ghost030.jpg?bwg=1551280217\" alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                            <div class='toggle-section-container'> \
                                <div class='toggle-section-btn'></div> \
                                <span>#postives&negatives</span> \
                            </div> \
                            <div class='review-positivesAndNegatives'> \
                                <picture class=\"img\">\
                                    <img src=\"https://cdn.vox-cdn.com/thumbor/8ybh9PrRki7rgc9HpL4Y_xHD4JQ=/0x0:2000x1500/1200x800/filters:focal(1218x255:1538x575)/cdn.vox-cdn.com/uploads/chorus_image/image/55607315/ghoststorycover.0.jpg\" alt=\"Screenshot\" />\
                                </picture>\
                            </div> \
                        </div> \
            ",
            "customPosterUrl": require('../img/films/aGhostStory/custom_poster.PNG'),
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
            "myRating": "9.2",
            "myTags": ["Virtual world", "Social media", "Bullying", "Friendship", "Sad", "Great soundtrack", "Colourful", "Anime", "Girl power"],
            "myReview": ""
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
            "myRating": "10",
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
            "myRating": "8.4",
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
            "customPosterUrl": require('../img/films/waves/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/29Wm",
            "title": "Life Is Beautiful",
            "myRating": "10",
            "myTags": ["Emotional", "Finding happiness", "Turning negatives into positives", "Family", "War"],
            "myReview": "",
            "customPosterUrl": require('../img/films/lifeIsBeautiful/custom_poster.jpg')
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
            "myTags": ["Endearing", "Finding happiness", "Growing up", "Discovering independence", "Finding yourself", "Soulmate", "Flying", "Anime", "Great soundtrack", "Utopia", "Girl power"],
            "myReview": "",
            "customPosterUrl": require('../img/films/kikisDeliveryService/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/4JQS",
            "title": "The Wind Rises",
            "myRating": "8.1",
            "myTags": ["Growing up", "Engineering", "War", "Flying", "Great soundtrack", "Soulmate", "Finding yourself", "Anime"],
            "myReview": "",
            "customPosterUrl": require('../img/films/theWindRises/custom_poster.jpg')
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
            "myRating": "8.5",
            "myTags": ["End of the world", "Profound", "Conspiracy", "War", "Colourful", "Great soundtrack", "Anime", "Confusing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/iKDo",
            "title": "Hatching",
            "myRating": "8.1",
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
            "myRating": "8.2",
            "myTags": ["Exploring the dark depths of humanity", "Challenging to watch at times", "Very long", "Great soundtrack", "Poetic", "Profound", "Friendship", "Religion"],
            "myReview": "",
            "customPosterUrl": require('../img/films/loveExposure/custom_poster.jpg')
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
            "myRating": "9.5",
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
            "myTags": ["Deeply human", "Inspiring", "Fuck the system", "Soulmate", "Sport"],
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
            "customPosterUrl": require('../img/films/soundOfMetal/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/28yy",
            "title": "Apocalypto",
            "myRating": "9.4",
            "myTags": ["Total escapism", "Ancient mayan civilisation", "Architecture", "Amazing set design", "Revenge-fantasy", "Brutal", "Not giving up despite being in a shitty situation"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Bn8",
            "title": "Exte: Hair Extensions",
            "myRating": "8.2",
            "myTags": ["Brutal", "Metamorphosis", "Fun", "Mad concept"],
            "myReview": "",
            "customPosterUrl": require('../img/films/exteHairExtensions/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/d99c",
            "title": "A Silent Voice: The Movie",
            "myRating": "7.9",
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
            "myReview": ""
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
            "customPosterUrl": require('../img/films/chickenRun/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/26vi",
            "title": "In The Mouth of Madness",
            "myRating": "8.3",
            "myTags": ["Lovecraftian horror", "Creature-feature", "Questioning reality", "Hallucinations", "Cults"],
            "myReview": "",
            "customPosterUrl": require('../img/films/inTheMouthOfMadness/custom_poster.jpg'),
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
            "customPosterUrl": require('../img/films/cloudAtlas/custom_poster.jpg'),
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
            "customPosterUrl": require('../img/films/hacksawRidge/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/amAY",
            "title": "Eddie the Eagle",
            "myRating": "10",
            "myTags": ["Inspiring", "Uplifting", "Proving people wrong", "Being the underdog", "Finding yourself", "Soulmate", "Friendship"],
            "myReview": "",
            "customPosterUrl": require('../img/films/eddieTheEagle/custom_poster.jpg'),
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
            "customPosterUrl": require('../img/films/fantasticMrFox/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/dZrW",
            "title": "Isle of Dogs",
            "myRating": "8.7",
            "myTags": ["Intricate animation style", "Great cinematography", "Animal welfare", "Humanity and nature coexisting", "Fun", "Friendship", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2bcK",
            "title": "Memento",
            "myRating": "8.4",
            "myTags": ["Non-linear timeline", "Confusing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/i4IQ",
            "title": "I'm Thinking of Ending Things",
            "myRating": "8.3",
            "myTags": ["Atmospheric", "Confusing", "Weird", "Snow", "Intimate", "Lonely", "Creepy"],
            "myReview": "",
            "customPosterUrl": require('../img/films/imThinkingOfEndingThings/custom_poster.jpg'),
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
            "myRating": "8.3",
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
            "letterboxdUrl": "https://boxd.it/1SYq",
            "title": "The SpongeBob SquarePants Movie",
            "myRating": "8.0",
            "myTags": ["Fun", "Nostalgic", "Audio-visual spectacle", "Great soundtrack"],
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
            "myTags": ["Indian culture", "Great chemistry between characters", "Poverty", "Slavery", "Friendship", "Kindness", "The evil British empire", "Great cinematography", "Fuck the system", "Very long", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/riseRoarRevolt/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/dvXe",
            "title": "Okja",
            "myRating": "7.8",
            "myTags": ["Animal welfare", "Ends a bit weak but the rest is great", "Conspiracy"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/9ghu",
            "title": "The Age of Adaline",
            "myRating": "8.0",
            "myTags": ["Mad concept", "Timey-wimey"],
            "myReview": "",
            "customPosterUrl": require('../img/films/theAgeOfAdaline/custom_poster.jpg'),
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
            "customPosterUrl": require('../img/films/castawayOnTheMoon/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/wMAk",
            "title": "Marcel the Shell with Shoes On",
            "myRating": "8.0",
            "myTags": ["Quirky", "Endearing", "Poetic", "Mokumentary", "Fun", "Friendship", "Finding your people", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/marcelTheShellWithShoesOn/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/4W9M",
            "title": "Oculus",
            "myRating": "8.0",
            "myTags": ["Disturbing", "Questioning reality", "Non-linear timeline"],
            "myReview": "",
            "customPosterUrl": require('../img/films/oculus/custom_poster.jpg'),
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
            "myRating": "7.8",
            "myTags": ["Fun", "Disturbing", "Claustrophobic", "Alone in the wilderness", "Revenge-fantasy", "British humour"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/203C",
            "title": "Creep",
            "myRating": "7.8",
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
            "myRating": "8.0",
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
            "customPosterUrl": require('../img/films/nocturnalAnimals/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/i3a4",
            "title": "Ut\u00f8ya: July 22",
            "myRating": "7.8",
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
            "myRating": "8.3",
            "myTags": ["Melancholic", "Mysterious", "Alien visitor disguised as human", "Search for Extraterrestrial Intelligence (SETI)", "Quirky", "Mental hospital"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2bf0",
            "title": "2001: A Space Odyssey",
            "myRating": "8.3",
            "myTags": ["Mysterious", "Grand", "Great cinematography", "Minimal dialogue", "Artificial Intelligence"],
            "myReview": "",
            "customPosterUrl": require('../img/films/2001SpaceOdyssey/custom_poster.png')
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
            "customPosterUrl": require('../img/films/thePerksOfBeingAWallflower/custom_poster.jpg'),
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
            "customPosterUrl": require('../img/films/theMapOfTinyPerfectThings/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/200I",
            "title": "The Exorcism of Emily Rose",
            "myRating": "8.6",
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
            "myRating": "8.5",
            "myTags": ["A slice of life", "Gardening", "Finding happiness", "The ebb-and-flow of nature", "Forgiveness", "Melancholic", "British humour", "Depressing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/fVJQ",
            "title": "A Quiet Place",
            "myRating": "8.6",
            "myTags": ["Minimal dialogue", "Atmospheric", "Intense", "Aliens", "Post-apocalypse society"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2Pa",
            "title": "The Girl With The Dragon Tattoo",
            "myRating": "8.7",
            "myTags": ["Atmospheric", "Murder mystery", "Mysterious", "Gross", "Conspiracy"],
            "myReview": "",
            "customPosterUrl": require('../img/films/theGirlWithTheDragonTattoo/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/H4k",
            "title": "Insidious",
            "myRating": "8.8",
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
            "customPosterUrl": require('../img/films/europaReport/custom_poster.jpg'),
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
            "myRating": "8.7",
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
            "customPosterUrl": require('../img/films/blueValentine/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/d9YE",
            "title": "Notes on Blindness",
            "myRating": "8.8",
            "myTags": ["Poetic", "Contemplative", "Based on true events", "Turning negatives into positives", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": require('../img/films/notesOnBlindness/custom_poster.jpg'),
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
            "myRating": "8.7",
            "myTags": ["Questioning reality", "Atmospheric", "Mysterious", "A story within a story", "Anti-Hollywood"],
            "myReview": "",
            "customPosterUrl": require('../img/films/mulhollandDrive/custom_poster.jpg'),
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
            "customPosterUrl": require('../img/films/fantasticPlanet/custom_poster.png'),
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
            "myRating": "8.5",
            "myTags": ["Contemplative sci-fi", "Mysterious", "Profound", "Questioning reality", "Simulation", "Creative use of framing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2pTS",
            "title": "We Need To Talk About Kevin",
            "myRating": "8.5",
            "myTags": ["Arthouse psychological thriller", "Disturbing", "Evil psychotic child"],
            "myReview": "",
            "customPosterUrl": require('../img/films/weNeedToTalkAboutKevin/custom_poster.png')
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
            "customPosterUrl": require('../img/films/myNeighbourTotoro/custom_poster.jpg'),
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
            "myRating": "8.9",
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
            "customPosterUrl": require('../img/films/theExorcist/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/gL9g",
            "title": "Revenge",
            "myRating": "9.2",
            "myTags": ["Revenge-fantasy thriller", "Challenging to watch at times", "Girl power"],
            "myReview": "",
            "customPosterUrl": require('../img/films/revenge/custom_poster.jpg'),
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
            "customPosterUrl": require('../img/films/riseOfThePlanetOfTheApes/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/2awa",
            "title": "Batman Returns",
            "myRating": "9.3",
            "myTags": ["Disturbing", "Weird", "Conspiracy", "Neogothic", "Neogothic architecture", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/batmanReturns/custom_poster.png'),
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
            "myRating": "9.4",
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
            "customPosterUrl": require('../img/films/childrenOfMen/custom_poster.jpg'),
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
            "customPosterUrl": require('../img/films/exMachina/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1MLK",
            "title": "The Sound of Music",
            "myRating": "9.1",
            "myTags": ["Uplifting", "Music", "War", "Britian 1960s", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/3GPq",
            "title": "Evil Dead",
            "myRating": "8.8",
            "myTags": ["Brutal", "Gory", "Wild", "Satan", "Possession"],
            "myReview": "",
            "customPosterUrl": require('../img/films/evilDead/custom_poster.jpg'),
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
            "myRating": "9.5",
            "myTags": ["Embrace mother nature", "Humanity and nature coexisting", "War", "Corruption", "Evil people in power", "Anime", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/mononoke/custom_poster.png'),
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
            "customPosterUrl": require('../img/films/theInvisibleMan/custom_poster.jpeg'),
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
            "myRating": "9.5",
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
            "customPosterUrl": require('../img/films/monstersInc/custom_poster.png'),
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
            "customPosterUrl": require('../img/films/theShapeOfWater/custom_poster.jpeg'),
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
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/18U8",
            "title": "The Truman Show",
            "myRating": "10",
            "myTags": ["Uplifting", "Conspiracy", "Questioning reality", "Religion", "Faith", "Beyond existence"],
            "myReview": "",
            "customPosterUrl": require('../img/films/theTrumanShow/custom_poster.PNG')
        },
        {
            "letterboxdUrl": "https://boxd.it/29aC",
            "title": "Seven Years in Tibet",
            "myRating": "10",
            "myTags": ["Humanity and nature coexisting", "Exploring unexplored terrority", "Mountaineering", "Tibet", "Dalia Lama", "Poetic", "Profound", "Great cinematography", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../img/films/sevenYearsInTibet/custom_poster.PNG')
        },
        {
            "letterboxdUrl": "https://boxd.it/23Fk",
            "title": "The Curious Case of Benjamin Button",
            "myRating": "10",
            "myTags": ["A slice of life", "Death", "Humanity", "Friendship", "Profound"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/37pC",
            "title": "Life of Pi",
            "myRating": "10",
            "myTags": ["Exploring unexplored terrority", "Survival story", "Based on a true story", "Stranded at sea"],
            "myReview": "",
            "customPosterUrl": require('../img/films/lifeOfPi/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/2a1m",
            "title": "The Matrix",
            "myRating": "10",
            "myTags": ["Dystopia"],
            "myReview": "",
            "customPosterUrl": require('../img/films/theMatrix/custom_poster.jpg'),
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
            "customPosterUrl": require('../img/films/theStrangers/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/3ybW",
            "title": "Helter Skelter",
            "myRating": "8.0",
            "myTags": ["Challenging to watch at times", "Audio-visual spectacle", "Addiction", "Isolation", "Fake celebrity personas", "Terrifying"],
            "myReview": ""
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
            "myRating": "7.7",
            "myTags": ["Innovative", "One-location", "Depressing", "Challenging to watch at times"],
            "myReview": "",
            "customPosterUrl": require('../img/films/dogville/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/48WY",
            "title": "American Mary",
            "myRating": "7.9",
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
            "letterboxdUrl": "https://boxd.it/dVI",
            "title": "Super 8",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/77xu",
            "title": "The Babadook",
            "myRating": "8.1",
            "myTags": [""],
            "myReview": ""
        }
    ]
}

const RootReducer = (state=initState, action) => {
    return state;
}

export default RootReducer;
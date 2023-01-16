

const initState = {
    posts: [
        {
            id: "1",
            date: "27 Apr 2017",
            title: "Cassini-Huygens",
            content: "<p>NASA's Cassini spacecraft embarked on an epic 7 year voyage to Saturn. Cassini was launched in 1997 and arrived at Saturn in 2004.</p>\
                        <h3>Huygens Titan lander</h3>\
                        <p>So we landed a spacecraft on Titan (one of Saturn's many moons!) It happened on July 1st 2004. Here's a <a href=\"https://www.youtube.com/watch?v=svmGxFaGILY\">ridiculously insane video</a> of the 2h 27m descent.</p>\
                        <p>The Huygens probe landed just off the easternmost tip of a region called Adiri. Adiri is packed with lakes and islands.</p>\
                        <picture class=\"img\">\
                            <img width=600 height=400 src=\"https://i.ytimg.com/vi/svmGxFaGILY/maxresdefault.jpg\" />\
                        </picture>\
                        <p>The lakes of Titan are not comprised of liquid water though, but rather hydrocarbon fluids. The stuff we power our cars with. \"hundreds of times more natural gas and other liquid hydrocarbons than all the known oil and natural gas reserves on Earth\". It has been proven that Titan contains about 300 times the volume of Earth's proven oil reserves.</p>\
                        <p>Calculations indicate wind speeds of less than 1 metre per second. We thought this would create some waves across the lakes, but none were observed.</p>\
                        <p>It also <b>rains liquid methane</b>...! Organic compounds are produced by ultraviolet radiation in the atmosphere, and the rain deposits all these compounds onto the surface forming the lakes. There is no reason why complex organic chemistry that gives rise to bacterial life could not emerge in this atmosphere.</p>\
                        <p>Titan is also home to cryovolcanoes, which also contribute to adding methane to the atmosphere.</p>\
                        <p>On Titan, the little sunlight it gets allows only about one centimeter of evaporation per year (versus one meter of water on Earth), but the atmosphere can hold the equivalent of about 10 meters of liquid before rain forms (versus about 2 cm on Earth). So Titan's weather is expected to feature downpours of several meters causing flash floods, interspersed by decades or centuries of drought (whereas typical weather on Earth includes a little rain most weeks). Cassini has observed equatorial rainstorms only once since 2004. Despite this, a number of long-standing tropical hydrocarbon lakes were unexpectedly discovered in 2012. This may explain the reason for the strange reappearance and disappearance of small islands which Cassini saw happening.</p>\
                        <picture class=\"img\">\
                            <img width=300 height=400 class='dont-resize' src=\"https://media.npr.org/assets/img/2017/10/16/titan-41d62a75c7b7376fe8ff872bb1deec3bc24a4a14.jpeg\" />\
                        </picture>\
                        <p>Titan is thought to be a prebiotic environment rich in complex organic chemistry. It has been suggested that life could exist in the lakes of liquid methane on Titan, just as organisms on Earth live in water. Such organisms would inhale H2 in place of O2, metabolize it with acetylene instead of glucose, and exhale methane instead of carbon dioxide.</p>\
                        <p>When the spacecraft landed, it felt the surface as similar to a slightly more absorbent, sludgy mud texture... This is a photograph Huygens took when it landed!!!!</p>\
                        <picture class=\"img\">\
                            <img width=200 height=100 class='dont-resize' src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Huygens_surface_color_sr.jpg/200px-Huygens_surface_color_sr.jpg\" />\
                        </picture>\
                        <p>Huygens Titan lander remains the most distant landing of any human made spacecraft EVER.</p>\
                        <p>We have even mapped the surface of Titan since then!</p>\
                        <picture class=\"img\">\
                            <img width=600 height=400 src=\"https://3iom3142cnb81rlnt6w4mtlr-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/fig1-7.jpg\" alt=\"https://aasnova.org/2018/05/21/bubbles-in-titans-seas/\" />\
                        </picture>\
                        <p>Unfortunately it's probably too cold on the surface for life as we know it to emerge. Titan-specific life could potentially evolve to work with the cold temperatures on Titan, but it's an unknown...</p>\
                        <p>However, what about when the Sun expands into a red giant? Suddenly, Titan will start receiving much more heat and won't be as cold!</p>\
                        <p>Temperatures could potentially be high enough to melt the ice mountains, allowing liquid water to flow into the liquid methane lakes which would of evaporated due to heat. The building blocks for DNA, RNA, proteins and cells could form. These chemical reactions could one day give rise to unique complex life.</p>\
                        <p>In other words, Titan will become an Earth-like oasis when the Sun is dying. Our Earth will be long gone, but perhaps Titan will be the place to be when it goes supernova.</p>\
                        <p>This Earth-like period could last anywhere between 100,000,000 - 500,000,000 years. Possibly not long enough for intelligent life to emerge, but long enough for some life to develop.</p>\
                        \
                        <h3>Enceladus</h3>\
                        <p>In 2004, Cassini observed geyser tendrils bursting jets of icy particles from Enceladus’s south polar region at speeds of 1,360mph.</p>\
                        <p>The geysers shoot out water vapor, other volatiles, and solid material, including sodium chloride crystals and ice particles, into space, totaling approximately 200 kilograms (440 lb) per second. This indicates geothermal energy.</p>\
                        <p>In 2014 Cassini confirmed the existence of a deep, warm, sub-surface ocean making it a prime suspect for life elsewhere in our Solar System.</p>\
                        <picture class=\"img\">\
                            <img width=600 height=400 src=\"https://solarsystem.nasa.gov/system/news_items/main_images/13148_Enceladus_plumes-16x9-rotated-180.jpg\" alt=\"https://solarsystem.nasa.gov/news/13148/complex-organics-bubble-up-from-ocean-world-enceladus/\" />\
                        </picture>\
                        <p>Enceladus’s ocean is 10-30km deep, whilst Earth’s average ocean depth is a mere 3.7km.</p>\
                        <p>In order for the liquid water to be useful, and be a source of life creating stuff, it needs to react with a rocky surface. Luckily, Enceladus has a rocky core, meaning geothermal reactions like the ones in Earth's oceans are likely happening as we speak.</p>\
                        <p>This makes Enceladus the most likely candidate for extra terrestrial life in our solar system. Astrobiologists are almost certain extremophiles could develop in Enceledus's ocean.</p>\
                        <picture class=\"img\">\
                            <img width=600 height=400 src=\"https://solarsystem.nasa.gov/system/content_pages/main_images/1534_50_Enceladus_768.jpg\" alt=\"https://solarsystem.nasa.gov/missions/cassini/science/enceladus/\" />\
                        </picture>\
                        \
                        <h3>The end of Cassini's mission</h3>\
                        <p>Cassini’s main missions was to observe and collect data about Saturn and it's moons. It’s been doing that for the last 14 years, capturing thousands of stunning photographs of Saturn and it’s moons and has travelled over 1 billion miles since launch, but unfortunately Cassini is approaching the end of it’s fantastic journey. On September 15th 2017, Cassini will dive into Saturn’s atmosphere, destroying the spacecraft in the process. This method was chosen because it is imperative to ensure protection and prevent biological contamination to any of the moons of Saturn thought to offer potential habitability.</p>\
                        <p>\
                            Since November 30th 2016, Cassini has been going in and out of Saturn’s rings once every week, collecting data and photographing the ‘inside’ of the rings. No man-made spacecraft had ever attempted this before, and we got\
                            \some <a href=\"https://www.youtube.com/watch?v=ROJOnOPHFvo\">incredible photos</a> from this final phase of the mission. NASA have also provided us with <a href=\"https://saturn.jpl.nasa.gov/galleries/raw-images/\">thousands of raw images</a> from Cassini.\
                        </p>\
                        <picture class=\"img\">\
                            <img width=400 height=200 src=\"https://solarsystem.nasa.gov/internal_resources/1910/\" />\
                        </picture>\
                        <p>YESTERDAY, Cassini began it’s grand finale and took its first dive into Saturn’s atmosphere. Cassini reached 1900 miles above the top of Saturn’s clouds, and has been able to transmit stunning images of Saturn’s atmosphere. The photo’s attached to this post are from both the ring fly-by’s and some are photo’s NASA released yesterday from Cassini’s first dive. I love talking and sharing about this sort of stuff, as does everyone else! (Please let me know if you noticed any errors in my text, or if you have any comments or knowledge to bless me with, please do that)</p>\
                        <p>I don’t think enough people know about the Cassini-Huygens mission and it's discoveries, and there’s a lot more that can be talked about, but unfortunately 'this margin is too small' to contain my ramblings. It will be regarded as one of the most successful space-related missions ever, so I thought this would be worth sharing since Cassini is still alive and it’s still gathering data, making new discoveries everyday and taking incredible photographs for the whole world to see. The fact that this isn't trending on any social medias, but politics crap about Donald Trump is constantly trending disgusts me, and that's my reason for making this post, to let people know these amazing scientific adventures are always happening, but for some bizarre reason we are all so focused on negativity and spread around social medias. Humans are clever, and can do amazing things, the Cassini mission is a great example amongst many other past and future missions. So yeah, don't forget to put September 15th 2017 in your calendar! It will be a very sad but exciting Friday. Thanks for reading 😊</p>\
                        <p><a href='https://www.youtube.com/watch?v=xrGAQCq9BMU'>A great video about Cassini's grand finale, by NASA themselves</a></p>\
                        <p><a href='https://www.youtube.com/watch?v=CDGrhJ4kjFk'>Excellent video from a great educational channel</a></p>\
                        <p><a href='https://www.youtube.com/watch?v=G0g4L6a6Ns4'>A fantastic Cassini news conference (4th April 2017):</a></p>\
                        <p><a href='https://www.youtube.com/watch?v=_9GY6njkMI8&t=0s'>Good video about Cassini's grand finale, including a fun artsy compilation using NASA's Cassini photographs, from a terrible YouTube channel about conspiracy theories and unbelievably dumb ancient alien videos, but he made a good video this time</a></p>",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "A summary the amazing history and dramatic conclusion to NASA's Cassini spacecraft mission",
            tags: ["Astronomy"]
        },
        {
            id: "2",
            date: "08 Sep 2016",
            title: "Why the moon landing was not a hoax",
            content: "<p>This is a quick blog post to vent my frustrations regarding anti-moon landing people.</p>\
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
                    <h4>1.1) <a href='https://en.wikipedia.org/wiki/Lunar_Laser_Ranging_experiment'>The Lunar Laser Ranging Experiment</a></h4> \
                        <p>Reflectors were placed on the moon at just the right angle so that a laser can be fired from earth to the moon, which then bounces off these reflectors and back to the earth at the exact point it left.\
                        <p>This is done with pin-point accuracy and is still in operation today. Many countries including Russia use the reflectors placed on the moon to conduct their own experiments.</p> \
                        <p>How did the reflectors get there and into the exact position they need to be in??? Could it be that they were placed there by Apollo astronauts?</p> \
                        <picture class=\"img\">\
                            <img width=400 height=200 src=\"https://media.springernature.com/lw685/springer-static/image/art%3A10.12942%2Flrr-2010-7/MediaObjects/41114_2016_9126_Fig1.jpg\" alt=\"https://media.springernature.com/lw685/springer-static/image/art%3A10.12942%2Flrr-2010-7/MediaObjects/41114_2016_9126_Fig1.jpg\" />\
                        </picture>\
                    <h4>1.2) <a href='https://en.wikipedia.org/wiki/Moon_rock'>Lunar rocks</a></h4> \
                        <p>Buzz Aldrin collected 16 Moon rocks and brought them back to Earth to examine. Once they were returned, there was still 16 rocks, and they were all legit.</p> \
                        <p>Many other missions have brought Moon rocks and have all been similar to Apollo 11’s rocks and are all carbon dated and documented to their landing dates.</p> \
                        <p>We have brought back 350kg lunar rock on the Apollo missions.</p> \
                        <p>The rocks we've brought back date to about 3,900 million years old.</p> \
                        <p>The oldest natural glass on earth that has been found pales in comparison at just 160 million years. This is due to the atmospheric decay of glass on earth.</p> \
                        <p>The moon has no atmosphere, so glass does not decay the same way.</p>  \
                        <p>These lunar glass balls have been tested throughout the world by numerous scientists.</p> \
                        <picture class=\"img\">\
                            <img width=200 height=100 src=\"https://cdn.britannica.com/26/76826-050-D9D81830/samples-breccia-Basalt-astronauts-sample-Moon-Apollo-1971.jpg\" alt=\"https://cdn.britannica.com/26/76826-050-D9D81830/samples-breccia-Basalt-astronauts-sample-Moon-Apollo-1971.jpg\" />\
                        </picture>\
                    <h4>1.3) We can see it</h4> \
                        <p>The Apollo landing sites and lunar rover trails from NASA's Lunar Reconnaissance Orbiter (LRO), about 21km above the surface.</p> \
                        <picture class=\"img\">\
                            <img width=200 height=100 src=\"https://www.gannett-cdn.com/presto/2019/06/06/PPHX/1fa11563-b89c-4e14-8f50-9d9c951d2b95-Apollo_17_landing_site_showing_American_flag.png?width=509&height=509&fit=crop&format=pjpg&auto=webp\" alt=\"Photographic evidence of rovers\" />\
                        </picture>\
                    <h4>1.4) <a href='https://www.youtube.com/watch?v=_loUDS4c3Cs&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=123'>Limitations of camreas in the 60's</a></h4> \
                        <p>Cameras and films in 1969 were very different to present day.</p> \
                    <h4>1.5) Worldwide research and publicity</h4> \
                        <p>In order for NASA to fake The Moon Landing, around 400,000 people would of had to keep it a secret, for almost 50 YEARS... really? </p>\
                        <p>You think 400,000 scientific researchers around the world are gonna create an incredibly elaborate 'movie set' just so they can say they went to The Moon?</p>\
                    <h4>1.6) Conspiracy theorists are crazy</h4> \
                        <p>The person who created this ridiculous conspiracy theory is this drug addict called Bill Kaysing.</p>\
                        <p>He was always having illucinations about travelling to The moon and being humiliated in front of people in his dreams.</p>\
                        <p>He then then spread the rumour around to the public.</p>\
                    <h4>2.1) Where are the stars?</h4>\
                        <p>One of the claims made to support the hoax theory is that there were no stars pictured from the surface of the Moon.</p>\
                        <p>The true reason you can’t see the stars in photos and videos of Moon is not that the stars aren’t there, but rather because of the omnipresent sunlight and the exposure limits of cameras.</p>\
                        <p>When these photos were taken, it was full daylight on the Moon. Because there is only an extremely thin atmosphere on the Moon,the sky appears black.</p>\
                        <p>In addition, sunlight at the Moon’s surface was incomparably strong with the starlight; the stars simply faded in comparison with the sun.</p>\
                        <p>If the astronauts used sufficiently long exposures, stars would, indeed, be visible.</p>\
                        <p>There are no stars because the cameras couldn’t pick them up. And like I mentioned before, considering that it is 1969, there are a lot of limitations on the ability to carry out documentation in the form of photo/video media.</p>\
                    <h4>2.2) But the flag is waving?</h4>\
                        <p>The flag was actually made from plastic material, similar to the one that tents are usually made of.</p>\
                        <p>For practical reasons, the flag was originally folded to maximize space and stored in a thin tube.</p>\
                        <p>After Neil Armstrong planted it to the surface of the Moon, it briefly appeared to move as it was unfolding itself to its final shape.</p>\
                        <p>I like to imagine the flag as tinfoil, try and make a nice flat piece of tinfoil!</p> \
                    <h4>2.3) But they passed through the Van Allen Radiation Belt?</h4>\
                        <p>The truth is, during their entire voyage to the Moon and back to Earth, Armstrong, Aldrin and Collins only received amount of radiation equal to about 0.1% of the deadly dose.</p>\
                        <p>Their total exposure was approximately 11 milisieverts. Lethal levels of radiation is around 8,000 millisieverts.</p>\
                        <p>The harmful effects of radiation are based both on its strength and the time of exposure to its source.</p>\
                        <p>Average human would need to spend nearly four months inside the Van Allen belts to accumulate a lethal dose.</p>\
                        <p>The astronauts managed to pass through them during less than one hour.</p>\
                        <p>Regarding the time spent out of Earth’s magnetic field, where the astronauts were exposed to solar radiation, an average human could endure a radiation exposure equivalent to one-way trip to Mars and still not receive a dose which exceedslifetime levels set up by NASA.</p>\
                    <h4>2.4) Who filmed Armstrong's first steps then?</h4>\
                        <p>A video camera was fixed on an extending arm to the side of the lander.</p>\
                        <p>But why wasn't the surface that the Lander made contact with disturbed??!?!</p>\
                        <p>According to conspiracy theorists the power from the lunar module should have left a large impact crater under the lunar module.\
                            Firstly the lunar module was descending at an angle flying over the lunar landscape, as it is one sixth of the earth’s gravity it requires one sixth less power/trust to fly over the surface.\
                            In addition the lunar module flying in at an angle meant it was not hovering over the same spot for more than a fraction of a second.\
                            Further, just before touch down the lunar module was operating at 25% of its power.\
                            This 25% power was subjected to the landing site for about half a second at most, which was enough to disturb the landing site slightly, as you can see in the photographs, but not as much as conspiracy theorists would have you believe.\
                        </p>\
                    <h4>2.5) But we haven't we been back for 40 years?!</h4>\
                        <p>Some people get suspicious for the fact that we haven’t gone back to The Moon in over 40 years.\
                            NASA announced that they didn’t want to be spending any more money on visiting The Moon as it’s extremely expensive to constantly visit The Moon.\
                            Maybe NASA are running out of astronauts to send over there? Maybe NASA are saving up money for a future Mars landing? (Curiosity).\
                            Another way to put this is by saying 'I used to travel to Kazakhstan every year to ski. Just because I don't go anymore, doesn't mean I never went.'​\
                        </p> \
                    <h3>Summary</h3>\
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
                        <p>Here is a beautiful diagram of all the (successfull) missions to The Moon:</p>\
                        <img src='../assets/moon-missions.png' width='600'></img>\
                        <p><a href='https://en.wikipedia.org/wiki/Moon_landing'>Wikipedia, Moon Landing</a></p>",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Astronomy"]
        },
        {
            id: "3",
            date: "23 Aug 2019",
            title: "How to digitize Mini DV tapes",
            content: "\
            <div class='intro'> \
                <h3>What is a Mini DV Tape?</h3> \
                <p><a href='https://en.wikipedia.org/wiki/DV'>Digital Video (DV)</a> is a format for storing digital videos, created by Sony, JVC, Panasonic and other video camera manufacturers in 1995.</p> \
                <p>A Mini DV tape is a type of cassette tape used in most <a href='https://en.wikipedia.org/wiki/Camcorder'>digital camcorders</a> until the early 2000's.</p> \
                <h3>Why do we need to digitize Mini DV tapes?</h3> \
                <p>In 2003, DV was joined by a successor format <a href='https://en.wikipedia.org/wiki/HDV'>HDV</a>, which used the same tape format with a different video codec. Some cameras at the time had the ability to switch between DV and HDV recording modes. Some, however, do not have that ability, meaning the only way to watch videos back is through the device itself. Such is the case with the Sony DCR-TRV900E Camcorder.</p> \
                <h3>How do you digitize Mini DV tapes?</h3> \
                <p>Mini DV tapes store data digitally, the footage can be exported directly to a computer using a Firewire (IEEE 1394) cable. </p> \
                <p> \
                    The basic idea is that we will replay the footage of a tape, capturing the footage on a PC by using <a href='https://etc.usf.edu/techease/mac/hardware/what-is-firewire/'>firewire connection</a>. \
                    We can capture the footage using video editing software (e.g. Windows Movie Maker) and converting what is recorded to an .mp4. \
                    You will have to wait for the duration of the tape in order for it to be digitized. \
                    This seems to be the cheapest, most simple (and definitely most time-consuming) method out there for converting those old fashioned Mini DV tapes to mp4 files. \
                </p> \
            </div> \
            <div class='main'> \
                <h3>Checklist</h3> \
                <ul>\
                    <li>Firewire adapter <a href='https://www.amazon.co.uk/gp/product/B00MMKJJY4/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1'>SEDNA - PCIe (PCI EXpress) 3+1 Ports 1394A (Firewire) Adapter card</a></li> \
                    <li>Firewire cable <a href='https://www.amazon.co.uk/gp/product/B008UT7C6I/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1'>Neet Firewire Cable 6-4 pin 2M </a></li> \
                    <li>Mini DV camcorder <a href='https://www.amazon.co.uk/Sony-DCR-TRV900-DCR-TRV900-MiniDV-Camcorder/dp/B00005K4JV'>Sony DCR-TRV900E Camcorder</a></li> \
                    <li>Mini DV tapes <a href='https://www.amazon.co.uk/Sony-Pack-min-DVM-Premium/dp/B0007A57K6/ref=sr_1_1?dchild=1&keywords=mini+dv+tape&qid=1593163830&s=computers&sr=1-1'>Sony 10 Pack 60m DVM</a></li> \
                    <li>A spare PCIe port in your computer</li> \
                    <li>Windows movie maker</li> \
                </ul> \
                <p class=\"note\">Firewire cables come in different shapes and sizes. For the camera I was using, I needed the 6-4 pin 2M firewire cable. Check what your camera supports. \
                <h3>Step 1 - installing firewire adapter</h3> \
                <ul> \
                    <li>Insert adapter into PCIe slot. The metal bracket should rest on the outer part of your PC case. Depending on the size of your PC, you will have to decide whether to use the small or large metal bracket. In my case, I used the large bracket.</li> \
                    <li>Screw the metal bracket into the case using the screws provided with your own PC.</li> \
                </ul> \
                <h3>Step 2 - connect firewire cable</h3> \
                <ul> \
                    <li>A firewire cable has 2 different parts - the part that connects to your camcorder, and the part that connects to your computer.</li> \
                    <li>In my case, the part that connects to your camcorder was the 4-pin end.</li> \
                    <li>And the part that connects to your computer was the 6-pin end.</li> \
                    <li>Find the correct port on your camcorder for the 4-pin end.</li> \
                    <li>Take the other end of the firewire cable and plug it into the correct port on your firewire adapter.</li> \
                </ul> \
                <h3>Step 3 - prepare tape</h3> \
                <ul> \
                    <li>This step is very specific for the camcorder I was using. Basically we are just preparing the tape to be played.</li> \
                    <li>Press '' button to open tape holder.</li> \
                    <li>Insert tape into tape holder.</li> \
                    <li>Hold rewind button until the camera stops making a loud noise. That means you have returned to the beginning of the tape.</li> \
                </ul> \
                <h3>Step 4 - recapture video footage</h3> \
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
            <div class='conclusion'> \
                <p>That's it! You now know how to digitise Mini DV tapes. Hope it went well :)</p> \
            </div> \
            ",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Hardware"]
        },
        {
            id: "4",
            date: "16 Jan 2023",
            title: "The incomprehensible vastness of space",
            content: "<p>The nearest solar system to us is <a href='https://en.wikipedia.org/wiki/Alpha_Centauri'>Alpha Centuri</a>, a meager 4.246 lightyears away.</p>\
                      <p>A <a href='https://exoplanets.nasa.gov/faq/26/what-is-a-light-year/'>lightyear</a> is a measurement of distance, specifically the amount of distance covered if you were travelling at the speed of light. This is 9,460,730,472,580 km (9.46 trillion km)).</p>\
                      <p>So in astronomical distances, Alpha Centuri is relatively close to us, like I said, just 4.246 lightyears away... Unfortuantly our humans minds would find it difficult to comprehend this vast distance because it's actually equivalent to 40,174,991,951,814 km (40.17 trillion km) away from us.</p> \
                      <p>For perspective, let's measure how long it would take to travel to Alpha Centuri in various forms of transport, starting with a car...</p>\
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
                                <td>Car</td> \
                                <td>70</td> \
                                <td>0.03</td> \
                                <td>0.00000113%</td> \
                                <td>40,600,000</td>\
                            </tr> \
                            <tr> \
                                <td>Sound</td> \
                                <td>760</td> \
                                <td>0.339</td> \
                                <td>0.00000113%</td> \
                                <td>4,600,000</td>\
                            </tr> \
                            <tr> \
                                <td>Voyager 1</td> \
                                <td>38,214</td> \
                                <td>17.3</td> \
                                <td>0.00000576%</td> \
                                <td>6,300</td>\
                            </tr> \
                            <tr> \
                                <td>Parker Solar Probe</td> \
                                <td>429,988</td> \
                                <td>692</td> \
                                <td>0.0023%</td> \
                                <td>73,000</td>\
                            </tr> \
                            <tr> \
                                <td>Solar sail (theoretical)</td> \
                                <td>2,236,936</td> \
                                <td>60,000</td> \
                                <td>20%</td> \
                                <td>21.23</td>\
                            </tr> \
                            <tr> \
                                <td>Light speed</td> \
                                <td>670,616,629</td> \
                                <td>300,000</td> \
                                <td>100%</td> \
                                <td>4.246</td>\
                            </tr> \
                        </tbody>\
                      </table>\
                      <p>Voyager 1 is currently the longest standing spacecraft, launched in 1977, and has been moving at 17.3km/s for over 45 years... It's covered 23,816,382,064 km (or 23.8 billion km).</p>\
                      <p>In other words, it's covered 0.00005928% of the distance to Proxima centuri... And it's not even heading in that direction!</p> \
                      <p>However it is due to pass within 1.6 lightyears (9.3 trillion miles) of an obscure star in the constellation Ursa Minor (aka. the little dipper) called AC+79 3888, in the year 40,272 AD (more than 38,200 years from now)...</p> \
            ",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Life", "Astronomy"]
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
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "A list of my favourite quotes",
            tags: ["Notes"]
        },
        {
            id: "6",
            date: "09 Sep 2020",
            title: "Working from home as an intern during the COVID-19 pandemic",
            content: "<p>It was challening</p>",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Life"]
        },
        {
            id: "7",
            date: "09 Sep 2016",
            title: "How to deploy a react app using Github pages",
            content: "",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["React"]
        },
        {
            id: "9",
            date: "10 Sep 2017",
            title: "Analysing my IMDB ratings",
            content: "",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Python"]
        },
        {
            id: "12",
            date: "07 Oct 2020",
            title: "Are non-carbon based lifeforms possible?",
            content: "",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Astronomy", "Biology"]
        },
        {
            id: "13",
            date: "07 Oct 2020",
            title: "Gorgonocephalus arcticus",
            content: "",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Biology"]
        },
        {
            id: "14",
            date: "09 Oct 2020",
            title: "A subsurface ocean on Enceladus",
            content: "",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Astronomy"]
        },
        {
            id: "15",
            date: "11 Oct 2020",
            title: "The Beale Ciphers",
            content: "blah",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Cryptography"]
        },
        {
            id: "16",
            date: "13 Oct 2020",
            title: "The Great Pyramid of Cholula",
            content: "blah",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["History"]
        },
        {
            id: "17",
            date: "14 Oct 2020",
            title: "Null Island",
            content: "blah",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Geography", "Oceanography"]
        },
        {
            id: "18",
            date: "14 Oct 2020",
            title: "Hematite Stalactite",
            content: "blah",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Rocks-and-minerals"]
        },
        {
            id: "19",
            date: "14 Oct 2020",
            title: "Leucochloridium",
            content: "blah",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Entomology"]
        },
        {
            id: "20",
            date: "30 Sep 2022",
            title: "What happens to the information that goes inside a black hole?",
            content: "blah",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Astronomy"]
        },
        {
            id: "21",
            date: "30 Sep 2022",
            title: "Coolest moons in the Solar System",
            content: "blah",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: ["Astronomy"]
        },
        {
            id: "22",
            date: "30 Sep 2022",
            title: "Running form",
            content: "blah",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "All the different elements of good running form",
            tags: ["Running"]
        },
        {
            id: "23",
            date: "30 Sep 2022",
            title: "Flagematics",
            content: "blah",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "Mathematics + Flags",
            tags: ["Vexilology", "Mathematics"]
        },
        {
            id: "25",
            date: "30 Sep 2022",
            title: "Worst 20 movies I've watched",
            content: "blah",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "",
            tags: ["Films"]
        },
        {
            id: "26",
            date: "30 Sep 2022",
            title: "Top 50 movie soundtracks",
            content: "blah",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "",
            tags: ["Films", "Music"]
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
            thumbnail: "https://prod-discovery.edx-cdn.org/media/course/image/8e285de1-0242-4e94-8041-84231363caf4-d03410f48d5f.small.jpg",
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
            thumbnail: "https://geekflare.com/wp-content/uploads/2020/02/1_TBSV23ud8tae3E4szI5EDA-1.jpeg",
            content: "\
            <div class='intro'> \
                <p>Intro...</p> \
            </div> \
            <div class='main'> \
                <p>Main content ...</p> \
            </div> \
            "
        }
    ]
}

const RootReducer = (state=initState, action) => {
    return state;
}

export default RootReducer;
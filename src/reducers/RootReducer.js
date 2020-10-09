

const initState = {
    posts: [
        {
            id: "1",
            date: "April 27, 2017",
            title: "Cassini-Huygens",
            content: "<p>The Cassini spacecraft was launched in 1997 and arrived at Saturn in 2004. Cassini has had several missions since it’s arrival; it landed the Huygens: Titan Lander on Saturn’s moon Titan and photographed the liquid methane lakes which cover it’s surface. Recent studies have even shown Titan’s surface has intriguing similarities to the surface of the early Earth, a hard outer crust and soft underneath. (It remains the most distant landing of any human made spacecraft).</p><p>In 2004, Cassini observed geyser tendrils bursting jets of icy particles from Enceladus’s south polar region at speeds of 1,360mph. In 2014 Cassini confirmed the existence of a deep, warm, sub-surface ocean making it a prime suspect for life elsewhere in our Solar System. Enceladus’s ocean is 10-30km deep, whilst Earth’s average ocean depth is a mere 3.7km.</p><p>Cassini’s main missions was to observe and collect data about Saturn and it's moons. It’s been doing that for the last 14 years, capturing thousands of stunning photographs of Saturn and it’s moons and has travelled over 1 billion miles since launch, but unfortunately Cassini is approaching the end of it’s fantastic journey. On September 15th 2017, Cassini will dive into Saturn’s atmosphere, destroying the spacecraft in the process. This method was chosen because it is imperative to ensure protection and prevent biological contamination to any of the moons of Saturn thought to offer potential habitability.</p><p>Since November 30th 2016, Cassini has been going in and out of Saturn’s rings once every week, collecting data and photographing the ‘inside’ of the rings. No man-made spacecraft had ever attempted this before, and we got some incredible photos from it.</p><p>YESTERDAY, Cassini began it’s grand finale and took its first dive into Saturn’s atmosphere. Cassini reached 1900 miles above the top of Saturn’s clouds, and has been able to transmit stunning images of Saturn’s atmosphere. The photo’s attached to this post are from both the ring fly-by’s and some are photo’s NASA released yesterday from Cassini’s first dive. I love talking and sharing about this sort of stuff, as does everyone else! (Please let me know if you noticed any errors in my text, or if you have any comments or knowledge to bless me with, please do that)</p><p>I don’t think enough people know about the Cassini-Huygens mission and it's discoveries, and there’s a lot more that can be talked about, but unfortunately 'this margin is too small' to contain my ramblings. It will be regarded as one of the most successful space-related missions ever, so I thought this would be worth sharing since Cassini is still alive and it’s still gathering data, making new discoveries everyday and taking incredible photographs for the whole world to see. The fact that this isn't trending on any social medias, but politics crap about Donald Trump is constantly trending disgusts me, and that's my reason for making this post, to let people know these amazing scientific adventures are always happening, but for some bizarre reason we are all so focused on negativity and spread around social medias. Humans are clever, and can do amazing things, the Cassini mission is a great example amongst many other past and future missions. So yeah, don't forget to put September 15th 2017 in your calendar! It will be a very sad but exciting Friday. Thanks for reading 😊</p><p><a href='https://saturn.jpl.nasa.gov/galleries/raw-images/'>Over 300,000 raw images from Cassini, updated everyday</a></p><p><a href='https://www.youtube.com/watch?v=xrGAQCq9BMU'>A great video about Cassini's grand finale, by NASA themselves</a></p><p><a href='https://www.youtube.com/watch?v=CDGrhJ4kjFk'>Excellent video from a great educational channel</a></p><p><a href='https://www.youtube.com/watch?v=G0g4L6a6Ns4'>A fantastic Cassini news conference (4th April 2017):</a></p><p><a href='https://www.youtube.com/watch?v=_9GY6njkMI8&t=0s'>Good video about Cassini's grand finale, including a fun artsy compilation using NASA's Cassini photographs, from a terrible YouTube channel about conspiracy theories and unbelievably dumb ancient alien videos, but he made a good video this time</a></p>",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "A summary the amazing history and dramatic conclusion to NASA's Cassini spacecraft mission",
            tags: "astronomy"
        },
        {
            id: "2", 
            date: "March 20, 2018", 
            title: "The Representation theory of the additive group scheme", 
            content: "<p>In this post we’ll describe the representation theory of the additive group scheme \\mathbb{G}_a over a field k. The answer turns out to depend dramatically on whether or not k has characteristic zero.</p><p>Preliminaries over an arbitrary ring</p><p>(All rings and algebras are commutative unless otherwise stated.)</p><p>The additive group scheme \\mathbb{G}_a over a base ring k has functor of points given by the underlying abelian group functor</p><p>This functor is represented by the free k-algebra k[x] together with the Hopf algebra structure given by the comultiplication</p><hr /><p>and antipode S(x) = -x, and so it is an affine group scheme whose underlying scheme is the affine line \\mathbb{A}^1 over k. From a Hopf algebra perspective, this Hopf algebra is special because it is the free Hopf algebra on a primitive element.</p><p>A representation of \\mathbb{G}_a can be described in a few equivalent ways. From the functor of points perspective, we first need to describe the functor of points perspective on a k-module: a k-module V has functor of points</p><p>making it an affine group scheme if V is finitely generated projective (in which case its ring of functions is the symmetric algebra S(V^{\\ast}) on the dual of V) but not in general, for example if k is a field and V is an infinite-dimensional vector space. Note that if V = k we recover \\mathbb{G}_a, and more generally if V = k^n we recover \\mathbb{G}_a^n.</p>",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "mathematics; calculus"
        },
        {
            id: "3",
            date: "March 27, 2018", 
            title: "Singular value decomposition",
            content: "<p>In the previous post we described a fairly striahgroward argument, using generating functions and the saddle-point bound, for giving an upper bound.</p><p>hi</p>",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "mathematics; geometry"
        },
        {
            id: "4", 
            date: "May 30, 2018", 
            title: "Gradient Descent",
            content: "<p class=\"note\">Note: this is a repost of a Facebook status I wrote off the cuff about a year ago, lightly edited. As such it has a different stylef from my other posts, but I still wanted to put somewhere where it'd be easier to find and share than Facebook.</p><p>Gradient descent, in its simpliest where you just subtract the gradient of your loss funcction J, is not dimensionally consistent: if the parameters you're optimising over have units of length, and the loss function is dimensionless, then the diriviatives you're substracting have units of inverse length.</p><p>This observation can be used to reinvent the learning rate, which, for dimensional consistency, must have units of length squared. It also suggests theat the learning rate outght to be set to something like L**2 for some kind of characteristic length scale L , which loosly speaking is the length at which the curvature of J starts to matter.</p>",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "mechanics"
        },
        {
            id: "5",
            date: "September 9, 2020",
            title: "Working from home as an intern during the COVID-19 pandemic",
            content: "<div class='intro-container'>It was challening</div><hr />",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "life"
        },
        {
            id: "6",
            date: "September 8, 2016",
            title: "Why the moon landing was not a hoax",
            content: "<p>One of my friends at school was convinced that the moon landings were a hoax. He was pretty darn serious about and still bugs me to this day.\
                        I figured that this has gone on too long, and that for my own wellbeing as well as his, I should splatter my thoughts, frustrations and undeniable truth here in a blog post.</p>\
                    <h6>Reasons why the moon landing(s) were not faked:</h6> \
                        <p><strong>The Lunar Laser Ranging Experiment</strong> - \
                            Reflectors were placed on the moon at just the right angle so that a laser can be fired from earth to the moon, which then bounces off these reflectors and back to the earth at the exact point it left.\
                            This is done with pin-point accuracy and is still in operation today. Many countries including Russia use the reflectors placed on the moon to conduct their own experiments. \
                            How did the reflectors get there and into the exact position they need to be in??? Could it be that they were placed there by Apollo astronauts?\
                            Well I never.\
                        </p>\
                        <p><strong>Lunar rocks</strong> - \
                            We have brought back 350kg lunar rock on the Apollo missions.\
                            The rocks we've brought back date to about 3,900 million years old.  \
                            The oldest natural glass on earth that has been found pales in comparison at just 160 million years. This is due to the atmospheric decay of glass on earth.\
                            The moon has no atmosphere, so glass does not decay the same way. \
                            These lunar glass balls have been tested throughout the world by numerous scientists.\
                            It's a pretty hard piece of evidence that they did indeed come from the moon. \
                            Buzz Aldrin collected 16 Moon rocks and brought them back to Earth to examine. \
                            Once they were returned, there was still 16 rocks, and they were all legit. \
                            Many other missions have brought Moon rocks and have all been similar to Apollo 11’s rocks and are all carbon dated and documented to their landing dates.\
                        </p>\
                        <p><strong>We can see it</strong> - \
                            The Apollo landing sites and lunar rover trails from NASA's Lunar Reconnaissance Orbiter (LRO), about 21km above the surface. \
                        </p>\
                        <p><strong>Harder to fake it</strong> - \
                            it would genuinely be more difficult to fake it, rather than to just go there. \
                            Besides, without going there how would they know what it looks like, feels like, sounds like in order to fake it. \
                        </p>\
                        <p><strong>Filmography / filmmaking</strong> - the limitations of cameras and films in 1969 were very different to present day. \
                            <a href='https://www.youtube.com/watch?v=_loUDS4c3Cs&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=123'>This video</a> explains it pretty well.\
                        </p>\
                        <p><strong>Worldwide research and publicity</strong> - \
                            in order for NASA to fake The Moon Landing, around 400,000 people would of had to keep it a secret, for almost 50 YEARS... really?\
                            You think 400,000 scientific researchers around the world are gonna create an incredibly elaborate 'movie set' just so they can say they went to The Moon?\
                        </p>\
                        <p><strong>Conspiracy theorists are crazy</strong> -\
                            the person who created this ridiculous conspiracy theory isn’t just some standard guy.\
                            The person who started all of this was Bill Kaysing.\
                            He was constantly smoking weed and crack.\
                            He was always having illucinations about travelling to The moon and being humiliated in front of people in his dreams.\
                            He then then spread the rumour around to the public.</p>\
                        </p>\
                        <h6>Where are the stars?</h6>\
                        <p>One of the claims made to support the hoax theory is that there were no stars pictured from the surface of the Moon.\
                            The true reason you can’t see the stars in photos and videos of Moon is not that the stars aren’t there, but rather because of the omnipresent sunlight and the exposure limits of cameras.\
                            When these photos were taken, it was full daylight on the Moon. Because there is only an extremely thin atmosphere on the Moon,the sky appears black.\
                            In addition, sunlight at the Moon’s surface was incomparably strong with the starlight; the stars simply faded in comparison with the sun.\
                            If the astronauts used sufficiently long exposures, stars would, indeed, be visible.\
                            There are no stars because the cameras couldn’t pick them up. And like I mentioned before, considering that it is 1969, there are a lot of limitations on the ability to carry out documentation in the form of photo/video media.\
                        </p>\
                        <h6>But the flag is waving?</h6>\
                        <p>The flag was actually made from plastic material, similar to the one that tents are usually made of.\
                            For practical reasons, the flag was originally folded to maximize space and stored in a thin tube.\
                            After Neil Armstrong planted it to the surface of the Moon, it briefly appeared to move as it was unfolding itself to its final shape.\
                            I like to imagine the flag as tinfoil, try and make a nice flat piece of tinfoil! \
                        </p>\
                        <h6>But they passed through the Van Allen Radiation Belt?!?!??</h6>\
                        <p>The truth is, during their entire voyage to the Moon and back to Earth, Armstrong, Aldrin and Collins only received amount of radiation equal to about 0.1% of the deadly dose.\
                            Their total exposure was approximately 11 milisieverts. Lethal levels of radiation is around 8,000 millisieverts.\
                            The harmful effects of radiation are based both on its strength and the time of exposure to its source.\
                            Average human would need to spend nearly four months inside the Van Allen belts to accumulate a lethal dose.\
                            The astronauts managed to pass through them during less than one hour.\
                            Regarding the time spent out of Earth’s magnetic field, where the astronauts were exposed to solar radiation, an average human could endure a radiation exposure equivalent to one-way trip to Mars and still not receive a dose which exceedslifetime levels set up by NASA.\
                        </p>\
                        <h6>Who filmed Armstrong's first steps then??!??!</h6>\
                        <p>A video camera was fixed on an extending arm to the side of the lander.</p>\
                        <h6>But why wasn't the surface that the Lander made contact with disturbed??!?!</h6>\
                        <p>According to conspiracy theorists the power from the lunar module should have left a large impact crater under the lunar module.\
                            Firstly the lunar module was descending at an angle flying over the lunar landscape, as it is one sixth of the earth’s gravity it requires one sixth less power/trust to fly over the surface.\
                            In addition the lunar module flying in at an angle meant it was not hovering over the same spot for more than a fraction of a second.\
                            Further, just before touch down the lunar module was operating at 25% of its power.\
                            This 25% power was subjected to the landing site for about half a second at most, which was enough to disturb the landing site slightly, as you can see in the photographs, but not as much as conspiracy theorists would have you believe.\
                        </p>\
                        <h6>We haven't we been back for 40 years??!??!</h6>\
                        <p>Some people get suspicious for the fact that we haven’t gone back to The Moon in over 40 years.\
                            NASA announced that they didn’t want to be spending any more money on visiting The Moon as it’s extremely expensive to constantly visit The Moon.\
                            Maybe NASA are running out of astronauts to send over there? Maybe NASA are saving up money for a future Mars landing? (Curiosity).\
                            Another way to put this is by saying 'I used to travel to Kazakhstan every year to ski. Just because I don't go anymore, doesn't mean I never went.'​\
                        </p> \
                        <h6>Summary</h6>\
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
            tags: "astronomy"
        },
        {
            id: "7",
            date: "August 23, 2019",
            title: "How to digitize Mini DV tapes",
            content: "\
                        <p>The basic idea is that we will replay the footage of a tape, capturing the footage on a PC by using <a href='https://etc.usf.edu/techease/mac/hardware/what-is-firewire/'>firewire connection</a>. \
                            We can capture the footage using video editing software (e.g. Windows Movie Maker) and converting what is recorded to an .mp4. \
                            You will have to wait for the duration of the tape in order for it to be digitized. \
                            I may be wrong, but this seems to be the cheapest, most simple (and definitely most time-consuming) method out there for converting those old fashioned Mini DV tapes to mp4 files.</p> \
                        <h6>Checklist</h6> \
                        <ul>\
                            <li>Firewire adapter <a href='https://www.amazon.co.uk/gp/product/B00MMKJJY4/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1'>SEDNA - PCIe (PCI EXpress) 3+1 Ports 1394A (Firewire) Adapter card</a></li> \
                            <li>Firewire cable <a href='https://www.amazon.co.uk/gp/product/B008UT7C6I/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1'>Neet Firewire Cable 6-4 pin 2M </a></li> \
                            <li>Mini DV camcorder <a href='https://www.amazon.co.uk/Sony-DCR-TRV900-DCR-TRV900-MiniDV-Camcorder/dp/B00005K4JV'>Sony DCR-TRV900E Camcorder</a></li> \
                            <li>Mini DV tapes <a href='https://www.amazon.co.uk/Sony-Pack-min-DVM-Premium/dp/B0007A57K6/ref=sr_1_1?dchild=1&keywords=mini+dv+tape&qid=1593163830&s=computers&sr=1-1'>Sony 10 Pack 60m DVM</a></li> \
                            <li>A spare PCIe port in your computer</li> \
                            <li>Windows movie maker</li> \
                        </ul> \
                        <p class=\"note\">Firewire cables come in different shapes and sizes. For the camera I was using, I needed the 6-4 pin 2M firewire cable. Check what your camera supports. \
                        <h6>Step 1 - installing firewire adapter</h6> \
                        <p>Insert adapter into PCIe slot. The metal bracket should rest on the outer part of your PC case.</p> \
                        <p class=\"note\">Depending on the size of your PC, you will have to decide whether to use the small or large metal bracket. In my case, I used the large bracket.</p> \
                        <p>Screw the metal bracket into the case using the screws provided with your own PC.</p> \
                        <h6>Step 2 - connect firewire cable</h6> \
                        <p>A firewire cable has 2 different parts - the part that connects to your camcorder, and the part that connects to your computer.</p> \
                        <p>In my case, the part that connects to your camcorder was the 4-pin end.</p> \
                        <p>And the part that connects to your computer was the 6-pin end.</p> \
                        <p>Find the correct port on your camcorder for the 4-pin end.</p> \
                        <p>Take the other end of the firewire cable and plug it into the correct port on your firewire adapter.</p> \
                        <h6>Step 3 - prepare tape</h6> \
                        <p>This step is very specific for the camcorder I was using. Basically we are just preparing the tape to be played.</p> \
                        <p>Press '' button to open tape holder.</p> \
                        <p>Insert tape into tape holder.</p> \
                        <p>Hold rewind button until the camera stops making a loud noise. That means you have returned to the beginning of the tape.</p> \
                        <h6>Step 4 - recapture video footage</h6> \
                        <p>We are going to use Windows Movie Maker to capture the video footage and convert it to an .mp4 file. It's free and relatively easy to use, but feel free to try other software.</p> \
                        <p>Open Windows Movie Maker.</p> \
                        <p>Click 'File' in the top right.</p> \
                        <p>Click 'Import from device'.</p> \
                        <p>Your camcorder should be detected, click on it.</p> \
                        <p>Press the play button on your camcorder, also pressing the record button on Movie Maker at the same time.</p> \
                        <p>Wait...</p> \
                        <p>When the tape ends, stop the recording, and save the video as an .mp4 (be prepared for this part to take a while, the files can get quite large! For reference a 1 hour video I recently digitized was 4.52GB).</p> \
                        <h6>Step 5 - prepare next tape</h6> \
                        <p>Press '' button to open tape holder, and remove tape.</p> \
                        <p>Repeat Step 3.</p> \
                      ",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "cameras"
        },
        {
            id: "8",
            date: "September 9, 2016",
            title: "How to deploy a react app using Github pages",
            content: "",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "react; github pages"
        },
        {
            id: "9",
            date: "September 10, 2016",
            title: "Analysing my IMDB ratings",
            content: "",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "python; data analysis"
        },
        {
            id: "10",
            date: "September 11, 2016",
            title: "How to use the Fitbit API",
            content: "",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "python; data analysis"
        },
        {
            id: "11",
            date: "April 5, 2019",
            title: "Design patterns",
            content: "<p>I had a Software Engineering lecture today on Design Patterns. Learning about the history behind design patterns and understanding how critical they are to the software engineering lifecycle was interesting, as well as learning about <a href='http://www.blackwasp.co.uk/gofpatterns.aspx'>'The Gang of Four'</a>. I was also interested to discover that design patterns are something all programmers kind of unknowingly use. Becoming consciously aware of which pattern I am using and which patterns I should have been using all along was an exciting discovery for me personally. Exciting enough for me to make a blog post on the Builder design pattern.</p><h6>What is a design pattern?</h6><p>Design patterns basically give your code a controlled idea of reuse. They capture reoccuring patterns and structure code accordingly. They aim to improve maintainenance by giving explicit specification of interactions and intetnt.</p><p>Architect Christopher Alexander eleqountly describes design patterns in his book <a href='https://en.wikipedia.org/wiki/A_Pattern_Language'>'A Pattern Language'</a>:<br><i>'Each pattern describes a problem which occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over without ever doing it the same way twice'.</i> - Christopher Alexander, 1977<p><p>There are 3 main subsets of design patterns:</p><ul><li><b>Creational</b> - how are objects created?</li><li><b>Structural</b> - how is data structured?</li><li><b>Behavioural</b> - how do we interact with the objects</li></ul><p>There are many different types of design patterns within these 3 subsets such as the Singleton, Decorator, Template, Dependency and <b>Builder</b> design patterns.</p><h6>What is the Builder design pattern?</h6><p>The Builder design pattern lies within the <b>Creational</b> subset of design Patterns. So it is a design pattern concerned with the instantiation of an object.</p><p>Builders basically allow you to create complex objects where the attributes can be set in any order.</p><p>Builders prevents the problem of long constructor calls like these monsters:</p>",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "python; data analysis"
        },
        {
            id: "12",
            date: "October 7, 2020",
            title: "Are non-carbon based lifeforms possible?",
            content: "",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "astronomy; bio"
        },
        {
            id: "13",
            date: "October 7, 2020",
            title: "Gorgonocephalus arcticus",
            content: "",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "bio"
        },
        {
            id: "14",
            date: "October 7, 2020",
            title: "A subsurface ocean on Enceladus",
            content: "",
            thumbnail: "<img src='../img/blogpost-thumbnails/1.png'></img>",
            blurb: "this is the blurb",
            tags: "astronomy"
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
            introContent: "\
            <div class='intro'> \
                <p>Consider the following variant of the Bin Packing problem, called the Glass Cutting Problem.</p> \
                <p>We have an unlimited supply of two-dimensional glass sheets, each sheet having a width of W and a height of H. We also have a request of N rectangular shapes, with widths w1,w2,…,wN (where wi <= W, i=1,…,N) and heights h1,h2,…,hN (where hi <= H, i=1,…,N).</p> \
                <p>We use a glass cutting machine that conducts a specific type of cut, namely the guillotine cut. A guillotine cut is a cut from one edge of a sheet to the opposite edge, parallel to the remaining edges. In other words, when applied to a rectangle, the cut is of guillotine type if it produces two new rectangles. The cutting patterns for the sheets are produced in at most two stages (Figure 1). In the first stage, parallel (horizontal) guillotine cuts are produced on a sheet to produce a set of ‘shelves’. In the second stage, vertical guillotine cuts are made on each shelf to produce the required shapes. If the shapes in a shelf are not all of the same height, additional trimming of the shapes is required (Figure 2).</p> \
            </div> \
            ",
            mainContent: " \
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
            introContent: "\
            <div class='intro'> \
                <p>Intro...</p> \
            </div> \
            ",
            mainContent: " \
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
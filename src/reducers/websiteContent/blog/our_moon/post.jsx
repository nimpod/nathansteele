import React  from 'react';
import { useRef } from 'react';


const IMAGES = {
    // moon from Earth...
    fireworks: require('./photos/moon_from_earth/fireworks_and_moon.jpg'),
    cave: require('./photos/moon_from_earth/moon_and_cave.jpg'),
    cyclist: require('./photos/moon_from_earth/moon_and_cyclist.jpg'),
    mountain: require('./photos/moon_from_earth/moon_and_mountain.jpg'),

    // moon from orbit...
    moon_and_earth_1: require('./photos/moon_from_orbit/moon_and_earth_1.jpg'),
    moon_and_earth_2: require('./photos/moon_from_orbit/moon_and_earth_2.jpg'),
    moon_and_earth_3: require('./photos/moon_from_orbit/moon_and_earth_3.jpg'),
    moon_and_mars: require('./photos/moon_from_orbit/moon_and_mars.jpg'),
    orbiter_apollo11: require('./photos/moon_from_orbit/orbiter_apollo11.jpg'),
    mare_orientale: require('./photos/moon_from_orbit/mare_orientale.jpg'),

    // moon surface...
    apollo11_lander: require('./photos/moon_surface/apollo11_lander.jpg'),
    apollo11_panorama: require('./photos/moon_surface/apollo11_panorama.jpg'),
    apollo12_bean_conrad: require('./photos/moon_surface/apollo12_bean_conrad.jpg'),
    apollo12_panorama: require('./photos/moon_surface/apollo12_panorama.jpg'),
    apollo14_panorama: require('./photos/moon_surface/apollo14_panorama.jpg'),
    apollo15_panorama_1: require('./photos/moon_surface/apollo15_panorama_1.jpg'),
    apollo15_panorama_2: require('./photos/moon_surface/apollo15_panorama_2.jpg'),
    apollo16: require('./photos/moon_surface/apollo16.jpg'),
    apollo17_astronaut: require('./photos/moon_surface/apollo17_astronaut.jpg'),
    apollo17_panorama: require('./photos/moon_surface/apollo17_panorama.jpg'),
    apollo17_panorma_2: require('./photos/moon_surface/apollo17_panorma_2.jpg'),
    china_yutu_rover: require('./photos/moon_surface/china_yutu_rover.jpg'),
    china_yutu_rover_2: require('./photos/moon_surface/china_yutu_rover_2.jpg'),
}

export const Post = () => {

    return (
        <div>
            <div className='intro-text blog-subsection' id='section1'>
                <h3 className='subgroup-title'></h3>
                {/*}
                <div>
                    <a href="#/blog/our_moon/#section2">Origins of the Moon</a>
                    <a href="#/blog/our_moon/#section3">Wht is the Moon tidally locked to the Earth?</a>
                    <a href="#/blog/our_moon/#section4">Geology of the Moon</a>
                </div>
                */}
                <picture className="img">
                    <img className='smaller-image' src={IMAGES.moon_and_earth_2} alt='' />
                </picture>
            </div>
    
            <div className='blog-subsection' id='section2'>
                <h3 className='subgroup-title'>Origins of the Moon</h3>
                <p>There is still a lot of debate around the origin of The Moon. Many theories have been proposed...</p>
                <h5>Giant-impact hypothesis</h5>
                <p>
                    This hypothesis suggests that the early Earth collided with a proto-planet (known as <b>Theia</b>) about 20-100 million years after the solar system formed.
                    Over the span of ~100 years, the orbiting debris disk of vaporised rock surrounding the Earth from the collision eventually formed the Moon.
                    There are many reasons why this is the most favoured hypothesis:
                </p>
                <ul>
                    <li>The isotopic ratios of Moon rock vs Earth rock are identical, implying a common origin.</li>
                    <li>The Moon’s orbit has a similar orientation to the Earth’s.</li>
                    <li>We have observed exoplanets that appear to have debris discs out there in the vast Universe.</li>
                </ul>
                <p>The problem with the giant-impact hypothesis is that it has difficulty accounting for why the isotopic ratios on The Moon are identical to The Earth.</p>
    
                <h5>Georeactor hypothesis</h5>
                <p>In other words, nuclear fission.</p>
    
                <h5>Synestia  hypothesis</h5>
                <p>
                    A Synestia is a type of planetary object that forms when planet-sized objects collide, resulting in a rapidly spinning mass of molten and vaporized rock.
                    In this hypothesis, <b>the Moon formed inside the Earth’s fractured structure</b>, which solves the mystery of why The Earth and The Moon share 99.9% of the same chemical composition, because they were sharing the same rocks during their formations.
                </p>
                <picture className="img">
                    <img width="600" height="400" src={IMAGES.cave} alt='' />
                </picture>
            </div>
    
            <div className='blog-subsection' id='section3'>
                <h3 className='subgroup-title'>Why is the Moon tidally locked to the Earth?</h3>
                <picture className="img">
                    <img className='smaller-image' src={IMAGES.moon_and_earth_1} alt="" />
                </picture>
    
                <p>
                    You have only ever seen half of the Moon due to the Moon being tidally locked to the Earth. 
                    This sounds like a weird coincidence, but it is actually very common. Most moon’s in our solar system are tidally locked.
                </p>
                <p><b>But why?</b> - This tidally locked state is a consequence of gravity.</p>
                <p><b>But how?</b> - The Moon rotates, but it takes precisely the same amount of time for the Moon to spin on its axis as it does to complete one trip around Earth.</p>
            </div>
    
            <div className='blog-subsection' id='section4'>
                <h3 className='subgroup-title'>Geology of the Moon</h3>
                <picture className="img">
                    <img className='larger-image' width="400" height="200" src={IMAGES.apollo15_panorama_2} alt="" />
                </picture>
                <p>
                    Once upon a time, there were giant magma oceans on the Moon. They survived for several millions of years in the Moon’s early life.
                    Maria – the darker sections of the Moon – these were once huge magma oceans.
                    Procellarum Kreep – a terrain that is found only on the near side of the Moon – defined by high concentrations of potassium, thorium, uranium, and phosphorus.
                </p>
            </div>
    
            <div className='blog-subsection' id='section5'>
                <h3 className='subgroup-title'>Moon rocks</h3>
                <picture className="img">
                    <img className='larger-image' width="400" height="200" src={IMAGES.apollo14_panorama} alt="" />
                </picture>
            </div>
    
            <div className='blog-subsection' id='section6'>
                <h3 className='subgroup-title'>Water ice on the Moon</h3>
                <picture className="img">
                    <img width="400" height="200" src={IMAGES.mare_orientale} alt="" />
                </picture>
    
                <p>
                    In 2020, NASA detected water ice in the Clavius Crater, which is in the South Pole region of the Moon.
                    There was not much, 1g of water ice per 1000g of every other material, which makes this crater 100x drier than the Sahara desert… Nevertheless, it was something!</p>
                <p>
                    However, Clavius Crater is not a permanently shadowed crater (aka. Cold trap). We believe a far greater amount of water ice would accumulate in cold traps.
                    Researchers used the LRO to study these cold traps, and found many small ones (1cm diameter) and a few big ones, and estimated that all of the cold trap combined would cover an area roughly sized 40,000 km2 in size – about the same size as Switzerland.
                </p>
            </div>
            
            <div className='blog-subsection' id='section7'>
                <h3 className='subgroup-title'>What would it be like to stand on the Moon?</h3>
                <picture className="img">
                    <img width="400" height="200" src={IMAGES.apollo16} alt="" />
                </picture>
            </div>
    
            <div className='blog-subsection' id='section8'>
                <h3 className='subgroup-title'>Mountains on the Moon</h3>
                <picture className="img">
                    <img className='larger-image' width="400" height="200" src={IMAGES.apollo15_panorama_2} alt="" />
                </picture>
            </div>
    
            <div className='blog-subsection' id='section9'>
                <h3 className='subgroup-title'>Apollo missions (America)</h3>
                <picture className="img">
                    <img width="400" height="200" src={IMAGES.moon_and_mars} alt="" />
                </picture>
            </div>
            
            <div className='blog-subsection' id='section10'>
                <h3 className='subgroup-title'>Lunokhod missions (Russia)</h3>
                <picture className="img">
                    <img width="400" height="200" src={IMAGES.moon_and_earth_3} alt="" />
                </picture>
            </div>
    
            <div className='blog-subsection' id='section11'>
                <h3 className='subgroup-title'>Yutu missions (China)</h3>
                <picture className="img">
                    <img width="400" height="200" src={IMAGES.china_yutu_rover} alt="" />
                </picture>
    
                <p>
                    In 2019, China became the first country to land a rover on the far side of the Moon.
                    The rover part of the mission (Yutu-2) began its life in the Von Karman crater in the South Pole-Aitken Basin – an impact crater 2,500km in diameter and 13km deep (one of the largest impact craters in the solar system).
                    One lunar day equals 14 Earth days, so while the rover bathes in 14 days of darkness, it powers down and enter hibernation.
                    Yutu-2 has achieved some impressive things:
                </p>
                
                <h4>Grew plants on the Moon</h4>
                <p>
                    The lander was carrying a 2.6kg mini-biosphere called the Lunar Micro Ecosystem (LME).
                    This cylindrical biosphere is only 18cm long and 16cm in diameter.
                    The purpose of this experiment was to assess the effects of lunar surface conditions (low gravity, intense radiation, and intense light) on the growth and health of Earth-based organisms.
                    Air pressure and a constant temperature of 25°C are maintained inside the LME, however it must contend with &lt; 17% of Earth gravity... The LME carried six lifeforms:
                </p>
                <ul>
                    <li>Cottonseeds - (this was the only one to yield positive results. The LME was heated in daytime, but when night time commenced temperatures outside plunged to a chilly -190°C, and the biosphere failed to maintain its constant temperature, leaving the cotton sprout dead)</li>
                    <li>Potato seeds</li>
                    <li>Rapeseeds</li>
                    <li>Yeast</li>
                    <li>Fruit fly eggs</li>
                    <li>Arabidopsis thaliana (a common weed)</li>
                </ul>
                <p>
                    The total runtime for the experiment was 9 days. The first ever biological experiment on the Moon fully demonstrates that a regenerative ecosystem can be built on the Moon.
                    However, it has shown us how difficult it is to survive on the Moon, in particular surviving the lunar night.
                    In addition, although the plants can grow in the natural sunlight and radiation conditions on the Moon, the safety of these plants has not been evaluated. 
                    Whether or not it would be safe to actually the eat potatoes and use the cotton grown from this mini-biosphere requires further research.
                </p>
    
                <h4>Discovered that the impact that created this crater brought material from within the mantle up to the surface</h4>
                <p>This confirmed a theory about lunar impacts – that they play an important role in the geological evolution of the Moon’s surface. </p>
            </div>
            
            <div className='blog-subsection' id='section12'>
                <h3 className='subgroup-title'>Chandrayaan missions (India)</h3>
                <picture className="img">
                    <img width="400" height="200" src={IMAGES.cave} alt="" />
                </picture>
            </div>
    
            <div className='blog-subsection' id='section13'>
                <h3 className='subgroup-title'>Living on the Moon</h3>
                <picture className="img">
                    <img width="400" height="200" src={IMAGES.apollo17_astronaut} alt="" />
                </picture>
            </div>
    
            <div className='blog-subsection' id='section14'>
                <h3 className='subgroup-title'>The far future of the Moon</h3>
                <picture className="img">
                    <img width="400" height="200" src={IMAGES.cyclist} alt="" />
                </picture>
    
                <p>
                    The Moon is moving away from the Earth 4cm every year.
                    The energy propelling it away comes primarily from Earth’s oceans. Other weaker forces also have an effect (the Moon’s tilt, elliptical orbit, influence of the Sun).
                    About 50 billion years from now, if the Moon and Earth could somehow avoid the eventual death of our Sun (~5 billion years from now), the Moon would be so far away and its orbit so large, that Earth would eventually tidally lock to the Moon... 
                    Only one side of the Earth would ever see the Moon, the other side moonless.
                    Unfortunately, humanity will not bear witness to such distant events. So next time you look up at the Man in the Moon, remember the processes that keep it there, contemplate on other planets throughout the vast Universe where moons of different colours/shapes/sizes/orbits/terrain shine brightly on alien worlds, and reflect on our insignificant, fleeting, brief, fortunate existence at a time in the Universe where we are lucky enough to make observations of “nearby” stars, exo-solar-systems, galaxies, compared to the inevitable incomprehensibly large, dark, lonely fate of our Universe due to cosmic inflation and black hole dominance.
                </p>
            </div>
    
            <div className='blog-subsection references-text' id='section15'>
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
}

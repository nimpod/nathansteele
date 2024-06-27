import React from 'react';

const IMAGES = {
    /*
    // photos...
    surface1: require('./photos/surface1.jpg'),
    surface2: require('./photos/surface2.jpg'),
    surface3: require('./photos/surface3.jpg'),
    surface4: require('./photos/surface4.jpg'),
    surface5: require('./photos/surface5.jpg'),
    surface6: require('./photos/surface6.jpg'),
    cryolava_lake: require('./photos/cryolava_lake.jpg'),
    leviathan_patera_volcanic_dome: require('./photos/leviathan_patera_volcanic_dome.png'),

    // diagrams...
    geomorphology: require('./diagrams/geomorphology.jpg'),
    subsurface_ocean: require('./diagrams/subsurface_ocean.jpg'),
    unusual_orbit: require('./diagrams/unusual_orbit.jpg'),
    */

    // photos...
    surface1:                       "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/triton/photos/surface1.jpg",
    surface2:                       "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/triton/photos/surface2.jpg",
    surface3:                       "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/triton/photos/surface3.jpg",
    surface4:                       "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/triton/photos/surface4.jpg",
    surface5:                       "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/triton/photos/surface5.jpg",
    surface6:                       "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/triton/photos/surface6.jpg",
    cryolava_lake:                  "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/triton/photos/cryolava_lake.jpg",
    leviathan_patera_volcanic_dome: "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/triton/photos/leviathan_patera_volcanic_dome.png",

    // diagrams...
    geomorphology:                  "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/triton/diagrams/geomorphology.jpg",
    subsurface_ocean:               "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/triton/diagrams/subsurface_ocean.jpg",
    unusual_orbit:                  "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/triton/diagrams/unusual_orbit.jpg",
}

export const post = (screenshots) => (
    <div>
        <div className='intro-text blog-subsection' id='section1'>
            <h3 className='subgroup-title'></h3>
            <p><b>Triton</b> is the largest moon of Neptune, the 7th largest moon in the Solar System.</p>
            <p>The mysterious moon contains a <b>geothermally heated sub-surface ocean</b>, the moon is geologically active with cryovolcanoes meaning the surface is constantly reshaping, <b>geysers</b> are spewing out water vapor 8km above the surface, and frosty nitrogen snow covers the moons icy surface.</p>
            <picture className="img"> 
                <img width="600" height="400" src={IMAGES.surface5} alt='' />
            </picture>
        </div>
        <div className='blog-subsection' id='section2'>
            <p>Up in Triton's thin atmosphere, <b>clouds of nitrogen</b> exist beneath a highly charged ionosphere. We have observed the formation of nitrogen clouds 3km above the surface of Triton, they are likely the result of the cryovolcanism going on inside the moon.</p>
            <p>A single Tritonian season lasts <b>40 Earth years</b>. When Voyager 1 flew past Triton in 1989, it was spring in the Northen hemisphere. 24 years later in the year 2023,
                it's now summer in the Northen hemisphere. In the depths of Tritonian winter, temperatures plunge to a rather <b>chilly temperature of -240°C</b></p>
            <p>The surface is believed to be about 50% nitrogen snow, 33% water ice, the rest being frozen carbon dioxide (suspiciously similar to Pluto's surface... we'll get back to this later...).
                There are no obvious signs of impact craters on the surface, but smooth plains of shiny nitrogen snow, vast landscapes of frozen cryovolcanoes, ridges formed by outpouring
                of icy lava. All these observations have lead us to believe the moon is remarkably young (by the standards of our solar system - possibly a meagre 10 million years old!)
                which would indicate that the surface is being endlessly reshaped by geological activity.</p>
            <p>But the secrets behind Triton's mysterious geological activity may lie in its unusual orbit...</p>
            <picture className="img">
                <img width="600" height="400" src={IMAGES.surface1} alt='' />
            </picture>
        </div>
        <div className='blog-subsection' id='section3'>
            <p>Remember I mentioned that Triton's surface is very similar to Pluto's? Well this may be no coincidence, as it's very likely Triton began as a <b>dwarf planet billions of years ago
                in the Kuiper Belt alongside Pluto</b>. Neptune's strong gravitational pull captured Triton, claiming it as it's moon.</p>
            <p>The most compelling evidence we have of this is <b>Triton's unusual orbit</b>. Neptune turns counter-clockwise, which means all of its moons should orbit in the same
                direction - we have hundreds of pieces of evidence showing us this how most normal moons behave. Triton breaks this rule, orbiting in the opposite direction to its planet.
                This is what we call a <b>Retrograde Orbit</b>.</p>
            <picture className="img">
                <img width="600" height="400" src={IMAGES.unusual_orbit} alt='' />
            </picture>
            <picture className="img">
                <img width="600" height="400" src={IMAGES.surface2} alt='' />
            </picture>
        </div>
        <div className='blog-references references-text ' id='section14'>
            <h3 className='subgroup-title'>References</h3>
            <ul>
                <li><a href='https://www.youtube.com/watch?v=qGy4uyHVUYA'>https://www.youtube.com/watch?v=qGy4uyHVUYA</a></li>
                <li><a href='https://www.youtube.com/watch?v=hzcNH9HHwrE'>https://www.youtube.com/watch?v=hzcNH9HHwrE</a></li>
                <li><a href='https://www.youtube.com/watch?v=MwkjIgGqbFo'>https://www.youtube.com/watch?v=MwkjIgGqbFo</a></li>
                <li><a href='https://www.youtube.com/watch?v=9JTkaXfPr0U'>https://www.youtube.com/watch?v=9JTkaXfPr0U</a></li>
                <li><a href='https://www.youtube.com/watch?v=fkwq5Wkkdm4'>https://www.youtube.com/watch?v=fkwq5Wkkdm4</a></li>
            </ul>
        </div>
    </div>
)
import React  from 'react';

const MEDIA = {
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
            <p>This was a crazy way to spend 14 days.</p>
            <p>More text <a href='https://en.wikipedia.org/wiki/Venera' target='_blank'>a link</a></p>
        </div>

        <div className='blog-subsection' id='section2'>
            <h3 className='subgroup-title'>This is a subgroup title</h3>
            <p><a href='https://en.wikipedia.org/wiki/Venera_1' target='_blank'>Venera 1</a> was launched in <b>Febuary 1961</b> (that's just 4 years post-<a href='https://en.wikipedia.org/wiki/Sputnik_1'>Sputnik</a>, and 7 years pre-<a href='https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html'>Apollo 11</a>). Unfortunately we lost radio contact with Venera 1, it is believed that it failed due to the overheating of a solar-direction sensor, it returned no data...</p>
            <p><a href='https://en.wikipedia.org/wiki/Venera_2' target='_blank'>Venera 2</a> was launched in <b>November 1965</b> but also suffered from similar problems. The spacecraft made its closest appraoch to Venus at a distance of 23,810km (that's pretty close!)</p> 
            <p>Text goes here.</p>
            <picture className="img">
                <img className='larger-image' src={MEDIA.venus_topography_map} alt='Venus topography map' />
                <p className='external-link-container'>Map of Venus based on radar imagery from the Pioneer Venus Orbiter spacecraft - [<a href="https://solarsystem.nasa.gov/news/930/30-years-ago-magellan-off-to-map-venus/">source of image</a>]</p>
            </picture>
        </div>

        <div className='blog-subsection' id='section3'>
            <h3 className='subgroup-title'>Venera 3</h3>
            <p>blah <b>March 1966</b>, <a href='https://en.wikipedia.org/wiki/Venera_3' target='_blank'>a link</a> blah</p>
            <p className='acolade'>This is an acolade!</p>
            <picture className="img">
                <img width="250" height="100" className='dont-resize' src="https://www.wired.com/images_blogs/wiredscience/2010/02/venera_3.jpg" alt='Venera-3 probe' />
                <p className='external-link-container'>Photo of Venera 3 - [<a href="http://mentallandscape.com/V_OKB1.htm">Source of image</a>]</p>
            </picture>
            <p>Here's a large image...</p>
            <picture className="img">
                <img className='larger-image' src="https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x491_crop_center-center_82_line/venus-surface-venera-13-a.jpg.webp" alt='Venera 13 front camera' />
                <p className='external-link-container'>[<a href="http://mentallandscape.com/C_CatalogVenus.htm">Source of image</a>]</p>
            </picture>
            <p>Here's some audio...</p>
            <audio controls>
                <source src={MEDIA.venera_audio_recording} type='audio/wav' />
            </audio>
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
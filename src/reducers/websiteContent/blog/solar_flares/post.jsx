import React  from 'react';
import { useRef } from 'react';


const IMAGES = {
    solar_flare_classifcation_chart: require('./images/solar_flare_classification_chart.jpg'),
    artist_rendetion_of_carrington_event: require('./images/artist_rendition_of_carrington_event.jpeg'),
    tree_rings: require('./images/tree_rings.jpg'),
    auroras_2024: require('./images/2024_auroras.jpg')
}

export const post = () => {

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
                <p>A <a href="https://en.wikipedia.org/wiki/Solar_flare">solar flare</a> is a tremendous explosion on the Sun that happens when energy stored in 'twisted' magnetic fields (usually above sunspots) is suddenly released. The most noticable effect on The Earth from a solar flare are the <a href="https://www.jpl.nasa.gov/nmp/st5/SCIENCE/aurora.html">aurora borealis</a>.</p>
                <p>
                    We classify solar flares according to their <a href="https://solar-center.stanford.edu/SID/activities/flare.html">X-ray brightness</a>. 
                    The categories are <b>A,B,C,M,X</b>. These are logarithmic scales, so an X flare is 10x stronger than a M flare, or 100x stronger than a C flare.</p>
                <ul>
                    <li><b>A, B, C, M</b>: Not powerful enough to be noticed by us mere mortals here on Earth</li>
                    <li><b>X1 - X5</b>: Powerful enough for northerners (e.g. Iceland, Canada, Russia, Norway, Finland) to observe auroras</li>
                    <li><b>X5 - X10</b>: Powerful enough for slightly less northern citizens (e.g. Scotland, England, USA) to observe auroras</li>
                    <li><b>X10 - X45</b>: Powerful enought to technological infrastructure (e.g. telegraph poles)</li>
                    <li><b>X45+</b>: Our vulnerable technology-reliant modern society is absolutely fucked</li>
                </ul>
                <picture className="img">
                    <img width="600" height="400" src={IMAGES.solar_flare_classifcation_chart} alt='' />
                    <p className='external-link-container'>Solar flare classification chart (<a href="https://youngzine.org/node/27169/devel">https://youngzine.org/node/27169/devel</a>)</p>
                </picture>
            </div>
    
            <div className='blog-subsection' id='section2'>
                <h3 className='subgroup-title'>Carrington Event (1859)</h3>
                <p>The sun erupted a very bright solar flare on the 1st of September 1859. It created the most intense geomagnetic storm in recorded history, named the Carrington Event.</p>
                <p>The Carrington Event was classified as an <b>X45 flare</b>.</p>
                <p>Extremely vibrant auroral displays were reported globally and caused sparking and even fires in multiple telegraph stations.</p>
                <p>We were largely a very non-technological society in 1859. A geomagnetic storm of this magnitude occurring today would cause widespread electrical disruptions, blackouts, and damage due to extended outages of the electrical power grid.</p>
                <p>Theoretically, we should be getting Carrington type events roughly every 1000 years.</p>
                <picture className="img">
                    <img width="600" height="400" src={IMAGES.artist_rendetion_of_carrington_event} alt='' />
                    <p className='external-link-container'>Artists rendetiton of The Carrington Event (<a href="https://mind4survival.com/the-carrington-event/">https://mind4survival.com/the-carrington-event/</a>)</p>
                </picture>
            </div>

            <div className='blog-subsection' id='section3'>
                <h3 className='subgroup-title'>Have their been solar storms stronger than the Carrington Event?</h3>                
                <p>
                    We can look at <a href="https://silvotherapy.co.uk/articles/what-tree-rings-can-teach-us">tree rings</a> to find <a href="https://www.universetoday.com/158351/the-most-devastating-solar-storms-in-history-are-scoured-into-tree-rings/">evidence of past solar flares</a> that have struck the Earth. 
                    From the many thousands of tree rings observed the all show 6 major solar flare impacts. 
                    The scary thing is, <b>the Carrington Event wasn't powerful enough to be recorded in tree rings...</b>
                </p>
                <p>
                    In other words, there were at least 6 other solar flare events that were significantly more powerful than the Carrington Event in the last 10,000 years. 
                    We don't know how powerful these 6 other ones are, but we know they occurred within the last 10000 years. 
                    So there were probably some humans around that saw some mad aurora borealis activity for several weeks.
                    No wonder our ancient ancestors resorted to religion and gods as answers to such beautiful, unexpected, incomprehensible cosmic phenomenona.
                </p>
                <p>If an X45 type solar flare can cause telegraph poles to lit on fire in a largely non-technological 1859 society, imagine what it would do to our extremely technology-reliant 2024 society.</p>
                <p>If one of the solar flares recorded on the tree rings was say, for example X70, which could theoretically happen as we know 6 other similar ones have occurred within the last 10,000 years, modern society would be absolutely fucked.</p>
                <picture className="img">
                    <img width="600" height="400" src={IMAGES.tree_rings} alt='' />
                    <p className='external-link-container'>Example of tree rings (<a href="https://wng.org/roundups/tree-rings-document-mega-radiation-storms-1668100874">https://wng.org/roundups/tree-rings-document-mega-radiation-storms-1668100874</a>)</p>
                </picture>
            </div>
    
            <div className='blog-subsection' id='section4'>
                <h3 className='subgroup-title'>2024 Solar flares</h3>
                <p>The solar flares that caused this recent aurora activity was classified as a <b>X8.6 flare</b>.</p>
                <p>Recall that the scales go up in orders of magnitude. So the Carrington's X45 flare was dramatically stronger than 2024's X8.6 flare.</p>
                <p>This recent solar storm was powerful enough to produce aurora borealis in places as south as The UK.</p>
                <picture className="img">
                    <img width="600" height="400" src={IMAGES.auroras_2024} alt='' />
                    <p className='external-link-container'>Photograph of auroras in UK (<a href="https://www.independent.co.uk/news/uk/home-news/northern-lights-uk-europe-aurora-b2543308.html">https://www.independent.co.uk/news/uk/home-news/northern-lights-uk-europe-aurora-b2543308.html</a>)</p>
                </picture>
                <p>
                    Based on how active the aurora borealis has been recently from an X8.6 flare, the night skies must have looked absolutely insane from an X45 flare back in 1859. 
                    Imagine the reactions of villagers back then, from their precious telegraph poles being set on fire to extremely vibrant night skies, how would they even begin to seek answers to such a beautiful, unexpected, incomprehensible cosmic phenomenona.
                </p>
            </div>
    
            <div className='blog-subsection references-text' id='section6'>
                <h3 className='subgroup-title'>References</h3>
                <ul>
                    <li><a href='https://youtu.be/WDFW_-dWT8A?si=2Bgj0lcbAlBKSfzV'>https://youtu.be/WDFW_-dWT8A?si=2Bgj0lcbAlBKSfzV</a></li>
                    <li><a href='https://solar-center.stanford.edu/SID/activities/flare.html#:~:text=Scientists%20classify%20solar%20flares%20according,M9%2C%20and%20X1%20to%20X9'>https://solar-center.stanford.edu/SID/activities/flare.html#:~:text=Scientists%20classify%20solar%20flares%20according,M9%2C%20and%20X1%20to%20X9</a></li>
                </ul>
            </div>
        </div>
    )    
}

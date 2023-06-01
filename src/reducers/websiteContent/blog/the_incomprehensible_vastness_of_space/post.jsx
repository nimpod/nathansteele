import React, { Component }  from 'react';

export const post = (screenshots) => (
    <div>
        <div class='intro-text blog-subsection'>
            <h3 class='subgroup-title'></h3>
            <p>The nearest solar system to us is <a href='https://en.wikipedia.org/wiki/Alpha_Centauri'>Alpha Centuri</a>, a meagre <b>4.246 lightyears</b> away.</p>
            <p class='note'>A <a href='https://exoplanets.nasa.gov/faq/26/what-is-a-light-year/'>lightyear</a> is a measurement of distance, specifically the amount of distance 
                covered if you were travelling at the speed of light. This is 9,460,730,472,580 km (9.46 trillion km).</p>
            <p>So in astronomical terms, Alpha Centuri is relatively close to us, just <b>4.246 lightyears</b> away... Unfortuantly our humans minds find it difficult to 
                comprehend this vast distance because it's actually equivalent to <b>40,174,991,951,814 km (40.17 trillion km)</b>...</p>
            <p>To get some perspective, let's measure how long it would take to travel to Alpha Centuri in various forms of transport, starting with a car...</p>
            <table class='time-to-get-to-alphacenturi-table'>
                <thead>
                    <th>Form of transport</th>
                    <th>Average speed (mph)</th>
                    <th>Average speed (kms)</th>
                    <th>Percentage of the speed of light</th>
                    <th>Number of years to get to Proxima Centuri</th>
                </thead>
                <tbody>
                    <tr>
                        <td><a href='https://content.instructables.com/FB7/LHFS/JB3ZPO82/FB7LHFSJB3ZPO82.jpg?auto=webp&frame=1&width=320&md=7889e426df2974e5d95b1817c52ede0f'>Car</a></td>
                        <td>70</td>
                        <td>0.03</td>
                        <td>0.00000113%</td>
                        <td>40,600,000</td>
                    </tr>
                    <tr>
                        <td><a href='https://en.wikipedia.org/wiki/Speed_of_sound'>Sound</a></td>
                        <td>760</td>
                        <td>0.339</td>
                        <td>0.00000113%</td>
                        <td>4,600,000</td>
                    </tr>
                    <tr>
                        <td><a href='https://voyager.jpl.nasa.gov/'>Voyager 1</a></td>
                        <td>38,214</td>
                        <td>17.3</td>
                        <td>0.00000576%</td>
                        <td>73,000</td>
                    </tr>
                    <tr>
                        <td><a href='https://www.nasa.gov/content/goddard/parker-solar-probe/'>Parker Solar Probe</a></td>
                        <td>429,988</td>
                        <td>692</td>
                        <td>0.0023%</td>
                        <td>6,300</td>
                    </tr>
                    <tr>
                        <td><a href='https://www.youtube.com/watch?v=SkGRVvA23qI&list=PL_m58L0UBc3Vk3-_HNEHtt64cn1-aNpnJ&index=8&t=126s'>Riding solar wind (theoretical)</a></td>
                        <td>1,000,000</td>
                        <td>40,000</td>
                        <td>20%</td>
                        <td>40.50</td>
                    </tr>
                    <tr>
                        <td><a href='https://www.planetary.org/articles/what-is-solar-sailing'>Solar sail (theoretical)</a></td>
                        <td>2,236,936</td>
                        <td>60,000</td>
                        <td>20%</td>
                        <td>21.23</td>
                    </tr>
                    <tr>
                        <td><a href='https://www.space.com/15830-light-speed.html'>Light speed</a></td>
                        <td>670,616,629</td>
                        <td>300,000</td>
                        <td>100%</td>
                        <td>4.246</td>
                    </tr>
                </tbody>
            </table>
            <p>Of all the spacecrafts venturing beyond the solar system, <a href='https://www.space.com/most-distant-spacecraft-voyagers-new-horizons'>Voyager 1 has been going the 
                longest</a> - launched in 1977, and has been moving at 17.3km/s for over 45 years... It's covered <b>23,816,382,064 km (or 23.8 billion km)</b>...</p>
            <p>In other words, it's covered <b>0.00005928% of the distance to Alpha Centuri</b>... And it's not even heading in that direction!</p>
            <p>However it is due to pass within 1.6 lightyears (9.3 trillion miles) of an obscure star in the constellation Ursa Minor (aka. the little dipper) called AC+79 3888, in the year 40,272 AD (more than 38,200 years from now)...</p> \
            <picture class="img">
                <img width="400" height="200" src="https://cdn.mos.cms.futurecdn.net/38UnvH7oaiQX4VkAHhNqbN-970-80.png" alt="Not to scale illustration of spacecrafts venturing beyond the solar system" />
            </picture>\
        </div>
    </div>
)
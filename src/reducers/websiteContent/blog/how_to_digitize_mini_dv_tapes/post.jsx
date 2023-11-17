import React from 'react';

export const post = (screenshots) => (
    <div>
        <div className='intro-text blog-subsection'>
            <h3 className='subgroup-title'>What is a Mini DV Tape?</h3>
            <p>A Mini DV tape is a type of cassette tape used in most <a href='https://en.wikipedia.org/wiki/Camcorder'>digital camcorders</a> until the early 2000's.</p>
            <p><a href='https://en.wikipedia.org/wiki/DV'>Digital Video (DV)</a> is a format for storing digital videos, created by Sony, JVC, Panasonic and other video camera manufacturers in 1995.</p>
            <picture className="img">
                <img width="200" className='dont-resize' src="https://img.fruugo.com/product/2/52/138446522_max.jpg" alt="Mini DV tape" />
            </picture>
            <h3 className='subgroup-title'>Why do we need to digitize Mini DV tapes?</h3>
            <p>In 2003, DV was joined by a successor format <a href='https://en.wikipedia.org/wiki/HDV'>HDV</a>, which used the same tape format with a different video codec. Some cameras at the time had the ability to switch between DV and HDV recording modes. Some, however, do not have that ability, meaning the only way to watch videos back is through the device itself. Such is the case with the Sony DCR-TRV900E Camcorder.</p>
            <h3 className='subgroup-title'>How do you digitize Mini DV tapes?</h3>
            <p>Mini DV tapes store data digitally, the footage can be exported directly to a computer using a Firewire (IEEE 1394) cable. </p>
            <p>
                The basic idea is that we will replay the footage of a tape, capturing the footage on a PC by using <a href='https://etc.usf.edu/techease/mac/hardware/what-is-firewire/'>firewire connection</a>.
                We can capture the footage using video editing software (e.g. Windows Movie Maker) and converting what is recorded to an .mp4.
                You will have to wait for the duration of the tape in order for it to be digitized.
                This seems to be the cheapest, most simple (and definitely most time-consuming) method out there for converting those old fashioned Mini DV tapes to mp4 files.
            </p>
        </div>
        <div className='blog-subsection'>
            <h3 className='subgroup-title'>Checklist</h3>
            <ul>
                <li>Firewire adapter <a href='https://www.amazon.co.uk/gp/product/B00MMKJJY4/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1'>SEDNA - PCIe (PCI EXpress) 3+1 Ports 1394A (Firewire) Adapter card</a></li>
                <li>Firewire cable <a href='https://www.amazon.co.uk/gp/product/B008UT7C6I/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1'>Neet Firewire Cable 6-4 pin 2M </a></li>
                <li>Mini DV camcorder <a href='https://www.amazon.co.uk/Sony-DCR-TRV900-DCR-TRV900-MiniDV-Camcorder/dp/B00005K4JV'>Sony DCR-TRV900E Camcorder</a></li>
                <li>Mini DV tapes <a href='https://www.amazon.co.uk/Sony-Pack-min-DVM-Premium/dp/B0007A57K6/ref=sr_1_1?dchild=1&keywords=mini+dv+tape&qid=1593163830&s=computers&sr=1-1'>Sony 10 Pack 60m DVM</a></li>
                <li>A spare PCIe port in your computer</li>
                <li>Windows movie maker</li>
            </ul>
            <p className="note">Firewire cables come in different shapes and sizes. For the camera I was using, I needed the 6-4 pin 2M firewire cable. Check what your camera supports.</p>
            <h3 className='subgroup-title'>Step 1 - installing firewire adapter</h3>
            <ul>
                <li>Insert adapter into PCIe slot. The metal bracket should rest on the outer part of your PC case. Depending on the size of your PC, you will have to decide whether to use the small or large metal bracket. In my case, I used the large bracket.</li> \
                <li>Screw the metal bracket into the case using the screws provided with your own PC.</li>
            </ul>
            <h3 className='subgroup-title'>Step 2 - connect firewire cable</h3>
            <ul>
                <li>A firewire cable has 2 different parts - the part that connects to your camcorder, and the part that connects to your computer.</li>
                <li>In my case, the part that connects to your camcorder was the 4-pin end.</li>
                <li>And the part that connects to your computer was the 6-pin end.</li>
                <li>Find the correct port on your camcorder for the 4-pin end.</li>
                <li>Take the other end of the firewire cable and plug it into the correct port on your firewire adapter.</li>
            </ul>
            <h3 className='subgroup-title'>Step 3 - prepare tape</h3>
            <ul>
                <li>This step is very specific for the camcorder I was using. Basically we are just preparing the tape to be played.</li>
                <li>Press '' button to open tape holder.</li>
                <li>Insert tape into tape holder.</li>
                <li>Hold rewind button until the camera stops making a loud noise. That means you have returned to the beginning of the tape.</li>
            </ul>
            <h3 className='subgroup-title'>Step 4 - recapture video footage</h3>
            <ul>
                <li>Open Windows Movie Maker.</li>
                <li>Click 'File' in the top right.</li>
                <li>Click 'Import from device'.</li>
                <li>Your camcorder should be detected, click on it.</li>
                <li>Press the play button on your camcorder, also pressing the record button on Movie Maker at the same time.</li>
                <li>Wait...</li>
                <li>When the tape ends, stop the recording, and save the video as an .mp4 (be prepared for this part to take a while, the files can get quite large! For reference a 1 hour video I recently digitized was 4.52GB).</li>
            </ul>
        </div>
    </div>
)
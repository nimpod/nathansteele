import React from 'react';

const IMAGES = {
    scrobbles_graph: "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/my_most_listened_songs_of_2021/scrobbles_per_month_graph.PNG",
}

export const post = () => (
    <div className='top-songs-EOY'>
        <div className='intro-text blog-subsection' id='section1'>
            <div className='display-img-beside-text'>
                <div>
                    <h3 className='subgroup-title'>Intro</h3>
                    <p>2021 was the first year I have a full array of scrobbling data to analyse. I started scrobbling in October 2020, so needless to say I am excited to have an entire years worth of data to bathe in. According to LastFM, I listened to <b>7,512</b> individual songs, and scrobbled <b>18,164</b> overall.</p>
                    <p>In this blog post I will go over the 25 songs that I listened to most this year...</p>
                    <p>I did the same for 
                        <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2020' target='_blank'> 2020</a>, 
                        and <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2014_2015_2016' target='_blank'>2014/15/16</a>,  too.
                    </p>
                    <p>If for some bizzare reason you wish to see more than the top 25 tracks, the <a href="https://www.last.fm/user/gutash/library/tracks?from=2021-01-01&rangetype=year">entire 2021 list is here</a>...</p>
                    <p className='note'>Disclaimer: this is <b>NOT a 'top 25 songs of 2021 list'</b>, this is simply <b>a list of the '25 songs that I listened to most throughout 2021'.</b> 
                        It would be a waste of time messing about with arbitary ordering, when the quantitative measurement of a 'play count' already exists thanks to LastFM scrobbling!
                        I personally don't see the point of making 'top 25 songs of 2021' lists, or 'top 50 albums of 2021' lists, when you are bound to change your opinion on the arbitary ordering in a few months,
                        not to mention how much music is out there that you've never heard before and will inevitably discover several years down the line leaving your old lists outdated.
                    </p>
                </div>
                <img src={IMAGES.scrobbles_graph} className='scrobbles-per-month-graph beside-text' alt="Srobbles per month graph" />
            </div>
        </div>
        <div className='blog-subsection' id='track1'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#1</span>
                <span className='track-scrobbles'>31 scrobbles</span>
                <span className='track-artist-and-title'>Poppy - Anything Like Me</span>
            </h3>
            <p>
                This year I had the great privallege of discovering Poppy.
                A very intriguing musician who's style exists somewhere between Industrial/Alternative/Nu Metal and Dream Pop...?
                This is probably not my favourite Poppy song (see #8 and #11) but has somehow ended up being by far my most listened song of the year!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qmMm1TwYYns?si=4ln8-D5oY329NWA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track2'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#2</span>
                <span className='track-scrobbles'>26 scrobbles</span>
                <span className='track-artist-and-title'>Poppy - I Disagree</span>
            </h3>
            <p>
                Poppy also taking 2nd place with another FANTASTIC banger.
                This song and the entire 'I Disagree' album is defintely the most fun I have ever experienced with Metal and all its subgenres.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BmX4S-Bm50U?si=eDBiEfr2g0JHSzna" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track3'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#3</span>
                <span className='track-scrobbles'>24 scrobbles</span>
                <span className='track-artist-and-title'>Ichiko Aoba - Parfum d'étoiles</span>
            </h3>
            <p>
                This is probably one of the most beautiful ballads I've ever heard in my life.
                Ichiko Aoba's 2020 album 'Windswept Adan' is also one of the best albums I've ever heard in my life.
                I started listening to the album back in November 2020, and has not left my rotation ever since.
                It's quite rare for a 2m 53s song to contain so much beauty.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/G3_WW8XRqes?si=QnPijsgtVjgW9T8J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track4'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#4</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Moron Police - The Phantom Below</span>
            </h3>
            <p>
                One of my new favourite prog rock albums of all time.
                I heard this for the first time back in July, and it has been in <b>heavy</b> rotation ever since.
                This song 'Phantom Below' is one of several impeccable songs from the album.
                I've actually forgotten how fucking good this song is now I am just listening to it again.
                The sax solo at the end of the song GOD DAYUM!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4A6fne2gF34?si=hlnVMR6cTAuqo7wR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track5'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#5</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Poppy - BLOODMONEY</span>
            </h3>
            <p>
                Another excellent song from Poppy's crazy new album.
                No one is fusing Metal & Pop the way Poppy does.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fJlDyRbUtxI?si=3y2vHsOhYNrHcOJK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track6'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#6</span>
                <span className='track-scrobbles'>20 scrobbles</span>
                <span className='track-artist-and-title'>Fiona Apple - Every Single Night</span>
            </h3>
            <p>
                I discovred Fiona Apple way back in Janurary 2021.
                That feels like a long time ago.
                She is undoubtedly one of the most unique singer-songwritters to come out of America, ever, in my opinion.
                It's fucking spectactular.
                Bonus points for an awesome music video too!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bIlLq4BqGdg?si=whs14Y4CR7Gx41Id" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track7'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#7</span>
                <span className='track-scrobbles'>20 scrobbles</span>
                <span className='track-artist-and-title'>Halestorm - Mz Hyde</span>
            </h3>
            <p>
                There's nothing quite like a female vocalist for a metalcore band.
                This song and the 'The Strange Case Of... ' album is a metal album that's fairly accessible and easy to get into if you're not that well versed in all of the metal subgenres, and just enjoy listening to passionate/energetic/melodic/catchy metal.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/j2OD-dV7j_I?si=B0IjhIxNXuiJiRT7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track8'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#8</span>
                <span className='track-scrobbles'>20 scrobbles</span>
                <span className='track-artist-and-title'>Poppy - Say Cheese</span>
            </h3>
            <p>
                Ah female vocalist on a metal album you were saying?
                Poppy released a new EP this year, and really emphasised her talent for SCREAAAAAMMMING!
                This EP is absolutely phenomenonal.
                This track 'Say Cheese' is other-fucking-worldly.
                And that jazz-inspired piano interlude was insane!
                This EP will forever be in my top 50 albums of all time.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZV9QQJxsyks?si=cYs8T-KmPHKvdOx6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track9'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#9</span>
                <span className='track-scrobbles'>19 scrobbles</span>
                <span className='track-artist-and-title'>GFOTY - Don't Wanna / Let's Do It</span>
            </h3>
            <p>
                If you like having fun, listen to this song.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wmGauKp2HiA?si=e2jOYUzxp__Q9xYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track10'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#10</span>
                <span className='track-scrobbles'>22 scrobbles</span>
                <span className='track-artist-and-title'>Jon Brion & Deanne Storey - Little Person</span>
            </h3>
            <p>
                This is possibly one of the greatest songs ever created.
                This is a song written by Jon Brion and sung by jazz vocalist Deanne Storey.
                It's one of many fantastic songs in Jon Brion's soundtrack for the film Synecdoche New York.
                I wasn't a big fan of the film when I watched it back in August, but holy shit, this soundtrack, and this song in particular, absolute perfection.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IA_ubhYgjAc?si=od8Sz6oWxlyz2cSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track11'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#11</span>
                <span className='track-scrobbles'>19 scrobbles</span>
                <span className='track-artist-and-title'>Poppy - EAT</span>
            </h3>
            <p>
                We are not done with Poppy yet.
                This is another phenomenonal song from the Eat EP.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/keYP-L13d2c?si=DYBniqFnOmDw9Kw9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track12'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#12</span>
                <span className='track-scrobbles'>18 scrobbles</span>
                <span className='track-artist-and-title'>Porter Robinson - Mother</span>
            </h3>
            <p>
                I discovered Porter Robinson back in June thanks to his new album Nurture.
                There are lots of songs that I like from the album.
                It's fairly accessible electropop/EDM/glitch pop, not the most mind-blowing music ever, but very enjoyable and inspiring.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ba9xcp7OO1o?si=0ceBoxop0KPhBc5D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track13'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#13</span>
                <span className='track-scrobbles'>18 scrobbles</span>
                <span className='track-artist-and-title'>Poppy - Concrete</span>
            </h3>
            <p>
                This is the intro to Poppy's 2020 I Disagree album.
                A marvellous style, constantly shifting between chaos and innocence.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WwoGhpYdebQ?si=rE6zKUwsoWAANcSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track14'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#14</span>
                <span className='track-scrobbles'>18 scrobbles</span>
                <span className='track-artist-and-title'>Sufjan Stevens - Should Have Known Better</span>
            </h3>
            <p>
                Somehow we are only just encountering Sufjan Stevens... I discovered him through this album back in June, and it hasn't really let me go since.
                The whole album is one of the greatest indie folk experiences I've ever had before.
                This song is one of many fantastic songs on the album.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lJJT00wqlOo?si=-U81_yXxP5bu8ItC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track15'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#15</span>
                <span className='track-scrobbles'>17 scrobbles</span>
                <span className='track-artist-and-title'>Grimes - Flesh Without Blood</span>
            </h3>
            <p>
                This song reminds me of running for many hours in the dark and cold wintery nights of January & February.
                Ultimately it's pretty basic synthpop/electropop/dance-pop, but it's very energetic, passionate, and enjoyable to listen to.
                To be honest there are a few other tracks I probably prefer over this one (<a href="https://www.youtube.com/watch?v=c2EJMd7ZN7w">Kill V Maim</a>, <a href="https://www.youtube.com/watch?v=eTLTXDHrgtw">Venus Fly</a>, <a href="https://www.youtube.com/watch?v=HpAsOEsamA0">Belly of the Beat</a>)
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Tv9YoYCKNoE?si=PKrvgTH8U5TJ0oVe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track16'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#16</span>
                <span className='track-scrobbles'>17 scrobbles</span>
                <span className='track-artist-and-title'>Laurent Perez Del Mar - L'au revoir</span>
            </h3>
            <p>
                French composer Laurent Perez Del Mar created a soundtrack for a dialogueless film called <a href="https://boxd.it/bdkE">The Red Turtle</a>.
                If your film contains on dialgoue you better make sure there is some kind of audio for the viewers to experience.
                And Laurent made exactly that happen. The whole soundtrack is fantastic, espcially this song.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lGjh5LKKHcM?si=lonwg4C1FtGjVSKG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track17'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#17</span>
                <span className='track-scrobbles'>17 scrobbles</span>
                <span className='track-artist-and-title'>Pendulum - Prelude</span>
            </h3>
            <p>
                This is the first song on the classic drum & bass album from Pendulum 'Hold Your Colour'.
                I'm not sure how this ended up in my 25 most listened songs of the year to be honest... but I won't complain because it is 52 seconds of absolute ethereal cosmic beauty.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/NNwK16JtUl8?si=TcdYD13l2XAjbTYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track18'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#18</span>
                <span className='track-scrobbles'>17 scrobbles</span>
                <span className='track-artist-and-title'>Poppy - Fill The Crown</span>
            </h3>
            <p>
                More Poppy!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fiH9YPSPNlA?si=Pn7XbA-HKIXZnWSG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track19'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#19</span>
                <span className='track-scrobbles'>17 scrobbles</span>
                <span className='track-artist-and-title'>Poppy - Sit/Stay</span>
            </h3>
            <p>
                And more Poppy!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/D0CJdg-1-KY?si=VuIYrCRpgnu-svgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track20'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#20</span>
                <span className='track-scrobbles'>17 scrobbles</span>
                <span className='track-artist-and-title'>The Millenium - 5am</span>
            </h3>
            <p>
                This album is definitely one of the most random discoveries of the year for me.
                Sunshine Pop band called 'The Millenium' created this album in 1968 called 'Begin'.
                There are lots of great songs on the album. In particular this song called '5am' is a happy/melodic/summery/mellow song that brings me a bit of 1960's peace whenever I need it.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wmmJ8Y-vo7U?si=Bbm4LTOaZldtduUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track21'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#21</span>
                <span className='track-scrobbles'>16 scrobbles</span>
                <span className='track-artist-and-title'>Jessie Ware - Soul Control</span>
            </h3>
            <p>
                One of the greatest Nu-disco/Smooth soul songs I've ever heard.
                The whole 2020 album 'Whats Your Pleasure' is absolutely impeccable.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QwhkvO_hCOM?si=djPJ3OShv5qufP_T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track22'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#22</span>
                <span className='track-scrobbles'>16 scrobbles</span>
                <span className='track-artist-and-title'>Magdalena Bay - Secrets (Your Fire)</span>
            </h3>
            <p>
                Talking of impeccable songs...
                Magdalena Bay created possibly one of the greatest synthpop songs I've ever heard...
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TlhIk7iPU9o?si=Cs__qe7psO4f9iH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track23'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#23</span>
                <span className='track-scrobbles'>18 scrobbles</span>
                <span className='track-artist-and-title'>Moron Police - Hocus Pocus</span>
            </h3>
            <p>
                Ah excellent! We are back to prog rock extraordinaires Moron Police!
                This song is actually more of an interlude of sorts, or just a very short song at 1m 20s.
                There is a lot more to enjoy on the full album.                
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Tfe_UWey1AM?si=lotS8M-8z1yjZLUf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track24'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#24</span>
                <span className='track-scrobbles'>16 scrobbles</span>
                <span className='track-artist-and-title'>Porter Robinson - do-re-mi-fa-so-la-ti-do</span>
            </h3>
            <p>
                Porter Robinson doing his electropop/glitch-pop stuff again.
                Delicious abstract electronic sounds, summery bassline, vocaloid, all-round great vibes.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Rxh5ktHQiok?si=h9ltipn1uAquMxdm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track25'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#25</span>
                <span className='track-scrobbles'>16 scrobbles</span>
                <span className='track-artist-and-title'>Scott Walker - It's Raining Today</span>
            </h3>
            <p>
                And we'll be finishing off the list with Scott Walker, prominent singer-songwritter who released a great series of albums in the late 60s.
                My favourite Scott Walker album by far is 'Scott 3', consisting of this haunting beauty of a song.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fSzOcvAJmi0?si=iOvlc1c5MEooUPPj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
)
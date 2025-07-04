import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const IMAGES = {
    scrobbles_graph: "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/my_most_listened_songs_of_2023/scrobbles_per_month_graph.PNG",
}

export const post = () => (
    <div className='top-songs-EOY'>
        <div className='intro-text blog-subsection' id='section1'>
            <div className='display-img-beside-text'>
                <div>
                    <h3 className='subgroup-title'>Intro</h3>
                    <p>2023 has probably been the most insane year so far in terms of personal musical discoveries. 
                        Unfortuantly I have discovered way more than 25 great songs this year... I could probably make a pretty solid top 300 list? 
                        According to LastFM, I listened to <b>7,549</b> individual songs, and scrobbled <b>17,287</b> songs overall.</p>
                    <p>In this blog post I will go over the 25 songs that I listened to most this year...</p>
                    <p>I did the same for 
                        <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2022' target='_blank'> 2022</a>, 
                        <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2021' target='_blank'> 2021</a>, 
                        <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2020' target='_blank'> 2020</a>, 
                        and <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2014_2015_2016' target='_blank'>2014/15/16</a>,  too.
                    </p>
                    <p>If for some bizzare reason you wish to see more than the top 25 tracks, the <a href="https://www.last.fm/user/gutash/library/tracks?from=2023-01-01&rangetype=year" target="_blank">entire 2023 list is here</a> if you want to see that.</p>
                    <p className='note'>Disclaimer: this is <b>NOT a 'top 25 songs of 2022 list'</b>, this is simply <b>a list of the '25 songs that I listened to most throughout 2023'. </b> 
                        It would be a waste of time messing about with arbitary ordering, when the quantitative measurement of a 'play count' already exists thanks to LastFM scrobbling!
                        I personally don't see the point of making 'top 25 songs of 2022' lists, or 'top 50 albums of 2022' lists, when you are bound to change your opinion on the arbitary ordering in a few months,
                        not to mention how much music is out there that you've never heard before and will inevitably discover several years down the line leaving your old lists outdated.</p>
                </div>
                <img src={IMAGES.scrobbles_graph} className='scrobbles-per-month-graph beside-text' alt="Srobbles per month graph" />
            </div>
        </div>
        <div className='blog-subsection' id='track1'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#1</span>
                <span className='track-scrobbles'>34 scrobbles</span>
                <span className='track-artist-and-title'>Erik Satie - 3 Gymnopédies: No. 3, Lent et Grave</span>
            </h3>
            <p>
                Truly one of the greatest piano songs ever created.
                Nice one Erik.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/URPBKDSrQBk?si=iHJPw55HYFVI-old" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track2'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#2</span>
                <span className='track-scrobbles'>31 scrobbles</span>
                <span className='track-artist-and-title'>Vansire - The Modern Western World</span>
            </h3>
            <p>
                Super super super chill. I wish that the album this song belonged on contained more songs like this. Because this song, fucking slaps (a peaceful slap).
                The melodic craft and energy of this song reminds me of some of the songs on Sing Street (which dominated my top 25 tracks in 2022).
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eem-dzAkuI8?si=3zQmIqCArM9tuA0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track3'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#3</span>
                <span className='track-scrobbles'>29 scrobbles</span>
                <span className='track-artist-and-title'>Bruno Sanfilippo - Initiation Pilgrimages</span>
            </h3>
            <p>
                Possibly the best random discovery I made this year.
                Bruno Sanfilippo is a relatively obscure Argentian musician who has been exploring Modern Classical, Ambient, and Post-minimalism since the 90s.
                He released a new album in 2023 called 'Ver Sacrum', and the whole thing is a glorious exploration of Post-Minimalism/Ambient/Modern Classical genres.
                Listen to this album with headphones on, turn up the volume, and you will be transported to a brand new realm of existence that you never knew existed before.
            </p>
            <p>
                I have been listening to the album <b>a lot</b> this year. If I did make a 'Best albums of 2022 list' this would 100% be 1st place. 
                An excellent inclusion in my top 100 albums of all time.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/18Y062LPOro?si=0dIqA2vqMCrcEQJT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track4'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#4</span>
                <span className='track-scrobbles'>28 scrobbles</span>
                <span className='track-artist-and-title'>LaLa Hsu - 湫兮如風(電影《大魚海棠》片尾曲)</span>
            </h3>
            <p>
                Finale song to the incredible Chinese anime film <a href="https://boxd.it/8bfm" target='_blank'>Big Fish & Begonia</a> that I watched back in May 2023.
                The film is absolutely incredible, and the soundtrack was absolute perfection.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vjcRQFtIpE4?si=ylqQQY_3xAIj7lkj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track5'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#5</span>
                <span className='track-scrobbles'>25 scrobbles</span>
                <span className='track-artist-and-title'>Sam Gellaitry - Acres</span>
            </h3>
            <p>
                Another great musical discovery for me this year was Sam Gellaitry...
                How I've not heard of this guy before May 2023, I do not know...
                This song 'Acres' is one of the most epic songs I've ever heard in the Future Bass genre.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/V9o_spyOBQs?si=sAQZg2Nsjq0CmtHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track6'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#6</span>
                <span className='track-scrobbles'>25 scrobbles</span>
                <span className='track-artist-and-title'>Vansire - Vivienne</span>
            </h3>
            <p>
                Same album as my #2 track 'The Modern Western World'.
                This track here is just as chill and relaxing as the other one.
                If the rest of the album were up to the same standard as these two songs, I'd probably give the album a 10/10.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WxVLHTlvtr8?si=PLj_xf5hsBB_r1at" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track7'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#7</span>
                <span className='track-scrobbles'>24 scrobbles</span>
                <span className='track-artist-and-title'>Alice Longyu Gao - MONK</span>
            </h3>
            <p>
                Another amazing musical discovery this year has been Alice Longyu Gao.
                Her 2023 album 'Let's Hope Heteros Fail, Learn and Retire' is absolutely bat-shit crazy, fusing genres from Hyper-pop, Bubblegum-pop, Alt-metal, Trap-metal, and Industrial Hip-Hop.
                Possibly the craziest song on the album is 'Monk'.
                It's best to experience it yourself... Go ahead...
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DW4JTKUvwuM?si=Ggf73bDT_ABxiixd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track8'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#8</span>
                <span className='track-scrobbles'>24 scrobbles</span>
                <span className='track-artist-and-title'>Andreas Vollenweider - Night Fire Dance</span>
            </h3>
            <p>
                Way back in February I was exploring the New Age genre on RYM, and stumbled upon Andreas Vollenweider, a Swiss Harpist who has been releasing albums since the 80s and is still going strong to this day.
                I started listening to his 1986 album 'Down To The Moon' - life has never been the same since...
                This stunning album exists somewhere between the genres of New Age, Ambient, Progressive Pop, and Electronic.
            </p>
            <p>
                There are a lot of stand-out tracks from this album, Night Fire Dance (#5 in the album tracklist) seems to be the one I listened to most, but there are 3 in total that appeared in this top 25 list.
                The album is another excellent addition to my favourite albums of all time list, probably lingers around top 50 at the moment.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Le1j0WM-cUo?si=1d3gw9PpkH33f8Zs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track9'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#9</span>
                <span className='track-scrobbles'>24 scrobbles</span>
                <span className='track-artist-and-title'>Hakushi Hasegawa - Somoku</span>
            </h3>
            <p>
                This is probably my favourite jazz album of all time... 
                Obviously it's a lot more than just jazz, so people that are well into jazz classics probably wouldn't rate this album as highly as I personally do...
                I just can't help it, this music is way too good for it to be so unpopular in the wider jazz community.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/O77-6NXd9Pw?si=d_qa51uixHRBD-NM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track10'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#10</span>
                <span className='track-scrobbles'>24 scrobbles</span>
                <span className='track-artist-and-title'>Ralph Towner - Blue Sun</span>
            </h3>
            <p>
                I discovered this album literally a few weeks ago (mid November).
                Ralph Towner is a legendary figure in the ECM-style jazz scene. Not only due to his technical ability on the 12-string guitar, but the quantity of output since the 70's to present day is actually insane.
                He has quickly become one of my favourite jazz musicians ever due to his unique sound.
            </p>
            <p>
                One of his earlier albums 'Blue Sun' in 1982 has been in heavy rotation ever since I heard it... literally a few weeks ago...
                I'm still in the process of absorbing every crevice of this album and all of the cosmic beauty it offers to listeners who are intrigued by the style.
                This is unequivocally one of the best musical discoveries that I have made this year.
                Needless to say I'm quite excited to exploring more Ralph Towner albums. There's quite a few to explore...
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lqMtfxDPZQ4?si=sertucMNdE2LHllk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track11'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#11</span>
                <span className='track-scrobbles'>24 scrobbles</span>
                <span className='track-artist-and-title'>Skrillex & Nai Barghouti - XENA</span>
            </h3>
            <p>
                Skrillex casually releasing one of the best Hybrid Trap/Dubstep/EDM Trap songs ever...
                Teaming up with Palestinian singer Nai Barghouti is definitely one of the most unexpected partnerships out there in electronic music, but it works extremely well.
                It's one of those Hybrid Trap songs that gets better and better every time you listen to it.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/T7SvN0dkQps?si=SX679q-0n3wkecV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track12'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#12</span>
                <span className='track-scrobbles'>23 scrobbles</span>
                <span className='track-artist-and-title'>Gladde Paling - zeemeeuw</span>
            </h3>
            <p>A fairly obscure discovery in the realm of Hybrid Trap/Dubstep. Gladde Paling is a DJ from The Netherlands.</p>
            <p>TLDR: if you like having <b>fun</b>, listen to his album 'dansmuziek'. The song 'zeemeeuw' is a great highlight from the album.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ol-R4JpRwww?si=VtuJeLba7_LEj-5x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track13'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#13</span>
                <span className='track-scrobbles'>23 scrobbles</span>
                <span className='track-artist-and-title'>Guy Farley - Drawing</span>
            </h3>
            <p>
                Back in December 2022, I watched a film called <a href="https://boxd.it/1Sf6" target='_blank'>Cashback</a>.
                The film has stuck with me ever since I watched about a year ago now. One of the reasons why is because the soundtrack is absolute perfection.
                There are a lot of brilliant piano ballads from the soundtrack, this one called 'Drawing' seems to be the one I listened to most this year.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DOlTKEdzM54?si=sMBtt6i2tZROZYfx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track14'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#14</span>
                <span className='track-scrobbles'>22 scrobbles</span>
                <span className='track-artist-and-title'>Andreas Vollenweider - Moon Dance</span>
            </h3>
            <p>
                And here we have what appears to another Andreas Vollenweider song from his amazing 1986 album 'Down To The Moon'!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/NWjq0SIXBg0?si=sZWvz7t9U9wc2pqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track15'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#15</span>
                <span className='track-scrobbles'>22 scrobbles</span>
                <span className='track-artist-and-title'>Bruno Sanfilippo - Numen</span>
            </h3>
            <p>
                Absolute madness that more people aren't listening to this absolute masterpiece of an album.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vy4iMWrj5PM?si=KvVBjnudFe6KphGF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track16'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#16</span>
                <span className='track-scrobbles'>22 scrobbles</span>
                <span className='track-artist-and-title'>Guy Farley - Frozen</span>
            </h3>
            <p>
                Another delightful piano ballad from the <a href="https://boxd.it/1Sf6" target='_blank'>Cashback</a> soundtrack.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kob7Oakfd_A?si=sauuyFSTb4FSnltA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track17'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#17</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Eberhard Weber - The Colours Of Chloë</span>
            </h3>
            <p>
                This is a crazy recent discovery, my first scrobble of this song was 03/12/2023, literally 30 days ago!
                And it's already climbed up to 17th place on this list.
                That speaks volumes to the relistenable quality of this song and the entire album.
                Norwegian ECM-jazz legend Eberhard Weber will forever be on my radar from here onwards.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eQPu0_xwlp4?si=TfuAouIwldJC-DGt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track18'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#18</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Father John Misty - Things It Would Have Been Helpful To Know Before The Revolution</span>
            </h3>
            <p>
                Father John Misty has been on my 'listenlist' for a few years now. I heard a lot of buzz around this album back in 2017.
                I am very grateful for now knowing of him, this album, and this song in particular.
                Bonus points for a FANTASTIC music video!!!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cIsT3dJ60Uk?si=YqrMVzezrjQzr9Qo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track19'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#19</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>G Jones - A2C212D</span>
            </h3>
            <p>
                Literally the most exhilarating bass song I've ever heard.
                There is something so pure and insane about experiencing this song for the 1st time, the 10th time, the 20th time, and forever into the future.
                This song is on an EP that was released in 2022, hopefully G Jones continues to make music like this.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bxo615sDg3E?si=y_nBq_AxQmJxEdz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track20'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#20</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Ralph Towner - The prince And The Sage</span>
            </h3>
            <p>
                The 2nd song to the 'Blue Sun' album.
                This entire album has been a wonderful discovery late on in 2023.
                Insane that Ralph made this song 41 years ago!!!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/E8CPuReY_WE?si=xvuDG6GTQJHzTIe2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track21'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#21</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Ruby Throat - Swan and the Minotaur (Troubled Man)</span>
            </h3>
            <p>
                Singer-songwritter Ruby Throat has been another great musical discovery for me this year.
                This song in particular is a stunning little indie folk tune.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/R6ysqoX3xtQ?si=fW12daobFeVzpwz-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track22'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#22</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Takashi Kako [加古隆] - Sky and Waves [空と、波と]</span>
            </h3>
            <p>
                Way back in April, I watched a very peculiar Japanese film called <a href="https://boxd.it/14z6">Ritual [式日]</a>.
                I was a bit flabbergasted by the film itself, but the soundtrack to the film caught my attention and hasn't left my rotation ever since 8 months ago.
                Japanese composer/pianist Takashi Kako [加古隆] composed the soundtrack to this film.
                Ever since, I have been exploring Takashi's discography and discovered another beautiful album called <a href="https://www.youtube.com/watch?v=2KSkZn1Cg4c">Wind Waltz [風のワルツ]</a> which he created back in 2002 (just 2 years after Ritual was released)
                There are a lot of great songs from the album (2 of which are actually from the Ritual soundtrack).
                There are loads of other songs from the album in the 100-50 range on this list.
                The final song on the album is apparently the one I listened to the most this year, called 'Sky and Waves [空と、波と]'.
                It reminds me a lot of <a href="https://www.youtube.com/watch?v=URPBKDSrQBk&pp=ygUXZXJpayBzYXRpZSBneW1ub3BlZGllIDM%3D">Erik Satie's Trois Gymnopédies No. 3</a>, as does most of Takashi's music.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2KSkZn1Cg4c?si=6Sh40G3fGUyHfwDE&amp;start=2701" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track23'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#23</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>The Field - Is This Power</span>
            </h3>
            <p>
                The Field are a very interesting electronic artist I started listening to back in January.
                Their music exists somewhere between an Orbital kinda Ambient techno sound, and a BoC kinda Downtempo sound.
                This song in particular is windy and intriguing and flies by whenever I listen to it.
                If you like Orbital and/or BoC you'll love this!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YVNqWZPqxDE?si=ZKQfgxEJ6hqbZ924" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track24'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#24</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Vale-Smith - Hang Tight</span>
            </h3>
            <p>
                I'll be honest, when I first heard this 2021 album 'Coruscate', I wasn't that really into it... But something about its abstractness and complexity kept luring me back in.
                This whole album is a thrilling/dizzying/abstract adventure into IDM/EDM Trap/Future Bass/Wonky genres.
                I think my favourite song from the album is this very song 'Hang Tight'.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6NJzTC8e_q0?si=Yl3LbQ71KdoAQdgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
        <div className='blog-subsection' id='track25'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#25</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>World's End Girlfriend - Starry</span>
            </h3>
            <p>
                World's End Girlfriend are a wildly diverse and prolific Japanese music group.
                While I do find myself intrigued by the auditious and complex production and sound design of most of their electronic-based albums, I am personally drawn more to their film soundtracks, where they demonstrate a great ability to craft simple, peaceful, memorable music that exists somewhere between Modern Classical, Post-rock, and Ambient genres.
                They made the soundtrack to a fantastic Chinese film <a href="https://boxd.it/32CG" target='_blank'>Starry Starry Night</a> that I watched back in June 2023, and I have been revisiting the soundtrack a lot this year.
                Highly recommend the film, the full soundtrack, and definitely this song called 'Starry' (the 1st song on the album).
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CqyITr6fhy4?si=hTELxtnsNwV4QjYZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
)
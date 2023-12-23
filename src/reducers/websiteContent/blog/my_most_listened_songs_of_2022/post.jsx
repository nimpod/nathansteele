import React from 'react';

const IMAGES = {
    scrobbles_graph: require('./scrobbles_per_month_graph.PNG'),
}

export const post = () => (
    <div className='my-most-listened-songs-of-this-year'>
        <div className='intro-text blog-subsection' id='section1'>
            <div className='display-img-beside-text'>
                <div>
                    <h3 className='subgroup-title'>Intro</h3>
                    <p>2022 was a pretty good year for personal musical discoveries. According to LastFM, I listened to <b>6,494</b> individual songs, and scrobbled <b>16,271</b> overall.</p>
                    <p>In this blog post I will go over the 25 songs that I listened to most this year...</p>
                    <p>I did the same for 
                        <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2021' target='_blank'> 2021</a>,
                        <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2020' target='_blank'> 2020</a>, 
                        and <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2014_2015_2016' target='_blank'>2014/15/16</a>,  too.
                    </p>
                    <p>If for some bizzare reason you wish to see more than the top 25 tracks, the <a href="https://www.last.fm/user/gutash/library/tracks?from=2022-01-01&rangetype=year">entire 2022 list is here</a> if you want to see that.</p>
                    <p className='note'>Disclaimer: this is <b>NOT a 'top 25 songs of 2022 list'</b>, this is simply <b>a list of the '25 songs that I listened to most throughout 2022'.</b> 
                        It would be a waste of time messing about with arbitary ordering, when the quantitative measurement of a 'play count' already exists thanks to LastFM scrobbling!
                        I personally don't see the point of making 'top 25 songs of 2022' lists, or 'top 50 albums of 2022' lists, when you are bound to change your opinion on the arbitary ordering in a few months,
                        not to mention how much music is out there that you've never heard before and will inevitably discover several years down the line leaving your old lists outdated.
                    </p>
                </div>
                <img src={IMAGES.scrobbles_graph} className='scrobbles-per-month-graph beside-text' alt="Srobbles per month graph" />
            </div>
        </div>
        <div className='blog-subsection' id='track1'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#1</span>
                <span className='track-scrobbles'>30 scrobbles</span>
                <span className='track-artist-and-title'>Sing Street - A Beautiful Sea</span>
            </h3>
            <p>
                Way back in February I watched a phenomenally uplifting film called <a href="https://boxd.it/cOo6">Sing Street</a>.
                Not only has the film quickly become one of my favourite films ever, the soundtrack is absolutely banging.
                20% of this list contains songs from this album (5 of the top 25).
                This song Beautiful Sea is FANTASTIC!!!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/l7BCScwHAJo?si=mth0J_KMn0z92wEP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track2'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#2</span>
                <span className='track-scrobbles'>30 scrobbles</span>
                <span className='track-artist-and-title'>Sing Street - The Riddle of the Model</span>
            </h3>
            <p>
                Sing Street also taking 2nd place.
                The Riddle of the Model was the first original song that appears in the film, and it sets the tone perfectly.
                Despite a very short runtime of 1m 48s, it's one of the most memorable songs I've ever heard in my life.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BXvnx3JXMRw?si=g-jwetYpLDaWKv4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track3'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#3</span>
                <span className='track-scrobbles'>29 scrobbles</span>
                <span className='track-artist-and-title'>Toby Fox - Fallen Down</span>
            </h3>
            <p>
                This was one was a bit of a suprise when I looked at the data.
                The short runtime (0m 57s) probably helps in terms of this being so high up, but it is a lovely synth ballad.
                I did start to learn the song on piano, so that's probably another reason for this being as high as it is.
                I haven't played the game before, but I love this song and many others from this album!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qH5hM1ILuFQ?si=eUvuEzSVDvjGQHOp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track4'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#4</span>
                <span className='track-scrobbles'>26 scrobbles</span>
                <span className='track-artist-and-title'>Simon Farintosh - Avril 14th</span>
            </h3>
            <p>
                Ah yes, another slightly suprising inclusion.
                This was another song that I started to learn on the piano, hence why it's probably so high up.
                Regardless, the way Mr. Farintosh arranged the classic Aphex Twin song for the guitar is quite impressive.
                It's melancholic, relaxing, and peaceful. If you like experiencing these things when listening to music I highly recommend it.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rrvoqO5QGs8?si=OchIE3O2hWqrZZqv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track5'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#5</span>
                <span className='track-scrobbles'>25 scrobbles</span>
                <span className='track-artist-and-title'>Ben Salisbury - Amaya's Theme - Version 1</span>
            </h3>
            <p>
                Suprise suprise... Another song I have been learning on the piano.
                This really is a stunning ambient tune that I cannot replicate very well alone on a piano.
                This song is one of many mysterious/peaceful/slightly sinister songs from the soundtrack to a mini-series I watched this year called <a href="https://boxd.it/ppHI">Devs</a> (directed by Alex Garland, director of Ex Machina and Annihilation).
                I personally loved the mini-series, but I also loved the soundtrack - in particular this song Amaya's Theme I have kept returning to.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ic3U48lAAuU?si=syl0GqQA9SswG4-C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track6'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#6</span>
                <span className='track-scrobbles'>24 scrobbles</span>
                <span className='track-artist-and-title'>Sing Street - Drive It Like You Stole It</span>
            </h3>
            <p>
                The piano ballads and Sing Street songs are almost out of the way......
                Howevever we must talk about one of the best songs from the Sing Street soundtrack Drive It Like You Stole It.
                La La Land was also released this year, and it won the oscar award for 'Best Original Score'...
                What a joke!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fuWTcmjnEGY?si=CxYxIf_ENC37lO3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track7'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#7</span>
                <span className='track-scrobbles'>23 scrobbles</span>
                <span className='track-artist-and-title'>Casualties of Cool - Flight</span>
            </h3>
            <p>
                Finally something slightly different...
                Albeit this is still very much in the realm of peaceful calming melodies.
                Prog metal singer/guitarist Devin Townsend teamed up with singer-songwriter Ché Aimee Dorval on album called 'Casualties of Cool' that was released in 2014.
                Somehow I am only just discovering this project despite being aware of Devin Towsend's other work for a few years now.
                The album is a spooky/atmospheric/melancholic exploration of gothic country and ambient pop.
                The eclectic fusion of genres going on in this album may not appeal to everyone. Personally I love it.
                As is apparent from the fact that the song Flight is one of my most listened this year.
                Highly recommend listening to the entire album, espcially this song.
                The music video that goes along with the video is quite a delightful visual experience too, with it's spooky settings in the middle of nowhere and black & white footage.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/muNLqPPTuDQ?si=D96-lTTg_w_urv26" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track8'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#8</span>
                <span className='track-scrobbles'>23 scrobbles</span>
                <span className='track-artist-and-title'>Rumpistol - I Rum Sø</span>
            </h3>
            <p>
                Another absolute maserpiece in terms of acquiring a unique/peaceful/mealncholic vibe.
                Rumpistol has been around for a while in the IDM scene.
                I personally perefer is recent endeavours in ambient/modern classical genres.
                I only discovered this artist this year due to <a href="https://www.youtube.com/@TheWonkyAngle">TheWonkyAngle</a>'s review of the album, and couldn't be more greatful for it.
                Defintely gets a place in my top 150 albums of all time list.
                This song I Rum Sø is the first song on the album. It's a short one (1m 39s) but is very memorable, as is the whole album.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yR-jevisYmg?si=t0ESpGAV4c09p5oc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track9'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#9</span>
                <span className='track-scrobbles'>22 scrobbles</span>
                <span className='track-artist-and-title'>Family of the Year - Hero</span>
            </h3>
            <p>
                In November 2021 I watched the film <a href="https://boxd.it/3178">Boyhood</a>.
                I personally liked the film quite a lot.
                What I really really liked was the song near the end of the film.
                The song is part of an indie pop/folk album released in 2012 called 'Loma Vista'.
                The band and album doesn't seem to have a massive following, but I'm sure this film boosted their popularity by a lot.
                It's a beautiful song that is endlessley listenable, I have been returning to it ever since I watched the film.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mYFaghHyMKc?si=rnpjeoBBQuWI7EoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track10'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#10</span>
                <span className='track-scrobbles'>22 scrobbles</span>
                <span className='track-artist-and-title'>Grizzly Bear - Easier</span>
            </h3>
            <p>
                More recent than the previous inclusion, I watched a film called <a href="https://boxd.it/MxG">Blue Valentine</a> in August 2022.
                Indie folk/Chamber pop/Psychedelic folk band Grizzly Bear songs made up the majority of the films soundtrack. Lot's of songs caught my ear, but this song in particular has stuck with me.
                Highly recommend the band, the albuum Yellow House, this song, and the film!!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qOPlyR6X9yE?si=wZOsogm_L4hM2_z8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track11'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#11</span>
                <span className='track-scrobbles'>22 scrobbles</span>
                <span className='track-artist-and-title'>Lone - Crystal Caverns 1991</span>
            </h3>
            <p>
                One of the best musical discoveries I made this year was the artist Lone.
                Dabbling in many subgenres of electronic music from Breakbeat, Acid House, IDM, Jungle, and much more...
                The 2012 album 'Galaxy Garden' has really caught my attention this year.
                I can't believe I am 10 years late to the party, as this music is absolute perfection to my ears, especially the song Crystal Caverns 1991.
                It's an energetic/tropical/aquatic/exciting song that is instantly recognisable.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CpFFmso_liM?si=5n7aMAlMmUcXW00r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track12'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#12</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Ben Salisbury - Amaya Corporation</span>
            </h3>
            <p>
                Another great tune from the Devs soundtrack.
                This one is slightly more sinister/ethereal/mysterious.
                Not much else to say other than just recommending you to experience the song and the mini-series for yourself!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QZKepmA5nKM?si=APhhPvkuxgFfpLjJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track13'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#13</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Jon Brion - Theme: From "Eternal Sunshine of the Spotless Mind"/Score</span>
            </h3>
            <p>
                I'm not really a big fan of this film. I always found it to be quite overrated and the characters to very surface-level (sorry cinephiles, I know this is a popular one!)
                Regardless, Jon Brion came to the rescue with a fantastic sountrack that atleast made this film watchable for me!
                This song in particular I find to be a glorious experience.
                It's an instantly recognisable sound, that doesn't really remind me of the film anymore (thank god).
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ky7D73ACNw4?si=7vUsFlYpdV7OkMOR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track14'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#14</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Sing Street - Brown Shoes</span>
            </h3>
            <p>
                Indeed we are not done with Sing Street yet.
                Many consider to be the best song of the film, personally I think Beautiful Sea & Riddle of the Model are even better, but Brown Shoes is a pretty fantastic finale song.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FDvs6od5cBs?si=mJMnpwgqK1YG3kXK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track15'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#15</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>Sing Street - Up</span>
            </h3>
            <p>
                Starts off nice and simple, lyrics and an acoustic guitar, and before you know it Sing Street have once again created their very own New Wave masterpiece.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MlTsYqUKWoY?si=1Gu1yzThl0XpKg1u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track16'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#16</span>
                <span className='track-scrobbles'>21 scrobbles</span>
                <span className='track-artist-and-title'>The Smile - Free in the Knowledge</span>
            </h3>
            <p>
                The Smile is a Thom Yorke side-project that I was pretty excited to hear when I heard about it earlier this year.
                When the album 'A Light for Attracting Attention' was released I wasn't massively impressed with the album as a whole.
                However, one song in particular, 'Free In The Knowledge' I have kept returning to this year.
                It's not the most mind-blowing song in the world, but it's like recieving a nice warm hug from a life mentor you never knew you had watching over you.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5KP6sZIIKk4?si=lRRrSSSADialaTvu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track17'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#17</span>
                <span className='track-scrobbles'>20 scrobbles</span>
                <span className='track-artist-and-title'>Grizzly Bear - Granny Diner</span>
            </h3>
            <p>
                Another Grizzly Bear song from the <a href="https://boxd.it/MxG">Blue Valentine</a> soundtrack.
                I'm actually a bit confused how this song isn't higher in this list.
                This is absolutely my favourite Grizzly Bear song!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oH363YdfPyA?si=bngiesOBBunz9oTJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track18'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#18</span>
                <span className='track-scrobbles'>19 scrobbles</span>
                <span className='track-artist-and-title'>Dead Can Dance - Windfall</span>
            </h3>
            <p>
                Okay so this is a crazy recent discovery... I stumbled upon this album literally a few weeks ago in late November.
                And I've already listened to this one song 19 times... It would definitely be a lot higher (probably) top 5 if I had discovered it sooner!
                Neoclassical Darkwave legends 'Dead Can Dance' released an album called 'Within the Realm of a Dying Sun' way back in 1987.
                There are so many great songs from the album, but 2nd song in the album tracklist is the one that I listened to most in these last few weeks.
                A wonderfully atmospheric/creepy/medieval/mysterious inclusion to my top 100 albums of all time.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-QBMsKaqDPo?si=azRbViG5hQ_wKfW2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track19'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#19</span>
                <span className='track-scrobbles'>19 scrobbles</span>
                <span className='track-artist-and-title'>Casualties of Cool - Daddy</span>
            </h3>
            <p>
                This song is the intro to the Casualties of Cool album I discussed earlier.
                Never has a country song felt so spooky.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1VGfW2n01nM?si=nSbYjiydh9ADdtMb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track20'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#20</span>
                <span className='track-scrobbles'>19 scrobbles</span>
                <span className='track-artist-and-title'>Radiohead - Nude</span>
            </h3>
            <p>
                I'm not sure how this ended up here to be honest.
                I don't even remember listening to much Radiohead this year.
                I started listening to them back in 5 years ago in 2017.
                But it is unequivocally one of the my favourite Radiohead songs ever.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2e2LQzTxZfs?si=F9URPpxSHDdqo2dA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track21'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#21</span>
                <span className='track-scrobbles'>19 scrobbles</span>
                <span className='track-artist-and-title'>Sufjan Stevens - Fourth of July</span>
            </h3>
            <p>
                I discovered Sufjan Stevens through this album back in July 2021.
                A year and a half later and it seems like I am still listening to this song quite a bit!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JTeKpWp8Psw?si=MC6Ghm5S8TZUObZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track22'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#22</span>
                <span className='track-scrobbles'>18 scrobbles</span>
                <span className='track-artist-and-title'>Arcade Fire with Owen Pallett - Song On The Beach</span>
            </h3>
            <p>
                One of the many wonderful piano ballads from the film <a href="https://boxd.it/4O24">Her</a>.
                I haven't watched the film in years, I think I've only watched it once. Definitely need to rewatch it.
                Anyway... This song is pretty fantastically beautiful. Not sure how it ended up here, but there we go.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zbloDcecCvM?si=PRSWjcfAV-eiglzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track23'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#23</span>
                <span className='track-scrobbles'>18 scrobbles</span>
                <span className='track-artist-and-title'>Beach House - ESP</span>
            </h3>
            <p>
                Masters of the dream pop genre Beach House song have finally appeared on the list!
                I'm quite suprised they are this far down in the list.
                However there are loads of Beach House songs in the 50-25 range.
                This is one of many amazing songs from their recent album 'Once Twice Melody'.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/G8E9RBuqWHc?si=veo8j2_bgAKvSEes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track24'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#24</span>
                <span className='track-scrobbles'>18 scrobbles</span>
                <span className='track-artist-and-title'>Kalandra - Borders</span>
            </h3>
            <p>
                Nordic folk rock band Kalandra are a recent discovery for me.
                This song is one of the many captivating songs from their 2020 album 'The Line'.
                Bonus points for a wonderful music video.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zHh4t38f9AM?si=vktbfKYIdpqqZ42C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='blog-subsection' id='track25'>
            <h3 className='subgroup-title'>
                <span className='track-pos'>#25</span>
                <span className='track-scrobbles'>18 scrobbles</span>
                <span className='track-artist-and-title'>Meridian Brothers - Hermana necesito</span>
            </h3>
            <p>
                This is one of the many impeccable Salsa/Tropicanibalismo songs from The Meridian Brothers newest album.
                Again, like with Beach House, there are loads of Meridian Brothers songs in the 50-25 range.
                This song in particular is oozing with style, quirkyness, a playful tropical vibe, and a great variety of instrumentation.
                One of my favourite 2022 album releases.
                A solid placement in my favourite albums of all time list.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2Lsjm3aA1rM?si=bER9otoPCpXUW73_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
)
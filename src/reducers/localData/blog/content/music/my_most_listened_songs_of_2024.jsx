import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TrackMetadataComponent from './track_metadata_component.js';


const IMAGES = {
    scrobbles_graph: "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/my_most_listened_songs_of_2023/scrobbles_per_month_graph.PNG",
}

export const post = () => (
    <div className='my-most-listened-songs-of-this-year'>
        <div className='intro-text blog-subsection' id='section1'>
            <div className='display-img-beside-text'>
                <div>
                    <h3 className='subgroup-title'>Intro</h3>
                    <p>2024 has has been a very interesting year for my musical discoveries. 
                        According to LastFM, I listened to <b>7,360</b> individual songs, and scrobbled <b>18,138</b> songs overall.</p>
                    <p>That's a slight increase on last year, which is impressive considering I've been abroad since August, travelling through India and Nepal for the last 4 months!</p>
                    <p>In this blog post I will go over the 25 songs that I listened to most this year...</p>
                    <p>I did the same for 
                        <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2023' target='_blank'> 2023</a>,
                        <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2022' target='_blank'> 2022</a>, 
                        <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2021' target='_blank'> 2021</a>, 
                        <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2020' target='_blank'> 2020</a>, 
                        and <a href='https://nimpod.github.io/nathansteele/#/blog/my_most_listened_songs_of_2014_2015_2016' target='_blank'>2014/15/16</a>,  too.
                    </p>
                    <p>If for some bizzare reason you wish to see more than the top 25 tracks, the <a href="https://www.last.fm/user/gutash/library/tracks?from=2024-01-01&rangetype=year" target="_blank">entire 2024 list is here</a> if you want to see that.</p>
                    <p className='note'>Disclaimer: this is <b>NOT a 'top 25 songs of 2024 list'</b>, this is simply <b>a list of the '25 songs that I listened to most throughout 2024'. </b> 
                        It would be a waste of time messing about with arbitary ordering, when the quantitative measurement of a 'play count' already exists thanks to LastFM scrobbling!
                        I personally don't see the point of making 'top 25 songs of 2024' lists, or 'top 50 albums of 2024' lists, when you are bound to change your opinion on the arbitary ordering in a few months,
                        not to mention how much music is out there that you've never heard before and will inevitably discover several years down the line leaving your old lists outdated.</p>
                </div>
                <img src={IMAGES.scrobbles_graph} className='scrobbles-per-month-graph beside-text' alt="Srobbles per month graph" />
            </div>
        </div>

        {/* #1 */}
        <div className='blog-subsection' id='track1'>
            {/*
            <TrackMetadataComponent pos='1' scrobbles='41' artist="Patrick O'Hearn" title="A Lovely Place To Be" youtube="https://www.youtube.com/embed/xkmXAh1dp-A?si=QRsb46zbTLldb7rK" />
            */}
            <p>
            This music reminds me that after the day is over, we all still see the same sunset.
            The sense of loss, no matter what kind, that fills you with a numb feeling of emptiness.
            This song encompasses all the sorrow, pain, lonelyness, introspective moments in my life, all at once.
            Genuinely one of the most beautiful ways to spend 8 minutes of your life.
            </p>
            <p>
            Patrick O'Hearn wasn't an artist I even knew about until June 2024. 
            This song, and the album it's from (amazing album too) have instantly become some of my favourite ambient music of all time. Can't believe I was missing out for so long.
            </p>
        </div>

        {/* #2 */}
        <div className='blog-subsection' id='track2'>
            {/*
            <TrackMetadataComponent pos='2' scrobbles='40' artist="Kenji Kawai (川井憲次)" title="Unnatural City II" youtube="https://www.youtube.com/embed/1dmlwhaEEgE?si=0yymfnp6DBRpAQWv" />
            */}
            <p>
            Early this year I watched a fantastic anime by Mamoru Oshii called Patlabor 2.
            The soundtrack to the film is by the legendary Kenji Kawai.
            There are some wonderful ambient songs on the soundtrack, in particular Unnatural City II.
            Not only is it a beautiful introspective memorable ambient song, but in the context of the film it's so special. 
            It's an amazing audio-visual spectacle that I highly recommenmed experinecing for yourself.
            </p>
        </div>
        
        {/* #3 */}
        <div className='blog-subsection' id='track3'>
            {/*
            <TrackMetadataComponent pos='3' scrobbles='35' artist="Sounds From The Ground" title="London Fields" youtube="https://www.youtube.com/embed/TDxE3rE-GT8?si=v4tbebikkQUSIOdk" />
            */}
            <p>
            A constantly evolving curious little downtempo/chillout/ambient techno song.
            It takes me to a different world every time I listen to it.
            This song, and the artist deserves so much more recognition.
            Wonderful music.
            </p>
        </div>

        {/* #4*/}
        <div className='blog-subsection' id='track4'>
            {/*
            <TrackMetadataComponent pos='4' scrobbles='35' artist="Joe Hisaishi (久石譲)" title="Break Down" youtube="https://www.youtube.com/embed/8orm3PqqFVo?si=ahGZULPkOFbSiAPv" />
            */}
            <p>
            One of the many fantastic songs from Joe Hisaishi's soundtrack to the also fantastic Japanese film Kids Return.
            Hisaishi is more well known for his Ghibli soundtracks. However I personally believe his best work is beyond Ghibli.
            For example, A Scene At The Sea, Dolls, Kids Return (this song), Sonatine, Hanabi, Departures, etc...
            </p>
        </div>

        {/* #5 */}
        <div className='blog-subsection' id='track5'>
            {/*
            <TrackMetadataComponent pos='5' scrobbles='34' artist="Sounds From The Ground" title="Bodega Bay" youtube="https://www.youtube.com/embed/V9o_spyOBQs?si=sAQZg2Nsjq0CmtHx" />
            */}
            <p>
            Another great tune from downtempo experts Sounds From The Ground.
            This one has similar vibes to London Fields, but is also so different and puts me into a relaxed headspace every time.
            </p>
        </div>

        {/* #6 */}
        <div className='blog-subsection' id='track6'>
            {/*
            <TrackMetadataComponent pos='6' scrobbles='32' artist="Metamatics" title="Hymn Bream" youtube="https://www.youtube.com/embed/3Nv_J_sm9pw?si=p6S0-JGAxlRoKFl9" />
            */}
            <p>
            Metamatics are an artist I somehow only started listening to at the beginning of 2024.
            This song, and the album it's from (Mind Mushing Git) is beyond exceptional.
            There is an abstract, otherworldly quality to it.
            Very unique ambient-techno music.
            This song and the album has grown on me so much this year.
            </p>
        </div>
        
        {/* #7 */}
        <div className='blog-subsection' id='track7'>
        
        </div>

        {/* #8 */}
        <div className='blog-subsection' id='track8'>
        
        </div>

        {/* #9 */}
        <div className='blog-subsection' id='track9'>

        </div>

    </div>
)
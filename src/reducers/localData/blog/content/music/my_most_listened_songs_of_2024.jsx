import React from 'react';
import { Link, withRouter, BrowserRouter } from 'react-router-dom';
import TrackMetadataComponent from './track_metadata_component.js';

let YEAR = "2024";

const IMAGES = {
    scrobbles_graph: "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/my_most_listened_songs_of_2023/scrobbles_per_month_graph.PNG",
}

export const post = () => (
    <div className='my-most-listened-songs-of-this-year'>
        <BrowserRouter>
        <div className='intro-text blog-subsection' id='section1'>
            <div className='display-img-beside-text'>
                <div>
                    <h3 className='subgroup-title'>Intro</h3>
                    <p>{YEAR} has has been a very interesting year for my musical discoveries. 
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
                    <p>If for some bizzare reason you wish to see more than the top 25 tracks, the <a href="https://www.last.fm/user/gutash/library/tracks?from=2024-01-01&rangetype=year" target="_blank">entire {YEAR} list is here</a> if you want to see that.</p>
                    <p className='note'>Disclaimer: this is <b>NOT a 'top 25 songs of {YEAR} list'</b>, this is simply <b>a list of the '25 songs that I listened to most throughout {YEAR}'. </b> 
                        It would be a waste of time messing about with arbitary ordering, when the quantitative measurement of a 'play count' already exists thanks to LastFM scrobbling!
                        I personally don't see the point of making 'top 25 songs of {YEAR}' lists, or 'top 50 albums of {YEAR}' lists, when you are bound to change your opinion on the arbitary ordering in a few months,
                        not to mention how much music is out there that you've never heard before and will inevitably discover several years down the line leaving your old lists outdated.</p>
                </div>
                <img src={IMAGES.scrobbles_graph} className='scrobbles-per-month-graph beside-text' alt="Srobbles per month graph" />
            </div>
        </div>

        <div className='blog-subsection' id='track1'>
            <TrackMetadataComponent 
                pos='1' 
                scrobbles='41' 
                artist="Patrick O'Hearn" 
                track="A Lovely Place To Be" 
                youtube="https://www.youtube.com/embed/xkmXAh1dp-A?si=QRsb46zbTLldb7rK" />
            <p className='track-genresList'>Ambient</p>
            <p>
            This music reminds me that after the day is over, we all still see the same sunset.
            The sense of loss, no matter what kind, that fills you with a numb feeling of emptiness.
            This song encompasses all the sorrow, pain, loneliness, introspective moments in my life, all at once.
            Genuinely one of the most beautiful ways to spend 8 minutes of your life.
            </p>
            <p>
            Patrick O'Hearn wasn't an artist I even knew about until June 2024. 
            This song, and the album it's from have gradually become some of my favourite ambient music of all time. Can't believe I was missing out for so long!
            </p>
            <p className='track-albumLink'><Link to='/music/patrick_ohearn-so_flows_the_current'>Patrick O'Hearn - So Flows The Current</Link></p>
        </div>

        <div className='blog-subsection' id='track2'>
            <TrackMetadataComponent 
                pos='2'
                scrobbles='40' 
                artist="Kenji Kawai"
                artst_not_english="川井憲次" 
                track="Unnatural City II" 
                youtube="https://www.youtube.com/embed/uAmLaD83zT8?si=bqt7XsqD8MXFtFC-" />
            <p className='track-genresList'>Ambient</p>
            <p>
            Early this year I watched an anime <Link to={'/films/patlabor2themovie-1NP4-review'}>Patlabor 2, by Mamoru Oshii</Link>.
            </p>
            <p>
            The soundtrack to the film is by the legendary Kenji Kawai.
            There are some wonderful ambient songs on the soundtrack, in particular Unnatural City II.
            Not only is it a beautiful introspective memorable ambient song, but in the context of the film it's so special. 
            It's an amazing audio-visual spectacle that I highly recommenmed experinecing for yourself.
            </p>
            <p>
            Listen with headphones on. Go for a walk on a cold dark night. Enjoy the immense solitude and feeling of vastness.
            </p>
            <p className='track-albumLink'><Link to='/music/kenji_kawai-patlabor_2'>Kenji Kawai - Patlabor 2 OST</Link></p>
        </div>
        
        <div className='blog-subsection' id='track3'>
            <TrackMetadataComponent 
                pos='3' 
                scrobbles='35' 
                artist="Sounds From The Ground" 
                track="London Fields" 
                youtube="https://www.youtube.com/embed/TDxE3rE-GT8?si=v4tbebikkQUSIOdk" />
            <p className='track-genresList'>Ambient; Downtempo; Ambient dub</p>
            <p>
            A constantly evolving curious little downtempo/chillout/ambient techno song.
            It takes me to a different world every time I listen to it.
            This song, and the artist deserves so much more recognition.
            Wonderful music.
            </p>
            <p className='track-albumLink'><Link to='/music/sounds_from_the_ground-luminal'>Sounds From The Ground - Luminal</Link></p>
        </div>

        <div className='blog-subsection' id='track4'>
            <TrackMetadataComponent 
                pos='4' 
                scrobbles='35' 
                artist="Joe Hisaishi (久石譲)" 
                track="Break Down" 
                youtube="https://www.youtube.com/embed/3sHMSkjvFWU?si=XPkODQQTTzWbCSDB" />
            <p className='track-genresList'>New age; Neo-classical; Film soundtrack</p>
            <p>
            One of the many fantastic songs from Joe Hisaishi's soundtrack to a beautiful <Link to='/films/kidsreturn-1sfY-review'>Japanese film called Kids Return</Link>, directed by Takeshi Kitano.
            </p>
            <p>
            Hisaishi is more well known for his Ghibli soundtracks. However I personally believe his best work is beyond Ghibli.
            For example, A Scene At The Sea, Dolls, Kids Return (this song), Sonatine, Hanabi, Departures, etc...
            </p>
            <p className='track-albumLink'><Link to='/music/joe_hisaishi-kids_return_オリジナル・サウンドトラック'>Joe Hisaishi - Kids Return OST</Link></p>
        </div>

        <div className='blog-subsection' id='track5'>
            <TrackMetadataComponent 
                pos='5' 
                scrobbles='34' 
                artist="Sounds From The Ground" 
                track="Bodega Bay" 
                youtube="https://www.youtube.com/embed/fqEbLUWj0BE?si=GET6U16h3KhGtxTg"  />
            <p className='track-genresList'>Ambient; Downtempo; Ambient dub</p>
            <p>
            Another great tune from downtempo experts Sounds From The Ground.
            This song, and the album are fantastic.
            This one has similar vibes to London Fields, but is also so different and puts me into a relaxed headspace every time.
            </p>
            <p className='track-albumLink'><Link to='/music/sounds_from_the_ground-mosaic'>Sounds From The Ground - Mosaic</Link></p>
        </div>

        <div className='blog-subsection' id='track6'>
            <TrackMetadataComponent 
                pos='6' 
                scrobbles='32' 
                artist="Metamatics" 
                track="Hymn Bream" 
                youtube="https://www.youtube.com/embed/3Nv_J_sm9pw?si=6gByBSsYYuokfFpu" />
            <p className='track-genresList'>Electronic; Ambient; Ambient techno; IDM</p>
            <p>
            Metamatics are an artist I somehow only started listening to at the beginning of 2024.
            This song, and the album it's from (Mind Mushing Git) is beyond exceptional.
            There is an abstract, otherworldly quality to it.
            Very unique ambient-techno music.
            This song and the album has grown on me so much this year.
            </p>
            <p className='track-albumLink'><Link to='/music/metamatics-mind_mushing_git'>Metamatics - Mind Mushing Git</Link></p>
        </div>
        
        <div className='blog-subsection' id='track7'>
            <TrackMetadataComponent 
                pos='7' 
                scrobbles='31' 
                artist="Global Communication" 
                track="4:02" 
                youtube="https://www.youtube.com/embed/wwH2rML4cls?si=TD11MwzIFMwJb1V7" />
            <p className='track-genresList'>Ambient</p>
            <p>
            Somehow, I only started listening to this amazing ambient album this year.
            Every song on this album is an absolute delight.
            This song in particular is incredible.
            Again, listen with headphones on, go for a walk on a cold dark night, embrace the solitude and vastness.
            </p>
        </div>

        <div className='blog-subsection' id='track8'>
            <TrackMetadataComponent 
                pos='8' 
                scrobbles='31' 
                artist="Joe Hisaishi" 
                track="Kids Return" 
                youtube="https://www.youtube.com/embed/z6pNn_Fxze4?si=sIFy8QGceyvlnm_r" />
            <p className='track-genresList'>New age; Neo-classical; Film soundtrack</p>
            <p>
            Another great tune from Joe Hisaishi's soundtrack.
            This is the theme song, very upbeat and fun to run to.
            </p>
        </div>

        <div className='blog-subsection' id='track9'>
            <TrackMetadataComponent 
                pos='9' 
                scrobbles='30' 
                artist="Sounds From The Ground" 
                track="Rye" 
                youtube="https://www.youtube.com/embed/YxMirZFTuLM?si=bxXOi9PEZkcj7lFo" />
            <p className='track-genresList'>Ambient; Downtempo; Ambient dub</p>
            <p>
            Another wonderful downtempo tune from Sounds From The Ground.
            This one is a mellow, ambient-dub, psychdelic trip. 
            It took a while to grow on me, but I'm in love with the song now.
            </p>
        </div>

        <div>
            <TrackMetadataComponent 
                pos='10' 
                scrobbles='30' 
                artist="Joe Hisaishi" 
                track="High Spirits" 
                youtube="https://www.youtube.com/embed/evY0pUDhcJU?si=f0n4H3lUVdRABAgb" />
            <p className='track-genresList'>New age; Neo-classical; Film soundtrack</p>
            <p>Another Hisaishi song! Clearly I listened to this soundtrack a lot this year!</p>
        </div>

        <div>
            <TrackMetadataComponent 
                pos='11' 
                scrobbles='30' 
                artist="Joe Hisaishi" 
                track="Next Round" 
                youtube="https://www.youtube.com/embed/_6IW2gvG5l8?si=L2AreJQqSgedB88d" />
            <p className='track-genresList'>New age; Neo-classical; Film soundtrack</p>
            <p>
            One of the more melancholic songs on the soundtrack.
            But it's another reason why I love the film and the soundtrack as a whole.
            Variety is the spice of life. Hisaishi understands this better than anyone else in film composition.
            </p>
        </div>

        <div>
            <TrackMetadataComponent 
                pos='12'
                scrobbles='29' 
                artist="Metamatics" 
                track="Man-Q-Neons" 
                youtube="https://www.youtube.com/embed/3Nv_J_sm9pw?si=yvDojwFw43WNgjyp" />
            <p className='track-genresList'>Electronic; Ambient; Ambient techno; IDM</p>
            <p>
            Another great song from Metamatics - Mind Mushing Git.
            </p>
        </div>

        <div>
            <TrackMetadataComponent 
                pos='14' 
                scrobbles='27' 
                artist="Egberto Gismonti" 
                track="Luzes Da Ribalta" 
                youtube="https://www.youtube.com/embed/TVr3xmeU7l0?si=zs5qa0PlkB1gmvnV" />
            <p className='track-genresList'>Jazz; Brazilian jazz; Jazz fusion</p>
            <p>
            Finally something other than ambient music! 
            Here we have some pretty interesting, quirky, Brazillian jazz from the 1970's
            </p>
        </div>
        </BrowserRouter>
    </div>
)
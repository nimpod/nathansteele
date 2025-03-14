import React from 'react';
import { Link, withRouter, BrowserRouter } from 'react-router-dom';
import TrackMetadataComponent from './track_metadata_component.js';
import SongFooterComponent from './song_footer_component.js';
import ScrobbleDataSummary from './scrobble_data_per_year_summary.js';
import $ from "jquery";


let YEAR = "2024";
let MAX_SCROBBLES = 41;

const IMAGES = {
    scrobbles_graph: "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/my_most_listened_songs_of_2023/scrobbles_per_month_graph.PNG",
}


export const post = () => (
    <div className='top-songs-EOY'>
        <BrowserRouter>
        <div className='intro-text blog-subsection' id='section1'>
            <div>
                <h3 className='subgroup-title'></h3>
                <ScrobbleDataSummary></ScrobbleDataSummary>
                <p>{YEAR} has has been a very interesting year for my musical discoveries. According to LastFM it has been my most active listening year ever, an average of 51 scrobbles per day, That's a slight increase on last year, which is impressive considering I've been abroad since August, travelling through India and Nepal for the last 4 months!</p>
                <p>In this blog post I will go over the 25 songs that I listened to most this year...</p>
                <p><a href="https://www.last.fm/user/gutash/library/tracks?from=2024-01-01&rangetype=year" target="_blank">Full {YEAR} list is here</a> if you want to see that.</p>
            </div>
        </div>

        <div className='blog-subsection selected' id='track1'>
            <TrackMetadataComponent 
                pos='1'
                scrobbles='41'
                max_scrobbles={MAX_SCROBBLES}
                artist="Patrick O'Hearn"
                title="A Lovely Place To Be" 
                youtube="https://www.youtube.com/embed/xkmXAh1dp-A?si=QRsb46zbTLldb7rK"
            />
            <div className='track-review'>
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
                <SongFooterComponent
                    review_id='patrick_ohearn-so_flows_the_current'
                    album_artist="Patrick O'Hearn"
                    album_name="So Flows The Current"
                    youtube="https://www.youtube.com/embed/xkmXAh1dp-A?si=QRsb46zbTLldb7rK"
                />
            </div>
        </div>

        <div className='blog-subsection' id='track2'>
            <TrackMetadataComponent 
                pos='2'
                scrobbles='40'
                max_scrobbles={MAX_SCROBBLES}
                artist="Kenji Kawai"
                artst_not_english="川井憲次" 
                title="Unnatural City II" 
                youtube="https://www.youtube.com/embed/uAmLaD83zT8?si=bqt7XsqD8MXFtFC-" />
            <div className='track-review'>
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
        </div>
        
        <div className='blog-subsection' id='track3'>
            <TrackMetadataComponent 
                pos='3' 
                scrobbles='35'
                max_scrobbles={MAX_SCROBBLES}
                artist="Sounds From The Ground" 
                title="London Fields" 
                youtube="https://www.youtube.com/embed/TDxE3rE-GT8?si=v4tbebikkQUSIOdk" />
            <div className='track-review'>
                <p className='track-genresList'>Ambient; Downtempo; Ambient dub</p>
                <p>
                A constantly evolving curious little downtempo/chillout/ambient techno song.
                It takes me to a different world every time I listen to it.
                This song, and the artist deserves so much more recognition.
                Wonderful music.
                </p>
                <p className='track-albumLink'><Link to='/music/sounds_from_the_ground-luminal'>Sounds From The Ground - Luminal</Link></p>
            </div>
        </div>

        <div className='blog-subsection' id='track4'>
            <TrackMetadataComponent 
                pos='4' 
                scrobbles='35'
                max_scrobbles={MAX_SCROBBLES}
                artist="Joe Hisaishi (久石譲)" 
                title="Break Down" 
                youtube="https://www.youtube.com/embed/3sHMSkjvFWU?si=XPkODQQTTzWbCSDB" />
            <div className='track-review'>
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
        </div>

        <div className='blog-subsection' id='track5'>
            <TrackMetadataComponent 
                pos='5' 
                scrobbles='34'
                max_scrobbles={MAX_SCROBBLES}
                artist="Sounds From The Ground" 
                title="Bodega Bay" 
                youtube="https://www.youtube.com/embed/fqEbLUWj0BE?si=GET6U16h3KhGtxTg"  />
            <div className='track-review'>
                <p className='track-genresList'>Ambient; Downtempo; Ambient dub</p>
                <p>
                Another great tune from downtempo experts Sounds From The Ground.
                This song, and the album are fantastic.
                This one has similar vibes to London Fields, but is also so different and puts me into a relaxed headspace every time.
                </p>
                <p className='track-albumLink'><Link to='/music/sounds_from_the_ground-mosaic'>Sounds From The Ground - Mosaic</Link></p>
            </div>
        </div>

        <div className='blog-subsection' id='track6'>
            <TrackMetadataComponent 
                pos='6' 
                scrobbles='32'
                max_scrobbles={MAX_SCROBBLES}
                artist="Metamatics" 
                title="Hymn Bream" 
                youtube="https://www.youtube.com/embed/3Nv_J_sm9pw?si=6gByBSsYYuokfFpu" />
            <div className='track-review'>
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
        </div>
        
        <div className='blog-subsection' id='track7'>
            <TrackMetadataComponent 
                pos='7' 
                scrobbles='31'
                max_scrobbles={MAX_SCROBBLES}
                artist="Global Communication" 
                title="4:02" 
                youtube="https://www.youtube.com/embed/wwH2rML4cls?si=TD11MwzIFMwJb1V7" />
            <div className='track-review'>
                <p className='track-genresList'>Ambient</p>
                <p>
                Somehow, I only started listening to this amazing ambient album this year.
                Every song on this album is an absolute delight.
                This song in particular is incredible.
                Again, listen with headphones on, go for a walk on a cold dark night, embrace the solitude and vastness.
                </p>
            </div>
        </div>

        <div className='blog-subsection' id='track8'>
            <TrackMetadataComponent 
                pos='8' 
                scrobbles='31'
                max_scrobbles={MAX_SCROBBLES}
                artist="Joe Hisaishi" 
                title="Kids Return" 
                youtube="https://www.youtube.com/embed/z6pNn_Fxze4?si=sIFy8QGceyvlnm_r" />
            <div className='track-review'>
                <p className='track-genresList'>New age; Neo-classical; Film soundtrack</p>
                <p>
                Another great tune from Joe Hisaishi's soundtrack.
                This is the theme song, very upbeat and fun to run to.
                </p>
            </div>
        </div>

        <div className='blog-subsection' id='track9'>
            <TrackMetadataComponent 
                pos='9' 
                scrobbles='30'
                max_scrobbles={MAX_SCROBBLES}
                artist="Sounds From The Ground" 
                title="Rye" 
                youtube="https://www.youtube.com/embed/YxMirZFTuLM?si=bxXOi9PEZkcj7lFo" />
            <div className='track-review'>
                <p className='track-genresList'>Ambient; Downtempo; Ambient dub</p>
                <p>
                Another wonderful downtempo tune from Sounds From The Ground.
                This one is a mellow, ambient-dub, psychdelic trip. 
                It took a while to grow on me, but I'm in love with the song now.
                </p>
            </div>
        </div>

        <div className='blog-subsection' id='track10'>
            <TrackMetadataComponent 
                pos='10' 
                scrobbles='30'
                max_scrobbles={MAX_SCROBBLES}
                artist="Joe Hisaishi" 
                title="High Spirits" 
                youtube="https://www.youtube.com/embed/evY0pUDhcJU?si=f0n4H3lUVdRABAgb" />
            <div className='track-review'>
                <p className='track-genresList'>New age; Neo-classical; Film soundtrack</p>
                <p>Another Hisaishi song! Clearly I listened to this soundtrack a lot this year!</p>
            </div>
        </div>

        <div className='blog-subsection' id='track11'>
            <TrackMetadataComponent 
                pos='11' 
                scrobbles='30'
                max_scrobbles={MAX_SCROBBLES}
                artist="Joe Hisaishi" 
                title="Next Round" 
                youtube="https://www.youtube.com/embed/_6IW2gvG5l8?si=L2AreJQqSgedB88d" />
            <div className='track-review'>
                <p className='track-genresList'>New age; Neo-classical; Film soundtrack</p>
                <p>
                One of the more melancholic songs on the soundtrack.
                But it's another reason why I love the film and the soundtrack as a whole.
                Variety is the spice of life. Hisaishi understands this better than anyone else in film composition.
                </p>
            </div>
        </div>

        <div className='blog-subsection' id='track12'>
            <TrackMetadataComponent 
                pos='12'
                scrobbles='29'
                max_scrobbles={MAX_SCROBBLES}
                artist="Metamatics" 
                title="Man-Q-Neons" 
                youtube="https://www.youtube.com/embed/3Nv_J_sm9pw?si=yvDojwFw43WNgjyp" />
            <div className='track-review'>
                <p className='track-genresList'>Electronic; Ambient; Ambient techno; IDM</p>
                <p>
                Another great song from Metamatics - Mind Mushing Git.
                </p>
            </div>
        </div>

        <div className='blog-subsection' id='track13'>
            <TrackMetadataComponent 
                pos='13' 
                scrobbles='27'
                max_scrobbles={MAX_SCROBBLES}
                artist="Egberto Gismonti" 
                title="Luzes Da Ribalta" 
                youtube="https://www.youtube.com/embed/TVr3xmeU7l0?si=zs5qa0PlkB1gmvnV" />
            <div className='track-review'>
                <p className='track-genresList'>Jazz; Brazilian jazz; Jazz fusion</p>
                <p>
                Finally something other than ambient music! 
                Here we have some pretty interesting, quirky, Brazillian jazz from the 1970's
                </p>
            </div>
        </div>
        </BrowserRouter>
    </div>
)
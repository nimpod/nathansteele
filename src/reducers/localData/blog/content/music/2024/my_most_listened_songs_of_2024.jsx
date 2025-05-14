import React from 'react';
import { Link, withRouter, BrowserRouter } from 'react-router-dom';
import $ from "jquery";

import TrackHeader from '../track_header.js';
import TrackFooter from '../track_footer.js';
import ScrobbleAllTimeDataSummary from '../scrobble_data_per_year_summary.js';

import { get_album_review_id } from '../../../../../../js/helpers.js'
import data from './2024_data.json';


let MAX_SCROBBLES = data[0]['scrobbles'];
let YEAR = "2024";
const IMAGES = {scrobbles_graph: "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/my_most_listened_songs_of_2023/scrobbles_per_month_graph.PNG",}


export const post = () => (
    <div className='top-songs-EOY'>
        <BrowserRouter>
        <div className='intro-text blog-subsection' id='section1'>
            <div>
                <h3 className='subgroup-title'></h3>
                <ScrobbleAllTimeDataSummary></ScrobbleAllTimeDataSummary>

                <p>
                    {YEAR} has has been a very interesting year for my musical discoveries.
                    According to LastFM it has been <b>my most active listening year ever</b> 
                    Which is quite impressive considering I have been travelling in India and Nepal for 
                    the last 5 months (August/September/October/November/December).
                    My listening was much lower in August (first month of travelling because I was not used 
                    to the fast-paced lifestyle), but has picked up since then, although the monthly totals 
                    for the remainding months were generally quite low (between 1000-1300 scrobbles), 
                    compared to January-July (between 1500-2200 scrobbles).
                </p>
                
                <p>
                    Anyways, in this blog post I will go over the 25 songs that I listened to most this year...
                </p>

                <p>
                    <a href="https://www.last.fm/user/gutash/library/tracks?from=2024-01-01&rangetype=year" target="_blank">
                        All my data for {YEAR} is here
                    </a> if you want to see that.
                </p>
            </div>
        </div>

        {data.map(obj => {
            let pos = obj['pos'];
            let track = obj['track'];
            let artist = obj['artist'];
            let scrobbles = obj['scrobbles'];
            let youtube = obj['youtube'];
            let genres = obj['genres'];
            let div_id = `track${pos}`;
            let album = obj['album']? obj['album'] : "";
            let album_review_id = "";
            if (obj['album'] !== undefined) {
                if (obj['album_review_id'] !== undefined) {
                    album_review_id = obj['album_review_id']; 
                } else {
                    album_review_id = get_album_review_id(artist, album);
                }
            }

            if (pos == 1) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
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
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 2) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Early this year I watched this anime film - <Link to={'/films/patlabor2themovie-1NP4-review'}>Patlabor 2, by Mamoru Oshii</Link>.
                        </p>
                        <p>
                            The soundtrack to the film is by the legendary composer Kenji Kawai.
                            There are some wonderful ambient songs on the soundtrack, in particular Unnatural City II.
                            Not only is it a beautiful introspective memorable ambient song, but in the context of the film it's so special. 
                            It's an amazing audio-visual spectacle that I highly recommenmed experinecing for yourself.
                        </p>
                        <p>
                            Listen with headphones on. Go for a walk on a cold dark night. Enjoy the immense solitude and feeling of vastness.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 3) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            A constantly evolving curious little downtempo/chillout/ambient techno song.
                            It takes me to a different world every time I listen to it.
                            This song, and the artist deserves so much more recognition.
                            Wonderful music.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 4) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            One of the many fantastic songs from Joe Hisaishi's soundtrack to a beautiful <Link to='/films/kidsreturn-1sfY-review'>Japanese film called Kids Return</Link>, directed by Takeshi Kitano.
                        </p>
                        <p>
                            Hisaishi is more well known for his Ghibli soundtracks. However I personally believe his best work is beyond Ghibli.
                            For example, A Scene At The Sea, Dolls, Kids Return (this album), Sonatine, Hanabi, Departures, etc...
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 5) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Another great tune from downtempo experts Sounds From The Ground.
                            This song, and the album are fantastic.
                            This one has similar vibes to London Fields, but is also so different and puts me into a relaxed headspace every time.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 6) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Metamatics are an artist I somehow only started listening to at the beginning of 2024.
                            This song, and the album it's from (Mind Mushing Git) is beyond exceptional.
                            There is an abstract, otherworldly quality to it.
                            Very unique ambient-techno music.
                            This song and the album has grown on me so much this year.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 7) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Somehow, I only started listening to this amazing ambient album this year.
                            Every song on this album is an absolute delight.
                            This song in particular is incredible.
                            Again, listen with headphones on, go for a walk on a cold dark night, embrace the solitude and vastness.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 8) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>New age; Neo-classical; Film soundtrack</p>
                        <p>
                            Another great tune from Joe Hisaishi's soundtrack.
                            This is the theme song, very upbeat and fun to run to.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 9) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Another wonderful downtempo tune from Sounds From The Ground.
                            This one is a mellow, ambient-dub, psychdelic trip. 
                            It took a while to grow on me, but I'm in love with the song now.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 10) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>New age; Neo-classical; Film soundtrack</p>
                        <p>
                            Another Hisaishi song! Clearly I listened to this soundtrack a lot this year!
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 11) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>New age; Neo-classical; Film soundtrack</p>
                        <p>
                            One of the more melancholic songs on the soundtrack.
                            But it's another reason why I love the film and the soundtrack as a whole.
                            Variety is the spice of life. Hisaishi understands this better than anyone else in film composition.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 12) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>Electronic; Ambient; Ambient techno; IDM</p>
                        <p>
                            Another great song from Metamatics - Mind Mushing Git.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 13) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Sven Wunder is a Swedish composer and musician.
                            His album Wabi Sabi combines so many different instruments and styles and cultures.
                            I love this song in particular (Bamboo and Rocks) for many reasons.
                            It reminds me of wandering through the desolate forests of Himachal Pradesh, India.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 14) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Finally some jazz music!
                            Here we have some pretty interesting, quirky, Brazillian jazz from the 1970's.
                            Egberto is super underrated and deserves so much more recognition in the jazz world.
                            This song is a great example of his unique style.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 15) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Karl Jenkins is a Welsh composer and musician, specialising in choral music.
                            This song has many renditions, but I love this one in particular.
                            It's a beautiful, melancholic, introspective song.
                            The video you can see below is a live performance of the song.
                            Highly highly recommend this song, and the whole album!!
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 16) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            This is a glorious breakbeat song from electronic legends The Prodigy.
                            The album this song is on is super underrated, and deserves as much attention as their more mainstream ones.
                            This song is just an onslaught of energy and fun.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 17) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Another beautiful song from Patrick O'Hearn.
                            He crafts such powerful music through simple components.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 18) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Sababa 5 are an Israeli band that play a unique blend of psychedelic rock, space rock, and funk.
                            This song is a blast, highly recommend it.
                            The whole album is great too.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 19) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Joe Hisaishi with another film soundtrack! He is insanely consistent, and somehow never sacrifices quality.
                            This song in particular, is absolute heaven, and fits the mood of the scene perfectly.
                            The film (<Link to='/films/asceneatthesea-1z10-review'>A Scene At The Sea, by Takeshi Kitano</Link>) is also incredible, 
                            probably in my top 20 films of all time. Hisaishi's soundtrack is a big reason why the film is so fantastic.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 20) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Another great tune from the Kids Return soundtrack.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 21) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            This is a very curious little ambient techno banger.
                            It's a relatively long track (7 minutes) but somehow time flies whenever I listen to it, and suddenly my mind is "activated" for lack of better words.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 22) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            This is the theme song to the infamous anime series <Link to='/films/serialexperimentslain-hYQE-review'>Serial Experiments Lain</Link>.
                            Without context, the two don't really seem to go together.
                            But if you watch the show, and listen to the song, it just works.
                            The OST for the series is also fantastic (all the ambient tunes are beautiful), but this theme song has really stuck with me, and brings back fond memories.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 23) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            This is another track that is quite long (7 minutes), 
                            but somehow time flies when I listen to it, and by the end my mind is calmer.
                            It's a very mellow, minimalist, drone, ambient song.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 24) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            On the complete other end of the spectrum, we have this mad Japanese jazz fusion track.
                            The whole album is fantastic, highly recommend it, there is not a single dull moment (drummer Senri Kawagchi, and pianist Yosuke Yamashita are both awesome).
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 25) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            I discovered this song through a Japanese film called ?
                            When I first heard it, I was very intrigued, but shazam wasn't able to identify it.
                            After a bit of searching, I realised it was Plaid that made it!
                            Anyway, it's a beautiful ambient/downtempo track, has a particular vibe to it that I love.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } 
        })}

        </BrowserRouter>
    </div>
)
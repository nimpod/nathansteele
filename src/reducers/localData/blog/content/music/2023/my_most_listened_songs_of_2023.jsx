import React from 'react';
import { Link, withRouter, BrowserRouter } from 'react-router-dom';
import $ from "jquery";
import TrackHeader from '../track_header.js';
import TrackFooter from '../track_footer.js';
import ScrobbleAllTimeDataSummary from '../scrobble_data_per_year_summary.js';
import { get_album_review_id } from '../../../../../../js/helpers.js'
import data from './2023_data.json';

let MAX_SCROBBLES = data[0]['scrobbles'];
let YEAR = "2023";
const IMAGES = {scrobbles_graph: "https://s3.eu-west-2.amazonaws.com/nathansteele.com/blog/my_most_listened_songs_of_2023/scrobbles_per_month_graph.PNG",}

export const post = () => (
    <div className='top-songs-EOY'>
        <BrowserRouter>
        <div className='intro-text blog-subsection' id='section1'>
            <div>
                <h3 className='subgroup-title'></h3>
                <ScrobbleAllTimeDataSummary></ScrobbleAllTimeDataSummary>

                <p>{YEAR} has probably been the most insane year so far in terms of personal musical discoveries. 
                    Unfortuantly I have discovered way more than 25 great songs this year... I could probably make a pretty solid top 300 list? 
                    According to LastFM, I listened to <b>7,543</b> individual songs, and scrobbled <b>17,260</b> songs overall.</p>

                <p>In this blog post I will go over the 25 songs that I listened to most this year...</p>

                <p>
                    <a href="https://www.last.fm/user/gutash/library/tracks?from=2023-01-01&rangetype=year" target="_blank">
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
                            Erik Satie crafting melancholic piano music in the 1800's, what a legend.
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
                            Super super super chill. I wish that the album this song belonged on contained more songs like this. Because this song, fucking slaps (a peaceful slap).
                            The melodic craft and energy of this song reminds me of some of the songs on Sing Street (which dominated my top 25 tracks in 2022).
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
                            Possibly the best random discovery I made this year.
                            Bruno Sanfilippo is a relatively obscure Argentian musician who has been exploring Modern Classical, Ambient, and Post-minimalism since the 90s.
                            He released a new album in 2023 called 'Ver Sacrum', and the whole thing is a glorious exploration of Post-Minimalism/Ambient/Modern Classical genres.
                            Listen to this album with headphones on, turn up the volume, and you will be transported to a brand new realm of existence that you never knew existed before.
                        </p>
                        <p>
                            I have been listening to the album <b>a lot</b> this year. If I did make a 'Best albums of 2022 list' this would 100% be 1st place. 
                            An excellent inclusion in my top 100 albums of all time.
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
                            Finale song to the incredible Chinese anime film <a href="https://boxd.it/8bfm" target='_blank'>Big Fish & Begonia</a> that I watched back in May 2023.
                            The film is absolutely incredible, and the soundtrack was absolute perfection.
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
                            Another great musical discovery for me this year was Sam Gellaitry...
                            How I've not heard of this guy before May 2023, I do not know...
                            This song 'Acres' is one of the most epic songs I've ever heard in the Future Bass genre.
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
                            Same album as my #2 track 'The Modern Western World'.
                            This track here is just as chill and relaxing as the other one.
                            If the rest of the album were up to the same standard as these two songs, I'd probably give the album a 10/10.
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
                            Another amazing musical discovery this year has been Alice Longyu Gao.
                            Her 2023 album 'Let's Hope Heteros Fail, Learn and Retire' is absolutely bat-shit crazy, fusing genres from Hyper-pop, Bubblegum-pop, Alt-metal, Trap-metal, and Industrial Hip-Hop.
                            Possibly the craziest song on the album is 'Monk'.
                            It's best to experience it yourself... Go ahead...
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 8) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Way back in February I was exploring the New Age genre on RYM, and stumbled upon Andreas Vollenweider, a Swiss Harpist who has been releasing albums since the 80s and is still going strong to this day.
                            I started listening to his 1986 album 'Down To The Moon' - life has never been the same since...
                            This stunning album exists somewhere between the genres of New Age, Ambient, Progressive Pop, and Electronic.
                        </p>
                        <p>
                            There are a lot of stand-out tracks from this album, Night Fire Dance (#5 in the album tracklist) seems to be the one I listened to most, but there are 3 in total that appeared in this top 25 list.
                            The album is another excellent addition to my favourite albums of all time list, probably lingers around top 50 at the moment.
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
                            Absolutely wild combination of jazz and breakbeat music.
                            Hakushi Hasegawa understands this niche very well.
                            This track is an onslaught of chaos and energy. I love every second of it, and the album is great too.
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 10) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
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
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } else if (pos == 11) {
                return <div className='blog-subsection' id={div_id}>
                    <TrackHeader pos={pos} scrobbles={scrobbles} max_scrobbles={MAX_SCROBBLES} artist={artist} title={track} />
                    <div className='track-review'>
                        <p className='track-genresList'>{genres}</p>
                        <p>
                            Skrillex casually releasing one of the best Hybrid Trap/Dubstep/EDM Trap songs ever...
                            Teaming up with Palestinian singer Nai Barghouti is definitely one of the most unexpected partnerships out there in electronic music, but it works extremely well.
                            It's one of those Hybrid Trap songs that gets better and better every time you listen to it.
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
                            A fairly obscure discovery in the realm of Hybrid Trap/Dubstep. Gladde Paling is a DJ from The Netherlands.
                        </p>
                        <p>
                            TLDR: if you like having <b>fun</b>, listen to his album 'dansmuziek'. The song 'zeemeeuw' is a great highlight from the album.
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
                            Back in December 2022, I watched a film called <a href="https://boxd.it/1Sf6" target='_blank'>Cashback</a>.
                            The film has stuck with me ever since I watched about a year ago now. One of the reasons why is because the soundtrack is absolute perfection.
                            There are a lot of brilliant piano ballads from the soundtrack, this one called 'Drawing' seems to be the one I listened to most this year.
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
                            And here we have what appears to another Andreas Vollenweider song from his amazing 1986 album 'Down To The Moon'!
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
                            Absolute madness that more people aren't listening to this absolute masterpiece of an album.
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
                            Another delightful piano ballad from the <a href="https://boxd.it/1Sf6" target='_blank'>Cashback</a> soundtrack.
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
                            This is a crazy recent discovery, my first scrobble of this song was 03/12/2023, literally 30 days ago!
                            And it's already climbed up to 17th place on this list.
                            That speaks volumes to the relistenable quality of this song and the entire album.
                            Norwegian ECM-jazz legend Eberhard Weber will forever be on my radar from here onwards.
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
                            Father John Misty has been on my 'listenlist' for a few years now. I heard a lot of buzz around this album back in 2017.
                            I am very grateful for now knowing of him, this album, and this song in particular.
                            Bonus points for a FANTASTIC music video!!!
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
                            Literally the most exhilarating bass song I've ever heard.
                            There is something so pure and insane about experiencing this song for the 1st time, the 10th time, the 20th time, and forever into the future.
                            This song is on an EP that was released in 2022, hopefully G Jones continues to make music like this.
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
                            The 2nd song to the 'Blue Sun' album.
                            This entire album has been a wonderful discovery late on in 2023.
                            Insane that Ralph made this song 41 years ago!!!
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
                            Singer-songwritter Ruby Throat has been another great musical discovery for me this year.
                            This song in particular is a stunning little indie folk tune.
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
                            Way back in April, I watched a very peculiar Japanese film called <a href="https://boxd.it/14z6">Ritual [式日]</a>.
                            I was a bit flabbergasted by the film itself, but the soundtrack to the film caught my attention and hasn't left my rotation ever since 8 months ago.
                            Japanese composer/pianist Takashi Kako [加古隆] composed the soundtrack to this film.
                            Ever since, I have been exploring Takashi's discography and discovered another beautiful album called <a href="https://www.youtube.com/watch?v=2KSkZn1Cg4c">Wind Waltz [風のワルツ]</a> which he created back in 2002 (just 2 years after Ritual was released)
                            There are a lot of great songs from the album (2 of which are actually from the Ritual soundtrack).
                            There are loads of other songs from the album in the 100-50 range on this list.
                            The final song on the album is apparently the one I listened to the most this year, called 'Sky and Waves [空と、波と]'.
                            It reminds me a lot of <a href="https://www.youtube.com/watch?v=URPBKDSrQBk&pp=ygUXZXJpayBzYXRpZSBneW1ub3BlZGllIDM%3D">Erik Satie's Trois Gymnopédies No. 3</a>, as does most of Takashi's music.
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
                            The Field are a very interesting electronic artist I started listening to back in January.
                            Their music exists somewhere between an Orbital kinda Ambient techno sound, and a BoC kinda Downtempo sound.
                            This song in particular is windy and intriguing and flies by whenever I listen to it.
                            If you like Orbital and/or BoC you'll love this!
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
                            I'll be honest, when I first heard this 2021 album 'Coruscate', I wasn't that really into it... But something about its abstractness and complexity kept luring me back in.
                            This whole album is a thrilling/dizzying/abstract adventure into IDM/EDM Trap/Future Bass/Wonky genres.
                            I think my favourite song from the album is this very song 'Hang Tight'.
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
                            World's End Girlfriend are a wildly diverse and prolific Japanese music group.
                            While I do find myself intrigued by the auditious and complex production and sound design of most of their electronic-based albums, I am personally drawn more to their film soundtracks, where they demonstrate a great ability to craft simple, peaceful, memorable music that exists somewhere between Modern Classical, Post-rock, and Ambient genres.
                            They made the soundtrack to a fantastic Chinese film <a href="https://boxd.it/32CG" target='_blank'>Starry Starry Night</a> that I watched back in June 2023, and I have been revisiting the soundtrack a lot this year.
                            Highly recommend the film, the full soundtrack, and definitely this song called 'Starry' (the 1st song on the album).
                        </p>
                        <TrackFooter album_artist={artist} album_name={album} youtube={youtube} review_id={album_review_id} />
                    </div>
                </div>
            } 
        })}

        </BrowserRouter>
    </div>
)
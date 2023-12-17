/**
 * Local album review data.
 * The json is merged with the web data in /reducers/RootReducer.js
 */

import ReactDomServer from 'react-dom/server';
import { convert_collection_of_json_objects_to_one_list } from '../../js/helpers.js';

import { review as YesFlyFromHereReview } from '../websiteContent/albums/yes-fly_from_here/review.jsx';
import { review as BocMHTRTCReview } from '../websiteContent/albums/boards_of_canada-music_has_the_right_to_children/review.jsx';
import { review as ChisatoYamadaReview } from '../websiteContent/albums/chisato_yamada-suite_nihonkai/review.jsx';

const favourite_tracks = {
    BOARDS_OF_CANADA__MHTRTC: [
        "Turqoise Hexagon Sun",
        "An Eagle In Your Mind",
        "Sixtyten",
        "Telepathic Workshop",
        "Aquarius",
        "Olson",
        "Happy Cycling",
        "Roygbiv",
        "Pete Standing Alone",
        "The Color Of The Fire",
        "Wildlife Analysis",
        "Rue The Whirl",
    ]
}

/**
 * Album reviews database
 */
const database = {
    "ralph_towner__blue_sun": {
        lastfm_url: "https://www.last.fm/music/Ralph+Towner/Blue+Sun",
        rym_url: "https://rateyourmusic.com/release/album/ralph-towner/blue-sun/",
        spotify_url: "https://open.spotify.com/album/1lgXVjGzsKuDijfo10m6Nf?si=IhNMdUdMT1adGbT7dAkjag",
        year_of_release: "1982",
        genres: ["New age; ECM style jazz; Ambient; Jazz; Chamber jazz"],
        my_rating: 9.0,
        my_review: "",
        year_of_discovery: "2023",
        favourite_tracks: [
            "Blue Sun",
            "The Prince and the Sage",
            "Rumours of Rain",
            "Shadow Fountain",
        ]
    },

    "yes__fly_from_here": {
        lastfm_url: "https://www.last.fm/music/Yes/Fly+From+Here",
        rym_url: "https://rateyourmusic.com/release/album/yes/fly-from-here/",
        youtube_url: "https://www.youtube.com/watch?v=SEs-i9kMpKg",
        custom_cover_url: require('../websiteContent/albums/yes-fly_from_here/custom_album_cover.jpg'),
        year_of_release: "2011",
        genres: ["Progressive rock; Symphonic prog; Progressive pop"],
        my_rating: 10,
        my_review: ReactDomServer.renderToString(YesFlyFromHereReview()),
        year_of_discovery: "2013"
    },

    "altJ__an_awesome_wave": {
        lastfm_url: "https://www.last.fm/music/alt-J/An+Awesome+Wave",
        rym_url: "https://rateyourmusic.com/release/album/alt-j/an-awesome-wave/",
        spotify_url: "https://open.spotify.com/album/6HbJlAnTRhWae1F3lEwGkv?si=o6DSFRHVRFCOXpm9K7kQLw",
        year_of_release: "2012",
        genres: ["Indie pop; Art pop; Progressive Pop; Folktronica; Indietronica; Post-rock"],
        custom_cover_url: "https://lastfm.freetls.fastly.net/i/u/770x0/ff6f2fe0511f4d25bf42cb8ab88ed2e2.jpg#ff6f2fe0511f4d25bf42cb8ab88ed2e2",
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2013",
    },

    "asia__gravitas": {
        lastfm_url: "https://www.last.fm/music/Asia/Gravitas",
        rym_url: "https://rateyourmusic.com/release/album/asia/gravitas/",
        spotify_url: "https://open.spotify.com/album/05ZncAfXCsmBH2UVx78gaL?si=rdS3CLWeSXSTO9YnxaRGIQ",
        year_of_release: "2013",
        genres: ["Symphonic rock; Progressive rock; Art rock; AOR"],
        custom_cover_url: "https://lastfm.freetls.fastly.net/i/u/770x0/fc4273ad9d904206c2776ca005d01e32.jpg#fc4273ad9d904206c2776ca005d01e32",
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2014",
    },

    "boards_of_canada__mhtrtc": {
        lastfm_url: "https://www.last.fm/music/Boards+of+Canada/Music+Has+the+Right+to+Children",
        rym_url: "https://rateyourmusic.com/release/album/boards-of-canada/music-has-the-right-to-children/",
        custom_cover_url: "https://bocpages.org/w/images/Music_Has_the_Right_to_Children.jpg",
        spotify_url: "https://open.spotify.com/album/1vWnB0hYmluskQuzxwo25a?si=IHYW6vgvTha6CfUPDWsMzw",
        year_of_release: "1998",
        genres: ["IDM; Ambient; Downtempo"],
        themes: ["Atmospheric", "Otherworldy", "Mysterious", "Vast", "Dark", "Nostalgic", "Ethereal", "Creepy", "Weird", "Surreal"],
        my_rating: 10,
        year_of_discovery: "2017",
        my_review: ReactDomServer.renderToString(BocMHTRTCReview()),
    },

    "boards_of_canada__random_30_tracks_tape": {
        lastfm_url: "https://www.last.fm/music/Boards+of+Canada/Random+35+Tracks+Tape",
        rym_url: "https://rateyourmusic.com/release/unauth/boards-of-canada/random-35-tracks-tape/",
        youtube_url: "",
        year_of_release: "1996",
        genres: ["IDM; Ambient; Breakbeat"],
        custom_cover_url: "https://i1.sndcdn.com/artworks-MCKqEy3UB0Ye9PdD-sI6suA-t500x500.jpg",
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2017"
    },

    "chisato_yamada__suite_nihonkai": {
        lastfm_url: "https://www.last.fm/music/Chisato+Yamada/Suite+Nihonkai+%E7%B5%84%E6%9B%B2%E3%80%8C%E6%97%A5%E6%9C%AC%E6%B5%B7%E3%80%8D%E6%B4%A5%E8%BB%BD%E3%81%98%E3%82%87%E3%82%93%E3%81%8B%E3%82%89%E6%B5%81%E3%82%8C%E7%AF%80",
        rym_url: "https://rateyourmusic.com/release/album/%E5%B1%B1%E7%94%B0%E5%8D%83%E9%87%8C/suite_nihonkai_%E7%B5%84%E6%9B%B2%E3%80%8C%E6%97%A5%E6%9C%AC%E6%B5%B7%E3%80%8D%E6%B4%A5%E8%BB%BD%E3%81%98%E3%82%87%E3%82%93%E3%81%8B%E3%82%89%E6%B5%81%E3%82%8C%E7%AF%80/",
        custom_cover_url: "https://lastfm.freetls.fastly.net/i/u/770x0/8d6f20e4ef9693e3c33f29ea141d591c.jpg#8d6f20e4ef9693e3c33f29ea141d591c",
        youtube_url: "",
        artist_name_Japanese: "山田千里",
        year_of_release: "1981",
        genres: ["Tsugaru shamisen; Min'yō Music; J-acoustic; J-funk; Funk"],
        my_rating: 9.5,
        year_of_discovery: "2021",
        my_review: ReactDomServer.renderToString(ChisatoYamadaReview()),
    },

    "daft_punk__discovery": {
        lastfm_url: "https://www.last.fm/music/Daft+Punk/Discovery",
        rym_url: "https://rateyourmusic.com/release/album/daft-punk/discovery/",
        spotify_url: "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc?si=QujuPptJTxSzF6-S9tqQsw",
        year_of_release: "2001",
        genres: ["French House; Electro-Disco; Funky House; Dance pop; Synth Funk; Nu-disco"],
        custom_cover_url: "https://lastfm.freetls.fastly.net/i/u/770x0/54010ae7c4fa4c96a1e1872a051d9ecc.jpg#54010ae7c4fa4c96a1e1872a051d9ecc",
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2020",
    },

    "enter_shikari__the_mindsweep": {
        lastfm_url: "https://www.last.fm/music/Enter+Shikari/The+Mindsweep",
        rym_url: "https://rateyourmusic.com/release/album/enter-shikari/the-mindsweep/",
        spotify_url: "https://open.spotify.com/album/3q8PS1Zkx3a0Zo6Ld2L1d7?si=fXyeTBifQii8VHcNqrMEeQ",
        year_of_release: "2015",
        genres: ["Post-hardcore; Drum and bass; Metalcore; Trancecore; Trance"],
        custom_cover_url: "https://www.nme.com/wp-content/uploads/2016/09/2014EnterShikari_TheMindSweep_081014.jpg",
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2016",
    },
    
    "ichiko_aoba__windswept_adan": {
        lastfm_url: "https://www.last.fm/music/Ichiko+Aoba/Windswept+Adan",
        rym_url: "https://rateyourmusic.com/release/album/%E9%9D%92%E8%91%89%E5%B8%82%E5%AD%90/%E3%82%A2%E3%83%80%E3%83%B3%E3%81%AE%E9%A2%A8-windswept-adan/",
        spotify_url: "https://open.spotify.com/album/0LxeUCxtPfUtnHTKbW52MB?si=rupRpQnBTSyKndTJrbuDUA",
        year_of_release: "2020",
        genres: ["J-folk; Chamber folk; Ambient; New age; Nature recordings; J-acoustic"],
        custom_cover_url: "https://m.media-amazon.com/images/I/71Q93PPdn0L._UF894,1000_QL80_.jpg",
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2021",
    },

    "joe_hisaishi__the_wind_rises": {
        lastfm_url: "https://www.last.fm/music/%E4%B9%85%E7%9F%B3%E8%AD%B2/The+Wind+Rises+Soundtrack",
        rym_url: "https://rateyourmusic.com/release/album/%E4%B9%85%E7%9F%B3%E8%AD%B2/%E9%A2%A8%E7%AB%8B%E3%81%A1%E3%81%AC_%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF__kaze_tachinu_soundtrack_/",
        spotify_url: "https://open.spotify.com/album/59U5FQ4kDEt11Q2UcFu1dK?si=nA7B5VZLTYe8Y9Q-ul-yxg",
        year_of_release: "2013",
        artist_name_English: "Joe Hisaishi",
        genres: ["Movie soundtrack"],
        my_rating: 9.0,
        custom_cover_url: "https://i.scdn.co/image/ab67616d0000b273c853c5a8535cc3dc394efc58",
        my_review: "",
        year_of_discovery: "2022",
    },

    "joe_hisaishi__kikis_delivery_service": {
        lastfm_url: "https://www.last.fm/music/%E4%B9%85%E7%9F%B3%E8%AD%B2/Kiki%27s+Delivery+Service+Soundtrack+Music+Collection",
        rym_url: "https://rateyourmusic.com/release/album/%E4%B9%85%E7%9F%B3%E8%AD%B2/kikis-delivery-service-original-soundtrack/",
        spotify_url: "https://open.spotify.com/album/2NO5lYWs4aWpsmHOjF4JHk?si=eitK7DgpTYWtnaV3aQ0E6g",
        year_of_release: "1989",
        artist_name_English: "Joe Hisaishi",
        genres: ["Movie soundtrack; Anime soundtrack; Japanese anime soundtrack"],
        my_rating: 9.5,
        my_review: "",
        year_of_discovery: "2022",
    },

    "linkin_park__hybrid_theory": {
        lastfm_url: "https://www.last.fm/music/Linkin+Park/Hybrid+Theory",
        rym_url: "https://rateyourmusic.com/release/album/linkin-park/hybrid-theory/",
        spotify_url: "https://open.spotify.com/album/6PFPjumGRpZnBzqnDci6qJ?si=zgoR-iP-TrS-WshQFRO52g",
        year_of_release: "2000",
        genres: ["Art rock; Chamber pop; Ambient pop; Art pop"],
        custom_cover_url: "https://lastfm.freetls.fastly.net/i/u/770x0/cc15ebc58ec625979776cabaaaa282fa.jpg#cc15ebc58ec625979776cabaaaa282fa",
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2016",
    },

    "minseo__the_diary_of_youth": {
        lastfm_url: "https://www.last.fm/music/Minseo/The+Diary+of+Youth",
        rym_url: "https://rateyourmusic.com/release/ep/minseo/the-diary-of-youth/",
        spotify_url: "https://open.spotify.com/album/1OvlJHuqvSO9zVBLKATEu7?si=jh9b-gPPTqqbEyLslgtq9w",
        year_of_release: "2019",
        genres: ["K-pop; Jazz; Jazz pop"],
        my_rating: 8.25,
        my_review: "",
        year_of_discovery: "2023",
    },

    "orbital__in_sides": {
        lastfm_url: "https://www.last.fm/music/Orbital/In+Sides",
        rym_url: "https://rateyourmusic.com/release/album/orbital/in-sides/",
        spotify_url: "https://open.spotify.com/album/1wXyzUmlgN6G1DXIY0Sh8l?si=Et6pXDkWSjqYiG1zSAPkuQ",
        year_of_release: "1997",
        genres: ["Ambient techno; IDM; Ambient; Breakbeat; Progressive Breaks; Neo-Psychedelia"],
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2017",
        custom_cover_url: "https://f4.bcbits.com/img/a1871008282_10.jpg",
        favourite_tracks: [
            "The Box, Pt. 1",
            "The Saint",
            "Out There Somewhere - Part 1",
            "Dwr Budr",
            "The Girl with the Sun in Her Head",
            "The Box - Part 2",
            "Out There Somewhere - Part 2",
            "Petrol",
            "Adnans",
        ]
    },

    "poppy_eat": {
        lastfm_url: "https://www.last.fm/music/Poppy/EAT+(NXT+Soundtrack)",
        rym_url: "https://rateyourmusic.com/release/ep/poppy/eat/",
        spotify_url: "https://open.spotify.com/album/4vi6sZcoqMQ0C0EfqgRndL?si=yu6aSQAoTGSQmpNDBQFgMA",
        year_of_release: "2021",
        genres: ["Metalcore; Alternative metal; Nu Metal; Noise; Electropop; Screamo"],
        custom_cover_url: "https://lastfm.freetls.fastly.net/i/u/770x0/263ef1af1dd0bea47e452cf4c75e681f.jpg#263ef1af1dd0bea47e452cf4c75e681f",
        my_rating: 9.5,
        my_review: "",
        year_of_discovery: "2021",
    },

    "radiohead__a_moon_shaped_pool":  {
        lastfm_url: "https://www.last.fm/music/Radiohead/A+Moon+Shaped+Pool",
        rym_url: "https://rateyourmusic.com/release/album/radiohead/a-moon-shaped-pool/",
        spotify_url: "https://open.spotify.com/album/2ix8vWvvSp2Yo7rKMiWpkg?si=efm6w3QcSCm63RPqDAlI1Q",
        year_of_release: "2016",
        genres: ["Art rock; Chamber pop; Ambient pop; Art pop"],
        custom_cover_url: "https://lastfm.freetls.fastly.net/i/u/770x0/28db3fdca036fb53c62754694a89d3fd.jpg#28db3fdca036fb53c62754694a89d3fd",
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2016",
    },

    "radiohead__in_rainbows": {
        lastfm_url: "https://www.last.fm/music/Radiohead/In+Rainbows",
        rym_url: "https://rateyourmusic.com/release/album/radiohead/in-rainbows/",
        spotify_url: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK?si=v40axMugSx-FQt93Uv5njg",
        year_of_release: "2007",
        genres: ["Art rock; Dream pop; Art pop; Alternative rock"],
        custom_cover_url: "https://m.media-amazon.com/images/I/A1MwaIeBpwL._UF894,1000_QL80_.jpg",
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2017",
    },

    "system_of_a_down__hypnotise": {
        lastfm_url: "https://www.last.fm/music/System+of+a+Down/Hypnotize",
        rym_url: "https://rateyourmusic.com/release/album/system-of-a-down/hypnotize/",
        spotify_url: "https://open.spotify.com/album/3QxX3NbWyLlLG6lP1xveL3?si=n_AwZVu8Tv6txWmdVNNE9w",
        year_of_release: "2005",
        genres: ["Alternative Metal; Avant-garde Metal"],
        custom_cover_url: "https://lastfm.freetls.fastly.net/i/u/770x0/a96a0ff1cd9b384659b7edac19dc15b6.jpg#a96a0ff1cd9b384659b7edac19dc15b6",
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2010",
    },

    "takashi_kako__ritual_ost": {
        lastfm_url: "https://www.last.fm/music/Takashi+Kako/Shiki+Jitsu+(be+happy.+be+happy.+be+happy)",
        rym_url: "https://rateyourmusic.com/release/album/takashi-kako/be-happy_be-happy_be-happy/",
        youtube_url: "",
        artist_name_Japanese: "加古隆",
        year_of_release: "2000",
        genres: ["Movie soundtrack; Neoclassical New Age; Ambient; Piano"],
        my_rating: 9.75,
        my_review: "",
        year_of_discovery: "2023",
    },

    "worlds_end_girlfriend__hurtbreak_wonderland": {
        lastfm_url: "https://www.last.fm/music/World%27s+End+Girlfriend/Hurtbreak+Wonderland",
        rym_url: "https://rateyourmusic.com/release/album/takashi-kako/be-happy_be-happy_be-happy/",
        spotify_url: "https://open.spotify.com/album/7KtBhRWitpnHoma8UWiDgz?si=dhQ99k1YT3-tdBWS46M7GA",
        year_of_release: "2007",
        genres: ["Post-Rock; Modern Classical; IDM; Breakcore; Glitch; Chamber jazz"],
        custom_cover_url: "https://e.snmc.io/i/1200/s/d47bc66835d87bec07db7789341d5fbc/10509124",
        my_rating: 8.25,
        my_review: "",
        year_of_discovery: "2023",
    },

    "xtc__mummer": {
        lastfm_url: "https://www.last.fm/music/XTC/Mummer",
        rym_url: "https://rateyourmusic.com/release/album/xtc/mummer/",
        spotify_url: "https://open.spotify.com/album/7jArveDNywiBbEqax0f2vn?si=H4JmBO3yRkKNHZdt2xQ3PA",
        year_of_release: "2011",
        genres: ["Art punk; New wave; Art rock; Psychdelic pop; Neo-Psychedelia"],
        my_rating: 10,
        custom_cover_url: "https://beatopolis.files.wordpress.com/2019/01/xtc-1.jpg?w=640",
        year_of_discovery: "2013"
    },

    "xtc__chips_from_the_chocolate_fireball": {
        lastfm_url: "https://www.last.fm/music/The+Dukes+Of+Stratosphear/Chips+From+The+Chocolate+Fireball",
        rym_url: "https://rateyourmusic.com/release/comp/the-dukes-of-stratosphear/chips-from-the-chocolate-fireball/",
        spotify_url: "https://open.spotify.com/album/46ZRujqytRXcbgloCKA9Q7?si=gOZzfJVORiWtrjWrtb1Lug",
        year_of_release: "1987",
        genres: ["Psychedelic Rock; Psychedelic Pop; Jangle pop; New wave"],
        custom_cover_url: "https://lastfm.freetls.fastly.net/i/u/770x0/42a3dd8c1dea4f35b3c0711eb02c1a9d.jpg#42a3dd8c1dea4f35b3c0711eb02c1a9d",
        my_rating: 10,
        my_review: "",
        year_of_discovery: "2012",
    },
}

export const album_reviews = convert_collection_of_json_objects_to_one_list(database);

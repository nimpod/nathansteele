/**
 * Local album review data
 */

import ReactDomServer from 'react-dom/server';

import { review as YesFlyFromHereReview } from '../websiteContent/albums/yes-fly_from_here/review.jsx';
import { review as BocMHTRTCReview } from '../websiteContent/albums/boards_of_canada-music_has_the_right_to_children/review.jsx';
import { review as ChisatoYamadaReview } from '../websiteContent/albums/chisato_yamada-suite_nihonkai/review.jsx';


export const albumReviews = [
    {
        lastFmUrl: "https://www.last.fm/music/Yes/Fly+From+Here",
        rymUrl: "https://rateyourmusic.com/release/album/yes/fly-from-here/",
        youtubeUrl: "https://www.youtube.com/watch?v=SEs-i9kMpKg",
        yearOfRelease: "2011",
        genres: ["Progressive rock", "Symphonic prog", "Progressive pop"],
        myRating: "10",
        myReview: ReactDomServer.renderToString(YesFlyFromHereReview()),
        myDiscoveryYear: "2013"
    },
    {
        lastFmUrl: "https://www.last.fm/music/XTC/Mummer",
        rymUrl: "https://rateyourmusic.com/release/album/xtc/mummer/",
        youtubeUrl: "",
        yearOfRelease: "2011",
        genres: ["Art punk", "New wave", "Art rock", "Psychdelic pop", "Neo-Psychedelia"],
        myRating: "10",
        customCoverUrl: "https://beatopolis.files.wordpress.com/2019/01/xtc-1.jpg?w=640",
        myDiscoveryYear: "2013"
    },
    {
        lastFmUrl: "https://www.last.fm/music/Boards+of+Canada/Music+Has+the+Right+to+Children",
        rymUrl: "https://rateyourmusic.com/release/album/boards-of-canada/music-has-the-right-to-children/",
        youtubeUrl: "",
        yearOfRelease: "1998",
        genres: ["IDM", "Ambient", "Downtempo"],
        themes: ["Atmospheric", "Otherworldy", "Mysterious", "Vast", "Dark", "Nostalgic", "Ethereal", "Creepy", "Weird", "Surreal"],
        myRating: "10",
        myReview: "",
        myDiscoveryYear: "2017",
        customCoverUrl: "https://bocpages.org/w/images/Music_Has_the_Right_to_Children.jpg",
        myReview: ReactDomServer.renderToString(BocMHTRTCReview()),
    },
    {
        lastFmUrl: "https://www.last.fm/music/Chisato+Yamada/Suite+Nihonkai+%E7%B5%84%E6%9B%B2%E3%80%8C%E6%97%A5%E6%9C%AC%E6%B5%B7%E3%80%8D%E6%B4%A5%E8%BB%BD%E3%81%98%E3%82%87%E3%82%93%E3%81%8B%E3%82%89%E6%B5%81%E3%82%8C%E7%AF%80",
        rymUrl: "https://rateyourmusic.com/release/album/%E5%B1%B1%E7%94%B0%E5%8D%83%E9%87%8C/suite_nihonkai_%E7%B5%84%E6%9B%B2%E3%80%8C%E6%97%A5%E6%9C%AC%E6%B5%B7%E3%80%8D%E6%B4%A5%E8%BB%BD%E3%81%98%E3%82%87%E3%82%93%E3%81%8B%E3%82%89%E6%B5%81%E3%82%8C%E7%AF%80/",
        youtubeUrl: "",
        yearOfRelease: "1981",
        genres: ["Tsugaru shamisen", "Min'yō Music", "J-acoustic", "J-funk", "Funk"],
        myRating: "9.5",
        myReview: "",
        myDiscoveryYear: "2021",
        myReview: ReactDomServer.renderToString(ChisatoYamadaReview()),
    },

    {
        lastFmUrl: "https://www.last.fm/music/Boards+of+Canada/Random+35+Tracks+Tape",
        rymUrl: "https://rateyourmusic.com/release/unauth/boards-of-canada/random-35-tracks-tape/",
        youtubeUrl: "",
        yearOfRelease: "1996",
        genres: ["IDM", "Ambient", "Breakbeat"],
        myRating: "10",
        myReview: "",
        myDiscoveryYear: "2017"
    },
]

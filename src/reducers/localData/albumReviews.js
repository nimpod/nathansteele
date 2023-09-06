/**
 * Local album review data
 */

import ReactDomServer from 'react-dom/server';

import { review as YesFlyFromHereReview } from '../websiteContent/albums/yes_flyFromHere/review.jsx';


export const albumReviews = [
    {
        lastFmUrl: "https://www.last.fm/music/Yes/Fly+From+Here",
        rymUrl: "https://rateyourmusic.com/release/album/yes/fly-from-here/",
        youtubeUrl: "https://www.youtube.com/watch?v=SEs-i9kMpKg",
        year: "2011",
        genres: ["Progressive rock", "Symphonic prog", "Progressive pop"],
        myRating: "10",
        myReview: ReactDomServer.renderToString(YesFlyFromHereReview()),
        myDiscoveryYear: "2013"
    },
    {
        lastFmUrl: "https://www.last.fm/music/Boards+of+Canada/Random+35+Tracks+Tape",
        rymUrl: "",
        youtubeUrl: "",
        year: "1996",
        genres: ["IDM", "Ambient"],
        myRating: "10",
        myReview: "",
        myDiscoveryYear: "2017"
    },
]

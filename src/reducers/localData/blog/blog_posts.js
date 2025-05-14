import ReactDomServer from 'react-dom/server';

// blog posts about astronomy...
import { post as WhyTheMoonLandingWasNotAHoaxPost }     from './content/why_the_moon_landing_was_not_a_hoax.jsx';
import { post as CassiniHuygensPost }                   from './content/cassini_huygens.jsx';
import { post as TheIncomprehensibleVastnessOfSpace }   from './content/the_incomprehensible_vastness_of_space.jsx';
import { post as VeneraPost }                           from './content/venera.jsx';
import { post as TritonPost }                           from './content/triton.jsx';
import { Post as OurMoon }                              from './content/our_moon.jsx';
import { post as SolarFlares }                          from './content/solar_flares.jsx';

// blog posts about music...
import { post as MyMostListenedSongsOf2024Post }        from './content/music/2024/my_most_listened_songs_of_2024.jsx';
import { post as MyMostListenedSongsOf2023Post }        from './content/music/my_most_listened_songs_of_2023.jsx';
import { post as MyMostListenedSongsOf2022Post }        from './content/music/my_most_listened_songs_of_2022.jsx';
import { post as MyMostListenedSongsOf2021Post }        from './content/music/my_most_listened_songs_of_2021.jsx';
import { post as MyMostListenedSongsOf2020Post }        from './content/music/my_most_listened_songs_of_2020.jsx';
import { post as MyMostListenedSongsOf2016Post }        from './content/music/my_most_listened_songs_of_2014_2015_2016.jsx';
import { post as Top25FavouriteChillstepSongs }         from './content/music/top_25_favourite_chillstep_songs.jsx';

// blog posts about films...
import { post as BestFilmsIWatchedIn2023Post }        from './content/films/best_films_i_watched_in_2023.jsx';

// blog posts about trekking...
import { post as ManasluCircuit }   from './content/trekking/manaslu_circuit.jsx';
import { post as KangYatze2 }       from './content/trekking/kang_yatze_2.jsx';


// miscellaneous blog posts...
import { post as HowToDigitizeMiniDvTapesPost }         from './content/how_to_digitize_mini_dv_tapes.jsx';
import { post as MessiahsHandbookPost }                 from './content/messiahs_handbook.jsx';
import { post as InspirationDatabase }                  from './content/inspiration_database.jsx';


export const blog_posts = [
    /*
    {
        date: "31 Dec 2023",
        title: "Best films I watched in 2023",
        content: ReactDomServer.renderToString(BestFilmsIWatchedIn2023Post()),
        tags: ["Films"]
    },
    {
        date: "08 Sep 2016",
        title: "Why the moon landing was not a hoax",
        content: ReactDomServer.renderToString(WhyTheMoonLandingWasNotAHoaxPost()),
        tags: ["Astronomy"]
    },
    */

    {
        date: "04 Nov 2024",
        title: "Manaslu circuit trek",
        content: ReactDomServer.renderToString(ManasluCircuit()),
        tags: ["Travelling", "Trekking"]
    },
    {
        date: "24 Aug 2024",
        title: "Kang Yatze II trek",
        content: ReactDomServer.renderToString(KangYatze2()),
        tags: ["Travelling", "Trekking"]
    },


    // ASTRONOMY POSTS
    {
        date: "16 Jan 2023",
        title: "The incomprehensible vastness of space",
        content: ReactDomServer.renderToString(TheIncomprehensibleVastnessOfSpace()),
        tags: ["Life", "Astronomy"]
    },
    {
        date: "27 Apr 2017",
        title: "Cassini-Huygens",
        content: ReactDomServer.renderToString(CassiniHuygensPost()),
        tags: ["Astronomy"]
    },
    {
        date: "29 May 2024",
        title: "Solar Flares",
        content: ReactDomServer.renderToString(SolarFlares()),
        tags: ["Astronomy"]
    },
    {
        date: "14 Mar 2023",
        title: "The Venera space probes",
        content: ReactDomServer.renderToString(VeneraPost()),
        tags: ["Astronomy"]
    },
    {
        date: "21 Mar 2023",
        title: "Neptune's amazing moon Triton",
        content: ReactDomServer.renderToString(TritonPost()),
        tags: ["Astronomy"]
    },
    {
        date: "23 Jan 2024",
        title: "Our wonderful Moon",
        content: ReactDomServer.renderToString(OurMoon()),
        tags: ["Astronomy"]
    },

    // MUSIC POSTS
    {
        date: "6 May 2024",
        title: "Top 25 favourite chillstep songs",
        content: ReactDomServer.renderToString(Top25FavouriteChillstepSongs()),
        tags: ["Music"]
    },
    {
        date: "31 Dec 2024",
        title: "My most listened songs of 2024",
        content: ReactDomServer.renderToString(MyMostListenedSongsOf2024Post()),
        tags: ["Music"]
    },
    {
        date: "31 Dec 2023",
        title: "My most listened songs of 2023",
        content: ReactDomServer.renderToString(MyMostListenedSongsOf2023Post()),
        tags: ["Music"]
    },
    {
        date: "31 Dec 2022",
        title: "My most listened songs of 2022",
        content: ReactDomServer.renderToString(MyMostListenedSongsOf2022Post()),
        tags: ["Music"]
    },
    {
        date: "31 Dec 2021",
        title: "My most listened songs of 2021",
        content: ReactDomServer.renderToString(MyMostListenedSongsOf2021Post()),
        tags: ["Music"]
    },
    {
        date: "31 Dec 2020",
        title: "My most listened songs of 2020",
        content: ReactDomServer.renderToString(MyMostListenedSongsOf2020Post()),
        tags: ["Music"]
    },
    {
        date: "31 Dec 2017",
        title: "My most listened songs between 2014 - 2016",
        content: ReactDomServer.renderToString(MyMostListenedSongsOf2016Post()),
        tags: ["Music"]
    },


    {
        date: "23 Aug 2019",
        title: "How to digitize Mini DV tapes",
        content: ReactDomServer.renderToString(HowToDigitizeMiniDvTapesPost()),
        tags: ["Hardware"]
    },
    {
        date: "10 Sep 2017",
        title: "Analysing my Garmin data",
        content: "",
        tags: ["Python", "Running"]
    },
    {
        date: "24 Mar 2023",
        title: "Inspiration database",
        content: ReactDomServer.renderToString(InspirationDatabase()),
        tags: ["Notes"]
    },
    {
        date: "07 Oct 2020",
        title: "Are non-carbon based lifeforms possible?",
        content: "",
        tags: ["Astronomy", "Biology"]
    },
    {
        date: "07 Oct 2020",
        title: "Gorgonocephalus arcticus",
        content: "",
        tags: ["Biology"]
    },
    {
        date: "09 Oct 2020",
        title: "A subsurface ocean on Enceladus",
        content: "",
        tags: ["Astronomy"]
    },
    {
        date: "11 Oct 2020",
        title: "The Beale Ciphers",
        content: "blah",
        tags: ["Cryptography"]
    },
    {
        id: "11",
        date: "13 Oct 2020",
        title: "The Great Pyramid of Cholula",
        content: "blah",
        tags: ["History"]
    },
    {
        date: "14 Oct 2020",
        title: "Null Island",
        content: "blah",
        tags: ["Geography", "Oceanography"]
    },
    {
        date: "14 Oct 2020",
        title: "Hematite Stalactite",
        content: "blah",
        tags: ["RocksAndMinerals"]
    },
    {
        date: "14 Oct 2020",
        title: "Leucochloridium",
        content: "blah",
        tags: ["Entomology"]
    },
    {
        date: "30 Sep 2022",
        title: "Running form",
        content: "blah",
        tags: ["Running"]
    },
    {
        date: "30 Sep 2022",
        title: "Flagematics",
        content: "blah",
        tags: ["Vexilology", "Mathematics"]
    },
    {
        date: "16 Jan 2022",
        title: "Johannes Kepler",
        content: "blah",
        tags: ["InterestingPeople", "Astronomy"]
    },
    {
        date: "16 Jan 2022",
        title: "Samuel Pepys",
        content: "blah",
        tags: ["InterestingPeople"]
    },
    {
        date: "30 Sep 2022",
        title: "The Messiah's Handbook",
        content: ReactDomServer.renderToString(MessiahsHandbookPost()),
        tags: ["Notes"]
    },
]

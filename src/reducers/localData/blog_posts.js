import ReactDomServer from 'react-dom/server';

import { post as CassiniHuygensPost } from '../websiteContent/blog/cassini_huygens/post';
import { post as WhyTheMoonLandingWasNotAHoaxPost } from '../websiteContent/blog/why_the_moon_landing_was_not_a_hoax/post';
import { post as HowToDigitizeMiniDvTapesPost } from '../websiteContent/blog/how_to_digitize_mini_dv_tapes/post';
import { post as TheIncomprehensibleVastnessOfSpace } from '../websiteContent/blog/the_incomprehensible_vastness_of_space/post';
import { post as InspirationDatabase } from '../websiteContent/blog/inspiration_database/post';
import { post as VeneraPost } from '../websiteContent/blog/venera/post';
import { post as TritonPost } from '../websiteContent/blog/triton/post';
import { post as MessiahsHandbookPost } from '../websiteContent/blog/messiahs_handbook/post';


export const blog_posts = [
    {
        id: "1",
        date: "27 Apr 2017",
        title: "Cassini-Huygens",
        content: ReactDomServer.renderToString(CassiniHuygensPost()),
        tags: ["Astronomy"]
    },
    {
        id: "2",
        date: "08 Sep 2016",
        title: "Why the moon landing was not a hoax",
        content: ReactDomServer.renderToString(WhyTheMoonLandingWasNotAHoaxPost()),
        tags: ["Astronomy"]
    },
    {
        id: "3",
        date: "23 Aug 2019",
        title: "How to digitize Mini DV tapes",
        content: ReactDomServer.renderToString(HowToDigitizeMiniDvTapesPost()),
        tags: ["Hardware"]
    },
    {
        id: "4",
        date: "16 Jan 2023",
        title: "The incomprehensible vastness of space",
        content: ReactDomServer.renderToString(TheIncomprehensibleVastnessOfSpace()),
        tags: ["Life", "Astronomy"]
    },
    {
        id: "9",
        date: "10 Sep 2017",
        title: "Analysing my Garmin data",
        content: "",
        tags: ["Python", "Running"]
    },
    {
        id: "10",
        date: "24 Mar 2023",
        title: "Inspiration database",
        content: ReactDomServer.renderToString(InspirationDatabase()),
        tags: ["Notes"]
    },
    {
        id: "12",
        date: "07 Oct 2020",
        title: "Are non-carbon based lifeforms possible?",
        content: "",
        tags: ["Astronomy", "Biology"]
    },
    {
        id: "13",
        date: "07 Oct 2020",
        title: "Gorgonocephalus arcticus",
        content: "",
        tags: ["Biology"]
    },
    {
        id: "14",
        date: "09 Oct 2020",
        title: "A subsurface ocean on Enceladus",
        content: "",
        tags: ["Astronomy"]
    },
    {
        id: "15",
        date: "11 Oct 2020",
        title: "The Beale Ciphers",
        content: "blah",
        tags: ["Cryptography"]
    },
    {
        id: "16",
        date: "13 Oct 2020",
        title: "The Great Pyramid of Cholula",
        content: "blah",
        tags: ["History"]
    },
    {
        id: "17",
        date: "14 Oct 2020",
        title: "Null Island",
        content: "blah",
        tags: ["Geography", "Oceanography"]
    },
    {
        id: "18",
        date: "14 Oct 2020",
        title: "Hematite Stalactite",
        content: "blah",
        tags: ["RocksAndMinerals"]
    },
    {
        id: "19",
        date: "14 Oct 2020",
        title: "Leucochloridium",
        content: "blah",
        tags: ["Entomology"]
    },
    {
        id: "20",
        date: "14 Mar 2023",
        title: "The Venera space probes",
        content: ReactDomServer.renderToString(VeneraPost([
            require('../websiteContent/blog/venera/veneraAudioRecording.wav')
        ])),
        tags: ["Astronomy"]
    },
    {
        id: "21",
        date: "21 Mar 2023",
        title: "Neptune's amazing moon Triton",
        content: ReactDomServer.renderToString(TritonPost()),
        tags: ["Astronomy"]
    },
    {
        id: "22",
        date: "30 Sep 2022",
        title: "Running form",
        content: "blah",
        tags: ["Running"]
    },
    {
        id: "23",
        date: "30 Sep 2022",
        title: "Flagematics",
        content: "blah",
        tags: ["Vexilology", "Mathematics"]
    },
    {
        id: "24",
        date: "16 Jan 2022",
        title: "Johannes Kepler",
        content: "blah",
        tags: ["InterestingPeople", "Astronomy"]
    },
    {
        id: "25",
        date: "16 Jan 2022",
        title: "Samuel Pepys",
        content: "blah",
        tags: ["InterestingPeople"]
    },
    {
        id: "5",
        date: "30 Sep 2022",
        title: "The Messiah's Handbook",
        content: ReactDomServer.renderToString(MessiahsHandbookPost()),
        tags: ["Notes"]
    },
]

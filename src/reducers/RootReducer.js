import { review as AGhostStoryReview } from './websiteContent/films/a_ghost_story/review';
import { review as ChildrenOfTheSeaReview } from './websiteContent/films/children_of_the_sea/review';
import { review as ArriettyReview } from './websiteContent/films/the_secret_world_of_arrietty/review';
import { review as PoupelleOfChimmneyTownReview } from './websiteContent/films/poupelle_of_chimmney_town/review';
import { review as WhiteGodReview } from './websiteContent/films/white_god/review';
import { review as TetsuoTheBulletManReview } from './websiteContent/films/tetsuo_the_bullet_man/review';
import { review as FlatlandReview } from './websiteContent/films/flatland/review';

import { post as CassiniHuygensPost } from './websiteContent/blog/cassini_huygens/post';
import { post as WhyTheMoonLandingWasNotAHoaxPost } from './websiteContent/blog/why_the_moon_landing_was_not_a_hoax/post';
import { post as HowToDigitizeMiniDvTapesPost } from './websiteContent/blog/how_to_digitize_mini_dv_tapes/post';
import { post as TheIncomprehensibleVastnessOfSpace } from './websiteContent/blog/the_incomprehensible_vastness_of_space/post';
import { post as InspirationDatabase } from './websiteContent/blog/inspiration_database/post';
import { post as VeneraPost } from './websiteContent/blog/venera/post';
import { post as TritonPost } from './websiteContent/blog/triton/post';
import { post as MessiahsHandbookPost } from './websiteContent/blog/messiahs_handbook/post';

/*
import { review as AliensReview } from './websiteContent/films/aliens/review';
import { review as ArrivalReview } from './websiteContent/films/arrival/review';
import { review as BatmanReturnsReview } from './websiteContent/films/batman_returns/review';
import { review as BelleReview } from './websiteContent/films/belle/review';
import { review as BigFishAndBegonia } from './websiteContent/films/big_fish_and_begonia/review';
import { review as BirdmanReview } from './websiteContent/films/birdman/review';
import { review as BlackSheepReview } from './websiteContent/films/black_sheep/review';
import { review as BoyhoodReview } from './websiteContent/films/boyhood/review';
import { review as CadaverReview } from './websiteContent/films/cadaver/review';
import { review as CarrieReview } from './websiteContent/films/carrie/review';
import { review as CastawayOnTheMoonReview } from './websiteContent/films/castaway_on_the_moon/review';
import { review as ChildrenOfMenReview } from './websiteContent/films/children_of_men/review';
import { review as CloudAtlasReview } from './websiteContent/films/cloud_atlas/review';
import { review as CocoReview } from './websiteContent/films/coco/review';
import { review as ConfessionsReview } from './websiteContent/films/confessions/review';
import { review as CoralineReview } from './websiteContent/films/coraline/review';
import { review as CrawlReview } from './websiteContent/films/crawl/review';
import { review as District9Review } from './websiteContent/films/district_9/review';
import { review as DogvilleReview } from './websiteContent/films/dogville/review';
import { review as EddieTheEagleReview } from './websiteContent/films/eadie_the_eagle/review';
import { review as EuropaReportReview } from './websiteContent/films/europa_report/review';
import { review as EvilDeadReview } from './websiteContent/films/evil_dead/review';
import { review as EvilDeadRiseReview } from './websiteContent/films/evil_dead_rise/review';
import { review as ExMachinaReview } from './websiteContent/films/ex_machina/review';
import { review as ExteHairExtensionsReview } from './websiteContent/films/exte_hair_extensions/review';
import { review as FantasticMrFoxReview } from './websiteContent/films/fantastic_mr_fox/review';
import { review as FantasticPlanetReview } from './websiteContent/films/fantastic_planet/review';
import { review as FeastReview } from './websiteContent/films/feast/review';
import { review as GremlinsReview } from './websiteContent/films/gremlins/review';
import { review as HacksawRidgeReview } from './websiteContent/films/hacksaw_ridge/review';
import { review as HellbenderReview } from './websiteContent/films/hellbender/review';
import { review as HelterSkelterReview } from './websiteContent/films/helter_skelter/review';
import { review as HerReview } from './websiteContent/films/her/review';
import { review as HereditaryReview } from './websiteContent/films/hereditary/review';
import { review as HowlsMovingCastleReview } from './websiteContent/films/howls_moving_castle/review';
import { review as ImThinkingOfEndingThingsReview } from './websiteContent/films/im_thinking_of_ending_things/review';
import { review as InfinityPoolReview } from './websiteContent/films/infinity_pool/review';
import { review as KikisDeliveryServiceReview } from './websiteContent/films/kikis_delivery_service/review';
import { review as LastSunriseReview } from './websiteContent/films/last_sunrise/review';
import { review as LeaveNoTraceReview } from './websiteContent/films/leave_no_trace/review';
import { review as LifeIsBeautifulReview } from './websiteContent/films/life_is_beautiful/review';
import { review as LifeOfPiReview } from './websiteContent/films/life_of_pi/review';
import { review as LionReview } from './websiteContent/films/lion/review';
import { review as LoveExposureReview } from './websiteContent/films/love_exposure/review';
import { review as MarcelTheShellWithShoesOnReview } from './websiteContent/films/marcel_the_shell_with_shoes_on/review';
import { review as MissZombieReview } from './websiteContent/films/miss_zombie/review';
import { review as MonstersReview } from './websiteContent/films/monsters/review';
import { review as MonstersIncReview } from './websiteContent/films/monsters_inc/review';
import { review as MotherReview } from './websiteContent/films/mother/review';
import { review as MulhollandDriveReview } from './websiteContent/films/mulholland_drive/review';
import { review as MyNeighbourTotoroReview } from './websiteContent/films/my_neighbour_totoro/review';
import { review as NausicaaReview } from './websiteContent/films/nausicaa/review';
import { review as NocturnalAnimalsReview } from './websiteContent/films/nocturnal_animals/review';
import { review as NotesOnBlindnessReview } from './websiteContent/films/notes_on_blindness/review';
import { review as OculusReview } from './websiteContent/films/oculus/review';
import { review as ParasiteReview } from './websiteContent/films/parasite/review';
import { review as PleasantvilleReview } from './websiteContent/films/pleasantville/review';
import { review as PossessionReview } from './websiteContent/films/possession/review';
import { review as PredestinationReview } from './websiteContent/films/predestination/review';
import { review as PrincessMononokeReview } from './websiteContent/films/princess_mononoke/review';
import { review as RevengeReview } from './websiteContent/films/revenge/review';
import { review as RiseOfThePlanetOfTheApesReview } from './websiteContent/films/rise_of_the_planet_of_the_apes/review';
import { review as RiseRoarRevoltReview } from './websiteContent/films/rise_roar_revolt/review';
import { review as RockyReview } from './websiteContent/films/rocky/review';
import { review as SevenYearsInTibetReview } from './websiteContent/films/seven_years_in_tibet/review';
import { review as SlitherReview } from './websiteContent/films/slither/review';
import { review as SnowpiercerReview } from './websiteContent/films/snowpiecer/review';
import { review as SolarisReview } from './websiteContent/films/solaris/review';
import { review as SoundOfMetalReview } from './websiteContent/films/sound_of_metal/review';
import { review as SpiritedAwayReview } from './websiteContent/films/spirited_away/review';
import { review as SplitReview } from './websiteContent/films/split/review';
import { review as StarmanReview } from './websiteContent/films/starman/review';
import { review as TagReview } from './websiteContent/films/tag/review';
import { review as TheAgeOfAdalineReview } from './websiteContent/films/the_age_of_adaline/review';
import { review as TheCuriousCaseOfBenjaminButtonReview } from './websiteContent/films/the_curious_case_of_benjamin_button/review';
import { review as TheGirlWithTheDragonTattooReview } from './websiteContent/films/the_girl_with_the_dragon_tattoo/review';
import { review as TheInvisibleManReview } from './websiteContent/films/the_invisible_man/review';
import { review as TheLandOfCardsReview } from './websiteContent/films/the_land_of_cards/review';
import { review as TheMapOfTinyPerfectThingsReview } from './websiteContent/films/the_map_of_tiny_perfect_things/review';
import { review as TheMatrixReview } from './websiteContent/films/the_matrix/review';
import { review as ThePerksOfBeingAWallflowerReview } from './websiteContent/films/the_perks_of_being_a_wallflower/review';
import { review as TheShapeOfWaterReview } from './websiteContent/films/the_shape_of_water/review';
import { review as TheStrangersReview } from './websiteContent/films/the_strangers/review';
import { review as TheTagAlongReview } from './websiteContent/films/the_tag_along/review';
import { review as TheWindRisesReview } from './websiteContent/films/the_wind_rises/review';
import { review as ThemReview } from './websiteContent/films/them/review';
import { review as VictoriaReview } from './websiteContent/films/victoria/review';
import { review as WalleReview } from './websiteContent/films/walle/review';
import { review as WavesReview } from './websiteContent/films/waves/review';
import { review as WeNeedToTalkAboutKevinReview } from './websiteContent/films/we_need_to_talk_about_kevin/review';
import { review as WolfChildrenReview } from './websiteContent/films/wolf_childrem/review';
import { review as WrongReview } from './websiteContent/films/wrong/review';
import { review as XxxHolicReview } from './websiteContent/films/xxxholic/review';
*/


import ReactDomServer from 'react-dom/server';
import React from 'react';

const regex  = new RegExp("^.\/websiteContent\/films\/(.*?)\/screenshot(.jpg|.png|.jpeg|.webp)$")

const initState = {
    posts: [
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
                require('./websiteContent/blog/venera/veneraAudioRecording.wav')
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
    ],

    albumReviews: [
        {
            linkRym: "https://rateyourmusic.com/release/album/yes/fly-from-here/",
            linkYoutube: "https://www.youtube.com/watch?v=SEs-i9kMpKg",
            artistName: "Yes",
            albumName: "Fly From Here",
            yearOfRelease: "2011",
            genres: ["Progressive rock", "Symphonic prog", "Progressive pop"],
            myRating: "10",
            myReview: "Truly one of the most grandiose, epic, uplifting musical experiences of my life. Every song absolutley bangs, flows perfectly, and as an album experience it just all feels so cohesive and well-crafted. Solitaire is undoubetley one of the weaker tracks on the album, but its not bad, better than most acoustic tracks you find on any other prog album in my opinion. It will forever baffle me why more people don't adore this album as much as I do. Shame they had to go and ruin that with the shitty 'remaster' in 2018 with no Benoît David.",
            myTrackRatings: {
                "Fly From Here: Overture": "9.0",
                "Fly From Here, Part I: We Can Fly": "10.0",
                "Fly From Here, Part II: Sad Night At The Air Field": "10.0",
                "Fly From Here, Part III: Madman At The Scenes": "10.0",
                "Fly From Here, Part IV: Bumpy Ride": "10.0",
                "Fly From Here, Part V: We Can Fly (Reprise)": "10.0",
                "The Man You Always Wanted To Be": "10.0",
                "Life On A Film Set": "10.0",
                "Hour Of Need": "10.0",
                "Solitaire": "8.0",
                "Into The Storm": "9.5"
            }
        }
    ],

    filmReviews: [
        {
            "letterboxdUrl": "https://boxd.it/81lO",
            "title": "White God",
            "myRating": "9.2",
            "myTags": ["Emotional", "Friendship", "Forgiveness", "Animal welfare", "Great cinematography", "The universal power of music", "Budapest"],
            "customPosterUrl": require('./websiteContent/films/white_god/custom_poster.webp'),
            "screenshots": [
                require('./websiteContent/films/white_god/screenshot1.webp'),
                require('./websiteContent/films/white_god/screenshot2.webp'),
                require('./websiteContent/films/white_god/screenshot3.webp'),
            ],
            "myReview": ReactDomServer.renderToString(WhiteGodReview([
                require('./websiteContent/films/white_god/screenshot1.webp'),
                require('./websiteContent/films/white_god/screenshot2.webp'),
                require('./websiteContent/films/white_god/screenshot3.webp'),
            ])),
        },
        {
            "letterboxdUrl": "https://boxd.it/2sXo",
            "title": "Flatland: The Film",
            "myRating": "10",
            "myTags": ["Dimensionality", "Questioning reality", "Perspective", "Mathematics", "War", "Corruption", "Emotional"],
            "screenshots": [
                require('./websiteContent/films/flatland/screenshot1.webp'),
                require('./websiteContent/films/flatland/screenshot2.webp'),
                require('./websiteContent/films/flatland/screenshot3.webp'),
            ],
            "myReview": ReactDomServer.renderToString(FlatlandReview([
                require('./websiteContent/films/flatland/screenshot1.webp'),
                require('./websiteContent/films/flatland/screenshot2.webp'),
                require('./websiteContent/films/flatland/screenshot3.webp'),
            ])),
        },
        {
            "letterboxdUrl": "https://boxd.it/1Xag",
            "title": "Feast",
            "myRating": "7.6",
            "myTags": ["Creature-feature", "One-location", "Survival", "Fun", "Cool practical effects"],
            "myReview": "",
            "screenshots": [
                require('./websiteContent/films/feast/screenshot1.webp'),
                require('./websiteContent/films/feast/screenshot2.webp'),
                require('./websiteContent/films/feast/screenshot5.webp'),
            ],
            "customPosterUrl": require('./websiteContent/films/feast/custom_poster.webp')
        },
        {
            "letterboxdUrl": "https://boxd.it/AF4",
            "customPosterUrl": require('./websiteContent/films/the_secret_world_of_arrietty/custom_poster.webp'),
            "title": "The Secret World of Arrietty",
            "myRating": "9.1",
            "myTags": ["Humanity and nature coexisting", "Friendship", "Kindness", "Embrace mother nature", "Evolving perspective of life", "Intimate", "Colourful", "Great cinematography", "Great soundtrack", "Girl power"],
            "screenshots": [
                require('./websiteContent/films/the_secret_world_of_arrietty/screenshot1.webp'),
                require('./websiteContent/films/the_secret_world_of_arrietty/screenshot2.webp'),
                require('./websiteContent/films/the_secret_world_of_arrietty/screenshot3.webp'),
            ],
            "myReview": ReactDomServer.renderToString(ArriettyReview([
                require('./websiteContent/films/the_secret_world_of_arrietty/screenshot1.webp'),
                require('./websiteContent/films/the_secret_world_of_arrietty/screenshot2.webp'),
                require('./websiteContent/films/the_secret_world_of_arrietty/screenshot3.webp'),
            ])),
        },
        {
            "letterboxdUrl": "https://boxd.it/fb0K",
            "title": "A Ghost Story",
            "myRating": "10",
            "customPosterUrl": require('./websiteContent/films/a_ghost_story/custom_poster.webp'),
            "myTags": ["Death", "Life", "Vast", "Cosmic", "Beyond existence", "Mysterious", "Creative use of lighting", "Creative use of aspect ratio", "Great soundtrack"],
            "screenshots": [
                require('./websiteContent/films/a_ghost_story/screenshot1.webp'),
                require('./websiteContent/films/a_ghost_story/screenshot2.webp'),
                require('./websiteContent/films/a_ghost_story/screenshot3.webp'),
            ],
            "myReview": ReactDomServer.renderToString(AGhostStoryReview([
                require('./websiteContent/films/a_ghost_story/screenshot1.webp'),
                require('./websiteContent/films/a_ghost_story/screenshot2.webp'),
                require('./websiteContent/films/a_ghost_story/screenshot3.webp'),
            ])),
        },
        {
            "letterboxdUrl": "https://boxd.it/2BiY",
            "title": "Detachment",
            "myRating": "9.1",
            "myTags": ["School", "Teacher-student dichotomy", "Addiction", "Profound", "Melancholic", "Kindness", "Sad", "Depressing"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/lw1wlekuMMKxmYg7v01vB7Snkq6.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/tbEe",
            "title": "Belle",
            "titleDisplayed": "Belle: The Dragon and the Freckled Princess",
            "myRating": "9.0",
            "myTags": ["Virtual world", "Social media", "Bullying", "Friendship", "Sad", "Great soundtrack", "Colourful", "Anime", "Girl power"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/sp0LOwp7dVeF2c2fn9l422O5cdb.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/cOo6",
            "title": "Sing Street",
            "myRating": "10",
            "myTags": ["Great soundtrack", "Emotional", "Uplifting", "Happy-Sad", "Soulmate", "Dublin", "New wave 80s music"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/hUMe",
            "title": "Aniara",
            "myRating": "9.5",
            "myTags": ["The incomprehensible vastness of space", "Civilisation on spaceship", "Contemplative sci-fi", "Virtual world", "Mysterious", "Creepy", "Dystopia", "Exploring the dark depths of humanity"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/aniara/custom_poster.webp')
        },
        {
            "letterboxdUrl": "https://boxd.it/bjvI",
            "title": "Tag",
            "myRating": "8.4",
            "myTags": ["Fun", "Stochasticity", "Determinism", "Randomness", "Simulation", "Running", "Girl power"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/eYqjakKlMOG7VvmyLqdckYJM8h8.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/e1Ga",
            "title": "The Nightingale",
            "myRating": "9.4",
            "myTags": ["Revenge-fantasy", "Tasmania", "1825", "Aboriginal people", "The evil British empire", "Seeking closure", "Getting revenge on evil people", "Challenging to watch at times", "Embrace mother nature", "Intense", "Soulmate"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/26uY",
            "title": "Pleasantville",
            "myRating": "9.5",
            "myTags": ["Creative use of colour", "Virtual world", "Celebration of art", "Finding happiness", "Revolution", "Fuck the system"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/pleasantville/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/jpmy",
            "title": "Waves",
            "myRating": "10",
            "myTags": ["Death", "Creative use of colour", "Unconvential aspect ratios", "Emotional", "Family", "Forgiveness", "Kindness", "Great soundtrack", "Colourful", "Finding happiness"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/iDYOOa2Fii2ynvOlTdGGr75TuPx.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/29Wm",
            "title": "Life Is Beautiful",
            "myRating": "10",
            "myTags": ["Emotional", "Finding happiness", "Turning negatives into positives", "Family", "War"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/life_is_beautiful/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/dgRU",
            "title": "mother!",
            "myRating": "9.1",
            "myTags": ["Intense", "Polarising", "One-location", "Challenging to watch at times", "Religion", "Exploring the dark depths of humanity", "Disturbing"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/mother/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/1JAY",
            "title": "Kiki's Delivery Service",
            "myRating": "8.7",
            "myTags": ["Endearing", "Happiness", "Growing up", "Discovering independence", "Finding yourself", "Soulmate", "Flying", "Positive reflection on witches", "Utopia", "Anime", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/4JQS",
            "title": "The Wind Rises",
            "myRating": "10",
            "myTags": ["Growing up", "Engineering", "War", "Flying", "Soulmate", "Finding yourself", "Anime", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/the_wind_rises/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/2bc6",
            "title": "Nausica\u00e4 of the Valley of the Wind",
            "myRating": "9.2",
            "myTags": ["Humanity and nature coexisting", "Embrace mother nature", "End of the world", "Dystopia", "Flying", "Great Soundtrack", "Girl power"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/nausicaa/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/2b1i",
            "title": "Akira",
            "myRating": "8.6",
            "myTags": ["End of the world", "Profound", "Conspiracy", "War", "Colourful", "Great soundtrack", "Anime", "Confusing"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/b6icR6m7WlKhZfEumeNQ181yDDg.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/iKDo",
            "title": "Hatching",
            "myRating": "7.9",
            "myTags": ["Brutal", "Doppelganger", "Disturbing", "Metamorphosis", "Creature-feature", "Social media", "Fake celebrity personas"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/aJBeIOneNaNP779rYQ3uPJCIOLA.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/amSe",
            "title": "Victoria",
            "myRating": "8.5",
            "myTags": ["One-take", "Melancholic", "Friendship", "Great soundtrack", "Melancholic", "Nightlife", "BreakingBad-ish", "Accidently getting involved in crimminal activity", "Berlin"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/1koMqkomlAFORjooFJtQEVVgiSG.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/u7LW",
            "title": "Kimi",
            "myRating": "7.9",
            "myTags": ["Covid setting", "Conspiracy", "Mysterious", "Isolation", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/im91Ho4WkhVroehZJiIUoOF6UIl.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1pDe",
            "title": "Love Exposure",
            "myRating": "8.1",
            "myTags": ["Exploring the dark depths of humanity", "Challenging to watch at times", "Very long", "Great soundtrack", "Poetic", "Profound", "Friendship", "Religion"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/love_exposure/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/1ZTM",
            "title": "The Thin Red Line",
            "myRating": "9.5",
            "myTags": ["Melancholic", "Contemplative", "War", "Poetic", "Profound", "Great cinematography", "Exploring the dark depths of humanity", "Very long"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/seMydAaoxQP6F0xbE1jOcTmn5Jr.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1k44",
            "title": "Mr. Nobody",
            "myRating": "9.7",
            "myTags": ["Poetic", "Profound", "The many possibilities of life", "Beyond existence", "Immortality", "Confusing", "Randomness", "Emotional", "Utopia", "Futuristic", "Family", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/aPMO",
            "title": "The Brand New Testament",
            "myRating": "10",
            "myTags": ["Religion", "Fun"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/the_brand_new_testament/custom_poster.webp')
        },
        {
            "letterboxdUrl": "https://boxd.it/3Icg",
            "title": "Snowpiercer",
            "myRating": "9.5",
            "myTags": ["Total escapism", "Dystopia", "Train", "Snow", "Class", "Poverty", "Humanity condensed into a small location", "Futuristic", "One-location"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/snowpiercer/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/28Uk",
            "title": "Rocky",
            "myRating": "8.2",
            "myTags": ["Deeply human", "Inspiring", "Being the underdog", "Soulmate", "Sport"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/hEjK9A9BkNXejFW4tfacVAEHtkn.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1W68",
            "title": "Happy-go-Lucky",
            "myRating": "9.3",
            "myTags": ["A slice of life", "Finding happiness", "Friendship", "Finding yourself", "Stoicism", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Iik",
            "title": "District 9",
            "myRating": "9.6",
            "myTags": ["Total escapism", "Intimate story within epic sci-fi plot", "Aliens", "Metamorphosis", "Exploring the dark depths of humanity"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/i7Q4",
            "title": "Sound of Metal",
            "myRating": "9.4",
            "myTags": ["A slice of life", "Metal", "Finding yourself", "Stoicism", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/sound_of_metal/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/28yy",
            "title": "Apocalypto",
            "myRating": "9.3",
            "myTags": ["Total escapism", "Ancient mayan civilisation", "Architecture", "Amazing set design", "Revenge-fantasy", "Brutal", "Not giving up despite being in a shitty situation"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Bn8",
            "title": "Exte: Hair Extensions",
            "myRating": "8.3",
            "myTags": ["Brutal", "Metamorphosis", "Fun", "Mad concept"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/qyHtXQchUu7DpeUNabDFIVnBRtq.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/d99c",
            "title": "A Silent Voice: The Movie",
            "titleDisplayed": "A Silent Voice",
            "myRating": "8.0",
            "myTags": ["Bullying", "Forgiveness", "Anime", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/rgKWgY1pJ0bolXu2YhYPN4frkpd.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/29I0",
            "title": "Face/Off",
            "myRating": "8.1",
            "myTags": ["Total escapism", "Fun", "Mad concept", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/69Xzn8UdPbVnmqSChKz2RTpoNfB.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1En6",
            "title": "Zombieland",
            "myRating": "7.9",
            "myTags": ["Zombies", "Fun", "Short but effective", "Great character chemistry", "Nostalgic"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/376g",
            "title": "Seeking A Friend For The End Of The World",
            "myRating": "8.0",
            "myTags": ["End of the world", "Death", "Soulmate", "Uplifting", "Great character chemistry", "Stoicism", "Turning negatives into positives"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/rBbCwFLyt7Q25yaw2bEOQh7RMG1.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/iwYi",
            "title": "Crawl",
            "myRating": "7.6",
            "myTags": ["Total escapism", "Creature-feature", "One-location", "Claustrophobic", "Hurricane setting", "Brutal", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/crawl/custom_poster.webp')
        },
        {
            "letterboxdUrl": "https://boxd.it/dCpo",
            "title": "Jungle",
            "myRating": "7.8",
            "myTags": ["Embrace mother nature", "Alone in the wilderness", "South American culture", "Jungle setting", "Not giving up despite being in a shitty situation", "Brutal", "Hallucinations"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/tDgxknTVwrScxpCYyGUjXSn5NRk.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2pQ0",
            "title": "Redline",
            "myRating": "8.2",
            "myTags": ["Intricate animation style", "Intepretation of an intergalactic lifestyle", "Fictional racing event", "Audio-visual spectacle", "Intense", "Great soundtrack", "Anime"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/tuIO78Emr8katcv9sk4HONeLdNT.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/gvme",
            "title": "MFKZ",
            "myRating": "8.0",
            "myTags": ["Intricate animation style", "South American culture", "Mad concept", "Superheros", "Great cinematography", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/4pDO",
            "title": "The Lego Movie",
            "myRating": "8.2",
            "myTags": ["Intricate animation style", "Uplifting", "Fun"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Yqu",
            "title": "Martyrs",
            "myRating": "8.3",
            "myTags": ["Challenging to watch at times", "Brutal", "Claustrophobic", "Exploring the dark depths of humanity", "Very long", "Disturbing", "Not one to watch with the family"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/2PmVlnPVG8tGXqC85YiHzL0jX40.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/uRS",
            "title": "Confessions",
            "myRating": "8.2",
            "myTags": ["Audio-visual spectacle", "Poetic", "Exploring the dark depths of humanity", "Cognitive dissonance", "Confusing", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/confessions/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/20Xg",
            "title": "Chicken Run",
            "myRating": "8.1",
            "myTags": ["Fun", "Kids film", "Animal welfare", "Emotional", "Great soundtrack", "Nostalgic"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/eyAux0xsqSaCthc1wY6mQjZjS4A.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/26vi",
            "title": "In The Mouth of Madness",
            "myRating": "8.3",
            "myTags": ["Lovecraftian horror", "Creature-feature", "Questioning reality", "Hallucinations", "Cults"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/bNh5iySaJ15tvLjGrYsw1JNhx8l.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/bdkE",
            "title": "The Red Turtle",
            "myRating": "8.3",
            "myTags": ["Alone in the wilderness", "Embrace mother nature", "Friendship", "Dialogueless", "Fairy tale", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2W60",
            "title": "Cloud Atlas",
            "myRating": "8.3",
            "myTags": ["Very long"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/cloud_atlas/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/9fLy",
            "title": "The Wailing",
            "myRating": "8.4",
            "myTags": ["Possessed", "Paranormal", "Exorcism", "Brutal", "Tribal", "Mysterious"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/lWE9ih9qgjx8HatYboP7fG0nri.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/72i",
            "title": "Finding Nemo",
            "myRating": "8.2",
            "myTags": ["Fun", "Nostalgic", "Kids film", "Friendship", "Family"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2bcg",
            "title": "Before Sunset",
            "myRating": "10",
            "myTags": ["Poetic", "Travelling", "Profound", "Happy-sad", "A slice of life"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1YzQ",
            "title": "The Nightmare Before Christmas",
            "myRating": "8.4",
            "myTags": ["Stumbling across the prospect of happiness", "Creature-feature", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/oQffRNjK8e19rF7xVYEN8ew0j7b.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/azew",
            "title": "Hacksaw Ridge",
            "myRating": "8.2",
            "myTags": ["War", "Finding positives out of negatives", "Not giving up despite being in a shitty situation", "Inspiring", "Brutal"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/hacksaw_ridge/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/amAY",
            "title": "Eddie the Eagle",
            "myRating": "10",
            "myTags": ["Inspiring", "Uplifting", "Proving people wrong", "Being the underdog", "Finding yourself", "Soulmate", "Friendship"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/eddie_the_eagle/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/dUu2",
            "title": "The Autopsy of Jane Doe",
            "myRating": "8.3",
            "myTags": ["Creepy", "Disturbing"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/6K0wjP8kPCiPYy9PtXBGuypyt5I.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/FKS",
            "title": "The Man Who Planted Trees",
            "myRating": "8.5",
            "myTags": ["Alone in the wilderness", "Embrace mother nature", "Poetic", "Profound", "Humanity and nature coexisting", "Nature thriving", "The ebb-and-flow of nature"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/un0NjREDaLEWWOTr7tE52MjQY6O.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/28YG",
            "title": "Bridge to Terabithia",
            "myRating": "8.7",
            "myTags": ["Sad", "Depressing", "Soulmate", "Alone in the wilderness", "Friendship", "Imagination"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1WyQ",
            "title": "Fantastic Mr. Fox",
            "myRating": "8.6",
            "myTags": ["Intricate animation style", "Animal welfare", "Humanity and nature coexisting", "Fun", "Friendship", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/fantastic_mr_fox/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/dZrW",
            "title": "Isle of Dogs",
            "myRating": "8.9",
            "myTags": ["Intricate animation style", "Great cinematography", "Animal welfare", "Humanity and nature coexisting", "Fun", "Friendship", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl":  "https://www.themoviedb.org/t/p/original/rSluCePdXXtNiQeE6Na5yRGamhL.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2bcK",
            "title": "Memento",
            "myRating": "8.0",
            "myTags": ["Non-linear timeline", "Confusing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/i4IQ",
            "title": "I'm Thinking of Ending Things",
            "myRating": "8.3",
            "myTags": ["Atmospheric", "Confusing", "Weird", "Snow", "Intimate", "Lonely", "Creepy"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/iCEeZ9Lkzx5Pw72BoSpbystzTpV.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/iIWS",
            "title": "The Empty Man",
            "myRating": "8.3",
            "myTags": ["Atmospheric", "Confusing", "Snow", "Weird", "Disturbing", "Creepy"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/hsueWFGkuXFOnKAxzoYUMUDA9T3.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/210u",
            "title": "Alive",
            "myRating": "8.4",
            "myTags": ["Survival story", "Not giving up despite being in a shitty situation", "Brutal", "Snow", "Alone in the wilderness"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/uQACcCZqd7WCTRin9xRIW5gr1bd.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/dgSy",
            "title": "Split",
            "myRating": "8.5",
            "myTags": ["Claustrophobic", "Disturbing", "Multiple personality disorder"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/kBvO58pt13dgYImjZNjq6QiOT8n.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/25Vu",
            "title": "1408",
            "myRating": "8.5",
            "myTags": ["Claustrophobic", "Disturbing", "One-location", "Atmospheric"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/zEaMTpG71O0NN7XlQwYyaWVpTyX.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/kJyc",
            "title": "The Vast of Night",
            "myRating": "8.1",
            "myTags": ["Atmospheric", "Mysterious", "Melancholic", "Search for Extra Terrestrial Intelligence (SETI)", "Radio station", "One-take"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/q2P9lYkctl5Ory71HEBMaFxbVlD.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/Tdy",
            "title": "Monsters",
            "myRating": "7.9",
            "myTags": ["Atmospheric", "Melancholic", "Aliens", "Soulmate", "Travelling", "Alone in the wilderness", "Virus", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/lH6oWfGjwnM81Nzu8vipx9OfPmv.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1yBw",
            "title": "Pontypool",
            "myRating": "8.0",
            "myTags": ["Atmospheric", "Mysterious", "Zombies", "Virus", "Radio station", "Starts bad but gets a lot better"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2a2k",
            "title": "Titanic",
            "myRating": "8.4",
            "myTags": ["Nostalgic", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/ljDs",
            "title": "RRR",
            "titleDisplayed": "Rise Roar Revolt",
            "myRating": "8.2",
            "myTags": ["Indian culture", "Kindness", "The evil British empire", "Poverty", "Friendship", "Great cinematography", "Very long", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ljHw5eIMnki3HekwkKwCCHsRSbH.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/dvXe",
            "title": "Okja",
            "myRating": "7.7",
            "myTags": ["Animal welfare", "Ends a bit weak but the rest is great", "Conspiracy"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/9ghu",
            "title": "The Age of Adaline",
            "myRating": "8.0",
            "myTags": ["Mad concept", "Timey-wimey"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/the_age_of_adaline/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1YIe",
            "title": "The Fly",
            "myRating": "7.9",
            "myTags": ["Mad concept", "Metamorphosis", "Creature-feature", "Disturbing"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/z1XdsalC4fZlzCa5Vu06QLBUhyW.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2Y3M",
            "title": "Safety Not Guaranteed",
            "myRating": "7.8",
            "myTags": ["Time travel", "Soulmate", "Friendship", "Fun", "Quirky"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1VfS",
            "title": "After Hours",
            "myRating": "8.0",
            "myTags": ["Claustrophobic", "Conspiracy", "Nightlife", "Disturbing", "Quirky", "Accidently getting involved in crimminal activity"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/9NyT0qHwVDsazubfSwLxt6fR7Ym.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/gc1Q",
            "title": "Arctic",
            "myRating": "7.8",
            "myTags": ["Alone in the wilderness", "Dialogueless", "Just 2 actors", "Snow", "Survival story"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/w9GVlRteCgY103DN8CdFik3HUhO.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1GXU",
            "title": "Castaway on the Moon",
            "myRating": "8.2",
            "myTags": ["Alone in the wilderness", "Survival story", "Soulmate", "Finding yourself", "Humanity and nature coexisting", "Quirky", "Lonelyness"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/cHwspwAQwZNCTOhcquvXoGop0SQ.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/wMAk",
            "title": "Marcel the Shell with Shoes On",
            "myRating": "8.0",
            "myTags": ["Quirky", "Endearing", "Poetic", "Mokumentary", "Fun", "Friendship", "Finding your people", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/jaYmP4Ct8YLnxWAW2oYkUjeXtzm.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/4W9M",
            "title": "Oculus",
            "myRating": "8.0",
            "myTags": ["Disturbing", "Questioning reality", "Non-linear timeline"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/oculus/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/i5vI",
            "title": "Doctor Sleep",
            "myRating": "7.8",
            "myTags": ["Disturbing", "Atmospheric"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/p69QzIBbN06aTYqRRiCOY1emNBh.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/23nq",
            "title": "Severance",
            "myRating": "7.7",
            "myTags": ["Fun", "Disturbing", "Claustrophobic", "Alone in the wilderness", "Revenge-fantasy", "British humour"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/yg1XRTyH5knwh3Tnij2sUV0ZZ5w.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/203C",
            "title": "Creep",
            "myRating": "7.7",
            "myTags": ["Disturbing", "Claustrophobic", "Stuck underground", "Gross", "London", "Homelessness", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/29zs",
            "title": "Se7en",
            "myRating": "7.7",
            "myTags": ["Crime", "Murder mystery", "Mysterious", "Atmospheric"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/GQP6noTBKsYiAYyn8PYXFcsSgH.jpg",
        },
        {
            "letterboxdUrl": "https://boxd.it/pSAG",
            "title": "Cadaver",
            "myRating": "8.1",
            "myTags": ["Atmospheric", "Post-apocalypse society", "Conspiracy", "Stuck underground", "Layered", "Mysterious", "Loss of identity", "Cults"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/cadaver/custom_poster.webp'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1MTO",
            "title": "Speak",
            "myRating": "7.8",
            "myTags": ["Sad", "Art", "School setting", "Friendship", "Teacher-student dichotomy"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/kxQ9lRgC3tMVNPzLMFsiOK8H8fn.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/bkFu",
            "title": "Nocturnal Animals",
            "myRating": "7.7",
            "myTags": ["Atmospheric", "Mysterious", "Murder mystery", "Confusing", "Non-linear timeline", "Story within a story", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/6zTRty2REwxljziiWyrRbgOwAo7.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/i3a4",
            "title": "Ut\u00f8ya: July 22",
            "myRating": "8.0",
            "myTags": ["One-take", "Based on true events", "Terroism", "Brutal", "Intense", "Survival story", "Norweigan island", "Challenging to watch at times"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/vRTNX2KhxwSXynzxWQrJMW5kLFi.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/oIv0",
            "title": "Shiva Baby",
            "myRating": "7.7",
            "myTags": ["One-location", "Claustrophobic", "Jewish culture", "Funny", "Family gathering"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/rRA",
            "title": "Another Earth",
            "myRating": "7.7",
            "myTags": ["Melancholic", "Mysterious", "Quirky", "Forgiveness", "Friendship", "Futuristic", "Contemplative sci-fi"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Y6O",
            "title": "Starman",
            "myRating": "7.6",
            "myTags": ["Death",  "Alien visitor disguised as human", "Melancholic", "Mysterious", "Quirky", "Forgiveness", "Soulmate", "Aliens", "Not a shit John Carpenter film", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/starman/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/5ppu",
            "title": "Dead Set",
            "myRating": "8.3",
            "myTags": ["Zombies", "Depressing", "Brutal", "Gory", "Social commentary", "Mini-series but it might as well be a long film"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/j6Ja8AyVxbeUgGAD3nGr1jV1nwX.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2aYo",
            "title": "K-PAX",
            "myRating": "8.1",
            "myTags": ["Melancholic", "Mysterious", "Alien visitor disguised as human", "Search for Extraterrestrial Intelligence (SETI)", "Quirky", "Mental hospital"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/vJqhlC6QNXFxFhJ02kg1CFtcaa.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2bf0",
            "title": "2001: A Space Odyssey",
            "myRating": "8.2",
            "myTags": ["Mysterious", "Grand", "Great cinematography", "Minimal dialogue", "Artificial Intelligence"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/zmmYdPa8Lxx999Af9vnVP4XQ1V6.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/SLa",
            "title": "127 Hours",
            "myRating": "8.6",
            "myTags": ["Alone in the wilderness", "Survival story", "Based on true events", "Hallucinations", "Questioning reality", "Minimal dialogue", "One-location"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/zHOZLYsfykHWhYAsC4MN09xKP9F.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2ZA8",
            "title": "The Perks of Being a Wallflower",
            "myRating": "8.2",
            "myTags": ["School setting", "Friendship", "Great chemistry between characters", "A slice of life", "Soulmate"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/the_perks_of_being_a_wallflower/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1Z5C",
            "title": "The Faculty",
            "myRating": "8.2",
            "myTags": ["Creature-feature", "School setting", "Metamorphosis", "Fun", "Mysterious"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/5XetJwmAiDC0EtH23NIXaqFn3Wl.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2bde",
            "title": "War of the Worlds",
            "myRating": "8.4",
            "myTags": ["Aliens", "End of the world", "War", "Total escapism", "Intense"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/pwppVd91qtkxEV0TKxGe3J6k4SU.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/p3O8",
            "title": "The Map of Tiny Perfect Things",
            "myRating": "8.6",
            "myTags": ["Time loop", "Friendship", "Soulmate", "Turning negatives into positives", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/6y3ev0rJFbHA1hU22UPmmfzBjrG.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/200I",
            "title": "The Exorcism of Emily Rose",
            "myRating": "8.5",
            "myTags": ["Exorcism", "Disturbing", "Court scenario"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1BPm",
            "title": "Possession",
            "myRating": "8.5",
            "myTags": ["Possession", "Disturbing", "Depressing", "Gross", "Challenging to watch at times"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/sz6IXLRJu58EBRpUuRFKxo4d6lf.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/a5fa",
            "title": "La La Land",
            "myRating": "8.7",
            "myTags": ["Uplifting", "Finding yourself", "Friendship", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/T1C",
            "title": "Another Year",
            "myRating": "8.3",
            "myTags": ["A slice of life", "Gardening", "Finding happiness", "The ebb-and-flow of nature", "Forgiveness", "Melancholic", "British humour", "Depressing"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/zrkQcAatfBox5x9KZjaYGnKoqu6.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/fVJQ",
            "title": "A Quiet Place",
            "myRating": "8.7",
            "myTags": ["Minimal dialogue", "Atmospheric", "Intense", "Aliens", "Post-apocalypse society"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2Pa",
            "title": "The Girl With The Dragon Tattoo",
            "myRating": "8.4",
            "myTags": ["Atmospheric", "Murder mystery", "Mysterious", "Gross", "Conspiracy"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/the_girl_with_the_dragon_tattoo/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/H4k",
            "title": "Insidious",
            "myRating": "9.3",
            "myTags": ["Disturbing", "Terrifying", "Possession"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/tmlDFIUpGRKiuWm9Ixc6CYDk4y0.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/5n0s",
            "title": "Europa Report",
            "myRating": "8.5",
            "myTags": ["Contemplative sci-fi", "Profound",  "Amazing CGI", "Found footage", "Mokumentary", "Exploration of untouched places in the solar system that may harbour unique lifeforms"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/europa_report/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/s2S",
            "title": "Beginners",
            "myRating": "8.7",
            "myTags": ["Friendship", "Soulmate", "Forgiveness", "Melancholic", "Depressing", "Honest"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/20ZQ",
            "title": "Carrie",
            "myRating": "8.7",
            "myTags": ["Bullying", "Satan", "Possession", "Telekenesis", "School setting"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/8tT1rqlsTguyfUBMrbHR9cv1rxM.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2a70",
            "title": "The Ring",
            "myRating": "8.4",
            "myTags": ["Atmospheric", "Total escapism", "Great cinematography", "Mysterious", "Death", "Gross", "Murder mystery"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/29PA",
            "title": "Aliens",
            "myRating": "8.9",
            "myTags": ["Total escapism", "Aliens"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/aliens/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/MxG",
            "title": "Blue Valentine",
            "myRating": "8.7",
            "myTags": ["Melancholic", "Poetic", "Sad", "Depressing", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/dc8BdKnDY5Iy28KzUGtHIXuqqFK.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/d9YE",
            "title": "Notes on Blindness",
            "myRating": "8.8",
            "myTags": ["Poetic", "Contemplative", "Based on true events", "Turning negatives into positives", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/notes_on_blindness/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/i4a",
            "title": "Midnight In Paris",
            "myRating": "8.8",
            "myTags": ["Mad concept", "Nightlife", "Exploration of a new place", "Soulmate", "Friendship", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/3178",
            "title": "Boyhood",
            "myRating": "8.7",
            "myTags": ["A slice of life", "Finding yourself", "Family", "Friendship", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/boyhood/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1NhQ",
            "title": "Coraline",
            "myRating": "8.7",
            "myTags": ["Creepy", "Terrifying", "Intricate animation style", "Colourful"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/4jeFXQYytChdZYE9JYO7Un87IlW.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1ARc",
            "title": "Society",
            "myRating": "8.6",
            "myTags": ["Creature-feature", "Conspiracy", "Creepy", "Mysterious", "Social commentary"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/297o",
            "title": "Mulholland Drive",
            "myRating": "8.6",
            "myTags": ["Questioning reality", "Atmospheric", "Mysterious", "A story within a story", "Anti-Hollywood"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/aO5xuvfujX3cFg9evUVZuJlroEW.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1TKk",
            "title": "The Tenant",
            "myRating": "8.5",
            "myTags": ["Surrealist horror", "Xenophobia", "Isolation", "Hostility", "Paranoia", "Loss of identity", "Claustrophobic", "Conspiracy", "Living in flats"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/4Qhzb1ICFMqE3isWoln497qSH7n.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1KnQ",
            "title": "Fantastic Planet",
            "myRating": "8.7",
            "myTags": ["Surrealism", "Quirky", "Aliens", "Future society"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/prq0j1S0K07UjwLZLF6oMGflRUI.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/d1uG",
            "title": "Under the Shadow",
            "myRating": "8.6",
            "myTags": ["Terrifying", "War", "Spirits", "Possession", "Iran conflict", "Living in flats"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/9JNE",
            "title": "The Frame",
            "myRating": "8.7",
            "myTags": ["Contemplative sci-fi", "Mysterious", "Profound", "Questioning reality", "Simulation", "Creative use of framing"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2pTS",
            "title": "We Need To Talk About Kevin",
            "myRating": "8.5",
            "myTags": ["Arthouse psychological thriller", "Disturbing", "Evil psychotic child"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/auAmiRmbBQ5QIYGpWgcGBoBQY3b.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2ahu",
            "title": "Being John Malkovich",
            "myRating": "8.9",
            "myTags": ["Surrealist fantasy comedy", "Questioning reality", "Funny", "Quirky"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/xVSvIwRNzwXSs0CLefiiG6A96m4.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/20eA",
            "title": "My Neighbor Totoro",
            "myRating": "9.0",
            "myTags": ["Embrace mother nature", "Endearing", "Humanity and nature coexisting", "Nature thriving", "Colourful", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ykeaF3Ldz1Kf6sfnOJJH4dW56F4.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1Z2I",
            "title": "Phenomenon",
            "myRating": "8.7",
            "myTags": ["Uplifting", "Mysterious", "Awakanening-ish", "Soulmate"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/5eK1HNf0Kl2vDPOeqf1kX4SKxrw.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/mViE",
            "title": "Malignant",
            "myRating": "9.0",
            "myTags": ["Wild", "Great cinematography", "Murder mystery", "Amazing finale"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/malignant/custom_poster.webp')
        },
        {
            "letterboxdUrl": "https://boxd.it/2Wng",
            "title": "Moonrise Kingdom",
            "myRating": "8.9",
            "myTags": ["Quirky", "Great cinematography", "Friendship", "Great chemistry between characters"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/xrziXRHRQ7c7YLIehgSJY8GQBsx.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/aZiu",
            "title": "10 Cloverfield Lane",
            "myRating": "8.8",
            "myTags": ["Mysterious", "Claustrophobic", "One-location", "Creepy"],
            "myReview": "",
            "customPosterUrl":  "https://www.themoviedb.org/t/p/original/84Dhwz93vCin6T1PX6ctSvWEuNE.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2192",
            "title": "Cloverfield",
            "myRating": "8.8",
            "myTags": ["Found-footage", "Terrifying", "Wild", "Intense", "Aliens", "End of the world"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/qIegUGJqyMMCRjkKV1s7A9MqdJ8.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2ahY",
            "title": "Good Will Hunting",
            "myRating": "8.7",
            "myTags": ["Student teacher dichotomy", "Poetic", "Contemplative", "Learning"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/yK7xOCXGsrk0B26wCMNitRYzyDg.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1Zks",
            "title": "Slither",
            "myRating": "8.5",
            "myTags": ["Disgusting", "Gross", "Creature-feature", "Zombies", "Fun", "Wild", "Short but effective"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/slither/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/29gg",
            "title": "Gremlins",
            "myRating": "8.9",
            "myTags": ["Fun", "Gross", "Creature-feature", "Causing havoc in a fairly normal town"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/gremlins/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/gmVE",
            "title": "Vivarium",
            "myRating": "8.9",
            "myTags": ["Claustrophobic", "Terrifying", "Stuck somewhere"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/vivarium/custom_poster.webp')
        },
        {
            "letterboxdUrl": "https://boxd.it/6bJM",
            "title": "Predestination",
            "myRating": "8.8",
            "myTags": ["Mad concept", "Confusing", "Timey-wimey", "Very small cast"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/predestination/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/ppHI",
            "title": "Devs",
            "myRating": "8.6",
            "myTags": ["Contemplative sci-fi", "Conspiracy", "Quantum computing", "Religion", "Faith", "Randomness", "Determinism", "Harnessing the power of computers to do amazing things", "Great soundtrack", "Mini series but might as well be a long film"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/uv63iNWOh69bSJYJQZjiX6n8B3m.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/bYJQ",
            "title": "Coco",
            "myRating": "9.0",
            "myTags": ["Emotional", "Total escapism", "The universal power of music", "Friendship", "Deeper than a kids film", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/coco/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/4KHC",
            "title": "Inside Out",
            "myRating": "8.8",
            "myTags": ["Emotional", "Friendship", "Anger", "Clever analogy for real life feelinsg", "Layered", "Deeper than a kids film", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2aqc",
            "title": "The Pianist",
            "myRating": "9.0",
            "myTags": ["War", "Minimal", "Very small cast", "The universal power of music"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/jj4y",
            "title": "1917",
            "myRating": "9.1",
            "myTags": ["War", "One-take", "Not giving up despite being in a shitty situation", "Great soundtrack"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/29J8",
            "title": "Shaun of the Dead",
            "myRating": "9.1",
            "myTags": ["Zombies", "British humour", "Funny"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/20ma",
            "title": "[REC]",
            "myRating": "9.0",
            "myTags": ["Zombies", "Found-footage", "Brutal", "One-location", "Claustrophobic", "Satanic"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/kJ5hqacHVb9GLChkCZe8Bq4DmTI.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/jkPq",
            "title": "Portrait of a Lady on Fire",
            "myRating": "8.8",
            "myTags": ["Great cinematography", "Mysterious", "Melancholic", "France 1800s", "Art"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/dL2y",
            "title": "My Life as a Zucchini",
            "titleDisplayed": "My Life as a Courgette",
            "myRating": "8.9",
            "myTags": ["Stop motion animation", "Uplifting", "Finding happiness", "Friendship", "Emotional", "Endearing", "Soulmate", "Bad parenting"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/g91phMUr77Vw6uRmpIjH1hvZpov.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1EmM",
            "title": "500 Days of Summer",
            "titleDisplayed": "(500) Days of Summer",
            "myRating": "9.2",
            "myTags": ["Soulmate", "Non-linear timeline", "Emotional"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/gzu2",
            "title": "The Peanut Butter Falcon",
            "myRating": "9.3",
            "myTags": ["Uplifting", "Soulmate", "Alone in the wilderness", "Roadtrip", "Underdogs", "Cerebral palsy"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/i7xm",
            "title": "The Mitchells vs the Machines",
            "myRating": "9.1",
            "myTags": ["Intricate animation style", "End of the world", "Uplifting", "Family", "Social commentary"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1VEo",
            "title": "WALL\u00b7E",
            "myRating": "9.1",
            "myTags": ["Post-apocalypse", "Civilisation on spaceship", "Minimal dialogue", "Very small cast", "Emotional", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/walle/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1tQG",
            "title": "Triangle",
            "myRating": "9.3",
            "myTags": ["Time loop", "Non-linear timeline", "One-location", "On boat", "Mad concept"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/2416",
            "title": "Hot Fuzz",
            "myRating": "9.3",
            "myTags": ["Murder mystery", "British humour", "Funny"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/1Yoo",
            "title": "The Exorcist",
            "myRating": "9.0",
            "myTags": ["Terrifying", "Exorcism"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/gL9g",
            "title": "Revenge",
            "myRating": "9.2",
            "myTags": ["Revenge-fantasy thriller", "Challenging to watch at times", "Girl power"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/revenge/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/28xA",
            "title": "It's a Wonderful Life",
            "myRating": "9.2",
            "myTags": ["Family", "Death", "Beyond existence"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/cS4",
            "title": "Rise of the Planet of the Apes",
            "myRating": "9.3",
            "myTags": ["Emotional"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/rise_of_the_planet_of_the_apes/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/2awa",
            "title": "Batman Returns",
            "myRating": "9.3",
            "myTags": ["Disturbing", "Weird", "Conspiracy", "Neogothic", "Neogothic architecture", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/batman_returns/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/iEBG",
            "title": "Jojo Rabbit",
            "myRating": "9.4",
            "myTags": ["War", "Emotional", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/yfT4bdrKKUZAjWD9Zii45nEN668.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/4VZ8",
            "title": "Interstellar",
            "myRating": "9.2",
            "myTags": ["Space exploration", "Timey-wimey"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/fX44bgxKQsS4P4ewb2iotHveEkn.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1Y2i",
            "title": "Children of Men",
            "myRating": "9.4",
            "myTags": ["Contemplative sci-fi", "Post-apocalypse society", "Near future technology"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/children_of_men/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/29OM",
            "title": "Contact",
            "myRating": "9.0",
            "myTags": ["Contemplative sci-fi", "Exploration beyond the solar system", "Alien technology", "Search for Extraterrestrial Intelligence (SETI)"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/wAhkO5iaVIkKBdpR9kvToHaNyKD.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/7T2k",
            "title": "Ex Machina",
            "myRating": "9.3",
            "myTags": ["Contemplative sci-fi", "Artificial Intelligence", "Revolution"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/ex_machina/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1MLK",
            "title": "The Sound of Music",
            "myRating": "9.3",
            "myTags": ["Uplifting", "Music", "War", "Britian 1960s", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/c6CrUZypAsBCaRWX0M3RVRDbhNS.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/3GPq",
            "title": "Evil Dead",
            "myRating": "8.8",
            "myTags": ["Brutal", "Gory", "Wild", "Satan", "Possession"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/evil_dead/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/29Ge",
            "title": "Evil Dead II",
            "myRating": "8.8",
            "myTags": ["Brutal", "Gory", "Wild", "Satan", "Possession", "Timey-wimey"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/b2La",
            "title": "Lion",
            "myRating": "9.4",
            "myTags": ["Poverty", "Family", "Emotional"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/lion/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/hTha",
            "title": "Parasite",
            "myRating": "9.3",
            "myTags": ["Claustrophobic", "Psychlogical thriller", "Quirky"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2b4w",
            "title": "Princess Mononoke",
            "myRating": "8.2",
            "myTags": ["Embrace mother nature", "Humanity and nature coexisting", "War", "Corruption", "Evil people in power", "Anime", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/princess_mononoke/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/7T0y",
            "title": "Room",
            "myRating": "9.1",
            "myTags": ["Claustrophobic", "Emotional", "Sad", "Recovering from trauma"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/28xK",
            "title": "School of Rock",
            "myRating": "10",
            "myTags": ["Uplifting", "Emotional", "The universal power of music", "School setting"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/5RFA",
            "title": "Birdman or (The Unexpected Virtue of Ignorance)",
            "myRating": "9.2",
            "myTags": ["One-take", "Inspiring", "Nightlife", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/birdman/custom_poster.jpeg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/kWlA",
            "title": "The Invisible Man",
            "myRating": "10",
            "myTags": ["Terrifying", "Total escapism", "Invisibility", "Creepy"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/the_invisible_man/custom_poster.webp'),
        },
        {
            "letterboxdUrl": "https://boxd.it/29Nu",
            "title": "The Shining",
            "myRating": "9.5",
            "myTags": ["Terrifying", "Atmospheric", "Snow", "One-location", "Possession", "Hallucinations", "Questioning reality"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/hNVe",
            "title": "Hereditary",
            "myRating": "8.2",
            "myTags": ["Terrifying", "Gross", "Family", "Betrayl", "Possession"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/hereditary/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/2a46",
            "title": "Monsters, Inc.",
            "myRating": "10",
            "myTags": ["Mad concept", "Emotional", "Nostalgic", "Endearing"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/monsters_inc/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/8H5e",
            "title": "The Revenant",
            "myRating": "9.5",
            "myTags": ["Alone in the wilderness", "Survival story", "Mississipi 1800s", "Based on a true story", "Brutal", "Betrayl", "Finding positives from negatives", "Not giving up despite being in a shitty situation", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/o6wunVSN9WI1obidUq3clGq65ZP.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2a3C",
            "title": "Silent Hill",
            "myRating": "9.7",
            "myTags": ["Atmospheric", "Disgusting", "Gross", "Creature-feature", "Cults", "Religion", "Satanic worshipers", "Foggy town", "Mysterious", "Video game adapatation", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/silent_hill/custom_poster.webp')
        },
        {
            "letterboxdUrl": "https://boxd.it/dZ5m",
            "title": "The Shape of Water",
            "myRating": "9.7",
            "myTags": ["Atmospheric", "Water", "Beautiful", "Melancholic", "Great soundtrack", "Minimal dialogue"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/r0bgHi3MwGHTKPWyJdORsb4ukY8.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1USu",
            "title": "Awakenings",
            "myRating": "10",
            "myTags": ["Sad", "Mental hosptital", "Depressing", "Awakanening-ish"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/9gztZXuHLG6AJ0fgqGd7Q43cWRI.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2b8e",
            "title": "Back to the Future",
            "myRating": "10",
            "myTags": ["Uplifting", "Timey-wimey"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ntLDP6LYTkxcUDVR0ud3aI0X4QH.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/18U8",
            "title": "The Truman Show",
            "myRating": "10",
            "myTags": ["Uplifting", "Conspiracy", "Questioning reality", "Religion", "Faith", "Beyond existence"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/29aC",
            "title": "Seven Years in Tibet",
            "myRating": "10",
            "myTags": ["Humanity and nature coexisting", "Exploring new places", "Mountaineering", "Tibet", "Dalia Lama", "Poetic", "Profound", "Great cinematography", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/seven_years_in_tibet/custom_poster.webp')
        },
        {
            "letterboxdUrl": "https://boxd.it/23Fk",
            "title": "The Curious Case of Benjamin Button",
            "myRating": "10",
            "myTags": ["A slice of life", "Death", "Humanity", "Friendship", "Profound"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/the_curious_case_of_benjamin_button/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/37pC",
            "title": "Life of Pi",
            "myRating": "10",
            "myTags": ["Exploring new places", "Survival story", "Based on a true story", "Stranded at sea"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/life_of_pi/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/2a1m",
            "title": "The Matrix",
            "myRating": "10",
            "myTags": ["Dystopia"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/eOCm",
            "title": "Get Out",
            "myRating": "10",
            "myTags": ["Psychlogical thriller", "Social commentary", "Terrifying"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/4O24",
            "title": "Her",
            "myRating": "10",
            "myTags": ["Lonleiness", "Artificial Intelligence", "Soulmate", "Melancholic", "Emotional", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/her/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/aNGk",
            "title": "Arrival",
            "myRating": "10",
            "myTags": ["Grand sci-fi", "Linguistics", "Non-linear timeline", "Timey-wimey", "Aliens", "Melancholic", "Emotional", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/arrival/custom_poster.png'),
        },
        {
            "letterboxdUrl": "https://boxd.it/1VGY",
            "title": "The Strangers",
            "myRating": "8.0",
            "myTags": ["Terrifying"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/eei83VHNaHFopOyxeFj5XI6LjLJ.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/3ybW",
            "title": "Helter Skelter",
            "myRating": "8.0",
            "myTags": ["Challenging to watch at times", "Audio-visual spectacle", "Addiction", "Isolation", "Fake celebrity personas", "Terrifying"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/helter_skelter/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/7t3Q",
            "title": "Starry Eyes",
            "myRating": "8.2",
            "myTags": ["Fake celebrity personas", "Terrifying", "Metamorphosis", "Challenging to watch at times", "Cults"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/t1sIumVCl91XThMoJqUjpERYeAM.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/fLeo",
            "title": "Don't Worry, He Won't Get Far On Foot",
            "myRating": "8.0",
            "myTags": ["Death", "Stoicism"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/iP9Fiq7O1v3CZ3ds0fZozFqESTk.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2a8W",
            "title": "Dogville",
            "myRating": "7.6",
            "myTags": ["Innovative", "One-location", "Depressing", "Challenging to watch at times"],
            "myReview": "",
            "customPosterUrl": require('./websiteContent/films/dogville/custom_poster.jpg'),
        },
        {
            "letterboxdUrl": "https://boxd.it/48WY",
            "title": "American Mary",
            "myRating": "7.8",
            "myTags": ["Disturbing", "Body modification"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/wAJ69oBFsJ4ocOrnANixIx52A0x.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/293w",
            "title": "The Prestige",
            "myRating": "8.0",
            "myTags": ["Magician"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/bdN3gXuIZYaJP7ftKK2sU0nPtEA.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/3SWy",
            "title": "The Secret Life of Walter Mitty",
            "myRating": "7.6",
            "myTags": ["Uplifting", "Exploring new places", "Discovering independence", "Soulmate"],
            "myReview": ""
        },
        {
            "letterboxdUrl": "https://boxd.it/dVI",
            "title": "Super 8",
            "myRating": "7.7",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/gUFHzEiJFgzGfwYvZv5opXHUJfo.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/77xu",
            "title": "The Babadook",
            "myRating": "8.1",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ArPWMf2leE6H9IIJ3tHVt6uewLR.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/oPSK",
            "title": "Infinity Pool",
            "myRating": "8.5",
            "myTags": ["Rebirth", "Hallucinogenic", "Psychedlic", "Vicious", "Disgusting", "Phantasmagoria", "Insecurity", "Ego", "Atmospheric", "Constantly surprising", "Defamiliarization", "Hedonistic", "Libertine"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 9, 8, 8, 8, 9, 9],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/5DNRr2juXdwtvktwXxwuk9Usk8O.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/on14",
            "title": "Poupelle of Chimney Town",
            "myRating": "8.2",
            "myTags": ["Heterodox thinker", "Religion", "Friendship", "Intricate animation style", "Textures", "Steampunk", "Colourful", "Exploring new places", "Anti-smoking"],
            "customPosterUrl": require('./websiteContent/films/poupelle_of_chimmney_town/custom_poster.webp'),
            "gradualInterest": [8, 8, 8, 8, 7, 7, 7, 8, 9, 9],
            "screenshots": [
                require('./websiteContent/films/poupelle_of_chimmney_town/screenshot1.webp'),
                require('./websiteContent/films/poupelle_of_chimmney_town/screenshot2.webp'),
                require('./websiteContent/films/poupelle_of_chimmney_town/screenshot3.webp'),
            ],
            "myReview": ReactDomServer.renderToString(PoupelleOfChimmneyTownReview([
                require('./websiteContent/films/poupelle_of_chimmney_town/screenshot1.webp'),
                require('./websiteContent/films/poupelle_of_chimmney_town/screenshot2.webp'),
                require('./websiteContent/films/poupelle_of_chimmney_town/screenshot3.webp'),
            ])),
        },
        {
            "letterboxdUrl": "https://boxd.it/y3U4",
            "title": "xxxHOLiC",
            "myRating": "9.0",
            "myTags": ["Dimensionality", "Audio-visual spectacle", "Positive reflection on witches", "Colourful", "Time loop"],
            "myReview": "",
            "gradualInterest": [9, 8, 8, 8, 8, 8, 8, 7, 8, 9, 9],
            "customPosterUrl": require('./websiteContent/films/xxxholic/custom_poster.webp')
        },
        {
            "letterboxdUrl": "https://boxd.it/25zS",
            "title": "Battle Royale",
            "myRating": "8.1",
            "myTags": ["Social commentary", "Great character depth"],
            "myReview": "",
            "gradualInterest": [6, 8, 9, 9, 9, 8, 8, 8, 8, 8, 7]
        },
        {
            "letterboxdUrl": "https://boxd.it/h2sY",
            "title": "In Fabric",
            "myRating": "8.3",
            "myTags": ["Atmospheric", "Ghosts", "Creepy", "Melancholic", "British humour", "Synthwave", "Great soundtrack"],
            "myReview": "",
            "gradualInterest": [8, 8, 9, 9, 8, 8, 8, 7, 7, 7, 7, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/y9QjwDLV5SAtRxYF5h1gRsDFaLd.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/6zhs",
            "title": "Miss Zombie",
            "myRating": "8.1",
            "myTags": ["Social commentary", "Zombies", "Black & white"],
            "myReview": "",
            "gradualInterest": [6, 5, 5, 6, 7, 8, 8, 9, 9],
            "customPosterUrl": require('./websiteContent/films/miss_zombie/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/23De",
            "title": "Howl’s Moving Castle",
            "myRating": "8.2",
            "myTags": ["War", "Magic", "Studio Ghibli"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 9, 9, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": require('./websiteContent/films/howls_moving_castle/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/A3E",
            "title": "Citadel",
            "myRating": "7.6",
            "myTags": ["Ireland", "Zombies", "Agoraphobia", "Disturbing", "Dark"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/uWPK",
            "title": "All My Friends Hate Me",
            "myRating": "7.6",
            "myTags": ["Social anxiety", "Cotswolds", "British humour"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/czBrEzJ7fzO4H8GzPerxJ6bP3kE.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1Qfo",
            "title": "Re-cycle",
            "myRating": "8.3",
            "myTags": ["Surreal", "Ghosts", "Abortion"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 9, 9, 9, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/1VhE",
            "title": "Them",
            "myRating": "7.5",
            "myTags": ["Claustrophobic", "Intense", "Home invasion"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 8, 8, 8, 8],
            "customPosterUrl": require('./websiteContent/films/them/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/lvxQ",
            "title": "Last Sunrise",
            "myRating": "8.7",
            "myTags": ["Astronomy", "Night skies", "End of the world", "Contemplative sci-fi", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 7, 8, 9, 9, 9],
            "customPosterUrl": require('./websiteContent/films/last_sunrise/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/NGk",
            "title": "The Tunnel",
            "myRating": "7.8",
            "myTags": ["Found footage", "Stuck underground", "Claustrophobic", "Frightening", "Creepy"],
            "myReview": "",
            "gradualInterest": [6, 6, 7, 7, 8, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/qyhw",
            "title": "Parasite in Love",
            "myRating": "8.2",
            "myTags": ["Another life-form trying to take control of a human mind", "Soulmate", "Social anxiety", "Scopophobia", "Study of unorthodox people who are outcasts from societal norms"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 7, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/gkFu",
            "title": "Guns Akimbo",
            "myRating": "8.1",
            "myTags": ["Intense", "Action genre done right", "Dystopian game"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/lpUk",
            "title": "Tokyo Vampire Hotel",
            "myRating": "9.2",
            "myTags": ["Intense", "The audience is thrown into a bizzare situation and forced to experience it", "Colourful", "Amazing soundtrack"],
            "myReview": "",
            "gradualInterest": [8, 9, 9, 9, 8, 8, 8, 9, 9, 9, 9, 8, 9, 9],
            "customPosterUrl": require('./websiteContent/films/tokyo_vampire_hotel/custom_poster.webp') 
        },
        {
            "letterboxdUrl": "https://boxd.it/14z6",
            "title": "Ritual",
            "myRating": "8.2",
            "myTags": ["Melancholic", "Loneliness", "Amazing soundtrack"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 7, 8, 8, 7, 9, 8, 8, 7, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/3WDKfLdU2FP8gjVcXTpNvV9fWdA.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/3Ipk",
            "title": "Wolf Children",
            "myRating": "7.9",
            "myTags": ["Nature", "Humanity and nature coexisting", "Summer", "Following characters through their lives as seasons pass by"],
            "myReview": "",
            "screenshots": [
                require('./websiteContent/films/wolf_children/screenshot7.webp'),
                require('./websiteContent/films/wolf_children/screenshot4.webp'),
                require('./websiteContent/films/wolf_children/screenshot1.webp'),
            ],
            "gradualInterest": [6, 6, 7, 7, 8, 8, 8, 9, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/h5Uw",
            "title": "Incident in a Ghostland",
            "myRating": "8.6",
            "myTags": ["Disturbing", "Harrowing", "Challenging to watch at times", "Intense", "Bleak", "Non-linear timeline"],
            "myReview": "",
            "gradualInterest": [7, 8, 8, 8, 8, 8, 9, 9, 9]
        },
        {
            "letterboxdUrl": "https://boxd.it/1oDC",
            "title": "Summer Wars",
            "myRating": "7.8",
            "myTags": ["End of the world", "Nature", "Summer", "Family", "Togetherness"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 7, 7, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/wuytCABUQRuJAmaGS5TOes7HSYx.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2b4m",
            "title": "Spirited Away",
            "myRating": "8.2",
            "myTags": ["Nature", "Japanese culture", "Ghosts", "Soulmate", "Studio ghibli"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 7, 8, 8, 8, 8, 8, 9, 9, 8],
            "customPosterUrl": require('./websiteContent/films/spirited_away/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/2V5K",
            "title": "Wrong",
            "myRating": "7.7",
            "myTags": ["Absurd", "Surreal", "Absurdist comedy", "Confusing"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 7, 8, 7, 8],
            "customPosterUrl": require('./websiteContent/films/wrong/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/vOri",
            "title": "Meet Cute",
            "myRating": "8.2",
            "myTags": ["Time travel", "Soulmate", "Loneliness", "Self-inflicted time loop", "Exploring the inner mechanism of the female mind"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 9, 8, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/6fWg",
            "title": "The Land of Cards",
            "myRating": "7.6",
            "myTags": ["Searching for freedom", "Starting a revolution", "Dictatorship", "Politics", "Poems"],
            "myReview": "",
            "gradualInterest": [6, 6, 5, 6, 6, 7, 9, 8, 8, 8, 8],
            "customPosterUrl": require('./websiteContent/films/the_land_of_cards/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/Bf6G",
            "title": "Fall",
            "myRating": "8.0",
            "myTags": ["Intense", "Fear of heights", "Survival story", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/257k",
            "title": "Black Sheep",
            "myRating": "7.5",
            "myTags": ["Funny", "Gory", "Absurd", "Creature-feature"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 8],
            "customPosterUrl": require('./websiteContent/films/black_sheep/custom_poster.png')
        },
        {
            "letterboxdUrl": "https://boxd.it/qIvo",
            "title": "Evil Dead Rise",
            "myRating": "8.2",
            "myTags": ["Gory", "Chaotic", "Intense", "Creature-feature"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/cXlFYrSIiRf80KYneHw4FE71u4j.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/P2m",
            "title": "Rubber",
            "myRating": "7.7",
            "myTags": ["Absurd", "Absurdist comedy", "Breaking the fourth wall"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 7, 7],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/3CtcLwXVvnMdKBAhzejPaNtTDym.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/kOf0",
            "title": "Ready or Not",
            "myRating": "8.2",
            "myTags": ["Suprising", "Fun", "Intense"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 8, 8, 9]
        },
        {
            "letterboxdUrl": "https://boxd.it/25jq",
            "title": "The Broken",
            "myRating": "7.6",
            "myTags": ["Confusing", "Suspensful", "Atmospheric", "Murky", "Doppelganger", "Trauma", "Mental illness", "Unknown entities disguised as humans"],
            "myReview": "",
            "gradualInterest": [6, 7, 7, 7, 8, 8, 7, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/c7WsgY4jPAvN0L90iUTuByElnJc.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1Dnu",
            "title": "The Book of Eli",
            "myRating": "7.9",
            "myTags": ["Faith", "Religon", "Exploring unknown territory", "Post-apocalyptic world", "Humanity", "Growth", "Death", "Stylistic", "Atmospheric", "People that are blind"],
            "myReview": "",
            "gradualInterest": [6, 6, 6, 7, 7, 6, 7, 7, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/1H1y9ZiqNFaLgQiRDDZLA55PviW.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/2bcU",
            "title": "Before Sunrise",
            "myRating": "9.0",
            "myTags": ["Soulmate"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 9, 9, 9, 9, 9],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/aZ2Vkrc4RqIjewYbmfy74oDgZfX.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/kKi0",
            "title": "Last and First Men",
            "myRating": "8.0",
            "myTags": ["Exploring unknown territory"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 9, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/w1Im",
            "title": "Hellbender",
            "myRating": "7.9",
            "myTags": ["Satanic rituals"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": require('./websiteContent/films/hellbender/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/29zs",
            "title": "Se7en",
            "myRating": "7.9",
            "myTags": ["Neo-noir"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 8, 7, 7, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/1YUk",
            "title": "Species",
            "myRating": "7.9",
            "myTags": ["Creatures"],
            "myReview": "",
            "gradualInterest": [6, 7, 7, 8, 8, 8, 8, 8, 8, 8, 7]
        },
        {
            "letterboxdUrl": "https://boxd.it/1tXC",
            "title": "Buried",
            "myRating": "7.8",
            "myTags": ["Claustrophobic"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/splPNB0vAoNlb8l5WYxz2E3FK2G.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/fMfM",
            "title": "Leave No Trace",
            "myRating": "7.7",
            "myTags": ["Nature", "Discovering indepdence"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8],
            "customPosterUrl": require('./websiteContent/films/leave_no_trace/custom_poster.jpg')
        },
        {
            "letterboxdUrl": "https://boxd.it/27qS",
            "title": "Solaris",
            "myRating": "7.6",
            "myTags": ["Astronomy", "Psychedelic", "Confusing", "Trippy"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/o839RFIxPrpgOMKQ21SOQl4908t.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/zZ8",
            "title": "Tetsuo: The Bullet Man",
            "myRating": "8.4",
            "myTags": ["Disturbing", "Cyberpunk", "Biopunk", "Stylish", "Metal", "Chaotic", "Claustrophobic", "Challenging to watch at times", "Great soundtrack"],
            "myReview": ReactDomServer.renderToString(TetsuoTheBulletManReview([
                require('./websiteContent/films/tetsuo_the_bullet_man/screenshot1.webp'),
                require('./websiteContent/films/tetsuo_the_bullet_man/screenshot2.webp'),
                require('./websiteContent/films/tetsuo_the_bullet_man/screenshot3.webp')
            ])),
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8],
            "customPosterUrl": require('./websiteContent/films/tetsuo_the_bullet_man/custom_poster.webp')
        },
        {
            "letterboxdUrl": "https://boxd.it/8bfm",
            "title": "Big Fish & Begonia",
            "titleDisplayed": "Big Fish and Begonia",
            "myRating": "9.3",
            "myTags": ["Life", "Death", "Magic", "The afterlife", "Oceans", "Sealife", "Amazing cinematography", "Great soundtrack"],
            "myReview": "",
            "screenshots": [
                require('./websiteContent/films/big_fish_and_begonia/screenshot1.webp'),
                require('./websiteContent/films/big_fish_and_begonia/screenshot5.webp'),
                require('./websiteContent/films/big_fish_and_begonia/screenshot35.webp'),
            ],
            "gradualInterest": [8, 9, 9, 9, 8, 7, 8, 8, 9, 9],
            "customPosterUrl": require('./websiteContent/films/big_fish_and_begonia/custom_poster.webp')
        },
        {
            "letterboxdUrl": "https://boxd.it/d27e",
            "title": "The Tag-Along",
            "myRating": "8.2",
            "myTags": ["Possession", "Insects", "Questioning reality", "Nature", "Confusing"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 9, 9, 9]
        },
        {
            "letterboxdUrl": "https://boxd.it/4aYW",
            "title": "The Seasoning House",
            "myRating": "7.7",
            "myTags": ["Disturbing"],
            "myReview": "",
            "gradualInterest": [7, 6, 6, 7, 8, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/1S0A",
            "title": "Ponyo",
            "myRating": "9.2",
            "myTags": ["Feverdreamy", "Majestic", "Viewing the world through the mind of a child", "Sealife merging with humanity", "Great soundtrack"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 9, 9, 9, 10],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/kP27eFa63Y8bdUTd5YGwqxYUXCU.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/mQbe",
            "title": "The Last Duel",
            "myRating": "7.8",
            "myTags": ["Medieval lifestyle", "Historical", "Perspective"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 8, 8, 8, 8, 7, 7, 8, 8, 8, 7],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/3TxPIZ8nlSzB6WTOtoBz0YrxT8M.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/6YA",
            "title": "Primer",
            "myRating": "7.8",
            "myTags": ["Timey-wimey"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/lwe6",
            "title": "Children of the Sea",
            "myRating": "10",
            "customPosterUrl": require('./websiteContent/films/children_of_the_sea/custom_poster.webp'),
            "myTags": ["The origins of life", "Astronomy", "Cosmology", "Spirituality", "The mysteries of the ocean world", "Sealife", "Exploring new perspectives", "Visual trip", "Audio-visual spectacle"],
            "screenshots": [
                require('./websiteContent/films/children_of_the_sea/screenshot1.webp'),
                require('./websiteContent/films/children_of_the_sea/screenshot2.webp'),
                require('./websiteContent/films/children_of_the_sea/screenshot3.webp')
            ],
            "myReview": ReactDomServer.renderToString(ChildrenOfTheSeaReview([
                require('./websiteContent/films/children_of_the_sea/screenshot1.webp'),
                require('./websiteContent/films/children_of_the_sea/screenshot2.webp'),
                require('./websiteContent/films/children_of_the_sea/screenshot3.webp')
            ])),
            "gradualInterest": [8, 8, 8, 8, 8, 9, 9, 10, 10, 10, 10],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/i91YrURnZPCKhpNyIxkAAzBb4t9.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/1Eo4",
            "title": "Pandorum",
            "myRating": "7.7",
            "myTags": ["Cosmic horror"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
        },
        {
            "letterboxdUrl": "https://boxd.it/71Y",
            "title": "American Beauty",
            "myRating": "7.6",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/6MNwC101wSEsDyxTJBGXsgIMlmh.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/fof4",
            "title": "Dave Made A Maze",
            "myRating": "7.5",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/7Z5sEOC8Y7bdrg7FmIfNGkNniyX.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/rOay",
            "title": "No One Gets Out Alive",
            "myRating": "8.0",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/1ba8",
            "title": "Turtles Are Surprisingly Fast Swimmers",
            "myRating": "8.2",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [9, 9, 9, 8, 8, 8, 7, 7, 7],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/nThjwGHNHKXI7Y1oGdrWzcoAF7P.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/9ssO",
            "title": "The Visit",
            "myRating": "7.5",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 8, 8, 8, 8]
        },
        {
            "letterboxdUrl": "https://boxd.it/1LeA",
            "title": "Angel's Egg",
            "myRating": "9.2",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [9, 9, 9, 9, 8, 9, 9],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/dcEUGvckbePFzPKhGXnS9T3kZMG.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/lLRW",
            "title": "Limbo",
            "myRating": "8.1",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/7Hh2w1ei26DTJ3JWmW8qcGQUI1n.jpg"
        },
        {
            "letterboxdUrl": "https://boxd.it/ikvo",
            "title": "Climax",
            "myRating": "8.3",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 7, 7, 6, 8, 9, 9]
        },
        {
            "letterboxdUrl": "https://boxd.it/32CG",
            "title": "Starry Starry Night",
            "myRating": "8.7",
            "myTags": ["Jigsaws", "Art", "Origami", "Soulmate", "Friendship"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 9, 9, 8, 9, 9, 8],
            "customPosterUrl": require('./websiteContent/films/starry_starry_night/custom_poster.webp')
        }
    ]
}


const RootReducer = (state=initState, action) => {
    // retrieve local film data...
    const mappedById = (initState.filmReviews.reduce((acc, film) => {
        acc[film.letterboxdUrl] = film;
        return acc;
    }, {}));

    // retrieve web film data...
    let webdata = require('../components/films/reviews_web_data.json');

    // merge local & web film data...
    const mergedData = webdata.map(film => ({...film, ...mappedById[film.letterboxdUrl]}))

    // add new attributes...
    Object.entries(mergedData).forEach(([k,v]) => {
        // calculate imdb diff score for each film...
        v["imdbDiffScore"] = (v["myRating"] - v["imdbAvgRating"]).toFixed(1)
    })
    
    // update state so its now using the merged version!
    state.filmReviews = mergedData;
    return state;
}

export default RootReducer;
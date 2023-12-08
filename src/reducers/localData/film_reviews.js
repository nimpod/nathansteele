/**
 * Database of local film review data.
 * The json is merged with the web data in /reducers/RootReducer.js
 */

import React from 'react';
import ReactDomServer from 'react-dom/server';
import { convert_collection_of_json_objects_to_one_list, get_film_review_id } from '../../js/helpers.js';

import { review as AGhostStoryReview } from '../websiteContent/films/a_ghost_story/review.jsx';
import { review as ChildrenOfTheSeaReview } from '../websiteContent/films/children_of_the_sea/review.jsx';
import { review as ArriettyReview } from '../websiteContent/films/the_secret_world_of_arrietty/review.jsx';
import { review as PoupelleOfChimmneyTownReview } from '../websiteContent/films/poupelle_of_chimmney_town/review.jsx';
import { review as WhiteGodReview } from '../websiteContent/films/white_god/review.jsx';
import { review as TetsuoTheBulletManReview } from '../websiteContent/films/tetsuo_the_bullet_man/review.jsx';
import { review as FlatlandReview } from '../websiteContent/films/flatland/review.jsx';
import { review as FeastReview } from '../websiteContent/films/feast/review.jsx';
import { review as BigFishAndBegoniaReview } from '../websiteContent/films/big_fish_and_begonia/review.jsx';
import { review as WeMadeABeautifulBouquet } from '../websiteContent/films/we_made_a_beautiful_bouquet/review.jsx';
/*
import { review as AliensReview } from './websiteContent/films/aliens/review';
import { review as ArrivalReview } from './websiteContent/films/arrival/review';
import { review as BatmanReturnsReview } from './websiteContent/films/batman_returns/review';
import { review as BelleReview } from './websiteContent/films/belle/review';
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


// TODO: it would be nice if I could use this regex to automatically detect any file.
// (e.g. detect any file with the name 'screenshot.{}' where the {} could be jpg, jpeg, png, PNG, or webp
// but currently I have no idea how to make this work.
// this is a bit annoying because it means I have to 'hardcode' paths to screenshots.
// (e.g. require('../websiteContent/films/white_god/screenshot1.webp'))
const regex  = new RegExp("^.\/websiteContent\/films\/(.*?)\/screenshot(.jpg|.png|.PNG|.jpeg|.webp)$")


/**
 * References to screenshots.
 * I need to reference them twice (screenshots list, and passing the screenshots list into the review)
 */
const screenshots = {
    LUPIN_THE_THIRD: [
        require('../websiteContent/films/lupin_the_third/screenshot14.PNG'),
        require('../websiteContent/films/lupin_the_third/screenshot7.PNG'),
        require('../websiteContent/films/lupin_the_third/screenshot3.PNG'),
    ],

    CONVENIENCE_STORY: [
        require('../websiteContent/films/convenience_story/screenshot2.PNG'),
        require('../websiteContent/films/convenience_story/screenshot6.PNG'),
        require('../websiteContent/films/convenience_story/screenshot13.PNG'),
    ],

    PORTALS: [
        require('../websiteContent/films/portals/screenshot3.PNG'),
        require('../websiteContent/films/portals/screenshot8.PNG'),
        require('../websiteContent/films/portals/screenshot1.PNG'),
    ],

    SPONTANEOUS: [
        require('../websiteContent/films/spontaneous/screenshot1.PNG'),
        require('../websiteContent/films/spontaneous/screenshot2.PNG'),
        require('../websiteContent/films/spontaneous/screenshot5.PNG'),
    ],

    CASHBACK: [
        require('../websiteContent/films/cashback/screenshot1.PNG'),
        require('../websiteContent/films/cashback/screenshot5.PNG'),
        require('../websiteContent/films/cashback/screenshot4.PNG'),
    ],

    MALIGNANT: [
        require('../websiteContent/films/malignant/screenshot5.PNG'),
        require('../websiteContent/films/malignant/screenshot2.PNG'),
        require('../websiteContent/films/malignant/screenshot7.PNG'),
    ],

    CJ7: [
        require('../websiteContent/films/cj7/screenshot1.PNG'),
        require('../websiteContent/films/cj7/screenshot3.PNG'),
        require('../websiteContent/films/cj7/screenshot2.PNG'),
    ],
    
    A_BRIDGE_FOR_RIP_VAN_WINKLE: [
        require('../websiteContent/films/a_bride_for_rip_van_winkle/screenshot11.PNG'),
        require('../websiteContent/films/a_bride_for_rip_van_winkle/screenshot6.PNG'),
        require('../websiteContent/films/a_bride_for_rip_van_winkle/screenshot10.PNG'),
    ],

    GET_DUKED: [
        require('../websiteContent/films/get_duked/screenshot1.PNG'),
        require('../websiteContent/films/get_duked/screenshot3.PNG'),
        require('../websiteContent/films/get_duked/screenshot4.PNG'),
    ],

    PULSE: [
        require('../websiteContent/films/pulse/screenshot1.PNG'),
        require('../websiteContent/films/pulse/screenshot2.PNG'),
        require('../websiteContent/films/pulse/screenshot8.PNG'),
    ],

    MEANDER: [
        require('../websiteContent/films/meander/screenshot3.PNG'),
        require('../websiteContent/films/meander/screenshot4.PNG'),
        require('../websiteContent/films/meander/screenshot2.PNG'),
    ],

    SHADOW_IN_THE_CLOUD: [
        require('../websiteContent/films/shadow_in_the_cloud/screenshot1.PNG'),
        require('../websiteContent/films/shadow_in_the_cloud/screenshot2.PNG'),
        require('../websiteContent/films/shadow_in_the_cloud/screenshot8.PNG'),
    ],

    AWAIT_FURTHER_INSTRUCTIONS: [
        require('../websiteContent/films/await_further_instructions/screenshot4.PNG'),
        require('../websiteContent/films/await_further_instructions/screenshot13.PNG'),
        require('../websiteContent/films/await_further_instructions/screenshot11.PNG'),
    ],

    CHILDREN_OF_THE_SEA: [
        require('../websiteContent/films/children_of_the_sea/screenshot30.webp'),
        require('../websiteContent/films/children_of_the_sea/screenshot6.webp'),
        require('../websiteContent/films/children_of_the_sea/screenshot33.webp'),
        /*
        require('../websiteContent/films/children_of_the_sea/screenshot2.webp'),
        require('../websiteContent/films/children_of_the_sea/screenshot5.webp'),
        require('../websiteContent/films/children_of_the_sea/screenshot3.webp'),
        require('../websiteContent/films/children_of_the_sea/screenshot17.webp')
        */
    ],

    WHITE_GOD: [
        require('../websiteContent/films/white_god/screenshot1.webp'),
        require('../websiteContent/films/white_god/screenshot2.webp'),
        require('../websiteContent/films/white_god/screenshot3.webp'),
    ],

    FLATLAND: [
        require('../websiteContent/films/flatland/screenshot1.webp'),
        require('../websiteContent/films/flatland/screenshot2.webp'),
        require('../websiteContent/films/flatland/screenshot3.webp'),
    ],

    FEAST: [
        require('../websiteContent/films/feast/screenshot1.webp'),
        require('../websiteContent/films/feast/screenshot2.webp'),
        require('../websiteContent/films/feast/screenshot5.webp'),
    ],

    THE_SECRET_WORLD_OF_ARRIETTY: [
        require('../websiteContent/films/the_secret_world_of_arrietty/screenshot1.webp'),
        require('../websiteContent/films/the_secret_world_of_arrietty/screenshot2.webp'),
        require('../websiteContent/films/the_secret_world_of_arrietty/screenshot3.webp'),
    ],

    A_GHOST_STORY: [
        require('../websiteContent/films/a_ghost_story/screenshot1.webp'),
        require('../websiteContent/films/a_ghost_story/screenshot2.webp'),
        require('../websiteContent/films/a_ghost_story/screenshot3.webp'),
    ],

    POUPELLE_OF_CHIMMNEY_TOWN: [
        require('../websiteContent/films/poupelle_of_chimmney_town/screenshot1.webp'),
        require('../websiteContent/films/poupelle_of_chimmney_town/screenshot2.webp'),
        require('../websiteContent/films/poupelle_of_chimmney_town/screenshot3.webp'),
    ],

    WOLF_CHILDREN: [
        require('../websiteContent/films/wolf_children/screenshot7.webp'),
        require('../websiteContent/films/wolf_children/screenshot4.webp'),
        require('../websiteContent/films/wolf_children/screenshot1.webp'),
    ],

    SPIRITED_AWAY: [
        "https://www.themoviedb.org/t/p/original/iFXwrL5FDFS5WbCdG8OeSy3gRAj.jpg",
        "https://www.themoviedb.org/t/p/original/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",
        "https://www.themoviedb.org/t/p/original/hXd2cgvvVh1EzSxuyNysiLErjVM.jpg"
    ],

    TETSUO_THE_BULLET_MAN: [
        require('../websiteContent/films/tetsuo_the_bullet_man/screenshot1.webp'),
        require('../websiteContent/films/tetsuo_the_bullet_man/screenshot2.webp'),
        require('../websiteContent/films/tetsuo_the_bullet_man/screenshot3.webp')
    ],

    BIG_FISH_AND_BEGONIA: [
        require('../websiteContent/films/big_fish_and_begonia/screenshot1.webp'),
        require('../websiteContent/films/big_fish_and_begonia/screenshot5.webp'),
        require('../websiteContent/films/big_fish_and_begonia/screenshot37.webp'),
    ],

    THE_TAG_ALONG: [
        require('../websiteContent/films/the_tag_along/screenshot2.webp'),
        require('../websiteContent/films/the_tag_along/screenshot5.webp'),
        require('../websiteContent/films/the_tag_along/screenshot15.webp')
    ],

    TURTLES_ARE_SUPRISINGLY_GOOD_SWIMMERS: [
        require('../websiteContent/films/turtles_are_suprisingly_good_swimmers/screenshot2.webp'),
        require('../websiteContent/films/turtles_are_suprisingly_good_swimmers/screenshot8.webp'),
        require('../websiteContent/films/turtles_are_suprisingly_good_swimmers/screenshot4.webp'),
    ],

    ANGELS_EGG: [
        require('../websiteContent/films/angels_egg/screenshot1.webp'),
        require('../websiteContent/films/angels_egg/screenshot2.webp'),
        require('../websiteContent/films/angels_egg/screenshot3.webp'),
    ],

    LIMBO: [
        require('../websiteContent/films/limbo/screenshot3.webp'),
        require('../websiteContent/films/limbo/screenshot2.webp'),
        require('../websiteContent/films/limbo/screenshot6.webp'),
    ],

    CLIMAX: [
        require('../websiteContent/films/climax/screenshot5.webp'),
        require('../websiteContent/films/climax/screenshot3.webp'),
        require('../websiteContent/films/climax/screenshot7.webp'),
    ],

    STARRY_STARRY_NIGHT: [
        require('../websiteContent/films/starry_starry_night/screenshot4.webp'),
        require('../websiteContent/films/starry_starry_night/screenshot11.webp'),
        require('../websiteContent/films/starry_starry_night/screenshot13.webp'),
    ],

    CHILDREN_WHO_CHASE_LOST_VOICES: [
        require('../websiteContent/films/children_who_chase_lost_voices/screenshot1.webp'),
        require('../websiteContent/films/children_who_chase_lost_voices/screenshot2.webp'),
        require('../websiteContent/films/children_who_chase_lost_voices/screenshot3.webp'),
    ],

    ZOE: [
        require('../websiteContent/films/zoe/screenshot5.webp'),
        require('../websiteContent/films/zoe/screenshot2.webp'),
        require('../websiteContent/films/zoe/screenshot4.webp'),
    ],

    WE_MADE_A_BEAUTIFUL_BOUQUET: [
        require('../websiteContent/films/we_made_a_beautiful_bouquet/screenshot1.webp'),
        require('../websiteContent/films/we_made_a_beautiful_bouquet/screenshot2.webp'),
        require('../websiteContent/films/we_made_a_beautiful_bouquet/screenshot3.webp'),
    ],
}


/**
 * My database of film reviews
 * This doesn't include web data (e.g. genres, year, director, etc...), that data is recieved later on from an API.
 * This database should only include things like myRating, myReview, customPosterUrl, etc...
 * Crucially, the letterboxdUrl parameter MUST be correct, because I am essentially using that as an ID for each film.
 */
const database = {
    123: {
        "1408": {
            "letterboxdUrl": "https://boxd.it/25Vu",
            "title": "1408",
            "myRating": "8.75",
            "myTags": ["Claustrophobic", "Disturbing", "One-location", "Atmospheric"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/zEaMTpG71O0NN7XlQwYyaWVpTyX.jpg"
        },
    
        "2001_a_space_odyssey": {
            "letterboxdUrl": "https://boxd.it/2bf0",
            "title": "2001: A Space Odyssey",
            "myRating": "8.25",
            "myTags": ["Mysterious", "Grand", "Great cinematography", "Minimal dialogue", "Artificial Intelligence"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/zmmYdPa8Lxx999Af9vnVP4XQ1V6.jpg"
        },
    
        "127_hours": {
            "letterboxdUrl": "https://boxd.it/SLa",
            "title": "127 Hours",
            "myRating": "8.5",
            "myTags": ["Alone in the wilderness", "Survival story", "Based on true events", "Hallucinations", "Questioning reality", "Minimal dialogue", "One-location"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/zHOZLYsfykHWhYAsC4MN09xKP9F.jpg"
        },
    
        "10_cloverfield_lane": {
            "letterboxdUrl": "https://boxd.it/aZiu",
            "title": "10 Cloverfield Lane",
            "myRating": "8.75",
            "myTags": ["Mysterious", "Claustrophobic", "One-location", "Creepy"],
            "myReview": "",
            "customPosterUrl":  "https://www.themoviedb.org/t/p/original/84Dhwz93vCin6T1PX6ctSvWEuNE.jpg"
        },
    
        "1917": {
            "letterboxdUrl": "https://boxd.it/jj4y",
            "title": "1917",
            "myRating": "9.0",
            "myTags": ["War", "One-take", "Not giving up despite being in a shitty situation", "Great soundtrack"],
            "myReview": ""
        },
    
        "500_days_of_summer": {
            "letterboxdUrl": "https://boxd.it/1EmM",
            "title": "500 Days of Summer",
            "titleDisplayed": "(500) Days of Summer",
            "myRating": "9.25",
            "myTags": ["Soulmate", "Non-linear timeline", "Emotional"],
            "myReview": ""
        },
    },

    THE: {
        "the_secret_world_of_arrietty": {
            "myRating": 9.0,
            "letterboxdUrl": "https://boxd.it/AF4",
            "title": "The Secret World of Arrietty",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/oFlgPpxmZ4oTdxGc8aePWsKClxw.jpg",
            "screenshots": screenshots.THE_SECRET_WORLD_OF_ARRIETTY,
            "myReview": ReactDomServer.renderToString(ArriettyReview(screenshots.THE_SECRET_WORLD_OF_ARRIETTY)),
            "myTags": [
                "Humanity and nature coexisting",
                "Friendship",
                "Kindness",
                "Embrace mother nature",
                "Evolving perspective of life",
                "Intimate",
                "Colourful",
                "Great cinematography",
                "Great soundtrack",
                "Girl power"
            ],
        },
    
        "the_nightingale": {
            "myRating": 9.5,
            "letterboxdUrl": "https://boxd.it/e1Ga",
            "title": "The Nightingale",
            "myReview": "",
            "myTags": [
                "Revenge-fantasy",
                "Tasmania",
                "1825",
                "Aboriginal people",
                "The evil British empire",
                "Seeking closure",
                "Getting revenge on evil people",
                "Challenging to watch at times",
                "Embrace mother nature",
                "Intense",
                "Soulmate"
            ],
        },
    
        "the_wind_rises": {
            "myRating": 10,
            "letterboxdUrl": "https://boxd.it/4JQS",
            "title": "The Wind Rises",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/RyosyYVvQL2fYBPl7hCLL6XyMC.jpg",
            "myTags": [
                "Growing up",
                "Engineering",
                "War",
                "Flying",
                "Soulmate",
                "Finding yourself",
                "Anime",
                "Great soundtrack"
            ],
        },
    
        "the_thin_red_line": {
            "myRating": 9.5,
            "letterboxdUrl": "https://boxd.it/1ZTM",
            "title": "The Thin Red Line",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/hfHKVeiu2xaxVjqPuKM0m6lpEL5.jpg",
            "myTags": [
                "Melancholic", 
                "Contemplative", 
                "War", 
                "Poetic", 
                "Profound", 
                "Great cinematography", 
                "Exploring the dark depths of humanity", 
                "Very long"
            ],
        },
    
        "the_brand_new_testament": {
            "myRating": 10,
            "letterboxdUrl": "https://boxd.it/aPMO",
            "title": "The Brand New Testament",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/1aHD703Qkh9Rf9vLjdJRxJT25F0.jpg",
            "myTags": [
                "Life",
                "Death",
                "Religion",
                "God",
            ],
        },
    
        "the_lego_movie": {
            "letterboxdUrl": "https://boxd.it/4pDO",
            "title": "The Lego Movie",
            "myRating": "8.0",
            "myTags": ["Intricate animation style", "Uplifting", "Fun"],
            "myReview": ""
        },
    
        "the_red_turtle": {
            "letterboxdUrl": "https://boxd.it/bdkE",
            "title": "The Red Turtle",
            "myRating": "8.25",
            "myTags": ["Alone in the wilderness", "Embrace mother nature", "Friendship", "Dialogueless", "Fairy tale", "Great soundtrack"],
            "myReview": ""
        },
    
        "the_wailing": {
            "letterboxdUrl": "https://boxd.it/9fLy",
            "title": "The Wailing",
            "myRating": "8.5",
            "myTags": ["Possessed", "Paranormal", "Exorcism", "Brutal", "Tribal", "Mysterious"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/lWE9ih9qgjx8HatYboP7fG0nri.jpg"
        },
    
        "the_nightmare_before_christmas": {
            "letterboxdUrl": "https://boxd.it/1YzQ",
            "title": "The Nightmare Before Christmas",
            "myRating": "8.25",
            "myTags": ["Stumbling across the prospect of happiness", "Creature-feature", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/oQffRNjK8e19rF7xVYEN8ew0j7b.jpg"
        },
    
        "the_empty_man": {
            "letterboxdUrl": "https://boxd.it/iIWS",
            "title": "The Empty Man",
            "myRating": "8.25",
            "myTags": ["Atmospheric", "Confusing", "Snow", "Weird", "Disturbing", "Creepy"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/hsueWFGkuXFOnKAxzoYUMUDA9T3.jpg"
        },
    
        "the_vast_of_night": {
            "letterboxdUrl": "https://boxd.it/kJyc",
            "title": "The Vast of Night",
            "myRating": "8.0",
            "myTags": ["Atmospheric", "Mysterious", "Melancholic", "Search for Extra Terrestrial Intelligence (SETI)", "Radio station", "One-take"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/q2P9lYkctl5Ory71HEBMaFxbVlD.jpg"
        },
    
        "the_autopsy_of_jane_doe": {
            "letterboxdUrl": "https://boxd.it/dUu2",
            "title": "The Autopsy of Jane Doe",
            "myRating": "8.25",
            "myTags": ["Creepy", "Disturbing"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/6K0wjP8kPCiPYy9PtXBGuypyt5I.jpg"
        },
    
        "the_man_who_planted_trees": {
            "letterboxdUrl": "https://boxd.it/FKS",
            "title": "The Man Who Planted Trees",
            "myRating": "8.0",
            "myTags": ["Alone in the wilderness", "Embrace mother nature", "Poetic", "Profound", "Humanity and nature coexisting", "Nature thriving", "The ebb-and-flow of nature"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/un0NjREDaLEWWOTr7tE52MjQY6O.jpg"
        },
    
        "the_bridge_to_terabithia": {
            "letterboxdUrl": "https://boxd.it/28YG",
            "title": "Bridge to Terabithia",
            "myRating": "8.75",
            "myTags": ["Sad", "Depressing", "Soulmate", "Alone in the wilderness", "Friendship", "Imagination"],
            "myReview": ""
        },
    
        "the_age_of_adaline": {
            "letterboxdUrl": "https://boxd.it/9ghu",
            "title": "The Age of Adaline",
            "myRating": "8.5",
            "myTags": ["Mad concept", "Timey-wimey"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/MbILysGhjAbnZi1Okae9wYqLMx.jpg"
        },
    
        "the_fly": {
            "letterboxdUrl": "https://boxd.it/1YIe",
            "title": "The Fly",
            "myRating": "8.0",
            "myTags": ["Mad concept", "Metamorphosis", "Creature-feature", "Disturbing"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/z1XdsalC4fZlzCa5Vu06QLBUhyW.jpg"
        },
    
        "the_perks_of_being_a_wallflower": {
            "letterboxdUrl": "https://boxd.it/2ZA8",
            "title": "The Perks of Being a Wallflower",
            "myRating": "8.0",
            "myTags": ["School setting", "Friendship", "Great chemistry between characters", "A slice of life", "Soulmate"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/8hiVLAZVJ254qE2eJXovvhi3yzd.jpg"
        },
    
        "the_faculty": {
            "letterboxdUrl": "https://boxd.it/1Z5C",
            "title": "The Faculty",
            "myRating": "8.25",
            "myTags": ["Creature-feature", "School setting", "Metamorphosis", "Fun", "Mysterious"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/5XetJwmAiDC0EtH23NIXaqFn3Wl.jpg"
        },
    
        "the_map_of_tiny_perfect_things": {
            "letterboxdUrl": "https://boxd.it/p3O8",
            "title": "The Map of Tiny Perfect Things",
            "myRating": "8.75",
            "myTags": ["Time loop", "Friendship", "Soulmate", "Turning negatives into positives", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/6y3ev0rJFbHA1hU22UPmmfzBjrG.jpg"
        },
    
        "the_exorcism_of_emily_rose": {
            "letterboxdUrl": "https://boxd.it/200I",
            "title": "The Exorcism of Emily Rose",
            "myRating": "8.5",
            "myTags": ["Exorcism", "Disturbing", "Court scenario"],
            "myReview": ""
        },
    
        "the_girl_with_the_dragon_tattoo": {
            "letterboxdUrl": "https://boxd.it/2Pa",
            "title": "The Girl With The Dragon Tattoo",
            "myRating": "8.25",
            "myTags": ["Atmospheric", "Murder mystery", "Mysterious", "Gross", "Conspiracy"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/8bokS83zGdhaXgN9tjidUKmAftW.jpg"
        },
    
        "the_ring": {
            "letterboxdUrl": "https://boxd.it/2a70",
            "title": "The Ring",
            "myRating": "8.5",
            "myTags": ["Atmospheric", "Total escapism", "Great cinematography", "Mysterious", "Death", "Gross", "Murder mystery"],
            "myReview": ""
        },
    
        "the_tenant": {
            "letterboxdUrl": "https://boxd.it/1TKk",
            "title": "The Tenant",
            "myRating": "8.5",
            "myTags": ["Surrealist horror", "Xenophobia", "Isolation", "Hostility", "Paranoia", "Loss of identity", "Claustrophobic", "Conspiracy", "Living in flats"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/4Qhzb1ICFMqE3isWoln497qSH7n.jpg"
        },
    
        "the_frame": {
            "letterboxdUrl": "https://boxd.it/9JNE",
            "title": "The Frame",
            "myRating": "8.75",
            "myTags": ["Contemplative sci-fi", "Mysterious", "Profound", "Questioning reality", "Simulation", "Creative use of framing"],
            "myReview": ""
        },
    
        "the_pianist": {
            "letterboxdUrl": "https://boxd.it/2aqc",
            "title": "The Pianist",
            "myRating": "9.0",
            "myTags": ["War", "Minimal", "Very small cast", "The universal power of music"],
            "myReview": ""
        },
    
        "the_peanut_butter_falcon": {
            "letterboxdUrl": "https://boxd.it/gzu2",
            "title": "The Peanut Butter Falcon",
            "myRating": "9.25",
            "myTags": ["Uplifting", "Soulmate", "Alone in the wilderness", "Roadtrip", "Underdogs", "Cerebral palsy"],
            "myReview": ""
        },
    
        "the_mitchells_vs_the_machines": {
            "letterboxdUrl": "https://boxd.it/i7xm",
            "title": "The Mitchells vs the Machines",
            "myRating": "9.25",
            "myTags": ["Intricate animation style", "End of the world", "Uplifting", "Family", "Social commentary"],
            "myReview": ""
        },
    
        "the_exorcist": {
            "letterboxdUrl": "https://boxd.it/1Yoo",
            "title": "The Exorcist",
            "myRating": "9.0",
            "myTags": ["Terrifying", "Exorcism"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg"
        },
    
        "the_sound_of_music": {
            "letterboxdUrl": "https://boxd.it/1MLK",
            "title": "The Sound of Music",
            "myRating": "9.5",
            "myTags": ["Uplifting", "Music", "War", "Britian 1960s", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/c6CrUZypAsBCaRWX0M3RVRDbhNS.jpg"
        },
    
        "the_shape_of_water": {
            "letterboxdUrl": "https://boxd.it/dZ5m",
            "title": "The Shape of Water",
            "myRating": "9.75",
            "myTags": ["Atmospheric", "Water", "Beautiful", "Melancholic", "Great soundtrack", "Minimal dialogue"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/r0bgHi3MwGHTKPWyJdORsb4ukY8.jpg"
        },
    
        "the_matrix": {
            "letterboxdUrl": "https://boxd.it/2a1m",
            "title": "The Matrix",
            "myRating": "10",
            "myTags": ["Dystopia"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg"
        },
    
        "the_invisible_man": {
            "letterboxdUrl": "https://boxd.it/kWlA",
            "title": "The Invisible Man",
            "myRating": "10",
            "myTags": ["Terrifying", "Total escapism", "Invisibility", "Creepy"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg"
        },
    
        "the_shining": {
            "letterboxdUrl": "https://boxd.it/29Nu",
            "title": "The Shining",
            "myRating": "9.5",
            "myTags": ["Terrifying", "Atmospheric", "Snow", "One-location", "Possession", "Hallucinations", "Questioning reality"],
            "myReview": ""
        },
    
        "the_revenant": {
            "letterboxdUrl": "https://boxd.it/8H5e",
            "title": "The Revenant",
            "myRating": "9.5",
            "myTags": ["Alone in the wilderness", "Survival story", "Mississipi 1800s", "Based on a true story", "Brutal", "Betrayl", "Finding positives from negatives", "Not giving up despite being in a shitty situation", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/o6wunVSN9WI1obidUq3clGq65ZP.jpg"
        },
    
        "the_truman_show": {
            "letterboxdUrl": "https://boxd.it/18U8",
            "title": "The Truman Show",
            "myRating": "10",
            "myTags": ["Uplifting", "Conspiracy", "Questioning reality", "Religion", "Faith", "Beyond existence"],
            "myReview": ""
        },
    
        "the_curious_case_of_benjamin_button": {
            "letterboxdUrl": "https://boxd.it/23Fk",
            "title": "The Curious Case of Benjamin Button",
            "myRating": "10",
            "myTags": ["A slice of life", "Death", "Humanity", "Friendship", "Profound"],
            "myReview": "",
            "customPosterUrl": require('../websiteContent/films/the_curious_case_of_benjamin_button/custom_poster.jpg')
        },
    
        "the_strangers": {
            "letterboxdUrl": "https://boxd.it/1VGY",
            "title": "The Strangers",
            "myRating": "8.0",
            "myTags": ["Terrifying"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/eei83VHNaHFopOyxeFj5XI6LjLJ.jpg"
        },
    
        "the_tunnel": {
            "letterboxdUrl": "https://boxd.it/NGk",
            "title": "The Tunnel",
            "myRating": "7.75",
            "myTags": ["Found footage", "Stuck underground", "Claustrophobic", "Frightening", "Creepy"],
            "myReview": "",
            "gradualInterest": [6, 6, 7, 7, 8, 8, 8, 8, 8]
        },
    
        "the_prestige": {
            "letterboxdUrl": "https://boxd.it/293w",
            "title": "The Prestige",
            "myRating": "8.0",
            "myTags": ["Magician"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/bdN3gXuIZYaJP7ftKK2sU0nPtEA.jpg"
        },
        
        "the_secret_life_of_walter_mitty": {
            "letterboxdUrl": "https://boxd.it/3SWy",
            "title": "The Secret Life of Walter Mitty",
            "myRating": "7.5",
            "myTags": ["Uplifting", "Exploring new places", "Discovering independence", "Soulmate"],
            "myReview": ""
        },
    
        "the_babadook": {
            "letterboxdUrl": "https://boxd.it/77xu",
            "title": "The Babadook",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ArPWMf2leE6H9IIJ3tHVt6uewLR.jpg"
        },
    
        "the_land_of_cards": {
            "letterboxdUrl": "https://boxd.it/6fWg",
            "title": "The Land of Cards",
            "myRating": "7.5",
            "myTags": ["Searching for freedom", "Starting a revolution", "Dictatorship", "Politics", "Poems"],
            "myReview": "",
            "gradualInterest": [6, 6, 5, 6, 6, 7, 9, 8, 8, 8, 8],
            "customPosterUrl": require('../websiteContent/films/the_land_of_cards/custom_poster.jpg')
        },
    
        "the_broken": {
            "letterboxdUrl": "https://boxd.it/25jq",
            "title": "The Broken",
            "myRating": "7.5",
            "myTags": ["Confusing", "Suspensful", "Atmospheric", "Murky", "Doppelganger", "Trauma", "Mental illness", "Unknown entities disguised as humans"],
            "myReview": "",
            "gradualInterest": [6, 7, 7, 7, 8, 8, 7, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/c7WsgY4jPAvN0L90iUTuByElnJc.jpg"
        },
    
        "the_book_of_eli": {
            "letterboxdUrl": "https://boxd.it/1Dnu",
            "title": "The Book of Eli",
            "myRating": "7.75",
            "myTags": ["Faith", "Religon", "Exploring unknown territory", "Post-apocalyptic world", "Humanity", "Growth", "Death", "Stylistic", "Atmospheric", "People that are blind"],
            "myReview": "",
            "gradualInterest": [6, 6, 6, 7, 7, 6, 7, 7, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/1H1y9ZiqNFaLgQiRDDZLA55PviW.jpg"
        },
    
        "the_visit": {
            "letterboxdUrl": "https://boxd.it/9ssO",
            "title": "The Visit",
            "myRating": "7.75",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 8, 8, 8, 8]
        },
    
        "the_midnight_meat_train": {
            "letterboxdUrl": "https://boxd.it/1WSw",
            "title": "The Midnight Meat Train",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/x5YbfyUA8huK0shr008xwzNVJ5Y.jpg"
        },
    
        "the_divide": {
            "letterboxdUrl": "https://boxd.it/15Mg",
            "title": "The Divide",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/sfjN76YhJKVonJIDYz8cYGxFcye.jpg"
        },
    
        "the_beach_house": {
            "letterboxdUrl": "https://boxd.it/nrek",
            "title": "The Beach House",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/p8M21d4vzXKa027a00BeRvc3JoX.jpg"
        },
    
        "the_eye_2": {
            "letterboxdUrl": "https://boxd.it/1xdy",
            "title": "The Eye 2",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/2l8GsWmmJItS4TAhp3ff5xQxcSn.jpg"
        },
    
        "the_stylist": {
            "letterboxdUrl": "https://boxd.it/rPHy",
            "title": "The Stylist",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
        },
    
        "the_forest_of_love": {
            "letterboxdUrl": "https://boxd.it/nqbk",
            "title": "The Forest of Love",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/lJaRdstEc8XwrH2VALEvU35oiz8.jpg"
        },
    
        "the_blair_witch_project": {
            "letterboxdUrl": "https://boxd.it/26ua",
            "title": "The Blair Witch Project",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/oD0o6bnp3l9QxiUvPJAp5y5gMqV.jpg"
        },
    
        "the_cranes_are_flying": {
            "letterboxdUrl": "https://boxd.it/169Y",
            "title": "The Cranes Are Flying",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "gradualInterest": [6, 6, 7, 8, 8, 8, 8, 8, 8, 9]
        },
    
        "the_garden_of_words": {
            "letterboxdUrl": "https://boxd.it/5Ymq",
            "title": "The Garden of Words",
            "myRating": "7.5",
            "myTags": ["Soulmate", "Nature", "Rain", "Detailed animation"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8]
        },
    
        "the_living_and_the_dead": {
            "letterboxdUrl": "https://boxd.it/1QwY",
            "title": "The Living and the Dead",
            "myRating": "8.25",
            "myTags": ["Depressing", "Grim", "Disturbing", "Learning disability", "Mental health", "Amazing soundtrack", "One-location"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 9, 8, 9, 8]
        },
    
        "the_children": {
            "letterboxdUrl": "https://boxd.it/1Kju",
            "title": "The Children",
            "myRating": "8.25",
            "myTags": ["Virus", "Evil children", "Disturbing", "One-location"],
            "myReview": "",
            "gradualInterest": [7, 8, 8, 8, 9, 9, 9, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/vTyc2ahe0qq7BVBlPD3L4zAl7WU.jpg"
        },
    
        "the_blind_man_who_did_not_want_to_see_titanic": {
            "letterboxdUrl": "https://boxd.it/qQW8",
            "title": "The Blind Man Who Did Not Want to See Titanic",
            "myRating": "8.0",
            "myTags": ["Experiencing the world of a blind person", "Unique", "Sad", "Makes you grateful for what you have"],
            "myReview": "",
            "gradualInterest": [6, 7, 7, 7, 8, 8, 8, 8]
        },
    
        "the_tag_along": {
            "letterboxdUrl": "https://boxd.it/d27e",
            "title": "The Tag-Along",
            "myRating": "8.25",
            "myTags": ["Possession", "Insects", "Questioning reality", "Nature"],
            "myReview": "",
            "screenshots": screenshots.THE_TAG_ALONG,
            "gradualInterest": [8, 8, 8, 8, 8, 8, 9, 9, 9]
        },
    
        "the_seasoning_house": {
            "letterboxdUrl": "https://boxd.it/4aYW",
            "title": "The Seasoning House",
            "myRating": "7.5",
            "myTags": ["Disturbing"],
            "myReview": "",
            "gradualInterest": [7, 6, 6, 7, 8, 8, 8, 8, 8]
        },
    
        "the_last_duel": {
            "letterboxdUrl": "https://boxd.it/mQbe",
            "title": "The Last Duel",
            "myRating": "7.75",
            "myTags": ["Medieval lifestyle", "Historical", "Perspective"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 8, 8, 8, 8, 7, 7, 8, 8, 8, 7],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/3TxPIZ8nlSzB6WTOtoBz0YrxT8M.jpg"
        },
    },

    A_starts_with_single_word_a: {
        "a_ghost_story": {
            "myRating": 10.0,
            "letterboxdUrl": "https://boxd.it/fb0K",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/sD94aixD7fMAc2e9ugbv4KQprBL.jpg",
            "title": "A Ghost Story",
            "screenshots": screenshots.A_GHOST_STORY,
            "myReview": ReactDomServer.renderToString(AGhostStoryReview(screenshots.A_GHOST_STORY)),
            "myTags": [
                "Death",
                "Life",
                "Vast",
                "Cosmic",
                "Beyond existence",
                "Mysterious",
                "Creative use of lighting",
                "Creative use of aspect ratio",
                "Great soundtrack"
            ],
        },

        "a_silent_voice": {
            "letterboxdUrl": "https://boxd.it/d99c",
            "title": "A Silent Voice: The Movie",
            "titleDisplayed": "A Silent Voice",
            "myRating": "8.0",
            "myTags": ["Bullying", "Forgiveness", "Anime", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/rgKWgY1pJ0bolXu2YhYPN4frkpd.jpg"
        },
    
        "a_quiet_place": {
            "letterboxdUrl": "https://boxd.it/fVJQ",
            "title": "A Quiet Place",
            "myRating": "9.0",
            "myTags": ["Minimal dialogue", "Atmospheric", "Intense", "Aliens", "Post-apocalypse society"],
            "myReview": ""
        },
        
        "a_tree_of_palme": {
            "letterboxdUrl": "https://boxd.it/1ldQ",
            "title": "A Tree of Palme",
            "myRating": "8.75",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ui796jZGaqcLD89BHISwFNugd0X.jpg"
        },
    
        "a_bride_for_rip_van_winkle": {
            "letterboxdUrl": "https://boxd.it/dj9c",
            "title": "A Bride for Rip Van Winkle",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ug9a2UEzSRJ6xG5NEvU4YXIbH2A.jpg",
            "screenshots": screenshots.A_BRIDGE_FOR_RIP_VAN_WINKLE
        },
    },

    A: {
        "await_further_instructions": {
            "letterboxdUrl": "https://boxd.it/ifti",
            "title": "Await Further Instructions",
            "myRating": 7.5,
            "myTags": [
                "Claustrophobic",
                "Brutal",
                "Creepy",
                "Mysterious",
            ],
            "gradualInterest": [7, 6, 4, 4, 4, 4, 6, 9, 9],
            "myReview": "",
            "screenshots": screenshots.AWAIT_FURTHER_INSTRUCTIONS
        },

        "after_hours": {
            "letterboxdUrl": "https://boxd.it/1VfS",
            "title": "After Hours",
            "myRating": "8.0",
            "myTags": ["Claustrophobic", "Conspiracy", "Nightlife", "Disturbing", "Quirky", "Accidently getting involved in crimminal activity"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/9NyT0qHwVDsazubfSwLxt6fR7Ym.jpg"
        },
    
        "arctic": {
            "letterboxdUrl": "https://boxd.it/gc1Q",
            "title": "Arctic",
            "myRating": "7.75",
            "myTags": ["Alone in the wilderness", "Dialogueless", "Just 2 actors", "Snow", "Survival story"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/w9GVlRteCgY103DN8CdFik3HUhO.jpg"
        },
    
        "all_my_friends_hate_me": {
            "letterboxdUrl": "https://boxd.it/uWPK",
            "title": "All My Friends Hate Me",
            "myRating": "7.5",
            "myTags": ["Social anxiety", "Cotswolds", "British humour"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/czBrEzJ7fzO4H8GzPerxJ6bP3kE.jpg"
        },
    
        "aniara": {
            "myRating": 9.75,
            "letterboxdUrl": "https://boxd.it/hUMe",
            "title": "Aniara",
            "myTags": [
                "The incomprehensible vastness of space", 
                "Civilisation on spaceship", 
                "Contemplative sci-fi", 
                "Virtual world", 
                "Mysterious", 
                "Creepy", 
                "Dystopia", 
                "Exploring the dark depths of humanity"
            ],
        },
    
        "akira": {
            "myRating": 8.5,
            "letterboxdUrl": "https://boxd.it/2b1i",
            "title": "Akira",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/b6icR6m7WlKhZfEumeNQ181yDDg.jpg",
            "myTags": [
                "End of the world", 
                "Profound", 
                "Conspiracy", 
                "War", 
                "Colourful", 
                "Great soundtrack", 
                "Anime", 
                "Confusing"
            ],
        },
    
        "apocalypto": {
            "letterboxdUrl": "https://boxd.it/28yy",
            "title": "Apocalypto",
            "myRating": "9.5",
            "myTags": ["Total escapism", "Ancient mayan civilisation", "Architecture", "Amazing set design", "Revenge-fantasy", "Brutal", "Not giving up despite being in a shitty situation"],
            "myReview": ""
        },

        "alive": {
            "letterboxdUrl": "https://boxd.it/210u",
            "title": "Alive",
            "myRating": "8.5",
            "myTags": ["Survival story", "Not giving up despite being in a shitty situation", "Brutal", "Snow", "Alone in the wilderness"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/uQACcCZqd7WCTRin9xRIW5gr1bd.jpg"
        },
    
        "another_earth": {
            "letterboxdUrl": "https://boxd.it/rRA",
            "title": "Another Earth",
            "myRating": "7.5",
            "myTags": ["Melancholic", "Mysterious", "Quirky", "Forgiveness", "Friendship", "Futuristic", "Contemplative sci-fi"],
            "myReview": ""
        },
    
        "another_year": {
            "letterboxdUrl": "https://boxd.it/T1C",
            "title": "Another Year",
            "myRating": "8.5",
            "myTags": ["A slice of life", "Gardening", "Finding happiness", "The ebb-and-flow of nature", "Forgiveness", "Melancholic", "British humour", "Depressing"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/zrkQcAatfBox5x9KZjaYGnKoqu6.jpg"
        },

        "aliens": {
            "letterboxdUrl": "https://boxd.it/29PA",
            "title": "Aliens",
            "myRating": "9.0",
            "myTags": ["Total escapism", "Aliens"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/4y7pFNes6oUTphF5cZpx24qt5yo.jpg"
        },

        "april_story": {
            "letterboxdUrl": "https://boxd.it/2n9o",
            "title": "April Story",
            "myRating": "8.0",
            "myTags": ["Soulmate", "Introvert"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 8]
        },
    
        "angels_egg": {
            "letterboxdUrl": "https://boxd.it/1LeA",
            "title": "Angel's Egg",
            "myRating": "9.25",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [9, 9, 9, 9, 8, 9, 9],
            "screenshots": screenshots.ANGELS_EGG,
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/dcEUGvckbePFzPKhGXnS9T3kZMG.jpg"
        },
    
        "american_beauty": {
            "letterboxdUrl": "https://boxd.it/71Y",
            "title": "American Beauty",
            "myRating": "7.75",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/6MNwC101wSEsDyxTJBGXsgIMlmh.jpg"
        },
    
        "awakenings": {
            "letterboxdUrl": "https://boxd.it/1USu",
            "title": "Awakenings",
            "myRating": "10",
            "myTags": ["Sad", "Mental hosptital", "Depressing", "Awakanening-ish"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/9gztZXuHLG6AJ0fgqGd7Q43cWRI.jpg"
        },
    
        "arrival": {
            "letterboxdUrl": "https://boxd.it/aNGk",
            "title": "Arrival",
            "myRating": "10",
            "myTags": ["Grand sci-fi", "Linguistics", "Non-linear timeline", "Timey-wimey", "Aliens", "Melancholic", "Emotional", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ueSQpTaXs39YtycNoalp5q06fxD.jpg"
        },
    
        "american_mary": {
            "letterboxdUrl": "https://boxd.it/48WY",
            "title": "American Mary",
            "myRating": "7.75",
            "myTags": ["Disturbing", "Body modification"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/wAJ69oBFsJ4ocOrnANixIx52A0x.jpg"
        },
    
        "achilles_and_the_tortoise": {
            "letterboxdUrl": "https://boxd.it/1SnO",
            "title": "Achilles and the Tortoise",
            "myRating": "8.0",
            "myTags": ["Critique of modern art"],
            "myReview": "",
            "gradualInterest": [8, 7, 6, 7, 8, 8, 8, 8, 7, 7, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/rU6UkrcH0QyJ5FhmKAKFhZ1nfAC.jpg"
        },
    },

    B: {
        "belle": {
            "myRating": 9.25,
            "letterboxdUrl": "https://boxd.it/tbEe",
            "title": "Belle",
            "titleDisplayed": "Belle: The Dragon and the Freckled Princess",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/sp0LOwp7dVeF2c2fn9l422O5cdb.jpg",
            "myTags": [
                "Virtual world", 
                "Social media",
                "Bullying",
                "Friendship",
                "Sad", 
                "Great soundtrack", 
                "Colourful",
                "Anime",
                "Girl power"
            ],
        },
    
        "before_sunset": {
            "letterboxdUrl": "https://boxd.it/2bcg",
            "title": "Before Sunset",
            "myRating": "10",
            "myTags": ["Poetic", "Travelling", "Profound", "Happy-sad", "A slice of life"],
            "myReview": ""
        },
    
        "beginners": {
            "letterboxdUrl": "https://boxd.it/s2S",
            "title": "Beginners",
            "myRating": "8.25",
            "myTags": ["Friendship", "Soulmate", "Forgiveness", "Melancholic", "Depressing", "Honest"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/io2Tm89or3jO2pDtEAPEACx4wUe.jpg"
        },
    
        "blue_valentine": {
            "letterboxdUrl": "https://boxd.it/MxG",
            "title": "Blue Valentine",
            "myRating": "8.5",
            "myTags": ["Melancholic", "Poetic", "Sad", "Depressing", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/dc8BdKnDY5Iy28KzUGtHIXuqqFK.jpg"
        },
    
        "boyhood": {
            "letterboxdUrl": "https://boxd.it/3178",
            "title": "Boyhood",
            "myRating": "8.5",
            "myTags": ["A slice of life", "Finding yourself", "Family", "Friendship", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/2BvtvDUyxiMJ4dmKfiQf4qdOHQN.jpg"
        },
    
        "being_john_malkovich": {
            "letterboxdUrl": "https://boxd.it/2ahu",
            "title": "Being John Malkovich",
            "myRating": "8.75",
            "myTags": ["Surrealist fantasy comedy", "Questioning reality", "Funny", "Quirky"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/xVSvIwRNzwXSs0CLefiiG6A96m4.jpg"
        },
    
        "batman_returns": {
            "letterboxdUrl": "https://boxd.it/2awa",
            "title": "Batman Returns",
            "myRating": "9.5",
            "myTags": ["Disturbing", "Weird", "Conspiracy", "Neogothic", "Neogothic architecture", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../websiteContent/films/batman_returns/custom_poster.png'),
        },
    
        "birdman": {
            "letterboxdUrl": "https://boxd.it/5RFA",
            "title": "Birdman or (The Unexpected Virtue of Ignorance)",
            "titleDisplayed": "Birdman",
            "myRating": "9.5",
            "myTags": ["One-take", "Inspiring", "Nightlife", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/umy673Pxug9rJRMoJM1TPHs62rZ.jpg"
        },
    
        "back_to_the_future": {
            "letterboxdUrl": "https://boxd.it/2b8e",
            "title": "Back to the Future",
            "myRating": "10",
            "myTags": ["Uplifting", "Timey-wimey"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ntLDP6LYTkxcUDVR0ud3aI0X4QH.jpg"
        },
    
        "battle_royale": {
            "letterboxdUrl": "https://boxd.it/25zS",
            "title": "Battle Royale",
            "myRating": "8.0",
            "myTags": ["Social commentary", "Great character depth"],
            "myReview": "",
            "gradualInterest": [6, 8, 9, 9, 9, 8, 8, 8, 8, 8, 7]
        },
        
        "black_sheep": {
            "letterboxdUrl": "https://boxd.it/257k",
            "title": "Black Sheep",
            "myRating": "7.5",
            "myTags": ["Funny", "Gory", "Absurd", "Creature-feature"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/pVpQHtGsGFGRxaq2Fh3LrA5QJiN.jpg"
        },
    
        "bunny_drop": {
            "letterboxdUrl": "https://boxd.it/3kf6",
            "title": "Bunny Drop",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/kt8HccnWkg464C6OawGamwNF2ZG.jpg"
        },
    
        "blame": {
            "letterboxdUrl": "https://boxd.it/eq1Q",
            "title": "BLAME!",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/7eoRQY7VUMawwBnuD6uwN4szc8k.jpg"
        },
    
        "before_sunrise": {
            "letterboxdUrl": "https://boxd.it/2bcU",
            "title": "Before Sunrise",
            "myRating": "9.0",
            "myTags": ["Soulmate"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 9, 9, 9, 9, 9],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/aZ2Vkrc4RqIjewYbmfy74oDgZfX.jpg"
        },
    
        "buried": {
            "letterboxdUrl": "https://boxd.it/1tXC",
            "title": "Buried",
            "myRating": "7.75",
            "myTags": ["Claustrophobic"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/splPNB0vAoNlb8l5WYxz2E3FK2G.jpg"
        },
    
        "big_fish_and_begonia": {
            "letterboxdUrl": "https://boxd.it/8bfm",
            "title": "Big Fish & Begonia",
            "titleDisplayed": "Big Fish and Begonia",
            "myRating": "9.5",
            "myTags": ["Life", "Death", "Magic", "The afterlife", "Oceans", "Sealife", "Amazing cinematography", "Great soundtrack"],
            "myReview": "",
            "screenshots": screenshots.BIG_FISH_AND_BEGONIA,
            "myReview": ReactDomServer.renderToString(BigFishAndBegoniaReview(screenshots.BIG_FISH_AND_BEGONIA)),
            "gradualInterest": [8, 9, 9, 9, 8, 7, 8, 9, 10, 9],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/tAmHBydreAbLn0gPXBHmbyEytNP.jpg"
        },
    },

    C: {
        "children_of_the_sea": {
            "letterboxdUrl": "https://boxd.it/lwe6",
            "title": "Children of the Sea",
            "myRating": "10",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/i91YrURnZPCKhpNyIxkAAzBb4t9.jpg",
            "myTags": ["The origins of life", "Astronomy", "Cosmology", "Spirituality", "The mysteries of the ocean world", "Exploring new perspectives", "Audio-visual spectacle"],
            "screenshots": screenshots.CHILDREN_OF_THE_SEA,
            "myReview": ReactDomServer.renderToString(ChildrenOfTheSeaReview(screenshots.CHILDREN_OF_THE_SEA)),
            "gradualInterest": [8, 8, 8, 8, 8, 9, 9, 10, 10, 10, 10],
        },
    
        "confessions": {
            "letterboxdUrl": "https://boxd.it/uRS",
            "title": "Confessions",
            "myRating": "8.25",
            "myTags": ["Audio-visual spectacle", "Poetic", "Exploring the dark depths of humanity", "Cognitive dissonance", "Confusing", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/wFP2iimW9gLrs3RAL1jhnPAq7ze.jpg"
        },
    
        "chicken_run": {
            "letterboxdUrl": "https://boxd.it/20Xg",
            "title": "Chicken Run",
            "myRating": "8.75",
            "myTags": ["Fun", "Kids film", "Animal welfare", "Emotional", "Great soundtrack", "Nostalgic"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/eyAux0xsqSaCthc1wY6mQjZjS4A.jpg"
        },
    
        "crawl": {
            "letterboxdUrl": "https://boxd.it/iwYi",
            "title": "Crawl",
            "myRating": "7.5",
            "myTags": ["Total escapism", "Creature-feature", "One-location", "Claustrophobic", "Hurricane setting", "Brutal", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/9kOtMOUa5HrOiIG2Z9Anv7M8AbY.jpg"
        },
    
        "cloud_atlas": {
            "letterboxdUrl": "https://boxd.it/2W60",
            "title": "Cloud Atlas",
            "myRating": "8.25",
            "myTags": ["Very long"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/8naVv2Xu3rWI5JKHz0vCujx6GaJ.jpg"
        },
    
        "castaway_on_the_moon": {
            "letterboxdUrl": "https://boxd.it/1GXU",
            "title": "Castaway on the Moon",
            "myRating": "8.25",
            "myTags": ["Alone in the wilderness", "Survival story", "Soulmate", "Finding yourself", "Humanity and nature coexisting", "Quirky", "Lonelyness"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/cHwspwAQwZNCTOhcquvXoGop0SQ.jpg"
        },
    
        "creep": {
            "letterboxdUrl": "https://boxd.it/203C",
            "title": "Creep",
            "myRating": "7.75",
            "myTags": ["Disturbing", "Claustrophobic", "Stuck underground", "Gross", "London", "Homelessness", "Great soundtrack"],
            "myReview": ""
        },
    
        "cadaver": {
            "letterboxdUrl": "https://boxd.it/pSAG",
            "title": "Cadaver",
            "myRating": "8.0",
            "myTags": ["Atmospheric", "Post-apocalypse society", "Conspiracy", "Stuck underground", "Layered", "Mysterious", "Loss of identity", "Cults"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/jbYvBVXbNW3eVZqKNB4FxMpSvci.jpg"
        },
    
        "carrie": {
            "letterboxdUrl": "https://boxd.it/20ZQ",
            "title": "Carrie",
            "myRating": "8.5",
            "myTags": ["Bullying", "Satan", "Possession", "Telekenesis", "School setting"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/8tT1rqlsTguyfUBMrbHR9cv1rxM.jpg"
        },
    
        "coraline": {
            "letterboxdUrl": "https://boxd.it/1NhQ",
            "title": "Coraline",
            "myRating": "8.5",
            "myTags": ["Creepy", "Terrifying", "Intricate animation style", "Colourful"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/4jeFXQYytChdZYE9JYO7Un87IlW.jpg"
        },
    
        "cloverfield": {
            "letterboxdUrl": "https://boxd.it/2192",
            "title": "Cloverfield",
            "myRating": "8.75",
            "myTags": ["Found-footage", "Terrifying", "Wild", "Intense", "Aliens", "End of the world"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/qIegUGJqyMMCRjkKV1s7A9MqdJ8.jpg"
        },
    
        "coco": {
            "letterboxdUrl": "https://boxd.it/bYJQ",
            "title": "Coco",
            "myRating": "9.0",
            "myTags": ["Emotional", "Total escapism", "The universal power of music", "Friendship", "Deeper than a kids film", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/8AECsRLEDLoNvZ8JqrTFm0zBPqH.jpg"
        },
    
        "children_of_men": {
            "letterboxdUrl": "https://boxd.it/1Y2i",
            "title": "Children of Men",
            "myRating": "9.5",
            "myTags": ["Contemplative sci-fi", "Post-apocalypse society", "Near future technology"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/b9fZBbJQcITls88PpqsagAIBagM.jpg"
        },
    
        "contact": {
            "letterboxdUrl": "https://boxd.it/29OM",
            "title": "Contact",
            "myRating": "9.0",
            "myTags": ["Contemplative sci-fi", "Exploration beyond the solar system", "Alien technology", "Search for Extraterrestrial Intelligence (SETI)"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/wAhkO5iaVIkKBdpR9kvToHaNyKD.jpg"
        },
    
        "citadel": {
            "letterboxdUrl": "https://boxd.it/A3E",
            "title": "Citadel",
            "myRating": "7.5",
            "myTags": ["Ireland", "Zombies", "Agoraphobia", "Disturbing", "Dark"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 8, 8, 8]
        },
    
        "climax": {
            "letterboxdUrl": "https://boxd.it/ikvo",
            "title": "Climax",
            "myRating": "8.25",
            "myTags": [],
            "myReview": "",
            "screenshots": screenshots.CLIMAX,
            "gradualInterest": [8, 8, 8, 7, 7, 6, 8, 9, 9]
        },
    
        "children_who_chase_lost_voices": {
            "letterboxdUrl": "https://boxd.it/2M6k",
            "title": "Children Who Chase Lost Voices",
            "myRating": "8.25",
            "myTags": [],
            "myReview": "",
            "screenshots": screenshots.CHILDREN_WHO_CHASE_LOST_VOICES,
            "gradualInterest": [7, 8, 8, 8, 8, 8, 8, 9, 8, 8, 9, 8]
        },
    
        "cashback": {
            "letterboxdUrl": "https://boxd.it/1Sf6",
            "title": "Cashback",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/nz28d5ZSUe0hJdvd69L7SsVJW0V.jpg",
            "screenshots": screenshots.CASHBACK,
        },
    
        "carter": {
            "letterboxdUrl": "https://boxd.it/u7UO",
            "title": "Carter",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
        },
    
        "convenience_story": {
            "letterboxdUrl": "https://boxd.it/BCig",
            "title": "Convenience Story",
            "myRating": 7.5,
            "myTags": [""],
            "myReview": "",
            "screenshots": screenshots.CONVENIENCE_STORY,
        },
    
        "cub": {
            "letterboxdUrl": "https://boxd.it/8N9G",
            "title": "Cub",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 8, 8, 8]
        },
    
        "cj7": {
            "letterboxdUrl": "https://boxd.it/1PCG",
            "title": "CJ7",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/v8xUyWtRrFmZ5iVEHI0pbQuxHD5.jpg",
            "screenshots": screenshots.CJ7,
        },
    },

    D: {
        "detachment": {
            "myRating": 9.0,
            "letterboxdUrl": "https://boxd.it/2BiY",
            "title": "Detachment",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/lw1wlekuMMKxmYg7v01vB7Snkq6.jpg",
            "myReview": "",
            "myTags": [
                "School",
                "Teacher-student dichotomy",
                "Addiction",
                "Profound",
                "Melancholic",
                "Kindness",
                "Sad",
                "Depressing"
            ],
        },
    
        "district9": {
            "myRating": 9.75,
            "letterboxdUrl": "https://boxd.it/1Iik",
            "title": "District 9",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
            "myTags": [
                "Total escapism", 
                "Intimate story within epic sci-fi plot", 
                "Aliens", 
                "Metamorphosis", 
                "Exploring the dark depths of humanity"
            ],
        },
    
        "doctor_sleep": {
            "letterboxdUrl": "https://boxd.it/i5vI",
            "title": "Doctor Sleep",
            "myRating": "8.0",
            "myTags": ["Disturbing", "Atmospheric"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/p69QzIBbN06aTYqRRiCOY1emNBh.jpg"
        },
    
        "dead_set": {
            "letterboxdUrl": "https://boxd.it/5ppu",
            "title": "Dead Set",
            "myRating": "8.5",
            "myTags": ["Zombies", "Depressing", "Brutal", "Gory", "Social commentary", "Mini-series but it might as well be a long film"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/j6Ja8AyVxbeUgGAD3nGr1jV1nwX.jpg"
        },
    
        "devs": {
            "letterboxdUrl": "https://boxd.it/ppHI",
            "title": "Devs",
            "myRating": "8.5",
            "myTags": ["Contemplative sci-fi", "Conspiracy", "Quantum computing", "Religion", "Faith", "Randomness", "Determinism", "Harnessing the power of computers to do amazing things", "Great soundtrack", "Mini series but might as well be a long film"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/uv63iNWOh69bSJYJQZjiX6n8B3m.jpg"
        },
        
        "dont_worry_he_wont_get_far_on_foot": {
            "letterboxdUrl": "https://boxd.it/fLeo",
            "title": "Don't Worry, He Won't Get Far On Foot",
            "myRating": "7.75",
            "myTags": ["Death", "Stoicism"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/50hz3aCL2U2BPkxnv6JcMZ7g4eF.jpg"
        },
    
        "dogville": {
            "letterboxdUrl": "https://boxd.it/2a8W",
            "title": "Dogville",
            "myRating": "7.5",
            "myTags": ["Innovative", "One-location", "Depressing", "Challenging to watch at times"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/liQwD1KipGNUdyFKOUs1wzISrAf.jpg"
        },
    
        "deep_sea": {
            "letterboxdUrl": "https://boxd.it/oRIs",
            "title": "Deep Sea",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 9, 8, 8, 9, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/mhugOCm0eC1BP6nDjnaSRvgorQj.jpg"
        },
    
        "dead_leaves": {
            "letterboxdUrl": "https://boxd.it/1L54",
            "title": "Dead Leaves",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/793WvrgqnX6Xvz7XNAXmKGLVfiC.jpg"
        },
    
        "diner": {
            "letterboxdUrl": "https://boxd.it/kOde",
            "title": "Diner",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": ""
        },
      
        "dave_made_a_maze": {
            "letterboxdUrl": "https://boxd.it/fof4",
            "title": "Dave Made A Maze",
            "myRating": "7.5",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 7, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/7Z5sEOC8Y7bdrg7FmIfNGkNniyX.jpg"
        },
    },

    E: {
        "exte_hair_extensions": {
            "letterboxdUrl": "https://boxd.it/1Bn8",
            "title": "Exte: Hair Extensions",
            "myRating": "8.5",
            "myTags": ["Brutal", "Metamorphosis", "Fun", "Mad concept"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/qyHtXQchUu7DpeUNabDFIVnBRtq.jpg"
        },
    
        "eddie_the_eagle": {
            "letterboxdUrl": "https://boxd.it/amAY",
            "title": "Eddie the Eagle",
            "myRating": "10",
            "myTags": ["Inspiring", "Uplifting", "Proving people wrong", "Being the underdog", "Finding yourself", "Soulmate", "Friendship"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/80fwjYfHmeDXobIErpNvCFCOAYd.jpg"
        },
    
        "europa_report": {
            "letterboxdUrl": "https://boxd.it/5n0s",
            "title": "Europa Report",
            "myRating": "8.5",
            "myTags": ["Contemplative sci-fi", "Profound",  "Amazing CGI", "Found footage", "Mokumentary", "Exploration of untouched places in the solar system that may harbour unique lifeforms"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/viT7XVaQNUIUCcByF8vnSaJA7BH.jpg"
        },
    
        "ex_machina": {
            "letterboxdUrl": "https://boxd.it/7T2k",
            "title": "Ex Machina",
            "myRating": "9.5",
            "myTags": ["Contemplative sci-fi", "Artificial Intelligence", "Revolution"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/2NXq2aopRfdxjVwM2wl9KE8cMSP.jpg"
        },
    
        "evil_dead": {
            "letterboxdUrl": "https://boxd.it/3GPq",
            "title": "Evil Dead",
            "myRating": "8.75",
            "myTags": ["Brutal", "Gory", "Wild", "Satan", "Possession"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/gRBTMsnU8bXaPwrZ9ixfOZ98ONk.jpg"
        },
    
        "evil_dead_2": {
            "letterboxdUrl": "https://boxd.it/29Ge",
            "title": "Evil Dead II",
            "myRating": "8.75",
            "myTags": ["Brutal", "Gory", "Wild", "Satan", "Possession", "Timey-wimey"],
            "myReview": ""
        },
        
        "evil_dead_rise": {
            "letterboxdUrl": "https://boxd.it/qIvo",
            "title": "Evil Dead Rise",
            "myRating": "8.25",
            "myTags": ["Gory", "Chaotic", "Intense", "Creature-feature"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/cXlFYrSIiRf80KYneHw4FE71u4j.jpg"
        },
    },

    F: {
        "flatland": {
            "myRating": 10,
            "letterboxdUrl": "https://boxd.it/2sXo",
            "title": "Flatland: The Film",
            "screenshots": screenshots.FLATLAND,
            "myReview": ReactDomServer.renderToString(FlatlandReview(screenshots.FLATLAND)),
            "myTags": [
                "Dimensionality",
                "Questioning reality",
                "Perspective",
                "Mathematics",
                "War",
                "Corruption",
                "Emotional"
            ],
        },
    
        "feast": {
            "myRating": 7.5,
            "letterboxdUrl": "https://boxd.it/1Xag",
            "title": "Feast",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/4wNJiD1c8lb5qyGYXAXY8JJaNLf.jpg",
            "screenshots": screenshots.FEAST,
            "myReview": ReactDomServer.renderToString(FeastReview(screenshots.FEAST)),
            "myTags": [
                "Creature-feature",
                "One-location",
                "Survival",
                "Fun",
                "Cool practical effects"
            ],
        },
    
        "finding_nemo": {
            "letterboxdUrl": "https://boxd.it/72i",
            "title": "Finding Nemo",
            "myRating": "8.75",
            "myTags": ["Fun", "Nostalgic", "Kids film", "Friendship", "Family"],
            "myReview": ""
        },
    
        "face_off": {
            "letterboxdUrl": "https://boxd.it/29I0",
            "title": "Face/Off",
            "myRating": "8.0",
            "myTags": ["Total escapism", "Fun", "Mad concept", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/69Xzn8UdPbVnmqSChKz2RTpoNfB.jpg"
        },
    
        "fantastic_mr_fox": {
            "letterboxdUrl": "https://boxd.it/1WyQ",
            "title": "Fantastic Mr. Fox",
            "myRating": "8.75",
            "myTags": ["Intricate animation style", "Animal welfare", "Humanity and nature coexisting", "Fun", "Friendship", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/euZyZb6iGreujYKrGyZHRddhUYh.jpg",
        },
    
        "fantastic_planet": {
            "letterboxdUrl": "https://boxd.it/1KnQ",
            "title": "Fantastic Planet",
            "myRating": "8.75",
            "myTags": ["Surrealism", "Quirky", "Aliens", "Future society"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/KQZ9gjmlzwS7lZMqGEC28pYoVs.jpg"
        },
    
        "frontiers": {
            "letterboxdUrl": "https://boxd.it/1Q3M",
            "title": "Frontier(s)",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/lX5XyaUQ4yXRY1knq5N8IKj6Ua4.jpg"
        },
    
        "flying_colours": {
            "letterboxdUrl": "https://boxd.it/bJVW",
            "title": "Flying Colours",
            "myRating": "9.0",
            "myTags": ["Awakening", "Studying", "J-drama"],
            "myReview": "",
            "gradualInterest": [7, 8, 8, 9, 9, 10, 9, 9, 9, 8, 9, 9]
        },
    
        "fall": {
            "letterboxdUrl": "https://boxd.it/Bf6G",
            "title": "Fall",
            "myRating": "8.0",
            "myTags": ["Intense", "Fear of heights", "Survival story", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8]
        },
    },

    G: {
        "good_will_hunting": {
            "letterboxdUrl": "https://boxd.it/2ahY",
            "title": "Good Will Hunting",
            "myRating": "8.75",
            "myTags": ["Student teacher dichotomy", "Poetic", "Contemplative", "Learning"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/yK7xOCXGsrk0B26wCMNitRYzyDg.jpg"
        },
    
        "gremlins": {
            "letterboxdUrl": "https://boxd.it/29gg",
            "title": "Gremlins",
            "myRating": "8.75",
            "myTags": ["Fun", "Gross", "Creature-feature", "Causing havoc in a fairly normal town"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/gDSfs0hqAQVJ9jIHbX3AJ3StTVG.jpg"
        },
    
        "get_out": {
            "letterboxdUrl": "https://boxd.it/eOCm",
            "title": "Get Out",
            "myRating": "10",
            "myTags": ["Psychlogical thriller", "Social commentary", "Terrifying"],
            "myReview": ""
        },
    
        "guns_akimbo": {
            "letterboxdUrl": "https://boxd.it/gkFu",
            "title": "Guns Akimbo",
            "myRating": "8.0",
            "myTags": ["Intense", "Action genre done right", "Dystopian game"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/vV23MzddmlZJ6TIXpmRUyGV9961.jpg"
        },
    
        "greener_grass": {
            "letterboxdUrl": "https://boxd.it/jYoY",
            "title": "Greener Grass",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "gradualInterest": [8, 8, 7, 7, 8, 8, 7, 8, 9, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/qu7uH9cU3eEaACAtR1CUt0HKnS5.jpg"
        },
    
        "get_duked": {
            "letterboxdUrl": "https://boxd.it/llgK",
            "title": "Get Duked!",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "screenshots": screenshots.GET_DUKED,
        },
    },

    H: {
        "hatching": {
            "myRating": 8.0,
            "letterboxdUrl": "https://boxd.it/iKDo",
            "title": "Hatching",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/aJBeIOneNaNP779rYQ3uPJCIOLA.jpg",
            "myTags": [
                "Brutal", 
                "Doppelganger", 
                "Disturbing", 
                "Metamorphosis", 
                "Creature-feature", 
                "Social media", 
                "Fake celebrity personas"
            ],
        },
    
        "happy_go_lucky": {
            "myRating": 9.5,
            "letterboxdUrl": "https://boxd.it/1W68",
            "title": "Happy-go-Lucky",
            "myReview": "",
            "myTags": [
                "A slice of life", 
                "Finding happiness", 
                "Friendship", 
                "Finding yourself", 
                "Stoicism", 
                "Great soundtrack"
            ],
        },
    
        "hacksaw_ridge": {
            "letterboxdUrl": "https://boxd.it/azew",
            "title": "Hacksaw Ridge",
            "myRating": "8.0",
            "myTags": ["War", "Finding positives out of negatives", "Not giving up despite being in a shitty situation", "Inspiring", "Brutal"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/jhWbYeUNOA5zAb6ufK6pXQFXqTX.jpg"
        },
    
        "hot_fuzz": {
            "letterboxdUrl": "https://boxd.it/2416",
            "title": "Hot Fuzz",
            "myRating": "9.5",
            "myTags": ["Murder mystery", "British humour", "Funny"],
            "myReview": ""
        },
    
        "hereditary": {
            "letterboxdUrl": "https://boxd.it/hNVe",
            "title": "Hereditary",
            "myRating": "7.75",
            "myTags": ["Terrifying", "Gross", "Family", "Betrayl", "Possession"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg"
        },
    
        "her": {
            "letterboxdUrl": "https://boxd.it/4O24",
            "title": "Her",
            "myRating": "10",
            "myTags": ["Lonleiness", "Artificial Intelligence", "Soulmate", "Melancholic", "Emotional", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://alternativemovieposters.com/wp-content/uploads/2021/07/GarbhanGrant_Her.jpg"
        },
    
        "helter_skelter": {
            "letterboxdUrl": "https://boxd.it/3ybW",
            "title": "Helter Skelter",
            "myRating": "8.0",
            "myTags": ["Challenging to watch at times", "Audio-visual spectacle", "Addiction", "Isolation", "Fake celebrity personas", "Terrifying"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/rctha2z3lZ5YTCo4IE3cUJT4q2D.jpg"
        },
    
        "howls_moving_castle": {
            "letterboxdUrl": "https://boxd.it/23De",
            "title": "Howl’s Moving Castle",
            "myRating": "8.25",
            "myTags": ["War", "Magic", "Studio Ghibli"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 9, 9, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/6eFP0Es081OtWQu5nvvjg99ZIiq.jpg"
        },
    
        "himizu": {
            "letterboxdUrl": "https://boxd.it/3oFs",
            "title": "Himizu",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/8qDMK0MMSH7rMMrFZP0zgmz64kf.jpg"
        },
    
        "hells": {
            "letterboxdUrl": "https://boxd.it/4e8q",
            "title": "Hells",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
        },
    
        "hellbender": {
            "letterboxdUrl": "https://boxd.it/w1Im",
            "title": "Hellbender",
            "myRating": "7.75",
            "myTags": ["Satanic rituals"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/rDw9qBKd7xCkhan5IHqlZIrhZK3.jpg"
        },
    },

    I: {
        "in_the_mouth_of_madness": {
            "letterboxdUrl": "https://boxd.it/26vi",
            "title": "In The Mouth of Madness",
            "myRating": "8.5",
            "myTags": ["Lovecraftian horror", "Creature-feature", "Questioning reality", "Hallucinations", "Cults"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/bNh5iySaJ15tvLjGrYsw1JNhx8l.jpg"
        },
    
        "isle_of_dogs": {
            "letterboxdUrl": "https://boxd.it/dZrW",
            "title": "Isle of Dogs",
            "myRating": "9.0",
            "myTags": ["Intricate animation style", "Great cinematography", "Animal welfare", "Humanity and nature coexisting", "Fun", "Friendship", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl":  "https://www.themoviedb.org/t/p/original/rSluCePdXXtNiQeE6Na5yRGamhL.jpg"
        },
    
        "im_thinking_of_ending_things": {
            "letterboxdUrl": "https://boxd.it/i4IQ",
            "title": "I'm Thinking of Ending Things",
            "myRating": "8.25",
            "myTags": ["Atmospheric", "Confusing", "Weird", "Snow", "Intimate", "Lonely", "Creepy"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/iCEeZ9Lkzx5Pw72BoSpbystzTpV.jpg"
        },
    
        "insidious": {
            "letterboxdUrl": "https://boxd.it/H4k",
            "title": "Insidious",
            "myRating": "9.25",
            "myTags": ["Disturbing", "Terrifying", "Possession"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/tmlDFIUpGRKiuWm9Ixc6CYDk4y0.jpg"
        },
    
        "inside_out": {
            "letterboxdUrl": "https://boxd.it/4KHC",
            "title": "Inside Out",
            "myRating": "9.0",
            "myTags": ["Emotional", "Friendship", "Anger", "Clever analogy for real life feelinsg", "Layered", "Deeper than a kids film", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg"
        },
    
        "its_a_wonderful_life": {
            "letterboxdUrl": "https://boxd.it/28xA",
            "title": "It's a Wonderful Life",
            "myRating": "9.25",
            "myTags": ["Family", "Death", "Beyond existence"],
            "myReview": ""
        },
    
        "interstellar": {
            "letterboxdUrl": "https://boxd.it/4VZ8",
            "title": "Interstellar",
            "myRating": "9.25",
            "myTags": ["Space exploration", "Timey-wimey"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/fX44bgxKQsS4P4ewb2iotHveEkn.jpg"
        },
    
        "infinity_pool": {
            "letterboxdUrl": "https://boxd.it/oPSK",
            "title": "Infinity Pool",
            "myRating": "8.5",
            "myTags": ["Rebirth", "Hallucinogenic", "Psychedlic", "Vicious", "Disgusting", "Phantasmagoria", "Insecurity", "Ego", "Atmospheric", "Constantly surprising", "Defamiliarization", "Hedonistic", "Libertine"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 9, 8, 8, 8, 9, 9],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/5DNRr2juXdwtvktwXxwuk9Usk8O.jpg"
        },
    
        "in_fabric": {
            "letterboxdUrl": "https://boxd.it/h2sY",
            "title": "In Fabric",
            "myRating": "8.5",
            "myTags": ["Atmospheric", "Ghosts", "Creepy", "Melancholic", "British humour", "Synthwave", "Great soundtrack"],
            "myReview": "",
            "gradualInterest": [8, 8, 9, 9, 8, 8, 8, 7, 7, 7, 7, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/y9QjwDLV5SAtRxYF5h1gRsDFaLd.jpg"
        },
    
        "in_the_tall_grass": {
            "letterboxdUrl": "https://boxd.it/iZpm",
            "title": "In The Tall Grass",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/1RxhzwFkAUqMt215Brb06u8P8pn.jpg"
        },
    
        "incredible_but_true": {
            "letterboxdUrl": "https://boxd.it/rBtC",
            "title": "Incredible But True",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": ""
        },
    
        "it_comes_at_night": {
            "letterboxdUrl": "https://boxd.it/eLuk",
            "title": "It Comes At Night",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 9, 8, 8, 8, 4]
        },
    
        "incident_in_a_ghostland": {
            "letterboxdUrl": "https://boxd.it/h5Uw",
            "title": "Incident in a Ghostland",
            "myRating": "8.5",
            "myTags": ["Disturbing", "Harrowing", "Challenging to watch at times", "Intense", "Bleak", "Non-linear timeline"],
            "myReview": "",
            "gradualInterest": [7, 8, 8, 8, 8, 8, 9, 9, 9]
        },
    },

    J: {
        "jungle": {
            "letterboxdUrl": "https://boxd.it/dCpo",
            "title": "Jungle",
            "myRating": "7.75",
            "myTags": ["Embrace mother nature", "Alone in the wilderness", "South American culture", "Jungle setting", "Not giving up despite being in a shitty situation", "Brutal", "Hallucinations"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/tDgxknTVwrScxpCYyGUjXSn5NRk.jpg"
        },
    
        "jojo_rabbit": {
            "letterboxdUrl": "https://boxd.it/iEBG",
            "title": "Jojo Rabbit",
            "myRating": "9.5",
            "myTags": ["War", "Emotional", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/yfT4bdrKKUZAjWD9Zii45nEN668.jpg"
        },
    
        "jin_roh_the_wolf_brigade": {
            "letterboxdUrl": "https://boxd.it/29wS",
            "title": "Jin-Roh: The Wolf Brigade",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/yO7Ev1VFqMHcwd6GJl4mjmoCyJd.jpg"
        },
    },

    K: {
        "kikis_delivery_service": {
            "myRating": 8.75,
            "letterboxdUrl": "https://boxd.it/1JAY",
            "title": "Kiki's Delivery Service",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/rlNKTz07MtYlIJY6zKaQedRN8HF.jpg",
            "myTags": [
                "Endearing",
                "Happiness", 
                "Growing up", 
                "Discovering independence", 
                "Finding yourself", 
                "Soulmate", "Flying", 
                "Positive reflection on witches", 
                "Utopia", 
                "Anime", 
                "Great soundtrack"
            ],
        },
    
        "kimi": {
            "letterboxdUrl": "https://boxd.it/u7LW",
            "title": "Kimi",
            "myRating": "8.0",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/im91Ho4WkhVroehZJiIUoOF6UIl.jpg",
            "myTags": [
                "Covid setting",
                "Conspiracy", 
                "Mysterious", 
                "Isolation", 
                "Great soundtrack"
            ],
        },
    
        "kpax": {
            "letterboxdUrl": "https://boxd.it/2aYo",
            "title": "K-PAX",
            "myRating": "8.25",
            "myTags": ["Melancholic", "Mysterious", "Alien visitor disguised as human", "Search for Extraterrestrial Intelligence (SETI)", "Quirky", "Mental hospital"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/vJqhlC6QNXFxFhJ02kg1CFtcaa.jpg"
        },
    },

    L: {
        "life_is_beautiful": {
            "myRating": 10,
            "letterboxdUrl": "https://boxd.it/29Wm",
            "title": "Life Is Beautiful",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/3XWYY0byr0kSW6aK5eJ9FHPI2AN.jpg",
            "myTags": [
                "Emotional", 
                "Finding happiness", 
                "Turning negatives into positives", 
                "Family", 
                "War"
            ],
        },
    
        "love_exposure": {
            "myRating": 8.25,
            "letterboxdUrl": "https://boxd.it/1pDe",
            "title": "Love Exposure",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/83i9Q1WmWcogcPGv501D26BoEyT.jpg",
            "myTags": [
                "Exploring the dark depths of humanity",
                "Challenging to watch at times",
                "Very long",
                "Great soundtrack",
                "Poetic",
                "Profound",
                "Friendship",
                "Religion"
            ],
        },
    
        "la_la_land": {
            "letterboxdUrl": "https://boxd.it/a5fa",
            "title": "La La Land",
            "myRating": "8.75",
            "myTags": ["Uplifting", "Finding yourself", "Friendship", "Great soundtrack"],
            "myReview": ""
        },
    
        "lion": {
            "letterboxdUrl": "https://boxd.it/b2La",
            "title": "Lion",
            "myRating": "9.75",
            "myTags": ["Poverty", "Family", "Emotional"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/mcbFRezI77mJveOVzKvpPaF8nzK.jpg"
        },
    
        "life_of_pi": {
            "letterboxdUrl": "https://boxd.it/37pC",
            "title": "Life of Pi",
            "myRating": "10",
            "myTags": ["Exploring new places", "Survival story", "Based on a true story", "Stranded at sea"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/7E5xQtLFmN6r2jLsSbWQL2cfnS6.jpg"
        },
    
        "last_and_first_men": {
            "letterboxdUrl": "https://boxd.it/kKi0",
            "title": "Last and First Men",
            "myRating": "8.0",
            "myTags": ["Exploring unknown territory"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 9, 8]
        },
    
        "last_life_in_the_universe": {
            "letterboxdUrl": "https://boxd.it/1Tri",
            "title": "Last Life in the Universe",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/dOdGczlrw5e1p5SrywEt1v0H5qp.jpg"
        },
    
        "lupin_the_third_the_castle_of_cagliostro": {
            "letterboxdUrl": "https://boxd.it/1Mn4",
            "title": "Lupin the Third: The Castle of Cagliostro",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "screenshots": screenshots.LUPIN_THE_THIRD,
        },
    
        "limbo": {
            "letterboxdUrl": "https://boxd.it/lLRW",
            "title": "Limbo",
            "myRating": "8.0",
            "myTags": [],
            "myReview": "",
            "screenshots": screenshots.LIMBO,
            "gradualInterest": [7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/7Hh2w1ei26DTJ3JWmW8qcGQUI1n.jpg"
        },
    
        "leave_no_trace": {
            "letterboxdUrl": "https://boxd.it/fMfM",
            "title": "Leave No Trace",
            "myRating": "7.5",
            "myTags": ["Nature", "Discovering indepdence"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/sygnLx3sZV5P8M2dyaGRegHdEL1.jpg"
        },
        
        "last_sunrise": {
            "letterboxdUrl": "https://boxd.it/lvxQ",
            "title": "Last Sunrise",
            "myRating": "8.75",
            "myTags": ["Astronomy", "Night skies", "End of the world", "Contemplative sci-fi", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 7, 8, 9, 9, 9],
            "customPosterUrl": require('../websiteContent/films/last_sunrise/custom_poster.jpg')
        },
    },

    M: {
        "mother!": {
            "myRating": 9.5,
            "letterboxdUrl": "https://boxd.it/dgRU",
            "title": "mother!",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/2yOKarmL8B4oXaLXUdHu882SUbu.jpg",
            "myTags": [
                "Intense", 
                "Polarising", 
                "One-location", 
                "Challenging to watch at times", 
                "Religion", 
                "Exploring the dark depths of humanity", 
                "Disturbing"
            ],
        },
    
        "mr_nobody": {
            "myRating": 9.75,
            "letterboxdUrl": "https://boxd.it/1k44",
            "title": "Mr. Nobody",
            "myReview": "",
            "myTags": [
                "Poetic", 
                "Profound", 
                "The many possibilities of life", 
                "Beyond existence", 
                "Immortality", 
                "Randomness", 
                "Emotional", 
                "Utopia", 
                "Futuristic", 
                "Family", 
                "Great soundtrack"
            ],
        },
    
        "mfkz": {
            "letterboxdUrl": "https://boxd.it/gvme",
            "title": "MFKZ",
            "myRating": "8.0",
            "myTags": ["Intricate animation style", "South American culture", "Mad concept", "Superheros", "Great cinematography", "Great soundtrack"],
            "myReview": ""
        },
    
        "martyrs": {
            "letterboxdUrl": "https://boxd.it/1Yqu",
            "title": "Martyrs",
            "myRating": "8.0",
            "myTags": ["Challenging to watch at times", "Brutal", "Claustrophobic", "Exploring the dark depths of humanity", "Very long", "Disturbing", "Not one to watch with the family"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/2PmVlnPVG8tGXqC85YiHzL0jX40.jpg"
        },
    
        "memento": {
            "letterboxdUrl": "https://boxd.it/2bcK",
            "title": "Memento",
            "myRating": "8.0",
            "myTags": ["Non-linear timeline", "Confusing"],
            "myReview": ""
        },
    
        "monsters": {
            "letterboxdUrl": "https://boxd.it/Tdy",
            "title": "Monsters",
            "myRating": "7.75",
            "myTags": ["Atmospheric", "Melancholic", "Aliens", "Soulmate", "Travelling", "Alone in the wilderness", "Virus", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/lH6oWfGjwnM81Nzu8vipx9OfPmv.jpg"
        },
    
        "marcel_the_shell_with_shoes_on": {
            "letterboxdUrl": "https://boxd.it/wMAk",
            "title": "Marcel the Shell with Shoes On",
            "myRating": "8.0",
            "myTags": ["Quirky", "Endearing", "Poetic", "Mokumentary", "Fun", "Friendship", "Finding your people", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/jaYmP4Ct8YLnxWAW2oYkUjeXtzm.jpg"
        },
    
        "midnight_in_paris": {
            "letterboxdUrl": "https://boxd.it/i4a",
            "title": "Midnight In Paris",
            "myRating": "8.5",
            "myTags": ["Mad concept", "Nightlife", "Exploration of a new place", "Soulmate", "Friendship", "Great soundtrack"],
            "myReview": ""
        },
    
        "mulholland_drive": {
            "letterboxdUrl": "https://boxd.it/297o",
            "title": "Mulholland Drive",
            "myRating": "8.5",
            "myTags": ["Questioning reality", "Atmospheric", "Mysterious", "A story within a story", "Anti-Hollywood"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/aO5xuvfujX3cFg9evUVZuJlroEW.jpg"
        },
    
        "my_neighbour_totoro": {
            "letterboxdUrl": "https://boxd.it/20eA",
            "title": "My Neighbor Totoro",
            "myRating": "9.25",
            "myTags": ["Embrace mother nature", "Endearing", "Humanity and nature coexisting", "Nature thriving", "Colourful", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ykeaF3Ldz1Kf6sfnOJJH4dW56F4.jpg"
        },
    
        "malignant": {
            "letterboxdUrl": "https://boxd.it/mViE",
            "title": "Malignant",
            "myRating": "9.0",
            "myTags": ["Wild", "Great cinematography", "Murder mystery", "Amazing finale"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/mwl0Vk9DzyN68986ALKhC7xBe24.jpg",
            "screenshots": screenshots.MALIGNANT,
        },
    
        "moonrise_kingdom": {
            "letterboxdUrl": "https://boxd.it/2Wng",
            "title": "Moonrise Kingdom",
            "myRating": "8.75",
            "myTags": ["Quirky", "Great cinematography", "Friendship", "Great chemistry between characters"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/xrziXRHRQ7c7YLIehgSJY8GQBsx.jpg"
        },
    
        "my_life_as_a_courgette": {
            "letterboxdUrl": "https://boxd.it/dL2y",
            "title": "My Life as a Zucchini",
            "titleDisplayed": "My Life as a Courgette",
            "myRating": "8.75",
            "myTags": ["Stop motion animation", "Uplifting", "Finding happiness", "Friendship", "Emotional", "Endearing", "Soulmate", "Bad parenting"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/g91phMUr77Vw6uRmpIjH1hvZpov.jpg"
        },
    
        "man_on_fire": {
            "letterboxdUrl": "https://boxd.it/1Yvk",
            "title": "Man on Fire",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
        },
    
        "meander": {
            "letterboxdUrl": "https://boxd.it/j1Ac",
            "title": "Meander",
            "myRating": "7.75",
            "myTags": [
                "Claustrophobic",
                "Colourful",
                "Mysterious",
            ],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/gDNHgbbDgLcl67Q0Ges9R3qvwUU.jpg",
            "gradualInterest": [7, 6, 4, 4, 4, 4, 6, 9, 9],
            "screenshots": screenshots.MEANDER,
        },
    
        "mr_jones": {
            "letterboxdUrl": "https://boxd.it/5mUO",
            "title": "Mr. Jones",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": ""
        },
    
        "mary_and_the_witches_flower": {
            "letterboxdUrl": "https://boxd.it/ffTY",
            "title": "Mary and the Witch\'s Flower",
            "myRating": "7.5",
            "myTags": ["Magic", "Positive reflection on witches"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 7, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/hQ1mUz3Vi15Qr3dGWlvqGmiFPCL.jpg"
        },
    
        "monsters_inc": {
            "letterboxdUrl": "https://boxd.it/2a46",
            "title": "Monsters, Inc.",
            "myRating": "10",
            "myTags": ["Mad concept", "Emotional", "Nostalgic", "Endearing"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/3LATljiJu54I2YWA6ZKzvtkxihw.jpg"
        },
    
        "miss_zombie": {
            "letterboxdUrl": "https://boxd.it/6zhs",
            "title": "Miss Zombie",
            "myRating": "8.0",
            "myTags": ["Social commentary", "Zombies", "Black & white"],
            "myReview": "",
            "gradualInterest": [6, 5, 5, 6, 7, 8, 8, 9, 9],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/rcQRzkQrlAtQ6Dz35b4teGGlBpC.jpg"
        },
    
        "meet_cute": {
            "letterboxdUrl": "https://boxd.it/vOri",
            "title": "Meet Cute",
            "myRating": "8.25",
            "myTags": ["Time travel", "Soulmate", "Loneliness", "Self-inflicted time loop", "Exploring the inner mechanism of the female mind"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 9, 8, 8, 8, 8, 8]
        },
    },
    
    N: {
        "nausicaa_of_the_valley_of_the_wind": {
            "myRating": 9.5,
            "letterboxdUrl": "https://boxd.it/2bc6",
            "title": "Nausica\u00e4 of the Valley of the Wind",
            "myReview": "",
            "customPosterUrl": require('../websiteContent/films/nausicaa/custom_poster.png'),
            "myTags": [
                "Humanity and nature coexisting", 
                "Embrace mother nature", 
                "End of the world", 
                "Dystopia", 
                "Flying", 
                "Great Soundtrack", 
                "Girl power"
            ],
        },
    
        "nocturnal_animals": {
            "letterboxdUrl": "https://boxd.it/bkFu",
            "title": "Nocturnal Animals",
            "myRating": "7.75",
            "myTags": ["Atmospheric", "Mysterious", "Murder mystery", "Confusing", "Non-linear timeline", "Story within a story", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/6zTRty2REwxljziiWyrRbgOwAo7.jpg"
        },
    
        "notes_on_blindness": {
            "letterboxdUrl": "https://boxd.it/d9YE",
            "title": "Notes on Blindness",
            "myRating": "8.75",
            "myTags": ["Poetic", "Contemplative", "Based on true events", "Turning negatives into positives", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": require('../websiteContent/films/notes_on_blindness/custom_poster.jpg'),
        },
    
        "no_one_gets_out_alive": {
            "letterboxdUrl": "https://boxd.it/rOay",
            "title": "No One Gets Out Alive",
            "myRating": "8.0",
            "myTags": ["Satanic rituals", "Ancient Mayan murals", "Atmospheric", "Character moves into cheap apartment but there's dodgy stuff going on"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 8, 8, 8]
        },
    },

    O: {
        "one_million_yen_girl": {
            "letterboxdUrl": "https://boxd.it/2h5K",
            "title": "One Million Yen Girl",
            "myRating": "8.25",
            "myTags": [""],
            "myReview": "",
        },
    
        "oblivion_island": {
            "letterboxdUrl": "https://boxd.it/13qs",
            "title": "Oblivion Island: Haruka and the Magic Mirror",
            "myRating": "9.0",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ml8M4MCwHJudF4zbd0KF1SZ6lYr.jpg"
        },
    
        "okja": {
            "letterboxdUrl": "https://boxd.it/dvXe",
            "title": "Okja",
            "myRating": "7.75",
            "myTags": ["Animal welfare", "Ends a bit weak but the rest is great", "Conspiracy"],
            "myReview": ""
        },
    
        "oculus": {
            "letterboxdUrl": "https://boxd.it/4W9M",
            "title": "Oculus",
            "myRating": "8.0",
            "myTags": ["Disturbing", "Questioning reality", "Non-linear timeline"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/3J25Xmt3zN9OpsTD5dLNwz7IirD.jpg"
        },
    },

    P: {
        "parasite": {
            "letterboxdUrl": "https://boxd.it/hTha",
            "title": "Parasite",
            "myRating": "9.5",
            "myTags": ["Claustrophobic", "Psychlogical thriller", "Quirky"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
        },
    
        "princess_mononoke": {
            "letterboxdUrl": "https://boxd.it/2b4w",
            "title": "Princess Mononoke",
            "myRating": "8.25",
            "myTags": ["Embrace mother nature", "Humanity and nature coexisting", "War", "Corruption", "Evil people in power", "Anime", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/cDuKyP0SqubYo7hTVMN5wihjjJG.jpg"
        },
    
        "poupelle_of_chimmney_town": {
            "myRating": 8.25,
            "letterboxdUrl": "https://boxd.it/on14",
            "title": "Poupelle of Chimney Town",
            "myTags": ["Heterodox thinker", "Religion", "Friendship", "Intricate animation style", "Textures", "Steampunk", "Colourful", "Exploring new places", "Anti-smoking"],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/z0W6hrjGd9NrY4eQypaNDGlLkN9.jpg",
            "gradualInterest": [8, 8, 8, 8, 7, 7, 7, 8, 9, 9],
            "screenshots": screenshots.POUPELLE_OF_CHIMMNEY_TOWN,
            "myReview": ReactDomServer.renderToString(PoupelleOfChimmneyTownReview(screenshots.POUPELLE_OF_CHIMMNEY_TOWN)),
        },

        "pulse": {
            "letterboxdUrl": "https://boxd.it/1Y44",
            "title": "Pulse",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/tmcSKby8AARIFCGFJRqcHAcaYRt.jpg",
            "screenshots": screenshots.PULSE,
        },
    
        "porco_rosso": {
            "letterboxdUrl": "https://boxd.it/1Tp2",
            "title": "Porco Rosso",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/c5RDchTXih0OFEoYE25uVORvprq.jpg"
        },
    
        "portals": {
            "letterboxdUrl": "https://boxd.it/nBnG",
            "title": "Portals",
            "myRating": "8.0",
            "myTags": [""],
            "myReview": "",
            "screenshots": screenshots.PORTALS,
        },
    
        "ponyo": {
            "letterboxdUrl": "https://boxd.it/1S0A",
            "title": "Ponyo",
            "myRating": "9.25",
            "myTags": ["Feverdreamy", "Majestic", "Viewing the world through the mind of a child", "Sealife merging with humanity", "Great soundtrack"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 9, 9, 9, 10],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/kP27eFa63Y8bdUTd5YGwqxYUXCU.jpg"
        },
    
        "primer": {
            "letterboxdUrl": "https://boxd.it/6YA",
            "title": "Primer",
            "myRating": "7.75",
            "myTags": ["Timey-wimey"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 8, 8, 8, 8, 8]
        },
    
        "paco_and_the_magical_book": {
            "letterboxdUrl": "https://boxd.it/2dD4",
            "title": "Paco and the Magical Book",
            "myRating": "8.25",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [6, 6, 7, 7, 7, 8, 8, 9, 9, 9, 9]
        },
    
        "pleasantville": {
            "myRating": 9.5,
            "letterboxdUrl": "https://boxd.it/26uY",
            "title": "Pleasantville",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/sjnRihb0OdmtD5GBe5lfdfBjSxo.jpg",
            "myTags": [
                "Creative use of colour", 
                "Virtual world", 
                "Celebration of art", 
                "Finding happiness", 
                "Revolution", 
                "Fuck the system"
            ],
        },
    
        "pontypool": {
            "letterboxdUrl": "https://boxd.it/1yBw",
            "title": "Pontypool",
            "myRating": "8.0",
            "myTags": ["Atmospheric", "Mysterious", "Zombies", "Virus", "Radio station", "Starts bad but gets a lot better"],
            "myReview": ""
        },
    
        "possession": {
            "letterboxdUrl": "https://boxd.it/1BPm",
            "title": "Possession",
            "myRating": "8.0",
            "myTags": ["Possession", "Disturbing", "Depressing", "Gross", "Challenging to watch at times"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/sz6IXLRJu58EBRpUuRFKxo4d6lf.jpg"
        },
        
        "phenomenon": {
            "letterboxdUrl": "https://boxd.it/1Z2I",
            "title": "Phenomenon",
            "myRating": "8.75",
            "myTags": ["Uplifting", "Mysterious", "Awakanening-ish", "Soulmate"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/5eK1HNf0Kl2vDPOeqf1kX4SKxrw.jpg"
        },
    
        "predestination": {
            "letterboxdUrl": "https://boxd.it/6bJM",
            "title": "Predestination",
            "myRating": "8.75",
            "myTags": ["Mad concept", "Confusing", "Timey-wimey", "Very small cast"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/38Xr1JnV1ZcLQ55zmdSp6n475cZ.jpg"
        },
    
        "portrait_of_a_lady_on_fire": {
            "letterboxdUrl": "https://boxd.it/jkPq",
            "title": "Portrait of a Lady on Fire",
            "myRating": "8.75",
            "myTags": ["Great cinematography", "Mysterious", "Melancholic", "France 1800s", "Art"],
            "myReview": ""
        },
        
        "parasite_in_love": {
            "letterboxdUrl": "https://boxd.it/qyhw",
            "title": "Parasite in Love",
            "myRating": "8.25",
            "myTags": ["Another life-form trying to take control of a human mind", "Soulmate", "Social anxiety", "Scopophobia", "Study of unorthodox people who are outcasts from societal norms"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 7, 8, 8]
        },
    },
    
    Q: {

    },

    R: {
        "rocky": {
            "myRating": 8.0,
            "letterboxdUrl": "https://boxd.it/28Uk",
            "title": "Rocky",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/hEjK9A9BkNXejFW4tfacVAEHtkn.jpg",
            "myTags": [
                "Deeply human", 
                "Inspiring", 
                "Being the underdog", 
                "Soulmate", 
                "Sport"
            ],
        },
    
        "redline": {
            "letterboxdUrl": "https://boxd.it/2pQ0",
            "title": "Redline",
            "myRating": "8.5",
            "myTags": ["Intricate animation style", "Intepretation of an intergalactic lifestyle", "Fictional racing event", "Audio-visual spectacle", "Intense", "Great soundtrack", "Anime"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/tuIO78Emr8katcv9sk4HONeLdNT.jpg"
        },
    
        "rrr": {
            "letterboxdUrl": "https://boxd.it/ljDs",
            "title": "RRR",
            "titleDisplayed": "Rise Roar Revolt",
            "myRating": "8.0",
            "myTags": ["Indian culture", "Kindness", "The evil British empire", "Poverty", "Friendship", "Great cinematography", "Very long", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ljHw5eIMnki3HekwkKwCCHsRSbH.jpg"
        },
    
        "rec": {
            "letterboxdUrl": "https://boxd.it/20ma",
            "title": "[REC]",
            "myRating": "9.0",
            "myTags": ["Zombies", "Found-footage", "Brutal", "One-location", "Claustrophobic", "Satanic"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/kJ5hqacHVb9GLChkCZe8Bq4DmTI.jpg"
        },
    
        "revenge": {
            "letterboxdUrl": "https://boxd.it/gL9g",
            "title": "Revenge",
            "myRating": "9.25",
            "myTags": ["Revenge-fantasy thriller", "Challenging to watch at times", "Girl power"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/uOiNnowvNEBroDVtZ5FY0zRaKtK.jpg"
        },
    
        "recycle": {
            "letterboxdUrl": "https://boxd.it/1Qfo",
            "title": "Re-cycle",
            "myRating": "8.25",
            "myTags": ["Surreal", "Ghosts", "Abortion"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 9, 9, 9, 8, 8, 8, 8]
        },
    
        "room": {
            "letterboxdUrl": "https://boxd.it/7T0y",
            "title": "Room",
            "myRating": "9.0",
            "myTags": ["Claustrophobic", "Emotional", "Sad", "Recovering from trauma"],
            "myReview": ""
        },
    
        "raw": {
            "letterboxdUrl": "https://boxd.it/dLd2",
            "title": "Raw",
            "myRating": "8.0",
            "myTags": ["Cannibalism", "Growing up", "Body horror", "University life", "Great soundtrack"],
            "myReview": "",
            "gradualInterest": [7, 8, 9, 9, 8, 8, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/6kXW9b1FZXvB3l0mLMDbKwGgL3P.jpg"
        },
    
        "rubber": {
            "letterboxdUrl": "https://boxd.it/P2m",
            "title": "Rubber",
            "myRating": "8.0",
            "myTags": ["Absurd", "Absurdist comedy", "Breaking the fourth wall"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 8, 8, 7, 7],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/3CtcLwXVvnMdKBAhzejPaNtTDym.jpg"
        },
    
        "ready_or_not": {
            "letterboxdUrl": "https://boxd.it/kOf0",
            "title": "Ready or Not",
            "myRating": "8.25",
            "myTags": ["Suprising", "Fun", "Intense"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 8, 8, 9]
        },
    
        "ritual": {
            "letterboxdUrl": "https://boxd.it/14z6",
            "title": "Ritual",
            "myRating": "8.5",
            "myTags": ["Melancholic", "Loneliness", "Amazing soundtrack"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 7, 8, 8, 7, 9, 8, 8, 7, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/3WDKfLdU2FP8gjVcXTpNvV9fWdA.jpg"
        },
    },

    S: {
        "sing_street": {
            "myRating": 10.0,
            "letterboxdUrl": "https://boxd.it/cOo6",
            "title": "Sing Street",
            "myReview": "",
            "myTags": [
                "Great soundtrack",
                "Emotional",
                "Uplifting",
                "Happy-Sad",
                "Soulmate",
                "Dublin",
                "New wave 80s music"
            ],
        },
    
        "snowpiecer": {
            "myRating": 9.5,
            "letterboxdUrl": "https://boxd.it/3Icg",
            "title": "Snowpiercer",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/hX3yYovRH6Vi4WsIPpFnP6IywCS.jpg",
            "myTags": [
                "Total escapism", 
                "Dystopia", 
                "Train", 
                "Snow", 
                "Class", 
                "Poverty", 
                "Humanity condensed into a small location", 
                "Futuristic", 
                "One-location"
            ],
        },
        
        "shadow_in_the_cloud": {
            "letterboxdUrl": "https://boxd.it/pah6",
            "title": "Shadow in the Cloud",
            "myRating": "8.0",
            "myTags": [
                "Intense",
                "Claustrophobic",
                "One-location",
                "Thrilling",
            ],
            "myReview": "",
            "screenshots": screenshots.SHADOW_IN_THE_CLOUD,
        },
    
        "sound_of_metal": {
            "letterboxdUrl": "https://boxd.it/i7Q4",
            "title": "Sound of Metal",
            "myRating": "9.5",
            "myTags": ["A slice of life", "Metal", "Finding yourself", "Stoicism", "Not giving up despite being in a shitty situation"],
            "myReview": "",
            "customPosterUrl": require('../websiteContent/films/sound_of_metal/custom_poster.jpg')
        },
    
        "seeking_a_friend_for_the_end_of_the_world": {
            "letterboxdUrl": "https://boxd.it/376g",
            "title": "Seeking A Friend For The End Of The World",
            "myRating": "8.0",
            "myTags": ["End of the world", "Death", "Soulmate", "Uplifting", "Great character chemistry", "Stoicism", "Turning negatives into positives"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/rBbCwFLyt7Q25yaw2bEOQh7RMG1.jpg"
        },
    
        "split": {
            "letterboxdUrl": "https://boxd.it/dgSy",
            "title": "Split",
            "myRating": "8.5",
            "myTags": ["Claustrophobic", "Disturbing", "Multiple personality disorder"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/kBvO58pt13dgYImjZNjq6QiOT8n.jpg"
        },
    
        "safety_not_guaranteed": {
            "letterboxdUrl": "https://boxd.it/2Y3M",
            "title": "Safety Not Guaranteed",
            "myRating": "7.75",
            "myTags": ["Time travel", "Soulmate", "Friendship", "Fun", "Quirky"],
            "myReview": ""
        },
    
        "severance": {
            "letterboxdUrl": "https://boxd.it/23nq",
            "title": "Severance",
            "myRating": "8.0",
            "myTags": ["Fun", "Disturbing", "Claustrophobic", "Alone in the wilderness", "Revenge-fantasy", "British humour"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/yg1XRTyH5knwh3Tnij2sUV0ZZ5w.jpg"
        },
    
        "se7en": {
            "letterboxdUrl": "https://boxd.it/29zs",
            "title": "Se7en",
            "myRating": "7.75",
            "myTags": ["Crime", "Murder mystery", "Mysterious", "Atmospheric"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/GQP6noTBKsYiAYyn8PYXFcsSgH.jpg",
        },
    
        "speak": {
            "letterboxdUrl": "https://boxd.it/1MTO",
            "title": "Speak",
            "myRating": "7.75",
            "myTags": ["Sad", "Art", "School setting", "Friendship", "Teacher-student dichotomy"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/kxQ9lRgC3tMVNPzLMFsiOK8H8fn.jpg"
        },
    
        "shiva_baby": {
            "letterboxdUrl": "https://boxd.it/oIv0",
            "title": "Shiva Baby",
            "myRating": "7.75",
            "myTags": ["One-location", "Claustrophobic", "Jewish culture", "Funny", "Family gathering"],
            "myReview": ""
        },
    
        "starman": {
            "letterboxdUrl": "https://boxd.it/1Y6O",
            "title": "Starman",
            "myRating": "7.5",
            "myTags": ["Death",  "Alien visitor disguised as human", "Melancholic", "Mysterious", "Quirky", "Forgiveness", "Soulmate", "Aliens", "Not a shit John Carpenter film", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": require('../websiteContent/films/starman/custom_poster.png')
        },
    
        "society": {
            "letterboxdUrl": "https://boxd.it/1ARc",
            "title": "Society",
            "myRating": "8.5",
            "myTags": ["Creature-feature", "Conspiracy", "Creepy", "Mysterious", "Social commentary"],
            "myReview": ""
        },
    
        "slither": {
            "letterboxdUrl": "https://boxd.it/1Zks",
            "title": "Slither",
            "myRating": "8.5",
            "myTags": ["Disgusting", "Gross", "Creature-feature", "Zombies", "Fun", "Wild", "Short but effective"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/jr9NlTilpQMmSo8xUoAodBlvIwF.jpg"
        },
    
        "shaun_of_the_dead": {
            "letterboxdUrl": "https://boxd.it/29J8",
            "title": "Shaun of the Dead",
            "myRating": "8.75",
            "myTags": ["Zombies", "British humour", "Funny"],
            "myReview": ""
        },
    
        "school_of_rock": {
            "letterboxdUrl": "https://boxd.it/28xK",
            "title": "School of Rock",
            "myRating": "10",
            "myTags": ["Uplifting", "Emotional", "The universal power of music", "School setting"],
            "myReview": ""
        },
    
        "silent_hill": {
            "letterboxdUrl": "https://boxd.it/2a3C",
            "title": "Silent Hill",
            "myRating": "9.75",
            "myTags": ["Atmospheric", "Disgusting", "Gross", "Creature-feature", "Cults", "Religion", "Satanic worshipers", "Foggy town", "Mysterious", "Video game adapatation", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ljAIu5OJWS8AYy5c5zmtwHPdHd1.jpg"
        },
    
        "solaris": {
            "letterboxdUrl": "https://boxd.it/27qS",
            "title": "Solaris",
            "myRating": "7.5",
            "myTags": ["Astronomy", "Psychedelic", "Confusing", "Trippy"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/o839RFIxPrpgOMKQ21SOQl4908t.jpg"
        },
    
        "spontaneous": {
            "letterboxdUrl": "https://boxd.it/mjPq",
            "title": "Spontaneous",
            "myRating": "8.25",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/qhDICM8YxuDn9241O2UVEe9DupC.jpg",
            "screenshots": screenshots.SPONTANEOUS,
        },
    
        "steamboy": {
            "letterboxdUrl": "https://boxd.it/1ZvA",
            "title": "Steamboy",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/fFZmfoupqWmHg73A07MIBMwRYqc.jpg"
        },
    
        "starry_starry_night": {
            "letterboxdUrl": "https://boxd.it/32CG",
            "title": "Starry Starry Night",
            "myRating": "8.75",
            "myTags": ["Jigsaws", "Art", "Origami", "Soulmate", "Friendship"],
            "myReview": "",
            "screenshots": screenshots.STARRY_STARRY_NIGHT,
            "gradualInterest": [7, 7, 8, 8, 9, 9, 8, 9, 9, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/9DEDG5QcktqifgQwO4rW9BLWdEO.jpg"
        },
    
        "suzume": {
            "letterboxdUrl": "https://boxd.it/yv7Y",
            "title": "Suzume",
            "myRating": "8.0",
            "myTags": ["Death", "Summer", "Road trip", "Cats", "Portals", "Grieving"],
            "myReview": "",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 8, 9, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/i4fgst7Rhw0ScUltDzP9Nmq5Hpm.jpg"
        },
    
        "sightseers": {
            "letterboxdUrl": "https://boxd.it/3V4Y",
            "title": "Sightseers",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/3L7zuJ6TdbB7Cizd1eZNNbAr9YG.jpg"
        },
      
        "seven_years_in_tibet": {
            "letterboxdUrl": "https://boxd.it/29aC",
            "title": "Seven Years in Tibet",
            "myRating": "10",
            "myTags": ["Humanity and nature coexisting", "Exploring new places", "Mountaineering", "Tibet", "Dalia Lama", "Poetic", "Profound", "Great cinematography", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/6fOnpPpobaisTHo1MChGCh76qV8.jpg"
        },
    
        "starry_eyes": {
            "letterboxdUrl": "https://boxd.it/7t3Q",
            "title": "Starry Eyes",
            "myRating": "8.25",
            "myTags": ["Fake celebrity personas", "Terrifying", "Metamorphosis", "Challenging to watch at times", "Cults"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/t1sIumVCl91XThMoJqUjpERYeAM.jpg"
        },
    
        "super8": {
            "letterboxdUrl": "https://boxd.it/dVI",
            "title": "Super 8",
            "myRating": "7.75",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/gUFHzEiJFgzGfwYvZv5opXHUJfo.jpg"
        },
    
        "summer_wars": {
            "letterboxdUrl": "https://boxd.it/1oDC",
            "title": "Summer Wars",
            "myRating": "7.75",
            "myTags": ["End of the world", "Nature", "Summer", "Family", "Togetherness"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 8, 7, 7, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/wuytCABUQRuJAmaGS5TOes7HSYx.jpg"
        },
    
        "spirited_away": {
            "letterboxdUrl": "https://boxd.it/2b4m",
            "title": "Spirited Away",
            "myRating": "8.25",
            "myTags": ["Nature", "Japanese culture", "Ghosts", "Soulmate", "Studio ghibli"],
            "myReview": "",
            "gradualInterest": [8, 8, 8, 7, 8, 8, 8, 8, 8, 9, 9, 8],
            "screenshots": screenshots.SPIRITED_AWAY,
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/y2K14f237l9IgwGZi5FyNnyG8RL.jpg"
        },
    
        "se7en": {
            "letterboxdUrl": "https://boxd.it/29zs",
            "title": "Se7en",
            "myRating": "7.75",
            "myTags": ["Neo-noir"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 8, 8, 8, 8, 8, 7, 7, 8, 8]
        },
    
        "species": {
            "letterboxdUrl": "https://boxd.it/1YUk",
            "title": "Species",
            "myRating": "7.75",
            "myTags": ["Creatures"],
            "myReview": "",
            "gradualInterest": [6, 7, 7, 8, 8, 8, 8, 8, 8, 8, 7]
        },
    },

    T: {
        "tag": {
            "myRating": 8.5,
            "letterboxdUrl": "https://boxd.it/bjvI",
            "title": "Tag",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/eYqjakKlMOG7VvmyLqdckYJM8h8.jpg",
            "myTags": [
                "Fun", 
                "Stochasticity", 
                "Determinism", 
                "Randomness", 
                "Simulation", 
                "Running", 
                "Girl power"
            ],
        },
    
        "titanic": {
            "letterboxdUrl": "https://boxd.it/2a2k",
            "title": "Titanic",
            "myRating": "8.75",
            "myTags": ["Nostalgic", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/1kLYRzVj6byWvFa3SLrAOcfgnfp.jpg"
        },
    
        "triangle": {
            "letterboxdUrl": "https://boxd.it/1tQG",
            "title": "Triangle",
            "myRating": "9.5",
            "myTags": ["Time loop", "Non-linear timeline", "One-location", "On boat", "Mad concept"],
            "myReview": ""
        },
    
        "tekkonkinkreet": {
            "letterboxdUrl": "https://boxd.it/1Pui",
            "title": "Tekkonkinkreet",
            "myRating": "7.5",
            "myTags": [""],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/ePFlq56e7MmVDGKtKeOPy1YbKC3.jpg"
        },
    
        "turtles_are_suprisingly_fast_swimmers": {
            "letterboxdUrl": "https://boxd.it/1ba8",
            "title": "Turtles Are Surprisingly Fast Swimmers",
            "myRating": "8.25",
            "myTags": [],
            "myReview": "",
            "gradualInterest": [9, 9, 9, 8, 8, 8, 7, 7, 7],
            "screenshots": screenshots.TURTLES_ARE_SUPRISINGLY_GOOD_SWIMMERS,
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/nThjwGHNHKXI7Y1oGdrWzcoAF7P.jpg"
        },
    
        "testuo_the_bullet_man": {
            "letterboxdUrl": "https://boxd.it/zZ8",
            "title": "Tetsuo: The Bullet Man",
            "myRating": "8.5",
            "gradualInterest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/sYcYjZ65YEEelekUgJcUp4HkRmw.jpg",
            "myTags": ["Disturbing", "Cyberpunk", "Biopunk", "Stylish", "Metal", "Chaotic", "Claustrophobic", "Challenging to watch at times", "Great soundtrack"],
            "myReview": ReactDomServer.renderToString(TetsuoTheBulletManReview(screenshots.TETSUO_THE_BULLET_MAN)),
            "screenshots": screenshots.TETSUO_THE_BULLET_MAN,
        },
    
        "tokyo_vampire_hotel": {
            "letterboxdUrl": "https://boxd.it/lpUk",
            "title": "Tokyo Vampire Hotel",
            "myRating": "9.25",
            "myTags": ["Intense", "The audience is thrown into a bizzare situation and forced to experience it", "Colourful", "Amazing soundtrack"],
            "myReview": "",
            "gradualInterest": [8, 9, 9, 9, 8, 8, 8, 9, 9, 9, 9, 8, 9, 9],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/jwwUtmqKTlDad8cmxdAeTDf61GF.jpg"
        },
    
        "them": {
            "letterboxdUrl": "https://boxd.it/1VhE",
            "title": "Them",
            "myRating": "7.5",
            "myTags": ["Claustrophobic", "Intense", "Home invasion"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 7, 8, 8, 8, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/kEO9nGyCRGLNIb5kPPjdYAqJ4bO.jpg"
        },
    },

    U: {
        "utoya": {
            "letterboxdUrl": "https://boxd.it/i3a4",
            "title": "Ut\u00f8ya: July 22",
            "myRating": "8.0",
            "myTags": ["One-take", "Based on true events", "Terroism", "Brutal", "Intense", "Survival story", "Norweigan island", "Challenging to watch at times"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/vRTNX2KhxwSXynzxWQrJMW5kLFi.jpg"
        },
    
        "under_the_shadow": {
            "letterboxdUrl": "https://boxd.it/d1uG",
            "title": "Under the Shadow",
            "myRating": "8.5",
            "myTags": ["Terrifying", "War", "Spirits", "Possession", "Iran conflict", "Living in flats"],
            "myReview": ""
        },
    },

    V: {
        "victoria": {
            "myRating": 8.5,
            "letterboxdUrl": "https://boxd.it/amSe",
            "title": "Victoria",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/1koMqkomlAFORjooFJtQEVVgiSG.jpg",
            "myTags": [
                "One-take", 
                "Melancholic", 
                "Friendship", 
                "Great soundtrack", 
                "Melancholic", 
                "Nightlife", 
                "BreakingBad-ish", 
                "Accidently getting involved in crimminal activity", 
                "Berlin"
            ],
        },
    
        "vivarium": {
            "letterboxdUrl": "https://boxd.it/gmVE",
            "title": "Vivarium",
            "myRating": "8.75",
            "myTags": ["Claustrophobic", "Terrifying", "Stuck somewhere"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/bk5xkiXc1msKwrRJ5WtisHui8xE.jpg"
        },
    },

    W: {
        "we_made_a_beautiful_bouquet": {
            "letterboxdUrl": "https://boxd.it/pZDC",
            "title": "We Made a Beautiful Bouquet",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/i4CRAls90VIXm9KocszTeTUpMsB.jpg",
            "myRating": "8.5",
            "myTags": ["Finding your soulmate", "Happy romcom turns depressing", "Great soundtrack"],
            "myReview": ReactDomServer.renderToString(WeMadeABeautifulBouquet(screenshots.WE_MADE_A_BEAUTIFUL_BOUQUET)),
            "screenshots": screenshots.WE_MADE_A_BEAUTIFUL_BOUQUET,
            "gradualInterest": [7, 8, 9, 9, 9, 9, 9, 8, 8, 7, 7, 7],
        },
    
        "waves": {
            "myRating": 10,
            "letterboxdUrl": "https://boxd.it/jpmy",
            "title": "Waves",
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/iDYOOa2Fii2ynvOlTdGGr75TuPx.jpg",
            "myTags": [
                "Death", 
                "Creative use of colour", 
                "Unconvential aspect ratios", 
                "Emotional", 
                "Family", 
                "Forgiveness", 
                "Kindness", 
                "Great soundtrack", 
                "Colourful", 
                "Finding happiness"
            ],
        },
    
        "war_of_the_worlds": {
            "letterboxdUrl": "https://boxd.it/2bde",
            "title": "War of the Worlds",
            "myRating": "8.5",
            "myTags": ["Aliens", "End of the world", "War", "Total escapism", "Intense"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/pwppVd91qtkxEV0TKxGe3J6k4SU.jpg"
        },
    
        "we_need_to_talk_about_kevin": {
            "letterboxdUrl": "https://boxd.it/2pTS",
            "title": "We Need To Talk About Kevin",
            "myRating": "8.5",
            "myTags": ["Arthouse psychological thriller", "Disturbing", "Evil psychotic child"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/auAmiRmbBQ5QIYGpWgcGBoBQY3b.jpg"
        },
    
        "white_god": {
            "myRating": 9.25,
            "letterboxdUrl": "https://boxd.it/81lO",
            "title": "White God",
            "screenshots": screenshots.WHITE_GOD,
            "myReview": ReactDomServer.renderToString(WhiteGodReview(screenshots.WHITE_GOD)),
            "myTags": [
                "Emotional",
                "Friendship",
                "Forgiveness",
                "Animal welfare",
                "Great cinematography",
                "The universal power of music",
                "Budapest"
            ],
        },
    
        "walle": {
            "letterboxdUrl": "https://boxd.it/1VEo",
            "title": "WALL\u00b7E",
            "myRating": "9.0",
            "myTags": ["Post-apocalypse", "Civilisation on spaceship", "Minimal dialogue", "Very small cast", "Emotional", "Great soundtrack"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg"
        },
    
        "wolf_children": {
            "letterboxdUrl": "https://boxd.it/3Ipk",
            "title": "Wolf Children",
            "myRating": "8.0",
            "myTags": ["Nature", "Humanity and nature coexisting", "Summer", "Following characters through their lives as seasons pass by"],
            "myReview": "",
            "screenshots": screenshots.WOLF_CHILDREN,
            "gradualInterest": [6, 6, 7, 7, 8, 8, 8, 9, 8, 8, 8, 8]
        },
    
        "wrong": {
            "letterboxdUrl": "https://boxd.it/2V5K",
            "title": "Wrong",
            "myRating": "8.0",
            "myTags": ["Absurd", "Surreal", "Absurdist comedy", "Confusing"],
            "myReview": "",
            "gradualInterest": [7, 7, 7, 7, 8, 7, 8, 7, 8],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/vxFzqCMbM9e7IFMkbiH61xbUUP7.jpg"
        },
    },
    
    X: {
        "xxx_holic": {
            "letterboxdUrl": "https://boxd.it/y3U4",
            "title": "xxxHOLiC",
            "myRating": "9.0",
            "myTags": ["Dimensionality", "Audio-visual spectacle", "Positive reflection on witches", "Colourful", "Time loop"],
            "myReview": "",
            "gradualInterest": [9, 8, 8, 8, 8, 8, 8, 7, 8, 9, 9],
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/9anVNOiOTBhO1vet1Q31rQR2xtO.jpg"
        },
    },

    Y: {

    },

    Z: {
        "zombieland": {
            "letterboxdUrl": "https://boxd.it/1En6",
            "title": "Zombieland",
            "myRating": "7.75",
            "myTags": ["Zombies", "Fun", "Short but effective", "Great character chemistry", "Nostalgic"],
            "myReview": "",
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg"
        },
    
        "zoe": {
            "letterboxdUrl": "https://boxd.it/gml2",
            "title": "Zoe",
            "myRating": "8.5",
            "myTags": ["Soulmate", "AI", "Great cinematography", "Great soundtrack"],
            "myReview": "",
            "gradualInterest": [6, 8, 9, 9, 9, 8, 7, 7, 8, 8, 9],
            "screenshots": screenshots.ZOE,
            "customPosterUrl": "https://www.themoviedb.org/t/p/original/cSzwzCEOk4AM0w6Br8J6mDl7HzR.jpg"
        },
    }
}


export const film_reviews = convert_collection_of_json_objects_to_one_list(database);
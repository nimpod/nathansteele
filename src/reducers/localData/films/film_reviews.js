/**
 * Database of local film review data.
 * The json is merged with the web data in /reducers/RootReducer.js
 */

import ReactDomServer from 'react-dom/server';
import { convert_collection_of_json_objects_to_one_list, convert_collection_of_json_objects_to_one_list_grouped_by_letters } from '../../../js/helpers.js';

import { review as TemplateReview } from './content/template_review.jsx';
import { review as AGhostStoryReview } from './content/a_ghost_story/review.jsx';
import { review as ChildrenOfTheSeaReview } from './content/children_of_the_sea/review.jsx';
import { review as ArriettyReview } from './content/the_secret_world_of_arrietty/review.jsx';
import { review as PoupelleOfChimmneyTownReview } from './content/poupelle_of_chimmney_town/review.jsx';
import { review as WhiteGodReview } from './content/white_god/review.jsx';
import { review as TetsuoTheBulletManReview } from './content/tetsuo_the_bullet_man/review.jsx';
import { review as FlatlandReview } from './content/flatland/review.jsx';
import { review as FeastReview } from './content/feast/review.jsx';
import { review as BigFishAndBegoniaReview } from './content/big_fish_and_begonia/review.jsx';
import { review as WeMadeABeautifulBouquet } from './content/we_made_a_beautiful_bouquet/review.jsx';
/*
import { review as AliensReview } from './content/aliens/review';
import { review as ArrivalReview } from './content/arrival/review';
import { review as BatmanReturnsReview } from './content/batman_returns/review';
import { review as BelleReview } from './content/belle/review';
import { review as BirdmanReview } from './content/birdman/review';
import { review as BlackSheepReview } from './content/black_sheep/review';
import { review as BoyhoodReview } from './content/boyhood/review';
import { review as CadaverReview } from './content/cadaver/review';
import { review as CarrieReview } from './content/carrie/review';
import { review as CastawayOnTheMoonReview } from './content/castaway_on_the_moon/review';
import { review as ChildrenOfMenReview } from './content/children_of_men/review';
import { review as CloudAtlasReview } from './content/cloud_atlas/review';
import { review as CocoReview } from './content/coco/review';
import { review as ConfessionsReview } from './content/confessions/review';
import { review as CoralineReview } from './content/coraline/review';
import { review as CrawlReview } from './content/crawl/review';
import { review as District9Review } from './content/district_9/review';
import { review as DogvilleReview } from './content/dogville/review';
import { review as EddieTheEagleReview } from './content/eadie_the_eagle/review';
import { review as EuropaReportReview } from './content/europa_report/review';
import { review as EvilDeadReview } from './content/evil_dead/review';
import { review as EvilDeadRiseReview } from './content/evil_dead_rise/review';
import { review as ExMachinaReview } from './content/ex_machina/review';
import { review as ExteHairExtensionsReview } from './content/exte_hair_extensions/review';
import { review as FantasticMrFoxReview } from './content/fantastic_mr_fox/review';
import { review as FantasticPlanetReview } from './content/fantastic_planet/review';
import { review as GremlinsReview } from './content/gremlins/review';
import { review as HacksawRidgeReview } from './content/hacksaw_ridge/review';
import { review as HellbenderReview } from './content/hellbender/review';
import { review as HelterSkelterReview } from './content/helter_skelter/review';
import { review as HerReview } from './content/her/review';
import { review as HereditaryReview } from './content/hereditary/review';
import { review as HowlsMovingCastleReview } from './content/howls_moving_castle/review';
import { review as ImThinkingOfEndingThingsReview } from './content/im_thinking_of_ending_things/review';
import { review as InfinityPoolReview } from './content/infinity_pool/review';
import { review as KikisDeliveryServiceReview } from './content/kikis_delivery_service/review';
import { review as LastSunriseReview } from './content/last_sunrise/review';
import { review as LeaveNoTraceReview } from './content/leave_no_trace/review';
import { review as LifeIsBeautifulReview } from './content/life_is_beautiful/review';
import { review as LifeOfPiReview } from './content/life_of_pi/review';
import { review as LionReview } from './content/lion/review';
import { review as LoveExposureReview } from './content/love_exposure/review';
import { review as MarcelTheShellWithShoesOnReview } from './content/marcel_the_shell_with_shoes_on/review';
import { review as MissZombieReview } from './content/miss_zombie/review';
import { review as MonstersReview } from './content/monsters/review';
import { review as MonstersIncReview } from './content/monsters_inc/review';
import { review as MotherReview } from './content/mother/review';
import { review as MulhollandDriveReview } from './content/mulholland_drive/review';
import { review as MyNeighbourTotoroReview } from './content/my_neighbour_totoro/review';
import { review as NausicaaReview } from './content/nausicaa/review';
import { review as NocturnalAnimalsReview } from './content/nocturnal_animals/review';
import { review as NotesOnBlindnessReview } from './content/notes_on_blindness/review';
import { review as OculusReview } from './content/oculus/review';
import { review as ParasiteReview } from './content/parasite/review';
import { review as PleasantvilleReview } from './content/pleasantville/review';
import { review as PossessionReview } from './content/possession/review';
import { review as PredestinationReview } from './content/predestination/review';
import { review as PrincessMononokeReview } from './content/princess_mononoke/review';
import { review as RevengeReview } from './content/revenge/review';
import { review as RiseRoarRevoltReview } from './content/rise_roar_revolt/review';
import { review as RockyReview } from './content/rocky/review';
import { review as SevenYearsInTibetReview } from './content/seven_years_in_tibet/review';
import { review as SlitherReview } from './content/slither/review';
import { review as SnowpiercerReview } from './content/snowpiecer/review';
import { review as SolarisReview } from './content/solaris/review';
import { review as SoundOfMetalReview } from './content/sound_of_metal/review';
import { review as SpiritedAwayReview } from './content/spirited_away/review';
import { review as SplitReview } from './content/split/review';
import { review as StarmanReview } from './content/starman/review';
import { review as TagReview } from './content/tag/review';
import { review as TheAgeOfAdalineReview } from './content/the_age_of_adaline/review';
import { review as TheCuriousCaseOfBenjaminButtonReview } from './content/the_curious_case_of_benjamin_button/review';
import { review as TheGirlWithTheDragonTattooReview } from './content/the_girl_with_the_dragon_tattoo/review';
import { review as TheInvisibleManReview } from './content/the_invisible_man/review';
import { review as TheLandOfCardsReview } from './content/the_land_of_cards/review';
import { review as TheMapOfTinyPerfectThingsReview } from './content/the_map_of_tiny_perfect_things/review';
import { review as TheMatrixReview } from './content/the_matrix/review';
import { review as ThePerksOfBeingAWallflowerReview } from './content/the_perks_of_being_a_wallflower/review';
import { review as TheShapeOfWaterReview } from './content/the_shape_of_water/review';
import { review as TheStrangersReview } from './content/the_strangers/review';
import { review as TheTagAlongReview } from './content/the_tag_along/review';
import { review as TheWindRisesReview } from './content/the_wind_rises/review';
import { review as ThemReview } from './content/them/review';
import { review as VictoriaReview } from './content/victoria/review';
import { review as WalleReview } from './content/walle/review';
import { review as WavesReview } from './content/waves/review';
import { review as WeNeedToTalkAboutKevinReview } from './content/we_need_to_talk_about_kevin/review';
import { review as WolfChildrenReview } from './content/wolf_childrem/review';
import { review as WrongReview } from './content/wrong/review';
import { review as XxxHolicReview } from './content/xxxholic/review';
*/


// TODO: it would be nice if I could use this regex to automatically detect any file.
// (e.g. detect any file with the name 'screenshot.{}' where the {} could be jpg, jpeg, png, PNG, or webp
// but currently I have no idea how to make this work.
// this is a bit annoying because it means I have to 'hardcode' paths to screenshots.
// (e.g. require('./content/white_god/screenshot1.webp'))
//const regex  = new RegExp("^.\/websiteContent\/films\/(.*?)\/screenshot(.jpg|.png|.PNG|.jpeg|.webp)$")    


/**
 * References to screenshots.
 * I need to reference them twice (screenshots list, and passing the screenshots list into the review)
 */
const screenshots = {
    SLEEPLESS_BEAUTY: [
        require('./content/sleepless_beauty/screenshot1.PNG'),
        require('./content/sleepless_beauty/screenshot2.PNG'),
        require('./content/sleepless_beauty/screenshot3.PNG'),
    ],

    ANGEL_A: [
        require('./content/angel_a/screenshot6.PNG'),
        require('./content/angel_a/screenshot11.PNG'),
        require('./content/angel_a/screenshot5.PNG'),
    ],

    HOW_TO_TALK_TO_GIRLS_AT_PARTIES: [
        require('./content/how_to_talk_to_girls_at_parties/screenshot2.PNG'),
        require('./content/how_to_talk_to_girls_at_parties/screenshot5.PNG'),
        require('./content/how_to_talk_to_girls_at_parties/screenshot8.PNG'),
    ],

    THE_LIVING_AND_THE_DEAD: [
        require('./content/the_living_and_the_dead/screenshot3.PNG'),
        require('./content/the_living_and_the_dead/screenshot2.PNG'),
        require('./content/the_living_and_the_dead/screenshot1.PNG'),
    ],

    A_BANQUET: [
        require('./content/a_banquet/screenshot1.PNG'),
        require('./content/a_banquet/screenshot3.PNG'),
        require('./content/a_banquet/screenshot6.PNG'),
    ],

    ROYAL_SPACE_FORCE_THE_WINGS_OF_HONNEAMISE: [
        require('./content/royal_space_force_the_wings_of_honneamise/screenshot1.PNG'),
        require('./content/royal_space_force_the_wings_of_honneamise/screenshot2.PNG'),
        require('./content/royal_space_force_the_wings_of_honneamise/screenshot3.PNG'),
    ],

    LANDSCAPE_WITH_INVISIBLE_HAND: [
        require('./content/landscape_with_invisible_hand/screenshot1.PNG'),
        require('./content/landscape_with_invisible_hand/screenshot6.PNG'),
        require('./content/landscape_with_invisible_hand/screenshot10.PNG'),
    ],

    MEET_CUTE: [
        require('./content/meet_cute/screenshot1.PNG'),
        require('./content/meet_cute/screenshot3.PNG'),
        require('./content/meet_cute/screenshot5.PNG'),
    ],

    THE_BLIND_MAN_WHO_DID_NOT_WANT_TO_SEE_TITANIC: [
        require('./content/the_blind_man_who_did_not_want_to_see_titanic/screenshot1.PNG'),
        require('./content/the_blind_man_who_did_not_want_to_see_titanic/screenshot2.PNG'),
        require('./content/the_blind_man_who_did_not_want_to_see_titanic/screenshot4.PNG'),
    ],

    THE_CRANES_ARE_FLYING: [
        require('./content/the_cranes_are_flying/screenshot14.PNG'),
        require('./content/the_cranes_are_flying/screenshot5.PNG'),
        require('./content/the_cranes_are_flying/screenshot1.PNG'),
    ],

    MIND_GAME: [
        require('./content/mind_game/screenshot23.jpg'),
        require('./content/mind_game/screenshot2.jpg'),
        require('./content/mind_game/screenshot14.jpg'),
    ],

    HUMAN_SPACE_TIME_AND_HUMAN: [
        require('./content/human_space_time_and_human/screenshot8.PNG'),
        require('./content/human_space_time_and_human/screenshot5.PNG'),
        require('./content/human_space_time_and_human/screenshot1.PNG'),
    ],
    
    THE_BOW: [
        require('./content/the_bow/screenshot8.PNG'),
        require('./content/the_bow/screenshot9.PNG'),
        require('./content/the_bow/screenshot11.PNG'),
    ],

    POOR_THINGS: [
        require('./content/poor_things/screenshot17.PNG'),
        require('./content/poor_things/screenshot16.PNG'),
        require('./content/poor_things/screenshot3.PNG'),
    ],

    FUNUKE_SHOW_SOME_LOVE_YOU_LOSERS: [
        require('./content/funuke_show_some_love_you_losers/screenshot5.jpg'),
        require('./content/funuke_show_some_love_you_losers/screenshot8.jpg'),
        require('./content/funuke_show_some_love_you_losers/screenshot6.jpg'),
    ],

    THREE_IRON: [
        require('./content/3iron/screenshot1.jpg'),
        require('./content/3iron/screenshot4.jpg'),
        require('./content/3iron/screenshot3.jpg'),
    ],

    KIDS_RETURN: [
        require('./content/kids_return/screenshot5.jpg'),
        require('./content/kids_return/screenshot7.jpg'),
        require('./content/kids_return/screenshot12.jpg'),
    ],

    PERFECT: [
        require('./content/perfect/screenshot10.jpg'),
        require('./content/perfect/screenshot4.jpg'),
        require('./content/perfect/screenshot13.jpg'),
    ],

    A_SCENE_AT_THE_SEA: [
        require('./content/a_scene_at_the_sea/screenshot3.jpg'),
        require('./content/a_scene_at_the_sea/screenshot9.jpg'),
        require('./content/a_scene_at_the_sea/screenshot5.jpg'),
    ],

    HOUSE_OF_FLYING_DAGGERS: [
        require('./content/house_of_flying_daggers/screenshot13.jpg'),
        require('./content/house_of_flying_daggers/screenshot36.jpg'),
        require('./content/house_of_flying_daggers/screenshot5.jpg'),
    ],

    LIKE_FATHER_LIKE_SON: [
        require('./content/like_father_like_son/screenshot1.PNG'),
        require('./content/like_father_like_son/screenshot11.PNG'),
        require('./content/like_father_like_son/screenshot10.PNG'),
    ],

    MR_JONES: [
        require('./content/mr_jones/screenshot3.PNG'),
        require('./content/mr_jones/screenshot11.PNG'),
        require('./content/mr_jones/screenshot2.PNG'),
    ],

    THE_BRAND_NEW_TESTAMENT: [
        require('./content/the_brand_new_testament/screenshot3.PNG'),
        require('./content/the_brand_new_testament/screenshot13.PNG'),
        require('./content/the_brand_new_testament/screenshot14.PNG'),
    ],

    INCREDIBLE_BUT_TRUE: [
        require('./content/incredible_but_true/screenshot1.PNG'),
        require('./content/incredible_but_true/screenshot2.PNG'),
        require('./content/incredible_but_true/screenshot6.PNG'),
    ],

    OBLIVION_ISLAND: [
        require('./content/oblivion_island/screenshot1.PNG'),
        require('./content/oblivion_island/screenshot5.PNG'),
        require('./content/oblivion_island/screenshot8.PNG'),
    ],

    LEON_THE_PROFESSIONAL: [
        require('./content/leon_the_professional/screenshot1.PNG'),
        require('./content/leon_the_professional/screenshot2.PNG'),
        require('./content/leon_the_professional/screenshot3.PNG'),
    ],

    DEEP_SEA: [
        require('./content/deep_sea/screenshot1.PNG'),
        require('./content/deep_sea/screenshot10.PNG'),
        require('./content/deep_sea/screenshot12.PNG'),
    ],

    BAREFOOT_GEN: [
        require('./content/barefoot_gen/screenshot4.PNG'),
        require('./content/barefoot_gen/screenshot8.PNG'),
        require('./content/barefoot_gen/screenshot11.PNG'),
    ],

    LITTLE_SHOP_OF_HORRORS: [
        require('./content/little_shop_of_horrors/screenshot2.PNG'),
        require('./content/little_shop_of_horrors/screenshot3.PNG'),
        require('./content/little_shop_of_horrors/screenshot4.PNG'),
    ],
    
    SPRING_AND_CHAOS: [
        require('./content/spring_and_chaos/screenshot1.PNG'),
        require('./content/spring_and_chaos/screenshot2.PNG'),
        require('./content/spring_and_chaos/screenshot12.PNG'),
    ],

    THE_DOG_OF_FLANDERS: [
        require('./content/the_dog_of_flanders/screenshot1.PNG'),
        require('./content/the_dog_of_flanders/screenshot6.PNG'),
        require('./content/the_dog_of_flanders/screenshot24.PNG'),
    ],

    TONY_TAKITANI: [
        require('./content/tony_takitani/screenshot1.PNG'),
        require('./content/tony_takitani/screenshot3.PNG'),
        require('./content/tony_takitani/screenshot6.PNG'),
    ],

    LUPIN_THE_THIRD: [
        require('./content/lupin_the_third/screenshot14.PNG'),
        require('./content/lupin_the_third/screenshot7.PNG'),
        require('./content/lupin_the_third/screenshot3.PNG'),
    ],

    CONVENIENCE_STORY: [
        require('./content/convenience_story/screenshot2.PNG'),
        require('./content/convenience_story/screenshot6.PNG'),
        require('./content/convenience_story/screenshot13.PNG'),
    ],

    PORTALS: [
        require('./content/portals/screenshot3.PNG'),
        require('./content/portals/screenshot8.PNG'),
        require('./content/portals/screenshot1.PNG'),
    ],

    SPONTANEOUS: [
        require('./content/spontaneous/screenshot5.PNG'),
        require('./content/spontaneous/screenshot7.PNG'),
        require('./content/spontaneous/screenshot1.PNG'),
    ],

    CASHBACK: [
        require('./content/cashback/screenshot1.PNG'),
        require('./content/cashback/screenshot5.PNG'),
        require('./content/cashback/screenshot4.PNG'),
    ],

    MALIGNANT: [
        require('./content/malignant/screenshot5.PNG'),
        require('./content/malignant/screenshot2.PNG'),
        require('./content/malignant/screenshot7.PNG'),
    ],

    CJ7: [
        require('./content/cj7/screenshot1.PNG'),
        require('./content/cj7/screenshot3.PNG'),
        require('./content/cj7/screenshot2.PNG'),
    ],
    
    A_BRIDGE_FOR_RIP_VAN_WINKLE: [
        require('./content/a_bride_for_rip_van_winkle/screenshot11.PNG'),
        require('./content/a_bride_for_rip_van_winkle/screenshot6.PNG'),
        require('./content/a_bride_for_rip_van_winkle/screenshot10.PNG'),
    ],

    GET_DUKED: [
        require('./content/get_duked/screenshot1.PNG'),
        require('./content/get_duked/screenshot3.PNG'),
        require('./content/get_duked/screenshot4.PNG'),
    ],

    PULSE: [
        require('./content/pulse/screenshot1.PNG'),
        require('./content/pulse/screenshot2.PNG'),
        require('./content/pulse/screenshot8.PNG'),
    ],

    MEANDER: [
        require('./content/meander/screenshot3.PNG'),
        require('./content/meander/screenshot4.PNG'),
        require('./content/meander/screenshot2.PNG'),
    ],

    SHADOW_IN_THE_CLOUD: [
        require('./content/shadow_in_the_cloud/screenshot1.PNG'),
        require('./content/shadow_in_the_cloud/screenshot2.PNG'),
        require('./content/shadow_in_the_cloud/screenshot8.PNG'),
    ],

    AWAIT_FURTHER_INSTRUCTIONS: [
        require('./content/await_further_instructions/screenshot4.PNG'),
        require('./content/await_further_instructions/screenshot13.PNG'),
        require('./content/await_further_instructions/screenshot11.PNG'),
    ],

    CHILDREN_OF_THE_SEA: [
        require('./content/children_of_the_sea/screenshot30.webp'),
        require('./content/children_of_the_sea/screenshot31.webp'),
        require('./content/children_of_the_sea/screenshot33.webp'),
        /*
        require('./content/children_of_the_sea/screenshot2.webp'),
        require('./content/children_of_the_sea/screenshot5.webp'),
        require('./content/children_of_the_sea/screenshot3.webp'),
        require('./content/children_of_the_sea/screenshot17.webp')
        */
    ],

    WHITE_GOD: [
        require('./content/white_god/screenshot1.webp'),
        require('./content/white_god/screenshot2.webp'),
        require('./content/white_god/screenshot3.webp'),
    ],

    FLATLAND: [
        require('./content/flatland/screenshot1.jpg'),
        require('./content/flatland/screenshot5.jpg'),
        require('./content/flatland/screenshot14.jpg'),
    ],

    FEAST: [
        require('./content/feast/screenshot1.webp'),
        require('./content/feast/screenshot2.webp'),
        require('./content/feast/screenshot5.webp'),
    ],

    THE_SECRET_WORLD_OF_ARRIETTY: [
        require('./content/the_secret_world_of_arrietty/screenshot1.webp'),
        require('./content/the_secret_world_of_arrietty/screenshot2.webp'),
        require('./content/the_secret_world_of_arrietty/screenshot3.webp'),
    ],

    A_GHOST_STORY: [
        require('./content/a_ghost_story/screenshot1.webp'),
        require('./content/a_ghost_story/screenshot2.webp'),
        require('./content/a_ghost_story/screenshot3.webp'),
    ],

    POUPELLE_OF_CHIMMNEY_TOWN: [
        require('./content/poupelle_of_chimmney_town/screenshot1.webp'),
        require('./content/poupelle_of_chimmney_town/screenshot2.webp'),
        require('./content/poupelle_of_chimmney_town/screenshot3.webp'),
    ],

    WOLF_CHILDREN: [
        require('./content/wolf_children/screenshot7.webp'),
        require('./content/wolf_children/screenshot4.webp'),
        require('./content/wolf_children/screenshot1.webp'),
    ],

    SPIRITED_AWAY: [
        "https://www.themoviedb.org/t/p/original/iFXwrL5FDFS5WbCdG8OeSy3gRAj.jpg",
        "https://www.themoviedb.org/t/p/original/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",
        "https://www.themoviedb.org/t/p/original/hXd2cgvvVh1EzSxuyNysiLErjVM.jpg"
    ],

    TETSUO_THE_BULLET_MAN: [
        require('./content/tetsuo_the_bullet_man/screenshot1.webp'),
        require('./content/tetsuo_the_bullet_man/screenshot2.webp'),
        require('./content/tetsuo_the_bullet_man/screenshot3.webp')
    ],

    BIG_FISH_AND_BEGONIA: [
        require('./content/big_fish_and_begonia/screenshot1.webp'),
        require('./content/big_fish_and_begonia/screenshot5.webp'),
        require('./content/big_fish_and_begonia/screenshot37.webp'),
    ],

    THE_TAG_ALONG: [
        require('./content/the_tag_along/screenshot2.webp'),
        require('./content/the_tag_along/screenshot5.webp'),
        require('./content/the_tag_along/screenshot15.webp')
    ],

    TURTLES_ARE_SUPRISINGLY_GOOD_SWIMMERS: [
        require('./content/turtles_are_suprisingly_good_swimmers/screenshot2.webp'),
        require('./content/turtles_are_suprisingly_good_swimmers/screenshot8.webp'),
        require('./content/turtles_are_suprisingly_good_swimmers/screenshot4.webp'),
    ],

    ANGELS_EGG: [
        require('./content/angels_egg/screenshot1.webp'),
        require('./content/angels_egg/screenshot2.webp'),
        require('./content/angels_egg/screenshot3.webp'),
    ],

    LIMBO: [
        require('./content/limbo/screenshot3.webp'),
        require('./content/limbo/screenshot2.webp'),
        require('./content/limbo/screenshot6.webp'),
    ],

    CLIMAX: [
        require('./content/climax/screenshot5.webp'),
        require('./content/climax/screenshot3.webp'),
        require('./content/climax/screenshot7.webp'),
    ],

    STARRY_STARRY_NIGHT: [
        require('./content/starry_starry_night/screenshot4.webp'),
        require('./content/starry_starry_night/screenshot11.webp'),
        require('./content/starry_starry_night/screenshot13.webp'),
    ],

    CHILDREN_WHO_CHASE_LOST_VOICES: [
        require('./content/children_who_chase_lost_voices/screenshot1.webp'),
        require('./content/children_who_chase_lost_voices/screenshot2.webp'),
        require('./content/children_who_chase_lost_voices/screenshot3.webp'),
    ],

    ZOE: [
        require('./content/zoe/screenshot5.webp'),
        require('./content/zoe/screenshot2.webp'),
        require('./content/zoe/screenshot4.webp'),
    ],

    WE_MADE_A_BEAUTIFUL_BOUQUET: [
        require('./content/we_made_a_beautiful_bouquet/screenshot1.webp'),
        require('./content/we_made_a_beautiful_bouquet/screenshot2.webp'),
        require('./content/we_made_a_beautiful_bouquet/screenshot3.webp'),
    ],
}

// [NOTE]: Ctrl+k, Ctrl+0 will close all variables... Very handy shortcut for this particular file!

/**
 * My database of film reviews
 * This doesn't include web data (e.g. genres, year, director, etc...), that data is recieved later on from an API.
 * This database should only include things like my_rating, my_review, custom_poster_url, etc...
 * Crucially, the letterboxd_url parameter MUST be correct, because I am essentially using that as an ID for each film.
 */
const database = {
    123: {
        "3_iron": {
            letterboxd_url: "https://boxd.it/28WK",
            screenshots: screenshots.THREE_IRON,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.THREE_IRON)),
            my_rating: 9.0,
            my_tags: [
                "Soulmate",
            ],
            custom_poster_url: "https://image.tmdb.org/t/p/original/dwxT6srhjJfBhDePFCbcorlnbIp.jpg"
        },
    
        "1408": {
            letterboxd_url: "https://boxd.it/25Vu",
            my_rating: 8.5,
            my_tags: [
                "Claustrophobic", 
                "Disturbing",
                "One-location",
                "Atmospheric"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/zEaMTpG71O0NN7XlQwYyaWVpTyX.jpg"
        },
    
        "2001_a_space_odyssey": {
            letterboxd_url: "https://boxd.it/2bf0",
            my_rating: 8.0,
            my_tags: [
                "Mysterious", 
                "Grand", 
                "Great cinematography",
                "Minimal dialogue", 
                "Artificial Intelligence"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/zmmYdPa8Lxx999Af9vnVP4XQ1V6.jpg"
        },
    
        "127_hours": {
            letterboxd_url: "https://boxd.it/SLa",
            my_rating: 8.5,
            my_tags: [
                "Alone in the wilderness",
                "Survival story",
                "Based on true events",
                "Hallucinations",
                "Questioning reality", 
                "Minimal dialogue", 
                "One-location"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/zHOZLYsfykHWhYAsC4MN09xKP9F.jpg"
        },
    
        "10_cloverfield_lane": {
            letterboxd_url: "https://boxd.it/aZiu",
            my_rating: 9.0,
            my_tags: [
                "Mysterious",
                "Claustrophobic", 
                "One-location", 
                "Creepy"
            ],
            my_review: "",
            custom_poster_url:  "https://www.themoviedb.org/t/p/original/84Dhwz93vCin6T1PX6ctSvWEuNE.jpg"
        },
    
        "1917": {
            letterboxd_url: "https://boxd.it/jj4y",
            my_rating: 9.0,
            my_tags: [
                "War", 
                "One-take",
                "Not giving up despite being in a shitty situation",
                "Great soundtrack"
            ],
            my_review: ""
        },
    
        "500_days_of_summer": {
            letterboxd_url: "https://boxd.it/1EmM",
            "title_displayed": "(500) Days of Summer",
            my_rating: 9.0,
            my_tags: [
                "Soulmate", 
                "Non-linear timeline", 
                "Emotional"
            ],
            my_review: ""
        },
    },

    THE: {
        "the_fifth_thoracic_vertebra": {
            letterboxd_url: "https://boxd.it/BjwS",
            custom_poster_url: "https://image.tmdb.org/t/p/original/d29bvgq2WX50y1NGDOJB89IS0.jpg",
            my_rating: 7.5,
            my_tags: [
                "Weird",
            ]
        },

        "the_parades": {
            letterboxd_url: "https://boxd.it/L3Ny",
            my_rating: 8.5,
            custom_poster_url: "https://image.tmdb.org/t/p/original/icx1KNeoYbLAQpSeySJgWiHfQaD.jpg",
            my_tags: [
                "Emotional",
                "Right in the feels",
                "The afterlife",
                "Tsunami",
                "Grief",
                "Regret",
                "Friendship"
            ]
        },

        "the_flowers_of_war": {
            letterboxd_url: "https://boxd.it/2Evc",
            my_rating: 8.0,
            custom_poster_url: "https://image.tmdb.org/t/p/original/cUIirEWA9ug8AWN85xbTLnMS9Ip.jpg",
            my_tags: [
                "Poignant",
                "Tragic",
                "Sad"
            ]
        },

        "the_great_yokai_war": {
            letterboxd_url: "https://boxd.it/XZm",
            my_rating: 7.5,
            custom_poster_url: "https://image.tmdb.org/t/p/original/q3LkdQwYRjqFr1jPJRyEwwAkGX3.jpg",
            my_tags: [
                "Amazing creature designs",
                "Weird",
                "Absurd",
                "Post-apocalyptic Tokyo vibes",
                "Non-serious action film",
            ],
        },

        "the_bow": {
            letterboxd_url: "https://boxd.it/27Ky",
            my_rating: 8.0,
            custom_poster_url: "https://image.tmdb.org/t/p/original/w10BkMqJi2vLtdSJHB0dg4JEiVO.jpg",
            screenshots: screenshots.THE_BOW,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.THE_BOW)),
            my_tags: [
                "Almost dialogueless",
                "Amazing soundtrack",
                "One location film",
                "Water",
            ],
        },

        "the_dog_of_flanders": {
            letterboxd_url: "https://boxd.it/HVe",
            my_rating: 8.0,
            custom_poster_url: "https://www.themoviedb.org/t/p/original/nUWxMi30IGkesljk6v6upnUX7lv.jpg",
            screenshots: screenshots.THE_DOG_OF_FLANDERS,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.THE_DOG_OF_FLANDERS)),
            my_tags: [
                "Friendship",
                "Kindness",
                "Embrace mother nature",
                "Intimate",
                "Great soundtrack",
            ],
        },
        
        "the_secret_world_of_arrietty": {
            my_rating: 9.0,
            letterboxd_url: "https://boxd.it/AF4",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/oFlgPpxmZ4oTdxGc8aePWsKClxw.jpg",
            screenshots: screenshots.THE_SECRET_WORLD_OF_ARRIETTY,
            my_review: ReactDomServer.renderToString(ArriettyReview(screenshots.THE_SECRET_WORLD_OF_ARRIETTY)),
            my_tags: [
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
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/e1Ga",
            my_review: "",
            my_tags: [
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
            my_rating: 10,
            letterboxd_url: "https://boxd.it/4JQS",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/RyosyYVvQL2fYBPl7hCLL6XyMC.jpg",
            my_tags: [
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
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/1ZTM",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/hfHKVeiu2xaxVjqPuKM0m6lpEL5.jpg",
            my_tags: [
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
            my_rating: 10,
            letterboxd_url: "https://boxd.it/aPMO",
            screenshots: screenshots.THE_BRAND_NEW_TESTAMENT,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.THE_BRAND_NEW_TESTAMENT)),
            custom_poster_url: "https://www.themoviedb.org/t/p/original/1aHD703Qkh9Rf9vLjdJRxJT25F0.jpg",
            my_tags: [
                "Life",
                "Death",
                "Religion",
                "God",
            ],
        },
    
        "the_lego_movie": {
            letterboxd_url: "https://boxd.it/4pDO",
            my_rating: 8.0,
            my_tags: [
                "Intricate animation style",
                "Uplifting", 
                "Fun"
            ],
            my_review: ""
        },
    
        "the_red_turtle": {
            letterboxd_url: "https://boxd.it/bdkE",
            my_rating: 8.0,
            my_tags: [
                "Alone in the wilderness", 
                "Embrace mother nature",
                "Friendship", 
                "Dialogueless", 
                "Fairy tale", 
                "Great soundtrack"
            ],
            my_review: ""
        },
    
        "the_wailing": {
            letterboxd_url: "https://boxd.it/9fLy",
            my_rating: 8.5,
            my_tags: [
                "Possessed", 
                "Paranormal",
                "Exorcism",
                "Brutal", 
                "Tribal", 
                "Mysterious"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/lWE9ih9qgjx8HatYboP7fG0nri.jpg"
        },
    
        "the_nightmare_before_christmas": {
            letterboxd_url: "https://boxd.it/1YzQ",
            my_rating: 8.0,
            my_tags: [
                "Stumbling across the prospect of happiness",
                "Creature-feature", 
                "Great soundtrack"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/oQffRNjK8e19rF7xVYEN8ew0j7b.jpg"
        },
    
        "the_empty_man": {
            letterboxd_url: "https://boxd.it/iIWS",
            my_rating: 8.0,
            my_tags: [
                "Atmospheric",
                "Confusing", 
                "Snow",
                "Weird", 
                "Disturbing", 
                "Creepy"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/hsueWFGkuXFOnKAxzoYUMUDA9T3.jpg"
        },
    
        "the_vast_of_night": {
            letterboxd_url: "https://boxd.it/kJyc",
            my_rating: 8.0,
            my_tags: [
                "Atmospheric", 
                "Mysterious", 
                "Melancholic", 
                "Search for Extra Terrestrial Intelligence (SETI)", 
                "Radio station", 
                "One-take"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/q2P9lYkctl5Ory71HEBMaFxbVlD.jpg"
        },
    
        "the_autopsy_of_jane_doe": {
            letterboxd_url: "https://boxd.it/dUu2",
            my_rating: 8.0,
            my_tags: [
                "Creepy",
                "Disturbing"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/6K0wjP8kPCiPYy9PtXBGuypyt5I.jpg"
        },
    
        "the_man_who_planted_trees": {
            letterboxd_url: "https://boxd.it/FKS",
            my_rating: 8.0,
            my_tags: [
                "Alone in the wilderness", 
                "Embrace mother nature", 
                "Poetic",
                "Profound", 
                "Humanity and nature coexisting", 
                "Nature thriving", 
                "The ebb-and-flow of nature"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/un0NjREDaLEWWOTr7tE52MjQY6O.jpg"
        },
    
        "the_bridge_to_terabithia": {
            letterboxd_url: "https://boxd.it/28YG",
            my_rating: 8.5,
            my_tags: [
                "Sad", 
                "Depressing", 
                "Soulmate", 
                "Alone in the wilderness", 
                "Friendship", 
                "Imagination"
            ],
            my_review: ""
        },
    
        "the_age_of_adaline": {
            letterboxd_url: "https://boxd.it/9ghu",
            my_rating: 8.5,
            my_tags: [
                "Mad concept",
                "Timey-wimey"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/MbILysGhjAbnZi1Okae9wYqLMx.jpg"
        },
    
        "the_fly": {
            letterboxd_url: "https://boxd.it/1YIe",
            my_rating: 8.0,
            my_tags: [
                "Mad concept", 
                "Metamorphosis", 
                "Creature-feature", 
                "Disturbing"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/z1XdsalC4fZlzCa5Vu06QLBUhyW.jpg"
        },
    
        "the_perks_of_being_a_wallflower": {
            letterboxd_url: "https://boxd.it/2ZA8",
            my_rating: 8.0,
            my_tags: [
                "School setting",
                "Friendship",
                "Great chemistry between characters",
                "A slice of life",
                "Soulmate"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/8hiVLAZVJ254qE2eJXovvhi3yzd.jpg"
        },
    
        "the_faculty": {
            letterboxd_url: "https://boxd.it/1Z5C",
            my_rating: 8.0,
            my_tags: [
                "Creature-feature", 
                "School setting",
                "Metamorphosis", 
                "Fun",
                "Mysterious"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/5XetJwmAiDC0EtH23NIXaqFn3Wl.jpg"
        },
    
        "the_map_of_tiny_perfect_things": {
            letterboxd_url: "https://boxd.it/p3O8",
            my_rating: 8.5,
            my_tags: [
                "Time loop",
                "Friendship", 
                "Soulmate", 
                "Turning negatives into positives", 
                "Not giving up despite being in a shitty situation"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/6y3ev0rJFbHA1hU22UPmmfzBjrG.jpg"
        },
    
        "the_exorcism_of_emily_rose": {
            letterboxd_url: "https://boxd.it/200I",
            my_rating: 8.5,
            my_tags: [
                "Exorcism",
                "Disturbing",
                "Court scenario"
            ],
            my_review: ""
        },
    
        "the_girl_with_the_dragon_tattoo": {
            letterboxd_url: "https://boxd.it/2Pa",
            my_rating: 8.0,
            my_tags: [
                "Atmospheric",
                "Murder mystery",
                "Mysterious",
                "Gross",
                "Conspiracy"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/8bokS83zGdhaXgN9tjidUKmAftW.jpg"
        },
    
        "the_ring": {
            letterboxd_url: "https://boxd.it/2a70",
            my_rating: 8.5,
            my_tags: [
                "Atmospheric",
                "Total escapism",
                "Great cinematography",
                "Mysterious",
                "Death",
                "Gross",
                "Murder mystery"
            ],
            my_review: ""
        },
    
        "the_tenant": {
            letterboxd_url: "https://boxd.it/1TKk",
            my_rating: 8.5,
            my_tags: [
                "Surrealist horror", 
                "Xenophobia", 
                "Isolation",
                "Hostility",
                "Paranoia", 
                "Loss of identity",
                "Claustrophobic", 
                "Conspiracy",
                "Living in flats"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/4Qhzb1ICFMqE3isWoln497qSH7n.jpg"
        },
    
        "the_frame": {
            letterboxd_url: "https://boxd.it/9JNE",
            my_rating: 8.5,
            my_tags: [
                "Contemplative sci-fi",
                "Mysterious", 
                "Profound", 
                "Questioning reality", 
                "Simulation", 
                "Creative use of framing"
            ],
            my_review: ""
        },
    
        "the_pianist": {
            letterboxd_url: "https://boxd.it/2aqc",
            my_rating: 9.0,
            my_tags: [
                "War",
                "Minimal",
                "Very small cast",
                "The universal power of music"
            ],
            my_review: ""
        },
    
        "the_peanut_butter_falcon": {
            letterboxd_url: "https://boxd.it/gzu2",
            my_rating: 9.0,
            my_tags: [
                "Uplifting",
                "Soulmate",
                "Alone in the wilderness",
                "Roadtrip",
                "Underdogs",
                "Cerebral palsy"
            ],
            my_review: ""
        },
    
        "the_mitchells_vs_the_machines": {
            letterboxd_url: "https://boxd.it/i7xm",
            custom_poster_url: "https://image.tmdb.org/t/p/original/7PbKmufk7c4sGbDZ8FHHxks8XaZ.jpg",
            my_rating: 9.0,
            my_tags: [
                "Intricate animation style", 
                "End of the world", 
                "Uplifting", 
                "Family", 
                "Social commentary"
            ],
            my_review: ""
        },
    
        "the_exorcist": {
            letterboxd_url: "https://boxd.it/1Yoo",
            my_rating: 9.0,
            my_tags: [
                "Terrifying",
                "Exorcism"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg"
        },
    
        "the_sound_of_music": {
            letterboxd_url: "https://boxd.it/1MLK",
            my_rating: 9.5,
            my_tags: [
                "Uplifting",
                "Music",
                "War",
                "Britian 1960s",
                "Great soundtrack"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/c6CrUZypAsBCaRWX0M3RVRDbhNS.jpg"
        },
    
        "the_shape_of_water": {
            letterboxd_url: "https://boxd.it/dZ5m",
            my_rating: 9.5,
            my_tags: [
                "Atmospheric",
                "Water",
                "Beautiful",
                "Melancholic",
                "Great soundtrack",
                "Minimal dialogue"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/r0bgHi3MwGHTKPWyJdORsb4ukY8.jpg"
        },
    
        "the_matrix": {
            letterboxd_url: "https://boxd.it/2a1m",
            my_rating: 10.0,
            my_tags: ["Dystopia"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg"
        },
    
        "the_invisible_man": {
            letterboxd_url: "https://boxd.it/kWlA",
            my_rating: 10.0,
            my_tags: ["Terrifying", "Total escapism", "Invisibility", "Creepy"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg"
        },
    
        "the_shining": {
            letterboxd_url: "https://boxd.it/29Nu",
            my_rating: 9.5,
            my_tags: ["Terrifying", "Atmospheric", "Snow", "One-location", "Possession", "Hallucinations", "Questioning reality"],
            my_review: ""
        },
    
        "the_revenant": {
            letterboxd_url: "https://boxd.it/8H5e",
            my_rating: 9.5,
            my_tags: ["Alone in the wilderness", "Survival story", "Mississipi 1800s", "Based on a true story", "Brutal", "Betrayl", "Finding positives from negatives", "Not giving up despite being in a shitty situation", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/o6wunVSN9WI1obidUq3clGq65ZP.jpg"
        },
    
        "the_truman_show": {
            letterboxd_url: "https://boxd.it/18U8",
            my_rating: 10.0,
            my_tags: ["Uplifting", "Conspiracy", "Questioning reality", "Religion", "Faith", "Beyond existence"],
            my_review: ""
        },
    
        "the_curious_case_of_benjamin_button": {
            letterboxd_url: "https://boxd.it/23Fk",
            my_rating: 10.0,
            my_tags: ["A slice of life", "Death", "Humanity", "Friendship", "Profound"],
            my_review: "",
            custom_poster_url: require('./content/the_curious_case_of_benjamin_button/custom_poster.jpg')
        },
    
        "the_strangers": {
            letterboxd_url: "https://boxd.it/1VGY",
            my_rating: 8.0,
            my_tags: ["Terrifying"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/eei83VHNaHFopOyxeFj5XI6LjLJ.jpg"
        },
    
        "the_tunnel": {
            letterboxd_url: "https://boxd.it/NGk",
            my_rating: 8.0,
            my_tags: ["Found footage", "Stuck underground", "Claustrophobic", "Frightening", "Creepy"],
            my_review: "",
            "gradual_interest": [6, 6, 7, 7, 8, 8, 8, 8, 8]
        },
    
        "the_prestige": {
            letterboxd_url: "https://boxd.it/293w",
            my_rating: 8.0,
            my_tags: ["Magician"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/bdN3gXuIZYaJP7ftKK2sU0nPtEA.jpg"
        },
        
        "the_secret_life_of_walter_mitty": {
            letterboxd_url: "https://boxd.it/3SWy",
            my_rating: 8.0,
            my_tags: [
                "Uplifting", 
                "Exploring new places", 
                "Discovering independence", 
                "Soulmate"
            ],
            my_review: ""
        },
    
        "the_babadook": {
            letterboxd_url: "https://boxd.it/77xu",
            my_rating: 8.0,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/ArPWMf2leE6H9IIJ3tHVt6uewLR.jpg"
        },
    
        "the_land_of_cards": {
            letterboxd_url: "https://boxd.it/6fWg",
            my_rating: 7.5,
            my_tags: ["Searching for freedom", "Starting a revolution", "Dictatorship", "Politics", "Poems"],
            my_review: "",
            "gradual_interest": [6, 6, 5, 6, 6, 7, 9, 8, 8, 8, 8],
            custom_poster_url: require('./content/the_land_of_cards/custom_poster.jpg')
        },
    
        "the_broken": {
            letterboxd_url: "https://boxd.it/25jq",
            my_rating: 7.5,
            my_tags: ["Confusing", "Suspensful", "Atmospheric", "Murky", "Doppelganger", "Trauma", "Mental illness", "Unknown entities disguised as humans"],
            my_review: "",
            "gradual_interest": [6, 7, 7, 7, 8, 8, 7, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/c7WsgY4jPAvN0L90iUTuByElnJc.jpg"
        },
    
        "the_book_of_eli": {
            letterboxd_url: "https://boxd.it/1Dnu",
            my_rating: 8.0,
            my_tags: ["Faith", "Religon", "Exploring unknown territory", "Post-apocalyptic world", "Humanity", "Growth", "Death", "Stylistic", "Atmospheric", "People that are blind"],
            my_review: "",
            "gradual_interest": [6, 6, 6, 7, 7, 6, 7, 7, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/1H1y9ZiqNFaLgQiRDDZLA55PviW.jpg"
        },
    
        "the_visit": {
            letterboxd_url: "https://boxd.it/9ssO",
            my_rating: 8.0,
            my_tags: [],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 7, 7, 8, 8, 8, 8]
        },
    
        "the_midnight_meat_train": {
            letterboxd_url: "https://boxd.it/1WSw",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/x5YbfyUA8huK0shr008xwzNVJ5Y.jpg"
        },
    
        "the_divide": {
            letterboxd_url: "https://boxd.it/15Mg",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/sfjN76YhJKVonJIDYz8cYGxFcye.jpg"
        },
    
        "the_beach_house": {
            letterboxd_url: "https://boxd.it/nrek",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/p8M21d4vzXKa027a00BeRvc3JoX.jpg"
        },
    
        "the_eye_2": {
            letterboxd_url: "https://boxd.it/1xdy",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/2l8GsWmmJItS4TAhp3ff5xQxcSn.jpg"
        },
    
        "the_stylist": {
            letterboxd_url: "https://boxd.it/rPHy",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
        },
    
        "the_forest_of_love": {
            letterboxd_url: "https://boxd.it/nqbk",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/lJaRdstEc8XwrH2VALEvU35oiz8.jpg"
        },
    
        "the_blair_witch_project": {
            letterboxd_url: "https://boxd.it/26ua",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/oD0o6bnp3l9QxiUvPJAp5y5gMqV.jpg"
        },
    
        "the_cranes_are_flying": {
            letterboxd_url: "https://boxd.it/169Y",
            my_rating: 8.0,
            my_tags: [""],
            screenshots: screenshots.THE_CRANES_ARE_FLYING,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.THE_CRANES_ARE_FLYING)),
            "gradual_interest": [6, 6, 7, 8, 8, 8, 8, 8, 8, 9],
            custom_poster_url: "https://image.tmdb.org/t/p/original/tNS9u5FxmjaVmJoJMwztYeqIvBL.jpg",
        },
    
        "the_garden_of_words": {
            letterboxd_url: "https://boxd.it/5Ymq",
            my_rating: 7.5,
            my_tags: ["Soulmate", "Nature", "Rain", "Detailed animation"],
            my_review: "",
            "gradual_interest": [8, 8, 8, 8, 8]
        },
    
        "the_living_and_the_dead": {
            letterboxd_url: "https://boxd.it/1QwY",
            my_rating: 8.0,
            custom_poster_url: "https://image.tmdb.org/t/p/original/fxdORa3kVs4wPtI0ZmdRSsjNHYn.jpg",
            my_tags: ["Depressing", "Grim", "Disturbing", "Learning disability", "Mental health", "Amazing soundtrack", "One-location"],
            my_review: "",
            screenshots: screenshots.THE_LIVING_AND_THE_DEAD,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.THE_LIVING_AND_THE_DEAD)),
            "gradual_interest": [7, 7, 7, 8, 9, 8, 9, 8]
        },
    
        "the_children": {
            letterboxd_url: "https://boxd.it/1Kju",
            my_rating: 8.0,
            my_tags: ["Virus", "Evil children", "Disturbing", "One-location"],
            my_review: "",
            "gradual_interest": [7, 8, 8, 8, 9, 9, 9, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/vTyc2ahe0qq7BVBlPD3L4zAl7WU.jpg"
        },
    
        "the_blind_man_who_did_not_want_to_see_titanic": {
            letterboxd_url: "https://boxd.it/qQW8",
            my_rating: 8.0,
            my_tags: ["Experiencing the world of a blind person", "Unique", "Sad", "Makes you grateful for what you have"],
            screenshots: screenshots.THE_BLIND_MAN_WHO_DID_NOT_WANT_TO_SEE_TITANIC,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.THE_BLIND_MAN_WHO_DID_NOT_WANT_TO_SEE_TITANIC)),
            "gradual_interest": [6, 7, 7, 7, 8, 8, 8, 8]
        },
    
        "the_tag_along": {
            letterboxd_url: "https://boxd.it/d27e",
            my_rating: 8.0,
            my_tags: ["Possession", "Insects", "Questioning reality", "Nature"],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.THE_TAG_ALONG)),
            screenshots: screenshots.THE_TAG_ALONG,
            "gradual_interest": [8, 8, 8, 8, 8, 8, 9, 9, 9]
        },
    
        "the_seasoning_house": {
            letterboxd_url: "https://boxd.it/4aYW",
            my_rating: 7.5,
            my_tags: ["Disturbing"],
            my_review: "",
            "gradual_interest": [7, 6, 6, 7, 8, 8, 8, 8, 8]
        },
    
        "the_last_duel": {
            letterboxd_url: "https://boxd.it/mQbe",
            my_rating: 8.0,
            my_tags: ["Medieval lifestyle", "Historical", "Perspective"],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 7, 8, 8, 8, 8, 7, 7, 8, 8, 8, 7],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/3TxPIZ8nlSzB6WTOtoBz0YrxT8M.jpg"
        },
    },

    A_starts_with_single_word_a: {
        "a_scene_at_the_sea": {
            letterboxd_url: "https://boxd.it/1z10",
            custom_poster_url: "https://image.tmdb.org/t/p/original/4wM16hbACD7btRRcbRxHXMn3slS.jpg",
            screenshots: screenshots.A_SCENE_AT_THE_SEA,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.A_SCENE_AT_THE_SEA)),
            my_rating: 8.0,
            my_tags: [
                "Relaxing",
                "Contemplative",
                "Quiet",
                "Not much dialogue",
                "J-drama",
                "Sad",
                "Lonely",
                "Deaf person",
                "Surfing",
                "The sea",
            ],
            "gradual_interest": [8, 8, 9, 8, 8, 8, 8, 8, 8, 8],
        },

        "a_banquet": {
            letterboxd_url: "https://boxd.it/t8Ay",
            my_rating: 8.0,
            screenshots: screenshots.A_BANQUET,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.A_BANQUET)),
            my_tags: [
                "Dark",
                "Atmospheric",
                "Sad",
                "Emotional",
                "Depressing"
            ],
            "gradual_interest": [7, 7, 7, 8, 8, 8, 7, 7, 8, 9],
            custom_poster_url: "https://image.tmdb.org/t/p/original/4FlSYrcjO4z3McJ6UP3V5npb4B4.jpg",
        },

        "a_ghost_story": {
            my_rating: 10.0,
            letterboxd_url: "https://boxd.it/fb0K",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/sD94aixD7fMAc2e9ugbv4KQprBL.jpg",
            screenshots: screenshots.A_GHOST_STORY,
            my_review: ReactDomServer.renderToString(AGhostStoryReview(screenshots.A_GHOST_STORY)),
            my_tags: [
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
            letterboxd_url: "https://boxd.it/d99c",
            "title_displayed": "A Silent Voice",
            my_rating: 8.0,
            my_tags: [
                "Bullying",
                "Forgiveness", 
                "Anime",
                "Great soundtrack"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/rgKWgY1pJ0bolXu2YhYPN4frkpd.jpg"
        },
    
        "a_quiet_place": {
            letterboxd_url: "https://boxd.it/fVJQ",
            my_rating: 9.0,
            my_tags: [
                "Minimal dialogue",
                "Atmospheric",
                "Intense",
                "Aliens",
                "Post-apocalypse society"
            ],
            my_review: ""
        },
        
        "a_tree_of_palme": {
            letterboxd_url: "https://boxd.it/1ldQ",
            my_rating: 8.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/ui796jZGaqcLD89BHISwFNugd0X.jpg"
        },
    
        "a_bride_for_rip_van_winkle": {
            letterboxd_url: "https://boxd.it/dj9c",
            my_rating: 8.0,
            my_tags: [""],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.A_BRIDGE_FOR_RIP_VAN_WINKLE)),
            custom_poster_url: "https://www.themoviedb.org/t/p/original/ug9a2UEzSRJ6xG5NEvU4YXIbH2A.jpg",
            screenshots: screenshots.A_BRIDGE_FOR_RIP_VAN_WINKLE
        },
    },

    A: {
        "angel_a": {
            letterboxd_url: "https://boxd.it/1UjO",
            custom_poster_url: "https://image.tmdb.org/t/p/original/n9YW4zuXI0YOsIzNBKOZqTXrrfZ.jpg",
            my_rating: 9.0,
            my_tags: [
            ],
            "gradual_interest": [7, 6, 8, 8, 9, 9, 9, 9, 9],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.ANGEL_A)),
            screenshots: screenshots.ANGEL_A
        },

        "await_further_instructions": {
            letterboxd_url: "https://boxd.it/ifti",
            my_rating: 8.0,
            my_tags: [
                "Claustrophobic",
                "Brutal",
                "Creepy",
                "Mysterious",
            ],
            "gradual_interest": [7, 6, 4, 4, 4, 4, 6, 9, 9],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.AWAIT_FURTHER_INSTRUCTIONS)),
            screenshots: screenshots.AWAIT_FURTHER_INSTRUCTIONS
        },

        "after_hours": {
            letterboxd_url: "https://boxd.it/1VfS",
            my_rating: 8.0,
            my_tags: [
                "Claustrophobic",
                "Conspiracy", 
                "Nightlife", 
                "Disturbing", 
                "Quirky", 
                "Accidently getting involved in crimminal activity"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/9NyT0qHwVDsazubfSwLxt6fR7Ym.jpg"
        },
    
        "arctic": {
            letterboxd_url: "https://boxd.it/gc1Q",
            my_rating: 7.5,
            my_tags: [
                "Alone in the wilderness", 
                "Dialogueless", 
                "Just 2 actors", 
                "Snow", 
                "Survival story"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/w9GVlRteCgY103DN8CdFik3HUhO.jpg"
        },
    
        "all_my_friends_hate_me": {
            letterboxd_url: "https://boxd.it/uWPK",
            my_rating: 7.5,
            my_tags: [
                "Social anxiety",
                "Cotswolds",
                "British humour"
            ],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 7, 7, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/czBrEzJ7fzO4H8GzPerxJ6bP3kE.jpg"
        },
    
        "aniara": {
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/hUMe",
            my_tags: [
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
            my_rating: 8.5,
            letterboxd_url: "https://boxd.it/2b1i",
            my_review: "",
            custom_poster_url: "https://image.tmdb.org/t/p/original/oVc2I0WBRaVCmnL3DO0LaPQuEqh.jpg",
            my_tags: [
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
            letterboxd_url: "https://boxd.it/28yy",
            custom_poster_url: "https://image.tmdb.org/t/p/original/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg",
            my_rating: 9.5,
            my_tags: [
                "Total escapism",
                "Ancient mayan civilisation", 
                "Architecture", 
                "Amazing set design",
                "Revenge-fantasy",
                "Brutal", 
                "Not giving up despite being in a shitty situation"
            ],
            my_review: ""
        },

        "alive": {
            letterboxd_url: "https://boxd.it/210u",
            my_rating: 8.5,
            my_tags: [
                "Survival story", 
                "Not giving up despite being in a shitty situation", 
                "Brutal", 
                "Snow", 
                "Alone in the wilderness"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/uQACcCZqd7WCTRin9xRIW5gr1bd.jpg"
        },
    
        "another_earth": {
            letterboxd_url: "https://boxd.it/rRA",
            my_rating: 7.5,
            my_tags: [
                "Melancholic", 
                "Mysterious",
                "Quirky",
                "Forgiveness", 
                "Friendship", 
                "Futuristic",
                "Contemplative sci-fi"
            ],
            my_review: ""
        },
    
        "another_year": {
            letterboxd_url: "https://boxd.it/T1C",
            my_rating: 8.5,
            my_tags: [
                "A slice of life",
                "Gardening",
                "Finding happiness",
                "The ebb-and-flow of nature", 
                "Forgiveness", 
                "Melancholic", 
                "British humour",
                "Depressing"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/zrkQcAatfBox5x9KZjaYGnKoqu6.jpg"
        },

        "aliens": {
            letterboxd_url: "https://boxd.it/29PA",
            my_rating: 9.0,
            my_tags: [
                "Total escapism", 
                "Aliens"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/4y7pFNes6oUTphF5cZpx24qt5yo.jpg"
        },

        "april_story": {
            letterboxd_url: "https://boxd.it/2n9o",
            my_rating: 8.0,
            my_tags: [
                "Soulmate",
                "Introvert"
            ],
            my_review: "",
            "gradual_interest": [8, 8, 8, 8, 8, 8, 8]
        },
    
        "angels_egg": {
            letterboxd_url: "https://boxd.it/1LeA",
            my_rating: 9.5,
            my_tags: [],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.ANGELS_EGG)),
            "gradual_interest": [9, 9, 9, 9, 8, 9, 9],
            screenshots: screenshots.ANGELS_EGG,
            custom_poster_url: "https://www.themoviedb.org/t/p/original/dcEUGvckbePFzPKhGXnS9T3kZMG.jpg"
        },
    
        "american_beauty": {
            letterboxd_url: "https://boxd.it/71Y",
            my_rating: 7.5,
            my_tags: [],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/6MNwC101wSEsDyxTJBGXsgIMlmh.jpg"
        },
    
        "awakenings": {
            letterboxd_url: "https://boxd.it/1USu",
            my_rating: 10,
            my_tags: [
                "Sad",
                "Mental hosptital",
                "Depressing",
                "Awakanening-ish"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/9gztZXuHLG6AJ0fgqGd7Q43cWRI.jpg"
        },
    
        "arrival": {
            letterboxd_url: "https://boxd.it/aNGk",
            my_rating: 10,
            my_tags: [
                "Grand sci-fi", 
                "Linguistics", 
                "Non-linear timeline", 
                "Timey-wimey", 
                "Aliens", 
                "Melancholic", 
                "Emotional", 
                "Great soundtrack"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/ueSQpTaXs39YtycNoalp5q06fxD.jpg"
        },
    
        "american_mary": {
            letterboxd_url: "https://boxd.it/48WY",
            my_rating: 8.0,
            my_tags: [
                "Disturbing",
                "Body modification"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/wAJ69oBFsJ4ocOrnANixIx52A0x.jpg"
        },
    
        "achilles_and_the_tortoise": {
            letterboxd_url: "https://boxd.it/1SnO",
            my_rating: 8.0,
            my_tags: [
                "Critique of modern art"
            ],
            my_review: "",
            "gradual_interest": [8, 7, 6, 7, 8, 8, 8, 8, 7, 7, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/rU6UkrcH0QyJ5FhmKAKFhZ1nfAC.jpg"
        },
    },

    B: {
        "better_days": {
            my_rating: 7.5,
            letterboxd_url: "https://boxd.it/l9Ke",
            my_tags: [
                "Hong Kong",
                "Bullying",
                "Sad",
                "Bleak",
                "Great soundtrack"
            ],
        },

        "barefoot_gen": {
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/1OMK",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/lQ6Leu6UDIvN6nrVoOgICFm6mdL.jpg",
            screenshots: screenshots.BAREFOOT_GEN,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.BAREFOOT_GEN)),
            my_tags: [
                "Japanese anime",
                "Sad",
                "Depressing",
                "Bleak",
                "Profound",
                "Effects of the Hiroshima atomic bombing"
            ],
        },

        "belle": {
            my_rating: 9.0,
            letterboxd_url: "https://boxd.it/tbEe",
            "title_displayed": "Belle: The Dragon and the Freckled Princess",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/sp0LOwp7dVeF2c2fn9l422O5cdb.jpg",
            my_tags: [
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
            letterboxd_url: "https://boxd.it/2bcg",
            my_rating: 10.0,
            my_tags: ["Poetic", "Travelling", "Profound", "Happy-sad", "A slice of life"],
            my_review: ""
        },
    
        "beginners": {
            letterboxd_url: "https://boxd.it/s2S",
            my_rating: 8.0,
            my_tags: ["Friendship", "Soulmate", "Forgiveness", "Melancholic", "Depressing", "Honest"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/io2Tm89or3jO2pDtEAPEACx4wUe.jpg"
        },
    
        "blue_valentine": {
            letterboxd_url: "https://boxd.it/MxG",
            my_rating: 8.5,
            my_tags: ["Melancholic", "Poetic", "Sad", "Depressing", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/dc8BdKnDY5Iy28KzUGtHIXuqqFK.jpg"
        },
    
        "boyhood": {
            letterboxd_url: "https://boxd.it/3178",
            my_rating: 8.5,
            my_tags: ["A slice of life", "Finding yourself", "Family", "Friendship", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/2BvtvDUyxiMJ4dmKfiQf4qdOHQN.jpg"
        },
    
        "being_john_malkovich": {
            letterboxd_url: "https://boxd.it/2ahu",
            my_rating: 8.5,
            my_tags: ["Surrealist fantasy comedy", "Questioning reality", "Funny", "Quirky"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/xVSvIwRNzwXSs0CLefiiG6A96m4.jpg"
        },
    
        "batman_returns": {
            letterboxd_url: "https://boxd.it/2awa",
            my_rating: 9.5,
            my_tags: ["Disturbing", "Weird", "Conspiracy", "Neogothic", "Neogothic architecture", "Great soundtrack"],
            my_review: "",
            custom_poster_url: require('./content/batman_returns/custom_poster.png'),
        },
    
        "birdman": {
            letterboxd_url: "https://boxd.it/5RFA",
            "title_displayed": "Birdman",
            my_rating: 9.5,
            my_tags: ["One-take", "Inspiring", "Nightlife", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/umy673Pxug9rJRMoJM1TPHs62rZ.jpg"
        },
    
        "back_to_the_future": {
            letterboxd_url: "https://boxd.it/2b8e",
            my_rating: 10.0,
            my_tags: ["Uplifting", "Timey-wimey"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/ntLDP6LYTkxcUDVR0ud3aI0X4QH.jpg"
        },
    
        "battle_royale": {
            letterboxd_url: "https://boxd.it/25zS",
            my_rating: 8.0,
            my_tags: ["Social commentary", "Great character depth"],
            my_review: "",
            "gradual_interest": [6, 8, 9, 9, 9, 8, 8, 8, 8, 8, 7]
        },
        
        "black_sheep": {
            letterboxd_url: "https://boxd.it/257k",
            my_rating: 7.5,
            my_tags: ["Funny", "Gory", "Absurd", "Creature-feature"],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 8, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/pVpQHtGsGFGRxaq2Fh3LrA5QJiN.jpg"
        },
    
        "bunny_drop": {
            letterboxd_url: "https://boxd.it/3kf6",
            my_rating: 8.0,
            my_tags: [""],
            my_review: "",
            "gradual_interest": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/kt8HccnWkg464C6OawGamwNF2ZG.jpg"
        },
    
        "blame": {
            letterboxd_url: "https://boxd.it/eq1Q",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/7eoRQY7VUMawwBnuD6uwN4szc8k.jpg"
        },
    
        "before_sunrise": {
            letterboxd_url: "https://boxd.it/2bcU",
            my_rating: 9.0,
            my_tags: ["Soulmate"],
            my_review: "",
            "gradual_interest": [8, 8, 8, 8, 8, 9, 9, 9, 9, 9],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/aZ2Vkrc4RqIjewYbmfy74oDgZfX.jpg"
        },
    
        "buried": {
            letterboxd_url: "https://boxd.it/1tXC",
            my_rating: 7.5,
            my_tags: ["Claustrophobic"],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 8, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/splPNB0vAoNlb8l5WYxz2E3FK2G.jpg"
        },
    
        "big_fish_and_begonia": {
            letterboxd_url: "https://boxd.it/8bfm",
            "title_displayed": "Big Fish and Begonia",
            my_rating: 9.5,
            my_tags: ["Life", "Death", "Magic", "The afterlife", "Oceans", "Sealife", "Amazing cinematography", "Great soundtrack"],
            screenshots: screenshots.BIG_FISH_AND_BEGONIA,
            my_review: ReactDomServer.renderToString(BigFishAndBegoniaReview(screenshots.BIG_FISH_AND_BEGONIA)),
            "gradual_interest": [8, 9, 9, 9, 8, 7, 8, 9, 10, 9],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/tAmHBydreAbLn0gPXBHmbyEytNP.jpg"
        },
    },

    C: {
        "crank": {
            letterboxd_url: "https://boxd.it/27MY",
            my_rating: 8.0,
            my_tags: [
                "Insane",
                "Stimulating",
                "Amazing editing"
            ],
        },

        "crank_high_voltage": {
            letterboxd_url: "https://boxd.it/1MPs",
            my_rating: 8.5,
            my_tags: [
                "Insane",
                "Stimulating",
                "Amazing editing"
            ],
        },

        "children_of_the_sea": {
            letterboxd_url: "https://boxd.it/lwe6",
            my_rating: 10.0,
            custom_poster_url: "https://www.themoviedb.org/t/p/original/i91YrURnZPCKhpNyIxkAAzBb4t9.jpg",
            my_tags: [
                "The origins of life",
                "Astronomy", 
                "Cosmology", 
                "Spirituality", 
                "The mysteries of the ocean world", 
                "Exploring new perspectives", 
                "Audio-visual spectacle",
                "Great soundtrack",
            ],
            screenshots: screenshots.CHILDREN_OF_THE_SEA,
            my_review: ReactDomServer.renderToString(ChildrenOfTheSeaReview(screenshots.CHILDREN_OF_THE_SEA)),
            "gradual_interest": [8, 8, 8, 8, 8, 9, 9, 10, 10, 10, 10],
        },
    
        "confessions": {
            letterboxd_url: "https://boxd.it/uRS",
            my_rating: 8.5,
            my_tags: [
                "Audio-visual spectacle", 
                "Poetic",
                "Exploring the dark depths of humanity", 
                "Cognitive dissonance",
                "Confusing", 
                "Great soundtrack"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/wFP2iimW9gLrs3RAL1jhnPAq7ze.jpg"
        },
    
        "chicken_run": {
            letterboxd_url: "https://boxd.it/20Xg",
            my_rating: 8.0,
            my_tags: [
                "Fun",
                "Kids film",
                "Animal welfare",
                "Emotional",
                "Nostalgic"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/eyAux0xsqSaCthc1wY6mQjZjS4A.jpg"
        },
    
        "crawl": {
            letterboxd_url: "https://boxd.it/iwYi",
            my_rating: 7.5,
            my_tags: [
                "Total escapism",
                "Creature-feature",
                "One-location", 
                "Claustrophobic",
                "Hurricane setting",
                "Brutal", 
                "Not giving up despite being in a shitty situation"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/9kOtMOUa5HrOiIG2Z9Anv7M8AbY.jpg"
        },
    
        "cloud_atlas": {
            letterboxd_url: "https://boxd.it/2W60",
            my_rating: 8.0,
            my_tags: [
                "Very long"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/8naVv2Xu3rWI5JKHz0vCujx6GaJ.jpg"
        },
    
        "castaway_on_the_moon": {
            letterboxd_url: "https://boxd.it/1GXU",
            my_rating: 8.0,
            my_tags: [
                "Alone in the wilderness", 
                "Survival story",
                "Soulmate", 
                "Finding yourself",
                "Humanity and nature coexisting",
                "Quirky", 
                "Loneliness"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/cHwspwAQwZNCTOhcquvXoGop0SQ.jpg"
        },
    
        "creep": {
            letterboxd_url: "https://boxd.it/203C",
            my_rating: 8.0,
            my_tags: [
                "Disturbing",
                "Claustrophobic", 
                "Stuck underground", 
                "Gross",
                "London",
                "Homelessness",
                "Great soundtrack"
            ],
            my_review: ""
        },
    
        "cadaver": {
            letterboxd_url: "https://boxd.it/pSAG",
            my_rating: 8.0,
            my_tags: [
                "Atmospheric", 
                "Post-apocalypse society",
                "Conspiracy", 
                "Stuck underground",
                "Layered",
                "Mysterious", 
                "Loss of identity",
                "Cults"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/jbYvBVXbNW3eVZqKNB4FxMpSvci.jpg"
        },
    
        "carrie": {
            letterboxd_url: "https://boxd.it/20ZQ",
            my_rating: 8.5,
            my_tags: [
                "Bullying",
                "Satan",
                "Possession",
                "Telekenesis",
                "School setting"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/8tT1rqlsTguyfUBMrbHR9cv1rxM.jpg"
        },
    
        "coraline": {
            letterboxd_url: "https://boxd.it/1NhQ",
            my_rating: 8.5,
            my_tags: [
                "Creepy",
                "Terrifying",
                "Intricate animation style",
                "Colourful"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/4jeFXQYytChdZYE9JYO7Un87IlW.jpg"
        },
    
        "cloverfield": {
            letterboxd_url: "https://boxd.it/2192",
            my_rating: 8.5,
            my_tags: [
                "Found-footage",
                "Terrifying",
                "Wild",
                "Intense",
                "Aliens", 
                "End of the world"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/qIegUGJqyMMCRjkKV1s7A9MqdJ8.jpg"
        },
    
        "coco": {
            letterboxd_url: "https://boxd.it/bYJQ",
            my_rating: 9.0,
            my_tags: [
                "Emotional",
                "Total escapism",
                "The universal power of music",
                "Friendship",
                "Deeper than a kids film",
                "Great soundtrack"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/8AECsRLEDLoNvZ8JqrTFm0zBPqH.jpg"
        },
    
        "children_of_men": {
            letterboxd_url: "https://boxd.it/1Y2i",
            my_rating: 9.5,
            my_tags: [
                "Contemplative sci-fi",
                "Post-apocalypse society",
                "Near future technology"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/b9fZBbJQcITls88PpqsagAIBagM.jpg"
        },
    
        "contact": {
            letterboxd_url: "https://boxd.it/29OM",
            my_rating: 9.0,
            my_tags: [
                "Contemplative sci-fi",
                "Exploration beyond the solar system",
                "Alien technology",
                "Search for Extraterrestrial Intelligence (SETI)"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/wAhkO5iaVIkKBdpR9kvToHaNyKD.jpg"
        },
    
        "citadel": {
            letterboxd_url: "https://boxd.it/A3E",
            my_rating: 7.5,
            my_tags: [
                "Ireland",
                "Zombies",
                "Agoraphobia",
                "Disturbing",
                "Dark"
            ],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 7, 7, 8, 8, 8]
        },
    
        "climax": {
            letterboxd_url: "https://boxd.it/ikvo",
            my_rating: 8.0,
            my_tags: [],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.CLIMAX)),
            screenshots: screenshots.CLIMAX,
            "gradual_interest": [8, 8, 8, 7, 7, 6, 8, 9, 9]
        },
    
        "children_who_chase_lost_voices": {
            letterboxd_url: "https://boxd.it/2M6k",
            my_rating: 8.0,
            my_tags: [],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.CHILDREN_WHO_CHASE_LOST_VOICES)),
            screenshots: screenshots.CHILDREN_WHO_CHASE_LOST_VOICES,
            "gradual_interest": [7, 8, 8, 8, 8, 8, 8, 9, 8, 8, 9, 8]
        },
    
        "cashback": {
            letterboxd_url: "https://boxd.it/1Sf6",
            my_rating: 8.0,
            my_tags: [""],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.CASHBACK)),
            custom_poster_url: "https://www.themoviedb.org/t/p/original/nz28d5ZSUe0hJdvd69L7SsVJW0V.jpg",
            screenshots: screenshots.CASHBACK,
        },
    
        "carter": {
            letterboxd_url: "https://boxd.it/u7UO",
            my_rating: 8.0,
            my_tags: [""],
            my_review: "",
        },
    
        "convenience_story": {
            letterboxd_url: "https://boxd.it/BCig",
            my_rating: 7.5,
            my_tags: [""],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.CONVENIENCE_STORY)),
            screenshots: screenshots.CONVENIENCE_STORY,
        },
    
        "cub": {
            letterboxd_url: "https://boxd.it/8N9G",
            my_rating: 8.0,
            my_tags: [""],
            my_review: "",
            "gradual_interest": [8, 8, 8, 8, 8, 8, 8, 8, 8]
        },
    
        "cj7": {
            letterboxd_url: "https://boxd.it/1PCG",
            my_rating: 8.0,
            my_tags: [""],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.CJ7)),
            "gradual_interest": [7, 7, 8, 8, 8, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/v8xUyWtRrFmZ5iVEHI0pbQuxHD5.jpg",
            screenshots: screenshots.CJ7,
        },
    },

    D: {
        "detachment": {
            my_rating: 9.0,
            letterboxd_url: "https://boxd.it/2BiY",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/lw1wlekuMMKxmYg7v01vB7Snkq6.jpg",
            my_review: "",
            my_tags: [
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
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/1Iik",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
            my_tags: [
                "Total escapism", 
                "Intimate story within epic sci-fi plot", 
                "Aliens", 
                "Metamorphosis", 
                "Exploring the dark depths of humanity"
            ],
        },
    
        "doctor_sleep": {
            letterboxd_url: "https://boxd.it/i5vI",
            my_rating: 8.0,
            my_tags: [
                "Disturbing",
                "Atmospheric"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/p69QzIBbN06aTYqRRiCOY1emNBh.jpg"
        },
    
        "dead_set": {
            letterboxd_url: "https://boxd.it/5ppu",
            my_rating: 8.5,
            my_tags: [
                "Zombies",
                "Depressing",
                "Brutal",
                "Gory",
                "Social commentary",
                "Mini-series but it might as well be a long film"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/j6Ja8AyVxbeUgGAD3nGr1jV1nwX.jpg"
        },
    
        "devs": {
            letterboxd_url: "https://boxd.it/ppHI",
            my_rating: 8.5,
            my_tags: [
                "Contemplative sci-fi",
                "Conspiracy",
                "Quantum computing",
                "Religion",
                "Faith",
                "Randomness",
                "Determinism",
                "Harnessing the power of computers to do amazing things",
                "Great soundtrack",
                "Mini series but might as well be a long film"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/uv63iNWOh69bSJYJQZjiX6n8B3m.jpg"
        },
        
        "dont_worry_he_wont_get_far_on_foot": {
            letterboxd_url: "https://boxd.it/fLeo",
            my_rating: 8.0,
            my_tags: [
                "Death",
                "Stoicism"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/50hz3aCL2U2BPkxnv6JcMZ7g4eF.jpg"
        },
    
        "dogville": {
            letterboxd_url: "https://boxd.it/2a8W",
            my_rating: 7.5,
            my_tags: [
                "Innovative",
                "One-location",
                "Depressing",
                "Challenging to watch at times"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/liQwD1KipGNUdyFKOUs1wzISrAf.jpg"
        },
    
        "deep_sea": {
            letterboxd_url: "https://boxd.it/oRIs",
            my_rating: 8.5,
            my_tags: [
                "Insane visuals"
            ],
            screenshots: screenshots.DEEP_SEA,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.DEEP_SEA)),
            "gradual_interest": [8, 8, 8, 9, 8, 8, 9, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/qLj5JaXRRDsVjFtFYSaSpeyOQyz.jpg"
        },
    
        "dead_leaves": {
            letterboxd_url: "https://boxd.it/1L54",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/793WvrgqnX6Xvz7XNAXmKGLVfiC.jpg"
        },
    
        "diner": {
            letterboxd_url: "https://boxd.it/kOde",
            my_rating: 7.5,
            my_tags: [""],
            my_review: ""
        },
      
        "dave_made_a_maze": {
            letterboxd_url: "https://boxd.it/fof4",
            my_rating: 7.5,
            my_tags: [],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 7, 7, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/7Z5sEOC8Y7bdrg7FmIfNGkNniyX.jpg"
        },
    },

    E: {
        "elephant": {
            letterboxd_url: "https://boxd.it/287i",
            custom_poster_url: "https://image.tmdb.org/t/p/original/1a4VU9z2hxEvugHMK7VsobB9xTX.jpg",
            my_rating: 8.0,
            my_tags: [
            ],
            my_review: "",
        },

        "exte_hair_extensions": {
            letterboxd_url: "https://boxd.it/1Bn8",
            my_rating: 8.5,
            my_tags: [
                "Brutal",
                "Metamorphosis",
                "Fun",
                "Mad concept"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/qyHtXQchUu7DpeUNabDFIVnBRtq.jpg"
        },
    
        "eddie_the_eagle": {
            letterboxd_url: "https://boxd.it/amAY",
            my_rating: 10,
            my_tags: [
                "Inspiring",
                "Uplifting",
                "Proving people wrong",
                "Being the underdog",
                "Finding yourself",
                "Soulmate",
                "Friendship"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/80fwjYfHmeDXobIErpNvCFCOAYd.jpg"
        },
    
        "europa_report": {
            letterboxd_url: "https://boxd.it/5n0s",
            my_rating: 8.5,
            my_tags: [
                "Contemplative sci-fi",
                "Profound",
                "Amazing CGI",
                "Found footage",
                "Mokumentary",
                "Exploration of untouched places in the solar system that may harbour unique lifeforms"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/viT7XVaQNUIUCcByF8vnSaJA7BH.jpg"
        },
    
        "ex_machina": {
            letterboxd_url: "https://boxd.it/7T2k",
            my_rating: 9.5,
            my_tags: [
                "Contemplative sci-fi",
                "Artificial Intelligence", 
                "Revolution"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/2NXq2aopRfdxjVwM2wl9KE8cMSP.jpg"
        },
    
        "evil_dead": {
            letterboxd_url: "https://boxd.it/3GPq",
            my_rating: 8.5,
            my_tags: [
                "Brutal",
                "Gory",
                "Wild",
                "Satan",
                "Possession"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/gRBTMsnU8bXaPwrZ9ixfOZ98ONk.jpg"
        },
    
        "evil_dead_2": {
            letterboxd_url: "https://boxd.it/29Ge",
            my_rating: 8.5,
            my_tags: [
                "Brutal",
                "Gory",
                "Wild",
                "Satan",
                "Possession",
                "Timey-wimey"
            ],
            my_review: ""
        },
        
        "evil_dead_rise": {
            letterboxd_url: "https://boxd.it/qIvo",
            my_rating: 8.0,
            my_tags: [
                "Gory",
                "Chaotic",
                "Intense",
                "Creature-feature"
            ],
            my_review: "",
            "gradual_interest": [7, 7, 7, 8, 8, 8, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/cXlFYrSIiRf80KYneHw4FE71u4j.jpg"
        },
    },

    F: {
        "FLCL": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/bWtG",
            my_tags: [
                "Maximalist anime",
                "Wide variety of different art styles",
                "Chaotic",
                "Strange",
                "Weird",
                "Charming",
                "Overwhelming",
                "Full of dysfunctional perverted situations",
                "Quite long",
                "J-rock"
            ],
        },

        "funuke_show_me_some_love_you_losers": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/9Gu",
            custom_poster_url: "https://image.tmdb.org/t/p/original/nd6ftBtCWWkaHc1l5cG8BniTncl.jpg",
            screenshots: screenshots.FUNUKE_SHOW_SOME_LOVE_YOU_LOSERS,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.FUNUKE_SHOW_SOME_LOVE_YOU_LOSERS)),
            my_tags: [
                "Dark humour",
                "Nature",
            ],
        },

        "flatland": {
            my_rating: 10,
            letterboxd_url: "https://boxd.it/2sXo",
            screenshots: screenshots.FLATLAND,
            my_review: ReactDomServer.renderToString(FlatlandReview(screenshots.FLATLAND)),
            my_tags: [
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
            my_rating: 7.5,
            letterboxd_url: "https://boxd.it/1Xag",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/4wNJiD1c8lb5qyGYXAXY8JJaNLf.jpg",
            screenshots: screenshots.FEAST,
            my_review: ReactDomServer.renderToString(FeastReview(screenshots.FEAST)),
            my_tags: [
                "Creature-feature",
                "One-location",
                "Survival",
                "Fun",
                "Cool practical effects"
            ],
        },
    
        "finding_nemo": {
            letterboxd_url: "https://boxd.it/72i",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/ggQ6o8X5984OCh3kZi2UIJQJY5y.jpg",
            my_rating: 8.5,
            my_tags: [
                "Fun",
                "Nostalgic",
                "Kids film",
                "Friendship",
                "Family"
            ],
            my_review: ""
        },
    
        "face_off": {
            letterboxd_url: "https://boxd.it/29I0",
            my_rating: 8.0,
            my_tags: [
                "Total escapism",
                "Fun",
                "Mad concept",
                "Not giving up despite being in a shitty situation"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/69Xzn8UdPbVnmqSChKz2RTpoNfB.jpg"
        },
    
        "fantastic_mr_fox": {
            letterboxd_url: "https://boxd.it/1WyQ",
            my_rating: 8.5,
            my_tags: [
                "Intricate animation style",
                "Animal welfare",
                "Humanity and nature coexisting", 
                "Fun",
                "Friendship", 
                "Great soundtrack"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/euZyZb6iGreujYKrGyZHRddhUYh.jpg",
        },
    
        "fantastic_planet": {
            letterboxd_url: "https://boxd.it/1KnQ",
            my_rating: 8.5,
            my_tags: [
                "Surrealism", 
                "Quirky", 
                "Aliens", 
                "Future society"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/KQZ9gjmlzwS7lZMqGEC28pYoVs.jpg"
        },
    
        "frontiers": {
            letterboxd_url: "https://boxd.it/1Q3M",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/lX5XyaUQ4yXRY1knq5N8IKj6Ua4.jpg"
        },
    
        "flying_colours": {
            letterboxd_url: "https://boxd.it/bJVW",
            my_rating: 9.0,
            my_tags: [
                "Awakening",
                "Studying",
                "J-drama"
            ],
            my_review: "",
            "gradual_interest": [7, 8, 8, 9, 9, 10, 9, 9, 9, 8, 9, 9]
        },
    
        "fall": {
            letterboxd_url: "https://boxd.it/Bf6G",
            my_rating: 8.0,
            my_tags: [
                "Intense", 
                "Fear of heights",
                "Survival story", 
                "Not giving up despite being in a shitty situation"
            ],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8]
        },
    },

    G: {
        "good_will_hunting": {
            letterboxd_url: "https://boxd.it/2ahY",
            my_rating: 8.5,
            my_tags: [
                "Student teacher dichotomy", 
                "Poetic", 
                "Contemplative", 
                "Learning"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/yK7xOCXGsrk0B26wCMNitRYzyDg.jpg"
        },
    
        "gremlins": {
            letterboxd_url: "https://boxd.it/29gg",
            my_rating: 9.0,
            my_tags: [
                "Fun", 
                "Gross", 
                "Creature-feature", 
                "Causing havoc in a fairly normal town"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/gDSfs0hqAQVJ9jIHbX3AJ3StTVG.jpg"
        },
    
        "get_out": {
            letterboxd_url: "https://boxd.it/eOCm",
            my_rating: 10,
            my_tags: [
                "Psychlogical thriller", 
                "Social commentary", 
                "Terrifying"
            ],
            my_review: ""
        },
    
        "guns_akimbo": {
            letterboxd_url: "https://boxd.it/gkFu",
            my_rating: 8.0,
            my_tags: [
                "Intense", 
                "Action genre done right", 
                "Dystopian game"
            ],
            my_review: "",
            "gradual_interest": [7, 7, 8, 8, 8, 8, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/vV23MzddmlZJ6TIXpmRUyGV9961.jpg"
        },
    
        "greener_grass": {
            letterboxd_url: "https://boxd.it/jYoY",
            my_rating: 8.0,
            my_tags: [""],
            my_review: "",
            "gradual_interest": [8, 8, 7, 7, 8, 8, 7, 8, 9, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/qu7uH9cU3eEaACAtR1CUt0HKnS5.jpg"
        },
    
        "get_duked": {
            letterboxd_url: "https://boxd.it/llgK",
            my_rating: 8.0,
            my_tags: [""],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.GET_DUKED)),
            screenshots: screenshots.GET_DUKED,
        },
    },

    H: {
        "how_to_talk_to_girls_at_parties": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/bo80",
            custom_poster_url: "https://image.tmdb.org/t/p/original/6ptptArgBGPVQsbrIGtuGthuMDq.jpg",
            screenshots: screenshots.HOW_TO_TALK_TO_GIRLS_AT_PARTIES,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.HOW_TO_TALK_TO_GIRLS_AT_PARTIES)),
            my_tags: [
                "Weird",
                "Quirky",
                "Punk rock",
                "Authentic",
                "Peaceful aliens",
            ],
        },

        "house_of_flying_daggers": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/1YoI",
            custom_poster_url: "https://image.tmdb.org/t/p/original/aYBlboYCUeC62UiGEnF3OZVwNtW.jpg",
            screenshots: screenshots.HOUSE_OF_FLYING_DAGGERS,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.HOUSE_OF_FLYING_DAGGERS)),
            my_tags: [
                "Embrace mother nature", 
                "China", 
                "9th century China",
                "Martial arts",
                "Great soundtrack",
            ],
        },

        "human_space_time_and_human": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/gpDy",
            custom_poster_url: "https://image.tmdb.org/t/p/original/iV7V0Hwjiz5dzHteGWSEXBmPRkc.jpg",
            screenshots: screenshots.HUMAN_SPACE_TIME_AND_HUMAN,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.HUMAN_SPACE_TIME_AND_HUMAN)),
            my_tags: [
                "Allegory for humanity", 
                "Obsession for power", 
                "God",
                "Religion",
                "Symbolism",
                "Allegory for biblical story of Adam & Eve",
            ],
        },

        "hatching": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/iKDo",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/aJBeIOneNaNP779rYQ3uPJCIOLA.jpg",
            my_tags: [
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
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/1W68",
            my_review: "",
            my_tags: [
                "A slice of life", 
                "Finding happiness", 
                "Friendship", 
                "Finding yourself", 
                "Stoicism", 
                "Great soundtrack"
            ],
        },
    
        "hacksaw_ridge": {
            letterboxd_url: "https://boxd.it/azew",
            my_rating: 8.0,
            my_tags: [
                "War", 
                "Finding positives out of negatives", 
                "Not giving up despite being in a shitty situation", 
                "Inspiring", 
                "Brutal"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/jhWbYeUNOA5zAb6ufK6pXQFXqTX.jpg"
        },
    
        "hot_fuzz": {
            letterboxd_url: "https://boxd.it/2416",
            my_rating: 9.5,
            my_tags: [
                "Murder mystery", 
                "British humour", 
                "Funny"
            ],
            my_review: ""
        },
    
        "hereditary": {
            letterboxd_url: "https://boxd.it/hNVe",
            my_rating: 8.0,
            my_tags: [
                "Terrifying", 
                "Gross", 
                "Family", 
                "Betrayl", 
                "Possession"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg"
        },
    
        "her": {
            letterboxd_url: "https://boxd.it/4O24",
            my_rating: 10.0,
            my_tags: [
                "Lonleiness", 
                "Artificial Intelligence",
                "Soulmate", 
                "Melancholic", 
                "Emotional", 
                "Great soundtrack"
            ],
            my_review: "",
            custom_poster_url: "https://alternativemovieposters.com/wp-content/uploads/2021/07/GarbhanGrant_Her.jpg"
        },
    
        "helter_skelter": {
            letterboxd_url: "https://boxd.it/3ybW",
            my_rating: 8.0,
            my_tags: [
                "Challenging to watch at times", 
                "Audio-visual spectacle", 
                "Addiction", 
                "Isolation", 
                "Fake celebrity personas", 
                "Terrifying"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/rctha2z3lZ5YTCo4IE3cUJT4q2D.jpg"
        },
    
        "howls_moving_castle": {
            letterboxd_url: "https://boxd.it/23De",
            my_rating: 8.0,
            my_tags: [
                "War", 
                "Magic", 
                "Studio Ghibli"
            ],
            my_review: "",
            "gradual_interest": [8, 8, 8, 8, 9, 9, 8, 8, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/6eFP0Es081OtWQu5nvvjg99ZIiq.jpg"
        },
    
        "himizu": {
            letterboxd_url: "https://boxd.it/3oFs",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/8qDMK0MMSH7rMMrFZP0zgmz64kf.jpg"
        },
    
        "hells": {
            letterboxd_url: "https://boxd.it/4e8q",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
        },
    
        "hellbender": {
            letterboxd_url: "https://boxd.it/w1Im",
            my_rating: 8.0,
            my_tags: [
                "Satanic rituals"
            ],
            my_review: "",
            "gradual_interest": [8, 8, 8, 8, 8, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/rDw9qBKd7xCkhan5IHqlZIrhZK3.jpg"
        },
    },

    I: {
        "island_etude": {
            letterboxd_url: "https://boxd.it/42L6",
            my_rating: 8.0,
            my_tags: [
                "Taiwan", 
                "Cycling", 
                "Travelling", 
                "Seeking purpose in your life",
                "Humble character",
                "Poignant",
                "Quiet",
                "Reference to Jonathan Livingston Seagull"
            ],
            custom_poster_url: "https://image.tmdb.org/t/p/original/3zZjPtQaxBFMksf1XKKOALRbQGS.jpg"
        },

        "in_the_mouth_of_madness": {
            letterboxd_url: "https://boxd.it/26vi",
            my_rating: 8.5,
            my_tags: [
                "Lovecraftian horror", 
                "Creature-feature", 
                "Questioning reality", 
                "Hallucinations", 
                "Cults"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/bNh5iySaJ15tvLjGrYsw1JNhx8l.jpg"
        },
    
        "isle_of_dogs": {
            letterboxd_url: "https://boxd.it/dZrW",
            my_rating: 9.0,
            my_tags: [
                "Intricate animation style", 
                "Great cinematography", 
                "Animal welfare", 
                "Humanity and nature coexisting", 
                "Fun", 
                "Friendship", 
                "Great soundtrack"
            ],
            my_review: "",
            custom_poster_url:  "https://www.themoviedb.org/t/p/original/rSluCePdXXtNiQeE6Na5yRGamhL.jpg"
        },
    
        "im_thinking_of_ending_things": {
            letterboxd_url: "https://boxd.it/i4IQ",
            my_rating: 8.0,
            my_tags: [
                "Atmospheric", 
                "Confusing", 
                "Weird", 
                "Snow", 
                "Intimate", 
                "Lonely", 
                "Creepy"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/iCEeZ9Lkzx5Pw72BoSpbystzTpV.jpg"
        },
    
        "insidious": {
            letterboxd_url: "https://boxd.it/H4k",
            my_rating: 9.0,
            my_tags: [
                "Disturbing",
                "Terrifying", 
                "Possession"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/tmlDFIUpGRKiuWm9Ixc6CYDk4y0.jpg"
        },
    
        "inside_out": {
            letterboxd_url: "https://boxd.it/4KHC",
            my_rating: 9.0,
            my_tags: [
                "Emotional", 
                "Friendship", 
                "Anger", 
                "Clever analogy for real life feelinsg", 
                "Layered", 
                "Deeper than a kids film",
                "Great soundtrack"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg"
        },
    
        "its_a_wonderful_life": {
            letterboxd_url: "https://boxd.it/28xA",
            my_rating: 9.0,
            my_tags: [
                "Family", 
                "Death", 
                "Beyond existence"
            ],
            my_review: ""
        },
    
        "interstellar": {
            letterboxd_url: "https://boxd.it/4VZ8",
            my_rating: 9.0,
            my_tags: [
                "Space exploration", 
                "Timey-wimey"
            ],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/fX44bgxKQsS4P4ewb2iotHveEkn.jpg"
        },
    
        "infinity_pool": {
            letterboxd_url: "https://boxd.it/oPSK",
            my_rating: 8.5,
            my_tags: [
                "Rebirth", 
                "Hallucinogenic", 
                "Psychedlic", 
                "Vicious", 
                "Disgusting", 
                "Phantasmagoria", 
                "Insecurity", 
                "Ego", 
                "Atmospheric", 
                "Constantly surprising", 
                "Defamiliarization", 
                "Hedonistic", 
                "Libertine"
            ],
            my_review: "",
            "gradual_interest": [8, 8, 8, 8, 8, 8, 9, 8, 8, 8, 9, 9],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/5DNRr2juXdwtvktwXxwuk9Usk8O.jpg"
        },
    
        "in_fabric": {
            letterboxd_url: "https://boxd.it/h2sY",
            my_rating: 8.5,
            my_tags: [
                "Atmospheric", 
                "Ghosts", 
                "Creepy", 
                "Melancholic",
                "British humour", 
                "Synthwave", 
                "Great soundtrack"
            ],
            my_review: "",
            "gradual_interest": [8, 8, 9, 9, 8, 8, 8, 7, 7, 7, 7, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/y9QjwDLV5SAtRxYF5h1gRsDFaLd.jpg"
        },
    
        "in_the_tall_grass": {
            letterboxd_url: "https://boxd.it/iZpm",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/1RxhzwFkAUqMt215Brb06u8P8pn.jpg"
        },
    
        "incredible_but_true": {
            letterboxd_url: "https://boxd.it/rBtC",
            my_rating: 8.0,
            my_tags: [""],
            screenshots: screenshots.INCREDIBLE_BUT_TRUE,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.INCREDIBLE_BUT_TRUE)),
        },
    
        "it_comes_at_night": {
            letterboxd_url: "https://boxd.it/eLuk",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            "gradual_interest": [7, 7, 7, 8, 8, 9, 8, 8, 8, 4]
        },
    
        "incident_in_a_ghostland": {
            letterboxd_url: "https://boxd.it/h5Uw",
            my_rating: 8.5,
            my_tags: [
                "Disturbing", 
                "Harrowing", 
                "Challenging to watch at times", 
                "Intense",
                "Bleak", 
                "Non-linear timeline"
            ],
            my_review: "",
            "gradual_interest": [7, 8, 8, 8, 8, 8, 9, 9, 9]
        },
    },

    J: {
        "jungle": {
            letterboxd_url: "https://boxd.it/dCpo",
            my_rating: 8.0,
            my_tags: ["Embrace mother nature", "Alone in the wilderness", "South American culture", "Jungle setting", "Not giving up despite being in a shitty situation", "Brutal", "Hallucinations"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/tDgxknTVwrScxpCYyGUjXSn5NRk.jpg"
        },
    
        "jojo_rabbit": {
            letterboxd_url: "https://boxd.it/iEBG",
            my_rating: 9.5,
            my_tags: ["War", "Emotional", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/yfT4bdrKKUZAjWD9Zii45nEN668.jpg"
        },
    
        "jin_roh_the_wolf_brigade": {
            letterboxd_url: "https://boxd.it/29wS",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/yO7Ev1VFqMHcwd6GJl4mjmoCyJd.jpg"
        },
    },

    K: {
        "kids_return": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/1sfY",
            screenshots: screenshots.KIDS_RETURN,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.KIDS_RETURN)),
            custom_poster_url: "https://image.tmdb.org/t/p/original/1QvBEEurqbRsldD7ScsAUMywU4Q.jpg",
            my_tags: [
                "Relaxing",
                "Running",
                "Amazing soundtrack",
                "Joe Hisaishi soundtrack"
            ],
        },

        "kikis_delivery_service": {
            my_rating: 8.5,
            letterboxd_url: "https://boxd.it/1JAY",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/rlNKTz07MtYlIJY6zKaQedRN8HF.jpg",
            my_tags: [
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
            letterboxd_url: "https://boxd.it/u7LW",
            my_rating: 8.0,
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/im91Ho4WkhVroehZJiIUoOF6UIl.jpg",
            my_tags: [
                "Covid setting",
                "Conspiracy", 
                "Mysterious", 
                "Isolation", 
                "Great soundtrack"
            ],
        },
    
        "kpax": {
            letterboxd_url: "https://boxd.it/2aYo",
            my_rating: 8.0,
            my_tags: ["Melancholic", "Mysterious", "Alien visitor disguised as human", "Search for Extraterrestrial Intelligence (SETI)", "Quirky", "Mental hospital"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/vJqhlC6QNXFxFhJ02kg1CFtcaa.jpg"
        },
    },

    L: {
        "landscape_with_invsible_hand": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/tesq",
            screenshots: screenshots.LANDSCAPE_WITH_INVISIBLE_HAND,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.LANDSCAPE_WITH_INVISIBLE_HAND)),
            custom_poster_url: "https://image.tmdb.org/t/p/original/cnXvfZrj1azU5Rvbb8D7Fz0wkyt.jpg",
            my_tags: [
                "Art",
                "Reflection on humanity",
                "Enduring hardship",
                "Quirky",
                "Analogy for social media and influencers",
                "Money hungry capitalists who are incapable of love and profit off destroying human expression"
            ],
        },

        "like_father_like_son": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/5rQs",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/cc8LgROz7cBi8WrAUJSWj72GtE8.jpg",
            screenshots: screenshots.LIKE_FATHER_LIKE_SON,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.LIKE_FATHER_LIKE_SON)),
            my_tags: [
                "Emotional",
                "Touching family drama",
                "Quiet",
                "Enduring hardship"
            ],
        },

        "little_shop_of_horrors": {
            my_rating: 9.0,
            letterboxd_url: "https://boxd.it/1Vqm",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/iKkbN17OmFosaW6asCNZTTsyvpu.jpg",
            screenshots: screenshots.LITTLE_SHOP_OF_HORRORS,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.LITTLE_SHOP_OF_HORRORS)),
            my_tags: [
                
            ],
        },

        "leon_the_professional": {
            my_rating: 8.0,
            "title_displayed": "Léon: The Professional",
            letterboxd_url: "https://boxd.it/2b8S",
            screenshots: screenshots.LEON_THE_PROFESSIONAL,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.LEON_THE_PROFESSIONAL)),
            custom_poster_url: "https://www.themoviedb.org/t/p/original/yI6X2cCM5YPJtxMhUd3dPGqDAhw.jpg",
            my_tags: [
                "Inticing",
                "Gritty",
                "Unorthodox",
                "Explosions",
            ],
        },

        "life_is_beautiful": {
            my_rating: 10,
            letterboxd_url: "https://boxd.it/29Wm",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/3XWYY0byr0kSW6aK5eJ9FHPI2AN.jpg",
            my_tags: [
                "Emotional", 
                "Finding happiness", 
                "Turning negatives into positives", 
                "Family", 
                "War"
            ],
        },
    
        "love_exposure": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/1pDe",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/83i9Q1WmWcogcPGv501D26BoEyT.jpg",
            my_tags: [
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
            letterboxd_url: "https://boxd.it/a5fa",
            my_rating: 8.5,
            my_tags: ["Uplifting", "Finding yourself", "Friendship", "Great soundtrack"],
            my_review: ""
        },
    
        "lion": {
            letterboxd_url: "https://boxd.it/b2La",
            my_rating: 9.5,
            my_tags: ["Poverty", "Family", "Emotional"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/mcbFRezI77mJveOVzKvpPaF8nzK.jpg"
        },
    
        "life_of_pi": {
            letterboxd_url: "https://boxd.it/37pC",
            my_rating: 10.0,
            my_tags: ["Exploring new places", "Survival story", "Based on a true story", "Stranded at sea"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/7E5xQtLFmN6r2jLsSbWQL2cfnS6.jpg"
        },
    
        "last_and_first_men": {
            letterboxd_url: "https://boxd.it/kKi0",
            my_rating: 8.0,
            my_tags: ["Exploring unknown territory"],
            my_review: "",
            "gradual_interest": [8, 8, 8, 8, 8, 9, 8]
        },
    
        "last_life_in_the_universe": {
            letterboxd_url: "https://boxd.it/1Tri",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/dOdGczlrw5e1p5SrywEt1v0H5qp.jpg"
        },
    
        "lupin_the_third_the_castle_of_cagliostro": {
            letterboxd_url: "https://boxd.it/1Mn4",
            my_rating: 7.5,
            my_tags: [""],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.LUPIN_THE_THIRD)),
            screenshots: screenshots.LUPIN_THE_THIRD,
        },
    
        "limbo": {
            letterboxd_url: "https://boxd.it/lLRW",
            my_rating: 8.0,
            my_tags: [],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.LIMBO)),
            screenshots: screenshots.LIMBO,
            "gradual_interest": [7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9],
            custom_poster_url: "https://image.tmdb.org/t/p/original/6ctJRG33gvj5MqtUEU34HQMHJUp.jpg"
        },
    
        "leave_no_trace": {
            letterboxd_url: "https://boxd.it/fMfM",
            my_rating: 7.5,
            my_tags: ["Nature", "Discovering indepdence"],
            my_review: "",
            "gradual_interest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/sygnLx3sZV5P8M2dyaGRegHdEL1.jpg"
        },
        
        "last_sunrise": {
            letterboxd_url: "https://boxd.it/lvxQ",
            my_rating: 9.0,
            my_tags: ["Astronomy", "Night skies", "End of the world", "Contemplative sci-fi", "Not giving up despite being in a shitty situation"],
            my_review: "",
            "gradual_interest": [7, 7, 8, 8, 8, 7, 8, 9, 9, 9],
            custom_poster_url: require('./content/last_sunrise/custom_poster.jpg')
        },
    },

    M: {
        "memories_of_matsuko": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/1iVU",
            my_review: "",
            custom_poster_url: "https://image.tmdb.org/t/p/original/5jDuEBUbeDva1VFZ0dlgLwY5XgK.jpg",
            my_tags: [
                "Sad",
                "Uplifting",
                "Great soundtrack",
            ],
        },

        "my_tommorow_your_yesterday": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/fajw",
            my_review: "",
            custom_poster_url: "https://image.tmdb.org/t/p/original/d08esTPg1N7xEn86wf5GD4yfkLI.jpg",
            my_tags: [
                "Intriguing",
                "Sad",
                "Calm",
                "Mellow",
            ],
        },

        "mind_game": {
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/1Bv2",
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.MIND_GAME)),
            screenshots: screenshots.MIND_GAME,
            custom_poster_url: "https://image.tmdb.org/t/p/original/f8CbqeFILuSOFC6KgtufdJZTw4j.jpg",
            my_tags: [
                "Intense", 
                "Polarising", 
                "Bizzare", 
                "Surreal", 
                "Weird", 
                "Uplifting",
            ],
        },

        "mother!": {
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/dgRU",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/2yOKarmL8B4oXaLXUdHu882SUbu.jpg",
            my_tags: [
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
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/1k44",
            my_review: "",
            my_tags: [
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
            letterboxd_url: "https://boxd.it/gvme",
            my_rating: 8.0,
            my_tags: ["Intricate animation style", "South American culture", "Mad concept", "Superheros", "Great cinematography", "Great soundtrack"],
            my_review: ""
        },
    
        "martyrs": {
            letterboxd_url: "https://boxd.it/1Yqu",
            my_rating: 8.0,
            my_tags: ["Challenging to watch at times", "Brutal", "Claustrophobic", "Exploring the dark depths of humanity", "Very long", "Disturbing", "Not one to watch with the family"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/2PmVlnPVG8tGXqC85YiHzL0jX40.jpg"
        },
    
        "memento": {
            letterboxd_url: "https://boxd.it/2bcK",
            my_rating: 8.0,
            my_tags: ["Non-linear timeline", "Confusing"],
            my_review: ""
        },
    
        "monsters": {
            letterboxd_url: "https://boxd.it/Tdy",
            my_rating: 8.0,
            my_tags: ["Atmospheric", "Melancholic", "Aliens", "Soulmate", "Travelling", "Alone in the wilderness", "Virus", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/lH6oWfGjwnM81Nzu8vipx9OfPmv.jpg"
        },
    
        "marcel_the_shell_with_shoes_on": {
            letterboxd_url: "https://boxd.it/wMAk",
            my_rating: 8.0,
            my_tags: ["Quirky", "Endearing", "Poetic", "Mokumentary", "Fun", "Friendship", "Finding your people", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/jaYmP4Ct8YLnxWAW2oYkUjeXtzm.jpg"
        },
    
        "midnight_in_paris": {
            letterboxd_url: "https://boxd.it/i4a",
            my_rating: 8.5,
            my_tags: ["Mad concept", "Nightlife", "Exploration of a new place", "Soulmate", "Friendship", "Great soundtrack"],
            my_review: ""
        },
    
        "mulholland_drive": {
            letterboxd_url: "https://boxd.it/297o",
            my_rating: 8.5,
            my_tags: ["Questioning reality", "Atmospheric", "Mysterious", "A story within a story", "Anti-Hollywood"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/aO5xuvfujX3cFg9evUVZuJlroEW.jpg"
        },
    
        "my_neighbour_totoro": {
            letterboxd_url: "https://boxd.it/20eA",
            my_rating: 9.0,
            my_tags: ["Embrace mother nature", "Endearing", "Humanity and nature coexisting", "Nature thriving", "Colourful", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/ykeaF3Ldz1Kf6sfnOJJH4dW56F4.jpg"
        },
    
        "malignant": {
            letterboxd_url: "https://boxd.it/mViE",
            my_rating: 9.0,
            my_tags: ["Wild", "Great cinematography", "Murder mystery", "Amazing finale"],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.MALIGNANT)),
            custom_poster_url: "https://www.themoviedb.org/t/p/original/mwl0Vk9DzyN68986ALKhC7xBe24.jpg",
            screenshots: screenshots.MALIGNANT,
        },
    
        "moonrise_kingdom": {
            letterboxd_url: "https://boxd.it/2Wng",
            my_rating: 9.0,
            my_tags: ["Quirky", "Great cinematography", "Friendship", "Great chemistry between characters"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/xrziXRHRQ7c7YLIehgSJY8GQBsx.jpg"
        },
    
        "my_life_as_a_courgette": {
            letterboxd_url: "https://boxd.it/dL2y",
            "title_displayed": "My Life as a Courgette",
            my_rating: 8.5,
            my_tags: ["Stop motion animation", "Uplifting", "Finding happiness", "Friendship", "Emotional", "Endearing", "Soulmate", "Bad parenting"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/g91phMUr77Vw6uRmpIjH1hvZpov.jpg"
        },
    
        "man_on_fire": {
            letterboxd_url: "https://boxd.it/1Yvk",
            my_rating: 8.0,
            my_tags: [""],
            my_review: "",
        },
    
        "meander": {
            letterboxd_url: "https://boxd.it/j1Ac",
            my_rating: 7.5,
            my_tags: [
                "Claustrophobic",
                "Colourful",
                "Mysterious",
            ],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.MEANDER)),
            custom_poster_url: "https://www.themoviedb.org/t/p/original/gDNHgbbDgLcl67Q0Ges9R3qvwUU.jpg",
            "gradual_interest": [7, 6, 4, 4, 4, 4, 6, 9, 9],
            screenshots: screenshots.MEANDER,
        },
    
        "mr_jones": {
            letterboxd_url: "https://boxd.it/5mUO",
            my_rating: 8.0,
            my_tags: [""],
            screenshots: screenshots.MR_JONES,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.MR_JONES)),
        },
    
        "mary_and_the_witches_flower": {
            letterboxd_url: "https://boxd.it/ffTY",
            my_rating: 7.5,
            my_tags: ["Magic", "Positive reflection on witches"],
            my_review: "",
            "gradual_interest": [7, 7, 8, 8, 8, 8, 7, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/hQ1mUz3Vi15Qr3dGWlvqGmiFPCL.jpg"
        },
    
        "monsters_inc": {
            letterboxd_url: "https://boxd.it/2a46",
            my_rating: 10.0,
            my_tags: ["Mad concept", "Emotional", "Nostalgic", "Endearing"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/3LATljiJu54I2YWA6ZKzvtkxihw.jpg"
        },
    
        "miss_zombie": {
            letterboxd_url: "https://boxd.it/6zhs",
            my_rating: 8.0,
            my_tags: ["Social commentary", "Zombies", "Black & white"],
            my_review: "",
            "gradual_interest": [6, 5, 5, 6, 7, 8, 8, 9, 9],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/rcQRzkQrlAtQ6Dz35b4teGGlBpC.jpg"
        },
    
        "meet_cute": {
            letterboxd_url: "https://boxd.it/vOri",
            my_rating: 8.0,
            my_tags: ["Time travel", "Soulmate", "Loneliness", "Self-inflicted time loop", "Exploring the inner mechanism of the female mind"],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.MEET_CUTE)),
            screenshots: screenshots.MEET_CUTE,
            "gradual_interest": [8, 8, 8, 9, 8, 8, 8, 8, 8]
        },
    },
    
    N: {
        "not_one_less": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/1b58",
            my_tags: [
                "Rural China",
                "Uplifting",
                "Perspective enhancing",
                "Natural/authentic/raw filmmaking style",
            ],
            "gradual_interest": [8, 8, 7, 6, 6, 6, 6, 6, 7, 8, 8],
            custom_poster_url: "https://image.tmdb.org/t/p/original/7m3OXTCJQprqVRYx2HjMH7lYJty.jpg",
        },

        "nasu_a_migratory_bird_with_suitcase": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/bfA",
            custom_poster_url: "https://image.tmdb.org/t/p/original/hgICwiZsL8IEfl0BmJHRjNNTKZ1.jpg",
            my_tags: [
                "Cycling",
                "Anime",
                "Uplifting",
            ],
        },

        "nausicaa_of_the_valley_of_the_wind": {
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/2bc6",
            "title_displayed": "Nausica\u00e4 of the Valley of the Wind",
            my_review: "",
            custom_poster_url: require('./content/nausicaa/custom_poster.png'),
            my_tags: [
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
            letterboxd_url: "https://boxd.it/bkFu",
            my_rating: 8.0,
            my_tags: ["Atmospheric", "Mysterious", "Murder mystery", "Confusing", "Non-linear timeline", "Story within a story", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/6zTRty2REwxljziiWyrRbgOwAo7.jpg"
        },
    
        "notes_on_blindness": {
            letterboxd_url: "https://boxd.it/d9YE",
            my_rating: 9.0,
            my_tags: ["Poetic", "Contemplative", "Based on true events", "Turning negatives into positives", "Not giving up despite being in a shitty situation"],
            my_review: "",
            custom_poster_url: require('./content/notes_on_blindness/custom_poster.jpg'),
        },
    
        "no_one_gets_out_alive": {
            letterboxd_url: "https://boxd.it/rOay",
            my_rating: 8.0,
            my_tags: ["Satanic rituals", "Ancient Mayan murals", "Atmospheric", "Character moves into cheap apartment but there's dodgy stuff going on"],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 7, 8, 8, 8]
        },
    },

    O: {
        "one_million_yen_girl": {
            letterboxd_url: "https://boxd.it/2h5K",
            my_rating: 8.0,
            my_tags: [""],
            my_review: "",
        },
    
        "oblivion_island": {
            letterboxd_url: "https://boxd.it/13qs",
            my_rating: 9.0,
            custom_poster_url: "https://www.themoviedb.org/t/p/original/ml8M4MCwHJudF4zbd0KF1SZ6lYr.jpg",
            screenshots: screenshots.OBLIVION_ISLAND,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.OBLIVION_ISLAND)),
            my_tags: [
                "Insane visuals"
            ],
        },
    
        "okja": {
            letterboxd_url: "https://boxd.it/dvXe",
            my_rating: 7.5,
            my_tags: ["Animal welfare", "Ends a bit weak but the rest is great", "Conspiracy"],
            my_review: ""
        },
    
        "oculus": {
            letterboxd_url: "https://boxd.it/4W9M",
            my_rating: 8.0,
            my_tags: ["Disturbing", "Questioning reality", "Non-linear timeline"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/3J25Xmt3zN9OpsTD5dLNwz7IirD.jpg"
        },
    },

    P: {
        "poor_things": {
            letterboxd_url: "https://boxd.it/tNWU",
            custom_poster_url: "https://image.tmdb.org/t/p/original/jG4o67eZKlvuL5R6WTysRkPwE75.jpg",
            my_rating: 8.0,
            screenshots: screenshots.POOR_THINGS,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.POOR_THINGS)),
            my_tags: [
                "Weird",
                "Quirky",
                "Great combination of CGI and real life",
            ],
        },

        "perfect": {
            letterboxd_url: "https://boxd.it/gyPS",
            custom_poster_url: "https://image.tmdb.org/t/p/original/mbYqNA0m3JUAvkzlMvmLVRziZss.jpg",
            screenshots: screenshots.PERFECT,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.PERFECT)),
            my_rating: 9.5,
            my_tags: [
                "Mesmerising",
                "Audio-visual experience",
                "Mysterious",
                "Questioning reality",
            ],
        },

        "patlabor_2": {
            letterboxd_url: "https://boxd.it/1NP4",
            my_rating: 7.5,
            my_tags: ["Melancholic", "Just war vs Unjust war", "Philosophical", "Amazing soundtrack"],
            my_review: "",
            custom_poster_url: "https://image.tmdb.org/t/p/original/vIyWhMyMEHnavjUhbusOXDwrJgz.jpg"
        },

        "parasite": {
            letterboxd_url: "https://boxd.it/hTha",
            my_rating: 9.5,
            my_tags: ["Claustrophobic", "Psychlogical thriller", "Quirky"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
        },
    
        "princess_mononoke": {
            letterboxd_url: "https://boxd.it/2b4w",
            my_rating: 8.0,
            my_tags: ["Embrace mother nature", "Humanity and nature coexisting", "War", "Corruption", "Evil people in power", "Anime", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/cDuKyP0SqubYo7hTVMN5wihjjJG.jpg"
        },
    
        "poupelle_of_chimmney_town": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/on14",
            my_tags: [
                "Heterodox thinker", 
                "Religion", 
                "Friendship", 
                "Intricate animation style",
                "Steampunk", 
                "Colourful", 
                "Exploring new places",
            ],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/z0W6hrjGd9NrY4eQypaNDGlLkN9.jpg",
            "gradual_interest": [8, 8, 8, 8, 7, 7, 7, 8, 9, 9],
            screenshots: screenshots.POUPELLE_OF_CHIMMNEY_TOWN,
            my_review: ReactDomServer.renderToString(PoupelleOfChimmneyTownReview(screenshots.POUPELLE_OF_CHIMMNEY_TOWN)),
        },

        "pulse": {
            letterboxd_url: "https://boxd.it/1Y44",
            my_rating: 8.0,
            my_tags: [""],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.PULSE)),
            custom_poster_url: "https://www.themoviedb.org/t/p/original/tmcSKby8AARIFCGFJRqcHAcaYRt.jpg",
            screenshots: screenshots.PULSE,
        },
    
        "porco_rosso": {
            letterboxd_url: "https://boxd.it/1Tp2",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/c5RDchTXih0OFEoYE25uVORvprq.jpg"
        },
    
        "portals": {
            letterboxd_url: "https://boxd.it/nBnG",
            my_rating: 8.0,
            my_tags: [""],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.PORTALS)),
            screenshots: screenshots.PORTALS,
        },
    
        "ponyo": {
            letterboxd_url: "https://boxd.it/1S0A",
            my_rating: 9.5,
            my_tags: ["Feverdreamy", "Majestic", "Viewing the world through the mind of a child", "Sealife merging with humanity", "Great soundtrack"],
            my_review: "",
            "gradual_interest": [8, 8, 8, 8, 8, 8, 9, 9, 9, 10],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/kP27eFa63Y8bdUTd5YGwqxYUXCU.jpg"
        },
    
        "primer": {
            letterboxd_url: "https://boxd.it/6YA",
            my_rating: 8.0,
            my_tags: ["Timey-wimey"],
            my_review: "",
            "gradual_interest": [8, 8, 8, 8, 8, 8, 8, 8]
        },
    
        "paco_and_the_magical_book": {
            letterboxd_url: "https://boxd.it/2dD4",
            my_rating: 8.0,
            my_tags: [],
            my_review: "",
            "gradual_interest": [6, 6, 7, 7, 7, 8, 8, 9, 9, 9, 9]
        },
    
        "pleasantville": {
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/26uY",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/sjnRihb0OdmtD5GBe5lfdfBjSxo.jpg",
            my_tags: [
                "Creative use of colour", 
                "Virtual world", 
                "Celebration of art", 
                "Finding happiness", 
                "Revolution", 
                "Fuck the system"
            ],
        },
    
        "pontypool": {
            letterboxd_url: "https://boxd.it/1yBw",
            my_rating: 8.0,
            my_tags: ["Atmospheric", "Mysterious", "Zombies", "Virus", "Radio station", "Starts bad but gets a lot better"],
            my_review: ""
        },
    
        "possession": {
            letterboxd_url: "https://boxd.it/1BPm",
            my_rating: 8.0,
            my_tags: ["Possession", "Disturbing", "Depressing", "Gross", "Challenging to watch at times"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/sz6IXLRJu58EBRpUuRFKxo4d6lf.jpg"
        },
        
        "phenomenon": {
            letterboxd_url: "https://boxd.it/1Z2I",
            my_rating: 8.5,
            my_tags: ["Uplifting", "Mysterious", "Awakanening-ish", "Soulmate"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/5eK1HNf0Kl2vDPOeqf1kX4SKxrw.jpg"
        },
    
        "predestination": {
            letterboxd_url: "https://boxd.it/6bJM",
            my_rating: 8.0,
            my_tags: ["Mad concept", "Confusing", "Timey-wimey", "Very small cast"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/38Xr1JnV1ZcLQ55zmdSp6n475cZ.jpg"
        },
    
        "portrait_of_a_lady_on_fire": {
            letterboxd_url: "https://boxd.it/jkPq",
            my_rating: 8.5,
            my_tags: ["Great cinematography", "Mysterious", "Melancholic", "France 1800s", "Art"],
            my_review: ""
        },
        
        "parasite_in_love": {
            letterboxd_url: "https://boxd.it/qyhw",
            my_rating: 8.5,
            my_tags: [
                "Another life-form trying to take control of a human mind", 
                "Soulmate", 
                "Social anxiety", 
                "Scopophobia", 
                "Study of unorthodox people who are outcasts from societal norms"
            ],
            my_review: "",
            "gradual_interest": [7, 7, 7, 8, 8, 8, 8, 7, 8, 8]
        },
    },
    
    Q: {

    },

    R: {
        "ribbon": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/v2Gk",
            my_tags: [
                "Quiet",
                "Poignant",
                "Art class nostalgia",
                "Set during COVID-19 pandemic",
            ],
        },

        "red_post_on_escher_street": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/pdpi",
            custom_poster_url: "https://image.tmdb.org/t/p/original/q40rJy9i1GLMUDOiqFzTH6X7Xo8.jpg",
            my_review: "",
            my_tags: [
            ],
        },

        "royal_space_force_the_wings_of_honneamise": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/1E9S",
            my_review: "",
            custom_poster_url: "https://image.tmdb.org/t/p/original/5M9Mrdrj3swDt9EewNSeUkYOiHe.jpg",
            screenshots: screenshots.ROYAL_SPACE_FORCE_THE_WINGS_OF_HONNEAMISE,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.ROYAL_SPACE_FORCE_THE_WINGS_OF_HONNEAMISE)),
            my_tags: [
                "Great art style", 
                "Space exploration",
            ],
        },

        "ride_or_die": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/tZk4",
            my_review: "",
            custom_poster_url: "https://image.tmdb.org/t/p/original/1A7SVcEDqaTFKgzQV3ctb7g0pu9.jpg",
            my_tags: [
                "Melancholic", 
                "Road trip", 
                "Soulmate", 
                "Contemporary"
            ],
        },

        "rocky": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/28Uk",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/hEjK9A9BkNXejFW4tfacVAEHtkn.jpg",
            my_tags: [
                "Deeply human", 
                "Inspiring", 
                "Being the underdog", 
                "Soulmate", 
                "Sport"
            ],
        },
    
        "redline": {
            letterboxd_url: "https://boxd.it/2pQ0",
            my_rating: 8.5,
            my_tags: ["Intricate animation style", "Intepretation of an intergalactic lifestyle", "Fictional racing event", "Audio-visual spectacle", "Intense", "Great soundtrack", "Anime"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/tuIO78Emr8katcv9sk4HONeLdNT.jpg"
        },
    
        "rrr": {
            letterboxd_url: "https://boxd.it/ljDs",
            "title_displayed": "Rise Roar Revolt",
            my_rating: 8.0,
            my_tags: ["Indian culture", "Kindness", "The evil British empire", "Poverty", "Friendship", "Great cinematography", "Very long", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/ljHw5eIMnki3HekwkKwCCHsRSbH.jpg"
        },
    
        "rec": {
            letterboxd_url: "https://boxd.it/20ma",
            my_rating: 9.0,
            my_tags: ["Zombies", "Found-footage", "Brutal", "One-location", "Claustrophobic", "Satanic"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/kJ5hqacHVb9GLChkCZe8Bq4DmTI.jpg"
        },
    
        "revenge": {
            letterboxd_url: "https://boxd.it/gL9g",
            my_rating: 9.5,
            my_tags: ["Revenge-fantasy thriller", "Challenging to watch at times", "Girl power"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/uOiNnowvNEBroDVtZ5FY0zRaKtK.jpg"
        },
    
        "recycle": {
            letterboxd_url: "https://boxd.it/1Qfo",
            my_rating: 8.5,
            my_tags: ["Surreal", "Ghosts", "Abortion"],
            my_review: "",
            "gradual_interest": [7, 7, 8, 8, 9, 9, 9, 8, 8, 8, 8]
        },
    
        "room": {
            letterboxd_url: "https://boxd.it/7T0y",
            my_rating: 9.0,
            my_tags: ["Claustrophobic", "Emotional", "Sad", "Recovering from trauma"],
            my_review: ""
        },
    
        "raw": {
            letterboxd_url: "https://boxd.it/dLd2",
            my_rating: 8.0,
            my_tags: ["Cannibalism", "Growing up", "Body horror", "University life", "Great soundtrack"],
            my_review: "",
            "gradual_interest": [7, 8, 9, 9, 8, 8, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/6kXW9b1FZXvB3l0mLMDbKwGgL3P.jpg"
        },
    
        "rubber": {
            letterboxd_url: "https://boxd.it/P2m",
            my_rating: 8.0,
            my_tags: ["Absurd", "Absurdist comedy", "Breaking the fourth wall"],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 8, 8, 8, 8, 7, 7],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/3CtcLwXVvnMdKBAhzejPaNtTDym.jpg"
        },
    
        "ready_or_not": {
            letterboxd_url: "https://boxd.it/kOf0",
            my_rating: 8.0,
            my_tags: ["Suprising", "Fun", "Intense"],
            my_review: "",
            "gradual_interest": [7, 7, 7, 8, 8, 8, 8, 8, 8, 9]
        },
    
        "ritual": {
            letterboxd_url: "https://boxd.it/14z6",
            my_rating: 8.5,
            my_tags: ["Melancholic", "Loneliness", "Amazing soundtrack"],
            my_review: "",
            "gradual_interest": [8, 8, 8, 7, 8, 8, 7, 9, 8, 8, 7, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/3WDKfLdU2FP8gjVcXTpNvV9fWdA.jpg"
        },
    },

    S: {
        "sleepless_beauty": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/peIU",
            screenshots: screenshots.SLEEPLESS_BEAUTY,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.SLEEPLESS_BEAUTY)),
            my_tags: [
                "Disturbing",
                "Bleak",
                "Virtual Reality",
                "Dark web",
                "Incredible animation sequences",
                "Challenging to watch at times",
            ],
            custom_poster_url: "https://image.tmdb.org/t/p/original/61NiqfO7i5eUBQANHuaqUoBMy1S.jpg",
        },

        "saint_ange": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/1Chg",
            "title_displayed": "Saint Ange",
            my_tags: [
                "Atmospheric",
                "Spooky",
                "Suspensful",
                "Insane ending",
            ],
        },

        "serial_experiments_lain": {
            my_rating: 8.5,
            letterboxd_url: "https://boxd.it/hYQE",
            my_tags: [
                "Surreal",
                "Anime series",
                "Weird",
                "Philosophical",
            ],
        },

        "spring_and_chaos": {
            my_rating: 8.0,
            letterboxd_url: "https://boxd.it/1u02",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/Aq9nsKCv0biNKTFMmfdQWYXVngm.jpg",
            screenshots: screenshots.SPRING_AND_CHAOS,
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.SPRING_AND_CHAOS)),
            my_tags: [
                
            ],
        },

        "sing_street": {
            my_rating: 10.0,
            letterboxd_url: "https://boxd.it/cOo6",
            my_review: "",
            my_tags: [
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
            my_rating: 9.5,
            letterboxd_url: "https://boxd.it/3Icg",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/hX3yYovRH6Vi4WsIPpFnP6IywCS.jpg",
            my_tags: [
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
            letterboxd_url: "https://boxd.it/pah6",
            custom_poster_url: "https://image.tmdb.org/t/p/original/t7EUMSlfUN3jUSZUJOLURAzJzZs.jpg",
            my_rating: 8.0,
            my_tags: [
                "Intense",
                "Claustrophobic",
                "One-location",
                "Thrilling",
            ],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.SHADOW_IN_THE_CLOUD)),
            screenshots: screenshots.SHADOW_IN_THE_CLOUD,
        },
    
        "sound_of_metal": {
            letterboxd_url: "https://boxd.it/i7Q4",
            my_rating: 9.5,
            my_tags: ["A slice of life", "Metal", "Finding yourself", "Stoicism", "Not giving up despite being in a shitty situation"],
            my_review: "",
            custom_poster_url: require('./content/sound_of_metal/custom_poster.jpg')
        },
    
        "seeking_a_friend_for_the_end_of_the_world": {
            letterboxd_url: "https://boxd.it/376g",
            my_rating: 8.0,
            my_tags: ["End of the world", "Death", "Soulmate", "Uplifting", "Great character chemistry", "Stoicism", "Turning negatives into positives"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/rBbCwFLyt7Q25yaw2bEOQh7RMG1.jpg"
        },
    
        "split": {
            letterboxd_url: "https://boxd.it/dgSy",
            my_rating: 8.5,
            my_tags: ["Claustrophobic", "Disturbing", "Multiple personality disorder"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/kBvO58pt13dgYImjZNjq6QiOT8n.jpg"
        },
    
        "safety_not_guaranteed": {
            letterboxd_url: "https://boxd.it/2Y3M",
            my_rating: 8.0,
            my_tags: ["Time travel", "Soulmate", "Friendship", "Fun", "Quirky"],
            my_review: ""
        },
    
        "severance": {
            letterboxd_url: "https://boxd.it/23nq",
            my_rating: 8.0,
            my_tags: ["Fun", "Disturbing", "Claustrophobic", "Alone in the wilderness", "Revenge-fantasy", "British humour"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/yg1XRTyH5knwh3Tnij2sUV0ZZ5w.jpg"
        },
    
        "se7en": {
            letterboxd_url: "https://boxd.it/29zs",
            my_rating: 8.0,
            my_tags: ["Crime", "Murder mystery", "Mysterious", "Atmospheric"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/GQP6noTBKsYiAYyn8PYXFcsSgH.jpg",
        },
    
        "speak": {
            letterboxd_url: "https://boxd.it/1MTO",
            my_rating: 8.0,
            my_tags: ["Sad", "Art", "School setting", "Friendship", "Teacher-student dichotomy"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/kxQ9lRgC3tMVNPzLMFsiOK8H8fn.jpg"
        },
    
        "shiva_baby": {
            letterboxd_url: "https://boxd.it/oIv0",
            my_rating: 8.0,
            my_tags: ["One-location", "Claustrophobic", "Jewish culture", "Funny", "Family gathering"],
            my_review: ""
        },
    
        "starman": {
            letterboxd_url: "https://boxd.it/1Y6O",
            my_rating: 7.5,
            my_tags: ["Death",  "Alien visitor disguised as human", "Melancholic", "Mysterious", "Quirky", "Forgiveness", "Soulmate", "Aliens", "Not a shit John Carpenter film", "Great soundtrack"],
            my_review: "",
            custom_poster_url: require('./content/starman/custom_poster.png')
        },
    
        "society": {
            letterboxd_url: "https://boxd.it/1ARc",
            my_rating: 8.5,
            my_tags: ["Creature-feature", "Conspiracy", "Creepy", "Mysterious", "Social commentary"],
            my_review: ""
        },
    
        "slither": {
            letterboxd_url: "https://boxd.it/1Zks",
            my_rating: 8.5,
            my_tags: ["Disgusting", "Gross", "Creature-feature", "Zombies", "Fun", "Wild", "Short but effective"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/jr9NlTilpQMmSo8xUoAodBlvIwF.jpg"
        },
    
        "shaun_of_the_dead": {
            letterboxd_url: "https://boxd.it/29J8",
            my_rating: 8.5,
            my_tags: ["Zombies", "British humour", "Funny"],
            my_review: ""
        },
    
        "school_of_rock": {
            letterboxd_url: "https://boxd.it/28xK",
            my_rating: 10.0,
            my_tags: ["Uplifting", "Emotional", "The universal power of music", "School setting"],
            my_review: ""
        },
    
        "silent_hill": {
            letterboxd_url: "https://boxd.it/2a3C",
            my_rating: 9.5,
            my_tags: ["Atmospheric", "Disgusting", "Gross", "Creature-feature", "Cults", "Religion", "Satanic worshipers", "Foggy town", "Mysterious", "Video game adapatation", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/ljAIu5OJWS8AYy5c5zmtwHPdHd1.jpg"
        },
    
        "solaris": {
            letterboxd_url: "https://boxd.it/27qS",
            my_rating: 7.5,
            my_tags: ["Astronomy", "Psychedelic", "Confusing", "Trippy"],
            my_review: "",
            "gradual_interest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/o839RFIxPrpgOMKQ21SOQl4908t.jpg"
        },
    
        "spontaneous": {
            letterboxd_url: "https://boxd.it/mjPq",
            my_rating: 8.0,
            my_tags: [""],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.SPONTANEOUS)),
            custom_poster_url: "https://www.themoviedb.org/t/p/original/qhDICM8YxuDn9241O2UVEe9DupC.jpg",
            screenshots: screenshots.SPONTANEOUS,
        },
    
        "steamboy": {
            letterboxd_url: "https://boxd.it/1ZvA",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/fFZmfoupqWmHg73A07MIBMwRYqc.jpg"
        },
    
        "starry_starry_night": {
            letterboxd_url: "https://boxd.it/32CG",
            my_rating: 8.5,
            my_tags: ["Jigsaws", "Art", "Origami", "Soulmate", "Friendship"],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.STARRY_STARRY_NIGHT)),
            screenshots: screenshots.STARRY_STARRY_NIGHT,
            "gradual_interest": [7, 7, 8, 8, 9, 9, 8, 9, 9, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/9DEDG5QcktqifgQwO4rW9BLWdEO.jpg"
        },
    
        "suzume": {
            letterboxd_url: "https://boxd.it/yv7Y",
            my_rating: 8.0,
            my_tags: ["Death", "Summer", "Road trip", "Cats", "Portals", "Grieving"],
            my_review: "",
            "gradual_interest": [7, 7, 8, 8, 8, 8, 8, 8, 9, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/i4fgst7Rhw0ScUltDzP9Nmq5Hpm.jpg"
        },
    
        "sightseers": {
            letterboxd_url: "https://boxd.it/3V4Y",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/3L7zuJ6TdbB7Cizd1eZNNbAr9YG.jpg"
        },
      
        "seven_years_in_tibet": {
            letterboxd_url: "https://boxd.it/29aC",
            my_rating: 10.0,
            my_tags: ["Humanity and nature coexisting", "Exploring new places", "Mountaineering", "Tibet", "Dalia Lama", "Poetic", "Profound", "Great cinematography", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/6fOnpPpobaisTHo1MChGCh76qV8.jpg"
        },
    
        "starry_eyes": {
            letterboxd_url: "https://boxd.it/7t3Q",
            my_rating: 8.0,
            my_tags: ["Fake celebrity personas", "Terrifying", "Metamorphosis", "Challenging to watch at times", "Cults"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/t1sIumVCl91XThMoJqUjpERYeAM.jpg"
        },
    
        "super8": {
            letterboxd_url: "https://boxd.it/dVI",
            my_rating: 8.0,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/gUFHzEiJFgzGfwYvZv5opXHUJfo.jpg"
        },
    
        "summer_wars": {
            letterboxd_url: "https://boxd.it/1oDC",
            my_rating: 7.5,
            my_tags: ["End of the world", "Nature", "Summer", "Family", "Togetherness"],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 8, 8, 7, 7, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/wuytCABUQRuJAmaGS5TOes7HSYx.jpg"
        },
    
        "spirited_away": {
            letterboxd_url: "https://boxd.it/2b4m",
            my_rating: 8.0,
            my_tags: ["Nature", "Japanese culture", "Ghosts", "Soulmate", "Studio ghibli"],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.SPIRITED_AWAY)),
            "gradual_interest": [8, 8, 8, 7, 8, 8, 8, 8, 8, 9, 9, 8],
            screenshots: screenshots.SPIRITED_AWAY,
            custom_poster_url: "https://www.themoviedb.org/t/p/original/y2K14f237l9IgwGZi5FyNnyG8RL.jpg"
        },
    
        "species": {
            letterboxd_url: "https://boxd.it/1YUk",
            my_rating: 8.0,
            my_tags: ["Creatures"],
            my_review: "",
            "gradual_interest": [6, 7, 7, 8, 8, 8, 8, 8, 8, 8, 7]
        },
    },

    T: {
        "tony_takitani": {
            my_rating: 8.5,
            letterboxd_url: "https://boxd.it/1nR4",
            my_review: "",
            screenshots: screenshots.TONY_TAKITANI,
            custom_poster_url: "https://www.themoviedb.org/t/p/original/hYpqldOPAeBQbfFntiHeoFdOgt7.jpg",
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.TONY_TAKITANI)),
            my_tags: [
                "Melancholic",
                "Lonelinesss",
                "Calm",
                "Mellow",
                "Introspective",
            ],
        },

        "tag": {
            my_rating: 8.5,
            letterboxd_url: "https://boxd.it/bjvI",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/eYqjakKlMOG7VvmyLqdckYJM8h8.jpg",
            my_tags: [
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
            letterboxd_url: "https://boxd.it/2a2k",
            my_rating: 8.5,
            my_tags: ["Nostalgic", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/1kLYRzVj6byWvFa3SLrAOcfgnfp.jpg"
        },
    
        "triangle": {
            letterboxd_url: "https://boxd.it/1tQG",
            my_rating: 9.5,
            my_tags: ["Time loop", "Non-linear timeline", "One-location", "On boat", "Mad concept"],
            my_review: ""
        },
    
        "tekkonkinkreet": {
            letterboxd_url: "https://boxd.it/1Pui",
            my_rating: 7.5,
            my_tags: [""],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/ePFlq56e7MmVDGKtKeOPy1YbKC3.jpg"
        },
    
        "turtles_are_suprisingly_fast_swimmers": {
            letterboxd_url: "https://boxd.it/1ba8",
            my_rating: 8.0,
            my_tags: [],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.TURTLES_ARE_SUPRISINGLY_GOOD_SWIMMERS)),
            "gradual_interest": [9, 9, 9, 8, 8, 8, 7, 7, 7],
            screenshots: screenshots.TURTLES_ARE_SUPRISINGLY_GOOD_SWIMMERS,
            custom_poster_url: "https://www.themoviedb.org/t/p/original/nThjwGHNHKXI7Y1oGdrWzcoAF7P.jpg"
        },
    
        "testuo_the_bullet_man": {
            letterboxd_url: "https://boxd.it/zZ8",
            my_rating: 8.5,
            "gradual_interest": [7, 7, 8, 8, 8, 8, 8, 7, 7, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/sYcYjZ65YEEelekUgJcUp4HkRmw.jpg",
            my_tags: ["Disturbing", "Cyberpunk", "Biopunk", "Stylish", "Metal", "Chaotic", "Claustrophobic", "Challenging to watch at times", "Great soundtrack"],
            my_review: ReactDomServer.renderToString(TetsuoTheBulletManReview(screenshots.TETSUO_THE_BULLET_MAN)),
            screenshots: screenshots.TETSUO_THE_BULLET_MAN,
        },
    
        "tokyo_vampire_hotel": {
            letterboxd_url: "https://boxd.it/lpUk",
            my_rating: 9.5,
            my_tags: ["Intense", "The audience is thrown into a bizzare situation and forced to experience it", "Colourful", "Amazing soundtrack"],
            my_review: "",
            "gradual_interest": [8, 9, 9, 9, 8, 8, 8, 9, 9, 9, 9, 8, 9, 9],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/jwwUtmqKTlDad8cmxdAeTDf61GF.jpg"
        },
    
        "them": {
            letterboxd_url: "https://boxd.it/1VhE",
            my_rating: 7.5,
            my_tags: ["Claustrophobic", "Intense", "Home invasion"],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 7, 8, 8, 8, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/kEO9nGyCRGLNIb5kPPjdYAqJ4bO.jpg"
        },
    },

    U: {
        "utoya": {
            letterboxd_url: "https://boxd.it/i3a4",
            "title_displayed": "Ut\u00f8ya: July 22",
            my_rating: 8.0,
            my_tags: ["One-take", "Based on true events", "Terroism", "Brutal", "Intense", "Survival story", "Norweigan island", "Challenging to watch at times"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/vRTNX2KhxwSXynzxWQrJMW5kLFi.jpg"
        },
    
        "under_the_shadow": {
            letterboxd_url: "https://boxd.it/d1uG",
            my_rating: 8.5,
            my_tags: ["Terrifying", "War", "Spirits", "Possession", "Iran conflict", "Living in flats"],
            my_review: ""
        },
    },

    V: {
        "vanshing_on_7th_street": {
            letterboxd_url: "https://boxd.it/Uby",
            my_rating: 8.0,
            my_tags: [
                "Atmospheric",
                "Creepy",
                "Dark",
                "Mysterious",
                "Compelling"
            ],
            my_review: "",
        },

        "victoria": {
            my_rating: 8.5,
            letterboxd_url: "https://boxd.it/amSe",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/1koMqkomlAFORjooFJtQEVVgiSG.jpg",
            my_tags: [
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
            letterboxd_url: "https://boxd.it/gmVE",
            my_rating: 9.0,
            my_tags: ["Claustrophobic", "Terrifying", "Stuck somewhere"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/rkmtRnDsbdimPVxjCl1NseNz9Gn.jpg"
        },
    },

    W: {
        "we_made_a_beautiful_bouquet": {
            letterboxd_url: "https://boxd.it/pZDC",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/i4CRAls90VIXm9KocszTeTUpMsB.jpg",
            my_rating: 8.5,
            my_tags: ["Finding your soulmate", "Happy romcom turns depressing", "Great soundtrack"],
            my_review: ReactDomServer.renderToString(WeMadeABeautifulBouquet(screenshots.WE_MADE_A_BEAUTIFUL_BOUQUET)),
            screenshots: screenshots.WE_MADE_A_BEAUTIFUL_BOUQUET,
            "gradual_interest": [7, 8, 9, 9, 9, 9, 9, 8, 8, 7, 7, 7],
        },
    
        "waves": {
            my_rating: 10,
            letterboxd_url: "https://boxd.it/jpmy",
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/iDYOOa2Fii2ynvOlTdGGr75TuPx.jpg",
            my_tags: [
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
            letterboxd_url: "https://boxd.it/2bde",
            my_rating: 8.5,
            my_tags: ["Aliens", "End of the world", "War", "Total escapism", "Intense"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/pwppVd91qtkxEV0TKxGe3J6k4SU.jpg"
        },
    
        "we_need_to_talk_about_kevin": {
            letterboxd_url: "https://boxd.it/2pTS",
            my_rating: 8.5,
            my_tags: ["Arthouse psychological thriller", "Disturbing", "Evil psychotic child"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/auAmiRmbBQ5QIYGpWgcGBoBQY3b.jpg"
        },
    
        "white_god": {
            my_rating: 9.0,
            letterboxd_url: "https://boxd.it/81lO",
            custom_poster_url: "https://image.tmdb.org/t/p/original/jT9IjPwA5aIYlgvC55VxJOLc0sI.jpg",
            screenshots: screenshots.WHITE_GOD,
            my_review: ReactDomServer.renderToString(WhiteGodReview(screenshots.WHITE_GOD)),
            my_tags: [
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
            letterboxd_url: "https://boxd.it/1VEo",
            "title_displayed": "WALL\u00b7E",
            my_rating: 9.0,
            my_tags: ["Post-apocalypse", "Civilisation on spaceship", "Minimal dialogue", "Very small cast", "Emotional", "Great soundtrack"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg"
        },
    
        "wolf_children": {
            letterboxd_url: "https://boxd.it/3Ipk",
            custom_poster_url: "https://image.tmdb.org/t/p/original/nqqovhsvsWbsb7LcGaIGDRZrwgB.jpg",
            my_rating: 8.0,
            my_tags: ["Nature", "Humanity and nature coexisting", "Summer", "Following characters through their lives as seasons pass by"],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.WOLF_CHILDREN)),
            screenshots: screenshots.WOLF_CHILDREN,
            "gradual_interest": [6, 6, 7, 7, 8, 8, 8, 9, 8, 8, 8, 8]
        },
    
        "wrong": {
            letterboxd_url: "https://boxd.it/2V5K",
            my_rating: 8.0,
            my_tags: ["Absurd", "Surreal", "Absurdist comedy", "Confusing"],
            my_review: "",
            "gradual_interest": [7, 7, 7, 7, 8, 7, 8, 7, 8],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/vxFzqCMbM9e7IFMkbiH61xbUUP7.jpg"
        },
    },
    
    X: {
        "xxx_holic": {
            letterboxd_url: "https://boxd.it/y3U4",
            my_rating: 9.5,
            my_tags: ["Dimensionality", "Audio-visual spectacle", "Positive reflection on witches", "Colourful", "Time loop"],
            my_review: "",
            "gradual_interest": [9, 8, 8, 8, 8, 8, 8, 7, 8, 9, 9],
            custom_poster_url: "https://www.themoviedb.org/t/p/original/9anVNOiOTBhO1vet1Q31rQR2xtO.jpg"
        },
    },

    Y: {

    },

    Z: {
        "zatoichi": {
            letterboxd_url: "https://boxd.it/2aMs",
            my_rating: 8.0,
            my_tags: [""],
            "gradual_interest": [7, 7, 8, 8, 8, 7, 7, 8, 8, 9],
            custom_poster_url: "https://image.tmdb.org/t/p/original/iCIycswWbX1EDS6PYYBcR9ohrC.jpg",
        },

        "zombieland": {
            letterboxd_url: "https://boxd.it/1En6",
            my_rating: 8.0,
            my_tags: ["Zombies", "Fun", "Short but effective", "Great character chemistry", "Nostalgic"],
            my_review: "",
            custom_poster_url: "https://www.themoviedb.org/t/p/original/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg"
        },
    
        "zoe": {
            letterboxd_url: "https://boxd.it/gml2",
            my_rating: 8.5,
            my_tags: ["Soulmate", "AI", "Great cinematography", "Great soundtrack"],
            my_review: ReactDomServer.renderToString(TemplateReview(screenshots.ZOE)),
            "gradual_interest": [6, 8, 9, 9, 9, 8, 7, 7, 8, 8, 9],
            screenshots: screenshots.ZOE,
            custom_poster_url: "https://www.themoviedb.org/t/p/original/cSzwzCEOk4AM0w6Br8J6mDl7HzR.jpg"
        },
    }
}


export const film_reviews = convert_collection_of_json_objects_to_one_list_grouped_by_letters(database);
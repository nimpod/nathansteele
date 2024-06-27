const enumValue = (name) => Object.freeze({toString: () => name});

/**
 * Properties of a film, useful for sorting the list
 */
export const FilmProperties = Object.freeze({
    IMDB_AVG: enumValue("IMDB_avg_rating"),
    IMDB_VOTES: enumValue("IMDB_num_votes"),
    IMDB_DIFF: enumValue("IMDB_diff_score"),
    MY_POS: enumValue("position"),
    DURATION: enumValue("duration"),
    YEAR: enumValue("year")
});
export const FilmPropertiesStr = Object.freeze({
    MY_POS: "My order",
    IMDB_AVG: "IMDB avg rating",
    IMDB_VOTES: "IMDB popularity",
    IMDB_DIFF: "IMDB diff score",
    DURATION: "Duration",
    YEAR: "Year of release"
})
export const SortableDirection = Object.freeze({
    ASC: enumValue("ascending"),
    DESC: enumValue("descending"),
})
export const ViewType = Object.freeze({
    LIST: "View as list",
    GRID: "View as grid",
})


/**
 * For filtering my list by who recommened the album to me
 */
export const TrustworthyMusicReviewers = Object.freeze({
    // YouTube
    THE_WONKY_ANGLE: { name: "The Wonky Angle", url: "https://www.youtube.com/@TheWonkyAngle", genres: ["Electronic", "IDM", "Ambient", "Techno", "Breakcore", "Drum and Bass", "Glitch"]},
    SPECTRUM_PULSE: { name: "Spectrum Pulse", url: "https://www.youtube.com/@SpectrumPulse", genres: ["Country"]},
    DEEP_CUTS: { name: "Deep Cuts", url: "https://www.youtube.com/@deepcuts", genres: ["Electronic", "Nu jazz"]},
    THE_NEEDLE_DROP: { name: "The Needle Drop", url: "https://www.youtube.com/@theneedledrop", genres: ["Hip Hop", "Pop"]},

    // RYM
    ALPHAWELLENREITER: { name: "Alphawellenreiter", url: "https://rateyourmusic.com/~Alphawellenreiter", genres: ["Post-minimalism", "Ambient", "Space rock", "Psychedelic rock", "Prog rock"]},
    GEORGE_X: { name: "GeorgeX", url: "https://rateyourmusic.com/~GeorgeX", genres: ["Jazz fusion", "Jazz"]},
    CULT_JAKE: { name: "Cult Jake", url: "https://rateyourmusic.com/~cultjake", genres: ["Jazz fusion", "Jazz"]},
    LOGSTAR_100: { name: "Logstar100", url: "https://rateyourmusic.com/~logstar100", genres: ["K-pop", "Bedroom pop"]},
    TAKASHI_HAFUZA: { name: "Takashi Hafuza", url: "https://rateyourmusic.com/~Takashi_Hafuza", genres: ["Electronic", "Breakbeat", "IDM"]},
    TONE_ZONE: { name: "Tone Zone", url: "https://rateyourmusic.com/~Tone_Zone", genres: ["Metal", "Prog rock"]},
    ELASTIC_ROCK: { name: "ElasticRock", url: "https://rateyourmusic.com/list/elasticrock/100-favourite-ecm-albums/", genres: ["ECM style jazz", "Jazz"] },
    
    // stats.fm
    XENOPHILE: { name: "Xenophile", url: "https://stats.fm/xenophile", genres: ["Choral", "Modern classical"]},

    // lastfm
    NIELS: { name: "Onderhond", url: "https://www.last.fm/user/Onderhond", genres: ["IDM", "Breakcore", "Ambient"]},
});


/**
 * For filtering my list by who recommened the film to me
 */
export const TrustworthyFilmReviewers = Object.freeze({
    NIELS: enumValue("https://letterboxd.com/onderhond/"),
    SITENOISE: enumValue("https://letterboxd.com/sitenoise/"),
    MARK_KERMODE: enumValue("https://www.youtube.com/kermodeandmayostake"),
})

/**
 * Properties of an album, useful for filtering the list.
 */
export const AlbumProperties = Object.freeze({
    ARTIST_NAME: enumValue("artist_name"),
    GENRES: enumValue("genres"),
    YEAR: enumValue("year_of_release"),
    RECOMMENDED_BY: enumValue("recommended_by")
})

/**
 * Time period options for top 100 tracks (this is nothing to do with top albums list)
 */
export const TimePeriodOptions = Object.freeze({
    ALL_TIME: enumValue("all_time"),
    LAST_12_MONTHS: enumValue("last_12_months"),
    LAST_6_MONTHS: enumValue("last_6_months"),
    LAST_3_MONTHS: enumValue("last_3_months"),
    LAST_MONTH: enumValue("last_month"),
    LAST_7_DAYS: enumValue("last_7_days"),
});
export const TimePeriodOptionsStr = Object.freeze({
    ALL_TIME: "All Time",
    LAST_12_MONTHS: "Last 12 months",
    LAST_6_MONTHS: "Last 6 months",
    LAST_3_MONTHS:"Last 3 months",
    LAST_MONTH: "Last month",
    LAST_7_DAYS: "Last 7 days",
})
export const time_period_options = [
    TimePeriodOptions.ALL_TIME.toString(),
    TimePeriodOptions.LAST_12_MONTHS.toString(),
    TimePeriodOptions.LAST_6_MONTHS.toString(),
    TimePeriodOptions.LAST_3_MONTHS.toString(),
    TimePeriodOptions.LAST_MONTH.toString(),
    TimePeriodOptions.LAST_7_DAYS.toString(),
]

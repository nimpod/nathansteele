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
 * Properties of an album, useful for filtering the list.
 */
export const AlbumProperties = Object.freeze({
    ARTIST_NAME: enumValue("artist_name"),
    GENRES: enumValue("genres"),
    YEAR: enumValue("year_of_release"),
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

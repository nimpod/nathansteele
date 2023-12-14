// import { act } from "@testing-library/react";
// import { event } from "jquery";

/**
 * [Get value of a specified CSS variable]
 * @param  {[str]} variable_name [Name of the CSS variable]
 * @return {[type]}     [Value of the CSS variable]
 */
export function get_value_of_CSS_variable(variable_name) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(variable_name);
}


/**
 * Remove special characters from a string
 * @param {*} title 
 * @returns 
 */
export function remove_special_characters(title) {
    return title.replaceAll('.', '')
        .replaceAll(' ', '')
        .replaceAll("\\", "")
        .replaceAll("\"", '')
        .replaceAll(':', '')
        .replaceAll("\'", '')
        .replaceAll('(', '')
        .replaceAll(')', '')
        .replaceAll('?', '')
        .replaceAll('!', '')
        .replaceAll(/-/g, "")
        .replaceAll(',', '')
        .replaceAll('.', '')
        .replaceAll('’', '')
        .replaceAll(/'/g, '')
        .replaceAll(/[/]/g, '')
        .replaceAll('¤', 'a')
        .toLowerCase();
}

/**
 * 
 * @param {*} strToEdit 
 * @returns 
 */
export function remove_special_characters_for_musicbee_export(str_to_edit) {
    return str_to_edit.replaceAll(" ", "_")
                    .replaceAll(".", "")
                    .replaceAll("/", "")
                    .replaceAll("(", "")
                    .replaceAll(")", "")
                    .replaceAll("[", "")
                    .replaceAll("]", "")
                    .replaceAll("!", "")
                    .replaceAll("%", "")
                    .replaceAll("?", "")
                    .replaceAll("'", "")
                    .replaceAll("\"", "")
                    .replaceAll(":", "")
                    .replaceAll(";", "")
                    .replaceAll(",", "")
                    .replaceAll("·", "")
                    .replaceAll("&", "and")
                    .replaceAll("Ã¸", "o")
                    .replaceAll("Ã", "a")
                    .replaceAll("Â", "")
                    .replaceAll("¤", "")
                    .replaceAll("ã", "a")
                    .replaceAll("¸", "")
                    .toLowerCase();
}


/**
 * Construct film review ID
 * @param {*} title 
 * @param {*} letterboxdUrl 
 * @returns 
 */
export function get_film_review_id(title, letterboxdUrl) {
    // format title...
    let newTitle = remove_special_characters(title);

    // get id from URL
    let letterboxdId = letterboxdUrl.split('/').pop()
    
    // define structure of the review ID
    let reviewId = newTitle + '-' + letterboxdId + '-' + 'review';
    return reviewId;
}

/**
 * Construct album review ID
 * @param {*} artistName 
 * @param {*} albumName 
 * @param {*} yearOfRelease 
 * @returns 
 */
export function get_album_review_id(artistName, albumName) {
    let artistNameV2 = remove_special_characters_for_musicbee_export(artistName);
    let albumNameV2 = remove_special_characters_for_musicbee_export(albumName);
    return artistNameV2 + '-' + albumNameV2;
}

/**
 * Construct blog post ID
 * @param {*} title 
 * @returns 
 */
export function get_blog_post_id(title) {
    // format the title...
    let newTitle = title.replaceAll(' ', '_')
        .replaceAll("\'", '')
        .replaceAll('-', '_')
        .replaceAll('?', '')
        .replaceAll('!', '')
        .toLowerCase();
    
    // simples!
    return newTitle;
}

/**
 * Make sure we actually find the button...
 * @param {*} elementClicked 
 * @returns 
 */
export function get_actual_button(element_clicked, tag_name) {
    let actual_button = NaN;
    if (tag_name === "svg") {
        // user clicked on svg, bit fucking annoying
        actual_button = element_clicked.parentElement;
    } else if (tag_name === "path") {
        // user clicked on path inside svg, bit fucking annoying
        actual_button = element_clicked.parentElement.parentElement;
    } else {
        // user clicked on button, well done
        actual_button = element_clicked;
    }
    return actual_button;
}

/**
 * 
 * @param {*} IMDB_diff_score 
 * @returns 
 */
export function generate_IMDB_diff_score(IMDB_diff_score) {
    let diff_score_str = "";
    let diff_score_str_classname = "";

    // Positive diff score...
    if (IMDB_diff_score > 0) {
        diff_score_str = "+" + IMDB_diff_score;
        diff_score_str_classname = "positive-diff";
    }
    
    // Negative diff score...
    else if (IMDB_diff_score < 0) {
        diff_score_str = IMDB_diff_score;
        diff_score_str_classname = "negative-diff";
    } 
    
    // My rating and IMDB rating are exactly the same...
    else if (IMDB_diff_score === 0) {
        diff_score_str = IMDB_diff_score;
        diff_score_str_classname = "equal-diff";
    }

    return {
        "diff_score_str": diff_score_str, 
        "diff_score_str_classname": diff_score_str_classname
    };
}

/**
 * 
 * @param {*} filmData 
 * @returns 
 */
export function override_film_poster_url(film_data) {
    let poster_url = ""

    // use custom poster....
    if (film_data.custom_poster_url !== undefined) {
        poster_url = film_data.custom_poster_url;
    }

    // use default poster if I didnt specify one...
    if (film_data.custom_poster_url === undefined) {
        poster_url = film_data.poster_url;
    }

    return poster_url;
}

/**
 * 
 * @param {*} filmData 
 * @returns 
 */
export function override_film_title(film_data) {
    let title = ""
    
    // use custom title...
    if (film_data.title_displayed !== undefined) {
        title = film_data.title_displayed;
    }
    
    // otherwise use default title...
    else {
        title = film_data.title;
    }

    return title;
}

/**
 * 
 * @param {*} filterdData 
 * @returns 
 */
export function get_list_of_poster_urls(filterd_data) {
    let poster_urls = [];

    Object.entries(filterd_data).forEach(([k,v]) => {
        if (v["custom_poster_url"] !== undefined) {
            poster_urls.push(v["custom_poster_url"]);
        } else {
            poster_urls.push(v["poster_url"]);
        }
    })

    return poster_urls;
}

/**
 * 
 * @param {*} str 
 * @returns 
 */
export function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

/**
 * Iterate two lists simultanesouly
 * @param {*} arrays 
 * @returns 
 */
export function* zip(arrays) {
    let iterators = arrays.map(a => a[Symbol.iterator]());
    while (true) {
        let results = iterators.map(it => it.next());
        if (results.some(r => r.done)) return;
        yield results.map(r => r.value);
    }
}

// #region ------------------< Remove dupliactes from a list functions >------------------

/**
 * Remove duplicate values from array
 * @param {Array to investigate} arr 
 * @returns New array
 */
export function remove_duplicates_from_array(arr) {
    return Array.from(new Set(arr));
}

/**
 * Get set of genres (set meaning there should be no duplicates)
 * @returns 
 */
export function remove_genre_duplicates(films_list, default_genre) {
    const unique_genres = new Set();        // a set to store 1 of each type of tag that exists across the entire blog archive

    // store each genre once...
    films_list.map((film => {
        film.genres.map((g => {
            unique_genres.add(g);
        }));
        return null;
    }));

    // sort the set alphabetically, cause why not.
    const unique_genres_sorted = Array.from(unique_genres).sort();

    // add default...
    unique_genres_sorted.unshift(default_genre);

    return unique_genres_sorted;
}

/**
 * Get set of languages (set meaning there should be no duplicates)
 * @returns 
 */
export function remove_language_duplicates(films_list, default_language) {
    const unique_languages = new Set();        // a set to store 1 of each type of tag that exists across the entire blog archive

    // store each language once...
    films_list.map((film => {
        unique_languages.add(film.language);
        return null;
    }));

    // sort the set alphabetically, cause why not.
    const unique_languages_sorted = Array.from(unique_languages).sort();

    // add default...
    unique_languages_sorted.unshift(default_language);
    
    return unique_languages_sorted;
}

/**
 * Get list of tag categories
 * @param {*} posts_list 
 * @param {*} default_tag 
 * @returns 
 */
export function get_list_of_tag_categories(posts_list, default_tag) {
    const unique_tags = new Set();        // a set to store 1 of each type of tag that exists across the entire blog archive
    
    // add default tag...
    unique_tags.add(default_tag);

    // store each tag category once...
    posts_list.map((p => {
        // console.log('DEBUGGING: ', p.tags);
        p.tags.map((t => {
            unique_tags.add(t);
        }));
    }));

    // sort the set of tags alphabetically, cause why not.
    const unique_tags_sorted = Array.from(unique_tags).sort();

    return unique_tags_sorted;
    /*
    this.setState({tagCategories:
        arrayOfTags.map(tag => {
            return (
                <span className="filter-tag-btn tag" key={tag} onClick={this.handleTagFilter}>
                    <span className={tag}>
                        { tag }
                        <div className="inline-svg plus">
                            <PlusIcon />
                        </div>
                        <div className="inline-svg cross" hidden={true}>
                            <CrossIcon />
                        </div>
                    </span>
                </span>
            );
        }) 
    });*/
}

// #endregion


/**
 * [Get a random RGBA value]
 * @param {[float]} opacity [specify an opacity/transparency for the colour (0.0=invisible, 1.0=opaque, 0.5=somewhere in between)]
 * @returns [rgba value]
 */
export function get_random_RGBA(opacity) {
    var o = Math.round;
    var r = Math.random;
    var s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + (opacity) + ')';
}


/**
 * Hide something when a user clicks outside the item
 * @param {*} item_to_remove_class_from 
 * @param {*} item_clicked_before 
 * @param {*} mouseEvent 
 * @param {*} classname_to_remove
 */
export function remove_class_from_item_when_user_clicks_outside_of_item(item_to_remove_class_from, item_clicked_before, mouseEvent, classname_to_remove) {
    window.addEventListener('click', function(mouseEvent) {   
        if (item_clicked_before.contains(mouseEvent.target)) {
            // clicked item_clicked_before (e.g. button)
            return true;
        } else {
            // otherwise we must of clicked outside the itemToRemoveClassFrom
            console.log('Clicked outside input box...')
            item_to_remove_class_from.classList.remove(classname_to_remove);
            return false;
        }
    });
}

/**
 * Either open or close a dropdown list
 * @param {*} classname_of_list 
 */
export const toggle_dropdown_list = (e, classname_of_list) => {
    let dropdown_list = document.getElementsByClassName(classname_of_list + "")[0];
    let dropdown_list_btn = document.getElementsByClassName(classname_of_list + "-btn")[0];
    let arrow_icon_in_dropdown_btn = dropdown_list_btn.childNodes[1];
    // console.log(dropdown_list_btn);

    if (dropdown_list.classList.contains('visible')) {
        dropdown_list.classList.remove('visible');
        dropdown_list_btn.classList.remove('list-is-visible');
        arrow_icon_in_dropdown_btn.classList.remove('dropdown-list-is-visible');
    } else {
        dropdown_list.classList.add('visible');
        dropdown_list_btn.classList.add('list-is-visible');
        arrow_icon_in_dropdown_btn.classList.add('dropdown-list-is-visible');
    }

    // close collapsed menu if user clicks out of it...
    window.addEventListener('click', function(mouseEvent) {
        // hide dropdown list when user clicks outside of btn...
        remove_class_from_item_when_user_clicks_outside_of_item(
            dropdown_list,
            dropdown_list_btn,
            mouseEvent,
            'visible'
        );

        // rotate arrow icon when user clicks outside of btn...
        remove_class_from_item_when_user_clicks_outside_of_item(
            arrow_icon_in_dropdown_btn, 
            dropdown_list_btn,
            mouseEvent,
            'dropdown-list-is-visible'
        );

        // deactivate btn when user clicks outside of btn...
        remove_class_from_item_when_user_clicks_outside_of_item(
            dropdown_list_btn,
            dropdown_list_btn,
            mouseEvent,
            'list-is-visible'
        );
    });

    return null;
    
    // toggle arrow...
    // this.toggle_dropdown_list_arrow_icon(arrow_icon_in_dropdown_btn);
}

/**
 * Toggle the arrow icon
 * @param {*} arrow_icon_in_dropdown_btn 
 */
export function toggle_dropdown_list_arrow_icon(arrow_icon_in_dropdown_btn) {
    if (arrow_icon_in_dropdown_btn.classList.contains('dropdown-list-is-visible')) {
        arrow_icon_in_dropdown_btn.classList.remove('dropdown-list-is-visible');
    } else {
        arrow_icon_in_dropdown_btn.classList.add('dropdown-list-is-visible');
    }
}

/**
 * Handle filter button toggling
 * @param {*} target 
 * @param {*} classname_of_buttons_in_this_dropdown_list 
 * @returns Button the user clicked on
 */
export function handle_filter_button_toggling_stuff(target, classname_of_buttons_in_this_dropdown_list) {
    // make sure we actually find the button...
    let actual_button = NaN;
    if (target.tagName === "SPAN") {
        // user clicked on text, bit fucking annoying
        actual_button = target.parentElement;
    } else {
        // user clicked on button, well done
        actual_button = target;
    }

    // remove .active from everything first... 
    // This ensures only one filter is highlighted at a time...
    // Dont do this if the actual button is inactive (i.e. nothing has been filtered yet)
    if (!actual_button.classList.contains('active')) {
        let dropdown_btns = document.querySelectorAll(classname_of_buttons_in_this_dropdown_list);
        for (let i = 0; i < dropdown_btns.length; i++) {
            dropdown_btns[i].classList.remove('active');
        }
    }

    // return the button in the dropdown list that the user originally clicked
    return actual_button;
}


/**
 * Convert local data JSON objects, into one list
 * @returns Array
 */
export function convert_collection_of_json_objects_to_one_list_grouped_by_letters(data) {
    const local_data_array = [];

    // itearate over local data...
    Object.entries(data).forEach((letter_group) => {
        const _letter_group = letter_group[1];
        
        // iterate over each letter group...
        Object.entries(_letter_group).forEach((review) => {
            const _review = review[1];
            local_data_array.push(_review);
        })
    });

    return local_data_array;
}


/**
 * 
 * @param {*} data 
 * @returns 
 */
export function convert_collection_of_json_objects_to_one_list(data) {
    const local_data_array = [];

    // itearate over local data...
    Object.entries(data).forEach((review) => {
        const _review = review[1];
        local_data_array.push(_review);
    });

    return local_data_array;
}
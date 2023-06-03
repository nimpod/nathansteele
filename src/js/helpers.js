
/**
 * [Get value of a specified CSS variable]
 * @param  {[str]} variable_name [Name of the CSS variable]
 * @return {[type]}     [Value of the CSS variable]
 */
export function getValueOfCSSVariable(variable_name) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(variable_name);
}


/**
 * Construct film review ID
 * @param {*} title 
 * @param {*} letterboxdUrl 
 * @returns 
 */
export function getReviewId(title, letterboxdUrl) {
    // format title...
    let newTitle = title.replaceAll('.', '')
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

    // get id from URL
    let letterboxdId = letterboxdUrl.split('/').pop()
    
    // define structure of the review ID
    // ideally would be {title}-{year}-review
    // (e.g. thelegomovie-2017-review)
    let reviewId = newTitle + '-' + letterboxdId + '-' + 'review';
    return reviewId;
}

/**
 * Construct blog post ID
 * @param {*} title 
 * @returns 
 */
export function getBlogPostId(title) {
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
 * [Remove duplicate values from array]
 * @param {Array to investigate} arr 
 * @returns New array
 */
export function removeDuplicatesFromArray(arr) {
    return Array.from(new Set(arr));
}

/**
 * Get set of genres (set meaning there should be no duplicates)
 * @returns 
 */
export function removeGenreDuplicates(filmsList, defaultGenre) {
    const uniqueGenres = new Set();        // a set to store 1 of each type of tag that exists across the entire blog archive

    // store each genre once...
    filmsList.map((film => {
        film.genres.map((g => {
            uniqueGenres.add(g);
        }));
    }));

    // sort the set alphabetically, cause why not.
    const uniqueGenresSorted = Array.from(uniqueGenres).sort();

    // add default...
    uniqueGenresSorted.unshift(defaultGenre);

    return uniqueGenresSorted;
}

/**
 * Get set of languages (set meaning there should be no duplicates)
 * @returns 
 */
export function removeLanguageDuplicates(filmsList, defaultLanguage) {
    const uniqueLanguages = new Set();        // a set to store 1 of each type of tag that exists across the entire blog archive

    // store each language once...
    filmsList.map((film => {
        uniqueLanguages.add(film.language);
    }));

    // sort the set alphabetically, cause why not.
    const uniqueLanguagesSorted = Array.from(uniqueLanguages).sort();

    // add default...
    uniqueLanguagesSorted.unshift(defaultLanguage);
    
    return uniqueLanguagesSorted;
}

export function getListOfTagCategories(postsList, defaultTag) {
    const uniqueTags = new Set();        // a set to store 1 of each type of tag that exists across the entire blog archive
    
    // add default tag...
    uniqueTags.add(defaultTag);

    // store each tag category once...
    postsList.map((p => {
        // console.log('DEBUGGING: ', p.tags);
        p.tags.map((t => {
            uniqueTags.add(t);
        }));
    }));

    // sort the set of tags alphabetically, cause why not.
    const uniqueTagsSorted = Array.from(uniqueTags).sort();
    return uniqueTagsSorted;
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
export function getRandomRGBA(opacity) {
    var o = Math.round;
    var r = Math.random;
    var s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + (opacity) + ')';
}


/**
 * Hide something when a user clicks outside the item
 * @param {*} itemToRemoveClassFrom 
 * @param {*} itemClickedBefore 
 * @param {*} mouseEvent 
 * @param {*} classNameToRemove
 */
export function removeClassFromItemWhenUserClicksOutsideOfItem(itemToRemoveClassFrom, itemClickedBefore, mouseEvent, classNameToRemove) {
    window.addEventListener('click', function(mouseEvent) {   
        if (itemClickedBefore.contains(mouseEvent.target)) {
            // clicked itemClickedBefore (e.g. button)
        } else {
            // otherwise we must of clicked outside the itemToRemoveClassFrom
            console.log('Clicked outside input box...')
            itemToRemoveClassFrom.classList.remove(classNameToRemove);
        }
    });
}


  
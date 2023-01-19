

/**
 * [Get value of a specified CSS variable]
 * @param  {[str]} variable_name [Name of the CSS variable]
 * @return {[type]}     [Value of the CSS variable]
 */
export function getValueOfCSSVariable(variable_name) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(variable_name);
}


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
 * [Remove duplicate values from array]
 * @param {Array to investigate} arr 
 * @returns New array
 */
export function removeDuplicatesFromArray(arr) {
    return Array.from(new Set(arr));
}


/**
 * Hide something when a user clicks outside the item
 * @param {*} itemToHide 
 * @param {*} itemClickedBefore 
 * @param {*} mouseEvent 
 */
export function hideItemWhenUserClicksOutsideOfItem(itemToHide, itemClickedBefore, mouseEvent) {
    window.addEventListener('click', function(mouseEvent) {   
        if (itemClickedBefore.contains(mouseEvent.target)) {
            // clicked itemClickedBefore (e.g. button)
        } else {
            // otherwise we must of clicked outside the itemToHide
            console.log('Clicked outside input box...')
            itemToHide.classList.remove('active');
        }
    });
}
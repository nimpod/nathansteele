import React from 'react';


/**
 * Poster image
 * @param {*} props 
 * @returns 
 */
function PosterImage(props) {
    /*
    const onLoad = () => {
        props.onLoad();
    };
    */

    return (
        <picture className='film-poster'>
            <img
                style={props.isCurrentlyLoading ? {backgroundColor: 'black'} : {}}
                src={props.src}
                onLoad={props.update_loading}
                alt="Film poster"
            />
        </picture>
    )
}

export default PosterImage

import React, {Component} from 'react'
import { connect}  from 'react-redux'

function PosterImage(props) {
    const onLoad = () => {
        props.onLoad();
    };

    return (
        <picture className='film-poster'>
            <img
                style={props.isCurrentlyLoading ? {backgroundColor: 'black'} : {}}
                src={props.src}
                onLoad={props.updateLoading}
            />
        </picture>
    )
}

export default PosterImage

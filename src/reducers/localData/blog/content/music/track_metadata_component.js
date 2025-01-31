import React, {Component} from 'react'
import { ReactComponent as PlayIcon } from "../../../../../icons/play.svg";

class TrackMetadataComponent extends React.Component {
    
    handleOnClick = (e) => {
        console.log("WHY THE FUCK IS THIS NOT WORKING FUCKING BULLSHIT");
    }

    render() {
        return (
            <div className='track-info-header'>
                <div className='track-pos'>{this.props.pos}</div>
                <div className='track-scrobbles'>
                    <div className="track-scrobbles-inner" style={{width: ((this.props.scrobbles)/this.props.max_scrobbles)*100 + '%'}}>
                        {this.props.scrobbles} scrobbles
                    </div>
                </div>
                <div className='track-artist-and-title' onClick={(e) => this.handleOnClick(e)}>
                    <span className='track-artist'>{this.props.artist}</span>
                    <span className='track-title'>{this.props.title}</span>
                </div>
                <div className="track-playBtn">
                    <PlayIcon />
                </div>
            </div>
        )
    }
}
 
// export default withRouter(TrackMetadataComponent)
export default TrackMetadataComponent
// not sure why, but I get this error when I export using the 'withRouter' function
// Invariant failed: You should not use A/> outside a <Router>
// it works without using withRouter, so whatever...

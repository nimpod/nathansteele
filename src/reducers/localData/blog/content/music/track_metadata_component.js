import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom';

class TrackMetadataComponent extends Component {
    render() {
        // console.log(this.props);

        return(
            <div>
                <h3 className='subgroup-title'>
                    <span className='track-pos'>#{this.props.pos}</span>
                    <span className='track-scrobbles'>{this.props.scrobbles} scrobbles</span>
                    <span className='track-artist-and-title'>{this.props.artist} - {this.props.track}</span>
                </h3>
                <iframe width="560" height="315" src={this.props.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        )
    }
}

export default withRouter(TrackMetadataComponent)

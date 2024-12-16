import React, {Component} from 'react'


class TrackMetadataComponent extends Component {
    render() {
        // console.log(this.props);
        let artist_name_not_english = null;
        let full = "";

        if (this.props.artst_not_english !== undefined) {
            artist_name_not_english = this.props.artist_not_english;
        }

        return(
            <div>
                <h3 className='subgroup-title'>
                    <span className='track-pos'>#{this.props.pos}</span>
                    <span className='track-scrobbles'>{this.props.scrobbles} scrobbles</span>
                    {this.props.artst_not_english == undefined ? (
                        <span className='track-artist-and-title'>{this.props.artist} - {this.props.track}</span>
                    ) : (
                        <span className='track-artist-and-title'>{this.props.artist} <span className='artist-name-not-english'>{artist_name_not_english}</span> - {this.props.track}</span>
                    )}
                </h3>
                <iframe 
                    width="560" 
                    height="315" 
                    src={this.props.youtube} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
        )
    }
}
 
// export default withRouter(TrackMetadataComponent)
export default TrackMetadataComponent
// not sure why, but I get this error when I export using the 'withRouter' function
// Invariant failed: You should not use <withRouter(TrackMetadataComponent) /> outside a <Router>
// it works without using withRouter, so whatever...

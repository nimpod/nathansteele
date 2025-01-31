import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class SongFooterComponent extends Component {
    render() {
        return(
            <div>
                
                <p className='track-albumLink'>
                    <Link to={`#/music/${this.props.review_id}`}>
                        {this.props.album_artist} - {this.props.album_name}
                    </Link>
                </p>

                <iframe
                    width="560" 
                    height="315" 
                    src={this.props.youtube} 
                    title="YouTube video player" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>

            </div>
        )
    }
}

export default SongFooterComponent
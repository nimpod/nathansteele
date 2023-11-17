import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom';
import { ReactComponent as ToplistPosIcon } from "../../icons/toplistPos.svg";
import { ReactComponent as ToplistRatingIcon } from "../../icons/toplistRating.svg";


class AlbumGridElement extends Component {
    render() {
        let albumCoverUrl = ""
        // console.log(this.props.album);

        // use custom album cover url if it exists...
        if (this.props.album.customCoverUrl !== undefined) {
            albumCoverUrl = this.props.album.customCoverUrl;
        }
        // use default posterUrl if I didnt specify one...
        if (this.props.album.customCoverUrl === undefined) {
            albumCoverUrl = this.props.album.albumCoverUrl;
        }
        
        // console.log(this.props);
        return(
            <Link to={'/music/' + this.props.album.reviewId}>
                <div className='albumInfoContainer'>
                    <img className='albumCover' src={albumCoverUrl} alt="Album cover"></img>
                    <div className='albumInfo'>
                        <div className='artistName'>
                            <p>{this.props.album.artistName}</p>
                        </div>
                        <div className='albumName'>
                            <p>{this.props.album.albumName}</p>
                        </div>
                    </div>
                    <div className='pos dataInCircle'>
                        <ToplistPosIcon className="invertable-icon" />
                        <p>{this.props.album.positionStr}</p>
                    </div>
                    <div className='myRating dataInCircle'>
                        <ToplistRatingIcon className="invertable-icon" />
                        <p>{this.props.album.myRating}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default withRouter(AlbumGridElement)

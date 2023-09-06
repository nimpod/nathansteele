import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter, Link } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as ToplistPosIcon } from "../../icons/toplistPos.svg";
import { ReactComponent as ToplistRatingIcon } from "../../icons/toplistRating.svg";
import { getValueOfCSSVariable } from '../../js/helpers';


class AlbumGridElement extends Component {
    render() {
        let albumCoverUrl = ""
        console.log(this.props.album);

        // use custom album cover url if it exists...
        if (this.props.album.customCoverUrl !== undefined) {
            albumCoverUrl = this.props.album.customCoverUrl;
        }
        // use default posterUrl if I didnt specify one...
        if (this.props.album.customCoverUrl == undefined) {
            albumCoverUrl = this.props.album.albumCoverUrl;
        }
        
        // console.log(this.props);
        return(
            <Link to={'/music/' + this.props.reviewId}>
                <div className='albumInfoContainer'>
                    <img className='albumCover' src={albumCoverUrl}></img>
                    <div className='albumInfo'>
                        <div className='artistName'>
                            <p>{this.props.album.artistName}</p>
                        </div>
                        <div className='albumName'>
                            <p>{this.props.album.reviewId}</p>
                        </div>
                        {/*}
                        <div className='genres'>
                            <p>{this.props.album.genres}</p>
                        </div>
                        <div className='year'>
                            <p>{this.props.album.year}</p>
                        </div>
                        <div className='myDiscoveryYear'>
                            <p>{this.props.album.myDiscoveryYear}</p>
                        </div>
                        */}
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

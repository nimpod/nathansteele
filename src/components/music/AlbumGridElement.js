import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom';
import { ReactComponent as ToplistPosIcon } from "../../icons/toplistPos.svg";
import { ReactComponent as ToplistRatingIcon } from "../../icons/toplistRating.svg";


class AlbumGridElement extends Component {
    render() {
        let album_cover_url = ""
        let artist_name = this.props.album.artist_name;
        //console.log(this.props.album);

        // use custom album cover url if it exists...
        if (this.props.album.custom_cover_url !== undefined) {
            album_cover_url = this.props.album.custom_cover_url;
        }
        // use default posterUrl if I didnt specify one...
        if (this.props.album.custom_cover_url === undefined) {
            album_cover_url = this.props.album.album_cover_url;
        }
        
        // use English name if it exists...
        if (this.props.album.artist_name_English) {
            artist_name = this.props.album.artist_name_displayed;
        }
        if (this.props.album.artist_name_Japanese) {
            artist_name = this.props.album.artist_name_displayed;
        }

        // console.log(this.props);
        return(
            <Link to={'/music/' + this.props.album.review_id}>
                <div className='albumInfoContainer'>
                    <img className='albumCover' src={album_cover_url} alt="Album cover"></img>
                    <div className='albumInfo'>
                        <div className='artistName'>
                            <p>{artist_name}</p>
                        </div>
                        <div className='albumName'>
                            <p>{this.props.album.album_name}</p>
                        </div>
                    </div>
                    <div className='pos dataInCircle'>
                        <ToplistPosIcon className="invertable-icon" />
                        <p>{this.props.album.position_str}</p>
                    </div>
                    <div className='myRating dataInCircle'>
                        <ToplistRatingIcon className="invertable-icon" />
                        <p>{this.props.album.my_rating}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default withRouter(AlbumGridElement)

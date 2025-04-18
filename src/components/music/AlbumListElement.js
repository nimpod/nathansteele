import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom';
import { ReactComponent as ToplistPosIcon } from "../../icons/toplistPos.svg";
import { ReactComponent as ToplistRatingIcon } from "../../icons/toplistRating.svg";
import { unicodeDecode } from '../../js/helpers.js';



class AlbumListElement extends Component {
    render() {
        // console.log(this.props.album);

        let album_cover_url = ""
        let album_name = "";
        let artist_name = this.props.album.artist_name;
        let my_rating_nodp = "";
        let first_genre = "";
        let genres_text = "";
        let review_summary = "";

        album_name = (this.props.album.album_name_displayed !== undefined) ? this.props.album.album_name_displayed : this.props.album.album_name;

        // use custom album cover url if it exists...
        if (this.props.album.custom_cover_url !== undefined) {
            album_cover_url = this.props.album.custom_cover_url;
        }
        // use default posterUrl if I didnt specify one...
        if (this.props.album.custom_cover_url === undefined) {
            album_cover_url = this.props.album.album_cover_url;
        }

        // use English name if it exists...
        /*
        if (this.props.album.artist_name_English) {
            artist_name = this.props.album.artist_name_displayed;
        }
        if (this.props.album.artist_name_Japanese) {
            artist_name = this.props.album.artist_name_displayed;
        }*/

        // get rating without decimal place (so I can add it to the classname)
        if (this.props.album.my_rating_nodp !== undefined) {
            my_rating_nodp = this.props.album.my_rating_nodp;
        }

        // get 1st genre from genres list
        if (this.props.album.genres !== undefined) {
            if (this.props.album.genres.length > 0) {
                first_genre = this.props.album.genres[0];
            }
        }

        if (this.props.album.genres !== undefined) {
            if (this.props.album.genres.length > 0) {
                for (let i = 0; i < this.props.album.genres.length; i++) {
                    genres_text += this.props.album.genres[i] + ", ";
                }
            }
        }
        if (this.props.album.genres == undefined) {
            this.props.album.genres = [""];
        }

        if (this.props.album.my_review !== undefined) {
            let my_review = this.props.album.my_review;
            let search_begin = 'review-summary\"><p>';
            let search_end = '</p>';
            let review_exists = my_review.includes(search_begin);

            if (review_exists) {
                review_summary = my_review.split(search_begin)[1];
                review_summary = review_summary.split(search_end)[0];
                review_summary = unicodeDecode(review_summary);
            } else {
                review_summary = "Need to write a review for this awesome album...";
            }
        }

        // console.log(this.props);
        return(
            <Link id={`album-${this.props.album.position}`} to={'/music/' + this.props.album.review_id}>
                <div className='albumInfoContainer'>
                    <img className='albumCover' src={album_cover_url} alt="Album cover" loading='lazy'></img>

                    <div className='albumInfo'>
                        <div className='albumInfoHeader'>
                            <div className='albumName'>
                                {/* Pos of album for mobile view */}
                                <p className='myPosition-mobileView'>{this.props.album.position}.</p>

                                {/* Album name */}
                                <p className='albumNameText'>{album_name}</p>
                                {this.props.album.album_name !== undefined && this.props.album.album_name_English == undefined ? (
                                    <p className='artistNameText'>{this.props.album.album_name_displayed}</p>
                                ) : (
                                    <div className='artistName_inOtherLanguage'>
                                        <p className='artistNameText'>{this.props.album.album_name_English}</p>
                                        <p className='artistNameText_inOtherLanguage'>{this.props.album.album_name}</p>
                                    </div>
                                )}

                                {/* Artist name 
                                <p className='artistNameText'>{artist_name}</p>*/}
                                {this.props.album.artist_name !== undefined && this.props.album.artist_name_English == undefined ? (
                                    <p className='artistNameText'>{this.props.album.artist_name}</p>
                                ) : (
                                    <div className='artistName_inOtherLanguage'>
                                        <p className='artistNameText'>{this.props.album.artist_name_English}</p>
                                        <p className='artistNameText_inOtherLanguage'>{this.props.album.artist_name}</p>
                                    </div>
                                )}

                                {/* Year */}
                                <p className='albumYearText'>{this.props.album.year_of_release}</p>

                                {/* Genres */}
                                <div className='genres list-of-tags'>
                                    {this.props.album.genres.map(g => {
                                        return <span className='genre-tag' key={g}>
                                            {g}
                                        </span>
                                    })}
                                </div>
                            </div>
                            <div className='albumRatingInfo'>
                                <p className='myPosition'>{this.props.album.position_str}</p>
                                <p className={`myRating r${this.props.album.my_rating_nodp}`}>{this.props.album.my_rating_1dp}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='review-summary'>{review_summary}</p>

            </Link>
        )
    }
}

export default withRouter(AlbumListElement)

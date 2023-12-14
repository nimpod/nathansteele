/**
 * Display a film from my toplist as a grid
 * (i.e. just poster)
 */

import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter, Link } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { get_value_of_CSS_variable, get_film_review_id } from '../../js/helpers.js';
import PosterImage from './PosterImage.js';


class FilmsToplistGridElement extends Component {
    state = {
        __poster_has_loaded: false,
        __is_all_loaded: false,
        __loaded_images_counter: 0
    }

    update_loading = () => {
        // this.setState({__poster_has_loaded: true})
        if (this.state.__loaded_images_counter + 1 == this.props.poster_urls.length) {
            this.setState({__is_all_loaded: true})
        }
        this.setState(prevState => prevState + 1)
    }

    render() {
        return (
            <div className='films-toplist-item'>
                <Link to={'/films/' + this.props.review_id}>
                    <PosterImage 
                        key={this.props.poster_url}
                        src={this.props.poster_url}
                        index={this.props.index}
                        isCurrentlyLoading={!this.state.__is_all_loaded}
                        onLoad={this.update_loading}
                    />
                    <div className='film-details'>
                        <p>{this.props.title}</p>
                        <div className='film-dataContainer myData'>
                            <span className='film-myPos' title='Position in my toplist'>#{this.props.film.position}</span>
                            <span className='film-myRating' title='My rating (decimal rating out of 10.0)'>{this.props.film.my_rating}</span>
                            <span className={`film-imdbDiffScore ${this.props.diff_score_classname}`} title='Difference between my rating and IMDb avg rating'>
                                {this.props.diff_score_str}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default withRouter(FilmsToplistGridElement)

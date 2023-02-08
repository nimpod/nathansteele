import React, {Component, useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import FilmsSubmenu from './FilmsSubmenu';
import TopFilmsList from './TopFilmsList';
import TopFilmsGridElement from './TopFilmsGridElement';
import FilmsJsonList from './reviews-allData.json';
import Films from './Films';

let reversedList = FilmsJsonList.reverse()


class PageFavouriteFilmsList extends Component {

    /**
     * Constructor...
     * @param {} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            films: reversedList,
            displayedReviewImdbId: reversedList[FilmsJsonList.length-1].imdbFilmId
        }
    }

    clickedGridElement = (imdbIdOfGridElementClicked) => {
        this.setState({
            displayedReviewImdbId: imdbIdOfGridElementClicked
        });
    }


    render() {
        let copyOfThis = this;

        return(
            <div className='page-wrapper favourite-films-list-page'>
                {/*
                <FilmsSubmenu />
                */}
                <div className='section-inner'>
                    <div className='review-displayed-container'>
                        {this.state.films.map(function(film, index) {
                            if (film.imdbFilmId == copyOfThis.state.displayedReviewImdbId) {
                                let posterUrl = film.posters[0] == "" ? film.posters[1] : film.posters[0]
                                return <div className='review-displayed'>
                                    <div className='review-header'>
                                        <picture className='filmPoster'>
                                            <img height='250' src={posterUrl} />
                                        </picture>
                                        <div className='filmDetails'>
                                            <div className='filmTitleContainer'>
                                                <span className='filmTitle' title='Film title'>{film.title}</span>
                                            </div>
                                            <div className='filmYear' title='Year of release'>
                                                {film.year}
                                            </div>
                                            <div className='filmDirectors' title='Directors'>
                                                {film.directors}
                                            </div>
                                            <div className='filmDuration' title='Duration in minutes'>
                                                {film.duration} mins
                                            </div>
                                            <div className='filmLanguage' title='Original language'>
                                                {film.language}
                                            </div>
                                            <div className='filmGenres' title='Genres'>
                                                {film.genres.map(genre => {
                                                    return <div className='genre-tag'>{genre}</div>
                                                })}
                                            </div>
                                            <div className='filmLinks'>
                                                <a className='filmImdbLink' href={film.urlLetterboxd}>IMDb</a>
                                                <a className='filmLetterboxdLink' href={film.urlImdb}>Letterboxd</a>
                                            </div>
                                            <div className='filmMyRating' title='My rating'>
                                                {film.myRating} / 10
                                            </div>
                                            <div className='filmPosition' title='Position in my list'>
                                                #{film.position} in my list
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                    <div className='top-films-grid'>
                        {
                            this.state.films.map((f) => (
                                <TopFilmsGridElement
                                    clickedGridElement={this.clickedGridElement}
                                    film={f}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default PageFavouriteFilmsList
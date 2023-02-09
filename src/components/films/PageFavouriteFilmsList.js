import React, {Component, useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import FilmsSubmenu from './FilmsSubmenu';
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
        
        let gridItems = document.getElementsByClassName('film-grid-element');
        for (const item of gridItems) {
            item.classList.remove('active');
        }

        let gridItemClicked = document.querySelector('div#grid-element-' + imdbIdOfGridElementClicked + '.film-grid-element');
        gridItemClicked.classList.toggle('active');
    }

    /**
     * 
     */
    getListOfGenres() {
        const genres = new Set();

        // store each tag category once...
        this.state.films.map((f => {
            // console.log('DEBUGGING: ', p.tags);
            f.genres.map((f => {
                genres.add(f);
            }));
        }));

        return genres;
    }

    /**
     * 
     */
    componentDidMount() {
        let topFilmsGrid = document.querySelector('#top-films-grid');
        if (topFilmsGrid !== null) {
            topFilmsGrid.scrollIntoView(false);
        }
    }

    render() {
        let copyOfThis = this;
        let listOfGenres = Array.from(this.getListOfGenres());

        // sort by date...
        let topFilmsList = Array.from(this.props.films);
        console.log(topFilmsList);

        return(
            <div className='page-wrapper favourite-films-list-page'>
                {/*
                <FilmsSubmenu />
                */}
                <div className='section-inner'>
                    <div className='review-displayed-container'>
                        {this.state.films.map(function(film, index) {
                            if (film.imdbFilmId == copyOfThis.state.displayedReviewImdbId) {
                                return <div className='review-displayed'>
                                    <div className='filmTitle' title='Film title'>
                                        {film.title}
                                    </div>
                                    <div className='review-header'>
                                        <picture className='filmPoster'>
                                            <img src={film.urlPoster} />
                                        </picture>
                                        <div className='filmDetails'>
                                            <div className='filmYear' title='Year of release'>
                                                {film.year}
                                            </div>
                                            <div className='filmDirectors' title='Directors'>
                                                {film.directors.map(director => {
                                                    return <div className='director-tag'>{director}</div>
                                                })}
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
                                                <a className='filmImdbLink' href={film.urlImdb}>IMDb</a>
                                                <a className='filmLetterboxdLink' href={film.urlLetterboxd}>Letterboxd</a>
                                            </div>
                                            <div className='filmMyRating' title='My rating'>
                                                {film.myRating} / 10
                                            </div>
                                            <div className='filmPosition' title='Position in my list'>
                                                #{film.position} in my list
                                            </div>
                                        </div>
                                    </div>
                                    <div className='review-my-tags'>
                                        {film.tags.map(tag => {
                                            return <div className='my-tag'>{tag}</div>
                                        })}
                                    </div>
                                    <div className='review-content-container' dangerouslySetInnerHTML={{__html: film.myReview}}>
                                        
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                    <div className='top-films-grid'>
                        <div className='top-films-grid-controls'>
                            <span className='top-films-grid-controls-title'>My favourite films</span>
                            <div className='filter-container'>
                                <span>Genres</span>
                                <div className='list-of-genres'>
                                {
                                    listOfGenres.map((g => {
                                        return <div className="genre">
                                            <span className={g}>{g}</span>
                                        </div>
                                    }))
                                }
                                </div>
                            </div>
                            <div className='filter-container'>
                                <span>Year</span>
                                <div className='list-of-years'>

                                </div>
                            </div>
                            <div className='filter-container'>
                                <span>Language</span>
                                <div className='list-of-languages'>

                                </div>
                            </div>
                        </div>
                        <div id='top-films-grid'>
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
            </div>
        )
    }
}


/**
 * [function: Connect this React component to the Redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        films: state.filmReviews
    }
}

export default connect(mapStateToProps)(PageFavouriteFilmsList)
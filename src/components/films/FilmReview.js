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
import FilmReviewHeader from './FilmReviewHeader';
import { filmReviewsSorted } from './Films.js';


class FilmReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmReviews: [],
            displayedReviewId: ""
        }
    }

    /**
     * Function to collate a list of all genres (no duplicates!)
     */
    getListOfGenres(films) {
        const genresList = new Set();

        // store each tag category once...
        films.map((f => {
            // console.log('DEBUGGING: ', p.tags);
            f.genres.map((f => {
                genresList.add(f);
            }));
        }));

        return Array.from(genresList);
    }

    
    /**
     * Function to collate a list of all years (no duplicates!)
     */
    getListOfYears() {

    }

    /**
     * Function to collate a list of all languages (no duplicates!)
     * @param {*} films 
     * @returns 
     */
    getListOfLanguages(films) {
        const languagesList = new Set();

        // store each tag category once...
        films.map((f => {
            // console.log('DEBUGGING: ', p.tags);
            f.genres.map((f => {
                languagesList.add(f);
            }));
        }));

        return Array.from(languagesList);
    }

    /**
     * Click handler when grid item clicked
     * @param {} idOfFilmClicked
     */
    clickedGridElement = (idOfFilmClicked) => {
        let gridItems = document.getElementsByClassName('film-grid-element');
        for (const item of gridItems) {
            item.classList.remove('active');
        }
        let gridItemClicked = document.querySelector('#grid-element-' + idOfFilmClicked + '.film-grid-element');
        gridItemClicked.classList.toggle('active');
    }

    componentDidMount() {
        let topFilmsGrid = document.querySelector('#top-films-list');
        if (topFilmsGrid !== null) {
            let rowHeight = 180;
            let numOfFilmsPerRow = 3;
            let pos = this.props.film.position;
            let numOfFilms = this.props.filmReviews.length;
            let rowNum = Math.floor((numOfFilms - pos) / numOfFilmsPerRow);

            if (pos <= numOfFilms && pos >= numOfFilms-(numOfFilmsPerRow-1)) {
                // Base case: we are on the first row...
                rowNum = 0;
            }

            let amountToMove = (rowHeight * rowNum);
            topFilmsGrid.scrollTop = amountToMove;
        }
    }

    render() {
        // get list of genres...
        let listOfGenres = this.getListOfGenres(filmReviewsSorted);

        return(
            <div className='page-wrapper favourite-films-page'>
                <div className='section-inner'>
                    <div className='review-displayed-container'>
                        <FilmReviewHeader 
                            film={this.props.film}
                        />
                    </div>
                    <div className='top-films-grid-container'>
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
                        <div id='top-films-list'>
                            {filmReviewsSorted.map(f => {
                                return <TopFilmsGridElement 
                                    film={f}
                                    filmCurrentlyDisplayed={this.props.film}
                                    filmsList={filmReviewsSorted}
                                    clickedGridElement={this.clickedGridElement}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * This function finds the correct blog post from the redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.film_id;     // the id of the post being displayed in the UI
    return {
        film: state.filmReviews.find(film => film.letterboxdFilmId === id),  // get the actual post data from the redux data store
        filmReviews: state.filmReviews  // get films
    }
}


export default connect(mapStateToProps)(FilmReview)
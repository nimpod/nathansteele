import React, {Component, useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as ShowGridIcon } from "../../icons/showGrid.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import FilmReviewHeader from './FilmReviewHeader';
import { hideItemWhenUserClicksOutsideOfItem } from '../../js/helpers'


class FilmReview extends Component {

    /**
     * Constructor
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            displayedReviewId: ""
        }
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
        // ensure no grid elements have .active class
        let gridItems = document.getElementsByClassName('#top-films-list film-grid-element');
        for (const item of gridItems) {
            item.classList.remove('active');
        }

        // add .active class from currently selected grid element
        let gridItemClicked = document.querySelector('#grid-element-' + idOfFilmClicked + '.film-grid-element');
        if (!gridItemClicked.classList.contains('active')) {
            gridItemClicked.classList.add('active')
        }
    }

    /**
     * Based on the film the user selected, move the #top-films-list to the row that particular film is on...
     */
    scrollToDisplayedFilm() {
        let topFilmsGrid = document.querySelector('#top-films-list');
        if (topFilmsGrid !== null) {
            let rowHeight = 179;
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

    /**
     * 
     */
    componentDidMount() {        
        // scroll to position of currently displayed film...
        // this.scrollToDisplayedFilm();
    }

    /**
     * Function to allow user to open and close the mobile view of the navigation menu
     */
    toggleGrid() {
        // toggle the 'active' class on the grid...
        document.getElementsByClassName('top-films-grid-container')[0].classList.toggle('active');
    }

    render() {
        console.log(this.props);
        
        return(
            <div className='page-wrapper favourite-films-page'>
                <div className='section-inner'>
                    <div className='toggle-topFilmsGridContainer-btn' onClick={this.toggleGrid}>
                        <ShowGridIcon className='invertable-icon' />
                    </div>
                    <div className='review-displayed-container'>
                        <FilmReviewHeader film={this.props.film} />
                    </div>
                    
                    {/*}
                    <div className='top-films-grid-container active'>
                        <div className='top-films-grid-controls'>
                            <span className='top-films-grid-controls-title'>My favourite films</span>
                            <div className='filter-container'>
                                <span>Genres</span>
                                <div className='list-of-genres'>
                                
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
                    */}
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
    }
}


export default connect(mapStateToProps)(FilmReview)
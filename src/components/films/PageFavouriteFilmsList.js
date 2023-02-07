import React, {Component, useState, useEffect} from 'react';
import { connect }  from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import FilmsSubmenu from './FilmsSubmenu';
import TopFilmsListElement from './TopFilmsListElement';
import TopFilmsList from './TopFilmsList';
import FilmsJsonList from './reviews-allData.json';


class PageFavouriteFilmsList extends Component {
    render() {
        console.log(FilmsJsonList);
        return(
            <div className='page-wrapper filmspage favourite-films'>
                <FilmsSubmenu />
                <div className='section-inner'>
                 <div className='container-intro'>
                        <h3 className='page-title'>My favourite films</h3>
                        <p className='page-text-small'>In order of 'best' to 'not-best-but-still-amazing' here is my official top 200 films!</p>

                        <ul className='favourite-films-list'>
                        {
                            FilmsJsonList.map((f) => (
                                <TopFilmsListElement 
                                    film={f}
                                />
                        ))}
                        </ul>
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
        films: state.films
    }
}

export default connect(mapStateToProps)(PageFavouriteFilmsList)

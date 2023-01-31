import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import FilmsSubmenu from './FilmsSubmenu';


class PageFavouriteFilmsList extends Component {
    render() {
        return(
            <div className='page-wrapper filmspage favourite-films'>
                <FilmsSubmenu />
                <div className='section-inner'>
                 <div className='container-intro'>
                        <h3 className='page-title'>My favourite films</h3>
                        <p className='page-text-small'>In order of 'best' to 'not-best-but-still-amazing' here is my official top 200 films!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PageFavouriteFilmsList)

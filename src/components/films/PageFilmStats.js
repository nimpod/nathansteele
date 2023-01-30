import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import FilmsSubmenu from './FilmsSubmenu';

class PageFilmStats extends Component {
    render() {
        return(
            <div className='page-wrapper filmspage film-stats'>
                <FilmsSubmenu />
                <div className='section-inner'>
                    <div className='container-intro'>
                        <h3 className='page-title'>Stats</h3>
                        <p className='page-text-small'>insert interesting analysis of my ratings...</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PageFilmStats)

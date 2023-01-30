import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";

class FilmsSumenu extends Component {

    clickedSubmenuItem = (e) => {
        console.log(e.target);
        let anchorTag = e.target;
        let spanTag = e.target.childNodes[0];

        if (e.target.tagName == "SPAN") {
            anchorTag = e.target.parentElement;
            spanTag = e.target;
        }
        
        anchorTag.classList.toggle('active');
    }

    render() {
        return(
            <div className="sidebar-menu">
                <div className='films-submenu'>
                    <NavLink to="/films/favourite_films" className='navlink' onClick={this.clickedSubmenuItem}>
                        <span>Top 200</span>
                    </NavLink>

                    <NavLink to="/films/film_log" className='navlink' onClick={this.clickedSubmenuItem}>
                        <span>Film log</span>
                    </NavLink>

                    <NavLink to="/films/film_stats" className='navlink' onClick={this.clickedSubmenuItem}>
                        <span>Stats</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default withRouter(FilmsSumenu)

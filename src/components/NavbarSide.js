import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from "../icons/logoNew.svg";
import { ReactComponent as DarkThemeIcon } from "../icons/moon.svg";
import { ReactComponent as LightThemeIcon } from "../icons/sun.svg";
import { ReactComponent as ThreeDotsIcon } from "../icons/threeDots.svg";
import { ReactComponent as HamburgerMenuIcon } from "../icons/hamburgerMenu.svg";


class NavbarSide extends Component {

    componentDidMount() {
        console.log('in navbar side');
    }

    /**
     * content rendered to page
     */
    render() {
        return (
            <aside id="nav-side">
                <div className="website-logo-container">                            
                    <NavLink to="/" className="navlink website-logo">
                        <Logo className="logo" />
                    </NavLink>
                </div>
                <div class="sidebar-menu">

                </div>
            </aside>
        )
    }
}

export default withRouter(NavbarSide)

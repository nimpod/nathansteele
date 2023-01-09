import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from "../icons/logoNew.svg";
import { ReactComponent as DarkThemeIcon } from "../icons/moon.svg";
import { ReactComponent as LightThemeIcon } from "../icons/sun.svg";
import { ReactComponent as ThreeDotsIcon } from "../icons/threeDots.svg";
import { ReactComponent as HamburgerMenuIcon } from "../icons/hamburgerMenu.svg";


class NavbarTop extends Component {
    
    /**
     * when the user is not on the homepage, the 'About' and 'Projects' navbar buttons will get redirected to 'index.html'
     */
    clickedPortfolioNavbarItem = () => {
        var hostname = window.location.hostname;
        var path = window.location.pathname;
        var page = path.split('/').pop();
        console.log(hostname, path, page);

        var navbarItems = document.getElementsByClassName('navlink');
        for (var i = 0; i < navbarItems.length; i++) {
            navbarItems[i].classList.remove('active');
        }
        
        // Force reroute to homepage, on localhost
        if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "") {
            if (page !== '' || page !== '/') {
                console.log('going to homepage');
                this.props.history.push('/');
                console.log("arrived at homepage?");
            }
        }

        // Force reroute to homepage, on deployed website
        else if (page !== "index.html") {
            console.log("is index");
            this.props.history.push('/');
            console.log("arrived at homepage?")
        }
    }

    /**
     * Event handler to switch between themes
     */
    switchTheme() {
        let dataTheme = document.documentElement.getAttribute('data-theme');
        let darkThemeIcon = document.documentElement.getElementsByClassName('inline-svg dark')[0];
        let lightThemeIcon = document.documentElement.getElementsByClassName('inline-svg light')[0];

        // changing from light to dark
        if (dataTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkThemeIcon.setAttribute('hidden', true);
            lightThemeIcon.removeAttribute('hidden');
        }
        
        // changing from dark to light
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            darkThemeIcon.removeAttribute('hidden');
            lightThemeIcon.setAttribute('hidden', true);
        }
    }

    /**
     * Function to allow user to open and close the mobile view of the navigation menu
     */
    toggleMenu() {
        document.getElementById('nav-top').classList.toggle('active');
    }

    /**
     * Component did mount function
     */
    componentDidMount() {
        let nav = document.getElementById("nav-top");
        let lastScrollTop = 0;

        if (nav !== null) {
            window.addEventListener('scroll', function(e) {
                var st = window.pageYOffset || document.documentElement.scrollTop;
                // console.log('DEBUGGING: ', st, lastScrollTop);
                if (st > lastScrollTop) {
                  nav.classList.add('slideOutDown');
                  nav.classList.remove('slideInUp');
                } else {
                  nav.classList.add('slideInUp');
                  nav.classList.remove('slideOutDown');
                }
                lastScrollTop = st <= 0 ? 0 : st;
              })
        }
    }

    /**
     * content rendered to page
     */
    render() {
        return (
            <header id="nav-top" className="animated faster slideInUp">
                <div className="nav-left">
                    <nav className="website-links">
                        <NavLink to="/aboutme" className="navlink">
                            <span>About me</span>
                        </NavLink>
                        <NavLink to="/films" className="navlink">
                            <span>Films</span>
                        </NavLink>
                        <NavLink to="/music" className="navlink">
                            <span>Music</span>
                        </NavLink>
                        <NavLink to="/art" className="navlink">
                            <span>Art</span>
                        </NavLink>
                        <NavLink to="/blog" className="navlink">
                            <span>Blog</span>
                        </NavLink>
                        <NavLink to="/university" className="navlink">
                            <span>University</span>
                        </NavLink>
                        <NavLink to="/portfolio" className="navlink">
                            <span>Portfolio</span>
                        </NavLink>
                        <NavLink to="/notes" className="navlink">
                            <span>Notes</span>
                        </NavLink>
                    </nav>
                </div>
                
                <div className="nav-right">
                    <div className="theme-toggle inline-svg-wrapper" onClick={this.switchTheme} aria-label="Click to enable dark mode" title="Click to enable dark mode7">
                        <span className="inline-svg dark">
                            <DarkThemeIcon />
                        </span>
                        <span className="inline-svg light" hidden={true}>
                            <LightThemeIcon />
                        </span>
                    </div>
                    <div className="hamburger-menu inline-svg-wrapper" onClick={this.toggleMenu}>
                        <span className="inline-svg">
                            <HamburgerMenuIcon />
                        </span>
                    </div>
                </div>
            </header>
        )
    }
}

export default withRouter(NavbarTop)

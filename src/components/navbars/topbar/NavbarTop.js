import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { ReactComponent as Logo } from "../../../icons/logoNew.svg";
import { ReactComponent as HamburgerMenuIcon } from "../../../icons/hamburgerMenu.svg";
import { ReactComponent as DarkThemeIcon } from "../../../icons/moon.svg";
import { ReactComponent as LightThemeIcon } from "../../../icons/sun.svg";
import { ReactComponent as AboutMeIcon } from "../../../icons/navIconAboutMe.svg";
import { ReactComponent as FilmsIcon } from "../../../icons/navIconFilms.svg";
import { ReactComponent as MusicIcon } from "../../../icons/navIconMusic.svg";
import { ReactComponent as BlogIcon } from "../../../icons/navIconBlog.svg";
import { ReactComponent as ArtIcon } from "../../../icons/navIconArt.svg";

import { remove_class_from_item_when_user_clicks_outside_of_item } from '../../../js/helpers';



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
    switchTheme = (e) => {
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
        // toggle the 'active'  class on #nav-side...
        document.getElementById('nav-side').classList.toggle('active');

        // close collapsed menu if user clicks out of it...
        let toggleThemeButton = document.getElementsByClassName('hamburger-menu')[0];
        let itemToHide = document.getElementById('nav-side');

        window.addEventListener('click', function(mouseEvent) {
            remove_class_from_item_when_user_clicks_outside_of_item(itemToHide, toggleThemeButton, mouseEvent, 'active');
        });
    }

    /**
     * Component did mount function
     */
    componentDidMount() {
        // toggle navbar whilst scrolling in mobile view
        let nav = document.getElementById("nav-top");
        let lastScrollTop = 0;
        if (nav !== null) {
            window.addEventListener('scroll', function(e) {
                // only do this if current screen size is wide enough...
                if (this.window.innerWidth > 1000) {
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
                }
              })
        }

        /*
        // set navbar item icons when in mobile view...
        let navbarSpanTags = document.getElementsByClassName('mobile-view-title');
        let icons = ['🏠', '📽️', '🎵', '📚', '🏫', '👨‍💻', '📙'];
        ///let icons = ['▘', '▙', '▚', '▛', '▜', '▝', '▞'];
        for (let i = 0; i < navbarSpanTags.length; i++) {
            navbarSpanTags[i].innerHTML = icons[i];
        }

        // by default set the 'About me' button to be active...
        let navlinks = document.getElementsByClassName('navlink');
        // console.log(navlinks);
        //navlinks[1].classList.add('active');
        */
    }

    /**
     * content rendered to page
     */
    render() {
        return (
            <header id="nav-top" className="animated faster slideInUp">
                <div className="nav-left">
                    <nav className="website-links">

                        {/* LOGO */}
                        <div className="website-logo-container">
                            <NavLink to="/" className="navlink">
                                {/* <Logo className="logo" /> */}
                                <span>nathansteele.com</span>
                            </NavLink>
                        </div>
                        <div className="website-logo-container-mobileView">
                            <NavLink to="/" className="navlink">
                                {/* <Logo className="logo" /> */}
                                <span>NS.com</span>
                            </NavLink>
                        </div>

                        {/* BLOG */}
                        <NavLink to="/blog" title='Blog' className="navlink">
                            <span>Blog</span>
                            <span className='mobile-view-title'>Blog</span>
                        </NavLink>

                        {/* MUSIC */}
                        <NavLink to="/music" title='Music' className="navlink">
                            <span>Music</span>
                            <span className='mobile-view-title'>Music</span>
                        </NavLink>

                        {/* FILMS */}
                        <NavLink to="/films" title='Films' className="navlink">
                            <span>Films</span>
                            <span className='mobile-view-title'>Films</span>
                        </NavLink>
                        
                        {/* ART */}
                        <NavLink to="/art" title='Art' className="navlink">
                            <span>Art</span>
                            <span className='mobile-view-title'>Art</span>
                        </NavLink>
                    </nav>
                </div>
                
                <div className="nav-right">
                    <div className="theme-toggle inline-svg-wrapper" onClick={this.switchTheme} aria-label="Click to toggle theme" title="Click to toggle theme">
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

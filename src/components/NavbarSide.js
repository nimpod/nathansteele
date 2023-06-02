import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from "../icons/logoNew.svg";
import { ReactComponent as DarkThemeIcon } from "../icons/moon.svg";
import { ReactComponent as LightThemeIcon } from "../icons/sun.svg";
import { ReactComponent as AboutMeIcon } from "../icons/navIconAboutMe.svg";
import { ReactComponent as FilmsIcon } from "../icons/navIconFilms.svg";
import { ReactComponent as MusicIcon } from "../icons/navIconMusic.svg";
import { ReactComponent as BlogIcon } from "../icons/navIconBlog.svg";
import { ReactComponent as ArtIcon } from "../icons/navIconArt.svg";
import { ReactComponent as HamburgerMenuIcon } from "../icons/hamburgerMenu.svg";
import { hideItemWhenUserClicksOutsideOfItem } from '../js/helpers';

class NavbarSide extends Component {

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
        let classNameToToggle = 'active';

        window.addEventListener('click', function(mouseEvent) {
            hideItemWhenUserClicksOutsideOfItem(itemToHide, toggleThemeButton, mouseEvent, classNameToToggle);
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

        // set navbar item icons when in mobile view...
        let navbarSpanTags = document.getElementsByClassName('mobile-view-title');
        let icons = ['🏠', '📽️', '🎵', '📚', '🏫', '👨‍💻', '📙'];
        ///let icons = ['▘', '▙', '▚', '▛', '▜', '▝', '▞'];
        for (let i = 0; i < navbarSpanTags.length; i++) {
            navbarSpanTags[i].innerHTML = icons[i];
        }

        // by default set the 'About me' button to be active...
        let navlinks = document.getElementsByClassName('navlink');
        //console.log(navlinks);
        //navlinks[1].classList.add('active');
    }

    
    /**
     * Onclick event listener for navbar buttons
     * @param {*} e 
     */
    clickedNavbarItem = (e) => {
        // cheeky way to make navigation look normal again...
        // removes the .active from the 'About me' button (if its even there), if we are clicking onto a different button...
        let navlinks = document.getElementsByClassName('navlink');
        if (navlinks[1].classList.contains('active')) {
            navlinks[1].classList.remove('active');
        }
    }


    /**
     * content rendered to page
     */
    render() {
        return (
            <aside id="nav-side">
                <nav className='website-links'>
                    <div className="website-logo-container">                            
                        <NavLink to="/aboutme" className="navlink website-logo">
                            <Logo className="logo" />
                        </NavLink>
                    </div>
                    <NavLink to="/aboutme" title='About Me' className="navlink">
                        <AboutMeIcon />
                        <span>About</span>
                        <span className='mobile-view-title'>About</span>
                    </NavLink>
                    <NavLink to="/films" title='Films' className="navlink" onClick={this.clickedNavbarItem}>
                        <FilmsIcon />
                        <span>Films</span>
                        <span className='mobile-view-title'>Films</span>
                    </NavLink>
                    <NavLink to="/music" title='Music' className="navlink" onClick={this.clickedNavbarItem}>
                        <MusicIcon />
                        <span>Music</span>
                        <span className='mobile-view-title'>Music</span>
                    </NavLink>
                    <NavLink to="/blog" title='Blog' className="navlink" onClick={this.clickedNavbarItem}>
                        <BlogIcon />
                        <span>Blog</span>
                        <span className='mobile-view-title'>Blog</span>
                    </NavLink>
                    <NavLink to="/art" title='Art' className="navlink" onClick={this.clickedNavbarItem}>
                        <ArtIcon />
                        <span>Art</span>
                        <span className='mobile-view-title'>Art</span>
                    </NavLink>
                </nav>
                <div className="theme-toggle inline-svg-wrapper" onClick={this.switchTheme} aria-label="Click to toggle theme" title="Click to toggle theme">
                    <span className="inline-svg dark">
                        <DarkThemeIcon />
                    </span>
                    <span className="inline-svg light" hidden={true}>
                        <LightThemeIcon />
                    </span>
                </div>
            </aside>
        )
    }
}

export default withRouter(NavbarSide)

import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as DarkThemeIcon } from "../icons/moon.svg";
import { ReactComponent as LightThemeIcon } from "../icons/sun.svg";
import { ReactComponent as ThreeDotsIcon } from "../icons/threeDots.svg";
import { ReactComponent as HamburgerMenuIcon } from "../icons/hamburgerMenu.svg";


class Navbar extends Component {
    
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

    /* allows user to open and close the mobile view of the navigation menu */
    toggleMenu() {
        document.getElementById('nav').classList.toggle('active');
    }

    componentDidMount() {
        let nav = document.getElementById("nav");
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
            <header id="nav" className="animated faster slideInUp">
                <div className="nav-wrapper section-inner">
                    <div className="nav-left">
                        <div className="website-logo-container">                            
                            <NavLink to="/" className="navlink">
                                {/* <Logo className="logo" /> */}
                                /nimpod.github.io
                            </NavLink>
                        </div>
                        <nav className="website-links">
                             <Link to="projects" spy={true} smooth={true} offset={0} duration={400} onClick={this.clickedPortfolioNavbarItem} className="navlink">Projects</Link>
                            <NavLink to="/blog" onClick={this.clickedPortfolioNavbarItem} className="navlink">Blog</NavLink>
                            <NavLink to="/university" onClick={this.clickedPortfolioNavbarItem} className="navlink">University</NavLink>
                            <NavLink to="/notes" onClick={this.clickedPortfolioNavbarItem} className="navlink">Notes</NavLink>
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
                </div>
            </header>
        )
    }
}

export default withRouter(Navbar)

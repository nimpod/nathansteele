import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as DarkThemeIcon } from "../icons/moon.svg";
import { ReactComponent as LightThemeIcon } from "../icons/sun.svg";
import { ReactComponent as ThreeDotsIcon } from "../icons/threeDots.svg";


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
        document.documentElement.getElementsByClassName('my-navbar')[0].classList.toggle('active');
    }

    /**
     * content rendered to page
     */
    render() {
        return (
            <div className="my-navbar">
                <ul>
                    <NavLink to="/" className="navlink logo-container">
                        <Logo className="logo" />
                    </NavLink>
                    <div className="left-nav">
                        <Link to="about" spy={true} smooth={true} offset={0} duration={400} onClick={this.clickedPortfolioNavbarItem} className="navlink">
                            <li>About</li>
                        </Link>

                        <span className="delimiter">/</span>

                        <Link to="projects" spy={true} smooth={true} offset={0} duration={400} onClick={this.clickedPortfolioNavbarItem} className="navlink">
                            <li>Projects</li>
                        </Link>

                        <span className="delimiter">/</span>

                        <NavLink to="/blog" onClick={this.clickedPortfolioNavbarItem} className="navlink">
                            <li>Blog</li>
                        </NavLink>

                        <span className="delimiter">/</span>

                        <NavLink to="/university" onClick={this.clickedPortfolioNavbarItem} className="navlink">
                            <li>University</li>
                        </NavLink>

                        <span className="delimiter">/</span>

                        <NavLink to="/notes" onClick={this.clickedPortfolioNavbarItem} className="navlink">
                            <li>Notes</li>
                        </NavLink>
                    </div>

                    <div id="menu-toggler" data-class="menu-active" class="hamburger-menu-icon" onClick={this.toggleMenu}>
                        <span class="hamburger-line hamburger-line-top"></span>
                        <span class="hamburger-line hamburger-line-middle"></span>
                        <span class="hamburger-line hamburger-line-bottom"></span>
                    </div>

                    <div className="theme-toggle" onClick={this.switchTheme} aria-label="Click to enable dark mode" title="Click to enable dark mode7">
                        <span className="inline-svg dark">
                            <DarkThemeIcon />
                        </span>
                        <span className="inline-svg light" hidden="true">
                            <LightThemeIcon />
                        </span>
                    </div>
                </ul>
            </div>
        )
    }
}

export default withRouter(Navbar)

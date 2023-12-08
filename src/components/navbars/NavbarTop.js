import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as HamburgerMenuIcon } from "../../icons/hamburgerMenu.svg";
import { remove_class_from_item_when_user_clicks_outside_of_item } from '../../js/helpers';


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
     * content rendered to page
     */
    render() {
        return (
            <header id="nav-top">
                <div className="nav-right">
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

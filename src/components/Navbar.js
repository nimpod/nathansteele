import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from "../icons/logo.svg";


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

        if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "") {
            console.log('is localhost');

            if (page !== '') {
                console.log('going to homepage');
                this.props.history.push('/');
                console.log("arrived at homepage?");
            }
        }
        else if (page !== "index.html") {
            console.log("is index");
            this.props.history.push('/');
            console.log("arrived at homepage?")
        }
    }

    /**
     * content rendered to page
     */
    render() {
        return (
            <nav>
                <ul>
                    <NavLink to="/" className="navlink">
                        <Logo className="logo" />
                    </NavLink>

                    <Link to="about" spy={true} smooth={true} offset={0} duration={400} onClick={this.clickedPortfolioNavbarItem} className="navlink">
                        <li>About</li>
                    </Link>

                    <span class="delimiter">/</span>

                    <Link to="projects" spy={true} smooth={true} offset={0} duration={400} onClick={this.clickedPortfolioNavbarItem} className="navlink">
                        <li>Projects</li>
                    </Link>

                    <span class="delimiter">/</span>

                    <NavLink to="/blog" onClick={this.clickedPortfolioNavbarItem} className="navlink">
                        <li>Blog</li>
                    </NavLink>

                    <span class="delimiter">/</span>

                    <NavLink to="/university" onClick={this.clickedPortfolioNavbarItem} className="navlink">
                        <li>University</li>
                    </NavLink>

                    <span class="delimiter">/</span>

                    <NavLink to="/notes" onClick={this.clickedPortfolioNavbarItem} className="navlink">
                        <li>Notes</li>
                    </NavLink>
                </ul>
            </nav>
        )
    }
}

export default withRouter(Navbar)

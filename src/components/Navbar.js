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

    /* This function adds the active class to the sidebar */
    activateSidebar = () => {
        let sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.classList.add('active');
    }

    /* This function removes the active class to the sidebar */
    deactivateSidebar = () => {
        let sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.classList.remove('active');
    }

    /**
     * content rendered to page
     */
    render() {
        return (
            <header className="navbar">
                <ul className="left-navbar" onMouseLeave={this.deactivateSidebar}>
                    <NavLink to="/">
                        <Logo className="logo" onMouseOver={this.activateSidebar} />
                    </NavLink>
                    <div className="sidebar">
                        <ul>
                            {/*
                            <NavLink to="/"><li>Nathan Steele</li></NavLink>
                            <Link onClick={this.clickedPortfolioNavbarItem} to="about" spy={true} smooth={true} offset={0} duration={400}><li>About Me</li></Link>
                            <Link onClick={this.clickedPortfolioNavbarItem} to="projects" spy={true} smooth={true} offset={0} duration={400}><li>Projects</li></Link>
                            */}
                            <NavLink to="/university"><li>University</li></NavLink>
                            <NavLink to="/blog"><li>Blog</li></NavLink>
                            <NavLink to="/notes"><li>Notes</li></NavLink>
                        </ul>
                    </div>
                </ul>
            </header>
        )
    }
}

export default withRouter(Navbar)

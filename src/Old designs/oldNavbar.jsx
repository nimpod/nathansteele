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
            <header>
                <ul className="left-navbar" onMouseLeave={this.deactivateSidebar}>
                    <NavLink to="/">
                        <Logo className="logo" onMouseOver={this.activateSidebar} />
                    </NavLink>
                    <div className="sidebar">
                        <ul>
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

/*
.left-navbar {
  position: absolute;
  margin-top: 40px;
  margin-left: 20px;
  width: 70px;
  display: flex !important;
  flex-direction: column; 
  justify-content: space-between;
}

header .sidebar {
  background-color: var(--sidebar-bg);
  box-shadow: 0 1px 4px 0 rgba(68, 68, 150, 0.178);
  display: none;
  width: 150px;
  position: fixed;
  transition: opacity 200ms ease-out;
  opacity: 0;
  top: 60px;
  margin-left: 70px;
  margin-top: -45px;
}
header .sidebar.active {
  display: block;
  opacity: 1;
}

header .sidebar ul a {
  color: var(--header-text);
  font-weight: 700;
  display: block;
  padding: 7px 16px;
  margin: 0px 2px;
  list-style-type: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 250ms ease 0s;
  list-style-type: none;
  text-decoration: none;
  border: 1px dotted transparent;
}

header .sidebar ul a:hover {
  color: var(--header-btn-hover);
}
header .sidebar ul a:focus {
  color: var(--header-btn-focus);
  border: 1px dashed black;
  transition: border 300ms ease-in;
}
header .sidebar ul a.active {
  color: var(--header-btn-focus);
  border: 1px dashed black;
}


header .sidebar {
  background-color: var(--sidebar-bg);
  left: calc(var(--sidebar-width) * -1);
  width: var(--sidebar-width); 
  position: fixed;
  transition: 0.3s left;
  top: 0;
  bottom: 0;
}

header .sidebar ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

header .sidebar ul a {
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  border-radius: 0px;
}

#toggle {
    display: none;
  }
  
  #toggle:checked ~ .left-navbar {
    left: var(--sidebar-width);
  }
  
  #toggle:checked ~ .sidebar {
    left: 0;
  }
*/


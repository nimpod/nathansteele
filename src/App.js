import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// importing components for site
import ScrollToTop from './js/ScrollToTop';
import NavbarTop from './components/NavbarTop';
import NavbarSide from './components/NavbarSide';
import Portfolio from './components/Portfolio';

import Notes from './components/notes/Notes';

import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';

import University from './components/university/University';
import UniversityAssignment from './components/university/UniversityAssignment';

import CasioBasic from './components/notes/CasioBasic';

// import ParticlesMin from './js/particles.min.js'
// <script src="js/particles.min.js"></script>
// <script src='../node_modules/sal.js/dist/sal.js'></script>
// <script src='./js/smooth-scrolling.js'></script>
// <script src="./js/particles.min.js"></script>
// <script src="./js/app.js"></script>


export default class App extends Component {

  render() {
        return (
            <HashRouter>
                <div className="App">
                  <ScrollToTop />
                  <NavbarSide />
                  <NavbarTop />

                  <script src="https://code.jquery.com/jquery-3.3.1.js" type="text/javascript"></script>

                  <Switch>
                      <Route path='/' exact />
                      <Route path='/university' component={University} exact />
                      <Route path='/portfolio' component={Portfolio} exact />
                      <Route path='/blog' component={Blog} exact />
                      <Route path='/notes' component={Notes} exact />
                      <Route path='/blog/:post_id' component={BlogPost} />
                      <Route path='/university/:assignment_id' component={UniversityAssignment} />
                      <Route path='/notes/casio_basic' component={CasioBasic} />
                  </Switch>
                  <script src="./js/particles.min.js"></script>
                </div>
            </HashRouter>
        );
  }

}
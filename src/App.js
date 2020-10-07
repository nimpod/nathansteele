import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';

// importing components for site
import ScrollToTop from './js/ScrollToTop';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

import Notes from './components/Notes';

import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';

import University from './components/university/University';
import UniversityAssignment from './components/university/UniversityAssignment';
import UniversityAssignmentCard from './components/university/UniversityAssignmentCard';

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
                  <Navbar />

                  <script src="https://code.jquery.com/jquery-3.3.1.js" type="text/javascript"></script>
                
                  <Switch>
                      <Route path='/' component={Portfolio} exact />
                      <Route path='/university' component={University} exact />
                      <Route path='/blog' component={Blog} exact />
                      <Route path='/notes' component={Notes} />
                      <Route path='/blog/:post_id' component={BlogPost} />
                      <Route path='/university/:assignment_id' component={UniversityAssignment} />
                  </Switch>
                  <script src="./js/particles.min.js"></script>
                </div>
            </HashRouter>
        );
  }

}
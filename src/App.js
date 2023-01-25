import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// importing components for site
import ScrollToTop from './js/ScrollToTop';
import NavbarTop from './components/NavbarTop';
import NavbarSide from './components/NavbarSide';
import Portfolio from './components/Portfolio';

// About page
import AboutMe from './components/aboutme/AboutMe';

// Notes page
import Notes from './components/notes/Notes';
import CasioBasic from './components/notes/CasioBasic';

// Blog page
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';

// Uni page
import University from './components/university/University';
import UniversityAssignment from './components/university/UniversityAssignment';

// Films page
import Films from './components/films/Films';

// Music page
import Music from './components/music/Music';


import {Howl} from 'howler';


export default class App extends Component {
  soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true
    })
    sound.play();
  }
  render() {
        return (
            <HashRouter>
                <div className="App">
                  <ScrollToTop />
                  <NavbarSide />
                  <NavbarTop />

                  <script src="https://code.jquery.com/jquery-3.3.1.js" type="text/javascript"></script>

                  <Switch>
                      <Route path='/' component={AboutMe} exact />
                      <Route path='/aboutme' component={AboutMe} exact />
                      <Route path='/university' component={University} />
                      <Route path='/portfolio' component={Portfolio} />
                      <Route path='/blog' component={Blog} />
                      <Route path='/notes' component={Notes} />
                      <Route path='/blog/:post_id' component={BlogPost} />
                      <Route path='/films' component={Films} />
                      <Route path='/music' component={Music} />
                      <Route path='/university/:assignment_id' component={UniversityAssignment} />
                      <Route path='/notes/casio_basic' component={CasioBasic} />
                  </Switch>

                  <script src="./js/particles.min.js"></script>
                </div>
            </HashRouter>
        );
  }

}
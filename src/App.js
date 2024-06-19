import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// importing components for site
import ScrollToTop from './js/ScrollToTop';
import NavbarTop from './components/navbars/NavbarTop';
import NavbarSide from './components/navbars/NavbarSide';

// Portfolio page
import Portfolio from './components/portfolio/Portfolio';

// About page
import AboutMe from './components/aboutme/AboutMe';
import MessiahsHandbook from './components/messiahshandbook/MessiahsHandbook';

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
import FilmsReview from './components/films/FilmsReview';

// Music page
import Music from './components/music/Music';
import MusicReview from './components/music/MusicReview';


export default class App extends Component {
  render() {
        return (
            <HashRouter>
                <div className="App">
                  <ScrollToTop />
                  <NavbarTop />
                  <NavbarSide />

                  <script src="https://code.jquery.com/jquery-3.3.1.js" type="text/javascript"></script>
                  <script src="https://cdn.jsdelivr.net/pyodide/v0.23.2/full/pyodide.js"></script>

                  <Switch>
                      <Route path='/' component={AboutMe} exact />
                      <Route path='/aboutme' component={AboutMe} exact />
                      <Route path='/portfolio' component={Portfolio} exact />

                      <Route path='/blog' component={Blog} exact />
                      <Route path='/blog/:post_id' component={BlogPost} exact />

                      <Route path='/films' component={Films} exact />
                      <Route path='/films/:film_id' component={FilmsReview} exact />

                      <Route path='/music' component={Music} exact />
                      <Route path='/music/:album_id' component={MusicReview} exact />

                      <Route path='/university' component={University} exact />
                      <Route path='/university/:assignment_id' component={UniversityAssignment} exact />
                      
                      <Route path='/notes' component={Notes} exact />
                      <Route path='/notes/casio_basic' component={CasioBasic} exact />

                      <Route path='/messiahshandbook' component={MessiahsHandbook} exact />
                  </Switch>

                  <script src="./js/particles.min.js"></script>
                  <script src="./js/main.js"></script>
                </div>
            </HashRouter>
        );
  }

}
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

const particlesConig =
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": ["#e6007e", "#fed304", "#00bacc", "#78da55"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 15
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.15,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#323232",
      "opacity": 0.25,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

export default class App extends Component {

  render() {
        return (
            <HashRouter>
                <div className="App">
                    <ScrollToTop />
                    <Navbar />

                    <script src="https://code.jquery.com/jquery-3.3.1.js" type="text/javascript"></script>

                    <div id="particles-js">
                        <Particles params={particlesConig} />
                    </div>
                  
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
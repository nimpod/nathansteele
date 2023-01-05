import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../index.css';

import ProjectImageAssembly from '../img/assembly.png'
import ProjectImageMosaicsOfVideos from '../img/mosaics-of-videos.png'
import ProjectImageD3 from '../img/d3.PNG'
import ProjectImageBobomb from '../img/bobomb.jpg'
import ProjectImageFlappyBird from '../img/flappy_bird.png'
import ProjectImageFitbitDataAnalysis from '../img/fitbit-data-analysis.PNG'
import ProjectImageSpaceInvaders from '../img/spaceinvaders.png'
import ProjectImageWebDevUniProject from '../img/web-dev-thumbnail.PNG'
import ProjectImagePong from '../img/pc.jpg'
import Particles from 'react-particles-js';
import { getValueOfCSSVariable } from '../js/helpers'


/* particlesjs variables (defined in css) */
const PARTICLE_COUNT = getValueOfCSSVariable('--particle-count');
const PARTICLE_DENSITY = getValueOfCSSVariable('--particle-density');
const PARTICLE_OPACITY = getValueOfCSSVariable('--particle-opacity');
const PARTICLE_SIZE = getValueOfCSSVariable('--particle-size');
const PARTICLE_SPEED = getValueOfCSSVariable('--particle-speed');
const PARTICLE_COLOUR_1 = getValueOfCSSVariable('--particle-color-1');
const PARTICLE_COLOUR_2 = getValueOfCSSVariable('--particle-color-2');
const PARTICLE_COLOUR_3 = getValueOfCSSVariable('--particle-color-3');
const PARTICLE_COLOUR_4 = getValueOfCSSVariable('--particle-color-4');
const PARTICLE_LINE_COLOUR = getValueOfCSSVariable('--particle-line-color');
const LINE_COUNT = getValueOfCSSVariable('--line-count');
const LINE_OPACITY = getValueOfCSSVariable('--line-opacity');
const LINE_WIDTH = getValueOfCSSVariable('--line-width');
const LINKED_LINE_OPACITY = getValueOfCSSVariable('--linked-line-opacity');
const LINKED_LINE_RADIUS = getValueOfCSSVariable('--linked-line-radius')
const PARTICLES_TO_SPAWN_ON_PUSH = 30;
const PARTICLE_DIRECTION = "none";   /* "none", "bottom", "right", "left" */
const PARTICLE_TYPE = "circle";  /* "circle", "square", "triangle", "polygon" */

/*
    What do the custom attributes on Link mean? Those enable react-scroll animations. Do not fear future traveller, I am here to help you:
        onClick:        i am disappointed if you don't know this
        to:             the area to scroll to
        activeClass:    the 'active' class is added when element is reached
        spy:            make the Link selected when scroll is at its targets position
        smooth:         animate the scrolling
        offset:         scroll additional px
        duration:       time of the scroll animation
    https://www.npmjs.com/package/react-scroll
*/
const particlesConfig =
{
  "particles": {
    "number": {
      "value": PARTICLE_COUNT,
      "density": {
        "enable": true,
        "value_area": PARTICLE_DENSITY
      }
    },
    "color": {
      "value": [PARTICLE_COLOUR_1, PARTICLE_COLOUR_2, PARTICLE_COLOUR_3, PARTICLE_COLOUR_4]
    },
    "shape": {
      "type": PARTICLE_TYPE,
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 15
      }
    },
    "opacity": {
      "value": PARTICLE_OPACITY,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.15,
        "sync": false
      }
    },
    "size": {
      "value": PARTICLE_SIZE,
      "random": false,
      "anim": {
        "enable": true,
        "speed": PARTICLE_SPEED,
        "size_min": 0.15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": LINE_COUNT,
      "color": PARTICLE_LINE_COLOUR,
      "opacity": LINE_OPACITY,
      "width": LINE_WIDTH
    },
    "move": {
      "enable": true,
      "speed": PARTICLE_SPEED,
      "direction": PARTICLE_DIRECTION,
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": LINKED_LINE_RADIUS,
        "line_linked": {
          "opacity": LINKED_LINE_OPACITY
        }
      },
      "bubble": {
        "distance": 200,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 1
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": PARTICLES_TO_SPAWN_ON_PUSH
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


const Portfolio = (props) => {
    return (
        <div className="page-wrapper portfolio">
            {/*
            <div id="particles-js">
                <Particles params={particlesConfig} />
            </div>
            */}

            <section id="about">
                <p>Hi, I'm</p>
                <h1>Nathan Steele</h1>
                <p>I enjoy coding, creating digital experiences, and learning about the origins of life.</p>
                <p>Currently studying a BSc in Computer Science at Newcastle University.</p>
                <p>
                    I write <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={400}>code</Link>. 
                    I have a <NavLink to="/blog" className="navlink">blog</NavLink>. 
                    Sometimes I'm exploring the outside world on <a href='https://www.strava.com/athletes/45999759'>Strava</a>.
                    Other times I'm <a href='/'>drawing</a>.
                    I also review films on <a href='https://letterboxd.com/nbofni/'>Letterboxd</a>.
                </p>
                <div className="smooth-scroll-btn">
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={400}>
                        <i className="fa fa-angle-down"></i>
                    </Link>
                </div>
            </section>

            <section id="projects">
                <div className="projects-header">
                    <div className="smooth-scroll-btn">
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={400}>
                            <i className="fa fa-angle-up"></i>
                        </Link>
                    </div>
                    <h2>My Projects</h2>
                    <p>A glimpse of the projects I've been working on.</p>
                </div>
                <div className="projects-container">
                    <div className="project mosaics-of-videos">
                        <div className="image">
                            <a href="https://github.com/nimpod/mosaics-of-videos">
                                <img className="cropped" src={ProjectImageMosaicsOfVideos} alt="project thumbnail" />
                            </a>
                        </div>
                        <div className="proj-details">
                            <span className="proj-title">
                                <a href="https://github.com/nimpod/mosaics-of-videos">Mosaics of videos</a>
                            </span> <br />
                            <span className="proj-date">2019</span> <br /> <br />
                            <span className="proj-desc">Made a Python program that converts any image into a mosaic of frames from a movie</span>
                        </div>
                    </div>

                    <div className="project D3js">
                        <div className="image">
                            <a href="https://codepen.io/cozminski_katax/pen/ROGKQd">
                                <img className="cropped" src={ProjectImageD3}  alt="project thumbnail" />
                            </a>
                        </div>
                        <div className="proj-details">
                            <span className="proj-title">
                                <a href="https://codepen.io/cozminski_katax/pen/ROGKQd">Visualise data in D3</a>
                            </span> <br />
                            <span className="proj-date">2019</span> <br /> <br />
                            <span className="proj-desc">Data visualisation projects using the D3.js library</span>
                        </div>
                    </div>

                    <div className="project fire-escape">
                        <div className="image">
                            <a href="https://github.com/nimpod/super-mario-bros-minigame">
                                <img className="cropped" src={ProjectImageBobomb} alt="project thumbnail"  />
                            </a>
                        </div>
                        <div className="proj-details">
                            <span className="proj-title">
                                <a href="https://github.com/nimpod/super-mario-bros-minigame">Super Mario Bros minigame</a>
                            </span> <br />
                            <span className="proj-date">2019</span> <br /> <br />
                            <span className="proj-desc">Recreated the minigame 'Danger Bob-omb!' from Super Mario Bros using Pygame</span>
                        </div>
                    </div>

                    <div className="project flappy-bird-app">
                        <div className="image">
                            <a href="https://github.com/nimpod">
                                <img className="cropped" src={ProjectImageFlappyBird} alt="project thumbnail"  />
                            </a>
                        </div>
                        <div className="proj-details">
                            <span className="proj-title">
                                <a href="projects/space-invaders.html">Flappy Bird App</a>
                            </span> <br />
                            <span className="proj-date">2019</span> <br /> <br />
                            <span className="proj-desc">Recreated Flappy Bird as an Android app using Java.</span>
                        </div>
                    </div>

                    <div className="project fitbit-data-analysis">
                        <div className="image">
                            <a href="https://github.com/nimpod/fitbit-data-analysis" target="_blank">
                                <img className="cropped" src={ProjectImageFitbitDataAnalysis} alt="project thumbnail"  />
                            </a>
                        </div>
                        <div className="proj-details">
                            <span className="proj-title">
                                <a href="https://github.com/nimpod/fitbit-data-analysis" target="_blank">Fitbit Data Analysis</a>
                            </span> <br />
                            <span className="proj-date">2018</span> <br /> <br />
                            <span className="proj-desc">Extracted and produced various types of analysis on my Fitbit data. Programmed in Python, using Pandas and Numpy for data analysis.</span>
                        </div>
                    </div>

                    <div className="project space-invaders">
                        <div className="image">
                            <a href="https://github.com/nimpod/space-invaders">
                                <img className="cropped" src={ProjectImageSpaceInvaders} alt="project thumbnail"  />
                            </a>
                        </div>
                        <div className="proj-details">
                            <span className="proj-title">
                                <a href="https://github.com/nimpod/space-invaders">Space Invaders</a>
                            </span> <br />
                            <span className="proj-date">2018</span> <br /> <br />
                            <span className="proj-desc">I rebuilt space invaders in Java.</span>
                        </div>
                    </div>

                    <div className="project error-corrector">
                        <div className="image">
                            <a href="https://github.com/nimpod/decorruptor" target="_blank">
                                <img className="cropped" src={ProjectImageAssembly} alt="project thumbnail" />
                            </a>
                        </div>
                        <div className="proj-details">
                            <span className="proj-title">
                                <a href="https://github.com/nimpod/decorruptor">Error corrector for corrupted binary data</a>
                            </span> <br />
                            <span className="proj-date">2018</span> <br /> <br />
                            <span className="proj-desc">Built a series of ARMv8 Assembly programs to manage errors within corrupted binary data</span>
                        </div>
                    </div>

                    <div className="project html-css-tutorial-site">
                        <div className="image">
                            <img className="cropped" src={ProjectImageWebDevUniProject} alt="project thumbnail"  />
                        </div>
                        <div className="proj-details">
                            <span className="proj-title">
                                <a href="projects/space-invaders.html">HTML & CSS tutorial site</a>
                            </span> <br />
                            <span className="proj-date">2018</span> <br /> <br />
                            <span className="proj-desc">Over the course of 2 months I built an entire tutorial site for learning HTML, CSS and other web development skills. Ongoing project.</span>
                        </div>
                    </div>

                    <div className="project pong">
                        <div className="image">
                            <a href="https://github.com/nimpod/pong" target="_blank">
                                <img className="cropped" src={ProjectImagePong}  alt="project thumbnail" />
                            </a>
                        </div>
                        <div className="proj-details">
                            <span className="proj-title">
                                <a href="https://github.com/nimpod/pong">Pong</a>
                            </span> <br />
                            <span className="proj-date">2017</span> <br /> <br />
                            <span className="proj-desc">Programmed Pong on the Casio FX-9750GII Graphing Calculator using my first programming language - Casio BASIC.</span>
                        </div>
                    </div>

                </div>

            </section>
            
        </div>
    )
}

export default Portfolio

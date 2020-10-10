import React from 'react'
import { Link } from 'react-scroll';
import '../index.css';

import PhotoOfMe from '../img/me.jpg'
import ProjectImageAssembly from '../img/assembly.png'
import ProjectImageMosaicsOfVideos from '../img/mosaics-of-videos.png'
import ProjectImageD3 from '../img/d3.PNG'
import ProjectImageBobomb from '../img/bobomb.jpg'
import ProjectImageFlappyBird from '../img/flappy_bird.png'
import ProjectImageFitbitDataAnalysis from '../img/fitbit-data-analysis.PNG'
import ProjectImageSpaceInvaders from '../img/spaceinvaders.png'
import ProjectImageWebDevUniProject from '../img/web-dev-thumbnail.PNG'
import ProjectImagePong from '../img/pc.jpg'
import CV from '../img/cv.pdf'
import Particles from 'react-particles-js';

{/*
    What do the custom attributes on Link mean? Those enable react-scroll animations. Do not fear future traveller, I am here to help you:
        onClick:        i am disappointed if you don't know this
        to:             the area to scroll to
        activeClass:    the 'active' class is added when element is reached
        spy:            make the Link selected when scroll is at its targets position
        smooth:         animate the scrolling
        offset:         scroll additional px
        duration:       time of the scroll animation
    https://www.npmjs.com/package/react-scroll
*/}

const pc1 = String(window.getComputedStyle(document.documentElement).getPropertyValue('--particle-color-1'));
const pc2 = String(window.getComputedStyle(document.documentElement).getPropertyValue('--particle-color-2'));
const pc3 = String(window.getComputedStyle(document.documentElement).getPropertyValue('--particle-color-3'));
const pc4 = String(window.getComputedStyle(document.documentElement).getPropertyValue('--particle-color-4'));
console.log(pc1, pc2, pc3, pc4);

const AMOUNT_OF_PARTICLES = 88;
const DENSITY_OF_PARTICLES = 700;
const TYPE_OF_PARTICLES = "circle"; /* "circle", "square", "triangle", "polygon" */
const PARTICLE_OPACITY = 0.25;
const PARTICLE_SIZE = 3.9;
const PARTICLE_SPEED = 1.5;
const PARTICLE_DIRECTION = "none" /* "none", "bottom", "right", "left", etc... */ 
const PARTICLE_COLOUR_1 = "rgb(51, 177, 248)";
const PARTICLE_COLOUR_2 = "rgb(131, 210, 56)";
const PARTICLE_COLOUR_3 = "rgb(248, 194, 16)";
const PARTICLE_COLOUR_4 = "rgb(170, 115, 255)";
const AMOUNT_OF_LINES = 110;
const LINE_COLOUR = "rgb(153, 153, 153)";
const LINE_OPACITY = 0.25;
const LINE_WIDTH = 0.5;

const particlesConig =
{
  "particles": {
    "number": {
      "value": AMOUNT_OF_PARTICLES,
      "density": {
        "enable": true,
        "value_area": DENSITY_OF_PARTICLES
      }
    },
    "color": {
      "value": [PARTICLE_COLOUR_1, PARTICLE_COLOUR_2, PARTICLE_COLOUR_3, PARTICLE_COLOUR_4]
    },
    "shape": {
      "type": TYPE_OF_PARTICLES,
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
      "distance": AMOUNT_OF_LINES,
      "color": LINE_COLOUR,
      "opacity": LINE_OPACITY,
      "width": LINE_WIDTH
    },
    "move": {
      "enable": true,
      "speed": PARTICLE_SPEED,
      "direction": PARTICLE_DIRECTION,
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
        "distance": 500,
        "line_linked": {
          "opacity": 0.5
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
        "particles_nb": 3
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
            <div id="particles-js">
                <Particles params={particlesConig} />
            </div>
            <section id="about">
                <p>Hi, I'm</p>
                <h1>Nathan Steele</h1>
                <p>I enjoy coding, trying to fix things and learning about the origins of life.<br />Currently studying a BSc in Computer Science at Newcastle University.</p>
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
                                <img className="cropped" src={ProjectImageMosaicsOfVideos} />
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
                                <img className="cropped" src={ProjectImageD3} />
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
                                <img className="cropped" src={ProjectImageBobomb} />
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
                                <img className="cropped" src={ProjectImageFlappyBird} />
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
                                <img className="cropped" src={ProjectImageFitbitDataAnalysis} />
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
                                <img className="cropped" src={ProjectImageSpaceInvaders} />
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
                                <img className="cropped" src={ProjectImageAssembly}/>
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
                            <img className="cropped" src={ProjectImageWebDevUniProject} />
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
                                <img className="cropped" src={ProjectImagePong} />
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

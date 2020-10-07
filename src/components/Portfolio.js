import React from 'react'
import { Link } from 'react-scroll';

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



const AMOUNT_OF_PARTICLES = 10;
const DENSITY_OF_PARTICLES = 100;
const TYPE_OF_PARTICLES = "circle"; /* "circle", "square", "triangle", "polygon" */
const PARTICLE_OPACITY = 0.1;
const PARTICLE_SIZE = 7.5;
const PARTICLE_SPEED = 2.6;
const PARTICLE_DIRECTION = "none" /* "none", "bottom", "right", "left", etc... */
const PARTICLE_COLOUR_1 = "#001d4c";
const PARTICLE_COLOUR_2 = "#447684";
const PARTICLE_COLOUR_3 = "#d86700";
const PARTICLE_COLOUR_4 = "#a26fb0";
const AMOUNT_OF_LINES = 300;
const LINE_COLOUR = "#999";
const LINE_OPACITY = 0.15;
const LINE_WIDTH = 0.9;

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
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "grab"
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


const Portfolio = (props) => {
    return (
        <div className="page-wrapper portfolio">
            <div id="particles-js">
                <Particles params={particlesConig} />
            </div>
            <section id="about">
                <h2 className="page-title">NATHAN STEELE</h2>
                <div className="center-me">
                    <img id="me" src={PhotoOfMe} title="Volunteering in the rural villages of Muyembe, Uganda - 2016" />
                </div>
                <div className="contact">
                    <a className="codepen" href="https://codepen.io/dashboard?type=view&opts_itemType=pen&opts_filter=all&opts_orderBy=id&opts_orderDirection=0&opts_tag=0&displayType=grid&previewType=iframe&page=0" target = "_blank"><i className="fab fa-codepen"></i></a>
                    <a className="github" href="https://github.com/nimpod" target = "_blank"><i className="fab fa-github"></i></a>
                    <a className="cv" href={CV}><div className="contact-btn">VIEW MY CV</div></a>
                    <a className="linkedin" href="https://www.linkedin.com/in/nathan-steele-1564a3183/" target = "_blank"><i className="fab fa-linkedin"></i></a>
                    <a className="email" href="nathanjoshuasteele@gmail.com" target = "_blank"><i className="fa fa-envelope"></i></a>
                </div>
                <div id="about-desc">
                    <p>I code, think about data, over analyse my life, and create digital experiences.</p>
                    <p>Computer science student at Newcastle University.</p>
                    <div className="arrow-to-projects center-me">
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={400}>
                            <i className="fa fa-angle-down smooth-scroll-btn"></i>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="projects">
                <div className="arrow-to-about center-me">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={400}>
                        <i className="fa fa-angle-up smooth-scroll-btn"></i>
                    </Link>
                </div>
                <h2 className="page-title">MY PROJECTS</h2>
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

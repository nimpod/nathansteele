import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom';

import Particles from 'react-particles-js';
import { get_value_of_CSS_variable } from '../../js/helpers';


/* particlesjs variables (defined in css) */
const PARTICLE_COUNT = get_value_of_CSS_variable('--particle-count');
const PARTICLE_DENSITY = get_value_of_CSS_variable('--particle-density');
const PARTICLE_OPACITY = get_value_of_CSS_variable('--particle-opacity');
const PARTICLE_SIZE = get_value_of_CSS_variable('--particle-size');
const PARTICLE_SPEED = get_value_of_CSS_variable('--particle-speed');
const PARTICLE_COLOUR_1 = get_value_of_CSS_variable('--particle-color-1');
const PARTICLE_COLOUR_2 = get_value_of_CSS_variable('--particle-color-2');
const PARTICLE_COLOUR_3 = get_value_of_CSS_variable('--particle-color-3');
const PARTICLE_COLOUR_4 = get_value_of_CSS_variable('--particle-color-4');
const PARTICLE_LINE_COLOUR = get_value_of_CSS_variable('--particle-line-color');
const LINE_COUNT = get_value_of_CSS_variable('--line-count');
const LINE_OPACITY = get_value_of_CSS_variable('--line-opacity');
const LINE_WIDTH = get_value_of_CSS_variable('--line-width');
const LINKED_LINE_OPACITY = get_value_of_CSS_variable('--linked-line-opacity');
const LINKED_LINE_RADIUS = get_value_of_CSS_variable('--linked-line-radius')
const PARTICLES_TO_SPAWN_ON_PUSH = get_value_of_CSS_variable('--num-of-particles-to-spawn-on-push');
const PARTICLE_DIRECTION = "none";   /* "none", "bottom", "right", "left" */
const PARTICLE_TYPE = "circle";  /* "circle", "square", "triangle", "polygon" */
const PARTICLE_ANIMATION_SPEED = get_value_of_CSS_variable('--particle-animation-speed');
const PARTICLE_OPACITY_MIN = get_value_of_CSS_variable('--particle-opacity-min');

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
      "random": {
        "enable": true,
        "miniumumValue": PARTICLE_OPACITY_MIN
      },
      "anim": {
        "enable": true,
        "speed": PARTICLE_ANIMATION_SPEED,
        "opacity_min": PARTICLE_OPACITY_MIN,
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
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
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

class LandingPage extends Component {
    render() {
        return(
            <div className='page-wrapper'>
                <div id="particles-js">
                    <Particles params={particlesConfig} />
                </div>
                <div className='landingpage-container'>
                    <div className='landingpage-intro'>
                        <p>Hi, I'm</p>
                        <h1>Nayaflob Davidson</h1>
                        <p>I write code, think about data, and create digital experiences.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LandingPage)

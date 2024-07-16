import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom';


class Art extends Component {
    render() {
        return(
            <div className='page-wrapper'>
                <div className='section-inner art-page'>
                    <img src={require('../../img/art/monster_drawing.jpg')} />
                    <img src={require('../../img/art/monster_screenprint.jpg')} />
                    <img src={require('../../img/art/3D_insects.jpg')} />
                    <img src={require('../../img/art/The Metamorphosis of King William III.png')} />
                    <img src={require('../../img/art/rome_graffiti_drawing.jpg')} />
                    <img src={require('../../img/art/dragonfly_drawing.jpg')} />
                    <img src={require('../../img/art/strange_mayan_inspired_drawing.jpeg')} />
                    <img src={require('../../img/art/rome_collessium.jpg')} />
                    <img src={require('../../img/art/bacteria_screenprint.jpg')} />
                    <img src={require('../../img/art/bacteria_screenprint_2.jpg')} />

                    <img src={require('../../img/art/mandelbulb1.jpg')} />
                    <img src={require('../../img/art/mandelbulb2.jpg')} />
                    <img src={require('../../img/art/mandelbulb3.jpg')} />
                    <img src={require('../../img/art/mandelbulb4.jpg')} />
                    <img src={require('../../img/art/mandelbulb5.jpg')} />
                    <img src={require('../../img/art/mandelbulb6.jpg')} />
                    <img src={require('../../img/art/mandelbulb7.jpg')} />
                    <img src={require('../../img/art/mandelbulb8.jpg')} />
                    <img src={require('../../img/art/mandelbulb9.jpg')} />
                </div>
            </div>
        )
    }
}

export default withRouter(Art)

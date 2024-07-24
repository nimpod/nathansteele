import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom';

const IMAGES = {
    insects:                                "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/3D_insects.jpg",
    bacteria_screenprint:                   "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/bacteria_screenprint.jpg",
    bacteria_screenprint_2:                 "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/bacteria_screenprint_2.jpg",
    dragonfly_drawing:                      "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/dragonfly_drawing.jpg",
    mandelbulb1:                            "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/mandelbulb1.jpg",
    mandelbulb2:                            "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/mandelbulb2.jpg",
    mandelbulb3:                            "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/mandelbulb3.jpg",
    mandelbulb4:                            "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/mandelbulb4.jpg",
    mandelbulb5:                            "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/mandelbulb5.jpg",
    mandelbulb6:                            "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/mandelbulb6.jpg",
    mandelbulb7:                            "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/mandelbulb7.jpg",
    mandelbulb8:                            "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/mandelbulb8.jpg",
    mandelbulb9:                            "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/mandelbulb9.jpg",
    monster_drawing:                        "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/monster_drawing.jpg",
    monster_screenprint:                    "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/monster_screenprint.jpg",
    rome_collessium:                        "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/rome_collessium.jpg",
    rome_graffiti_drawing:                  "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/rome_graffiti_drawing.jpg",
    strange_mayan_inspired_drawing:         "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/strange_mayan_inspired_drawing.jpeg",
    The_Metamorphosis_of_King_William_III:  "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/The_Metamorphosis_of_King_William_III.png",
    weird_drawing:                          "https://s3.eu-west-2.amazonaws.com/nathansteele.com/art/weird_drawing.jpg",
}

class Art extends Component {
    render() {
        return(
            <div className='page-wrapper'>
                <div className='section-inner art-page'>
                    <img src={IMAGES.monster_drawing} />
                    <img src={IMAGES.monster_screenprint} />
                    <img src={IMAGES.insects} />
                    <img src={IMAGES.The_Metamorphosis_of_King_William_III} />
                    <img src={IMAGES.rome_graffiti_drawing} />
                    <img src={IMAGES.dragonfly_drawing} />
                    <img src={IMAGES.strange_mayan_inspired_drawing} />
                    <img src={IMAGES.rome_collessium} />
                    <img src={IMAGES.bacteria_screenprint} />
                    <img src={IMAGES.bacteria_screenprint_2} />

                    <img src={IMAGES.mandelbulb1} />
                    <img src={IMAGES.mandelbulb2} />
                    <img src={IMAGES.mandelbulb3} />
                    <img src={IMAGES.mandelbulb4} />
                    <img src={IMAGES.mandelbulb5} />
                    <img src={IMAGES.mandelbulb6} />
                    <img src={IMAGES.mandelbulb7} />
                    <img src={IMAGES.mandelbulb8} />
                    <img src={IMAGES.mandelbulb9} />
                </div>
            </div>
        )
    }
}

export default withRouter(Art)

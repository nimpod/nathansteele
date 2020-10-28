import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom'

class Notes extends Component {

    render() {
        return(
            <div className="page-wrapper notes">
                <div className="section-inner">
                    <h2 className="page-title">Notes</h2>

                    <h5>Computer Science</h5>
                    <ul>
                        <li><Link>Algorithms</Link></li>
                        <li><a href='computer-networks.html'>Computer Networks</a></li>
                        <li><Link>Computer Architecture</Link></li>
                        <li><Link>Git</Link></li>
                        <li><Link>CI</Link></li>
                    </ul>

                    <h5>Programming</h5>
                    <ul>
                        <li><Link>Casio BASIC</Link></li>
                        <li><Link>Java</Link></li>
                        <li><Link>Python</Link></li>
                        <li><Link>C</Link></li>
                        <li><Link>CSS</Link></li>
                    </ul>

                    <h5>Other</h5>
                    <ul>
                        <li><Link>A-Level Mathematics</Link></li>
                        <li><Link>Cubing</Link></li>
                        <li><Link>Running form & techniques</Link></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default withRouter(Notes)

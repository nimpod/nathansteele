import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

class Notes extends Component {

    render() {
        return(
            <div className="page-wrapper notes">
                <h2 className="page-title center-me">Notes</h2>
            </div>
        )
    }

}

export default withRouter(Notes)

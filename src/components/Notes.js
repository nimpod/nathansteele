import React, {Component} from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { connect }  from 'react-redux'

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

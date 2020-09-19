import React, {Component} from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { connect }  from 'react-redux'

class Notes extends Component {

    render() {
        return(
            <div className="wrapper notes">
                <h4 className="center-me">Notes</h4>
            </div>
        )
    }

}

export default withRouter(Notes)

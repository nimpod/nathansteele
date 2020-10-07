import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link, NavLink, withRouter } from 'react-router-dom'

import { ReactComponent as ArrowLeft } from "../../icons/arrowLeft.svg";
import { ReactComponent as User } from "../../icons/user.svg";
import { ReactComponent as Calendar } from "../../icons/calendar.svg";


class UniversityAssignment extends Component {

    render() {
        console.log(this.props);

        return (
            <div className="page-wrapper universityAssignment">
                <div>
                    <Link to='/university' className="back-to-previous-page" title="Back to blog archive">
                        <ArrowLeft />
                    </Link>
                    <h3 className="module">{this.props.theAssignment.module}</h3>
                    <p className="assignment">{this.props.theAssignment.assignment}</p>
                    <p className="year">{this.props.theAssignment.year}</p>
                    <p className="author">
                        <User />
                        Nathan Steele
                    </p>
                    <p className="date">
                        <Calendar />
                        {this.props.theAssignment.date}
                    </p>
                    <p className="percent">{this.props.theAssignment.percent}</p>
                    <div className="content" dangerouslySetInnerHTML={{__html: this.props.theAssignment.content}}></div>
                </div>
            </div>
        )
    }
}

/**
 * [function: Find the correct blog post from the redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.assignment_id;     // the id of the post being displayed in the UI
    console.log(state.universityAssignments, id);
    return {
        theAssignment: state.universityAssignments.find(assignment => assignment.id === id)      // get the actual post data from the redux data store
    }
}


export default connect(mapStateToProps)(UniversityAssignment)
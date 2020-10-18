import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link, NavLink, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ReactComponent as ArrowLeft } from "../../icons/arrowLeft.svg";
import { ReactComponent as User } from "../../icons/user.svg";
import { ReactComponent as Calendar } from "../../icons/calendar.svg";


class UniversityAssignment extends Component {

    render() {
        console.log(this.props);

        return (
            <div className="page-wrapper universityAssignment">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-sm-6-6 col-md-9-12 col-smd-5-12 col-lg-4-12 page-info">
                            <div>
                                <h5>{this.props.theAssignment.moduleCode} - {this.props.theAssignment.moduleTitle}</h5>
                                <h1>{this.props.theAssignment.assignmentTitle}</h1>
                                <h5>DATE</h5>
                                <h4>{this.props.theAssignment.date}</h4>
                                <h5>STAGE</h5>
                                <h4>{this.props.theAssignment.stage}</h4>
                                <h5>PERCENTAGE</h5>
                                <h4>{this.props.theAssignment.percentage}</h4>
                                <Link to='/university' className="back-to-previous-page" title="Back to assignments">
                                    <ArrowLeft className="invertable-icon" />
                                    click to go back...
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6-6 col-md-9-12 col-smd-6-12 col-smd-offset-1-12 col-lg-6-12 col-lg-offset-2-12 page-content" dangerouslySetInnerHTML={{__html: this.props.theAssignment.introContent}}>

                        </div>
                        <div className="page-content" dangerouslySetInnerHTML={{__html: this.props.theAssignment.mainContent}}>

                        </div>
                    </div>
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
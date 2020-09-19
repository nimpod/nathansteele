import React, {Component} from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { connect }  from 'react-redux'
import { ReactComponent as GridIcon } from "../../icons/grid.svg";
import { ReactComponent as ListIcon } from "../../icons/list.svg";
import UniversityAssignmentCard from './UniversityAssignmentCard';

class University extends Component {

    useGridView() {
        console.log('switched to grid view');
    }

    useListView() {
        console.log('switched to list view');
    }

    render() {
        const { universityAssignments } = this.props;       // json data from redux data store
        console.log(universityAssignments);
        
        const assignmentsDisplayed = universityAssignments.map(p => {
            return (
                <UniversityAssignmentCard id={p.id} module={p.module} assignment={p.assignment} year={p.year} date={p.date} percent={p.percent} thumbnail={p.thumbnail} />
            )
        })

        return(
            <div className="wrapper university">
                <h4 className="center-me">University Assignments</h4>
                <div className="controls">
                    <div className="btn" title="Grid" onClick={this.useGridView}>
                        <GridIcon alt="Grid icon" />
                    </div>
                    <div className="btn" title="List" onClick={this.useListView}>
                        <ListIcon alt="List icon" />
                    </div>
                    <div className="dropdown" title="Sort by">

                    </div>
                    <div className="dropdown" title="Group by">
                        
                    </div>
                </div>
                <div className="card-grid">
                    { assignmentsDisplayed }
                </div>
            </div>
        )
    }
}

/**
 * [function: Connect this React component to the Redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        universityAssignments: state.universityAssignments
    }
}

export default connect(mapStateToProps)(University)
import React, {Component} from 'react'
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
                <UniversityAssignmentCard id={p.id} moduleTitle={p.moduleTitle} moduleCode={p.moduleCode} assignmentTitle={p.assignmentTitle} stage={p.stage} date={p.date} percentage={p.percentage} thumbnail={p.thumbnail} />
            )
        })

        return(
            <div className="page-wrapper university">
                <div className="section-inner">
                    <h2 className="page-title">University Assignments</h2>
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
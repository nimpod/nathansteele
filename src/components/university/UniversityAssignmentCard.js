import React, {Component} from 'react';
import { Link, withRouter} from 'react-router-dom';

class UniversityAssignmentCard extends Component {

    render() {
        return (
            <div className="card">
                <Link to={'/university/' + this.props.id} className="card-link">
                    <div className="card-img-wrapper">
                        <picture className="card-image img">
                            <img src={this.props.thumbnail} alt="thumbnail" />
                        </picture>
                    </div>
                    <div className="card-meta">
                        <p className="card-moduleTitle">{this.props.moduleCode} - {this.props.moduleTitle}</p>
                        <p className="card-assignmentTitle">{this.props.assignmentTitle}</p>
                        <p className="card-stage">{this.props.stage}</p>
                        <p className="card-date">{this.props.date}</p>
                        <div className="card-percentage">{this.props.percentage}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default withRouter(UniversityAssignmentCard)

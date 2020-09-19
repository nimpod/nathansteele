import React, {Component} from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom'
import { connect }  from 'react-redux'

class UniversityAssignmentCard extends Component {

    render() {
        return (
            <div className="card">
                <Link to={'/university/' + this.props.id} className="card-link">
                    <div className="card-img-wrapper">
                        <picture className="card-image img">
                            <img src={this.props.thumbnail} />
                        </picture>
                    </div>
                    <div className="card-meta">
                        <p className="card-module">{this.props.module}</p>
                        <p className="card-assignment">{this.props.assignment}</p>
                        <p className="card-year">{this.props.year}</p>
                        <p className="card-date">{this.props.date}</p>
                        <div className="card-percent">{this.props.percent}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default withRouter(UniversityAssignmentCard)

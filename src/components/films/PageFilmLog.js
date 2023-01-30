import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter, Link } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import FilmsSubmenu from './FilmsSubmenu';


class PageFilmLog extends Component {
    render() {
        return(
            <div className='page-wrapper films-log'>
                <FilmsSubmenu />
                <div className='section-inner'>
                    <h3 className='page-title'>What I watched each month</h3>
                    <table id='table-of-films-watched-per-month'>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>My average rating</th>
                                <th>IMDb average rating</th>
                                <th>Number of films watched</th>
                                <th>7s</th>
                                <th>8s</th>
                                <th>9s</th>
                                <th>10s</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.monthlyData.map((m => {
                                    return <tr>
                                        <td><a href={`${m.url}`} target="_blank">{m.month}</a></td>
                                        <td>{m.myAverageRating}</td>
                                        <td>{m.imdbAverageRating}</td>
                                        <td>{m.numOfFilmsWatched}</td>
                                        <td>{m.numOf7s}</td>
                                        <td>{m.numOf8s}</td>
                                        <td>{m.numOf9s}</td>
                                        <td>{m.numOf10s}</td>
                                    </tr>
                                }))
                            }
                        </tbody>
                    </table>
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
        monthlyData: state.monthlyData
    }
}

export default connect(mapStateToProps)(PageFilmLog)
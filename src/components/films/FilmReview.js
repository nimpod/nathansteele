import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";

class FilmReview extends Component {
    render() {
        return(
            <div className='page-wrapper films'>
                <div className='section-inner'>
                    <h3 className='page-title'>a review for a particular film...</h3>
                </div>
            </div>
        )
    }
}

export default withRouter(FilmReview)

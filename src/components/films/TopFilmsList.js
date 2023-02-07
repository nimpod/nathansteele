import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";

class TopFilmsList extends Component {
    render() {
        let copyOfThis = this;
        console.log(this.props.films);
        
        return(
            this.props.films.map((f => {
                return (
                    <div>
                        <p>{f.title}</p>
                    </div>
                )
            }))
        )
    }
}

export default withRouter(TopFilmsList)

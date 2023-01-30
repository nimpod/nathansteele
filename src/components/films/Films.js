import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import FilmsSubmenu from './FilmsSubmenu';
import { Redirect } from 'react-router';

class Films extends Component {
    render() {
        return(
            <Redirect to='/films/favourite_films' />
        )
    }
}

export default withRouter(Films)

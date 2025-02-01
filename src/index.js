import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './css/index.css';

// import each individual .scss file here...
import './css/sassy_styles/language_notes.min.css';
import './css/sassy_styles/LandingPage.min.css';
import './css/sassy_styles/topbar.min.css';
import './css/sassy_styles/sidebar.min.css';
import './css/sassy_styles/tooltip.min.css';
import './css/sassy_styles/albums.min.css';
import './css/sassy_styles/website_reference_component.min.css';


import App from './App';
import RootReducer from './reducers/RootReducer';



const myStore = createStore(RootReducer);
ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


// import each individual .scss file here...
import './css/sassy_styles/albums.css';
import './css/sassy_styles/sidebar.css';
import './css/sassy_styles/topbar.css';
import './css/sassy_styles/LandingPage.css';
import './css/sassy_styles/topbar.css';
import './css/sassy_styles/tooltip.css';
import './css/sassy_styles/website_reference_component.css';


import App from './App';
import RootReducer from './reducers/RootReducer';



const myStore = createStore(RootReducer);
ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);


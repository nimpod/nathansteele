import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './css/index.css';

// import each individual .scss file here...
import './css/compiled_scss/language_notes.min.css';

import App from './App';
import RootReducer from './reducers/RootReducer';



const myStore = createStore(RootReducer);
ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);


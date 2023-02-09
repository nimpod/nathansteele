import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import RootReducer from './reducers/RootReducer';



const myStore = createStore(RootReducer);
ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// serviceWorker.unregister();

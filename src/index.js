import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UserProfileReducer from './reducers/UserProfileReducer';
import './index.css';
import App from './App';
import Search from './Search'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(UserProfileReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

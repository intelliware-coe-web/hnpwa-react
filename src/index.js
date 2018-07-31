import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './components/App/App';

import registerServiceWorker from './registerServiceWorker';

import store from './store/index';

ReactDOM.render(
    <Provider store = {store}>
        <div>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();


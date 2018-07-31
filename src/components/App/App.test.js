import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../store/index';
import { Provider } from 'react-redux';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers';

const store = createStore(reducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
<<<<<<< HEAD:src/components/App/App.test.js

  ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>
  , div);

=======
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    div);
>>>>>>> 13c45a4f88ed23a70b819818ea60b1c3043e47ad:src/App.test.js
  ReactDOM.unmountComponentAtNode(div);
});
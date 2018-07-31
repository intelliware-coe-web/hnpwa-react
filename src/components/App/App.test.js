import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../store/index';
import { Provider } from 'react-redux';
import App from './App';
import { Provider } from 'react-redux';
import UserProfileReducer from './reducers/UserProfileReducer'
import { createStore } from 'redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
<<<<<<< HEAD:src/App.test.js
  const store = createStore(UserProfileReducer);

  ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>
  , div);
=======
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
>>>>>>> 1d18852e6791d54b036cb2b90f6784e4f4a2e2e1:src/components/App/App.test.js
  ReactDOM.unmountComponentAtNode(div);
});
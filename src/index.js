import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';

import Search from './components/Search/Search.component';
import NewsListTable from './components/NewsList/NewsListTable';
import CurrentDetails from './components/NewsDetails/CurrentDetails';
import UserProfileContainer from './components/UserProfile/UserProfileContainer';


ReactDOM.render(
  <Provider store={store}>
    <div className="App">

        <div className="card">
          <h2>Search</h2>
          <Search />
        </div>

        <div className="card">
          <h2>Details</h2>
          <CurrentDetails />
        </div>

        <div className="card">
          <h2>News List</h2>
          <NewsListTable />
        </div>

        <div className="card">
          <h2>UserProfile</h2>
          <UserProfileContainer />
        </div>

      </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

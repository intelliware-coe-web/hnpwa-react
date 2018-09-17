import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';

import Search from './components/Search/Search.component';
import FrontPage from './components/NewsList/FrontPage';
import UserProfilePage from './components/UserProfile/UserProfilePage';
import CurrentDetails from './components/NewsDetails/CurrentDetails';
import UserProfileContainer from './components/UserProfile/UserProfileContainer';

import Navigation from './components/Navigation/Navigation'
import { UserProfileAPI } from './apis/news.api';
import { BrowserRouter } from 'react-router-dom'


// Network request example (no redux)
UserProfileAPI.byId('mudil').then(
  successResponse => console.log('success:', successResponse),
  errorResponse => console.log('error:', errorResponse));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <div className="App">

        <div className="header">
          <Navigation />
        </div>

        <div className="main">
          <FrontPage />
          <UserProfilePage />
        </div>
        
        <div className="card">
          <Search />
        </div>

        <div className="card">
          <h2>Details</h2>
          <CurrentDetails />
        </div>

        <div className="card">
          <UserProfileContainer />
        </div>


      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

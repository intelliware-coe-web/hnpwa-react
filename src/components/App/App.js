import React, { Component } from 'react';
import Search from '../Search/Search'
import NewsListTable from '../NewsListTable';
import './App.css';
import UserProfileContainer from '../../UserProfileContainer';
import CurrentDetails from '../CurrentDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="card">
          <h2>Search</h2>
          <Search />
        </div>

        <div className="card">
          <h2>Details</h2>
          <CurrentDetails/>
        </div>

        <div className="card">
          <h2>News List</h2>
          <NewsListTable/>
        </div>

        <div className="card">
          <h2>UserProfile</h2>
          <UserProfileContainer />
        </div>

      </div>
    );
  }
}

export default App;

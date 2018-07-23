import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Details from './components/Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Details title="Some News 1" author="Xufeng" createdDate="2018-06-01"></Details>
        <Details title="Some News 2" author="Peter" createdDate="2018-07-01" responses="Great article!, Very interesting!"></Details>
        <Details title="Some News 3" author="Cesar" createdDate="2018-07-20" responses="Great article!"></Details>
      </div>
    );
  }
}

export default App;

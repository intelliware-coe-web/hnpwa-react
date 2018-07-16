import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

        <NewsListTable/>

      </div>
    );
  }
}

class NewsListTable extends Component {
  contructor(props) {
    super(props);
    this.state = {
      title: "asdfasdf",
      date: "July 19 2018",
      user: "baran"
  };
}
  render() {
    return (
      <div>
        <h1>newsList</h1>
        <NewsRows title={this.state.title} date={this.state.date} user={this.state.user}/>
      </div>
    );
  }
}

function NewsRow(props) {
  return (
    <div>
      newsrow:
      {this.props.title}
      {this.props.date}
      {this.props.user}
    </div>
  );
}

export default App;

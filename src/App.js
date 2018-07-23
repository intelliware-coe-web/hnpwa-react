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
  constructor(props) {
    var mockNews = [
      {
        url: 'www.example.com',
        user: 'tdurden',
        title: 'Tesla Asks Suppliers for Cash Back to Help Turn a Profit',
        timeAgo: '1 day',
        points: '42',
        numberOfComments: '22'
      },
      {
        url: 'www.example.com',
        user: 'jhabdas',
        title: 'BPG Image format ',
        timeAgo: '9 hours',
        points: '185',
        numberOfComments: '60'
      }
    ];
    super(props);
    this.state = {
      news: mockNews
    };
  }

  render() {
    return (
      <div>
        <h1>News List</h1>
        {this.state.news.map((item, index) => (
          <NewsListItem item={item} />
        ))}
      </div>
    );
  }
}

function NewsListItem(props) {
  return (
    <div className="news-list-item">
      <a className="title" href={props.item.url} target="__blank">{props.item.title}</a>
      <div className="info">
        {props.item.points} points by {props.item.user} | {props.item.timeAgo} ago | {props.item.numberOfComments} comments
      </div>
    </div>
  );
}

export default App;

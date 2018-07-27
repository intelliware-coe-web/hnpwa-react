import React, { Component } from 'react';
import NewsListItem from './NewsListItem';
import SearchParameter from './SearchParameter';

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
      news: mockNews,
    };
  }

  render() {
    return (
      <div>
        <h1>News List</h1>
        {this.state.news.map((item, index) => (
          <NewsListItem item={item} />
        ))}
        <SearchParameter />
      </div>
      
    );
  }
}

export default NewsListTable;
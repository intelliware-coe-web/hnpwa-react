import React, { Component } from 'react';
import './Details.css';

class Details extends Component {

  generateResponseCountMessage(responses) {
    if (!responses || !responses.length) {
      return 'no responses yet';
    }
    return `${responses.length} response${responses.length > 1 ? 's' : ''} submitted so far`;
  }

  render() {

    if(!this.props.newsItem) { return <h3>No news selected</h3>; }

    return (
      <div className="Details">
        <div className="Details-field Details-title">{ this.props.newsItem.title }</div>
        <div className="Details-field Details-author">{ `author: ${this.props.newsItem.author}` }</div>
        <div className="Details-field Details-date">{ `created: ${this.props.newsItem.timeAgo}` }</div>
        <div className="Details-field Details-response">{ this.generateResponseCountMessage(this.props.newsItem.responses) }</div>
      </div>
    );
  }
}

export default Details;

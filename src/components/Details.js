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

    if(!this.props.news) { return <h3>No news selected</h3>; }

    return (
      <div className="Details">
        <div className="Details-field Details-title">{ this.props.news.title }</div>
        <div className="Details-field Details-author">{ `author: ${this.props.news.author}` }</div>
        <div className="Details-field Details-date">{ `created: ${this.props.news.timeAgo}` }</div>
        <div className="Details-field Details-response">{ this.generateResponseCountMessage(this.props.news.responses) }</div>
      </div>
    );
  }
}

export default Details;

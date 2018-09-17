import React, { Component } from 'react';
import './Details.css';

class Details extends Component {

  generateResponseCountMessage(responseCount) {
    if (!responseCount) {
      return 'no responses yet';
    }
    return `${responseCount} response${responseCount > 1 ? 's' : ''} submitted so far`;
  }

  render() {

    if (this.props.details.isFetching) {
      return <h3>loading...</h3>;
    }

    if (!this.props.details.details) {
      return <h3>No news selected</h3>;
    }

    return (
      <div className="Details">
        <div className="Details-field Details-title">{ this.props.details.details.title }</div>
        <div className="Details-field Details-author">{ `author: ${this.props.details.details.by}` }</div>
        <div className="Details-field Details-date">{ `created: ${new Date(this.props.details.details.time)}` }</div>
        <div className="Details-field Details-response">{ this.generateResponseCountMessage(this.props.details.details.descendants) }</div>
      </div>
    );
  }
}

export default Details;

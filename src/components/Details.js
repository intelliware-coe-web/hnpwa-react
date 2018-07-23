import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
  render() {
    return (
      <div className="Details">
        <div className="Details-field Details-title">{ this.props.title }</div>
        <div className="Details-field Details-author">{ `author: ${this.props.author}` }</div>
        <div className="Details-field Details-date">{ `date created: ${this.props.createdDate}` }</div>
        <div className="Details-field Details-response">
          {
            this.props.responses && this.props.responses.split(',').length ?
              `${this.props.responses.split(',').length} response${this.props.responses.split(',').length > 1 ? 's' : ''} submitted so far` :
              "no responses yet"
          }
        </div>
      </div>
    );
  }
}

export default Details;

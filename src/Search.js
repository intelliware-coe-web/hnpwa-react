import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      labelText: 'Use the input field to search for news',
      searchTerms: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerms: event.target.value});
  }

  handleSubmit() {
    this.setState({labelText: this.state.searchTerms});
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerms} onChange={this.handleChange} />
          <button type="submit">Search</button>
          <label>{this.state.labelText}</label>
        </form>
      </div>
    );
  }
}

export default Search;

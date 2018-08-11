import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitSearch } from '../../actions/search.reducer';

class ConnectedSearch extends Component {

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

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitSearch(this.state.searchTerms);
    this.setState({labelText: this.state.searchTerms});
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerms} onChange={this.handleChange} />
          <button type="submit" disabled={!this.state.searchTerms}>Search</button>
          <label>{this.state.labelText}</label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      searchTerms: state.searchTerms
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    submitSearch: searchTerms => dispatch(submitSearch(searchTerms))
  };
};

const Search = connect(mapStateToProps, mapDispatchToProps)(ConnectedSearch);

export default Search;

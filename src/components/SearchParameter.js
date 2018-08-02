import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { searchParameters: state.searchParameters };
};
const ConnectedList = ({ searchParameters }) => (
  <div>
    {searchParameters ? 'Search results for: "' + searchParameters + '"' : ''}
  </div>
);
const SearchParameter = connect(mapStateToProps)(ConnectedList);
export default SearchParameter;
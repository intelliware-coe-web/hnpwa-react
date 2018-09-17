import React from 'react';
import { connect } from 'react-redux';
import NewsListItem from './NewsListItem';
import SearchParameter from '../Search/SearchParameter';
import { fetchDetails } from '../../actions/details.reducer';

const mapStateToProps = state => {
  return {
    newsList: state.news.list
  }
};

const mapDispatchToProps = (dispatch) => ({
  selectNewsItem: (newsItem) => dispatch(fetchDetails(newsItem))
});

const ConnectedNewsListTable = ({ newsList, selectNewsItem }) => (
  <div>
      <SearchParameter />
      {newsList.length ? "" : "no news found"}
      {newsList.map((newsItem, index) => (
        <NewsListItem key={index} item={newsItem} selectNewsItem={selectNewsItem}/>
      ))}
  </div>
);

const NewsListTable = connect(mapStateToProps, mapDispatchToProps)(ConnectedNewsListTable);

export default NewsListTable;
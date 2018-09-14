import React from 'react';
import { connect } from 'react-redux';
import NewsListItem from './NewsListItem';
import SearchParameter from '../Search/SearchParameter';
import { selectNewsItem } from '../../actions/news.reducer';

const mapStateToProps = state => {
  return { 
    newsList: state.news.list
  }
};

const mapDispatchToProps = (dispatch) => ({
  selectNewsItem: (newsItem) => dispatch(selectNewsItem(newsItem))
});

const ConnectedNewsListTable = ({ newsList, selectNewsItem }) => (
  <div>
    <h2>News List</h2>
      <SearchParameter />
      {newsList.length ? "" : "no news found"}
      {newsList.map((newsItem, index) => (
        <NewsListItem key={index} item={newsItem} selectNewsItem={selectNewsItem}/>
      ))}
  </div>
);

const NewsListTable = connect(mapStateToProps, mapDispatchToProps)(ConnectedNewsListTable);

export default NewsListTable;
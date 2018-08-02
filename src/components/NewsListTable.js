import React from 'react';
import { connect } from 'react-redux';
import NewsListItem from './NewsListItem';
import SearchParameter from './SearchParameter';

const mapStateToProps = state => {
  return { news: state.news.news }
};

const ConnectedNewsListTable = ({ news }) => (
  <div>
    <SearchParameter />
      {news.length ? "" : "no news found"}
      {news.map((item, index) => (
        <NewsListItem item={item} />
      ))}
  </div>
);

const NewsListTable = connect(mapStateToProps)(ConnectedNewsListTable);

export default NewsListTable;
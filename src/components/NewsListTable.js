import React from 'react';
import { connect } from 'react-redux';
import NewsListItem from './NewsListItem';
import SearchParameter from './SearchParameter';
import { selectNews } from '../reducers/news.reducer';

const mapStateToProps = state => {
  return { news: state.news.news }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectNews: (news) => dispatch(selectNews(news))
});

const ConnectedNewsListTable = ({ news, selectNews }) => (
  <div>
    <SearchParameter />
      {news.length ? "" : "no news found"}
      {news.map((item, index) => (
        <NewsListItem key={index} item={item} selectNews={selectNews}/>
      ))}
  </div>
);

const NewsListTable = connect(mapStateToProps, mapDispatchToProps)(ConnectedNewsListTable);

export default NewsListTable;
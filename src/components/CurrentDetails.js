import { connect } from 'react-redux';
import Details from './Details';

const DEFAULT_SELECTED_NEWS_INDEX = 0;

const getCurrentNews = (newsList, selectedNewsIndex) => {
  if (selectedNewsIndex === null || selectedNewsIndex === undefined) {
    return newsList[DEFAULT_SELECTED_NEWS_INDEX];
  }
  return newsList[selectedNewsIndex];
};

const mapStateToProps = state => ({
  news: getCurrentNews(state.newsList.newsList, state.newsList.selectedNewsIndex),
});

export default connect(
  mapStateToProps,
  null,
)(Details);

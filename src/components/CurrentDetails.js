import { connect } from 'react-redux';
import Details from './Details';

const mapStateToProps = state => ({
  news: state.news.selectedNews
});

export default connect(
  mapStateToProps,
  null,
)(Details);

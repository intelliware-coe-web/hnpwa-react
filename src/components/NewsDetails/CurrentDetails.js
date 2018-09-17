import { connect } from 'react-redux';
import Details from './Details';

const mapStateToProps = state => ({
  newsItem: state.news.selectedItem,
  details: state.details,
});

export default connect(
  mapStateToProps,
  null,
)(Details);

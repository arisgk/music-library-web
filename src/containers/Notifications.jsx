import { connect } from 'react-redux';
import { playSong } from 'redux/actions/songs';
import Notifications from 'components/Notifications';
import { closeSongSuggestion } from '../redux/actions/notifications';

const mapStateToProps = state => ({
  song: state.notifications.songSuggestion,
});

const mapDispatchToProps = dispatch => ({
  onActionClick: id => dispatch(playSong(id)),
  onClose: () => dispatch(closeSongSuggestion()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifications);

import { connect } from 'react-redux';
import { playSong } from 'redux/actions/songs';
import Playlist from 'components/Playlist';

const mapStateToProps = state => ({
  currentSong: state.currentlyPlaying.song,
});

const mapDispatchToProps = dispatch => ({
  onRowButtonClick: id => dispatch(playSong(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);

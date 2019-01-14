import { connect } from 'react-redux';
import { playSong } from 'shared/redux/actions/songs';
import Playlist from 'shared/components/Playlist';

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

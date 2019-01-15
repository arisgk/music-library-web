import { connect } from 'react-redux';
import { togglePlay, playPrevious, playNext } from 'redux/actions/controls';
import { songsResultSelector } from 'redux/selectors/songs';
import Controls from 'components/Controls';

const mapStateToProps = state => ({
  song: state.songs.entities[state.currentlyPlaying.song],
  playing: state.currentlyPlaying.playing,
  isFirstSong: state.currentlyPlaying.song === state.songs.result[0],
  isLastSong:
    state.currentlyPlaying.song ===
    state.songs.result[state.songs.result.length - 1],
  songs: songsResultSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onTogglePlay: () => dispatch(togglePlay()),
  onPreviousClick: (current, songs) => dispatch(playPrevious(current, songs)),
  onNextClick: (current, songs) => dispatch(playNext(current, songs)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);

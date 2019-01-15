import { connect } from 'react-redux';
import { fetchSongs } from 'redux/actions/songs';
import { getDenormalizedSongs } from 'redux/selectors/songs';
import Home from 'components/Home';

const mapStateToProps = state => {
  const data = getDenormalizedSongs(state);

  return {
    songs: data,
    loading: state.songs.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchSongs: () => dispatch(fetchSongs()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

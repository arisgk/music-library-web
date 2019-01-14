import { connect } from 'react-redux';
import { fetchSongs } from 'shared/redux/actions/songs';
import { getDenormalizedSongs } from 'shared/redux/selectors/songs';
import Home from 'home/components/Home';

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

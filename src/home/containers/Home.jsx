import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import songSchema from 'shared/redux/schemas/song';
import { fetchSongs } from 'shared/redux/actions/songs';
import Home from 'home/components/Home';

const mapStateToProps = state => {
  const data = denormalize(
    { songs: state.songs.result },
    { songs: [songSchema] },
    { songs: state.songs.entities },
  ).songs;

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

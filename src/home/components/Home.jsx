import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Playlist from 'shared/containers/Playlist';
import CenteredProgress from 'shared/components/CenteredProgress';
import propTypes from 'shared/propTypes';

class Home extends Component {
  componentDidMount() {
    const { onFetchSongs } = this.props;
    onFetchSongs();
  }

  render() {
    const { loading, songs } = this.props;

    if (loading) {
      return <CenteredProgress />;
    }

    return <Playlist songs={songs} />;
  }
}

Home.propTypes = {
  onFetchSongs: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(propTypes.song),
};

Home.defaultProps = {
  songs: [],
};

export default Home;

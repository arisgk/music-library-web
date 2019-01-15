import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ErrorView from 'components/ErrorView';
import Playlist from 'containers/Playlist';
import CenteredProgress from 'components/CenteredProgress';
import propTypes from 'propTypes';

const styles = {
  container: {
    flex: 'auto',
    display: 'flex',
  },
};

export class Home extends Component {
  componentDidMount() {
    const { onFetchSongs } = this.props;
    onFetchSongs();
  }

  render() {
    const { loading, songs, error, classes } = this.props;

    if (loading) {
      return (
        <div className={classes.container}>
          <CenteredProgress />
        </div>
      );
    }

    if (!loading && error) {
      return (
        <div className={classes.container}>
          <ErrorView message={error} />
        </div>
      );
    }

    return (
      <div className={classes.container}>
        <Playlist songs={songs} />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  onFetchSongs: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(propTypes.song),
  error: PropTypes.string,
};

Home.defaultProps = {
  songs: [],
  error: {},
};

export default withStyles(styles)(Home);

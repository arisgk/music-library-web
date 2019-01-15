import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from 'containers/Home';
import NoteIcon from '@material-ui/icons/MusicNote';
import Controls from 'containers/Controls';
import Notifications from 'containers/Notifications';

const styles = {
  container: {
    height: '100vh',
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Roboto, sans-serif',
  },
  logoContainer: {
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {
    flex: 'auto',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  controlsContainer: {
    flex: 'initial',
  },
};

const Main = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.logoContainer}>
      <NoteIcon fontSize="large" color="primary" />
    </div>
    <div className={classes.homeContainer}>
      <Home />
    </div>
    <div className={classes.controlsContainer}>
      <Controls />
    </div>
    <Notifications />
  </div>
);

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);

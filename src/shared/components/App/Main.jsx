import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from 'home/containers/Home';
import NoteIcon from '@material-ui/icons/MusicNote';
import Controls from 'shared/containers/Controls';
import Notifications from 'shared/containers/Notifications';

const styles = {
  container: {
    height: '100vh',
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
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
      <Notifications />
    </div>
    <div className={classes.controlsContainer}>
      <Controls />
    </div>
  </div>
);

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);

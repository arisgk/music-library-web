import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from 'home/containers/Home';
import Controls from 'shared/containers/Controls';

const styles = {
  container: {
    height: '100vh',
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
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
    <div className={classes.homeContainer}>
      <Home />
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

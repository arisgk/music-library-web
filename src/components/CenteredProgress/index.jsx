import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  container: {
    flex: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Progress = ({ classes }) => (
  <div className={classes.container}>
    <CircularProgress className={classes.progress} />
  </div>
);

Progress.propTypes = {
  classes: PropTypes.object,
};

Progress.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Progress);

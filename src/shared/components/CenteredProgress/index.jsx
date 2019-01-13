import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    marginTop: theme.spacing.unit * 2,
  },
});

const CenteredProgress = ({ classes, label }) => (
  <div className={classes.container}>
    <CircularProgress className={classes.container} color="primary" />
    {label ? <span className={classes.label}>{label}</span> : null}
  </div>
);

CenteredProgress.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
};

CenteredProgress.defaultProps = {
  label: '',
};

export default withStyles(styles)(CenteredProgress);

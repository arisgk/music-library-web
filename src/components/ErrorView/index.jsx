import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 8,
  },
  icon: {
    opacity: '0.54',
    width: 72,
    height: 72,
  },
  message: {
    color: 'rgba(0,0,0,0.54)',
    fontSize: 16,
    fontWeight: 400,
    margin: 0,
  },
  button: {
    marginTop: 8,
  },
};

export const ErrorView = ({
  message,
  buttonLabel,
  onShowAddDialog,
  classes,
}) => (
  <div className={classes.container}>
    <div className={classes.iconContainer}>
      <ErrorIcon classes={{ root: classes.icon }} />
    </div>
    <h3 className={classes.message}>{message}</h3>
    {buttonLabel ? (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onShowAddDialog}
      >
        {buttonLabel}
      </Button>
    ) : null}
  </div>
);

ErrorView.propTypes = {
  message: PropTypes.string,
  buttonLabel: PropTypes.string,
  classes: PropTypes.object,
  onShowAddDialog: PropTypes.func,
};

ErrorView.defaultProps = {
  message: '',
  buttonLabel: '',
  classes: {},
  onShowAddDialog: () => {},
};

export default withStyles(styles)(ErrorView);

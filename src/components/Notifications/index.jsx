import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import propTypes from 'propTypes';

const styles = () => ({
  close: {
    padding: 4,
  },
});

const Notifications = ({ classes, song, onActionClick, onClose }) => (
  <div>
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={!!song}
      autoHideDuration={6000}
      onClose={onClose}
      message={
        song && `People are listening to ${song.title} by ${song.artist}.`
      }
      action={[
        <Button
          key="undo"
          color="secondary"
          size="small"
          onClick={() => onActionClick(song.id)}
        >
          Listen
        </Button>,
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  </div>
);

Notifications.propTypes = {
  classes: PropTypes.object.isRequired,
  song: PropTypes.shape(propTypes.song),
  onActionClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  song: {},
};

export default withStyles(styles)(Notifications);

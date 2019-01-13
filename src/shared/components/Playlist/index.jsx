import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import propTypes from 'shared/propTypes';

const title = 'Title';
const artist = 'Artist';
const album = 'Album';

const styles = () => ({
  head: {
    backgroundColor: '#fafafa',
    position: 'sticky',
    top: 0,
  },
});

const Playlist = ({ classes, songs }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell className={classes.head}>{title}</TableCell>
        <TableCell className={classes.head}>{artist}</TableCell>
        <TableCell className={classes.head}>{album}</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {songs.map(song => (
        <TableRow key={song.id}>
          <TableCell>{song.title}</TableCell>
          <TableCell>{song.artist}</TableCell>
          <TableCell>{song.album}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

Playlist.propTypes = {
  songs: PropTypes.arrayOf(propTypes.song),
  classes: PropTypes.object.isRequired,
};

Playlist.defaultProps = {
  songs: [],
};

export default withStyles(styles)(Playlist);

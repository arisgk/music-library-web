import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';
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
  currentSongRow: {
    backgroundColor: '#eaeaea',
  },
  iconButtonRoot: {
    padding: 0,
  },
});

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowHover: null,
    };
  }

  handleMouseEnter(id) {
    this.setState(prevState => ({ ...prevState, rowHover: id }));
  }

  handleMouseLeave() {
    this.setState(prevState => ({ ...prevState, rowHover: null }));
  }

  render() {
    const { classes, songs, onRowButtonClick, currentSong } = this.props;
    const { rowHover } = this.state;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.head} width={64} padding="checkbox" />
            <TableCell className={classes.head}>{title}</TableCell>
            <TableCell className={classes.head}>{artist}</TableCell>
            <TableCell className={classes.head}>{album}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map(song => (
            <TableRow
              key={song.id}
              hover
              onMouseEnter={() => this.handleMouseEnter(song.id)}
              onMouseLeave={() => this.handleMouseLeave()}
              classes={{
                root:
                  currentSong === song.id && !rowHover
                    ? classes.currentSongRow
                    : null,
              }}
            >
              {rowHover === song.id ? (
                <TableCell width={64} padding="checkbox" align="center">
                  <IconButton
                    aria-label="Play Song"
                    onClick={() => onRowButtonClick(song.id)}
                    classes={{ root: classes.iconButtonRoot }}
                  >
                    <PlayIcon fontSize="large" />
                  </IconButton>
                </TableCell>
              ) : (
                <TableCell width={64} />
              )}
              <TableCell>{song.title}</TableCell>
              <TableCell>{song.artist}</TableCell>
              <TableCell>{song.album}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

Playlist.propTypes = {
  songs: PropTypes.arrayOf(propTypes.song),
  classes: PropTypes.object.isRequired,
  onRowButtonClick: PropTypes.object.isRequired,
  currentSong: PropTypes.number,
};

Playlist.defaultProps = {
  songs: [],
  currentSong: null,
};

export default withStyles(styles)(Playlist);

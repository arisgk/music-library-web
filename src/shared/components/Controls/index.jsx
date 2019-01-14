/* eslint-disable jsx-a11y/media-has-caption, jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';
import PauseIcon from '@material-ui/icons/PauseCircleOutline';
import NextIcon from '@material-ui/icons/SkipNext';
import LinearProgress from '@material-ui/core/LinearProgress';
import propTypes from 'shared/propTypes';

const styles = {
  controlsContainer: {
    height: 120,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    boxShadow: '0 0 1px rgba(34, 25, 25, 0.4)',
    position: 'relative',
  },
  songSequenceControlsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  linearProgressRoot: {
    width: '42%',
  },
  metaContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 24,
    height: 120,
    width: 240,
    display: 'flex',
    alignItems: 'center',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  songTitle: {
    marginBottom: 8,
    marginTop: 0,
    fontWeight: 400,
    color: 'rgba(0,0,0,0.87)',
  },
  songArtist: {
    marginBottom: 0,
    marginTop: 0,
    fontWeight: 400,
    color: 'rgba(0,0,0,0.54)',
  },
  cover: {
    width: 64,
    height: 64,
    marginRight: 8,
  },
};

class Controls extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();

    this.state = {
      currentTime: 0,
    };
  }

  componentDidUpdate(prevProps) {
    const { playing, song, songs, onNextClick } = this.props;
    if (
      (playing !== prevProps.playing || song.id !== prevProps.song.id) &&
      playing === true
    ) {
      this.audio.current.play();

      this.audio.current.addEventListener('timeupdate', e => {
        this.setState(prevState => ({
          ...prevState,
          currentTime: e.target.currentTime,
        }));
      });

      this.audio.current.addEventListener('ended', () => {
        onNextClick(song.id, songs);
      });
    }

    if (
      (playing !== prevProps.playing || song.id !== prevProps.song.id) &&
      playing === false
    ) {
      this.audio.current.pause();
    }
  }

  render() {
    const {
      classes,
      onTogglePlay,
      onPreviousClick,
      onNextClick,
      song,
      playing,
      isFirstSong,
      isLastSong,
      songs,
    } = this.props;

    const { currentTime } = this.state;

    return (
      <div>
        <audio ref={this.audio} src={song.url} />
        <div className={classes.controlsContainer}>
          <div className={classes.songSequenceControlsContainer}>
            <IconButton
              aria-label="Previous"
              onClick={() => onPreviousClick(song.id, songs)}
              disabled={isFirstSong}
            >
              <PreviousIcon />
            </IconButton>
            <IconButton aria-label="Play/Pause" onClick={onTogglePlay}>
              {playing ? (
                <PauseIcon fontSize="large" />
              ) : (
                <PlayIcon fontSize="large" />
              )}
            </IconButton>
            <IconButton
              aria-label="Next"
              onClick={() => onNextClick(song.id, songs)}
              disabled={isLastSong}
            >
              <NextIcon />
            </IconButton>
          </div>
          <div className={classes.progressContainer}>
            <LinearProgress
              classes={{
                root: classes.linearProgressRoot,
                dashed: classes.dashed,
              }}
              variant="determinate"
              value={(currentTime / song.duration) * 100}
            />
          </div>
          <div className={classes.metaContainer}>
            <img
              src={song.albumCover}
              role="presentation"
              className={classes.cover}
            />
            <div className={classes.infoContainer}>
              <h4 className={classes.songTitle}>{song.title}</h4>
              <h5 className={classes.songArtist}>{song.artist}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
  onTogglePlay: PropTypes.func.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  song: PropTypes.shape(propTypes.song),
  playing: PropTypes.bool,
  isFirstSong: PropTypes.bool,
  isLastSong: PropTypes.bool,
  songs: PropTypes.array,
};

Controls.defaultProps = {
  song: {},
  playing: false,
  isFirstSong: false,
  isLastSong: false,
  songs: [],
};

export default withStyles(styles)(Controls);

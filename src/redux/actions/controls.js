import * as types from './types';

const playingSongEvent = 'playing song';

export const toggle = () => ({
  type: types.TOGGLE_PLAY,
});

export const togglePlay = () => async (dispatch, getState, { socket }) => {
  if (!getState().currentlyPlaying.hasPlayedSomething) {
    const { song } = getState().currentlyPlaying;
    socket.emit(playingSongEvent, song);
  }

  dispatch(toggle());
};

export const previous = (current, songs) => ({
  type: types.PLAY_PREVIOUS,
  current,
  songs,
});

export const playPrevious = (current, songs) => async (
  dispatch,
  getState,
  { socket },
) => {
  dispatch(previous(current, songs));

  const currentIndex = songs.indexOf(current);
  if (currentIndex > 0 && getState().currentlyPlaying.playing) {
    socket.emit(playingSongEvent, songs[currentIndex - 1]);
  }
};

export const next = (current, songs) => ({
  type: types.PLAY_NEXT,
  current,
  songs,
});

export const playNext = (current, songs) => async (
  dispatch,
  getState,
  { socket },
) => {
  dispatch(next(current, songs));

  const currentIndex = songs.indexOf(current);
  if (currentIndex < songs.length && getState().currentlyPlaying.playing) {
    socket.emit(playingSongEvent, songs[currentIndex + 1]);
  }
};

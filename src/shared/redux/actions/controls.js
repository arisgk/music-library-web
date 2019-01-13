import * as types from './types';

export const togglePlay = () => ({
  type: types.TOGGLE_PLAY,
});

export const playPrevious = (current, songs) => ({
  type: types.PLAY_PREVIOUS,
  current,
  songs,
});

export const playNext = (current, songs) => ({
  type: types.PLAY_NEXT,
  current,
  songs,
});

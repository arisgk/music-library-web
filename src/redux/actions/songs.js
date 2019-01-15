/* global fetch */
import { normalize } from 'normalizr';
import songSchema from '../schemas/song';
import * as types from './types';

const playingSongEvent = 'playing song';

const requestSongs = () => ({
  type: types.FETCH_SONGS_REQUEST,
});

const requestSongsSuccess = data => ({
  type: types.FETCH_SONGS_SUCCESS,
  data,
});

const requestSongsFailure = message => ({
  type: types.FETCH_SONGS_FAILURE,
  errorMessage: message,
});

export const fetchSongs = () => async (dispatch, _, { api }) => {
  dispatch(requestSongs());

  try {
    const response = await fetch(`${api}/songs`);

    if (response.ok) {
      const data = await response.json();
      const normalizedData = normalize(data, { songs: [songSchema] });
      return dispatch(requestSongsSuccess(normalizedData));
    }

    throw Error(response.statusText);
  } catch (err) {
    const message = 'Something went wrong in fetching songs. Please try again.';
    return dispatch(requestSongsFailure(message));
  }
};

export const play = id => ({
  type: types.PLAY_SONG,
  id,
});

export const playSong = id => async (dispatch, getState, { socket }) => {
  dispatch(play(id));

  if (getState().currentlyPlaying.playing === true) {
    socket.emit(playingSongEvent, id);
  }
};

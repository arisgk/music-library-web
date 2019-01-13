/* global fetch */
import { normalize } from 'normalizr';
import songSchema from '../schemas/song';
import * as types from './types';

const requestSongs = () => ({
  type: types.FETCH_SONGS_REQUEST,
});

const requestSongsSuccess = data => ({
  type: types.FETCH_SONGS_SUCCESS,
  data,
});

const requestSongsFailure = error => ({
  type: types.FETCH_SONGS_FAILURE,
  error,
});

export const fetchSongs = () => async dispatch => {
  dispatch(requestSongs());

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/songs`);

    if (response.ok) {
      const data = await response.json();
      const normalizedData = normalize(data, { songs: [songSchema] });
      return dispatch(requestSongsSuccess(normalizedData));
    }

    throw Error(response.statusText);
  } catch (err) {
    return dispatch(requestSongsFailure(err));
  }
};

export const playSong = id => ({
  type: types.PLAY_SONG,
  id,
});

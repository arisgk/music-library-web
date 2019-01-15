import * as types from 'redux/actions/types';

export const initialState = {
  songSuggestion: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SONG_SUGGESTION:
      return { ...state, songSuggestion: action.song };
    case types.PLAY_SONG:
    case types.SONG_SUGGESTION_CLOSED:
      return {
        ...state,
        songSuggestion: null,
      };
    default:
      return state;
  }
}

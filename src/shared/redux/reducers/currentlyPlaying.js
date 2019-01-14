import * as types from 'shared/redux/actions/types';

export const initialState = {
  song: null,
  playing: false,
  hasPlayedSomething: false, // useful for notifications UX
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SONGS_SUCCESS:
      return {
        ...state,
        song: action.data.result.songs[0],
      };
    case types.PLAY_SONG:
      return {
        ...state,
        hasPlayedSomething: true,
        song: action.id,
        playing: true,
      };
    case types.TOGGLE_PLAY:
      return {
        ...state,
        hasPlayedSomething: true,
        playing: !state.playing,
      };
    case types.PLAY_PREVIOUS: {
      const currentIndex = action.songs.indexOf(action.current);
      return {
        ...state,
        song: currentIndex > 0 ? action.songs[currentIndex - 1] : state.song,
      };
    }
    case types.PLAY_NEXT: {
      const currentIndex = action.songs.indexOf(action.current);
      return {
        ...state,
        song:
          currentIndex < action.songs.length - 1
            ? action.songs[currentIndex + 1]
            : state.song,
      };
    }
    default:
      return state;
  }
}

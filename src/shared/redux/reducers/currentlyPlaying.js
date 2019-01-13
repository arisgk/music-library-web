import * as types from 'shared/redux/actions/types';

const initialState = {
  song: null,
  playing: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SONGS_SUCCESS:
      return {
        ...state,
        song: action.data.result.songs[0],
      };
    case types.TOGGLE_PLAY:
      return {
        ...state,
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

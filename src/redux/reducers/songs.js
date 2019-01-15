import * as types from 'redux/actions/types';

export const initialState = {
  loading: false,
  entities: {},
  result: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SONGS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        entities: action.data.entities.songs,
        result: action.data.result.songs,
      };
    default:
      return state;
  }
}

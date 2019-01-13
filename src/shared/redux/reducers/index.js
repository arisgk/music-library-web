import { combineReducers } from 'redux';
import currentlyPlaying from './currentlyPlaying';
import songs from './songs';

const reducer = combineReducers({
  songs,
  currentlyPlaying,
});

export default reducer;

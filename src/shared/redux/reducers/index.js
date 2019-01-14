import { combineReducers } from 'redux';
import currentlyPlaying from './currentlyPlaying';
import songs from './songs';
import notifications from './notifications';

const reducer = combineReducers({
  songs,
  currentlyPlaying,
  notifications,
});

export default reducer;

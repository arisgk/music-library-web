import * as types from './types';

const joinRoomEvent = 'join';
const suggestionsRoom = 'song-suggestions';
const songSuggestionEvent = 'song suggestion';

const create = (store, socket) => {
  socket.on('connect', () => {
    socket.emit(joinRoomEvent, suggestionsRoom);
  });

  socket.on(songSuggestionEvent, id => {
    const song = store.getState().songs.entities[id];
    const currentlyPlayingSong = store.getState().currentlyPlaying.song;
    const currentlyPlaying = store.getState().currentlyPlaying.playing;

    if (song && (!currentlyPlaying || id !== currentlyPlayingSong)) {
      store.dispatch({
        type: types.SONG_SUGGESTION,
        song,
      });
    }
  });
};

export default {
  create,
};

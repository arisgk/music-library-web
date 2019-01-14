/* global describe, it, expect, afterEach */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './songs';
import * as types from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Songs actions', () => {
  it('should create an action to play a song', () => {
    const id = 3;
    const expected = {
      type: types.PLAY_SONG,
      id,
    };
    expect(actions.playSong(id)).toEqual(expected);
  });

  describe('Async actions', () => {
    const songs = [
      {
        id: 1,
        title: 'Animals',
        url: 'https://some-host.com/animals',
        artist: 'Muse',
        album: 'The 2nd Law',
        albumCover: 'https://some-host.com/muse-the-2nd-law.jpg',
        duration: 263,
      },
      {
        id: 2,
        title: 'Coming Back to Life',
        url: 'https://some-host.com/coming-back-to-life',
        artist: 'Pink Floyd',
        album: 'The Division Bell',
        albumCover: 'https://some-host.com/pink-floyd-the-division-bell.jpg',
        duration: 386,
      },
      {
        id: 3,
        title: 'Fade to Black',
        url: 'https://some-host.com/fade-to-black',
        artist: 'Ride the Lightning',
        album: 'Metallica',
        albumCover: 'https://some-host.com/metallica-ride-the-lightning.jpeg',
        duration: 420,
      },
    ];

    afterEach(() => {
      fetchMock.restore();
    });

    it('creates the required actions for successful songs fetching', async () => {
      fetchMock.getOnce(`${process.env.REACT_APP_API_URL}/songs`, {
        body: { songs },
        headers: { 'content-type': 'application/json' },
      });

      const normalizedSongs = {
        entities: {
          songs: {
            1: songs[0],
            2: songs[1],
            3: songs[2],
          },
        },
        result: {
          songs: [1, 2, 3],
        },
      };

      const expected = [
        { type: types.FETCH_SONGS_REQUEST },
        {
          type: types.FETCH_SONGS_SUCCESS,
          data: normalizedSongs,
        },
      ];

      const store = mockStore({ songs: [] });

      await store.dispatch(actions.fetchSongs());
      expect(store.getActions()).toEqual(expected);
    });
  });
});

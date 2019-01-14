/* global describe, it, expect */
import * as actions from '../actions/types';
import reducer, { initialState } from './songs';

describe('Songs reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle fetch songs request', () => {
    const state = {
      loading: false,
      entities: {},
      result: [],
    };

    const action = {
      type: actions.FETCH_SONGS_REQUEST,
    };

    const newState = {
      loading: true,
      entities: {},
      result: [],
    };

    expect(reducer(state, action)).toEqual(newState);
  });

  it('should handle fetch songs success', () => {
    const state = {
      loading: true,
      entities: {},
      result: [],
    };

    const action = {
      type: actions.FETCH_SONGS_SUCCESS,
      data: {
        entities: {
          songs: {
            1: {
              id: 1,
              title: 'Animals',
              url: 'https://some-host.com/animals',
              artist: 'Muse',
              album: 'The 2nd Law',
              albumCover: 'https://some-host.com/muse-the-2nd-law.jpg',
              duration: 263,
            },
            2: {
              id: 2,
              title: 'Coming Back to Life',
              url: 'https://some-host.com/coming-back-to-life',
              artist: 'Pink Floyd',
              album: 'The Division Bell',
              albumCover:
                'https://some-host.com/pink-floyd-the-division-bell.jpg',
              duration: 386,
            },
            3: {
              id: 3,
              title: 'Fade to Black',
              url: 'https://some-host.com/fade-to-black',
              artist: 'Ride the Lightning',
              album: 'Metallica',
              albumCover:
                'https://some-host.com/metallica-ride-the-lightning.jpeg',
              duration: 420,
            },
          },
        },
        result: {
          songs: [1, 2, 3],
        },
      },
    };

    const newState = {
      loading: false,
      entities: action.data.entities.songs,
      result: action.data.result.songs,
    };

    expect(reducer(state, action)).toEqual(newState);
  });
});

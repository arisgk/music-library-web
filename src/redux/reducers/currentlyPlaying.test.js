/* global describe, it, expect */
import * as actions from '../actions/types';
import reducer, { initialState } from './currentlyPlaying';

describe('Songs reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle fetch songs success', () => {
    const state = {
      song: null,
      playing: false,
      hasPlayedSomething: false,
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
      song: 1,
      playing: false,
      hasPlayedSomething: false,
    };

    expect(reducer(state, action)).toEqual(newState);
  });

  it('should update the song that is playing', () => {
    const state = {
      song: 1,
      playing: true,
      hasPlayedSomething: true,
    };

    const action = {
      type: actions.PLAY_SONG,
      id: 3,
    };

    const newState = {
      song: 3,
      playing: true,
      hasPlayedSomething: true,
    };

    expect(reducer(state, action)).toEqual(newState);
  });

  it('should toggle play/pause', () => {
    const state = {
      song: 1,
      playing: false,
      hasPlayedSomething: true,
    };

    const action = {
      type: actions.TOGGLE_PLAY,
    };

    const newState = {
      song: 1,
      playing: true,
      hasPlayedSomething: true,
    };

    expect(reducer(state, action)).toEqual(newState);
  });

  it('should handle playing the previous song', () => {
    const state = {
      song: 3,
      playing: true,
      hasPlayedSomething: true,
    };

    const action = {
      type: actions.PLAY_PREVIOUS,
      current: 3,
      songs: [1, 2, 3],
    };

    const newState = {
      song: 2,
      playing: true,
      hasPlayedSomething: true,
    };

    expect(reducer(state, action)).toEqual(newState);
  });

  it('should handle playing the next song', () => {
    const state = {
      song: 2,
      playing: true,
      hasPlayedSomething: true,
    };

    const action = {
      type: actions.PLAY_NEXT,
      current: 2,
      songs: [1, 2, 3],
    };

    const newState = {
      song: 3,
      playing: true,
      hasPlayedSomething: true,
    };

    expect(reducer(state, action)).toEqual(newState);
  });
});

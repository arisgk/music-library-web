/* global describe, it, expect */
import * as actions from './controls';
import * as types from './types';

describe('Controls actions', () => {
  it('should create an action to toggle play/pause', () => {
    const expected = {
      type: types.TOGGLE_PLAY,
    };
    expect(actions.toggle()).toEqual(expected);
  });

  it('should create an action to play the previous song', () => {
    const current = 2;
    const songs = [1, 2, 3];
    const expected = {
      type: types.PLAY_PREVIOUS,
      current,
      songs,
    };
    expect(actions.previous(current, songs)).toEqual(expected);
  });

  it('should create an action to play the next song', () => {
    const current = 2;
    const songs = [1, 2, 3];
    const expected = {
      type: types.PLAY_NEXT,
      current,
      songs,
    };
    expect(actions.next(current, songs)).toEqual(expected);
  });
});

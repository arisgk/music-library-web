/* global describe, beforeAll, it, expect */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { createShallow } from '@material-ui/core/test-utils';
import Wrapper, { Controls } from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Controls', () => {
  let shallow;
  let songs;
  let onTogglePlay;
  let onPreviousClick;
  let onNextClick;

  beforeAll(() => {
    shallow = createShallow({ untilSelector: Controls });
    songs = [1, 2, 3];
    onTogglePlay = () => {};
    onPreviousClick = () => {};
    onNextClick = () => {};
  });

  it('renders correctly', () => {
    const song = {
      id: 1,
      title: 'Animals',
      url: 'https://some-host.com/animals',
      artist: 'Muse',
      album: 'The 2nd Law',
      albumCover: 'https://some-host.com/muse-the-2nd-law.jpg',
      duration: 263,
    };
    let playing = false;
    const isFirstSong = true;
    const isLastSong = false;

    let wrapper = shallow(
      <Wrapper
        songs={songs}
        song={song}
        playing={playing}
        isFirstSong={isFirstSong}
        isLastSong={isLastSong}
        onTogglePlay={onTogglePlay}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    playing = true;

    wrapper = shallow(
      <Wrapper
        songs={songs}
        song={song}
        playing={playing}
        isFirstSong={isFirstSong}
        isLastSong={isLastSong}
        onTogglePlay={onTogglePlay}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
      />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

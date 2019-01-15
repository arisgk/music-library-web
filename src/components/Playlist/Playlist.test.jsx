/* global describe, beforeAll, it, expect */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { createShallow } from '@material-ui/core/test-utils';
import Wrapper, { Playlist } from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Playlist', () => {
  let shallow;
  let songs;
  let onRowButtonClick;

  beforeAll(() => {
    shallow = createShallow({ untilSelector: Playlist });
    songs = [
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
    onRowButtonClick = () => {};
  });

  it('renders correctly', () => {
    const currentSong = 1;
    const wrapper = shallow(
      <Wrapper
        songs={songs}
        currentSong={currentSong}
        onRowButtonClick={onRowButtonClick}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('updates current song row background', () => {
    let currentSong = 1;
    let wrapper = shallow(
      <Wrapper
        songs={songs}
        currentSong={currentSong}
        onRowButtonClick={onRowButtonClick}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    currentSong = 2;
    wrapper = shallow(
      <Wrapper
        songs={songs}
        currentSong={currentSong}
        onRowButtonClick={onRowButtonClick}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('shows play button on hover', () => {
    const currentSong = 1;
    const wrapper = shallow(
      <Wrapper
        songs={songs}
        currentSong={currentSong}
        onRowButtonClick={onRowButtonClick}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setState({ rowHover: 2 }, () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

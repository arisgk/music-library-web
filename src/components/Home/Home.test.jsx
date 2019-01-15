/* global describe, beforeAll, it, expect */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { createShallow } from '@material-ui/core/test-utils';
import Wrapper, { Home } from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
  let shallow;
  let onFetchSongs;

  beforeAll(() => {
    shallow = createShallow({ untilSelector: Home });
    onFetchSongs = () => {};
  });

  it('renders correctly', () => {
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

    const loading = false;
    const error = null;

    const wrapper = shallow(
      <Wrapper
        songs={songs}
        loading={loading}
        error={error}
        onFetchSongs={onFetchSongs}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('displays progress indicator properly', () => {
    const songs = [];
    const loading = true;
    const error = null;

    const wrapper = shallow(
      <Wrapper
        songs={songs}
        loading={loading}
        error={error}
        onFetchSongs={onFetchSongs}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('displays an error view when an error is encountered', () => {
    const songs = [];
    const loading = false;
    const error = 'something went wrong';

    const wrapper = shallow(
      <Wrapper
        songs={songs}
        loading={loading}
        error={error}
        onFetchSongs={onFetchSongs}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

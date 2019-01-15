/* global describe, beforeAll, it, expect */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { createShallow } from '@material-ui/core/test-utils';
import NoteIcon from '@material-ui/icons/MusicNote';
import Wrapper, { ErrorView } from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ untilSelector: ErrorView });
  });

  it('renders message and icon', () => {
    const message = 'Something went wrong';
    const icon = <NoteIcon />;

    const wrapper = shallow(<Wrapper message={message} icon={icon} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders message, icon and button', () => {
    const message = 'Something went wrong';
    const icon = <NoteIcon />;
    const buttonLabel = 'Refresh';

    const wrapper = shallow(
      <Wrapper message={message} icon={icon} buttonLabel={buttonLabel} />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

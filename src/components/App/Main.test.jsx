/* global describe, beforeAll, it, expect */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { createShallow } from '@material-ui/core/test-utils';
import Wrapper, { Main } from './Main';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ untilSelector: Main });
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Wrapper />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

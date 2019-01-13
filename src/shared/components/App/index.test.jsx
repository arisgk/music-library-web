/* global it, document */
/* eslint-disable prefer-arrow-callback, func-names, no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

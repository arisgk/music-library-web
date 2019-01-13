import React from 'react';
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import configureStore from 'shared/redux/store/configure';
import setupTheme from './theme';
import Main from './Main';

const theme = setupTheme();

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div>
          <CssBaseline />
          <Main />
        </div>
      </JssProvider>
    </MuiThemeProvider>
  </Provider>
);

export default App;

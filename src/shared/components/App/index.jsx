import React from 'react';
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
import io from 'socket.io-client';
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

const api = process.env.REACT_APP_API_URL;
const socket = io(process.env.REACT_APP_SOCKET_SERVER_URL);

const store = configureStore(api, socket);

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

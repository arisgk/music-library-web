/* global window */
/* eslint-disable no-underscore-dangle, global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import socketActions from '../actions/sockets';

const configureStore = (api, socket, preloadedState) => {
  const store = createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(thunk.withExtraArgument({ api, socket }), logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  socketActions.create(store, socket);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;

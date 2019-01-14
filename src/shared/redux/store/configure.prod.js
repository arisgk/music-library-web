import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

import socketActions from '../actions/sockets';

const configureStore = (api, socket, preloadedState) => {
  const store = createStore(
    reducers,
    preloadedState,
    compose(applyMiddleware(thunk.withExtraArgument({ api, socket }))),
  );

  socketActions.create(store, socket);

  return store;
};

export default configureStore;

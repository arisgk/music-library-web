import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = preloadedState => {
  const store = createStore(
    reducers,
    preloadedState,
    compose(applyMiddleware(thunk)),
  );

  return store;
};

export default configureStore;

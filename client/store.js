import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './Main/reducers/index';
import counters from './data/counters'

const defaultState = {
  counters
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, defaultState, enhancers);

const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./Main/reducers/', () => {
    const nextRootReducer = require('./Main/reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export { store as default, history};

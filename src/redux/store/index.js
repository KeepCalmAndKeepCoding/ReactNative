import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducers from '../reducers';

const middleware = applyMiddleware(thunk);

const appStore = createStore(rootReducers, middleware);

export default appStore;


// ====== STANDARD ======

// import { createStore } from 'redux';
//
// import rootReducers from '../reducers';
//
// const appStore = createStore(rootReducers);
//
// export default appStore;

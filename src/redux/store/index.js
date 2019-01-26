import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const middleware = applyMiddleware(thunk);

const store = createStore(persistedReducer, middleware);

persistStore(store)
// .purge()

export default store;


// ====== STANDARD ======

// import { createStore } from 'redux';
//
// import rootReducers from '../reducers';
//
// const store = createStore(rootReducers);
//
// export default store;

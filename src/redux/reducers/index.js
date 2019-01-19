import { combineReducers } from 'redux';
import userReducers from './User';
import errorReducers from './Error';

const rootReducers = combineReducers({
  user: userReducers,
  error: errorReducers,
});

export default rootReducers;

// ====== STANDARD ======

// import { combineReducers } from 'redux';
// // import errorReducers from './Error';
//
// const rootReducers = combineReducers({
//   // error: errorReducers,
// });
//
// export default rootReducers;

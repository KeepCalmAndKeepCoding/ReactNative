import { createStore, compose } from "redux";

import rootReducers from '../reducers';

const appStore = createStore(rootReducers);

export default appStore;

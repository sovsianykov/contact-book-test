import thunk from 'redux-thunk';
import { createStore, applyMiddleware , compose } from 'redux';

import { loadState } from "./localStorage";
import { saveState } from "./localStorage";
import usersReducer from "./usersReduser";

const persistedState = loadState();

export const store = createStore(usersReducer,persistedState, compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))




store.subscribe(() => {
    saveState(store.getState());
});

import {  
  combineReducers,
  createStore,
} from 'redux';
import {reducers} from './reducers'


export function configureStore(initialState = {}) {  
  const store = createStore(
    reducers,
    initialState,
  )
  store.subscribe(() => {
    localStorage.setItem("playlists", JSON.stringify(store.getState()));
  });

  return store;
};

let initialState = JSON.parse(localStorage.getItem("playlists")) || {};

export const store = configureStore(initialState);  

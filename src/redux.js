import {  
  combineReducers,
  createStore,
} from 'redux';


export const sendResults = results => ({
  type: 'SEND_RESULTS',
  results,
});

export const createPlaylist = title => ({
  type: 'CREATE_PLAYLIST',
  title,
})

export const searchResults = (state = [], action) => {
  switch (action.type) {
    case 'SEND_RESULTS':
      return action.results
    default:
      return state
  }
}

export const playlist = (state = [], action) => {
  //switch (action.type) {
    //case 'CREATE_PLAYLIST:
      //return state.push({
  //}
  return state;


}

export const reducers = combineReducers({  
  searchResults,
  playlist
});

// store.js
export function configureStore(initialState = {}) {  
  const store = createStore(
    reducers,
    initialState,
  )
  return store;
};
export const store = configureStore();  

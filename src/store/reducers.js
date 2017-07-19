import {  
  combineReducers,
  createStore,
} from 'redux';


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


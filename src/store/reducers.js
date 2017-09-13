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

export const playlists = (state = [], action) => {
  let newState = state.slice();
  switch (action.type) {
    case 'CREATE_PLAYLIST':
      newState.push({title: action.title, videos: []});
      return newState;
    case 'DELETE_PLAYLIST':
      newState.splice(action.playlistId, 1);
      return newState;
    case 'REMOVE_VIDEO':
      newState[action.playlistId].videos.splice(action.videoId, 1)
      return newState;
    case 'ADD_VIDEO':
      newState.slice()[action.playlistId].videos.push(action.video)
      return newState;
    case 'RENAME_PLAYLIST':
      newState.slice()[action.playlistId].title = action.title;
      return newState;
    default:
      return state;
  }
}

export const reducers = combineReducers({  
  searchResults,
  playlists
});


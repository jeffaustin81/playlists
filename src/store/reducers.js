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
  switch (action.type) {
    case 'CREATE_PLAYLIST':
      var newState =  state.slice();
      newState.push({title: action.title, videos: []});
      return newState;
    case 'DELETE_PLAYLIST':
      var newState =  state.slice();
      newState.splice(action.playlistId, 1);
      return newState;
    case 'REMOVE_VIDEO':
      console.log(state)
      console.log(action)
      var newState =  state.slice();
      newState[action.playlistId].videos.splice(action.videoId, 1)
      return newState;
    case 'ADD_VIDEO':
      console.log(action)
      var newState =  state.slice();
      newState.slice()[action.playlistId].videos.push(action.video)
      return newState;
    default:
      return state;
  }
}

export const reducers = combineReducers({  
  searchResults,
  playlists
});


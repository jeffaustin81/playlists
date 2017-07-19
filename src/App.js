import React, {  
  Component,
} from 'react';

import { connect } from 'react-redux';

import {  
  sendResults
} from './redux';

import {
  video_search
} from './helpers/video_search.js';

import VideoResults from './components/VideoResults.js';
import Playlist from './components/VideoResults.js';


export class App extends Component {
  constructor() {
    super();
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e) {
    if (e.charCode === 13) {
      video_search.bind(this)(e.target.value);
    }
  }
  render() {
    return (
      <div>
        <input type='text' onKeyPress={this.onSearch} placeholder='Search' />
        <VideoResults videos={this.props.results}/>
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
console.log(state);
return {  
  results: state.searchResults,
}
};

const mapDispatchToProps = {  
  sendResults
};

const AppContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;  

import React, {  
  Component,
} from 'react';

import { connect } from 'react-redux';

import {  
  sendResults,
  createPlaylist,
  deletePlaylist,
  addVideo,
  removeVideo
} from './store/actions';

import {
  video_search
} from './helpers/video_search.js';
import Playlist from './components/Playlist.js'
import VideoResults from './components/VideoResults.js';


export class App extends Component {
  constructor() {
    super();
    this.state = {iframe: undefined};
    this.onSearchKeypress = this.onSearchKeypress.bind(this);
    this.onCreatePlaylistKeypress = this.onCreatePlaylistKeypress.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
  }
  onSearchKeypress(e) {
    if (e.charCode === 13) {
      video_search.bind(this)(e.target.value);
    }
  }
  onCreatePlaylistKeypress(e) {
    if (e.charCode === 13) {
      this.props.createPlaylist(e.target.value);
    }
  }
  playPlaylist(i) {
    let videos = this.props.playlists[i].videos;
    console.log(videos)
    let url = "https://www.youtube.com/embed/";
    videos.forEach( (video,i) => {
      if (i == 0)
        url += video.id + "?loop=1&autoplay=1&enablejsapi=1&playlist=";
      else
        url += video.id + ",";
      alert(url)
    });
    this.setState({iframe:url})
  }
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <div className="search">
            <input type='text' onKeyPress={this.onSearchKeypress} placeholder='Search' />
          </div>
          <div className="results">
            <VideoResults 
              videos={this.props.results} 
              playlists={this.props.playlists} 
              addToPlaylist={(video,playlistId) => this.props.addVideo(video,playlistId)}
            />
          </div>
        </div>
        <div className="main">
          <div className="createPlaylist">
            <input type='text' onKeyPress={this.onCreatePlaylistKeypress} placeholder='Create Playlist' />
          </div>
          <div className="playlists">
            {
              this.props.playlists.map( (playlist, i) => {
                return (
                  <Playlist 
                    key={i}
                    _key={i}
                    videos={playlist.videos} 
                    title={playlist.title} 
                    deletePlaylist={(i) => this.props.deletePlaylist(i)}
                    deleteVideo={(playlistId, videoId) => this.props.removeVideo(playlistId, videoId)}
                    play={(i) => this.playPlaylist(i)}
                  />
                )
              })
            }
          </div>
        </div>
        <iframe src={this.state.iframe} />
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  return {  
    results: state.searchResults,
    playlists: state.playlists
  }
};

const mapDispatchToProps = {  
  sendResults,
  createPlaylist,
  deletePlaylist,
  addVideo,
  removeVideo
};

const AppContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;  

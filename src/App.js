import React, {  
  Component,
} from 'react';

import { connect } from 'react-redux';

import {  
  sendResults,
  createPlaylist,
  deletePlaylist,
  addVideo,
  removeVideo,
  renamePlaylist,
} from './store/actions';

import {
  video_search
} from './helpers/video_search.js';
import Playlist from './components/Playlist.js'
import Video from './components/Video.js'
import VideoResults from './components/VideoResults.js';


export class App extends Component {
  constructor() {
    super();
    this.state = {iframe: undefined};
    this.onSearchKeypress = this.onSearchKeypress.bind(this);
    this.onCreatePlaylistKeypress = this.onCreatePlaylistKeypress.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
    this.renderPlaylists = this.renderPlaylists.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
  }
  onSearchKeypress(e) {
    if (e.charCode === 13) {
      video_search(e.target.value, this);
    }
  }
  onCreatePlaylistKeypress(e) {
    if (e.charCode === 13) {
      this.props.createPlaylist(e.target.value);
    }
  }
  playPlaylist(i) {
    let videos = this.props.playlists[i].videos;
    let url = "https://www.youtube.com/embed/";
    videos.forEach( (video,i) => {
      if (i == 0)
        url += video.id + "?loop=1&autoplay=1&enablejsapi=1&playlist=";
      else
        url += video.id + ",";
    });
    this.setState({iframe:url})
  }

  renderPlaylists() {
    var playlists = this.props.playlists.map( (playlist, id) => {
      return (
        <Playlist 
          key={id}
          deletePlaylist={(id) => this.props.deletePlaylist(id)}
          updateTitle={(title) => {this.props.renamePlaylist(id, title)}}
          play={() => this.playPlaylist(id)}
          title={playlist.title} 
        >
          { this.renderVideos(playlist.videos, id) }
        </Playlist>
      )
    });
    return playlists;
  }

  renderVideos(videos, playlist_id) {
    return (
      videos.map( (video, i) => {
        return ( 
          <Video 
            remove={() => this.props.removeVideo(playlist_id, i)}
            title={video.title}
            key={i}
            thumbnail={video.thumbnail} 
          />
        )
      })
    )
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <div className="search">
            <input type='text' onKeyPress={this.onCreatePlaylistKeypress} placeholder='Create Playlist' />
            <input type='text' onKeyPress={this.onSearchKeypress} placeholder='Search Youtube' />
          </div>
          <VideoResults 
            videos={this.props.results} 
            playlists={this.props.playlists} 
            addToPlaylist={(video,playlistId) => this.props.addVideo(video,playlistId)}
          />
        </div>
        <div className={this.state.iframe === undefined ? "main" : "main playing"}>
          <div className="createPlaylist">
          </div>
          <div className="playlists">
            {this.renderPlaylists()}
          </div>
        </div>
        { this.state.iframe ? 
            <div className="player"><iframe src={this.state.iframe} /></div> : ""
        }
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
  renamePlaylist,
  addVideo,
  removeVideo
};

const AppContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;  


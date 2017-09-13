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
import PlaylistTitle from './components/PlaylistTitle.js'
import Video from './components/Video.js'


export class App extends Component {
  constructor() {
    super();
    this.state = {iframe: undefined, searchview: false, currentlyopen:null};
    this.onSearchKeypress = this.onSearchKeypress.bind(this);
    this.onCreatePlaylistKeypress = this.onCreatePlaylistKeypress.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
    this.renderPlaylist = this.renderPlaylist.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }
  onSearchKeypress(e) {
    if (e.charCode === 13) {
      video_search(e.target.value, this);
      this.setState({currentlyopen:null});
      e.target.value = "";
    }
  }
  onCreatePlaylistKeypress(e) {
    if (e.charCode === 13) {
      this.props.createPlaylist(e.target.value);
      e.target.value = "";
    }
  }

  playPlaylist(i) {
    let videos = this.props.playlists[i].videos;
    let url = "https://www.youtube.com/embed/";
    videos.forEach( (video,i) => {
      if (i === 0)
        url += video.id + "?loop=1&autoplay=1&enablejsapi=1&playlist=";
      else
        url += video.id + ",";
    });
    this.setState({iframe:url})
  }

  renderPlaylist(id) {
      if (this.props.playlists[id] === undefined)
        return ""
      return (
        <Playlist 
          key={id}
          deletePlaylist={(id) => this.props.deletePlaylist(id)}
          play={() => this.playPlaylist(id)}
          updateTitle={(title) => {this.props.renamePlaylist(id, title)}}
          title={this.props.playlists[id].title}
        >
          { this.renderVideos(this.props.playlists[id].videos, id) }
        </Playlist>
      )
  }

  renderPlaylists() {
    var playlists = this.props.playlists.map( (playlist, id) => {
      return ( 
        <PlaylistTitle
          key={id}
          _key={id}
          renderPlaylist={(id) => this.setState({"currentlyopen":id})}
          title={playlist.title} 
        >
        </PlaylistTitle>
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
          >
            <div>
              <button
                className="removeX" 
                onClick={this.props.remove}
               >Delete</button>
              <button onClick={this.props.play}>Play</button>
            </div>
          </Video>
        )
      })
    )
  }

  renderResults() {
    return (
      this.props.results.map( (video, i) => {
        return (
          <Video 
            title={video.title}
            key={i}
          >
            {this.renderSelect(video)}
          </Video>
        )
      })
    )
  }  

  renderSelect(video) {
    var options = [];
    for (var i = 0; i < this.props.playlists.length; ++i) {
      options.push(
        <option value={i} key={i}>
          {this.props.playlists[i].title}
        </option>
      )
    }
    if (this.props.playlists.length) {
      options.unshift(<option key={-1} value={-1}>+</option>)
      return (
        <select value={this.state.value} onChange={(e) => this.addToPlaylist(video,e.target.value)}>
          {options}
        </select>
      ) 
    }
  }


  render() {
    return (
      <div className="app">
        <div className="topbar">
          <span>Create Playlist: <input type='text' onKeyPress={this.onCreatePlaylistKeypress} /></span>
          <span className="searchWrapper">Search Youtube: <input type='text' onKeyPress={this.onSearchKeypress} /></span>
        </div>
        <div className="main">
          <div className="gutter">
            <div className="playlists">
              {this.renderPlaylists()}
            </div>
          </div>
  
          <div className="detailpanel">
            {
              this.state.currentlyopen !== null ?
                this.renderPlaylist(this.state.currentlyopen) : this.renderResults()
            }

          </div>
            { this.state.iframe ? 
              <div className="player"><iframe src={this.state.iframe} title="Youtube"/></div> : ""
            }
        </div>
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


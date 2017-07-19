import React, { Component } from 'react';
import Video from './Video.js'



class Playlist extends React.Component {
  render() {

    var videos = [];
    for (var i = 0; i < this.props.videos.length; ++i) {
      videos.push(
        <Video 
          title={this.props.videos[i]} 
          number={i} 
          remove={(i) => this.props.remove(this.props.locate, i)}
        />
      )
    }
      return (
        <div id="playlist" className="playlist"><h1>{this.props.title}<span className="removeX" onClick={() => this.props.removePlaylist(this.props.locate)}>x</span></h1>{videos}</div>
      )
  }
}

export default Playlist

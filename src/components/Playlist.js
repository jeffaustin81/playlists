import React, { Component } from 'react';
import Video from './Video.js'



class Playlist extends React.Component {
  render() {

    var videos = [];
    for (var i = 0; i < this.props.videos.length; ++i) {
      videos.push(
        <Video 
          key={i}
          title={this.props.videos[i].title} 
          thumbnail={this.props.videos[i].thumbnail} 
          number={i} 
          remove={(videoId) => this.props.deleteVideo(this.props._key, videoId)}
        />
      )
    }
      return (
        <div className="playlist">
          <h3 class="title">{this.props.title}
          </h3>
            <span 
              className="removeX" 
              onClick={() => this.props.deletePlaylist(this.props._key)}
            >
              x
            </span>
          <button onClick={() => this.props.play(this.props._key)}>Play Playlist</button>
          {videos}
        </div>
      )
  }
}

export default Playlist

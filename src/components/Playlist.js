import React, { Component } from 'react';
import Video from './Video.js'



class Playlist extends React.Component {
  constructor() { 
    super();
    this.state = { editing:false };
    this.titleEdit = this.titleEdit.bind(this);
    this.titleEditing = this.titleEditing.bind(this);
  }
  titleEdit(e) {
    this.setState({editing: true})
    e.target.focus();

  }
  titleEditing(e, key) {
    this.props.updateTitle(key, e.target.innerHTML);
  }




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
          <h3 
            className="title"
            contentEditable={this.state.editing} 
            onClick={this.titleEdit} 
            onBlur={(e) => {this.titleEditing(e,this.props._key)}}
          >
            {this.props.title}
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

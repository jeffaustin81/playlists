import React, { Component } from 'react';
import Video from './Video.js'



class Playlist extends React.Component {
  constructor() { 
    super();
    this.state = { editing:false };
    this.titleEdit = this.titleEdit.bind(this);
  }
  titleEdit(e) {
    this.setState({editing: true})
    e.target.focus();

  }

  render() {
      return (
        <div className="playlist"> 
          <h3 
            className="title"
            contentEditable={this.state.editing} 
            onClick={this.titleEdit} 
            onBlur={(e) => {this.props.updateTitle(e.target.innerHTML)}}
          >
            {this.props.title}
          </h3>
            <span 
              className="removeX" 
              onClick={() => this.props.deletePlaylist(this.props._key)}
            >
              x
            </span>
          <button onClick={this.props.play}>Play Playlist</button>
          {this.props.children}
        </div>
      )
  }
}

export default Playlist

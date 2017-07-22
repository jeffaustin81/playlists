import React, { Component } from 'react';

class VideoResults extends Component {
  constructor() {
    super();
    this.state = {value: -1}
    
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
        <select value={this.state.value} onChange={(e) => this.props.addToPlaylist(video,e.target.value)}>
          {options}
        </select>
      ) 
    }
  }
  render() {

    return (
      <div className="results">
        {this.props.videos.map((video, i) => (
          <div className="result" key={i}>
            <img src={video.thumbnail} />
            <span>{video.title}</span>
            {this.renderSelect(video)}
          </div>
        ))}
      </div>
    )
  }
}

export default VideoResults

import React, { Component } from 'react';

class VideoResults extends Component {
  render() {
    var options = [];
    /*for (var i = 0; i < this.props.playlists.length; ++i) {
      options.push(
        <option value={i}>
          {this.props.playlists[i].title}
        </option>
      )
    }*/
    //if (this.props.playlists.length) options.unshift(<option selected="selected">+</option>)
    return (
      <div>
        {this.props.videos.map((video, i) => (
          <div key={i}>
            <img src={video.thumbnail} />
            <div>{video.title}</div>
            //<select onChange={(e) => this.props.onChange(e, this.props.video.title)}>
             // {options}
            //</select>
          </div>
        ))}
      </div>
    )
  }
}

export default VideoResults

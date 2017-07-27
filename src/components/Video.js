import React, { Component } from 'react';


class Video extends Component {
  render() {
    return (
      <div className="video">
        <img src={this.props.thumbnail} />
        <span className="title">{this.props.title}</span>
        <a className="removeX" onClick={this.props.remove}>X</a>
      </div>
    )
  }
}

export default Video

import React, { Component } from 'react';


class Video extends Component {
  render() {
    return (
      <div class="video">
        {this.props.title}
        <a className="removeX" onClick={() => this.props.remove(this.props.number)}>X</a>
      </div>
    )
  }
}

export default Video

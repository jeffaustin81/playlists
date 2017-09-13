import React from 'react';



class Playlist_Title extends React.Component {
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
        <div className="playlist" onClick={() => this.props.renderPlaylist(this.props._key)} > 
          <div
            className="title"
          >
            {this.props.title}
          </div>
        </div>
      )
  }
}

export default Playlist_Title

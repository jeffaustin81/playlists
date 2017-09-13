import React from 'react';



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
          <div className="playlisttopbar">
            <h3 
              className="title"
              contentEditable={this.state.editing} 
              onClick={this.titleEdit} 
              onBlur={(e) => {this.props.updateTitle(e.target.innerHTML)}}
            >
              {this.props.title}
            </h3>
            <div class="buttons">
              <button
                className="removeX" 
                onClick={() => this.props.deletePlaylist(this.props._key)}
              >
                Delete
              </button> 
              <button onClick={this.props.play}>Play</button>
            </div>
          </div>

          {this.props.children}
        </div>
      )
  }
}

export default Playlist

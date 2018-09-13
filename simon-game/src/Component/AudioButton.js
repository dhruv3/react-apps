import React, { Component } from 'react';
import './AudioButton.css';

class AudioButton extends Component {

  render() {
    let bgColor = {
      backgroundColor: this.props.info.color
    };
    return (
      <div className="audioDiv" style={bgColor}>
        <audio className="clip" src={this.props.info.audio}></audio>
      </div>
    );
  }
}

export default AudioButton;

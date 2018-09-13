import React, { Component } from 'react';
import './AudioButton.css';

class AudioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.playAudio = this.playAudio.bind(this)
  }
  playAudio(e){
    e.target.children[0].play();
  }
  render() {
    let className = `audioDiv ${this.props.info.name}`;
    return (
      <div className={className} onClick={this.playAudio}>
        <audio className="clip" src={this.props.info.audio}></audio>
      </div>
    );
  }
}

export default AudioButton;

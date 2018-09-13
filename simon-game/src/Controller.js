import React, { Component } from 'react';
import ToggleBtn from './Component/ToggleBtn.js';
import PlayBtn from './Component/PlayBtn.js';

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.playBtn = this.playBtn.bind(this);
  }

  playBtn(){

  }

  render() {
    return (
      <div className="controller">
        <PlayBtn name="Play" onClickCallBack={this.playBtn}/>
        <ToggleBtn name="Strict Mode" onClickCallBack={this.playBtn}/>
      </div>
    );
  }
}

export default Controller;

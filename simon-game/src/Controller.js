import React, { Component } from 'react';
import ToggleBtn from './Component/ToggleBtn.js';
import PlayBtn from './Component/PlayBtn.js';

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.playBtnClick = this.playBtnClick.bind(this);
    this.toggleBtnClick = this.toggleBtnClick.bind(this);
  }

  playBtnClick(){
  }

  toggleBtnClick(){
  }

  render() {
    return (
      <div className="controller">
        <PlayBtn name="Play" onClickCallBack={this.playBtnClick}/>
        <ToggleBtn name="Strict Mode" onClickCallBack={this.toggleBtnClick}/>
      </div>
    );
  }
}

export default Controller;

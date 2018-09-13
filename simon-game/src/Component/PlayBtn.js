import React, { Component } from 'react';
import './PlayBtnStyle.css';

class PlayBtn extends Component {
  render() {
    return (
      <button onClick={this.props.onClickCallBack}>
        {this.props.name}
        <i class="fa fa-play-circle fa-2x"></i>
      </button>
    )
  }
}

export default PlayBtn;

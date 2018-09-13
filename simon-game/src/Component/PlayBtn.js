import React, { Component } from 'react';
import './PlayBtnStyle.css';

class PlayBtn extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClickCallBack}>
          <div>{this.props.name}</div>
        </button>
      </div>
    )
  }
}

export default PlayBtn;

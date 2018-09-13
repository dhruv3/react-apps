import React, { Component } from 'react';
import './ToggleBtnStyle.css';

class ToggleBtn extends Component {
  render() {
    return (
      <div className="sliderBtnContainer">
        <div>{this.props.name}</div>
        <label className="switch" onClick={this.props.onClickCallBack}>
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
      </div>
    )
  }
}

export default ToggleBtn;

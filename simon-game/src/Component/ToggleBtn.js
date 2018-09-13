import React, { Component } from 'react';
import './ToggleBtnStyle.css';

class ToggleBtn extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <label class="switch">
          <input type="checkbox"/>
          <span class="slider round"></span>
        </label>
      </div>
    )
  }
}

export default ToggleBtn;

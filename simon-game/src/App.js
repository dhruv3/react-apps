import React, { Component } from 'react';
import Controller from './Controller.js';
import ButtonContainer from './ButtonContainer.js';
import {generateMainString} from './DataUtils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pattern: "",
      selectBtn: "",
    };
    this.playPressed = this.playPressed.bind(this);
  }
  playPressed(){
    const pattern = generateMainString().split(",");
    for(let i = 0; i < pattern.length; i++){
      
    }
  }
  render() {
    return (
      <div className="container">
        <Controller playPressed={this.playPressed}/>
        <ButtonContainer playBtn={this.state.selectBtn}/>
      </div>
    );
  }
}

export default App;

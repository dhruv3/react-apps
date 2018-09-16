import React, { Component } from 'react';
import Controller from './Controller.js';
import ButtonContainer from './ButtonContainer.js';
import {generateMainString} from './DataUtils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pattern: "",
    };
    this.playPressed = this.playPressed.bind(this);
  }
  playPressed(){
    const pattern = generateMainString();
    debugger;
  }
  render() {
    return (
      <div className="container">
        <Controller playPressed={this.playPressed}/>
        <ButtonContainer/>
      </div>
    );
  }
}

export default App;

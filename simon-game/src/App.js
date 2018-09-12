import React, { Component } from 'react';
import Controller from './Controller.js';
import ButtonContainer from './ButtonContainer.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Controller/>
        <ButtonContainer/>
      </div>
    );
  }
}

export default App;

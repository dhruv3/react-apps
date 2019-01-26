import React, { Component } from 'react';
import CurrentSpaceCowboys from './CurrentSpaceCowboys';
import ISSData from './ISSData';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CurrentSpaceCowboys/>
        <ISSData/>
      </div>
    );
  }
}

export default App;

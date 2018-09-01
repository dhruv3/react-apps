import React, { Component } from 'react';
import Driver from './Driver.js'
import Trip from './Trip.js'
import ReportGenerator from './ReportGenerator.js'

class App extends Component {
  render() {
    return (
      <div class="container">
        <Driver/>
        <Trip/>
        <ReportGenerator/>
      </div>
    );
  }
}

export default App;

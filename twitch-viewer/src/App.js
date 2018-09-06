import React, { Component } from 'react';
import ListContainer from './ListContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Twitch Streamers</h1>
        </div>
        <ListContainer/>
      </div>
    );
  }
}

export default App;

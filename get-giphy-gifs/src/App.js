import React, { Component } from 'react';
import DisplayContainer from './displayContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Trending GIFs</div>
        <div>
          <button>Load GIFs</button>
          <button>Randomize Order</button>
          <button>Select One at Random</button>
          <button>Clear ALL</button>
        </div>
        <DisplayContainer/>
      </div>
    );
  }
}

export default App;

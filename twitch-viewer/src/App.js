import React, { Component } from 'react';
import ListContainer from './ListContainer.js';
import SelectStreamFilter from './SelectStreamFilter.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    };
    this.updateSelector = this.updateSelector.bind(this)
  }

  updateSelector(selector){
    this.setState({
      filter: selector.target.innerText.toLowerCase()
    })
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Twitch Streamers</h1>
        </div>
        <SelectStreamFilter updateSelector={this.updateSelector}/>
        <ListContainer/>
      </div>
    );
  }
}

export default App;

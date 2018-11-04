import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import MainBody from './MainBody.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
    };
  }

  componentDidMount() {
    const url = "https://api.jsonbin.io/b/5bdf3a85ced6254f0e79e6d9";
    fetch(url)
      .then(res => res.json())
        .then(response => {
          this.setState({
            content: response[0]
          })
        })
  }
  render() {
    return (
      <div>
        <Sidebar content={this.state.content}/>
        <MainBody content={this.state.content}/>
      </div>
    );
  }
}

export default App;

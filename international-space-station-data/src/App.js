import React, { Component } from 'react';
import CurrentSpaceCowboys from './CurrentSpaceCowboys';
import ISSData from './ISSData';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      intervalId: 0,
      cowboyContent: {},
    }
    this.timer = this.timer.bind(this)
  }

  //https://stackoverflow.com/questions/36299174/setinterval-in-a-react-app
  componentDidMount() {
    var intervalId = setInterval(this.timer, 5000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
  }
  
  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }
  
  timer() {
    var that = this;
    fetch("https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json")
      .then(res => res.json())
        .then(function(items){
                that.setState({cowboyContent: items})
              }
            )
  }

  render() {
    return (
      <div className="container">
        <h1>International Space Station Information</h1>
        <CurrentSpaceCowboys content={this.state.cowboyContent}/>
        <ISSData/>
      </div>
    );
  }
}

export default App;

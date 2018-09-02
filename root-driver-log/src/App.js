import React, { Component } from 'react';
import Driver from './Driver.js'
import Trip from './Trip.js'
import ReportGenerator from './ReportGenerator.js'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      mainObj: new Map(),
    }
  }
  updateDriverCallBack(driverName){
    const Map = this.state.mainObj;
    if(Map.get(driverName) == null && Map.get(driverName) !== ""){
      let obj = {'total_dist': 0, 'total_time': 0, 'avg_speed': 0}
      Map.set(driverName, obj)
      this.setState({mainObj: Map})
    }
    else{
      alert("Check driver name please, my dude")
    }
  }
  render() {
    return (
      <div className="container">
        <Driver updateDriverCallBack={this.updateDriverCallBack.bind(this)}/>
        <Trip selectListContent={this.state.mainObj.keys()}/>
        <ReportGenerator/>
      </div>
    );
  }
}

export default App;

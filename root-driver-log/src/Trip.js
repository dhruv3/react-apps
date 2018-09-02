import React, { Component } from 'react';

class Trip extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  createOptions(iter){
    let items = []
    var result = iter.next();
    while (!result.done) {
      items.push(<option>{result.value}</option>)
      result = iter.next();
    }
    return items;
  }
  render(){
    return(
      <div className="tripContainer">
        <h3>Register Trip:</h3>
        <div className="tripInputContainer">
          <div className="getTripInput">
            <label for="driver">Select Driver:</label>
            <select name="driver">
              {this.createOptions(this.props.selectListContent)}
            </select>
          </div>
          <div className="getTripInput">
            <label for="start-time">Start Time:</label>
            <input type="time" name="start-time" min="0:00" max="23:59" required />
          </div>
          <div className="getTripInput">
            <label for="end-time">End Time:</label>
            <input type="time" name="end-time" min="0:00" max="23:59" required />
          </div>
          <div className="getTripInput">
            <label for="distance">Distance Covered:</label>
            <input type="number" name="distance"
                       placeholder="Enter distance..."
                       min="0" max="10000" />
          </div>
        </div>
      </div>
    )
  }
}

export default Trip

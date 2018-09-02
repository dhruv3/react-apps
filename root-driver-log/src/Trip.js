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
      items.push(<option value={result.value} key={result.value}>{result.value}</option>)
      result = iter.next();
    }
    return items;
  }
  render(){
    return(
      <div className="tripContainer">
        <h3>Register Trip</h3>
        <div className="tripInputContainer">
          <div className="getTripInput">
            <label htmlFor="driver">Select Driver:</label>
            <select name="driver">
              <option value="" disabled selected>Select..</option>
              {this.createOptions(this.props.selectListContent)}
            </select>
          </div>
          <div className="getTripInput">
            <label htmlFor="start-time">Start Time:</label>
            <input type="time" name="start-time" min="0:00" max="23:59" required />
          </div>
          <div className="getTripInput">
            <label htmlFor="end-time">End Time:</label>
            <input type="time" name="end-time" min="0:00" max="23:59" required />
          </div>
          <div className="getTripInput">
            <label htmlFor="distance">Distance Covered:</label>
            <input type="number" name="distance"
                       placeholder="Enter distance..."
                       min="0" max="10000" />
          </div>
        </div>
        <div className="registerTripBtn">
          <button className="btn btn-primary">Register Trip!</button>
        </div>
      </div>
    )
  }
}

export default Trip

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
  getTimeHr(inp){
    const arr = inp.split(":")
    return parseFloat(arr[0]) + (parseFloat(arr[1])/60)
  }

  speedConstraint(){
    const startTime = this.refs.startTime.value;
    const endTime = this.refs.endTime.value;
    const timeDiff = this.getTimeHr(endTime) - this.getTimeHr(startTime)
    if(timeDiff <= 0){
      alert("Incorrect time input")
      return false
    }
    const dist = parseFloat(this.refs.distCovered.value)
    if(dist == ""){
      alert("Enter Distance")
      return false;
    }
    return (parseFloat(dist/timeDiff) > 5 &&  parseFloat(dist/timeDiff) < 100) ? true : false
  }
  registerTrip(){
    //check if avg speed lies between 5 to 100 mph
    if(this.speedConstraint()){
      const driver = this.refs.selectDriver.value
      const Map = this.props.entireMapObj
      if(Map.get(driver) == null){
        alert("Register driver please")
        return
      }
      const tempObj = Map.get(driver)
      tempObj['total_dist'] += parseFloat(this.refs.distCovered.value)
      const startTime = this.refs.startTime.value;
      const endTime = this.refs.endTime.value;
      tempObj['total_time'] += (this.getTimeHr(endTime) - this.getTimeHr(startTime))
      tempObj['avg_speed'] = tempObj['total_dist']/tempObj['total_time']
      Map.set(driver,tempObj)
      this.props.updateMapObject(Map)
    }
    else{
      alert("Only trips with avg speed greater than 5 and less than 5 will be registered.")
    }
  }
  render(){
    return(
      <div className="tripContainer">
        <h3>Register Trip</h3>
        <div className="tripInputContainer">
          <div className="getTripInput">
            <label htmlFor="driver">Select Driver:</label>
            <select ref="selectDriver" name="driver">
              <option value="" disabled selected>Select..</option>
              {this.createOptions(this.props.selectListContent)}
            </select>
          </div>
          <div className="getTripInput">
            <label htmlFor="start-time">Start Time:</label>
            <input ref="startTime" type="time" name="start-time" min="0:00" max="23:59" required />
          </div>
          <div className="getTripInput">
            <label htmlFor="end-time">End Time:</label>
            <input ref="endTime" type="time" name="end-time" min="0:00" max="23:59" required />
          </div>
          <div className="getTripInput">
            <label htmlFor="distance">Distance Covered:</label>
            <input ref="distCovered" type="number" name="distance"
                       placeholder="Enter distance..."
                       min="0" max="10000" />
          </div>
        </div>
        <div className="registerTripBtn">
          <button className="btn btn-primary" onClick={this.registerTrip.bind(this)}>Register Trip!</button>
        </div>
      </div>
    )
  }
}

export default Trip

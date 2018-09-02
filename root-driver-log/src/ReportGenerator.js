import React, { Component } from 'react';

class ReportGenerator extends Component{
  genReport(){
    const Map = this.props.entireMapObj
    console.log("Output:")
    Map.forEach((val, key) => {console.log(key + ": " ); console.log(val)})
  }
  render(){
    return(
      <div className="genReport">
        <h3>Generate Report</h3>
        <button className="btn btn-primary" onClick={this.genReport.bind(this)}>Create Report!</button>
      </div>
    )
  }
}

export default ReportGenerator

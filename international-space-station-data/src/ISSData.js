import React, { Component } from 'react';

class ISSData extends Component {
  constructor(props){
    super(props);
    this.state ={
      content: {}
    };
  }
  
  componentWillReceiveProps(props){
    if(props.content != undefined)
      this.setState({content: props.content})
  }

  render() {
    return (
      <div className="issDataContainer">
        <h3>Current Information on ISS</h3>
        <table>
          <tbody>
            <tr><td>Current Latitude</td><td>{this.state.content.iss_position != undefined? this.state.content.iss_position.latitude : 0}</td></tr>
            <tr><td>Current Longitude</td><td>{this.state.content.iss_position != undefined? this.state.content.iss_position.longitude : 0}</td></tr>
            <tr><td>Current Timestamp (unix)</td><td>{this.state.content.timestamp != undefined? this.state.content.timestamp : 0}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ISSData;

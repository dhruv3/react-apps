import React, { Component } from 'react';

class Driver extends Component{
  constructor(){
    super();
    this.state = {
      name: ""
    }
  }

  onInputChange(e){
    this.setState({
      name: e.target.value
    })
  }

  registerDriver(){
    if(this.state.name != ""){
      this.props.updateDriverCallBack(this.state.name)
      this.setState({name: ""})
    }
  }

  render(){
    return(
      <div className="driverContainer">
        <h3>Register Driver</h3>
        <div className="driverInputContainer">
          <input
              placeholder="Enter Driver Name..."
              value={this.state.name}
              onChange={this.onInputChange.bind(this)}/>
            <button type="button" className="btn btn-primary" onClick={this.registerDriver.bind(this)}>Save Driver!</button>
        </div>
      </div>
    )
  }
}

export default Driver

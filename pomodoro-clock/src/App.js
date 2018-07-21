import React, { Component } from 'react';

class ClkSetting extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12" id="break-label">{this.props.header}</div>
        </div>
        <div className="row">
          <button id= {`${this.props.name}-decrement`} class="offset-sm-2 col-sm-2">
            <i class="fa fa-arrow-down fa-2x"></i>
          </button>
          <div className="col-sm-4" id="break-label">
            {this.props.header}
          </div>
          <button id={`${this.props.name}-increment`} class="offset-sm-2 col-sm-2">
            <i class="fa fa-arrow-up fa-2x"></i>
          </button>
        </div>
      </React.Fragment>
    )
  }
}

class ClkDisplay extends Component{
  render(){
    return(
      <div className="row">

      </div>
    )
  }
}

class ClkControl extends Component{
  render(){
    return(
      <div className="row">
        <button id="start_stop">
          <i class="fa fa-play fa-2x"></i>
          <i class="fa fa-pause fa-2x"></i>
        </button>
        <button id="reset">
          <i class="fa fa-refresh fa-2x"></i>
        </button>
      </div>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      breakVal: 5,
      sessionVal: 25
    }
  }
  render() {
    return (
      <div className="container" id="clkWrapper">
        <div className="row clkHeader">Pomodoro Clock</div>
        <div className="row">
          <div className="col-sm-6">
            <ClkSetting
              name = "break"
              header = "Break Length"
              defaultVal = {this.state.breakVal}/>
          </div>
          <div className="col-sm-6">
            <ClkSetting
              name = "session"
              header = "Session Length"
              defaultVal = {this.state.sessionVal}/>
          </div>
        </div>
        <ClkDisplay/>
        <ClkControl/>
      </div>
    );
  }
}

export default App;

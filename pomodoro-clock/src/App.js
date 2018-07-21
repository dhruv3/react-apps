import React, { Component } from 'react';

class ClkSetting extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12" id="break-label">{this.props.header}</div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button id= {`${this.props.name}-decrement`} className="arrowsBtn">
              <i className="fa fa-arrow-down"></i>
            </button>
            <div id={`${this.props.name}-val`} className="settingValue">
              {this.props.defaultVal}
            </div>
            <button id={`${this.props.name}-increment`} className="arrowsBtn">
              <i className="fa fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

class ClkDisplay extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="col-sm-12 text-center" id="curr-label">
            {this.props.header}
          </div>
        </div>
        <div className="col-sm-12">
          <div className="offset-sm-2 col-sm-8">
            {this.props.value}
          </div>
        </div>
      </div>
    )
  }
}

class ClkControl extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-sm-12">
          <button id="start_stop">
            <i className="fa fa-play"></i>
            <i className="fa fa-pause"></i>
          </button>
          <button id="reset">
            <i className="fa fa-undo"></i>
          </button>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      breakVal: 5,
      sessionVal: 25,
      currTimer: 'Session'
    }
  }
  render() {
    return (
      <div className="container" id="clkWrapper">
        <div className="clkHeader text-center">Pomodoro Clock</div>
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
        <ClkDisplay
          header={this.state.currTimer}
          value={this.state.sessionVal}/>
        <ClkControl/>
      </div>
    );
  }
}

export default App;

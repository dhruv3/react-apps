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
            <button id= {`${this.props.name}-decrement`} className="arrowsBtn"
              onClick={this.props.updateTimer}>
              <i className="fa fa-arrow-down"></i>
            </button>
            <div id={`${this.props.name}-val`} className="settingValue">
              {this.props.defaultVal}
            </div>
            <button id={`${this.props.name}-increment`} className="arrowsBtn"
              onClick={this.props.updateTimer}>
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
          <button id="reset" onClick={this.props.resetTimer}>
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
    this.handleBreakTimer = this.handleBreakTimer.bind(this);
    this.handleSessionTimer = this.handleSessionTimer.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  handleReset(){
    this.setState({
      breakVal: 5,
      sessionVal: 25
    })
  }

  handleBreakTimer(e){
    //https://www.youtube.com/watch?v=SpatM1W5wRQ
    //currentTarget vs target
    if(e.currentTarget['id'] == "break-decrement"){
      if(this.state.breakVal > 0){
        this.setState({
          breakVal: this.state.breakVal-1
        })
      }
      else{
        alert('Cannot set Break timer below 0 mins')
      }
    }
    else{
      if(this.state.breakVal < 60){
        this.setState({
          breakVal: this.state.breakVal+1
        })
      }
      else{
        alert('Cannot set Break timer above 60 mins')
      }
    }
  }

  handleSessionTimer(e){
    if(e.currentTarget['id'] == "session-decrement"){
      if(this.state.sessionVal > 0){
        this.setState({
          sessionVal: this.state.sessionVal-1
        })
      }
      else{
        alert('Cannot set Session timer below 0 mins')
      }
    }
    else{
      if(this.state.sessionVal < 60){
        this.setState({
          sessionVal: this.state.sessionVal+1
        })
      }
      else{
        alert('Cannot set Session timer above 60 mins')
      }
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
              defaultVal = {this.state.breakVal}
              updateTimer={this.handleBreakTimer}/>
          </div>
          <div className="col-sm-6">
            <ClkSetting
              name = "session"
              header = "Session Length"
              defaultVal = {this.state.sessionVal}
              updateTimer={this.handleSessionTimer}/>
          </div>
        </div>
        <ClkDisplay
          header={this.state.currTimer}
          value={this.state.sessionVal}/>
        <ClkControl
          resetTimer={this.handleReset}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class ClkSetting extends Component{
  render(){
    return(
      <div>

      </div>
    )
  }
}

class ClkCounter extends Component{
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
  render() {
    return (
      <div className="container" id="clkWrapper">
        <div className="row clkHeader">Pomodoro Clock</div>
        <div className="row">
          <div className="col-sm-6">
            <ClkSetting/>
          </div>
          <div className="col-sm-6">
            <ClkSetting/>
          </div>
        </div>
        <ClkCounter/>
        <ClkControl/>
      </div>
    );
  }
}

export default App;

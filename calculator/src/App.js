import React, { Component } from 'react';


class ButtonPad extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="row customBtn">
          <button id="clear" className="col-sm-6">AC</button>
          <button id="divide" className="col-sm-3">/</button>
          <button id="multiply" className="col-sm-3">X</button>
        </div>
        <div className="row customBtn">
          <button id="seven" className="col-sm-3">7</button>
          <button id="eight" className="col-sm-3">8</button>
          <button id="nine" className="col-sm-3">9</button>
          <button id="subtract" className="col-sm-3">-</button>
        </div>
        <div className="row customBtn">
          <button id="four" className="col-sm-3">4</button>
          <button id="five" className="col-sm-3">5</button>
          <button id="six" className="col-sm-3">6</button>
          <button id="add" className="col-sm-3">+</button>
        </div>
        <div className="row">
          <div className="col-sm-9">
              <div className="row customBtn">
                  <button id="one" className="col-sm-4">1</button>
                  <button id="two" className="col-sm-4">2</button>
                  <button id="three" className="col-sm-4">3</button>
              </div>
              <div className="row customBtn">
                  <button id="zero" className="col-md-8">0</button>
                  <button className="col-md-4">.</button>
              </div>
          </div>
          <div className="col-md-3 customBtn equalContainer">
            <div className="row">
                <button id="equals" className="col-md-12">=</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="container" id="calcMachine">
        <div className="row displayChar" id="display"></div>
        <ButtonPad/>
      </div>
    );
  }
}

export default App;

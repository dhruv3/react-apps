import React, { Component } from 'react';


class ButtonPad extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <React.Fragment>
        <div className="row customBtn">
          <button id="clear" className="col-sm-6" onClick={this.props.clearClick}>AC</button>
          <button id="divide" className="col-sm-3" value="/" onClick={this.props.operatorClick}>/</button>
          <button id="multiply" className="col-sm-3" value="*" onClick={this.props.operatorClick}>X</button>
        </div>
        <div className="row customBtn">
          <button id="seven" className="col-sm-3" value="7" onClick={this.props.numberClick}>7</button>
          <button id="eight" className="col-sm-3" value="8" onClick={this.props.numberClick}>8</button>
          <button id="nine" className="col-sm-3" value="9" onClick={this.props.numberClick}>9</button>
          <button id="subtract" className="col-sm-3" value="-" onClick={this.props.operatorClick}>-</button>
        </div>
        <div className="row customBtn">
          <button id="four" className="col-sm-3" value="4" onClick={this.props.numberClick}>4</button>
          <button id="five" className="col-sm-3" value="5" onClick={this.props.numberClick}>5</button>
          <button id="six" className="col-sm-3" value="6" onClick={this.props.numberClick}>6</button>
          <button id="add" className="col-sm-3" value="+" onClick={this.props.operatorClick}>+</button>
        </div>
        <div className="row">
          <div className="col-sm-9">
              <div className="row customBtn">
                  <button id="one" className="col-sm-4" value="1" onClick={this.props.numberClick}>1</button>
                  <button id="two" className="col-sm-4" value="2" onClick={this.props.numberClick}>2</button>
                  <button id="three" className="col-sm-4" value="3" onClick={this.props.numberClick}>3</button>
              </div>
              <div className="row customBtn">
                  <button id="zero" className="col-sm-8" value="0" onClick={this.props.numberClick}>0</button>
                  <button className="col-sm-4" onClick={this.props.decimalClick}>.</button>
              </div>
          </div>
          <div className="col-sm-3 customBtn equalContainer">
            <div className="row">
                <button id="equals" className="col-sm-12" onClick={this.props.handleEqualClick}>=</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      displayVal: '0',
      formulaVal: ''
    }
    this.handleNumberClick = this.handleNumberClick.bind(this)
    this.handleDecimalClick = this.handleDecimalClick.bind(this)
    this.handleOperatorClick = this.handleOperatorClick.bind(this)
    this.handleClearClick = this.handleClearClick.bind(this)
    this.handleEqualClick = this.handleEqualClick.bind(this)
  }

  checkDisplayDigitLength(){
    this.state.displayVal.length === 18 ? true : false;
  }

  handleNumberClick(e){
    if(this.checkDisplayDigitLength()){
      alert('Digit length exceeded!')
      return;
    }
    let num = e.target.value
    let newVal = '0';
    if(this.state.displayVal === '0' || this.state.displayVal === '+' || this.state.displayVal === '/'
      || this.state.displayVal === '+' || this.state.displayVal === '-'){
      newVal = num
    }
    else{
      newVal = this.state.displayVal + num
    }
    this.setState({
      displayVal: newVal
    })
  }
  handleDecimalClick(e){
    if(this.state.displayVal.includes('.')){
      return;
    }
    let currDisp = this.state.displayVal;
    currDisp += "."
    this.setState({
      displayVal: currDisp
    })
  }
  handleOperatorClick(e){
    let op = e.target.value
    this.setState({
      displayVal: op
    })
  }
  handleClearClick(e){
    this.setState({
      displayVal: '0',
      formulaVal: ''
    })
  }
  handleEqualClick(e){

  }
  render() {
    return (
      <div className="container" id="calcMachine">
        <FormulaScreen val={this.state.formulaVal}/>
        <DisplayScreen val={this.state.displayVal}/>
        <ButtonPad
          numberClick = {this.handleNumberClick}
          decimalClick = {this.handleDecimalClick}
          operatorClick = {this.handleOperatorClick}
          clearClick = {this.handleClearClick}
          equalClick = {this.handleEqualClick}
          />
      </div>
    );
  }
}

class FormulaScreen extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-sm-12" id="formulaScreen">{this.props.val}</div>
      </div>
    )
  }
}

class DisplayScreen extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-sm-12" id="display">{this.props.val}</div>
      </div>
    )
  }
}

export default App;

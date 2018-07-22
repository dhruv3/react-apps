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
                <button id="equals" className="col-sm-12" onClick={this.props.equalClick}>=</button>
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
    let newDisplayVal = '0';
    let newFormulaVal = this.state.formulaVal;
    if(newFormulaVal.includes('=')){
      newFormulaVal = num;
      newDisplayVal = num;
    }
    else{
      newFormulaVal = this.state.formulaVal + num;
      //overwrite the display value if displayed value is: 0 + - * /
      if(this.state.displayVal === '0' || this.state.displayVal === '+' || this.state.displayVal === '/'
        || this.state.displayVal === '*' || this.state.displayVal === '-'){
        newDisplayVal = num
      }
      else{
        newDisplayVal = this.state.displayVal + num
      }
    }
    this.setState({
      displayVal: newDisplayVal,
      formulaVal: newFormulaVal
    })
  }
  handleDecimalClick(e){
    if(this.state.displayVal.includes('.')){
      return;
    }
    let currDisp = this.state.displayVal;
    let newFormulaVal = this.state.formulaVal;
    if( currDisp === '+' || currDisp === '/'
      || currDisp === '*' || currDisp === '-'){
      currDisp = "0.";
      newFormulaVal += "0.";
    }
    else{
      currDisp += ".";
      newFormulaVal += ".";
    }
    //we have evaluated one calculation then pressed equal second timeout
    //preventing bugs like 8*2=16.
    if(newFormulaVal.includes("=")){
      currDisp = "0.";
      newFormulaVal = "0.";
    }
    this.setState({
      displayVal: currDisp,
      formulaVal: newFormulaVal
    })
  }

  handleOperatorClick(e){
    let op = e.target.value
    //check for no number pressed and operator is selected
    //only minus operator can be allowed as an initial operator(first character in formula)
    if(this.state.formulaVal.length === 0 && op != '-'){
      return;
    }
    let currFormulaVal = this.state.formulaVal;
    //if equal is present then extract content after equal sign
    if(currFormulaVal.includes("=")){
      currFormulaVal = currFormulaVal.substr(currFormulaVal.indexOf("=")+1)
    }
    //check to prevent things like: /- or -+ or -*
    let lastFormulaValChar = currFormulaVal.substr(currFormulaVal.length - 1);
    if( lastFormulaValChar === '+' || lastFormulaValChar === '/'
      || lastFormulaValChar === '*' || lastFormulaValChar === '-'){
      currFormulaVal = currFormulaVal.substr(0, currFormulaVal.length - 1);
    }

    let newFormulaVal = currFormulaVal + op;
    this.setState({
      displayVal: op,
      formulaVal: newFormulaVal
    })
  }

  handleClearClick(e){
    this.setState({
      displayVal: '0',
      formulaVal: ''
    })
  }

  handleEqualClick(e){
    let currFormulaVal = this.state.formulaVal;
    //check to handle if two times equal is pressed
    if(currFormulaVal.includes("=")){
      return;
    }
    ////if formula is like: 6+2/8-4+ (there is an operator at the end)
    //we are simply removing the operator
    let lastFormulaValChar = currFormulaVal.substr(currFormulaVal.length - 1);
    if( lastFormulaValChar === '+' || lastFormulaValChar === '/'
      || lastFormulaValChar === '*' || lastFormulaValChar === '-'){
      currFormulaVal = currFormulaVal.substr(0, currFormulaVal.length - 1);
    }
    let out = eval(currFormulaVal)
    this.setState({
      displayVal: ""+out,
      formulaVal: currFormulaVal+"="+out
    })
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

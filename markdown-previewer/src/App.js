import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: "/* add your markdown here */",
      output: "",
      err:""
    }
  }

  update(e){
    let code = e.target.value;
    try{
      this.setState({
        output: window.Babel.transform(code, {presets: ['es2015', 'react']}).code,
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }
  }

  render() {
    let inpStyle = {height: '100%'}
    return (
      <div className="container-fluid">
        <div className="container-fluid header">
          <div className="row">
            <div className="col-lg-6 text-center">Editor</div>
            <div className="col-lg-6 text-center">Previewer</div>
          </div>
        </div>
        <div className="container-fluid inputArea">
          <div className="row" style={inpStyle}>
            <textarea
              className="col-lg-6"
              onChange={this.update.bind(this)}
              defaultValue={this.state.input}
              />
            <pre className="col-lg-6">{this.state.output}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

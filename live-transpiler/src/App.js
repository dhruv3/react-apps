import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: "/* add your jsx here */",
      output: "",
      err:""
    }
  }

  update(){
    this.setState({})
  }

  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div class="container">
          <textarea
            onChange={this.update.bind(this)}
            defaultValue={this.state.input}
            />
          <pre>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default App;

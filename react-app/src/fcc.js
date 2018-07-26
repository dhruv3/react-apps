import React from 'react';

class FCC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }
  // add handleChange() and submitMessage() methods here
  handleChange(e){
    let str = e.target.value;
    this.setState({
      input: str
    })
  }
  submitMessage(){
    this.setState({
      messages: this.state.messages.push(this.state.input)
    })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input onKeyPress={this.handleChange}/>
        <button onClick={this.submitMessage}></button>
        <ul>{
          (this.state.messages.length === 0)
          ? <li></li>
          : this.state.messages.map(elem => <li>elem</li>)}</ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
export {FCC}

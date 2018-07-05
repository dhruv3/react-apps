import React from 'react';

class ExtendChildren extends React.Component{
  render(){
    return(
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    )
  }
}

class Buttons extends React.Component{
  constructor(){
    super();
    this.state = {selected: 'None'}
  }

  render(){
    let items = this.props.children;
    return(
      <div>
        <h3>You have selected: {this.props.selected}</h3>
        {items}
      </div>
    )
  }
}

export {ExtendChildren}

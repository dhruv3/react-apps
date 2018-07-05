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

  selectedItem(val){
    this.setState({selected: val})
  }

  render(){
    //props.children isn't the actual children. You can only read them
    //We create new elements using cloneElement. We pass our child and how we want to extend that
    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectedItem.bind(this, child.props.value)
      })
    let items = React.Children.map(this.props.children, fn)
    return(
      <div>
        <h3>You have selected: {this.state.selected}</h3>
        {items}
      </div>
    )
  }
}

export {ExtendChildren}

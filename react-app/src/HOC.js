import React from 'react';

//Higher order components will allow you to apply behaviors to multiple React components.
//This can be done by passing the state and any functions into components as props.
const HOC = (InnerComponent) => class extends React.Component{
  constructor(){
    super()
    this.update = this.update.bind(this)
    this.state = {count: 0}
  }
  update(){
    this.setState({count: this.state.count + 1})
  }
  //you could spread state or do: count = this.state.count
  //you need to pass 'update' as prop so you can refer it in Button and Label component
  render(){
    return(
      <InnerComponent
      {...this.props}
      {...this.state}
      update={this.update}
      />
    )
  }
}

class HOCClass extends React.Component{
  render(){
    return(
      <div>
        <Button>button</Button>
        <hr/>
        <LabelHOC>label</LabelHOC>
      </div>
    )
  }
}

//functional component: this not used in stateless component
const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends React.Component{
  render(){
    return(
      <label onMouseOver={this.props.update}>
        {this.props.children} - {this.props.count}
      </label>
    )
  }
}

const LabelHOC = HOC(Label)

export {HOCClass}

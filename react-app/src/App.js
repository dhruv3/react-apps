import React from 'react';

const App = () => <h3>Something Something</h3>

class ClassApp extends React.Component{
  constructor(){
    //Calling super is going to give the keyword "this" the context within our component,
    //rather than its parent class React.Component.
    super()
    //Props are a collection of values that are meant to be passed into our component as static value,
    //Props are not meant to be changed by our component.
    //State represents a collection of values that is meant to be managed, as well as updated by our component.
    this.state = {
      txt: "No Intro"
    }
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return(
      <div>
        <input onChange = {this.update.bind(this)}/>
        <h1>{this.state.txt}</h1>
      </div>

    )
  }
}

export default App
export {ClassApp}

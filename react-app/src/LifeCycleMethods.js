import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
  constructor(){
    super();

  }
  render(){

  }
}

class Wrapper extends React.Component{
  mount(){

  }
  mount(){

  }
  render(){
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id='appElem'></div>
      </div>
    )
  }
}

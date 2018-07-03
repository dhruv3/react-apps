import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
  constructor(){
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this)
  }
  //This is going to fire off right before component is mounted into the DOM, and it just lets us know that it's guaranteed to make it into the DOM.
  componentWillMount(){
    console.log('component will mount')
  }
  update(){
    this.setState({val: (this.state.val+1)})
  }
  render(){
    console.log('render')
    return(
      <button onClick={this.update}>{this.state.val}</button>
    )
  }
  //This is going to fire off once our component has actually been mounted to the DOM.
  componentDidMount(){
    console.log('component did mount')
  }
  //This is going to fire off when our component is about to leave the DOM.
  componentWillUnmount(){
    console.log('component will unmount')
  }
}

class Wrapper extends React.Component{
  mount(){
    ReactDOM.render(<App/>, document.getElementById('appElem'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('appElem'))
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

export {Wrapper}

import React from 'react';
import './App.css';
import ListElem from './ListElem';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    };
    this.textarea = React.createRef();
  }
  
  updateData(){
    const newPost = this.textarea.current.value;
    const newArr = [newPost, ...this.state.data];
    this.setState({data: newArr});
    this.textarea.current.value = "";
  }

  removeItem(idx){
    const newArr = this.state.data;
    newArr.splice(idx, 1);
    this.setState({data: newArr});
  }
  
  render(){
    return (
      <div className="App">
        <h1>List It!</h1>
        <div>
          <textarea ref={this.textarea}/>
          <button onClick={this.updateData.bind(this)}>Submit</button>
        </div>
        {this.state.data.map((elem, idx) => <ListElem key={idx*Math.random()} data={elem} removeItem={this.removeItem.bind(this, idx)}/>)}
      </div>
    )
  }
}

export default App;

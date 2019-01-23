import React, { Component } from 'react';
import DisplayContainer from './displayContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifContent: []
    }
  }

  getGIFS(){
    let promiseArr = [];
    promiseArr.push(fetch("https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/trending?api_key=IXXo1JjE4XmyQsC4WfoocG9HqmuxpZpE&limit=25&rating=G")
    .then(res => res.json())
    .then(function(items){
      debugger;
    }))
    


  }
  render() {
    return (
      <div className="container">
        <div className="heading">Trending GIFs</div>
        <div className="buttonContainer">
          <button onClick={this.getGIFS}>Load GIFs</button>
          <button>Randomize Order</button>
          <button>Select One at Random</button>
          <button>Clear ALL</button>
        </div>
        <DisplayContainer/>
      </div>
    );
  }
}

export default App;

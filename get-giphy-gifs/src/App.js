import React, { Component } from 'react';
import DisplayContainer from './displayContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifContent: []
    }
    this.getGIFS = this.getGIFS.bind(this);
    this.clearGIFS = this.clearGIFS.bind(this);
  }

  clearGIFS(){
    this.setState({gifContent: []})
  }
  
  getGIFS(){
    const promiseArr = [];
    var that = this;
    fetch("https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/trending?api_key=IXXo1JjE4XmyQsC4WfoocG9HqmuxpZpE&limit=25&rating=G")
      .then(res => res.json())
        .then(function(items){
                items.data.map((elem) => promiseArr.push(elem.images.downsized_medium))
                that.setState({gifContent: promiseArr})
              }
            )
  }
  render() {
    return (
      <div className="container">
        <div className="heading">Trending GIFs</div>
        <div className="buttonContainer">
          <button onClick={this.getGIFS}>Load GIFs</button>
          <button>Randomize Order</button>
          <button>Select One at Random</button>
          <button onClick={this.clearGIFS}>Clear ALL</button>
        </div>
        <DisplayContainer content={this.state.gifContent}/>
      </div>
    );
  }
}

export default App;

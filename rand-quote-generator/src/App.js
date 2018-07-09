import React, { Component } from 'react';

class Author extends Component{
  render(){
    return(
      <div id="author">

      </div>
    )
  }
}

class Text extends Component{
  render(){
    return(
      <div id="text">

      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div id="quote-box">
        <Text/>
        <Author/>
        <div className="buttons">
          <span id="tweet-quote">
            <a href="twitter.com/intent/tweet">Tweet</a>
          </span>
          <button id="new-quote">New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;

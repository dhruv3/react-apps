import React, { Component } from 'react';

class Author extends Component{
  render(){
    return(
      <div id="author" className="col-lg-12">
         - {this.props.author}
      </div>
    )
  }
}

class Text extends Component{
  render(){
    return(
      <div id="text" className="col-lg-12">
        <i class="fa fa-quote-left"></i>
        {this.props.text}
      </div>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {text: "", author: ""}
    this.update = this.update.bind(this)
    this.update();
  }
  update(){
    let self = this;
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => response.json())
        .then(function(fromResolve){
          let selectedIdx = Math.floor(Math.random() * fromResolve['quotes'].length);
          self.setState({text: fromResolve['quotes'][selectedIdx]['quote'], author: fromResolve['quotes'][selectedIdx]['author']});
        })
  }
  render() {
    return (
      <div id="quote-box" className="container">
        <Text text={this.state.text}/>
        <Author author={this.state.author}/>
        <div className="buttons col-lg-12">
          <span className="btn btn-primary" id="tweet-quote">
            <a className="text-white" href="twitter.com/intent/tweet">Tweet</a>
          </span>
          <button className="btn btn-success" id="new-quote" onClick={this.update}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;

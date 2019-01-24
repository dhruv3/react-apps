import React, { Component } from 'react';

class DisplayContainer extends Component {
  constructor(props){
    super(props);
    this.state ={
      content: []
    };
  }

  componentWillReceiveProps(props){
    this.setState({content: props.content})
  }
  render() {
    return (
      <div className="displayContainer">
      {
        this.state.content.map((elem, index) => {
          return (
            <div key={index} className="listItem">
              <img src={elem.url}/>
            </div>
          )
        }) 
      }
      </div>
    );
  }
}

export default DisplayContainer;
import React, { Component } from 'react';

class CurrentSpaceCowboys extends Component {
  constructor(props){
    super(props);
    this.state ={
      content: {}
    };
  }

  componentWillReceiveProps(props){
    if(props.content != undefined)
      this.setState({content: props.content})
  }

  render() {
    return (
      <div className="currentSpaceCowboysContainer">
        {<h3>At this moment there are {this.state.content.number != undefined ? this.state.content.number : 0} people in space. They are:</h3>}
        {
          this.state.content.people != undefined ? this.state.content.people.map((elem, index) => {
            return (
              <div key={index} className="listItem">
                {elem.name}, craft: {elem.craft}
              </div>
            )
          }) : "" 
        }
      </div>
    );
  }
}

export default CurrentSpaceCowboys;

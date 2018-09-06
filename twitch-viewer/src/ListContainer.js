import React, { Component } from 'react';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/freecodecamp/")
      .then(res => res.json())
      .then(
        (result) => {
          debugger;
        },
        (error) => {
          debugger;
        }
      )
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default ListContainer;

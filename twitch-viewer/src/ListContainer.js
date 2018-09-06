import React, { Component } from 'react';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    let channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","admiralbulldog","comster404"];
    fetch("https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2/")
      .then(res => res.json())
      .then(
        (result) => {
          // debugger;
        },
        (error) => {
          // debugger;
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

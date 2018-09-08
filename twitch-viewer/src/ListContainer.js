import React, { Component } from 'react';

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      content: []
    }
  }
  componentDidMount() {
    const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx"];
    const promiseArr = []
    channels.forEach((channel, index) => {
      promiseArr.push(fetch(`https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/${channel}/`)
        .then(res => res.json()))
    })
    //https://medium.com/@wisecobbler/using-the-javascript-fetch-api-f92c756340f0
    Promise.all(promiseArr).then((vals) =>{
      const items = []
      vals.map(val => {
        const tempItem = {}
        tempItem["logo"] = val.logo;
        tempItem["display_name"] = val.display_name;
        tempItem["status"] = val.status;
        items.push(tempItem)
      })
      return items;
    }).then((items) => this.setState({
                    content: items
                  })
                )
  }
  render() {
    return (
      <div className="listContainer">
      {
        this.state.content.map(elem => {
          return (
            <div className="listItem" key={elem.display_name}>
              <div className="logo"><img src={elem.logo}/></div>
              <div className="display_name">{elem.display_name}</div>
              <div className="status">{elem.status}</div>
            </div>
          )
        })
      }
      </div>
    );
  }
}

export default ListContainer;

import React, { Component } from 'react';

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      content: []
    }
    this.streamRefs = []
    this.checkStreamState = this.checkStreamState.bind(this)
  }

  componentDidMount() {
    const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx"];
    const promiseArr = []
    const promiseStreamStateArr = []
    channels.forEach((channel, index) => {
      promiseArr.push(fetch(`https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/${channel}/`)
        .then(res => res.json()))

      promiseStreamStateArr.push(fetch(`https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/${channel}/`)
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
        tempItem["url"] = val.url;
        tempItem["name"] = val.name;
        items.push(tempItem)
      })
      return items;
    }).then((items) => this.setState({
                    content: items
                  })
                )
      this.checkStreamState(promiseStreamStateArr)
  }

  checkStreamState(promiseStreamStateArr){
    //Check about this later
    let self = this;
    Promise.all(promiseStreamStateArr).then((vals) => {
      for(let i = 0; i < vals.length; i++){
        if(vals[i].stream != null){
          self.streamRefs[i].classList.add("online");
        }
        else{
          self.streamRefs[i].classList.add("offline");
        }
      }
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currSelector != null){
      if(nextProps.currSelector === "all"){
        this.streamRefs.map(elem => {
          elem.classList.remove("noDisplay");
          elem.classList.add("display");
        })
      }
      else if(nextProps.currSelector === "online"){
        this.streamRefs.map(elem => {
          if(elem.classList.contains("online")){
              elem.classList.remove("noDisplay");
              elem.classList.add("display");
          }
          else{
            elem.classList.add("noDisplay");
            elem.classList.remove("display");
          }
        })
      }
      else if(nextProps.currSelector === "offline"){
        this.streamRefs.map(elem => {
          if(elem.classList.contains("offline")){
              elem.classList.remove("noDisplay");
              elem.classList.add("display");
          }
          else{
            elem.classList.add("noDisplay");
            elem.classList.remove("display");
          }
        })
      }
    }
  }

  render() {
    return (
      <div className="listContainer">
      {
        this.state.content.map((elem, index) => {
          return (
            <div className="listItem display" ref={(input) => {this.streamRefs[index] = input }} id={elem.name} key={elem.name}>
              <div className="logo"><img src={elem.logo}/></div>
              <div className="display_name"><a href={elem.url}>{elem.display_name}</a></div>
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

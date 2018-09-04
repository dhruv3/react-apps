import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      type: "",
      icon: ""
    };
  }

  fetchWeather(api){
    fetch(api)
    .then(res => res.json())
      .then(response => {
        this.setState({
          location: response.name,
          type: response.weather[0]["main"],
          icon: response.weather[0]["icon"]
        })
      })
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      const api = `https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      this.fetchWeather(api);
    });
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.location}</h1>
        <div><img src={this.state.icon}/></div>
        <p>{this.state.type}</p>
      </div>
    );
  }
}

export default App;

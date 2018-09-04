import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      type: "",
      icon: "",
      temp: ""
    };
  }

  fetchWeather(api){
    fetch(api)
    .then(res => res.json())
      .then(response => {
        this.setState({
          location: response.name,
          type: response.weather[0]["main"],
          icon: response.weather[0]["icon"],
          temp: response["main"]["temp"]
        })
      })
  }

  componentDidMount(){
    const location = window.navigator && window.navigator.geolocation
    location.getCurrentPosition((position) => {
      const api = `https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      this.fetchWeather(api);
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Weather App</h3>
        <h1>{this.state.location}</h1>
        <div className="temp">{this.state.temp}<span id="tempUnit"> C</span></div>
        <div><img src={this.state.icon}/></div>
        <p>{this.state.type}</p>
      </div>
    );
  }
}

export default App;

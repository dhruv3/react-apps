import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Default Location",
      type: "Cloudy",
      icon: "https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F04d.png?1499366020964",
      temp: "25",
      unit: "C"
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

  changeUnit(){
    if(this.state.unit === "C"){
      this.setState({
        temp: (parseFloat(this.state.temp*9/5)) + 32,
        unit: "F"
      })
    }
    else{
      this.setState({
        temp: parseFloat((this.state.temp - 32)*5/9),
        unit: "C"
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h3>Weather App</h3>
        <h1>{this.state.location}</h1>
        <div className="temp">
          <span id="tempVal">{this.state.temp}</span>
          <span id="tempUnit" onClick={this.changeUnit.bind(this)}>{this.state.unit}</span>
        </div>
        <div><img src={this.state.icon}/></div>
        <p>{this.state.type}</p>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Form from "./Form";
import Body from "./Body";

const API_KEY = "a4753a572cc900ccbb892fcbffd896e6";

class ApiCall extends Component {
  state = {
    city: "",
    country: "",
    temperature: "",
    humidity: "",
    description: "",
    error: false,
    geolocation: true,
    unit: "metric",
    wind: "",
    sunrise: "",
    sunset: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const unit = this.state.unit;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=${unit}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.hasOwnProperty("message")) {
          this.setState({
            error: true
          });
        } else if (city === "" || country === "") {
          this.setState({
            error: true
          });
        } else {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: false,
                geolocation: true,
                wind: data.wind.speed,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset
              });
            } 
      });
  };

  handleLocation = e => {
    e.preventDefault();
    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: false,
            geolocation: true,
            wind: data.wind.speed,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
          });
        });
    };

    const error = () => {
      console.log("shit dont work yo");
      this.setState({
        geolocation: false
      });
    };

    if (!navigator.geolocation) {
      console.log("Geolocation not supported by your browser");
      this.setState({
        geolocation: false
      });
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  render() {
    return (
      <div>
        <Form
          handleLocation={this.handleLocation}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          data={this.state}
        />
        <Body data={this.state} />
      </div>
    );
  }
}

export default ApiCall;

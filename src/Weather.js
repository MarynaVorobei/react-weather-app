import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Loader from "./Loader";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "e5ea83abd51b392f1217843d2e96ea3e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleLocation(event) {
    setCity(event.target.value);
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  function handlePosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = "e5ea83abd51b392f1217843d2e96ea3e";
    const unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-7">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control shadow-sm rounded"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-light w-100 shadow-sm rounded"
              />
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-light w-100 shadow-sm rounded"
                onClick={handleLocation}
              >
                My Location
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
    <Loader />
    );
  }
}

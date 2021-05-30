import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function SearchEngine() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [condition, setCondition] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [status, setStatus] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function updateWeather(response) {
    let iconId = response.data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    setIcon(iconUrl);
    setTemperature(response.data.main.temp);
    setCondition(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setStatus("clicked");
  }

  function displayWeather(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "01bc9da346c1591ec92736f4f11269b6";
      let apiUnits = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnits}`;
      axios.get(apiUrl).then(updateWeather);
    } else {
    }
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={displayWeather}>
        <input
          type="search"
          placeholder="Search for a city"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <Weather
        city={city}
        temperature={Math.round(temperature)}
        condition={condition}
        humidity={humidity}
        wind={Math.round(wind * 3.6)}
        icon={icon}
        status={status}
      />
    </div>
  );
}

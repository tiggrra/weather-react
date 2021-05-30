import React from "react";

export default function Weather(props) {
  if (props.status === "clicked" && props.city !== null) {
    return (
      <div>
        <ul>
          <li>Temperature: {props.temperature}°C</li>
          <li>Condition: {props.condition}</li>
          <li>Humidity: {props.humidity}%</li>
          <li>Wind: {props.wind} km/h</li>
          <li>
            <img src={props.icon} alt="weather-icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

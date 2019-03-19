import React from "react";

export default function Body(props) {
  const {
    city,
    country,
    temperature,
    humidity,
    description,
    error,
    geolocation,
    wind,
    sunrise,
    sunset
  } = props.data;

  const rise = new Date(sunrise * 1000);
  const set = new Date(sunset * 1000);

  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (error) {
    return <h4>Please enter the proper values...</h4>;
  } else if (!geolocation) {
    return <h4>Geolocation not available...</h4>;
  } else if (city || country) {
    return (
      <div>
        <p>
          Location: {city}, {country}
        </p>
        <p>Temperature: {temperature}&#176;</p>
        <p>Description: {jsUcfirst(description)}</p>
        <p>Sunrise: {rise.toLocaleTimeString()}</p>
        <p>Sunset: {set.toLocaleTimeString()}</p>
        <p>Humidity: {humidity}</p>
        <p>Wind Speed: {wind}</p>
      </div>
    );
  }
  return <h3>Make a search!</h3>;
}

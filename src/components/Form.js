import React from "react";

export default function Form(props) {
  return (
    <div className="form-group">
      <form onSubmit={props.handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          name="city"
          placeholder="City..."
        />
        <input
          className="form-control mb-3"
          type="text"
          name="country"
          placeholder="Country..."
        />
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="unit"
            value="metric"
            checked={props.data.unit === "metric"}
            onChange={props.handleChange}
          />{" "}
          <span>Celcius</span>
          <br />
          <input
            className="form-check-input"
            type="radio"
            name="unit"
            value="imperial"
            checked={props.data.unit === "imperial"}
            onChange={props.handleChange}
          />{" "}
          <span>Farenheit</span>
        </div>
        <br />
        <button className="btn btn-light mr-1">Search</button>
        <button
          style={{ textDecoration: "underline" }}
          className="btn btn-light"
          onClick={props.handleLocation}
        >
          Current location
        </button>
      </form>
    </div>
  );
}

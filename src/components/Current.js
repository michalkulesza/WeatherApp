import React, { Component } from "react";
import Icon from "./Icon";
import "./Current.css";
import "../weather-icons.css";

class Current extends Component {
  render() {
    return (
      <div className="current-wrapper">
        <div className="current-container">
          <div className="current-weather-container">
            <div className="current-weather-icon">
              <div className="current-icon">
                <Icon name={this.props.data.currently.icon} />
              </div>
            </div>
            <div className="current-info-container">
              <div className="current-city">{this.props.city}</div>
              <div className="current-temperature">
                {Math.round(this.props.data.currently.temperature)}C
              </div>
            </div>
          </div>
          <div className="current-stats-container">
            <p>
              High{" "}
              <span>
                {Math.round(this.props.data.daily.data[0].temperatureHigh)}C
              </span>
            </p>
            <p>
              Low{" "}
              <span>
                {Math.round(this.props.data.daily.data[0].temperatureMin)}C
              </span>
            </p>
            <p>
              Pressure{" "}
              <span>{Math.round(this.props.data.currently.pressure)}hPa</span>
            </p>
            <p>
              Wind{" "}
              <span>
                {Number(this.props.data.currently.windSpeed.toFixed(1))}kmh
              </span>
            </p>
          </div>
          <div className="current-desc-container">
            <p>{this.props.data.daily.summary}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Current;

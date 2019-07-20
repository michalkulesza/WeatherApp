import React, { Component } from "react";
import Icon from "./Icon";
import "./Card.css";

class Card extends Component {
  render() {
    const precipLowerCase = this.props.icon
      .replace(/-/g, " ")
      .replace(/day/g, "");
    const precip =
      precipLowerCase.charAt(0).toUpperCase() + precipLowerCase.slice(1);

    return (
      <div className="card-container">
        <div className="card-info">
          <div className="card-temperature">{Math.round(this.props.high)}C</div>
          <div className="card-day">{this.props.day}</div>
          <div className="card-precip">{precip}</div>
          <div className="card-stats">
            <i className="wi wi-thermometer" /> {Math.round(this.props.high)}C{" "}
            <i className="wi wi-thermometer-exterior" />
            {Math.round(this.props.low)}C
          </div>
        </div>
        <div className="card-icon">
          <Icon name={this.props.icon} />
        </div>
      </div>
    );
  }
}

export default Card;

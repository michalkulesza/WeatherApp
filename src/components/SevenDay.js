import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./SevenDay.css";
import Current from "./Current";
import Card from "./Card";

const getDay = index => {
  const date = new Date();
  date.setDate(date.getDate() + index);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return index === 0 ? "Tommorow" : days[date.getDay()];
};

class SevenDay extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  render() {
    const days = this.props.data.daily.data.slice(1, 7).map((day, index) => {
      return (
        <Card
          high={day.temperatureHigh}
          low={day.temperatureMin}
          icon={day.icon}
          day={getDay(index)}
          key={day.sunriseTime}
        />
      );
    });

    return (
      <Fade when={this.state.isLoaded}>
        <div className="sevenday-wrapper">
          <Current city={this.props.name} data={this.props.data} />
          <div className="card-wrapper">
            <div className="cards-container">{days}</div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default SevenDay;

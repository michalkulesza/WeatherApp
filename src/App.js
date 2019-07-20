// TO DO:
// - Use componentDidMount to handle fetch, render is pure to render UI
// - Animations

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Flip from "react-reveal/Flip";
import "./App.css";
import Search from "./components/Search";
import SevenDay from "./components/SevenDay";

const geoKey = "0726efc741ec4b13bba3cc05419adc86";
const darkKey = "bf63b47230363554f05ac40355a92f84";
const fixCORS = "https://cors-anywhere.herokuapp.com/";

class App extends Component {
  state = {
    name: "undefined",
    latitude: undefined,
    longitude: undefined,
    isLoaded: false,
    isSearchLoading: false,
    isSearchAnim: false,
    data: []
  };

  searchAnim = () => {
    this.setState({ isSearchAnim: true });
  };

  getWeather = async () => {
    await fetch(
      `${fixCORS}https://api.darksky.net/forecast/${darkKey}/${
        this.state.latitude
      },${this.state.longitude}?exclude=hourly,minutely,flags&units=si`
    )
      .then(res => res.json())
      .then(json => this.setState({ data: json }));

    this.setState({ isSearchAnim: false });
    setTimeout(() => {
      this.setState({ isSearchLoading: false });
      this.setState({ isLoaded: true });
    }, 1000);
  };

  getCity = async e => {
    e.preventDefault();

    if (e.target.elements.city.value !== "") {
      this.setState({ isSearchLoading: true });
      const city = e.target.elements.city.value;
      const api_call = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${geoKey}`
      );
      const data = await api_call.json();
      if (data.total_results !== 0) {
        this.setState({
          name: `${
            data.results[0].components.city !== undefined
              ? data.results[0].components.city
              : data.results[0].components.county !== undefined
              ? data.results[0].components.county
              : data.results[0].components.state
          }, ${data.results[0].components.country_code.toUpperCase()}`,
          latitude: data.results[0].geometry.lat,
          longitude: data.results[0].geometry.lng
        });
        this.getWeather();
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props =>
                this.state.isLoaded ? (
                  <SevenDay name={this.state.name} data={this.state.data} />
                ) : (
                  <Flip top opposite when={this.state.isSearchAnim}>
                    <Search
                      getCity={this.getCity}
                      isLoading={this.state.isSearchLoading}
                      searchAnim={this.searchAnim}
                    />
                  </Flip>
                )
              }
            />
            <Route path="/sevenday" component={SevenDay} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

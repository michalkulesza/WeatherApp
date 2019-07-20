import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  componentDidMount() {
    this.props.searchAnim();
  }

  render() {
    return (
      <div className="city-wrapper">
        <div className="input-field-wrapper">
          <form onSubmit={this.props.getCity}>
            <input
              type="text"
              className="input-city"
              name="city"
              placeholder="Please enter a city name"
            />
            <button className="button-city">
              {this.props.isLoading ? (
                <div className="button-city-loader" />
              ) : (
                <p>OK</p>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
